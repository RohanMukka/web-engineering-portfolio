import React, { useState, useEffect, useRef } from 'react';
import { Sun, CloudRain, Snowflake, Moon, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type WeatherState = 'night' | 'snow' | 'rain' | 'sun';

const WeatherSystem = () => {
    const [weather, setWeather] = useState<WeatherState>('night');
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Canvas Animation Loop
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: any[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Init Particles based on weather
        const initParticles = () => {
            particles = [];
            const count = weather === 'snow' ? 100 : weather === 'rain' ? 150 : 0;
            
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    speed: (weather === 'snow' ? 1 : 15) + Math.random() * 5,
                    size: (weather === 'snow' ? 2 : 15) + Math.random(),
                    drift: (Math.random() - 0.5) * (weather === 'snow' ? 2 : 0)
                });
            }
        };

        initParticles();

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Particles
            ctx.fillStyle = weather === 'snow' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(100, 150, 255, 0.5)';
            ctx.strokeStyle = 'rgba(100, 150, 255, 0.5)';
            ctx.lineWidth = 1;

            particles.forEach(p => {
                if (weather === 'snow') {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fill();
                    p.x += p.drift;
                    p.y += p.speed;
                } else if (weather === 'rain') {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p.x, p.y + p.size);
                    ctx.stroke();
                    p.y += p.speed;
                }

                // Recycle
                if (p.y > canvas.height) {
                    p.y = -10;
                    p.x = Math.random() * canvas.width;
                }
                if (p.x > canvas.width) p.x = 0;
                if (p.x < 0) p.x = canvas.width;
            });

            if (weather !== 'night' && weather !== 'sun') {
                animationFrameId = requestAnimationFrame(render);
            }
        };

        if (weather !== 'night' && weather !== 'sun') {
             render();
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [weather]);

    // Update global CSS Variables for Themes
    useEffect(() => {
        // Set the data-theme attribute on the root element
        document.documentElement.setAttribute('data-theme', weather);
        
        // No longer need manual property setting as index.css handles it via [data-theme]
    }, [weather]);

    return (
        <>
            {/* Weather Overlay Canvas (Pointer Events None) */}
            <canvas 
                ref={canvasRef}
                className="fixed inset-0 z-40 pointer-events-none"
            />
            
            {/* Sun Overlay - Brightness Flare */}
            <AnimatePresence>
                {weather === 'sun' && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-0 bg-gradient-to-tr from-orange-100/20 to-sky-200/20 pointer-events-none mix-blend-overlay"
                    />
                )}
            </AnimatePresence>

            {/* Weather Controller Dock */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 p-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 flex gap-2 shadow-2xl">
                <button 
                    onClick={() => setWeather('night')}
                    className={`p-3 rounded-full transition-all hover:scale-110 ${weather === 'night' ? 'bg-white/20 text-white shadow-lg' : 'text-white/40 hover:text-white'}`}
                    aria-label="Night Mode"
                >
                    <Moon size={20} />
                </button>
                <button 
                    onClick={() => setWeather('snow')}
                    className={`p-3 rounded-full transition-all hover:scale-110 ${weather === 'snow' ? 'bg-white/20 text-white shadow-lg' : 'text-white/40 hover:text-white'}`}
                    aria-label="Snow Mode"
                >
                    <Snowflake size={20} />
                </button>
                <button 
                    onClick={() => setWeather('rain')}
                    className={`p-3 rounded-full transition-all hover:scale-110 ${weather === 'rain' ? 'bg-white/20 text-white shadow-lg' : 'text-white/40 hover:text-white'}`}
                    aria-label="Rain Mode"
                >
                    <CloudRain size={20} />
                </button>
                <button 
                    onClick={() => setWeather('sun')}
                    className={`p-3 rounded-full transition-all hover:scale-110 ${weather === 'sun' ? 'bg-white/20 text-yellow-300 shadow-lg shadow-yellow-500/20' : 'text-white/40 hover:text-yellow-200'}`}
                    aria-label="Sun Mode"
                >
                    <Sun size={20} />
                </button>
            </div>
        </>
    );
};

export default WeatherSystem;
