import Image, { ImageProps } from "next/image";
import { getImagePath } from "@/utils/path";

interface CustomImageProps extends Omit<ImageProps, "src"> {
  src: string;
}

export function CustomImage({ src, alt, ...props }: CustomImageProps) {
  return <Image src={getImagePath(src)} alt={alt} {...props} />;
}

export default CustomImage;
