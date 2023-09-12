"use client"
import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import loading from './loading.gif'

interface propsImage {
  src: string | "" |any;
  className?: string,
  size?: number
}

export function ImageCommon({ src,className,size, ...props }: propsImage) {
  const [finalLink, setFinalLink] = useState<any>((prev: any) => src);
  return (
    <Image
      width={size ||100}
      height={size || 100}
      className={classNames("!w-full !h-full object-contain",className)}
      src={finalLink}
      onError={() => setFinalLink(loading)}
      loader={(value) => value.src}
      alt=""
      {...props}
    />
  );
}
