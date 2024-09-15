import { Arrays, FullArraySpec, TypedArrayConstructor } from 'twgl.js';
import { z } from 'zod';
import gltfSchema from './gltf.schema';

type Gltf = z.infer<typeof gltfSchema>;

/**
 * Loads a {@link https://github.com/KhronosGroup/glTF | glTF} file asynchronously.
 * @experimental
 * @param gl The rendering context.
 * @param url The URL to load the glTF file from.
 * @returns An array of meshes.
 */
export async function loadGltf(
  gl: WebGL2RenderingContext,
  url: string | URL
): Promise<Arrays[]> {
  const json = await load(url, 'json');
  const gltf: Gltf = gltfSchema.parse(json);
  if (!isHasMeshesAccessorsBufferViewsAndBuffers(gltf)) {
    throw new Error(
      'Error loading the gltf file. At least the following set of properties is expected to be present: ["meshes", "accessors", "bufferViews", "buffers"]'
    );
  }
  const bufferViews = new Array<TypedArray>(gltf.bufferViews.length);
  const buffers = new Array<ArrayBuffer>(gltf.buffers.length);
  const baseURL = new URL(url, location.href);
  const arrayOfArrays: Arrays[] = [];
  for (const mesh of gltf.meshes) {
    for (const primitive of mesh.primitives) {
      const arrays: Arrays = {};
      for (const [attributeName, accessorIndex] of Object.entries(
        primitive.attributes
      )) {
        arrays[attributeName] = await accessorToFullArraySpec(
          gl,
          gltf,
          accessorIndex,
          bufferViews,
          buffers,
          baseURL
        );
      }
      if (primitive.indices !== undefined) {
        arrays.indices = await accessorToFullArraySpec(
          gl,
          gltf,
          primitive.indices,
          bufferViews,
          buffers,
          baseURL
        );
      }
      arrayOfArrays.push(arrays);
    }
  }
  return arrayOfArrays;
}

interface HasMeshesAccessorsBufferViewsAndBuffers {
  meshes: NonNullable<Gltf['meshes']>;
  accessors: NonNullable<Gltf['accessors']>;
  bufferViews: NonNullable<Gltf['bufferViews']>;
  buffers: NonNullable<Gltf['buffers']>;
}

function isHasMeshesAccessorsBufferViewsAndBuffers(
  gltf: Gltf
): gltf is Gltf & HasMeshesAccessorsBufferViewsAndBuffers {
  return (
    gltf.meshes !== undefined &&
    gltf.accessors !== undefined &&
    gltf.bufferViews !== undefined &&
    gltf.buffers !== undefined
  );
}

async function accessorToFullArraySpec(
  gl: WebGL2RenderingContext,
  gltf: Gltf & HasMeshesAccessorsBufferViewsAndBuffers,
  accessorIndex: number,
  bufferViews: TypedArray[],
  buffers: ArrayBuffer[],
  baseURL: URL
): Promise<FullArraySpec> {
  const accessor = gltf.accessors[accessorIndex];
  if (accessor.bufferView === undefined) {
    throw new Error('No bufferView');
  }
  if (bufferViews[accessor.bufferView] === undefined) {
    const bufferView = gltf.bufferViews[accessor.bufferView];
    if (buffers[bufferView.buffer] === undefined) {
      const buffer = gltf.buffers[bufferView.buffer];
      if (buffer.uri === undefined) {
        throw new Error('No uri');
      }
      const url = new URL(buffer.uri, baseURL.href);
      buffers[bufferView.buffer] = await load(url, 'arrayBuffer');
    }
    const buffer = buffers[bufferView.buffer];
    const TypedArray = glTypeToTypedArray(gl, accessor.componentType);
    bufferViews[accessor.bufferView] = new TypedArray(
      buffer,
      bufferView.byteOffset + (accessor.byteOffset ?? 0),
      accessor.count * accessorTypeToNumComponents(accessor.type)
    );
  }

  return {
    numComponents: accessorTypeToNumComponents(accessor.type),
    data: bufferViews[accessor.bufferView],
  };
}

async function load(
  url: RequestInfo | URL,
  kind: 'arrayBuffer'
): Promise<ArrayBuffer>;
async function load(url: RequestInfo | URL, kind: 'blob'): Promise<Blob>;
async function load(
  url: RequestInfo | URL,
  kind: 'formData'
): Promise<FormData>;
async function load(url: RequestInfo | URL, kind: 'json'): Promise<any>;
async function load(url: RequestInfo | URL, kind: 'text'): Promise<string>;
async function load(
  url: RequestInfo | URL,
  kind: 'arrayBuffer' | 'blob' | 'formData' | 'json' | 'text'
) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Could not load ${url}`);
  }

  return response[kind]();
}

function accessorTypeToNumComponents(accessorType: string): number {
  switch (accessorType) {
    case 'SCALAR':
      return 1;
    case 'VEC2':
      return 2;
    case 'VEC3':
      return 3;
    case 'VEC4':
      return 4;
    case 'MAT2':
      return 4;
    case 'MAT3':
      return 9;
    case 'MAT4':
      return 16;
    default:
      throw new Error('Unknown accessor type');
  }
}

function glTypeToTypedArray(
  gl: WebGL2RenderingContext,
  componentType: number
): TypedArrayConstructor {
  switch (componentType) {
    case gl.BYTE:
      return Int8Array;
    case gl.UNSIGNED_BYTE:
      return Uint8Array;
    case gl.SHORT:
      return Int16Array;
    case gl.UNSIGNED_SHORT:
      return Uint16Array;
    case gl.INT:
      return Int32Array;
    case gl.UNSIGNED_INT:
      return Uint32Array;
    case gl.FLOAT:
      return Float32Array;
    default:
      throw new Error('Unknown component type');
  }
}

type TypedArray =
  | Int8Array
  | Uint8Array
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array;
