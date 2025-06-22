import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapPage.css';

const center = [22.9734, 78.6569];

const resources = [
  {
    name: "Care NGO",
    city: "Chennai",
    address: "Chennai, Tamil Nadu",
    phone: "+91-44-8765-4321",
    email: "care@ngo.org",
    website: "https://carengo.org",
    description: "NGO offering support and protection to survivors.",
    tags: ["NGOs"],
    lat: 13.0827,
    lng: 80.2707,
    rating: 4.8,
    distance: 48.5
  },
  {
    name: "Healing Hands Medical Center",
    city: "Hyderabad",
    address: "Hyderabad, Telangana",
    phone: "+91-40-1122-3344",
    email: "support@healinghands.org",
    website: "https://healinghands.org",
    description: "Medical support center for physical and mental recovery.",
    tags: ["Medical Centers"],
    lat: 17.385,
    lng: 78.4867,
    rating: 4.5,
    distance: 62.3
  },
  {
    name: "Justice for All Legal Aid",
    city: "Delhi",
    address: "Connaught Place, New Delhi",
    phone: "+91-11-4455-6677",
    email: "justice@legal.org",
    website: "https://justiceforall.org",
    description: "Free legal aid for survivors including court case assistance.",
    tags: ["Legal Aid"],
    lat: 28.6139,
    lng: 77.209,
    rating: 4.7,
    distance: 82.1
  },
  {
    name: "Mind Relief Counseling Center",
    city: "Bangalore",
    address: "MG Road, Bangalore",
    phone: "+91-80-9988-7766",
    email: "counsel@mindrelief.org",
    website: "https://mindrelief.org",
    description: "Trained counselors offering therapy and mental health services.",
    tags: ["Counseling Centers"],
    lat: 12.9716,
    lng: 77.5946,
    rating: 4.6,
    distance: 57.9
  },
  {
    name: "Hope Recovery Center",
    city: "Mumbai",
    address: "Dadar West, Mumbai",
    phone: "+91-22-1234-5678",
    email: "hope@recovery.org",
    website: "https://hoperecovery.org",
    description: "Rehabilitation center for trauma recovery and therapy.",
    tags: ["Rehabilitation Centers"],
    lat: 19.076,
    lng: 72.8777,
    rating: 4.9,
    distance: 70.4
  },
  {
    name: "SafeNest Shelter",
    city: "Kolkata",
    address: "Park Street, Kolkata",
    phone: "+91-33-1234-5678",
    email: "contact@safenest.org",
    website: "https://safenest.org",
    description: "Secure temporary housing for survivors in crisis.",
    tags: ["Safe Houses"],
    lat: 22.5726,
    lng: 88.3639,
    rating: 4.4,
    distance: 66.7
  }
];

const categories = [
  "NGOs",
  "Medical Centers",
  "Legal Aid",
  "Counseling Centers",
  "Rehabilitation Centers",
  "Safe Houses"
];

const categoryIcons = {
  "NGOs": "💗",
  "Medical Centers": "🩺",
  "Legal Aid": "⚖️",
  "Counseling Centers": "🧠",
  "Rehabilitation Centers": "🏥",
  "Safe Houses": "🏠"
};

const categoryColors = {
  "NGOs": { bg: "#fdecea", color: "#d81b60" },
  "Medical Centers": { bg: "#e3f2fd", color: "#1976d2" },
  "Legal Aid": { bg: "#f3e5f5", color: "#8e24aa" },
  "Counseling Centers": { bg: "#ede7f6", color: "#5e35b1" },
  "Rehabilitation Centers": { bg: "#fff3e0", color: "#ef6c00" },
  "Safe Houses": { bg: "#e8f5e9", color: "#43a047" }
};

const MapPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedResource, setSelectedResource] = useState(null);

  const filteredResources = resources.filter((res) => {
    const matchesSearch = res.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "" || res.tags.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
  };

  return (
    <div className="map-wrapper">
      <div className="map-header">
        <div className="logo-title">
          <img src="/Map Logo.png" alt="Location Logo" className="logo-image" style={{maxWidth: "40px",maxHeight: "40px",objectFit: "contain",display: "block" }}/>

          <div className="title-text">
            <h1>Resource Map</h1>
            <p>Find support services near you across India</p>
          </div>
        </div>

        <div className="search-section">
          <input
            type="text"
            className="search-input"
            placeholder="🔍 Search by location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="clear-button" onClick={handleClearFilters}>
            Clear Filters
          </button>
        </div>
      </div>

      <div className="filter-bar">
        {categories.map((item, i) => (
          <button
            key={i}
            className={selectedCategory === item ? "filter-button active" : "filter-button"}
            onClick={() => setSelectedCategory(selectedCategory === item ? "" : item)}
          >
            {categoryIcons[item]} {item}
          </button>
        ))}
      </div>

      <div className="content">
        <div className="resource-list" style={{ width: '30%' }}>
          <h2>Resources Found ({filteredResources.length})</h2>
          {filteredResources.map((res, i) => (
            <div className="resource-card" key={i} onClick={() => setSelectedResource(res)}>
              <div className="card-top">
                <div className="card-icon" style={{ backgroundColor: categoryColors[res.tags[0]].bg, color: categoryColors[res.tags[0]].color }}>
                  {categoryIcons[res.tags[0]]}
                </div>
                <div className="card-info-main">
                  <div className="card-title">{res.name}</div>
                  <div className="card-subtitle">{res.city}</div>
                  <div className="badge-row">
                    <span className="badge category-badge" style={{ backgroundColor: categoryColors[res.tags[0]].bg, color: categoryColors[res.tags[0]].color }}>{res.tags[0]}</span>
                    <span className="badge verified-badge">✔ Verified</span>
                  </div>
                </div>
                <div className="card-distance">
                  <div className="distance-num">{res.distance}</div>
                  <div className="distance-text">km<br />away</div>
                </div>
              </div>
              <div className="card-details">
                <p>📍 {res.address}</p>
                <p>📞 {res.phone}</p>
                <p className="card-desc">{res.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="map-container" style={{ width: '70%' }}>
          <MapContainer center={center} zoom={5} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {filteredResources.map((res, i) => (
              <Marker key={i} position={[res.lat, res.lng]}>
                <Popup>
                  <strong>{res.name}</strong><br />
                  {res.address}<br />
                  {res.phone}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      {selectedResource && (
        <div className="resource-modal">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setSelectedResource(null)}>&times;</button>
            <div className="modal-header">
              <div className="card-icon" style={{ backgroundColor: categoryColors[selectedResource.tags[0]].bg, color: categoryColors[selectedResource.tags[0]].color }}>
                {categoryIcons[selectedResource.tags[0]]}
              </div>
              <h2>{selectedResource.name}</h2>
              <div className="badge-row">
                <span className="badge category-badge" style={{ backgroundColor: categoryColors[selectedResource.tags[0]].bg, color: categoryColors[selectedResource.tags[0]].color }}>{selectedResource.tags[0]}</span>
                <span className="badge verified-badge">✔ Verified</span>
                <span>⭐ {selectedResource.rating}</span>
              </div>
            </div>
            <p>{selectedResource.description}</p>
            <h3>Contact Information</h3>
            <p>📞 {selectedResource.phone}</p>
            <p>📧 {selectedResource.email}</p>
            <p>🌐 <a href={selectedResource.website} target="_blank" rel="noopener noreferrer">{selectedResource.website}</a></p>
            <p>📍 {selectedResource.address}</p>

            <h3>Services Offered</h3>
            <div className="tags">
              {selectedResource.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>

            <div className="modal-actions" style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
              <a href={`tel:${selectedResource.phone}`} className="action-button">📞 Call Now</a>
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedResource.address)}`} target="_blank" rel="noopener noreferrer" className="action-button">📍 Get Directions</a>
              <button className="action-button">💾 Save Resource</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapPage;
