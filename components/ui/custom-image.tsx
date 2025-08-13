// components/ui/custom-image.tsx
"use client";

import NextImage, { ImageProps } from "next/image";

const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ||
  (typeof window !== "undefined"
    ? document.querySelector("base")?.getAttribute("href") || ""
    : "");

function withBasePath(src: string) {
  // 先頭が "/" のときだけ basePath を付与
  if (src.startsWith("/")) return `${basePath || ""}${src}`;
  return src; // 相対や http(s) はそのまま
}

export default function CustomImage(props: ImageProps) {
  const { src, ...rest } = props;
  const realSrc = typeof src === "string" ? withBasePath(src) : src;
  return <NextImage src={realSrc} {...rest} />;
}
