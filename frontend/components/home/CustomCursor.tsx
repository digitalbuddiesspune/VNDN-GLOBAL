"use client";

import { useEffect } from "react";

export function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById("home-cursor");
    const ring = document.getElementById("home-cursor-ring");
    if (!cursor || !ring) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let frameId = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = `${mx}px`;
      cursor.style.top = `${my}px`;
    };

    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      frameId = requestAnimationFrame(animRing);
    };

    const onEnter = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(2.5)";
      ring.style.transform = "translate(-50%, -50%) scale(1.4)";
      ring.style.borderColor = "rgba(201,168,76,0.8)";
    };

    const onLeave = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
      ring.style.transform = "translate(-50%, -50%) scale(1)";
      ring.style.borderColor = "rgba(201,168,76,0.5)";
    };

    document.addEventListener("mousemove", onMove);
    frameId = requestAnimationFrame(animRing);

    const interactive = document.querySelectorAll(
      ".home-page a, .home-page button"
    );
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frameId);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        id="home-cursor"
        className="pointer-events-none fixed z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a84c] transition-transform duration-150"
      />
      <div
        id="home-cursor-ring"
        className="pointer-events-none fixed z-[9998] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(201,168,76,0.5)] transition-all duration-[250ms]"
      />
    </>
  );
}
