"use client";

import { InstapaperShareButton, InstapaperIcon } from "next-share";

interface ShareButtonsProps {
  url: string;
}

export function ShareButtons({ url }: ShareButtonsProps) {
  return (
    <InstapaperShareButton url={url} title="Compartilhar">
      <InstapaperIcon size={32} round />
    </InstapaperShareButton>
  );
}
