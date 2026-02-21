import { useParams, useNavigate } from 'react-router-dom';
import { boats } from '../data/mockData.js';

const statusColor = {
    healthy: '#22c55e',
    warning: '#f59e0b',
    critical: '#ef4444',
};

const statusLabel = {
    healthy: 'Operational',
    warning: 'Warning',
    critical: 'Critical',
};

function VesselDiagram({ health }) {
    const components = Object.entries(health);
    return (
        <div className="vessel-diagram">
            <svg viewBox="0 0 400 240" className="vessel-svg">
                {/* Water line */}
                <path d="M 0,200 Q 50,195 100,200 Q 150,205 200,200 Q 250,195 300,200 Q 350,205 400,200 L 400,240 L 0,240 Z" fill="rgba(26,115,232,0.08)" />

                {/* Hull */}
                <path
                    d="M 60,170 L 80,190 L 320,190 L 340,170 L 330,130 Q 320,110 300,100 L 100,100 Q 80,110 70,130 Z"
                    fill="rgba(15,61,110,0.6)"
                    stroke="rgba(100,180,255,0.4)"
                    strokeWidth="1.5"
                />

                {/* Deck */}
                <rect x="100" y="95" width="200" height="8" rx="3" fill="rgba(26,115,232,0.3)" stroke="rgba(100,180,255,0.3)" strokeWidth="0.8" />

                {/* Cabin */}
                <rect x="140" y="60" width="80" height="35" rx="5" fill="rgba(15,61,110,0.7)" stroke="rgba(100,180,255,0.35)" strokeWidth="1" />
                <rect x="150" y="68" width="15" height="10" rx="2" fill="rgba(100,180,255,0.15)" />
                <rect x="172" y="68" width="15" height="10" rx="2" fill="rgba(100,180,255,0.15)" />
                <rect x="194" y="68" width="15" height="10" rx="2" fill="rgba(100,180,255,0.15)" />

                {/* Antenna/Comms */}
                <line x1="180" y1="35" x2="180" y2="60" stroke="rgba(100,180,255,0.5)" strokeWidth="1.5" />
                <circle cx="180" cy="32" r="3" fill={statusColor[health.comms.status]} opacity="0.8" />

                {/* Solar panels */}
                <rect x="240" y="78" width="50" height="16" rx="2" fill="rgba(50,120,200,0.3)" stroke={statusColor[health.solar.status]} strokeWidth="1" opacity="0.8" />
                <line x1="250" y1="78" x2="250" y2="94" stroke="rgba(100,180,255,0.2)" strokeWidth="0.5" />
                <line x1="260" y1="78" x2="260" y2="94" stroke="rgba(100,180,255,0.2)" strokeWidth="0.5" />
                <line x1="270" y1="78" x2="270" y2="94" stroke="rgba(100,180,255,0.2)" strokeWidth="0.5" />
                <line x1="280" y1="78" x2="280" y2="94" stroke="rgba(100,180,255,0.2)" strokeWidth="0.5" />

                {/* Motor */}
                <rect x="310" y="135" width="25" height="30" rx="4" fill="rgba(15,61,110,0.5)" stroke={statusColor[health.motor.status]} strokeWidth="1.2" />
                <circle cx="345" cy="155" r="8" fill="rgba(15,61,110,0.4)" stroke={statusColor[health.motor.status]} strokeWidth="1" />
                <line x1="345" y1="148" x2="345" y2="162" stroke={statusColor[health.motor.status]} strokeWidth="0.8" opacity="0.6" />

                {/* Sensor array */}
                <rect x="85" y="120" width="20" height="30" rx="3" fill="rgba(15,61,110,0.5)" stroke={statusColor[health.sensors.status]} strokeWidth="1" />
                <circle cx="95" cy="130" r="3" fill={statusColor[health.sensors.status]} opacity="0.6" />
                <circle cx="95" cy="140" r="3" fill={statusColor[health.sensors.status]} opacity="0.6" />

                {/* GPS */}
                <circle cx="230" cy="55" r="6" fill="rgba(15,61,110,0.5)" stroke={statusColor[health.gps.status]} strokeWidth="1" />
                <circle cx="230" cy="55" r="2" fill={statusColor[health.gps.status]} opacity="0.7" />

                {/* Hull indicator */}
                <circle cx="200" cy="160" r="5" fill="none" stroke={statusColor[health.hull.status]} strokeWidth="1.2" opacity="0.6" />
                <circle cx="200" cy="160" r="2" fill={statusColor[health.hull.status]} opacity="0.5" />
            </svg>

            <div className="vessel-components">
                {components.map(([key, comp]) => (
                    <div key={key} className="vessel-component-item">
                        <span
                            className="component-status-dot"
                            style={{ backgroundColor: statusColor[comp.status] }}
                        />
                        <span className="component-label">{comp.label}</span>
                        <span className="component-status" style={{ color: statusColor[comp.status] }}>
                            {statusLabel[comp.status]}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ResearchCard({ item }) {
    const typeColors = {
        'Marine Life': '#22c55e',
        'Ocean Current': '#3b82f6',
        'Water Quality': '#f59e0b',
    };

    return (
        <div className="research-card">
            <div className="research-card-header">
                <span className="research-type" style={{ backgroundColor: `${typeColors[item.type]}20`, color: typeColors[item.type] }}>
                    {item.type}
                </span>
                <span className="research-time">
                    {new Date(item.timestamp).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                </span>
            </div>
            <h3 className="research-title">{item.title}</h3>
            <p className="research-desc">{item.description}</p>
            <div className="research-meta">
                <span>🌡️ {item.temperature}°C</span>
                <span>🧂 {item.salinity} PSU</span>
            </div>
        </div>
    );
}

export default function BoatDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const boat = boats.find(b => b.id === id);

    if (!boat) {
        return (
            <div className="detail-page detail-not-found">
                <h2>Vessel not found</h2>
                <button onClick={() => navigate('/')}>← Back to Map</button>
            </div>
        );
    }

    return (
        <div className="detail-page">
            {/* Background gradient */}
            <div className="detail-bg" />

            {/* Back button */}
            <button className="back-button" onClick={() => navigate('/')}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Back to Map
            </button>

            {/* Header */}
            <div className="detail-header">
                <div className="detail-header-left">
                    <h1 className="detail-boat-name">{boat.name}</h1>
                    <div className="detail-boat-route">{boat.route}</div>
                    {boat.isLive && (
                        <span className="detail-live-badge">
                            <span className="live-pulse" /> LIVE TRACKING
                        </span>
                    )}
                </div>
                <div className="detail-header-right">
                    <div className="detail-quick-stats">
                        <div className="quick-stat">
                            <span className="quick-stat-value">{boat.speed}</span>
                            <span className="quick-stat-unit">knots</span>
                        </div>
                        <div className="quick-stat">
                            <span className="quick-stat-value">{boat.heading}°</span>
                            <span className="quick-stat-unit">heading</span>
                        </div>
                        <div className="quick-stat">
                            <span className="quick-stat-value">{boat.battery}%</span>
                            <span className="quick-stat-unit">battery</span>
                        </div>
                        <div className="quick-stat">
                            <span className="quick-stat-value">
                                {boat.coordinates.lat.toFixed(2)}°N
                            </span>
                            <span className="quick-stat-unit">
                                {Math.abs(boat.coordinates.lng).toFixed(2)}°W
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shipping info for non-live boats */}
            {!boat.isLive && boat.eta && (
                <div className="shipping-info-bar">
                    <div className="shipping-item">
                        <span className="shipping-label">ETA</span>
                        <span className="shipping-value">
                            {new Date(boat.eta).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </span>
                    </div>
                    <div className="shipping-item">
                        <span className="shipping-label">Cargo</span>
                        <span className="shipping-value">{boat.cargoType}</span>
                    </div>
                    <div className="shipping-item">
                        <span className="shipping-label">Weight</span>
                        <span className="shipping-value">{boat.cargoWeight}</span>
                    </div>
                </div>
            )}

            {/* Main content grid */}
            <div className="detail-grid">
                {/* Vessel Diagram & Health */}
                <div className="detail-card vessel-card">
                    <h2 className="card-title">Vessel Status</h2>
                    <VesselDiagram health={boat.health} />
                </div>

                {/* Research Findings */}
                <div className="detail-card research-list-card">
                    <h2 className="card-title">Research Findings</h2>
                    <div className="research-list">
                        {boat.research.map((item, i) => (
                            <ResearchCard key={i} item={item} />
                        ))}
                    </div>
                </div>

                {/* AI Summary */}
                <div className="detail-card ai-card">
                    <h2 className="card-title">
                        <span className="ai-icon">🤖</span> AI Research Analysis
                    </h2>
                    <div className="ai-summary">
                        {boat.aiSummary.split('\n\n').map((para, i) => {
                            if (para.startsWith('**')) {
                                const parts = para.split('**');
                                return (
                                    <p key={i} className="ai-paragraph">
                                        <strong>{parts[1]}</strong>{parts[2]}
                                    </p>
                                );
                            }
                            return <p key={i} className="ai-paragraph">{para}</p>;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
