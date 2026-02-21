import { useRef, useEffect } from 'react';

export default function OceanBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationId;
        let particles = [];
        const PARTICLE_COUNT = 180;

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        function createParticle() {
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: 0.3 + Math.random() * 0.8,
                vy: -0.2 + Math.random() * 0.4,
                size: 1 + Math.random() * 2,
                opacity: 0.1 + Math.random() * 0.3,
                life: Math.random() * 200,
            };
        }

        function init() {
            resize();
            particles = [];
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                particles.push(createParticle());
            }
        }

        function drawOcean(time) {
            // Deep ocean gradient
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, '#061a2e');
            gradient.addColorStop(0.3, '#0a2540');
            gradient.addColorStop(0.6, '#0d3158');
            gradient.addColorStop(1, '#0f3d6e');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Wave layers
            for (let layer = 0; layer < 4; layer++) {
                ctx.beginPath();
                ctx.moveTo(0, canvas.height);
                const baseY = canvas.height * (0.5 + layer * 0.12);
                const amplitude = 15 + layer * 8;
                const frequency = 0.002 - layer * 0.0003;
                const speed = (0.0003 + layer * 0.0001) * time;

                for (let x = 0; x <= canvas.width; x += 3) {
                    const y = baseY
                        + Math.sin(x * frequency + speed) * amplitude
                        + Math.sin(x * frequency * 2.3 + speed * 1.5) * (amplitude * 0.4)
                        + Math.cos(x * frequency * 0.7 + speed * 0.8) * (amplitude * 0.3);
                    ctx.lineTo(x, y);
                }

                ctx.lineTo(canvas.width, canvas.height);
                ctx.closePath();
                const waveAlpha = 0.03 + layer * 0.015;
                ctx.fillStyle = `rgba(26, 115, 232, ${waveAlpha})`;
                ctx.fill();
            }
        }

        function drawCurrentLines(time) {
            const flows = [
                { y: 0.25, speed: 0.6, width: 3, opacity: 0.08 },
                { y: 0.35, speed: 0.45, width: 4, opacity: 0.06 },
                { y: 0.5, speed: 0.55, width: 3, opacity: 0.07 },
                { y: 0.65, speed: 0.4, width: 5, opacity: 0.05 },
                { y: 0.8, speed: 0.5, width: 3, opacity: 0.06 },
            ];

            flows.forEach(flow => {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(100, 180, 255, ${flow.opacity})`;
                ctx.lineWidth = flow.width;
                const baseY = canvas.height * flow.y;
                for (let x = 0; x <= canvas.width; x += 2) {
                    const offset = Math.sin(x * 0.003 + time * 0.0004 * flow.speed) * 30
                        + Math.sin(x * 0.001 + time * 0.0002) * 20;
                    if (x === 0) ctx.moveTo(x, baseY + offset);
                    else ctx.lineTo(x, baseY + offset);
                }
                ctx.stroke();
            });
        }

        function drawParticles(time) {
            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy + Math.sin(time * 0.001 + i) * 0.15;
                p.life--;

                if (p.x > canvas.width + 10 || p.life <= 0) {
                    particles[i] = createParticle();
                    particles[i].x = -5;
                }

                const fadeIn = Math.min(p.life / 30, 1);
                const alpha = p.opacity * fadeIn;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(120, 200, 255, ${alpha})`;
                ctx.fill();
            });
        }

        function drawWindArrows(time) {
            const arrows = [
                { x: 0.15, y: 0.2, angle: 40 },
                { x: 0.35, y: 0.15, angle: 55 },
                { x: 0.55, y: 0.22, angle: 45 },
                { x: 0.75, y: 0.18, angle: 60 },
                { x: 0.25, y: 0.4, angle: 35 },
                { x: 0.65, y: 0.38, angle: 50 },
                { x: 0.85, y: 0.3, angle: 42 },
                { x: 0.45, y: 0.55, angle: 30 },
            ];

            arrows.forEach((arrow, i) => {
                const px = arrow.x * canvas.width;
                const py = arrow.y * canvas.height;
                const rad = (arrow.angle * Math.PI) / 180;
                const len = 25 + Math.sin(time * 0.001 + i * 2) * 5;
                const sway = Math.sin(time * 0.0008 + i * 1.5) * 0.1;

                ctx.save();
                ctx.translate(px, py);
                ctx.rotate(rad + sway);
                ctx.strokeStyle = `rgba(180, 220, 255, ${0.12 + Math.sin(time * 0.001 + i) * 0.04})`;
                ctx.lineWidth = 1.5;

                ctx.beginPath();
                ctx.moveTo(-len / 2, 0);
                ctx.lineTo(len / 2, 0);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(len / 2, 0);
                ctx.lineTo(len / 2 - 6, -4);
                ctx.moveTo(len / 2, 0);
                ctx.lineTo(len / 2 - 6, 4);
                ctx.stroke();

                ctx.restore();
            });
        }

        function animate(time) {
            drawOcean(time);
            drawCurrentLines(time);
            drawWindArrows(time);
            drawParticles(time);
            animationId = requestAnimationFrame(animate);
        }

        init();
        animationId = requestAnimationFrame(animate);
        window.addEventListener('resize', init);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', init);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
            }}
        />
    );
}
