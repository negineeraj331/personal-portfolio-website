import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const DARK_COLORS = [
  "0, 230, 100",   // neon green (primary)
  "0, 255, 140",   // bright green
  "120, 255, 80",  // lime green
  "80, 200, 120",  // soft green
  "0, 200, 255",   // teal accent
  "160, 80, 255",  // violet accent
];

const LIGHT_COLORS = [
  "37, 99, 235",   // blue
  "139, 92, 246",  // violet
  "16, 185, 129",  // emerald
  "236, 72, 153",  // pink
  "245, 158, 11",  // amber
  "6, 182, 212",   // cyan
];

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isDark = resolvedTheme === "dark";
    const COLORS = isDark ? DARK_COLORS : LIGHT_COLORS;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number; y: number; vx: number; vy: number;
      radius: number; opacity: number; colorIdx: number;
    }[] = [];

    const count = 90;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2.5 + 1,
        opacity: isDark ? Math.random() * 0.6 + 0.4 : Math.random() * 0.5 + 0.3,
        colorIdx: Math.floor(Math.random() * COLORS.length),
      });
    }

    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const col = COLORS[p.colorIdx];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col}, ${p.opacity})`;
        ctx.shadowBlur = isDark ? 16 : 8;
        ctx.shadowColor = `rgba(${col}, ${isDark ? 0.9 : 0.6})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const alpha = (1 - dist / 130) * (isDark ? 0.28 : 0.18);
            const col = COLORS[p1.colorIdx];
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${col}, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", handleResize); };
  }, [resolvedTheme]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
}
