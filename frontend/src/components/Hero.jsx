import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawGrid = () => {
      ctx.strokeStyle = getComputedStyle(canvas).getPropertyValue('--accent-cyan').trim() || '#00f0ff';
      ctx.globalAlpha = 0.1;
      ctx.lineWidth = 1;

      const gridSize = 60;
      const offset = (time * 0.5) % gridSize;

      for (let x = offset; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = offset; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 1;
      drawGrid();
      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="inline-block px-4 py-2 mb-6 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 text-sm text-[var(--text-secondary)]">
          {t('hero.badge')}
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-purple)] to-[var(--accent-pink)] bg-clip-text text-transparent">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-10 leading-relaxed">
          {t('hero.description')}
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[var(--accent-cyan)] mb-1">10+</div>
            <div className="text-sm text-[var(--text-muted)]">{t('stats.years')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[var(--accent-cyan)] mb-1">18+</div>
            <div className="text-sm text-[var(--text-muted)]">{t('stats.projects')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[var(--accent-cyan)] mb-1">∞</div>
            <div className="text-sm text-[var(--text-muted)]">{t('stats.innovation')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
