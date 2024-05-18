import { z } from 'zod';

export default z
  .object({
    extensionsUsed: z
      .array(z.string())
      .min(1)
      .describe('Names of glTF extensions used in this asset.')
      .optional(),
    extensionsRequired: z
      .array(z.string())
      .min(1)
      .describe(
        'Names of glTF extensions required to properly load this asset.'
      )
      .optional(),
    accessors: z
      .array(
        z
          .object({
            bufferView: z
              .number()
              .int()
              .gte(0)
              .describe('The index of the bufferView.')
              .optional(),
            byteOffset: z
              .number()
              .int()
              .gte(0)
              .describe(
                'The offset relative to the start of the buffer view in bytes.'
              )
              .default(0),
            componentType: z
              .union([
                z.literal(5120).describe('BYTE'),
                z.literal(5121).describe('UNSIGNED_BYTE'),
                z.literal(5122).describe('SHORT'),
                z.literal(5123).describe('UNSIGNED_SHORT'),
                z.literal(5125).describe('UNSIGNED_INT'),
                z.literal(5126).describe('FLOAT'),
                z.number().int(),
              ])
              .describe("The datatype of the accessor's components."),
            normalized: z
              .boolean()
              .describe(
                'Specifies whether integer data values are normalized before usage.'
              )
              .default(false),
            count: z
              .number()
              .int()
              .gte(1)
              .describe('The number of elements referenced by this accessor.'),
            type: z
              .union([
                z.literal('SCALAR'),
                z.literal('VEC2'),
                z.literal('VEC3'),
                z.literal('VEC4'),
                z.literal('MAT2'),
                z.literal('MAT3'),
                z.literal('MAT4'),
                z.string(),
              ])
              .describe(
                "Specifies if the accessor's elements are scalars, vectors, or matrices."
              ),
            max: z
              .array(z.number())
              .min(1)
              .max(16)
              .describe('Maximum value of each component in this accessor.')
              .optional(),
            min: z
              .array(z.number())
              .min(1)
              .max(16)
              .describe('Minimum value of each component in this accessor.')
              .optional(),
            sparse: z
              .object({
                count: z
                  .number()
                  .int()
                  .gte(1)
                  .describe(
                    'Number of deviating accessor values stored in the sparse array.'
                  ),
                indices: z
                  .object({
                    bufferView: z
                      .number()
                      .int()
                      .gte(0)
                      .describe(
                        'The index of the buffer view with sparse indices. The referenced buffer view **MUST NOT** have its `target` or `byteStride` properties defined. The buffer view and the optional `byteOffset` **MUST** be aligned to the `componentType` byte length.'
                      ),
                    byteOffset: z
                      .number()
                      .int()
                      .gte(0)
                      .describe(
                        'The offset relative to the start of the buffer view in bytes.'
                      )
                      .default(0),
                    componentType: z
                      .union([
                        z.literal(5121).describe('UNSIGNED_BYTE'),
                        z.literal(5123).describe('UNSIGNED_SHORT'),
                        z.literal(5125).describe('UNSIGNED_INT'),
                        z.number().int(),
                      ])
                      .describe('The indices data type.'),
                    extensions: z.any().optional(),
                    extras: z.any().optional(),
                  })
                  .and(
                    z.object({
                      extensions: z
                        .object({})
                        .catchall(z.record(z.any()))
                        .describe(
                          'JSON object with extension-specific objects.'
                        )
                        .optional(),
                      extras: z
                        .any()
                        .describe('Application-specific data.')
                        .optional(),
                    })
                  )
                  .describe(
                    'An object pointing to a buffer view containing the indices of deviating accessor values. The number of indices is equal to `accessor.sparse.count`. Indices **MUST** strictly increase.'
                  )
                  .describe(
                    'An object pointing to a buffer view containing the indices of deviating accessor values. The number of indices is equal to `count`. Indices **MUST** strictly increase.'
                  ),
                values: z
                  .object({
                    bufferView: z
                      .number()
                      .int()
                      .gte(0)
                      .describe(
                        'The index of the bufferView with sparse values. The referenced buffer view **MUST NOT** have its `target` or `byteStride` properties defined.'
                      ),
                    byteOffset: z
                      .number()
                      .int()
                      .gte(0)
                      .describe(
                        'The offset relative to the start of the bufferView in bytes.'
                      )
                      .default(0),
                    extensions: z.any().optional(),
                    extras: z.any().optional(),
                  })
                  .and(
                    z.object({
                      extensions: z
                        .object({})
                        .catchall(z.record(z.any()))
                        .describe(
                          'JSON object with extension-specific objects.'
                        )
                        .optional(),
                      extras: z
                        .any()
                        .describe('Application-specific data.')
                        .optional(),
                    })
                  )
                  .describe(
                    'An object pointing to a buffer view containing the deviating accessor values. The number of elements is equal to `accessor.sparse.count` times number of components. The elements have the same component type as the base accessor. The elements are tightly packed. Data **MUST** be aligned following the same rules as the base accessor.'
                  )
                  .describe(
                    'An object pointing to a buffer view containing the deviating accessor values.'
                  ),
                extensions: z.any().optional(),
                extras: z.any().optional(),
              })
              .and(
                z.object({
                  extensions: z
                    .object({})
                    .catchall(z.record(z.any()))
                    .describe('JSON object with extension-specific objects.')
                    .optional(),
                  extras: z
                    .any()
                    .describe('Application-specific data.')
                    .optional(),
                })
              )
              .describe(
                'Sparse storage of accessor values that deviate from their initialization value.'
              )
              .describe(
                'Sparse storage of elements that deviate from their initialization value.'
              )
              .optional(),
            name: z.any().optional(),
            extensions: z.any().optional(),
            extras: z.any().optional(),
          })
          .and(
            z
              .object({
                name: z
                  .string()
                  .describe('The user-defined name of this object.')
                  .optional(),
              })
              .and(
                z.object({
                  extensions: z
                    .object({})
                    .catchall(z.record(z.any()))
                    .describe('JSON object with extension-specific objects.')
                    .optional(),
                  extras: z
                    .any()
                    .describe('Application-specific data.')
                    .optional(),
                })
              )
          )
          .describe(
            'A typed view into a buffer view that contains raw binary data.'
          )
      )
      .min(1)
      .describe('An array of accessors.')
      .optional(),
    animations: z
      .array(
        z
          .object({
            channels: z
              .array(
                z
                  .object({
                    sampler: z
                      .number()
                      .int()
                      .gte(0)
                      .describe(
                        'The index of a sampler in this animation used to compute the value for the target.'
                      ),
                    target: z
                      .object({
                        node: z
                          .number()
                          .int()
                          .gte(0)
                          .describe(
                            'The index of the node to animate. When undefined, the animated object **MAY** be defined by an extension.'
                          )
                          .optional(),
                        path: z
                          .union([
                            z.literal('translation'),
                            z.literal('rotation'),
                            z.literal('scale'),
                            z.literal('weights'),
                            z.string(),
                          ])
                          .describe(
                            'The name of the node\'s TRS property to animate, or the `"weights"` of the Morph Targets it instantiates. For the `"translation"` property, the values that are provided by the sampler are the translation along the X, Y, and Z axes. For the `"rotation"` property, the values are a quaternion in the order (x, y, z, w), where w is the scalar. For the `"scale"` property, the values are the scaling factors along the X, Y, and Z axes.'
                          ),
                        extensions: z.any().optional(),
                        extras: z.any().optional(),
                      })
                      .and(
                        z.object({
                          extensions: z
                            .object({})
                            .catchall(z.record(z.any()))
                            .describe(
                              'JSON object with extension-specific objects.'
                            )
                            .optional(),
                          extras: z
                            .any()
                            .describe('Application-specific data.')
                            .optional(),
                        })
                      )
                      .describe('The descriptor of the animated property.')
                      .describe('The descriptor of the animated property.'),
                    extensions: z.any().optional(),
                    extras: z.any().optional(),
                  })
                  .and(
                    z.object({
                      extensions: z
                        .object({})
                        .catchall(z.record(z.any()))
                        .describe(
                          'JSON object with extension-specific objects.'
                        )
                        .optional(),
                      extras: z
                        .any()
                        .describe('Application-specific data.')
                        .optional(),
                    })
                  )
                  .describe(
                    'An animation channel combines an animation sampler with a target property being animated.'
                  )
              )
              .min(1)
              .describe(
                'An array of animation channels. An animation channel combines an animation sampler with a target property being animated. Different channels of the same animation **MUST NOT** have the same targets.'
              ),
            samplers: z
              .array(
                z
                  .object({
                    input: z
                      .number()
                      .int()
                      .gte(0)
                      .describe(
                        'The index of an accessor containing keyframe timestamps.'
                      ),
                    interpolation: z
                      .union([
                        z
                          .literal('LINEAR')
                          .describe(
                            'The animated values are linearly interpolated between keyframes. When targeting a rotation, spherical linear interpolation (slerp) **SHOULD** be used to interpolate quaternions. The number of output elements **MUST** equal the number of input elements.'
                          ),
                        z
                          .literal('STEP')
                          .describe(
                            'The animated values remain constant to the output of the first keyframe, until the next keyframe. The number of output elements **MUST** equal the number of input elements.'
                          ),
                        z
                          .literal('CUBICSPLINE')
                          .describe(
                            "The animation's interpolation is computed using a cubic spline with specified tangents. The number of output elements **MUST** equal three times the number of input elements. For each input element, the output stores three elements, an in-tangent, a spline vertex, and an out-tangent. There **MUST** be at least two keyframes when using this interpolation."
                          ),
                        z.string(),
                      ])
                      .describe('Interpolation algorithm.')
                      .default('LINEAR'),
                    output: z
                      .number()
                      .int()
                      .gte(0)
                      .describe(
                        'The index of an accessor, containing keyframe output values.'
                      ),
                    extensions: z.any().optional(),
                    extras: z.any().optional(),
                  })
                  .and(
                    z.object({
                      extensions: z
                        .object({})
                        .catchall(z.record(z.any()))
                        .describe(
                          'JSON object with extension-specific objects.'
                        )
                        .optional(),
                      extras: z
                        .any()
                        .describe('Application-specific data.')
                        .optional(),
                    })
                  )
                  .describe(
                    'An animation sampler combines timestamps with a sequence of output values and defines an interpolation algorithm.'
                  )
              )
              .min(1)
              .describe(
                'An array of animation samplers. An animation sampler combines timestamps with a sequence of output values and defines an interpolation algorithm.'
              ),
            name: z.any().optional(),
            extensions: z.any().optional(),
            extras: z.any().optional(),
          })
          .and(
            z
              .object({
                name: z
                  .string()
                  .describe('The user-defined name of this object.')
                  .optional(),
              })
              .and(
                z.object({
                  extensions: z
                    .object({})
                    .catchall(z.record(z.any()))
                    .describe('JSON object with extension-specific objects.')
                    .optional(),
                  extras: z
                    .any()
                    .describe('Application-specific data.')
                    .optional(),
                })
              )
          )
          .describe('A keyframe animation.')
      )
      .min(1)
      .describe('An array of keyframe animations.')
      .optional(),
    asset: z
      .object({
        copyright: z
          .string()
          .describe(
            'A copyright message suitable for display to credit the content creator.'
          )
          .optional(),
        generator: z
          .string()
          .describe(
            'Tool that generated this glTF model.  Useful for debugging.'
          )
          .optional(),
        version: z
          .string()
          .regex(new RegExp('^[0-9]+\\.[0-9]+$'))
          .describe(
            'The glTF version in the form of `<major>.<minor>` that this asset targets.'
          ),
        minVersion: z
          .string()
          .regex(new RegExp('^[0-9]+\\.[0-9]+$'))
          .describe(
            'The minimum glTF version in the form of `<major>.<minor>` that this asset targets. This property **MUST NOT** be greater than the asset version.'
          )
          .optional(),
        extensions: z.any().optional(),
        extras: z.any().optional(),
      })
      .and(
        z.object({
          extensions: z
            .object({})
            .catchall(z.record(z.any()))
            .describe('JSON object with extension-specific objects.')
            .optional(),
          extras: z.any().describe('Application-specific data.').optional(),
        })
      )
      .describe('Metadata about the glTF asset.')
      .describe('Metadata about the glTF asset.'),
    buffers: z
      .array(
        z
          .object({
            uri: z
              .string()
              .describe('The URI (or IRI) of the buffer.')
              .optional(),
            byteLength: z
              .number()
              .int()
              .gte(1)
              .describe('The length of the buffer in bytes.'),
            name: z.any().optional(),
            extensions: z.any().optional(),
            extras: z.any().optional(),
          })
          .and(
            z
              .object({
                name: z
                  .string()
                  .describe('The user-defined name of this object.')
                  .optional(),
              })
              .and(
                z.object({
                  extensions: z
                    .object({})
                    .catchall(z.record(z.any()))
                    .describe('JSON object with extension-specific objects.')
                    .optional(),
                  extras: z
                    .any()
                    .describe('Application-specific data.')
                    .optional(),
                })
              )
          )
          .describe('A buffer points to binary geometry, animation, or skins.')
      )
      .min(1)
      .describe('An array of buffers.')
      .optional(),
    bufferViews: z
      .array(
        z
          .object({
            buffer: z
              .number()
              .int()
              .gte(0)
              .describe('The index of the buffer.'),
            byteOffset: z
              .number()
              .int()
              .gte(0)
              .describe('The offset into the buffer in bytes.')
              .default(0),
            byteLength: z
              .number()
              .int()
              .gte(1)
              .describe('The length of the bufferView in bytes.'),
            byteStride: z
              .number()
              .int()
              .multipleOf(4)
              .gte(4)
              .lte(252)
              .describe('The stride, in bytes.')
              .optional(),
            target: z
              .union([
                z.literal(34962).describe('ARRAY_BUFFER'),
                z.literal(34963).describe('ELEMENT_ARRAY_BUFFER'),
                z.number().int(),
              ])
              .describe(
                'The hint representing the intended GPU buffer type to use with this buffer view.'
              )
              .optional(),
            name: z.any().optional(),
            extensions: z.any().optional(),
            extras: z.any().optional(),
          })
          .and(
            z
              .object({
                name: z
                  .string()
                  .describe('The user-defined name of this object.')
                  .optional(),
              })
              .and(
                z.object({
                  extensions: z
                    .object({})
                    .catchall(z.record(z.any()))
                    .describe('JSON object with extension-specific objects.')
                    .optional(),
                  extras: z
                    .any()
                    .describe('Application-specific data.')
                    .optional(),
                })
              )
          )
          .describe(
            'A view into a buffer generally representing a subset of the buffer.'
          )
      )
      .min(1)
      .describe('An array of bufferViews.')
      .optional(),
    cameras: z
      .array(
        z
          .object({
            orthographic: z
              .object({
                xmag: z
                  .number()
                  .describe(
                    'The floating-point horizontal magnification of the view. This value **MUST NOT** be equal to zero. This value **SHOULD NOT** be negative.'
                  ),
                ymag: z
                  .number()
                  .describe(
                    'The floating-point vertical magnification of the view. This value **MUST NOT** be equal to zero. This value **SHOULD NOT** be negative.'
                  ),
                zfar: z
                  .number()
                  .gt(0)
                  .describe(
                    'The floating-point distance to the far clipping plane. This value **MUST NOT** be equal to zero. `zfar` **MUST** be greater than `znear`.'
                  ),
                znear: z
                  .number()
                  .gte(0)
                  .describe(
                    'The floating-point distance to the near clipping plane.'
                  ),
                extensions: z.any().optional(),
                extras: z.any().optional(),
              })
              .and(
                z.object({
                  extensions: z
                    .object({})
                    .catchall(z.record(z.any()))
                    .describe('JSON object with extension-specific objects.')
                    .optional(),
                  extras: z
                    .any()
                    .describe('Application-specific data.')
                    .optional(),
                })
              )
              .describe(
                'An orthographic camera containing properties to create an orthographic projection matrix.'
              )
              .describe(
                'An orthographic camera containing properties to create an orthographic projection matrix. This property **MUST NOT** be defined when `perspective` is defined.'
              )
              .optional(),
            perspective: z
              .object({
                aspectRatio: z
                  .number()
                  .gt(0)
                  .describe(
                    'The floating-point aspect ratio of the field of view.'
                  )
                  .optional(),
                yfov: z
                  .number()
                  .gt(0)
                  .describe(
                    'The floating-point vertical field of view in radians. This value **SHOULD** be less than π.'
                  ),
                zfar: z
                  .number()
                  .gt(0)
                  .describe(
                    'The floating-point distance to the far clipping plane.'
                  )
                  .optional(),
                znear: z
                  .number()
                  .gt(0)
                  .describe(
                    'The floating-point distance to the near clipping plane.'
                  ),
                extensions: z.any().optional(),
                extras: z.any().optional(),
              })
              .and(
                z.object({
                  extensions: z
                    .object({})
                    .catchall(z.record(z.any()))
                    .describe('JSON object with extension-specific objects.')
                    .optional(),
                  extras: z
                    .any()
                    .describe('Application-specific data.')
                    .optional(),
                })
              )
              .describe(
                'A perspective camera containing properties to create a perspective projection matrix.'
              )
              .describe(
                'A perspective camera containing properties to create a perspective projection matrix. This property **MUST NOT** be defined when `orthographic` is defined.'
              )
              .optional(),
            type: z
              .union([
                z.literal('perspective'),
                z.literal('orthographic'),
                z.string(),
              ])
              .describe(
                'Specifies if the camera uses a perspective or orthographic projection.'
              ),
            name: z.any().optional(),
            extensions: z.any().optional(),
            extras: z.any().optional(),
          })
          .and(
            z
              .object({
                name: z
                  .string()
                  .describe('The user-defined name of this object.')
                  .optional(),
              })
              .and(
                z.object({
                  extensions: z
                    .object({})
                    .catchall(z.record(z.any()))
                    .describe('JSON object with extension-specific objects.')
                    .optional(),
                  extras: z
                    .any()
                    .describe('Application-specific data.')
                    .optional(),
                })
              )
          )
          .describe(
            "A camera's projection.  A node **MAY** reference a camera to apply a transform to place the camera in the scene."
          )
      )
      .min(1)
      .describe('An array of cameras.')
      .optional(),
    images: z
      .array(
        z
          .object({
            uri: z
              .string()
              .describe('The URI (or IRI) of the image.')
              .optional(),
            mimeType: z
              .union([
                z.literal('image/jpeg'),
                z.literal('image/png'),
                z.string(),
              ])
              .describe(
                "The image's media type. This field **MUST** be defined when `bufferView` is defined."
              )
              .optional(),
            bufferView: z
              .number()
              .int()
              .gte(0)
              .describe(
                'The index of the bufferView that contains the image. This field **MUST NOT** be defined when `uri` is defined.'
              )
              .optional(),
            name: z.any().optional(),
            extensions: z.any().optional(),
            extras: z.any().optional(),
          })
          .and(
            z
              .object({
                name: z
                  .string()
                  .describe('The user-defined name of this object.')
                  .optional(),
              })
              .and(
                z.object({
                  extensions: z
                    .object({})
                    .catchall(z.record(z.any()))
                    .describe('JSON object with extension-specific objects.')
                    .optional(),
                  extras: z
                    .any()
                    .describe('Application-specific data.')
                    .optional(),
                })
              )
          )
          .describe(
            'Image data used to create a texture. Image **MAY** be referenced by an URI (or IRI) or a buffer view index.'
          )
      )
      .min(1)
      .describe('An array of images.')
      .optional(),
    materials: z
      .array(
        z
          .object({
            name: z.any().optional(),
            extensions: z.any().optional(),
            extras: z.any().optional(),
            pbrMetallicRoughness: z
              .object({
                baseColorFactor: z
                  .array(z.number().gte(0).lte(1))
                  .min(4)
                  .max(4)
                  .describe('The factors for the base color of the material.')
                  .default([1, 1, 1, 1]),
                baseColorTexture: z
                  .object({
                    index: z
                      .number()
                      .int()
                      .gte(0)
                      .describe('The index of the texture.'),
                    texCoord: z
                      .number()
                      .int()
                      .gte(0)
                      .describe(
                        "The set index of texture's TEXCOORD attribute used for texture coordinate mapping."
                      )
                      .default(0),
                    extensions: z.any().optional(),
                    extras: z.any().optional(),
                  })
                  .and(
                    z.object({
                      extensions: z
                        .object({})
                        .catchall(z.record(z.any()))
                        .describe(
                          'JSON object with extension-specific objects.'
                        )
                        .optional(),
                      extras: z
                        .any()
                        .describe('Application-specific data.')
                        .optional(),
                    })
                  )
                  .describe('Reference to a texture.')
                  .describe('The base color texture.')
                  .optional(),
                metallicFactor: z
                  .number()
                  .gte(0)
                  .lte(1)
                  .describe('The factor for the metalness of the material.')
                  .default(1),
                roughnessFactor: z
                  .number()
                  .gte(0)
                  .lte(1)
                  .describe('The factor for the roughness of the material.')
                  .default(1),
                metallicRoughnessTexture: z
                  .object({
                    index: z
                      .number()
                      .int()
                      .gte(0)
                      .describe('The index of the texture.'),
                    texCoord: z
                      .number()
                      .int()
                      .gte(0)
                      .describe(
                        "The set index of texture's TEXCOORD attribute used for texture coordinate mapping."
                      )
                      .default(0),
                    extensions: z.any().optional(),
                    extras: z.any().optional(),
                  })
                  .and(
                    z.object({
                      extensions: z
                        .object({})
                        .catchall(z.record(z.any()))
                        .describe(
                          'JSON object with extension-specific objects.'
                        )
                        .optional(),
                      extras: z
                        .any()
                        .describe('Application-specific data.')
                        .optional(),
                    })
                  )
                  .describe('Reference to a texture.')
                  .describe('The metallic-roughness texture.')
                  .optional(),
                extensions: z.any().optional(),
                extras: z.any().optional(),
              })
              .and(
                z.object({
                  extensions: z
                    .object({})
                    .catchall(z.record(z.any()))
                    .describe('JSON object with extension-specific objects.')
                    .optional(),
                  extras: z
                    .any()
                    .describe('Application-specific data.')
                    .optional(),
                })
              )
              .describe(
                'A set of parameter values that are used to define the metallic-roughness material model from Physically-Based Rendering (PBR) methodology.'
              )
              .describe(
                'A set of parameter values that are used to define the metallic-roughness material model from Physically Based Rendering (PBR) methodology. When undefined, all the default values of `pbrMetallicRoughness` **MUST** apply.'
              )
              .optional(),
            normalTexture: z
              .object({
                index: z.any().optional(),
                texCoord: z.any().optional(),
                scale: z
                  .number()
                  .describe(
                    'The scalar parameter applied to each normal vector of the normal texture.'
                  )
                  .default(1),
                extensions: z.any().optional(),
                extras: z.any().optional(),
              })
              .and(
                z
                  .object({
                    index: z
                      .number()
                      .int()
                      .gte(0)
                      .describe('The index of the texture.'),
                    texCoord: z
                      .number()
                      .int()
                      .gte(0)
                      .describe(
                        "The set index of texture's TEXCOORD attribute used for texture coordinate mapping."
                      )
                      .default(0),
                    extensions: z.any().optional(),
                    extras: z.any().optional(),
                  })
                  .and(
                    z.object({
                      extensions: z
                        .object({})
                        .catchall(z.record(z.any()))
                        .describe(
                          'JSON object with extension-specific objects.'
                        )
                        .optional(),
                      extras: z
                        .any()
                        .describe('Application-specific data.')
                        .optional(),
                    })
                  )
                  .describe('Reference to a texture.')
              )
              .describe('The tangent space normal texture.')
              .optional(),
            occlusionTexture: z
              .object({
                index: z.any().optional(),
                texCoord: z.any().optional(),
                strength: z
                  .number()
                  .gte(0)
                  .lte(1)
                  .describe(
                    'A scalar multiplier controlling the amount of occlusion applied.'
                  )
                  .default(1),
                extensions: z.any().optional(),
                extras: z.any().optional(),
              })
              .and(
                z
                  .object({
                    index: z
                      .number()
                      .int()
                      .gte(0)
                      .describe('The index of the texture.'),
                    texCoord: z
                      .number()
                      .int()
                      .gte(0)
                      .describe(
                        "The set index of texture's TEXCOORD attribute used for texture coordinate mapping."
                      )
                      .default(0),
                    extensions: z.any().optional(),
                    extras: z.any().optional(),
                  })
                  .and(
                    z.object({
                      extensions: z
                        .object({})
                        .catchall(z.record(z.any()))
                        .describe(
                          'JSON object with extension-specific objects.'
                        )
                        .optional(),
                      extras: z
                        .any()
                        .describe('Application-specific data.')
                        .optional(),
                    })
                  )
                  .describe('Reference to a texture.')
              )
              .describe('The occlusion texture.')
              .optional(),
            emissiveTexture: z
              .object({
                index: z
                  .number()
                  .int()
                  .gte(0)
                  .describe('The index of the texture.'),
                texCoord: z
                  .number()
                  .int()
                  .gte(0)
                  .describe(
                    "The set index of texture's TEXCOORD attribute used for texture coordinate mapping."
                  )
                  .default(0),
                extensions: z.any().optional(),
                extras: z.any().optional(),
              })
              .and(
                z.object({
                  extensions: z
                    .object({})
                    .catchall(z.record(z.any()))
                    .describe('JSON object with extension-specific objects.')
                    .optional(),
                  extras: z
                    .any()
                    .describe('Application-specific data.')
                    .optional(),
                })
              )
              .describe('Reference to a texture.')
              .describe('The emissive texture.')
              .optional(),
            emissiveFactor: z
              .array(z.number().gte(0).lte(1))
              .min(3)
              .max(3)
              .describe('The factors for the emissive color of the material.')
              .default([0, 0, 0]),
            alphaMode: z
              .union([
                z
                  .literal('OPAQUE')
                  .describe(
                    'The alpha value is ignored, and the rendered output is fully opaque.'
                  ),
                z
                  .literal('MASK')
                  .describe(
                    'The rendered output is either fully opaque or fully transparent depending on the alpha value and the specified `alphaCutoff` value; the exact appearance of the edges **MAY** be subject to implementation-specific techniques such as "`Alpha-to-Coverage`".'
                  ),
                z
                  .literal('BLEND')
                  .describe(
                    'The alpha value is used to composite the source and destination areas. The rendered output is combined with the background using the normal painting operation (i.e. the Porter and Duff over operator).'
                  ),
                z.string(),
              ])
              .describe('The alpha rendering mode of the material.')
              .default('OPAQUE'),
            alphaCutoff: z
              .number()
              .gte(0)
              .describe('The alpha cutoff value of the material.')
              .default(0.5),
            doubleSided: z
              .boolean()
              .describe('Specifies whether the material is double sided.')
              .default(false),
          })
          .and(
            z
              .object({
                name: z
                  .string()
                  .describe('The user-defined name of this object.')
                  .optional(),
              })
              .and(
                z.object({
                  extensions: z
                    .object({})
                    .catchall(z.record(z.any()))
                    .describe('JSON object with extension-specific objects.')
                    .optional(),
                  extras: z
                    .any()
                    .describe('Application-specific data.')
                    .optional(),
                })
              )
          )
          .describe('The material appearance of a primitive.')
      )
      .min(1)
      .describe('An array of materials.')
      .optional(),
    meshes: z
      .array(
        z
          .object({
            primitives: z
              .array(
                z
                  .object({
                    attributes: z
                      .record(z.number().int().gte(0))
                      .describe(
                        "A plain JSON object, where each key corresponds to a mesh attribute semantic and each value is the index of the accessor containing attribute's data."
                      ),
                    indices: z
                      .number()
                      .int()
                      .gte(0)
                      .describe(
                        'The index of the accessor that contains the vertex indices.'
                      )
                      .optional(),
                    material: z
                      .number()
                      .int()
                      .gte(0)
                      .describe(
                        'The index of the material to apply to this primitive when rendering.'
                      )
                      .optional(),
                    mode: z
                      .union([
                        z.literal(0).describe('POINTS'),
                        z.literal(1).describe('LINES'),
                        z.literal(2).describe('LINE_LOOP'),
                        z.literal(3).describe('LINE_STRIP'),
                        z.literal(4).describe('TRIANGLES'),
                        z.literal(5).describe('TRIANGLE_STRIP'),
                        z.literal(6).describe('TRIANGLE_FAN'),
                        z.number().int(),
                      ])
                      .describe('The topology type of primitives to render.')
                      .default(4),
                    targets: z
                      .array(
                        z
                          .record(z.number().int().gte(0))
                          .describe(
                            "A plain JSON object specifying attributes displacements in a morph target, where each key corresponds to one of the three supported attribute semantic (`POSITION`, `NORMAL`, or `TANGENT`) and each value is the index of the accessor containing the attribute displacements' data."
                          )
                      )
                      .min(1)
                      .describe('An array of morph targets.')
                      .optional(),
                    extensions: z.any().optional(),
                    extras: z.any().optional(),
                  })
                  .and(
                    z.object({
                      extensions: z
                        .object({})
                        .catchall(z.record(z.any()))
                        .describe(
                          'JSON object with extension-specific objects.'
                        )
                        .optional(),
                      extras: z
                        .any()
                        .describe('Application-specific data.')
                        .optional(),
                    })
                  )
                  .describe('Geometry to be rendered with the given material.')
              )
              .min(1)
              .describe(
                'An array of primitives, each defining geometry to be rendered.'
              ),
            weights: z
              .array(z.number())
              .min(1)
              .describe(
                'Array of weights to be applied to the morph targets. The number of array elements **MUST** match the number of morph targets.'
              )
              .optional(),
            name: z.any().optional(),
            extensions: z.any().optional(),
            extras: z.any().optional(),
          })
          .and(
            z
              .object({
                name: z
                  .string()
                  .describe('The user-defined name of this object.')
                  .optional(),
              })
              .and(
                z.object({
                  extensions: z
                    .object({})
                    .catchall(z.record(z.any()))
                    .describe('JSON object with extension-specific objects.')
                    .optional(),
                  extras: z
                    .any()
                    .describe('Application-specific data.')
                    .optional(),
                })
              )
          )
          .describe(
            'A set of primitives to be rendered.  Its global transform is defined by a node that references it.'
          )
      )
      .min(1)
      .describe('An array of meshes.')
      .optional(),
    nodes: z
      .array(
        z
          .object({
            camera: z
              .number()
              .int()
              .gte(0)
              .describe('The index of the camera referenced by this node.')
              .optional(),
            children: z
              .array(z.number().int().gte(0))
              .min(1)
              .describe("The indices of this node's children.")
              .optional(),
            skin: z
              .number()
              .int()
              .gte(0)
              .describe('The index of the skin referenced by this node.')
              .optional(),
            matrix: z
              .array(z.number())
              .min(16)
              .max(16)
              .describe(
                'A floating-point 4x4 transformation matrix stored in column-major order.'
              )
              .default([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
            mesh: z
              .number()
              .int()
              .gte(0)
              .describe('The index of the mesh in this node.')
              .optional(),
            rotation: z
              .array(z.number().gte(-1).lte(1))
              .min(4)
              .max(4)
              .describe(
                "The node's unit quaternion rotation in the order (x, y, z, w), where w is the scalar."
              )
              .default([0, 0, 0, 1]),
            scale: z
              .array(z.number())
              .min(3)
              .max(3)
              .describe(
                "The node's non-uniform scale, given as the scaling factors along the x, y, and z axes."
              )
              .default([1, 1, 1]),
            translation: z
              .array(z.number())
              .min(3)
              .max(3)
              .describe("The node's translation along the x, y, and z axes.")
              .default([0, 0, 0]),
            weights: z
              .array(z.number())
              .min(1)
              .describe(
                'The weights of the instantiated morph target. The number of array elements **MUST** match the number of morph targets of the referenced mesh. When defined, `mesh` **MUST** also be defined.'
              )
              .optional(),
            name: z.any().optional(),
            extensions: z.any().optional(),
            extras: z.any().optional(),
          })
          .and(
            z
              .object({
                name: z
                  .string()
                  .describe('The user-defined name of this object.')
                  .optional(),
              })
              .and(
                z.object({
                  extensions: z
                    .object({})
                    .catchall(z.record(z.any()))
                    .describe('JSON object with extension-specific objects.')
                    .optional(),
                  extras: z
                    .any()
                    .describe('Application-specific data.')
                    .optional(),
                })
              )
          )
          .describe(
            'A node in the node hierarchy.  When the node contains `skin`, all `mesh.primitives` **MUST** contain `JOINTS_0` and `WEIGHTS_0` attributes.  A node **MAY** have either a `matrix` or any combination of `translation`/`rotation`/`scale` (TRS) properties. TRS properties are converted to matrices and postmultiplied in the `T * R * S` order to compose the transformation matrix; first the scale is applied to the vertices, then the rotation, and then the translation. If none are provided, the transform is the identity. When a node is targeted for animation (referenced by an animation.channel.target), `matrix` **MUST NOT** be present.'
          )
      )
      .min(1)
      .describe('An array of nodes.')
      .optional(),
    samplers: z
      .array(
        z
          .object({
            magFilter: z
              .union([
                z.literal(9728).describe('NEAREST'),
                z.literal(9729).describe('LINEAR'),
                z.number().int(),
              ])
              .describe('Magnification filter.')
              .optional(),
            minFilter: z
              .union([
                z.literal(9728).describe('NEAREST'),
                z.literal(9729).describe('LINEAR'),
                z.literal(9984).describe('NEAREST_MIPMAP_NEAREST'),
                z.literal(9985).describe('LINEAR_MIPMAP_NEAREST'),
                z.literal(9986).describe('NEAREST_MIPMAP_LINEAR'),
                z.literal(9987).describe('LINEAR_MIPMAP_LINEAR'),
                z.number().int(),
              ])
              .describe('Minification filter.')
              .optional(),
            wrapS: z
              .union([
                z.literal(33071).describe('CLAMP_TO_EDGE'),
                z.literal(33648).describe('MIRRORED_REPEAT'),
                z.literal(10497).describe('REPEAT'),
                z.number().int(),
              ])
              .describe('S (U) wrapping mode.')
              .default(10497),
            wrapT: z
              .union([
                z.literal(33071).describe('CLAMP_TO_EDGE'),
                z.literal(33648).describe('MIRRORED_REPEAT'),
                z.literal(10497).describe('REPEAT'),
                z.number().int(),
              ])
              .describe('T (V) wrapping mode.')
              .default(10497),
            name: z.any().optional(),
            extensions: z.any().optional(),
            extras: z.any().optional(),
          })
          .and(
            z
              .object({
                name: z
                  .string()
                  .describe('The user-defined name of this object.')
                  .optional(),
              })
              .and(
                z.object({
                  extensions: z
                    .object({})
                    .catchall(z.record(z.any()))
                    .describe('JSON object with extension-specific objects.')
                    .optional(),
                  extras: z
                    .any()
                    .describe('Application-specific data.')
                    .optional(),
                })
              )
          )
          .describe(
            'Texture sampler properties for filtering and wrapping modes.'
          )
      )
      .min(1)
      .describe('An array of samplers.')
      .optional(),
    scene: z
      .number()
      .int()
      .gte(0)
      .describe('The index of the default scene.')
      .optional(),
    scenes: z
      .array(
        z
          .object({
            nodes: z
              .array(z.number().int().gte(0))
              .min(1)
              .describe('The indices of each root node.')
              .optional(),
            name: z.any().optional(),
            extensions: z.any().optional(),
            extras: z.any().optional(),
          })
          .and(
            z
              .object({
                name: z
                  .string()
                  .describe('The user-defined name of this object.')
                  .optional(),
              })
              .and(
                z.object({
                  extensions: z
                    .object({})
                    .catchall(z.record(z.any()))
                    .describe('JSON object with extension-specific objects.')
                    .optional(),
                  extras: z
                    .any()
                    .describe('Application-specific data.')
                    .optional(),
                })
              )
          )
          .describe('The root nodes of a scene.')
      )
      .min(1)
      .describe('An array of scenes.')
      .optional(),
    skins: z
      .array(
        z
          .object({
            inverseBindMatrices: z
              .number()
              .int()
              .gte(0)
              .describe(
                'The index of the accessor containing the floating-point 4x4 inverse-bind matrices.'
              )
              .optional(),
            skeleton: z
              .number()
              .int()
              .gte(0)
              .describe('The index of the node used as a skeleton root.')
              .optional(),
            joints: z
              .array(z.number().int().gte(0))
              .min(1)
              .describe(
                'Indices of skeleton nodes, used as joints in this skin.'
              ),
            name: z.any().optional(),
            extensions: z.any().optional(),
            extras: z.any().optional(),
          })
          .and(
            z
              .object({
                name: z
                  .string()
                  .describe('The user-defined name of this object.')
                  .optional(),
              })
              .and(
                z.object({
                  extensions: z
                    .object({})
                    .catchall(z.record(z.any()))
                    .describe('JSON object with extension-specific objects.')
                    .optional(),
                  extras: z
                    .any()
                    .describe('Application-specific data.')
                    .optional(),
                })
              )
          )
          .describe('Joints and matrices defining a skin.')
      )
      .min(1)
      .describe('An array of skins.')
      .optional(),
    textures: z
      .array(
        z
          .object({
            sampler: z
              .number()
              .int()
              .gte(0)
              .describe(
                'The index of the sampler used by this texture. When undefined, a sampler with repeat wrapping and auto filtering **SHOULD** be used.'
              )
              .optional(),
            source: z
              .number()
              .int()
              .gte(0)
              .describe(
                'The index of the image used by this texture. When undefined, an extension or other mechanism **SHOULD** supply an alternate texture source, otherwise behavior is undefined.'
              )
              .optional(),
            name: z.any().optional(),
            extensions: z.any().optional(),
            extras: z.any().optional(),
          })
          .and(
            z
              .object({
                name: z
                  .string()
                  .describe('The user-defined name of this object.')
                  .optional(),
              })
              .and(
                z.object({
                  extensions: z
                    .object({})
                    .catchall(z.record(z.any()))
                    .describe('JSON object with extension-specific objects.')
                    .optional(),
                  extras: z
                    .any()
                    .describe('Application-specific data.')
                    .optional(),
                })
              )
          )
          .describe('A texture and its sampler.')
      )
      .min(1)
      .describe('An array of textures.')
      .optional(),
    extensions: z.any().optional(),
    extras: z.any().optional(),
  })
  .and(
    z.object({
      extensions: z
        .object({})
        .catchall(z.record(z.any()))
        .describe('JSON object with extension-specific objects.')
        .optional(),
      extras: z.any().describe('Application-specific data.').optional(),
    })
  )
  .describe('The root object for a glTF asset.');
