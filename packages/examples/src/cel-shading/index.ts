import silhouette from "./silhouette";
import solid from "./solid";

export default async function(gl: WebGL2RenderingContext) {
  const renderSilhouette = await silhouette(gl);
  const renderSolid = await solid(gl);

  return (deltaTime: number) => {
    renderSilhouette(deltaTime);
    renderSolid(deltaTime);
  };
}