import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { boats } from '../data/mockData.js';

export default function OceanMap() {
    const navigate = useNavigate();
    const [boatPositions, setBoatPositions] = useState(
        boats.map(b => ({ ...b.position }))
    );
    const [hoveredBoat, setHoveredBoat] = useState(null);
    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

    // Simulate live GPS movement for the live boat
    useEffect(() => {
        const interval = setInterval(() => {
            setBoatPositions(prev => prev.map((pos, i) => {
                if (boats[i].isLive) {
                    return {
                        x: pos.x + (Math.random() - 0.4) * 0.15,
                        y: pos.y + (Math.random() - 0.5) * 0.1,
                    };
                }
                return pos;
            }));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="ocean-map-overlay">
            {/* Land masses (simplified) */}
            <svg className="map-landmasses" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* North America East Coast */}
                <path
                    d="M 2,8 L 8,10 L 12,15 L 10,22 L 8,28 L 5,32 L 6,38 L 8,42 L 7,45 L 4,46 L 2,42 L 0,35 L 0,8 Z"
                    fill="rgba(30, 70, 40, 0.3)"
                    stroke="rgba(60, 140, 80, 0.25)"
                    strokeWidth="0.3"
                />
                {/* Florida */}
                <path
                    d="M 5,42 L 8,42 L 10,48 L 9,52 L 7,50 L 5,46 Z"
                    fill="rgba(30, 70, 40, 0.3)"
                    stroke="rgba(60, 140, 80, 0.25)"
                    strokeWidth="0.3"
                />
                {/* Caribbean Islands */}
                <circle cx="14" cy="58" r="1.5" fill="rgba(30, 70, 40, 0.25)" />
                <circle cx="18" cy="60" r="1" fill="rgba(30, 70, 40, 0.25)" />
                <circle cx="22" cy="62" r="0.8" fill="rgba(30, 70, 40, 0.25)" />
                <circle cx="26" cy="63" r="0.6" fill="rgba(30, 70, 40, 0.25)" />
                {/* South America Top */}
                <path
                    d="M 20,70 L 30,68 L 35,72 L 32,78 L 25,80 L 18,78 L 15,74 Z"
                    fill="rgba(30, 70, 40, 0.25)"
                    stroke="rgba(60, 140, 80, 0.2)"
                    strokeWidth="0.3"
                />
                {/* Europe/Africa West */}
                <path
                    d="M 82,5 L 88,8 L 92,12 L 95,18 L 98,22 L 100,22 L 100,5 Z"
                    fill="rgba(30, 70, 40, 0.3)"
                    stroke="rgba(60, 140, 80, 0.25)"
                    strokeWidth="0.3"
                />
                <path
                    d="M 88,25 L 95,24 L 100,28 L 100,45 L 95,48 L 90,44 L 88,38 L 86,30 Z"
                    fill="rgba(30, 70, 40, 0.25)"
                    stroke="rgba(60, 140, 80, 0.2)"
                    strokeWidth="0.3"
                />
                {/* Azores */}
                <circle cx="78" cy="28" r="0.6" fill="rgba(30, 70, 40, 0.3)" />
                <circle cx="76" cy="29" r="0.4" fill="rgba(30, 70, 40, 0.3)" />
                {/* Bermuda */}
                <circle cx="22" cy="32" r="0.5" fill="rgba(30, 70, 40, 0.3)" />
            </svg>

            {/* Grid lines */}
            <svg className="map-grid" viewBox="0 0 100 100" preserveAspectRatio="none">
                {[20, 40, 60, 80].map(v => (
                    <g key={v}>
                        <line x1={v} y1="0" x2={v} y2="100" stroke="rgba(100,180,255,0.06)" strokeWidth="0.15" />
                        <line x1="0" y1={v} x2="100" y2={v} stroke="rgba(100,180,255,0.06)" strokeWidth="0.15" />
                    </g>
                ))}
            </svg>

            {/* Current flow arrows */}
            <svg className="map-currents" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <marker id="arrowhead" markerWidth="4" markerHeight="3" refX="4" refY="1.5" orient="auto">
                        <polygon points="0 0, 4 1.5, 0 3" fill="rgba(100,180,255,0.2)" />
                    </marker>
                </defs>
                {/* Gulf Stream */}
                <path
                    d="M 8,50 C 15,45 25,38 35,35 C 45,32 55,30 65,28 C 75,26 85,28 92,32"
                    fill="none"
                    stroke="rgba(65,160,255,0.15)"
                    strokeWidth="0.8"
                    strokeDasharray="2,2"
                    markerEnd="url(#arrowhead)"
                >
                    <animate attributeName="stroke-dashoffset" from="40" to="0" dur="8s" repeatCount="indefinite" />
                </path>
                {/* South Equatorial */}
                <path
                    d="M 90,65 C 75,63 60,62 45,64 C 30,66 20,68 10,70"
                    fill="none"
                    stroke="rgba(65,160,255,0.1)"
                    strokeWidth="0.6"
                    strokeDasharray="2,2"
                >
                    <animate attributeName="stroke-dashoffset" from="40" to="0" dur="10s" repeatCount="indefinite" />
                </path>
                {/* Caribbean current */}
                <path
                    d="M 30,60 C 22,57 15,54 10,52"
                    fill="none"
                    stroke="rgba(65,160,255,0.12)"
                    strokeWidth="0.5"
                    strokeDasharray="1.5,1.5"
                >
                    <animate attributeName="stroke-dashoffset" from="30" to="0" dur="6s" repeatCount="indefinite" />
                </path>
            </svg>

            {/* Boat markers */}
            {boats.map((boat, i) => (
                <div
                    key={boat.id}
                    className={`boat-marker ${boat.isLive ? 'boat-marker-live' : ''}`}
                    style={{
                        left: `${boatPositions[i].x}%`,
                        top: `${boatPositions[i].y}%`,
                    }}
                    onClick={() => navigate(`/boat/${boat.id}`)}
                    onMouseEnter={(e) => {
                        setHoveredBoat(boat);
                        setTooltipPos({ x: e.clientX, y: e.clientY });
                    }}
                    onMouseLeave={() => setHoveredBoat(null)}
                    onMouseMove={(e) => {
                        setTooltipPos({ x: e.clientX, y: e.clientY });
                    }}
                >
                    <span className="boat-marker-ping" />
                    <span className="boat-marker-dot" />
                    {boat.isLive && <span className="boat-marker-live-badge">LIVE</span>}
                </div>
            ))}

            {/* Tooltip */}
            {hoveredBoat && (
                <div
                    className="boat-tooltip"
                    style={{
                        left: tooltipPos.x + 16,
                        top: tooltipPos.y - 10,
                    }}
                >
                    <div className="boat-tooltip-name">{hoveredBoat.name}</div>
                    <div className="boat-tooltip-route">{hoveredBoat.route}</div>
                    <div className="boat-tooltip-meta">
                        <span>{hoveredBoat.speed} kts</span>
                        <span>{hoveredBoat.battery}% battery</span>
                    </div>
                </div>
            )}

            {/* Map labels */}
            <div className="map-label" style={{ left: '3%', top: '15%' }}>North America</div>
            <div className="map-label" style={{ left: '88%', top: '12%' }}>Europe</div>
            <div className="map-label" style={{ left: '88%', top: '38%' }}>Africa</div>
            <div className="map-label" style={{ left: '40%', top: '30%', opacity: 0.3, fontSize: '0.65rem' }}>North Atlantic Ocean</div>
        </div>
    );
}
