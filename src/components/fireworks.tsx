"use client"

export function Fireworks() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="firework"></div>
      ))}
    </div>
  );
}
