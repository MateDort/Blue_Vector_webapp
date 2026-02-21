import OceanBackground from '../components/OceanBackground.jsx';
import OceanMap from '../components/OceanMap.jsx';

export default function MainPage() {
    return (
        <div className="main-page">
            <OceanBackground />

            {/* Header */}
            <header className="main-header">
                <div className="header-logo">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="14" stroke="rgba(100,180,255,0.6)" strokeWidth="1.5" fill="rgba(10,37,64,0.6)" />
                        <path d="M 8,18 Q 12,12 16,18 Q 20,24 24,18" stroke="#1a73e8" strokeWidth="2" fill="none" strokeLinecap="round" />
                        <path d="M 8,14 Q 12,8 16,14 Q 20,20 24,14" stroke="rgba(100,180,255,0.4)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                        <circle cx="16" cy="12" r="2" fill="#1a73e8" />
                    </svg>
                    <div className="header-title">
                        <h1>Blue Vector</h1>
                        <span className="header-subtitle">Maritime Intelligence Platform</span>
                    </div>
                </div>
                <div className="header-stats">
                    <div className="header-stat">
                        <span className="stat-value">5</span>
                        <span className="stat-label">Active Vessels</span>
                    </div>
                    <div className="header-stat">
                        <span className="stat-value live-indicator">1</span>
                        <span className="stat-label">Live Tracking</span>
                    </div>
                    <div className="header-stat">
                        <span className="stat-value">34%</span>
                        <span className="stat-label">Avg. Energy Saved</span>
                    </div>
                </div>
            </header>

            {/* Ocean Map with Boats */}
            <OceanMap />

            {/* Legend */}
            <div className="map-legend">
                <div className="legend-item">
                    <span className="legend-dot legend-dot-live" />
                    <span>Live Tracking</span>
                </div>
                <div className="legend-item">
                    <span className="legend-dot legend-dot-active" />
                    <span>Active Vessel</span>
                </div>
                <div className="legend-item">
                    <span className="legend-line" />
                    <span>Ocean Current</span>
                </div>
            </div>

            {/* Bottom info bar */}
            <div className="info-bar">
                <span>Click a vessel marker to view detailed information</span>
                <span className="info-bar-time">
                    {new Date().toLocaleString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        timeZoneName: 'short',
                    })}
                </span>
            </div>
        </div>
    );
}
