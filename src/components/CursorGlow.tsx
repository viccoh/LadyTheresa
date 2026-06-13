import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -300, y: -300 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed z-[55] rounded-full transition-opacity duration-300"
        style={{
          left: pos.x - 300,
          top: pos.y - 300,
          width: 600,
          height: 600,
          opacity: visible ? 1 : 0,
          background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.08) 40%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed z-[55] rounded-full transition-opacity duration-300"
        style={{
          left: pos.x - 150,
          top: pos.y - 150,
          width: 300,
          height: 300,
          opacity: visible ? 1 : 0,
          background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 50%, transparent 70%)",
        }}
      />
    </>
  );
}
