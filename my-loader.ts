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
    `w_500`,
    `h_500`,
    `q_${quality || "auto"}`,
  ];
  return `https://res.cloudinary.com/dpmmixyvq/image/upload/${params.join(
    ","
  )}/v1697051867/oxbourn/${src}`;
}
