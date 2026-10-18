"use client";
import { useEffect, useState } from "react";

// Image tile that opens the full image in a lightbox when clicked.
// Styled with inline styles only, so it does not depend on Tailwind or other CSS.
// Close with a click, the × button, or the Esc key.
export default function ZoomImage({
  src,
  className = "shot",
  style,
  label = "Image",
  alt = "",
}) {
  const [open, setOpen] = useState(false);
  const wide = className.includes("wide");

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const prev = document.body.style.overflow;
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const tile = {
    display: "block",
    width: "100%",
    aspectRatio: wide ? "16 / 8" : "4 / 3",
    borderRadius: 14,
    border: 0,
    padding: 0,
    backgroundColor: "#f2f2f2",
    ...style,
  };

  if (!src) {
    return (
      <div
        className={className}
        style={{
          ...tile,
          display: "grid",
          placeItems: "center",
          fontSize: 12,
          color: "#999",
        }}
      >
        {label}
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        className={className}
        aria-label={`View full image${alt ? `: ${alt}` : ""}`}
        onClick={() => setOpen(true)}
        style={{
          ...tile,
          cursor: "zoom-in",
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full image"
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,.9)",
            padding: 16,
            cursor: "zoom-out",
          }}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: 0,
              background: "rgba(255,255,255,.18)",
              color: "#fff",
              fontSize: 24,
              lineHeight: 1,
              cursor: "pointer",
            }}
          >
            ×
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            style={{
              display: "block",
              width: "auto",
              height: "auto",
              minWidth: 0,
              minHeight: 0,
              maxWidth: "calc(100vw - 32px)",
              maxHeight: "calc(100dvh - 32px)",
              objectFit: "contain",
              borderRadius: 8,
            }}
          />
        </div>
      )}
    </>
  );
}
