import "../CargoServicesSec2/CargoServicesSec2.css";

// ── Replace with your actual image imports ──
import generalCargoImg from "../../../assets/Images/general-cargo.jpg";
import freightImg from "../../../assets/Images/freight-forwarding.jpg";
import logisticsImg from "../../../assets/Images/end-to-end-logistics.jpg";

// ── SVG Icons (inline) ──
const icons = {
  box: (
    <svg viewBox="0 0 24 24"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>
  ),
  warehouse: (
    <svg viewBox="0 0 24 24"><rect x="3" y="9" width="18" height="12"/><polyline points="3 9 12 3 21 9"/><line x1="9" y1="21" x2="9" y2="13"/><line x1="15" y1="21" x2="15" y2="13"/></svg>
  ),
  plane: (
    <svg viewBox="0 0 24 24"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/></svg>
  ),
  file: (
    <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  ),
  ship: (
    <svg viewBox="0 0 24 24"><path d="M2 20a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1"/><path d="M4 18 3 11h18l-1 7"/><path d="M12 3v8M8 11V7h8v4"/></svg>
  ),
  tracking: (
    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>
  ),
  supply: (
    <svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
  ),
  lastmile: (
    <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  ),
  insurance: (
    <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
  ),
  analytics: (
    <svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
  ),
};

// ── Data Array ──
const SERVICES = [
  {
    id: 1,
    number: "01",
    title: "General Cargo Handling",
    description:
      "Professional management of all cargo types with full documentation, seamless ramp handling, and secure delivery support at both cargo hubs. Our facilities are equipped to handle high-volume freight with precision and care.",
    image: generalCargoImg,
    imageAlt: "General cargo handling at airport",
    imagePosition: "right", // first: image on right
    features: [
      {
        icon: icons.box,
        title: "Bulk & Break-Bulk",
        desc: "Full & LCL consignments across the entire corridor.",
      },
      {
        icon: icons.warehouse,
        title: "Warehouse Storage",
        desc: "Secure bonded warehousing at key hubs.",
      },
      {
        icon: icons.plane,
        title: "Air Cargo Ready",
        desc: "ULDs on HNA mixtures in A & ULD built-up.",
      },
      {
        icon: icons.file,
        title: "Documentation",
        desc: "AWB, cargo manifests & compliance docs.",
      },
    ],
    stats: [
      { value: "50K+", label: "Tons Handled / Year" },
      { value: "99.6%", label: "Cargo Accuracy Rate" },
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Freight Forwarding Solutions",
    description:
      "Seamless import & export freight management with solutions tailored for the African trade environment. We coordinate multi-modal movements and ensure compliance across every international corridor we operate.",
    image: freightImg,
    imageAlt: "Freight forwarding aircraft on tarmac",
    imagePosition: "left", // second: image on left
    features: [
      {
        icon: icons.globe,
        title: "Global Routing",
        desc: "Optimized multi-modal freight paths.",
      },
      {
        icon: icons.shield,
        title: "Customs Clearance",
        desc: "Full brokerage & compliance management.",
      },
      {
        icon: icons.ship,
        title: "Sea Freight",
        desc: "FCL & LCL vessel freight availability.",
      },
      {
        icon: icons.tracking,
        title: "Live Tracking",
        desc: "Real-time visibility from origin to destination.",
      },
    ],
    stats: [
      { value: "120+", label: "Carrier Partners" },
      { value: "48h", label: "Avg. Clearance Time" },
    ],
  },
  {
    id: 3,
    number: "03",
    title: "End-to-End Logistics Support",
    description:
      "Complete supply chain solutions from origin to destination, delivering confidence across even the most complex African trade lanes. We manage every touchpoint, eliminating gaps and keeping your supply chain moving without disruption.",
    image: logisticsImg,
    imageAlt: "Logistics trucks aerial view",
    imagePosition: "right", // third: image on right
    features: [
      {
        icon: icons.supply,
        title: "Supply Chain Mgmt",
        desc: "End-to-end visibility & control.",
      },
      {
        icon: icons.lastmile,
        title: "Last-Mile Delivery",
        desc: "Onward distribution to final consignee.",
      },
      {
        icon: icons.insurance,
        title: "Cargo Insurance",
        desc: "Full cover coverage for all cargo types.",
      },
      {
        icon: icons.analytics,
        title: "Analytics & Reporting",
        desc: "Data-driven logistics performance insights.",
      },
    ],
    stats: [
      { value: "360°", label: "Coverage Network" },
      { value: "24/7", label: "Ops & Support" },
    ],
  },
];

// ── Component ──
function CargoServicesSec2() {
  return (
    <div className="css2-wrapper">
      {SERVICES.map((service) => (
        <div
          key={service.id}
          className={`css2-service-block ${
            service.imagePosition === "left" ? "image-left" : ""
          }`}
        >
          {/* Image Side */}
          <div className="css2-image-side">
            <img
              src={service.image}
              alt={service.imageAlt}
              className="main-img"
            />
            <span className="css2-number-badge">{service.number}</span>
          </div>

          {/* Text Side */}
          <div className="css2-text-side">
            <h2 className="css2-service-title">{service.title}</h2>
            <p className="css2-service-desc">{service.description}</p>

            {/* 2×2 Feature Grid */}
            <div className="css2-features-grid">
              {service.features.map((feat, idx) => (
                <div key={idx} className="css2-feature-card">
                  <div className="css2-feature-icon">{feat.icon}</div>
                  <div className="css2-feature-info">
                    <h4>{feat.title}</h4>
                    <p>{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="css2-stats-row">
              {service.stats.map((stat, idx) => (
                <div key={idx} className="css2-stat">
                  <span className="css2-stat-value">{stat.value}</span>
                  <span className="css2-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CargoServicesSec2;