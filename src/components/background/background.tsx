import { useEffect, useRef } from 'react';
import Star from './star';

export const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const makeStars = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const canvasContext = canvas.getContext('2d');
    if (!canvasContext) {
      return;
    }
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const nStars = 150;
    const colors = ['#176ab6', '#fb9b39', '#ffffff', '#994646', '0f7a05'];
    let stars: Star[] = [];

    const bg = canvasContext.createRadialGradient(
      canvas.width / 2,
      -canvas.height / 5,
      10,
      canvas.width / 2,
      canvas.height,
      canvas.height * 4,
    );
    bg.addColorStop(0, '#32465E');
    bg.addColorStop(0.3, '#000814');
    bg.addColorStop(0.8, '#000814');
    bg.addColorStop(1, '#000');

    function init() {
      for (let i = 0; i < nStars; i += 1) {
        stars.push(new Star(canvas!, colors));
      }
    }
    init();

    function animate() {
      requestAnimationFrame(animate);
      canvasContext!.clearRect(0, 0, canvas!.width, canvas!.height);
      canvasContext!.fillStyle = bg;
      canvasContext!.fillRect(0, 0, canvas!.width, canvas!.height);
      stars.forEach((s) => s.update(stars));
    }

    animate();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = [];
      init();
    });
  };

  useEffect(() => {
    makeStars();
  }, []);

  return (
    <canvas ref={canvasRef} />
  );
};
