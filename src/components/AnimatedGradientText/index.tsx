import React, { JSX, ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  speedSec?: number;
  pauseOnHover?: boolean;
};

export default function AnimatedGradientText({
  children,
  className = "",
  as: Tag = "span",
  speedSec = 12,
  pauseOnHover = true,
}: Props) {
  return (
    <Tag
      className={`${styles.text} ${pauseOnHover ? styles.pauseOnHover : ""} ${className}`}
      style={{ ["--agt-speed" as any]: `${speedSec}s` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
