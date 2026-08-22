"use client";

import Image from "next/image";
import { useState } from "react";

// Cover photo layered over a project's generated preview panel.
// If the file is missing (or fails to load) it renders nothing, so the
// gradient + slug watermark underneath stays visible instead of a broken image.
export default function CoverImage({
  src,
  alt,
  sizes,
}: {
  src: string;
  alt: string;
  sizes: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      onError={() => setFailed(true)}
      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
    />
  );
}
