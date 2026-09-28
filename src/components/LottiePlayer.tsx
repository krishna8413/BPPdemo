"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

export default function LottiePlayer({
  path,
  className,
  loop = true,
}: {
  path: string;
  className?: string;
  loop?: boolean;
}) {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    let active = true;
    fetch(path)
      .then((res) => res.json())
      .then((data) => {
        if (active) setAnimationData(data);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [path]);

  if (!animationData) return <div className={className} aria-hidden />;

  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay
      className={className}
    />
  );
}
