// GoGreenlight Logo Component - uses official brand logo image

import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: { width: 120, height: 24 },
    md: { width: 400, height: 80 },
    lg: { width: 500, height: 100 },
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
