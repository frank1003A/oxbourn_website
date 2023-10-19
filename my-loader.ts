export default function cloudinaryLoader({
  src,
  width,
  quality,
  height,
}: {
  src: string;
  width: number;
  height: number;
  quality?: number;
}) {
  const params = [
    "f_auto",
    "c_limit",
    `q_${quality || "auto"}`,
    `w_auto`,
    `h_500`,
  ];

  /**Check if the client is online before adding width and height parameters
  if (navigator.onLine) {
    params.push(`w_auto`, `h_500`);
  } */

  return `https://res.cloudinary.com/dpmmixyvq/image/upload/${params.join(
    ","
  )}/v1697051867/oxbourn/${src}`;
}
