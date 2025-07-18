import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapPage.css';

const center = [22.9734, 78.6569];


const resources = [

   {
    name: "Chhanv Foundation",
    city: "Lucknow",
    address: "D-45 (Ground Floor), Sector - 48, Noida, Uttar Pradesh - 201301",
    phone: "+91 9717900302",
    email: "chhanvfoundation@gmail.com",
    website: "https://chhanv.org",
    description: "Rehabilitation for acid attack survivors and runs the Sheroes Hangout cafe.",
    tags: ["NGOs"],
    lat: 28.554197,
    lng: 77.374107,
    rating: 4.7,
    distance: "10.4"
  },

  {
    name: "Masina Hospital - Kharas Memorial Centre",
    city: "Mumbai",
    address: "Sant Savta Mali Marg, Near Gloria School, Near Byculla Railway Station (East), Mumbai- 400027, Maharashtra.",
    phone: "1800-266-0711,022 61841212",
    email: "info@masinahospital.com",
    website: "https://www.masinahospital.com/",
    description: "Support for skin donation awareness and burns treatment at Masina Hospital's Skin Bank.",
    tags: ["Medical Centers"],
    lat: 18.9792,
    lng: 72.8339,
    rating: 4.7,
    distance: "3.0"
  },
 
  {
    name: "The Laxmi Foundation",
    city: "New Delhi",
    address: "Guru Angad Nagar Laxmi Nagar New Delhi - 110092",
    phone: "+917252827774",
    email: "thelaxmifoundation@gmail.com",
    website: "https://www.thelaxmi.org/",
    description: "Provides a shelter home offering legal aid, counseling, education, and post-treatment care.",
    tags: ["Safe Houses"],
    lat: 28.637094,
    lng: 77.278390,
    rating: 4.8,
    distance: "5.2"
  },
  
  {
    name: "Brave Souls Foundation",
    city: "New Delhi",
    address: "69, Masjid Rd, Jangpura, Bhogal, New Delhi, Delhi 110014",
    phone: "09654240057",
    email: "info@bravesoulsfoundation.org",
    website: "https://bravesoulsfoundation.org/",
    description: "Shelter and reconstructive surgeries to prevent gender-based violence.",
    tags: ["Safe Houses"],
    lat: 28.5869,
    lng: 77.2405,
    rating: 4.6,
    distance: "7.0"
  },
  {
    name: "Acid Survivors Saahas Foundation",
    city: "Mumbai",
    address: "ELCO Arcade. D .Wing 1st Floor Office No-29 Hill Road Bandra West Mumbai. 400050 Maharashtra",
    phone: "+91 7019721187",
    email: "assfindia2016@gmail.com",
    website: "https://www.assfindia.org/",
    description: "Rehabilitation center providing medical care, counseling, and vocational training.",
    tags: ["Rehabilitation Centers"],
    lat: 19.0590,
    lng: 72.8290,
    rating: 4.9,
    distance: "1.0"
  },
  {
    name: "Apna Ghar",
    city: "Jaipur",
    address: "APNA GHAR ASHRAM,Village Bajhera, Post Noh Bachhamadi, Bharatpur-321001, Rajasthan (India)",
    phone: "+918599999911-22, +918764396811",
    email: "hq@apnagharashram.org, bharatpur@apnagharashram.org",
    website: "https://apnagharashram.org/",
    description: "Shelter home offering basic English and computer classes.",
    tags: ["Safe Houses"],
    lat: 27.2173,
    lng: 77.4896,
    rating: 4.5,
    distance: "5.0"
  },
  {
    name: "Acid Survivors & Women Welfare Foundation",
    city: "Kolkata",
    address: "45, Radhanath Chowdhury Road, Tangra Industrial Estate – II, Kolkata – 700015, West Bengal, India",
    phone: "+91 9007612727",
    email: "director.asfi@gmail.com",
    website: "https://aswwf.org/",
    description: "Supporting surgical rehabilitation of acid attack survivors from Bombay Hospital, Sankara Nethralaya, and SSKM Hospital.",
    tags: ["Rehabilitation Centers"],
    lat: 22.5390,
    lng: 88.3448,
    rating: 4.8,
    distance: "3.0"
  },
  {
    name: "Atijeevan Foundation",
    city: "Bangalore",
    address: "Atijeevan Foundation, Bangalore, India",
    phone: "+91-9886714669 ",
    email: "atijeevanfoundation@gmail.com",
    website: "https://atijeevanfoundation.org",
    description: "Plastic Surgery Camps for burn and acid attack survivors, with surgical and non-surgical treatments.",
    tags: ["NGOs"],
    lat: 13.0524,
    lng: 80.2508,
    rating: 4.7,
    distance: "10.0"
  },
  {
    name: "SEWA (Self Employed Women’s Association)",
    city: "Ahmedabad",
    address: "21/22, Goyal Tower, Nr. Jhanvi Restaurant,University Road, Panjara Pole,Ahmedabad – 380015, Gujarat (INDIA)",
    phone: "+91-79-29601503 /  +91-79-26306937",
    email: "info@sewafederation.org",
    website: "https://www.sewafederation.org/",
    description: "Support for women’s SHGs and entrepreneurs; campaign support and grassroots outreach.",
    tags: ["NGOs"],
    lat: 23.0225,
    lng: 72.5714,
    rating: 4.9,
    distance: "1.0"
  },
  {
    name: "National Burns Centre",
    city: "Mumbai",
    address: "Sector – 13, Plot No. 1, Samarth Ramdas Swami Marg,Airoli, Navi Mumbai – 400 078.",
    phone: "+91-22-2779 6660",
    email: "nbcairoli@gmail.com",
    website: "https://www.burns-india.com/",
    description: "Operation Restore: Funded surgeries and treatments for burn deformities.",
    tags: ["Rehabilitation Centers"],
    lat: 19.1360,
    lng: 73.0033,
    rating: 4.6,
    distance: "20.0"
  },
  
  {
    name: "Kerala State Legal Services Authority",
    city: "Kochi",
    address: "Niyama Sahaya Bhavan, High Court Compound, Ernakulam, Kochi, Kerala, 682031",
    phone: "0484-2396717",
    email: "kelsakerala@gmail.com",
    website: "https://slsa.kerala.gov.in/",
    description: "Provides legal aid and services across the state of Kerala.",
    tags: ["Legal Aid"],
    lat: 9.9875,
    lng: 76.2808,
    rating: 4.5,
    distance: "2.0"
  },
  {
    name: "Tamil Nadu State Legal Services Authority",
    city: "Chennai",
    address: "North Fort Road, High Court Campus, Chennai - 600104",
    phone: "044–25342441, 1800 4252 441",
    email: "tnslsa@gmail.com",
    website: "https://www.tnslsa.org/",
    description: "Offers legal services and aid throughout Tamil Nadu.",
    tags: ["Legal Aid"],
    lat: 13.0936,
    lng: 80.2874,
    rating: 4.6,
    distance: "2.0"
  },
  {
    name: "Fortis Mental Health Program",
    city: "Delhi NCR",
    address: "Fortis Escorts, Okhla Road, New Delhi - 110025",
    phone: "+91 9818401404",
    email: "mentalhealth@fortishealthcare.com",
    website: "https://www.fortishealthcare.com/india/clinical-speciality/mental-health-and-behavioural-sciences",
    description: "Offers counseling, therapy, and psychological assessment services across India.",
    tags: ["Counseling Centers"],
    lat: 28.5583,
    lng: 77.2732,
    rating: 4.7,
    distance: "4.2"
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
  const [savedResources, setSavedResources] = useState([]);
  const [showSaved, setShowSaved] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedResources')) || [];
    setSavedResources(saved);
  }, []);

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
  };

  const filteredResources = resources.filter((res) => {
  const lowerSearch = searchTerm.toLowerCase();

  const matchesSearch =
    res.city.toLowerCase().includes(lowerSearch) ||
    res.address.toLowerCase().includes(lowerSearch) ||
    res.name.toLowerCase().includes(lowerSearch) || 
    res.description.toLowerCase().includes(lowerSearch); 

  const matchesCategory = selectedCategory === "" || res.tags.includes(selectedCategory);

  return matchesSearch && matchesCategory;
});


  const removeSavedResource = (name) => {
    const updated = savedResources.filter(r => r.name !== name);
    localStorage.setItem('savedResources', JSON.stringify(updated));
    setSavedResources(updated);
  };

  return (
    <div className="map-wrapper">
      <div className="map-header">
        <div className="logo-title">
          <img src="/Map Logo.png" alt="Location Logo" className="logo-image" style={{ maxWidth: '40px', height: '40px', objectFit: 'contain' }} />
          <div className="title-text">
            <h1>Resource Map</h1>
            <p>Find support services across India</p>
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

      <button
        onClick={() => setShowSaved(!showSaved)}
        style={{
          position: 'fixed',
          top: '140px',
          right: '20px',
          zIndex: 1000,
          backgroundColor: '#1976d2',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          padding: '10px 16px',
          fontSize: '14px',
          cursor: 'pointer',
          boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
        }}
      >
         {showSaved ? 'Hide Saved' : 'Show Saved'}
      </button>

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
        <div className="resource-list" style={{ width: '28%' }}>
          <h2>{showSaved ? `Saved Resources (${savedResources.length})` : `Resources Found (${filteredResources.length})`}</h2>
          {(showSaved ? savedResources : filteredResources).map((res, i) => (
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
              {showSaved && (
                <button
                  onClick={(e) => { e.stopPropagation(); removeSavedResource(res.name); }}
                  className="remove-saved-button"
                  style={{
                    backgroundColor: '#f44336',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '6px 10px',
                    marginTop: '10px',
                    cursor: 'pointer'
                  }}
                >
                   Remove from Saved
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="map-container" style={{ width: '72%' }}>
          <MapContainer center={center} zoom={5} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {(showSaved ? savedResources : filteredResources).map((res, i) => (
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
            <div className="contact-row">
              <p>📞 {selectedResource.phone}</p>
              <p>📧 {selectedResource.email}</p>
            </div>
            <div className="contact-row">
              <p>🌐 <a href={selectedResource.website} target="_blank" rel="noopener noreferrer">{selectedResource.website}</a></p>
              <p>📍 {selectedResource.address}</p>
            </div>

            <h3>Services Offered</h3>
            <div className="tags">
              {selectedResource.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>

            <hr style={{ margin: '20px 0' }} />
            <div className="modal-actions fancy-buttons">
              <a href={`tel:${selectedResource.phone}`} className="modal-button dark" style={{ textDecoration: 'none' }}>
                📞 Call Now
              </a>
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedResource.address)}`} target="_blank" rel="noopener noreferrer" className="modal-button light" style={{ textDecoration: 'none' }}>
                📍 Get Directions
              </a>
              <button
                className="modal-button light"
                onClick={() => {
                  const saved = JSON.parse(localStorage.getItem('savedResources')) || [];
                  const alreadyExists = saved.some(r => r.name === selectedResource.name);
                  if (!alreadyExists) {
                    saved.push(selectedResource);
                    localStorage.setItem('savedResources', JSON.stringify(saved));
                    alert("✅ Resource saved!");
                    setSavedResources(saved);
                  } else {
                    alert("⚠️ Resource already saved.");
                  }
                }}
              >
                 Save Resource
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapPage;
