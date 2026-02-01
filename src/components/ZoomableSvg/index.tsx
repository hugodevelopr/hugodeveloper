import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

type Props = {
  children: React.ReactNode;
  className?: string;
  height?: number; // px
  ariaLabel?: string;
};

export default function ZoomFrame({
  children,
  className,
  height = 520,
  ariaLabel = "Diagram viewer",
}: Props) {
  return (
    <div
      className={className}
      role="group"
      aria-label={ariaLabel}
      style={{
        border: "1px solid var(--ifm-toc-border-color)",
        borderRadius: 14,
        overflow: "hidden",
        height,
        width: "100%",
        background: "var(--ifm-background-color)",
      }}
    >
      <TransformWrapper
        minScale={0.6}
        maxScale={4}
        initialScale={1}
        centerOnInit
        wheel={{ step: 0.15 }}
        doubleClick={{ disabled: true }}
        pinch={{ step: 5 }}
        panning={{ excluded: ["button", "a"] }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            {/* Toolbar */}
            <div
              style={{
                display: "flex",
                gap: 8,
                alignItems: "center",
                padding: "8px 10px",
                borderBottom: "1px solid var(--ifm-toc-border-color)",
              }}
            >
              <button className="button button--sm" type="button" onClick={() => zoomIn()}>
                +
              </button>
              <button className="button button--sm" type="button" onClick={() => zoomOut()}>
                −
              </button>
              <button
                className="button button--sm button--secondary"
                type="button"
                onClick={() => resetTransform()}
              >
                Reset
              </button>

              <span style={{ marginLeft: "auto", opacity: 0.7, fontSize: 12 }}>
                Scroll to zoom • Drag to pan
              </span>
            </div>

            {/* Viewport */}
            <div style={{ height: "100%", width: "100%" }}>
              <TransformComponent
                wrapperStyle={{
                  width: "100%",
                  height: `calc(100% - 42px)`,
                }}
                contentStyle={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {children}
              </TransformComponent>
            </div>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}
