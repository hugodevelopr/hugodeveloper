import React from "react";
import ZoomFrame from "../ZoomableSvg";

type Props = {
  Light: React.ComponentType<any>;
  Dark: React.ComponentType<any>;
  label?: string;
  height?: number;
};

export default function ThemeDiagram({ Light, Dark, label, height = 520 }: Props) {
  return (
    <ZoomFrame height={height} ariaLabel={label ?? "Diagram"}>
      {/* IMPORTANT: keep both in DOM for theme switching, but only one visible */}
      <div style={{ width: "100%" }}>
        <Light className="only-light kb-diagram" role="img" aria-label={`${label ?? "Diagram"} (light)`} />
        <Dark className="only-dark kb-diagram" role="img" aria-label={`${label ?? "Diagram"} (dark)`} />
      </div>
    </ZoomFrame>
  );
}
