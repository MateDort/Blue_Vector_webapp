export const boats = [
    {
        id: 'bv-001',
        name: 'Nautilus Explorer',
        isLive: true,
        position: { x: 38, y: 42 },
        speed: 4.2,
        heading: 127,
        battery: 87,
        coordinates: { lat: 28.5383, lng: -80.6050 },
        route: 'Cape Canaveral → Bermuda',
        health: {
            motor: { status: 'healthy', label: 'Propulsion Motor' },
            solar: { status: 'healthy', label: 'Solar Array' },
            comms: { status: 'healthy', label: 'Communications' },
            hull: { status: 'healthy', label: 'Hull Integrity' },
            sensors: { status: 'warning', label: 'Sensor Suite' },
            gps: { status: 'healthy', label: 'GPS Module' },
        },
        research: [
            {
                type: 'Marine Life',
                title: 'Pod of Atlantic Spotted Dolphins',
                description: 'Observed a pod of approximately 15 Atlantic spotted dolphins (Stenella frontalis) at 28.4°N, 79.8°W. The pod was traveling northeast at approximately 8 knots. Several juveniles were observed engaging in bow-riding behavior near the vessel.',
                timestamp: '2026-02-21T14:23:00Z',
                temperature: 24.3,
                salinity: 35.8,
            },
            {
                type: 'Ocean Current',
                title: 'Gulf Stream Thermal Boundary',
                description: 'Detected sharp thermal gradient marking the western edge of the Gulf Stream. Water temperature increased 3.2°C over 2 nautical miles. Current speed measured at 4.1 knots heading NNE. This boundary is consistent with seasonal Gulf Stream positioning.',
                timestamp: '2026-02-21T12:05:00Z',
                temperature: 27.5,
                salinity: 36.2,
            },
            {
                type: 'Water Quality',
                title: 'Sargassum Accumulation Zone',
                description: 'Encountered extensive Sargassum natans mat approximately 800m in length. Water samples show elevated nutrient levels. Multiple juvenile fish species observed sheltering within the seaweed structure. Microplastic count: 12 particles per liter.',
                timestamp: '2026-02-21T09:17:00Z',
                temperature: 25.1,
                salinity: 35.5,
            },
        ],
        aiSummary: `Based on the collected sensor data and visual observations from Nautilus Explorer's current mission leg (Cape Canaveral → Bermuda), several notable findings emerge:

**Marine Biodiversity**: The vessel has documented significant marine megafauna activity along the Gulf Stream corridor. The Atlantic spotted dolphin pod sighting adds to growing evidence of increased cetacean presence in this region during late February, potentially correlating with seasonal fish migration patterns.

**Oceanographic Conditions**: The Gulf Stream thermal boundary was detected at its expected seasonal latitude, with a particularly sharp gradient (3.2°C/2nm). Current velocities of 4.1 knots are within normal parameters and have been leveraged by the vessel's routing algorithm to reduce propulsion energy by an estimated 34%.

**Environmental Concerns**: The Sargassum accumulation zone, combined with microplastic measurements of 12 particles/L, suggests ongoing anthropogenic impact on surface water quality. This data contributes to the broader monitoring of Great Atlantic Sargassum Belt dynamics.

**Routing Efficiency**: The vessel's energy-aware routing algorithm successfully identified and utilized a favorable current corridor, maintaining an average speed of 4.2 knots while consuming only 13% of stored battery capacity over the last 6 hours.`,
    },
    {
        id: 'bv-002',
        name: 'Poseidon Drift',
        isLive: false,
        position: { x: 55, y: 35 },
        speed: 3.8,
        heading: 245,
        battery: 62,
        coordinates: { lat: 32.3078, lng: -64.7505 },
        route: 'Bermuda → Azores',
        eta: '2026-03-14T08:00:00Z',
        cargoType: 'Scientific Equipment',
        cargoWeight: '450 kg',
        health: {
            motor: { status: 'healthy', label: 'Propulsion Motor' },
            solar: { status: 'warning', label: 'Solar Array' },
            comms: { status: 'healthy', label: 'Communications' },
            hull: { status: 'healthy', label: 'Hull Integrity' },
            sensors: { status: 'healthy', label: 'Sensor Suite' },
            gps: { status: 'healthy', label: 'GPS Module' },
        },
        research: [
            {
                type: 'Ocean Current',
                title: 'North Atlantic Gyre Measurement',
                description: 'Consistent clockwise circulation measured at 1.8 knots. The vessel is leveraging the North Atlantic subtropical gyre for energy-efficient transit toward the Azores.',
                timestamp: '2026-02-20T16:45:00Z',
                temperature: 21.7,
                salinity: 36.4,
            },
        ],
        aiSummary: `Poseidon Drift is currently en route from Bermuda to the Azores carrying 450kg of scientific monitoring equipment for the University of Lisbon's oceanographic research station.

**Transit Efficiency**: The vessel has been successfully riding the North Atlantic subtropical gyre, achieving 62% propulsion energy savings compared to direct routing. Current ETA remains on schedule for March 14th.

**Solar Array Notice**: Partial shading detected on panel array #2 — likely bio-fouling accumulation. Performance degradation estimated at 15%. Recommend inspection at next port.

**Environmental Data**: Continuous temperature and salinity logging reveals typical mid-Atlantic conditions with no anomalies detected.`,
    },
    {
        id: 'bv-003',
        name: 'Coral Surveyor',
        isLive: false,
        position: { x: 25, y: 58 },
        speed: 2.1,
        heading: 90,
        battery: 94,
        coordinates: { lat: 18.4655, lng: -66.1057 },
        route: 'San Juan → Virgin Islands',
        eta: '2026-02-22T16:00:00Z',
        cargoType: 'Marine Biology Samples',
        cargoWeight: '120 kg',
        health: {
            motor: { status: 'healthy', label: 'Propulsion Motor' },
            solar: { status: 'healthy', label: 'Solar Array' },
            comms: { status: 'healthy', label: 'Communications' },
            hull: { status: 'healthy', label: 'Hull Integrity' },
            sensors: { status: 'healthy', label: 'Sensor Suite' },
            gps: { status: 'healthy', label: 'GPS Module' },
        },
        research: [
            {
                type: 'Marine Life',
                title: 'Sea Turtle Nesting Activity',
                description: 'Observed 3 juvenile hawksbill sea turtles near reef structure at 18.3°N, 65.8°W. Animals appeared healthy with normal diving behavior.',
                timestamp: '2026-02-21T07:30:00Z',
                temperature: 26.8,
                salinity: 35.2,
            },
        ],
        aiSummary: `Coral Surveyor is conducting a short-range marine biology mission between San Juan and the Virgin Islands, focused on coral reef health assessment.

**Marine Life Observations**: Hawksbill sea turtle sightings confirm continued population recovery in the region. The three juveniles documented today add to 17 total sightings this month.

**Vessel Status**: All systems nominal. Battery at 94% with excellent solar conditions. Expected arrival at St. Thomas within 24 hours.`,
    },
    {
        id: 'bv-004',
        name: 'Atlantic Pioneer',
        isLive: false,
        position: { x: 72, y: 28 },
        speed: 5.1,
        heading: 78,
        battery: 45,
        coordinates: { lat: 36.7783, lng: -25.5015 },
        route: 'Azores → Lisbon',
        eta: '2026-02-26T12:00:00Z',
        cargoType: 'Oceanographic Instruments',
        cargoWeight: '780 kg',
        health: {
            motor: { status: 'warning', label: 'Propulsion Motor' },
            solar: { status: 'healthy', label: 'Solar Array' },
            comms: { status: 'critical', label: 'Communications' },
            hull: { status: 'healthy', label: 'Hull Integrity' },
            sensors: { status: 'healthy', label: 'Sensor Suite' },
            gps: { status: 'healthy', label: 'GPS Module' },
        },
        research: [
            {
                type: 'Water Quality',
                title: 'Mid-Atlantic Depth Profile',
                description: 'Completed vertical water column profile from surface to 200m depth. Thermocline detected at 85m. Dissolved oxygen levels nominal throughout.',
                timestamp: '2026-02-19T11:20:00Z',
                temperature: 18.3,
                salinity: 36.8,
            },
        ],
        aiSummary: `Atlantic Pioneer is nearing the final leg of its Azores-to-Lisbon transit carrying oceanographic instruments.

**System Alerts**: 
- Motor vibration levels elevated — potential bearing wear detected. Recommend reduced speed operation.
- Communications antenna intermittent — satellite uplink dropping to 60% reliability. Backup VHF operational.

**Routing Update**: Despite motor advisory, the vessel is leveraging the Canary Current for eastward transit. Energy savings of 28% compared to direct propulsion. Battery reserves adequate for remaining distance at reduced speed.`,
    },
    {
        id: 'bv-005',
        name: 'Caribbean Sentinel',
        isLive: false,
        position: { x: 18, y: 52 },
        speed: 1.5,
        heading: 180,
        battery: 98,
        coordinates: { lat: 21.4691, lng: -71.1389 },
        route: 'Turks & Caicos — Stationary Survey',
        eta: null,
        cargoType: 'Environmental Monitoring Array',
        cargoWeight: '200 kg',
        health: {
            motor: { status: 'healthy', label: 'Propulsion Motor' },
            solar: { status: 'healthy', label: 'Solar Array' },
            comms: { status: 'healthy', label: 'Communications' },
            hull: { status: 'healthy', label: 'Hull Integrity' },
            sensors: { status: 'healthy', label: 'Sensor Suite' },
            gps: { status: 'healthy', label: 'GPS Module' },
        },
        research: [
            {
                type: 'Marine Life',
                title: 'Humpback Whale Migration Tracking',
                description: 'Detected humpback whale vocalizations via hydrophone array. Estimated 4-6 individuals passing within 2nm of survey station. Singing behavior recorded — consistent with mating season patterns.',
                timestamp: '2026-02-21T05:12:00Z',
                temperature: 25.4,
                salinity: 35.0,
            },
            {
                type: 'Ocean Current',
                title: 'Antilles Current Flow Mapping',
                description: 'Continuous ADCP measurements showing the Antilles Current at 1.2 knots flowing NW along the continental shelf edge. Minor eddy formation detected to the east.',
                timestamp: '2026-02-20T22:30:00Z',
                temperature: 24.9,
                salinity: 35.3,
            },
        ],
        aiSummary: `Caribbean Sentinel is stationed near Turks & Caicos conducting a long-duration environmental monitoring survey.

**Whale Migration**: Hydrophone recordings confirm active humpback whale passage through this corridor. This is peak season for North Atlantic humpback migration. The acoustic data collected here will contribute to the NOAA Caribbean Cetacean Assessment Program.

**Current Dynamics**: The Antilles Current is behaving within normal parameters. The minor eddy formation detected may create temporary nutrient upwelling favorable for pelagic species aggregation.

**Station Keeping**: The vessel is maintaining position with minimal propulsion, using micro-corrections to hold within a 500m survey box. Battery consumption is negligible due to favorable solar conditions.`,
    },
];

export const currentFlows = [
    { x1: 10, y1: 45, x2: 30, y2: 40, strength: 0.8 },
    { x1: 30, y1: 40, x2: 50, y2: 35, strength: 0.9 },
    { x1: 50, y1: 35, x2: 70, y2: 30, strength: 0.7 },
    { x1: 70, y1: 30, x2: 85, y2: 35, strength: 0.6 },
    { x1: 85, y1: 35, x2: 90, y2: 50, strength: 0.5 },
    { x1: 15, y1: 55, x2: 25, y2: 50, strength: 0.6 },
    { x1: 25, y1: 50, x2: 40, y2: 45, strength: 0.7 },
    { x1: 40, y1: 60, x2: 55, y2: 55, strength: 0.5 },
    { x1: 60, y1: 50, x2: 75, y2: 45, strength: 0.8 },
    { x1: 20, y1: 65, x2: 35, y2: 60, strength: 0.4 },
    { x1: 5, y1: 35, x2: 15, y2: 40, strength: 0.6 },
    { x1: 45, y1: 25, x2: 60, y2: 28, strength: 0.7 },
    { x1: 75, y1: 40, x2: 88, y2: 42, strength: 0.5 },
];

export const windPatterns = [
    { x: 20, y: 30, angle: 45, strength: 0.6 },
    { x: 40, y: 25, angle: 60, strength: 0.8 },
    { x: 60, y: 35, angle: 50, strength: 0.5 },
    { x: 80, y: 30, angle: 70, strength: 0.7 },
    { x: 30, y: 55, angle: 30, strength: 0.4 },
    { x: 50, y: 50, angle: 55, strength: 0.6 },
    { x: 70, y: 45, angle: 40, strength: 0.5 },
    { x: 15, y: 60, angle: 20, strength: 0.3 },
    { x: 85, y: 50, angle: 65, strength: 0.4 },
    { x: 45, y: 40, angle: 45, strength: 0.7 },
];
