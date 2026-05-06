// Define Wonkwang University bounding box
const mapBounds = [
    [35.9640, 126.9460], // SouthWest
    [35.9790, 126.9650]  // NorthEast
];

// Initialize map centered at Wonkwang University
const map = L.map('map', {
    zoomControl: false, // We will move it to a better position if needed
    maxBounds: mapBounds,
    maxBoundsViscosity: 1.0,
    minZoom: 15
}).setView([35.9720, 126.9550], 16);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Masking polygon to hide everything outside the campus
const outerBounds = [
    [-90, -180],
    [90, -180],
    [90, 180],
    [-90, 180]
];

// Create a hole in the polygon for the campus area
const campusHole = [
    [35.9790, 126.9460], // NW
    [35.9790, 126.9650], // NE
    [35.9640, 126.9650], // SE
    [35.9640, 126.9460]  // SW
];

// Add the inverted polygon to the map
L.polygon([outerBounds, campusHole], {
    color: '#f4f6f8', // Match the app background color
    fillColor: '#f4f6f8',
    fillOpacity: 1,
    weight: 0 // No border
}).addTo(map);

// Add Zoom Control at bottom right to not overlap with our header
L.control.zoom({
    position: 'bottomright'
}).addTo(map);

// State variables
let currentLanguage = 'en'; // Default to English based on index.html selected option
let activeMarkerId = null;

// DOM Elements
const languageSelector = document.getElementById('language-selector');
const infoPanel = document.getElementById('info-panel');
const closePanelBtn = document.getElementById('close-panel');
const buildingTitle = document.getElementById('building-title');
const buildingNumber = document.getElementById('building-number');
const buildingHours = document.getElementById('building-hours');
const buildingDesc = document.getElementById('building-desc');

// Intro Screen Logic
const introScreen = document.getElementById('intro-screen');
const enterAppBtn = document.getElementById('enter-app-btn');

enterAppBtn.addEventListener('click', () => {
    introScreen.classList.add('hidden');
    setTimeout(() => {
        map.invalidateSize(); // Ensure map loads correctly after display change
    }, 600);
});

// Custom Icon for Markers
const createCustomIcon = () => {
    return L.divIcon({
        className: 'custom-pin',
        html: `<div class="pin-marker"></div>`,
        iconSize: [22, 22],
        iconAnchor: [0, 0],
        popupAnchor: [0, -11]
    });
};

// Add markers to the map
const markers = {};

buildings.forEach(building => {
    const marker = L.marker([building.lat, building.lng], {
        title: building.names[currentLanguage],
        icon: createCustomIcon()
    }).addTo(map);

    markers[building.id] = marker;

    marker.on('click', () => {
        openPanel(building.id);
    });
});

// Update panel content based on selected language and building
function updatePanelContent(buildingId) {
    const building = buildings.find(b => b.id === buildingId);
    if (!building) return;

    buildingTitle.textContent = building.names[currentLanguage];
    buildingNumber.textContent = `No. ${building.number}`;
    buildingHours.textContent = `🕒 ${building.hours[currentLanguage]}`;
    buildingDesc.textContent = building.descriptions[currentLanguage];
}

// Open Information Panel
function openPanel(buildingId) {
    activeMarkerId = buildingId;
    updatePanelContent(buildingId);
    
    // Pan map to the selected marker slightly offset to accommodate the panel
    const building = buildings.find(b => b.id === buildingId);
    if (building) {
        // Adjust latitude slightly so marker isn't hidden behind the panel on mobile
        const offsetLat = building.lat - 0.0015;
        map.flyTo([offsetLat, building.lng], 17, {
            duration: 0.5
        });
    }

    infoPanel.classList.remove('hidden');
    // small delay to allow display:block to apply before animating transform
    setTimeout(() => {
        infoPanel.classList.add('show');
    }, 10);
}

// Close Information Panel
function closePanel() {
    activeMarkerId = null;
    infoPanel.classList.remove('show');
    // Wait for transition to finish before hiding completely
    setTimeout(() => {
        if(!activeMarkerId) infoPanel.classList.add('hidden');
    }, 400);
}

// Event Listeners
closePanelBtn.addEventListener('click', closePanel);

languageSelector.addEventListener('change', (e) => {
    currentLanguage = e.target.value;
    
    // Update marker tooltips (titles) if necessary, though tooltip hover is native
    // To update marker tooltips, we can just re-bind or update element properties.
    // For simplicity, we just update the panel if it's open.
    if (activeMarkerId) {
        updatePanelContent(activeMarkerId);
    }
});
