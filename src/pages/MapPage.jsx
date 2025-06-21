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
    description: "NGO offering support and protection to survivors.",
    tags: ["NGOs"],
    lat: 13.0827,
    lng: 80.2707
  },
  {
    name: "Healing Hands Medical Center",
    city: "Hyderabad",
    address: "Hyderabad, Telangana",
    phone: "+91-40-1122-3344",
    description: "Medical support center for physical and mental recovery.",
    tags: ["Medical Centers"],
    lat: 17.3850,
    lng: 78.4867
  },
  {
    name: "Justice for All Legal Aid",
    city: "Delhi",
    address: "Connaught Place, New Delhi",
    phone: "+91-11-4455-6677",
    description: "Free legal aid for survivors including court case assistance.",
    tags: ["Legal Aid"],
    lat: 28.6139,
    lng: 77.2090
  },
  {
    name: "Mind Relief Counseling Center",
    city: "Bangalore",
    address: "MG Road, Bangalore",
    phone: "+91-80-9988-7766",
    description: "Trained counselors offering therapy and mental health services.",
    tags: ["Counseling Centers"],
    lat: 12.9716,
    lng: 77.5946
  },
  {
    name: "Hope Recovery Center",
    city: "Mumbai",
    address: "Dadar West, Mumbai",
    phone: "+91-22-1234-5678",
    description: "Rehabilitation center for trauma recovery and therapy.",
    tags: ["Rehabilitation Centers"],
    lat: 19.0760,
    lng: 72.8777
  },
  {
    name: "SafeNest Shelter",
    city: "Kolkata",
    address: "Park Street, Kolkata",
    phone: "+91-33-1234-5678",
    description: "Secure temporary housing for survivors in crisis.",
    tags: ["Safe Houses"],
    lat: 22.5726,
    lng: 88.3639
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

const MapPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

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
        <div className="map-title-section">
          <img src="/Map Logo.png" alt="Logo" className="logo-image" />
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
            ❌ Clear Filters
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
        
        <div className="resource-list">
          <h2>Resources Found ({filteredResources.length})</h2>
          {filteredResources.map((res, i) => (
            <div className="resource-card" key={i}>
              <div className="card-top">
                <div className="card-icon">{categoryIcons[res.tags[0]]}</div>
                <div className="card-info-main">
                  <div className="card-title">{res.name}</div>
                  <div className="card-subtitle">{res.city}</div>
                  <div className="badge-row">
                    <span className="badge category-badge">{res.tags[0]}</span>
                    <span className="badge verified-badge">Verified</span>
                  </div>
                </div>
                <div className="card-distance">
                  <div>{(Math.random() * 100 + 10).toFixed(1)}</div>
                  <div className="distance-text">km<br />away</div>
                </div>
              </div>

              <div className="card-details">
                <p>📍 {res.address}</p>
                <p>📞 {res.phone}</p>
                <p className="card-desc">{res.description}</p>
              </div>

              <div className="tags">
                {res.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        
        <div className="map-container">
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
    </div>
  );
};

export default MapPage;
