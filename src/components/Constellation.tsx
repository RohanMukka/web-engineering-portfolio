import React, { useRef, useEffect } from 'react';

const Constellation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: Particle[] = [];
    const particleCount = 100;
    const connectionDistance = 150;
    const mouseParams = { x: 0, y: 0, radius: 200 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
        
        // Mouse interaction
        const dx = mouseParams.x - this.x;
        const dy = mouseParams.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseParams.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouseParams.radius - distance) / mouseParams.radius;
            const directionX = forceDirectionX * force * this.size * 0.05;
            const directionY = forceDirectionY * force * this.size * 0.05; // Pull towards mouse
             
             // Or push away:
             // this.x -= directionX;
             // this.y -= directionY;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
        
        // Connect particles
        particles.forEach((otherParticle) => {
             const dx = particle.x - otherParticle.x;
             const dy = particle.y - otherParticle.y;
             const distance = Math.sqrt(dx * dx + dy * dy);

             if (distance < connectionDistance) {
                 ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / connectionDistance})`;
                 ctx.lineWidth = 0.5;
                 ctx.beginPath();
                 ctx.moveTo(particle.x, particle.y);
                 ctx.lineTo(otherParticle.x, otherParticle.y);
                 ctx.stroke();
             }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
        mouseParams.x = e.clientX;
        mouseParams.y = e.clientY;
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-20" />;
};

export default Constellation;
