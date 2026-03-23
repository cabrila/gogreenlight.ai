// GoGreenlight Logo Component - uses official brand logo image

import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: { width: 120, height: 24 },
    md: { width: 200, height: 40 },
    lg: { width: 250, height: 50 },
    xl: { width: 600, height: 120 },
  };

  const { width, height } = sizeClasses[size];

  return (
    <Image
      src="/images/gogreenlight-logo.png"
      alt="GoGreenlight"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
