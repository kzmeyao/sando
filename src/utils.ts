export const transformHygraphImage = (
  url: string,
  height: number,
  fit: "clip" | "crop" = "clip",
) => {
  const urlParts = url.split("/");
  const handle = urlParts.pop();
  return `${urlParts.join("/")}/resize=height:${height},fit:${fit}/${handle}`;
}