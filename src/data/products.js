import ltContactorImg from '../assets/images/DP_LT CONTACTOR APFC PANEL.png';
import ltThyristorImg from '../assets/images/DP_LT THYRISTOR APFC PANEL 2.png';

export const products = [
  {
    id: 1,
    name: "LT Contactor-Based APFC Panels",
    category: "APFC Solutions",
    description: "Smart, reliable, and cost-effective solution for low-tension applications using durable LT contactors.",
    fullDescription: "Domain Powers offers a smart, reliable, and cost-effective solution through our LT Contactor-Based Automatic Power Factor Correction (APFC) Panels. These panels are engineered to maintain optimal power factor levels by automatically switching capacitor banks using durable LT contactors, ensuring consistent performance across varying load conditions.",
    features: [
      "Automatic Reactive Power Compensation through contactor-based switching",
      "Robust LT Contactors ensure reliable operation in harsh environments",
      "Microcontroller-Based Intelligent Relay for real-time monitoring",
      "Modular Design for easy maintenance and expansion",
      "High-Grade Capacitors for thermal and electrical stability",
      "Inbuilt Protection for overvoltage, undervoltage, and overcurrent",
      "Designed as per IEC standards for performance and safety",
      "Customizable kVAR Ratings based on load requirements"
    ],
    image: ltContactorImg
  },
  {
    id: 2,
    name: "LT Thyristor-Based APFC Panel",
    category: "APFC Solutions",
    description: "Near-instant response time for dynamic load environments like welding plants and induction heating.",
    fullDescription: "Designed for industries with rapidly changing loads, our Thyristor-Based APFC Panels offer seamless, silent, and spark-free switching of capacitors. Built with precision engineering, these panels eliminate inrush current and voltage transients during capacitor insertion.",
    features: [
      "Fast switching response time for dynamic loads",
      "Fully electronic, contactless capacitor switching",
      "Eliminates inrush current and voltage transients",
      "Microcontroller-based intelligent relay system",
      "Suitable for harmonic-prone installations",
      "Operates silently with zero mechanical wear",
      "Real-time monitoring with digital power analyzers",
      "Compact design with optimized panel layout"
    ],
    image: ltThyristorImg
  },
  {
    id: 3,
    name: "HT APFC Panels (3.3kV to 33kV)",
    category: "APFC Solutions",
    description: "High-tension power distribution systems engineered to manage reactive power across MV and HV networks.",
    fullDescription: "Domain Powers offers HT Automatic Power Factor Correction (APFC) Panels, engineered to intelligently manage reactive power across MV and HV networks ranging from 3.3kV to 33kV. These panels improve power quality, reduce losses, and enhance energy efficiency.",
    features: [
      "Available in multiple HT voltage levels: 3.3kV to 33kV",
      "Advanced automatic power factor control system",
      "Multiple incomer options: VCB, Off-load Isolator, LBS",
      "Equipped with RVT for capacitor discharge safety",
      "Integrated with NDR (Neutral Displacement Relays)",
      "Capacitor protection using reliable HRC fuses",
      "Optional detuning reactors for harmonic suppression",
      "Custom SCADA / remote monitoring interface available"
    ],
    image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "Hybrid APFC Panels (SVG + Thyristor)",
    category: "APFC Solutions",
    description: "Combines Static VAR Generators (SVG) with thyristor switching for ultra-fast compensation and harmonic filtering.",
    fullDescription: "Hybrid APFC Panels combine Static VAR Generators (SVG) with thyristor-switched capacitor banks, offering a next-generation solution for dynamic power factor correction and harmonic compensation. Ideal for facilities with fluctuating reactive power demand and high harmonic distortion.",
    features: [
      "Dual Compensation System: SVG + Thyristor controlled capacitors",
      "Ultra-Fast Response Time: <20 milliseconds switching",
      "Active Harmonic Filtering up to the 50th order",
      "Phase-wise current balancing for improved stability",
      "Maintains power factor close to unity (0.99)",
      "Modular and scalable architecture",
      "Advanced controller with touchscreen HMI",
      "Cloud-based access and event logging (optional)"
    ],
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    name: "HT/LT PCC Panels",
    category: "Power Distribution",
    description: "Power Control Center panels designed for efficient management and distribution of power across industrial infrastructures.",
    fullDescription: "HT and LT PCC (Power Control Center) panels are designed to efficiently manage and distribute power across industrial and commercial infrastructures. Built to handle high electrical loads with precision and safety, ensuring optimal control and protection for various electrical systems.",
    features: [
      "Voltage ranges from 415V up to 33kV",
      "Modular construction with extensible design",
      "Fully compartmentalized design for improved safety",
      "Manufactured with top-grade CRCA sheets",
      "High-performance switchgear (MCCBs, ACBs, VCBs)",
      "Integrated protection relays and safety interlocks",
      "Tested for high fault withstand capacity as per IEC/IS",
      "Intelligent monitoring through SCADA/PLC systems"
    ],
    image: "https://images.unsplash.com/photo-1534394416979-994191632731?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    name: "MCC Panels (Motor Control Centers)",
    category: "Power Distribution",
    description: "Centralized control and protection for motors in both LT and HT systems, supporting multiple starter types.",
    fullDescription: "Domain Powers offers premium MCC Panels designed to deliver superior reliability and operational safety. These panels provide centralized control and protection for motors in both LT and HT systems, supporting fixed and draw-out types with DOL, star-delta, VFD, and soft starters.",
    features: [
      "Fully compartmentalized structure with IP-graded enclosures",
      "Available in fixed, semi-drawout, and fully drawout versions",
      "Supports: DOL, Star-Delta, Soft Starter, VFD",
      "Modular design for easy expansion and maintenance",
      "High fault level handling with short-circuit protection",
      "Customized busbar sizing based on load demands",
      "Excellent cable management and segregation",
      "Compliant with IS/IEC standards for MCC design"
    ],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 7,
    name: "Manual and Automatic Changeover Panels",
    category: "Residential & Commercial",
    description: "Essential for seamless power transfer between main supply and backup generators.",
    fullDescription: "Manual and Automatic Changeover Panels are designed to prevent power interruptions during outages, ensuring continuous operation of critical systems. Support both manual and auto modes to suit operational needs.",
    features: [
      "Ensures smooth transfer between utility and generator",
      "Available in both manual and automatic modes",
      "Compact and robust design for indoor/outdoor installation",
      "Break-before-make and interlocking for safety",
      "Generator start/stop automation features",
      "LED indications for source status and breaker positions",
      "Fully wired, tested, and ready-to-install panels",
      "Complies with relevant IS/IEC standards"
    ],
    image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 8,
    name: "LT FCMA Soft Starters",
    category: "Motor Control",
    description: "Specially designed to offer smooth and reliable motor starting solutions in low voltage applications.",
    fullDescription: "LT FCMA Soft Starters reduce inrush current and mechanical stress during motor startup, extending the lifespan of motors and connected equipment. Ideal for heavy-duty loads like pumps, compressors, and conveyors.",
    features: [
      "Reduces starting current significantly without voltage dips",
      "Provides soft and shock-free motor starts",
      "Eliminates mechanical stress on shafts and gearboxes",
      "No harmonics or power quality distortion introduced",
      "Simple design with minimal components",
      "Suitable for continuous and repeated operations",
      "Requires no external cooling or ventilation",
      "Designed for energy-efficient motor control"
    ],
    image: "https://images.unsplash.com/photo-1498084393753-b411ce9470b3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 9,
    name: "HT FCMA Soft Starters",
    category: "Motor Control",
    description: "Advanced medium voltage motor starters based on magnetic flux compensation principle.",
    fullDescription: "HT FCMA Soft Starters are designed for controlled acceleration of large motors in heavy-duty industrial applications. They help maintain power system stability and protect sensitive equipment from voltage drops.",
    features: [
      "Designed for medium voltage motors (3.3kV / 6.6kV / 11kV)",
      "Substantial reduction in starting current",
      "Smooth and stepless motor acceleration",
      "Simple, rugged construction with no moving parts",
      "Enhances life of motors and mechanical equipment",
      "Maintenance-free design with long operational life",
      "Suitable for indoor and outdoor installations",
      "Proven performance in steel, cement, and water plants"
    ],
    image: "https://images.unsplash.com/photo-1558441331-2445c23f65e5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 10,
    name: "ATS MOTOR STARTER",
    category: "Motor Control",
    description: "Auto Transformer Starter panels designed to reduce starting current and mechanical stress.",
    fullDescription: "Ideal for large motors, these panels use a tapped autotransformer to provide a reduced voltage start, ensuring smoother acceleration and extended motor life. High-precision engineering for industrial environments.",
    features: [
      "Reduces inrush current during motor startup",
      "Minimizes mechanical stress and voltage drops",
      "Suitable for high-power motor applications",
      "User-friendly layout and control wiring",
      "Built-in protections for overload and short-circuit",
      "Flexible tapping options as per motor rating",
      "Tested for durability under tough conditions"
    ],
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 11,
    name: "Star/Delta Starter Panels",
    category: "Motor Control",
    description: "Efficiently manage the startup of three-phase induction motors above 7.5 HP.",
    fullDescription: "These panels reduce starting voltage and current initially, then switch to full load. Built with high-quality components ensuring safe operation and minimal wear on motors.",
    features: [
      "Reduces starting current and torque in motors",
      "Smooth transition from star to delta mode",
      "Ideal for motors above 7.5 HP",
      "Fully wired and tested for plug-and-play installation",
      "Equipped with thermal overload protection",
      "Compact design with clear terminal markings",
      "Customizable for specific motor ratings"
    ],
    image: "https://images.unsplash.com/photo-1534394416979-994191632731?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 12,
    name: "DOL / RDOL Starter Panels",
    category: "Motor Control",
    description: "Reliable and efficient starting for small to medium three-phase motors.",
    fullDescription: "Direct-On-Line and Reversing Direct-On-Line starter panels provide robust protection and minimal downtime. RDOL variants support forward and reverse operation for motor control applications.",
    features: [
      "Direct-On-Line starting for simplicity and cost-effectiveness",
      "RDOL system for forward and reverse operation",
      "Compact, space-saving panel design",
      "Pre-wired, tested, and ready-to-install units",
      "Integrated thermal overload and short-circuit protection",
      "High-grade powder-coated enclosure for durability",
      "Wide voltage range support (up to 440V AC)"
    ],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 13,
    name: "DG Synchronization Panels",
    category: "Power Distribution",
    description: "Seamlessly synchronize multiple diesel generator sets for uninterrupted power and load sharing.",
    fullDescription: "These panels balance load intelligently among DG sets, optimize fuel consumption, and maintain system stability through automatic load sharing and sequencing logic.",
    features: [
      "Automatic synchronization of two or more DG sets",
      "Microprocessor-based controllers for intelligent management",
      "Built-in load sharing and DG sequencing logic",
      "Manual and auto modes with user-friendly HMI",
      "Grid-to-generator synchronization capabilities",
      "Real-time monitoring of voltage, frequency, and phase",
      "Reverse power and frequency protection",
      "SCADA/BMS compatibility for remote monitoring"
    ],
    image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 14,
    name: "HT ICOG Panels",
    category: "Power Distribution",
    description: "Incoming-Outgoing panels for efficient high-voltage power management and distribution.",
    fullDescription: "Typically ranging from 6.6kV to 33kV, these panels facilitate smooth flow between incoming HT supply and outgoing feeders, ensuring monitoring and fault isolation.",
    features: [
      "Manufactured as per IS/IEC standards for high voltage",
      "Designed for 6.6kV, 11kV, 22kV, and 33kV applications",
      "Type-tested for short-circuit withstand and temp rise",
      "Equipped with VCB as per requirements",
      "Protection relays for overcurrent, earth fault, etc.",
      "Compartmentalized design for operator safety",
      "Remote and local operation with SCADA/PLC options",
      "Indoor and outdoor versions available (IP42-IP55)"
    ],
    image: "https://images.unsplash.com/photo-1498084393753-b411ce9470b3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 15,
    name: "CT- Meter Panels",
    category: "Residential & Commercial",
    description: "Enclosures for CT-operated energy meters ranging from 40A to 200A.",
    fullDescription: "Specially designed to meet utility and industrial metering needs, offering robust enclosures with optimal space allocation for reliable power monitoring.",
    features: [
      "Rugged CRCA steel construction with powder-coating",
      "Adequate space for CT-operated meters (40A to 200A)",
      "Built-in incomer (MCB/isolator/RCB) as required",
      "Provision for installation of CTs and sealing",
      "Clear front acrylic window for meter visibility",
      "Phase indication lamps and volt/amp meter options",
      "Wall-mountable or pedestal-mounted as per app",
      "Compliant with DISCOM utility regulations"
    ],
    image: "https://images.unsplash.com/photo-1558441331-2445c23f65e5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 16,
    name: "Residential/Commercial ACCL Panels",
    category: "Residential & Commercial",
    description: "Automatic Changeover with Current Limiter for intelligent supply management.",
    fullDescription: "Designed to switch supply between mains and generator while limiting current drawn in generator mode to prevent overloads. Ideal for housing societies and offices.",
    features: [
      "Seamless automatic changeover between mains and DG",
      "Built-in current limiting feature to protect DG",
      "Compatible with ratings from 10A to 63A and beyond",
      "Available in single-phase and three-phase variants",
      "LED indications for supply status and source",
      "Compact design suitable for wall or surface mounting",
      "Option for integrated energy meter integration",
      "Suitable for individual flats or commercial units"
    ],
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 17,
    name: "Residential/Commercial Meter Panels",
    category: "Residential & Commercial",
    description: "Precision-engineered enclosures for housing energy meters and associated protection.",
    fullDescription: "Used in apartments and shops for accurate energy monitoring and billing. Built with safety and durability in mind to comply with utility norms.",
    features: [
      "Suitable for single-phase and three-phase meters",
      "Accommodates multiple meters (up to 12+ slots)",
      "High-quality powder-coated CRCA steel for long life",
      "Clear acrylic or glass windows for easy reading",
      "Provision for CTs, MCBs, ELCBs, and terminal blocks",
      "Padlock arrangement for anti-tampering safety",
      "Complies with utility/DISCOM specifications",
      "Cable alley and removable gland plates for termination"
    ],
    image: "https://images.unsplash.com/photo-1534394416979-994191632731?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 18,
    name: "AMF Panel",
    category: "Power Distribution",
    description: "Automatic Mains Failure panels for uninterrupted control of diesel generator sets.",
    fullDescription: "AMF panels provide automatic start/stop and load transfer for DG sets during power failures. Essential for data centers, hospitals, and industrial facilities.",
    features: [
      "Automatic start and stop of DG set during mains failure",
      "Compatible with single and multiple DG operations",
      "Equipped with digital AMF relay/controller",
      "Displays voltage, current, freq, PF, kW, kWh",
      "Built-in protection for over/under voltage and freq",
      "Auto/manual selection switch for flexibility",
      "Integrated battery charger and status indicators",
      "Designed as per IP42/IP55/IP65 standards"
    ],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 19,
    name: "VFD Panel",
    category: "Motor Control",
    description: "Variable Frequency Drive systems for motor speed and torque regulation.",
    fullDescription: "Enhances process control, reduces energy consumption, and extends motor life in HVAC, pump, and conveyor applications.",
    features: [
      "Allows precise motor speed control and soft start/stop",
      "Reduces energy consumption and operational costs",
      "Minimizes mechanical stress on motors and equipment",
      "Short-circuit and overload protection built-in",
      "Compatible with wide range of motor types",
      "User-friendly interface with LED/LCD display",
      "Dustproof and weather-resistant IP-rated enclosures",
      "BMS/SCADA integration for automation"
    ],
    image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 20,
    name: "SMART APFC PANEL (GSM/GPRS)",
    category: "APFC Solutions",
    description: "IoT enabled APFC systems with real-time remote monitoring and notifications.",
    fullDescription: "Enables remote access to panel data, performance monitoring, and fault notifications via SMS/Email for maximum efficiency.",
    features: [
      "Advanced microcontroller-based APFC relay",
      "Integrated GSM/GPRS modem for remote monitoring",
      "Real-time SMS/Email alerts for faults",
      "Automatic correction of lagging power factor",
      "Historical data logging for performance analysis",
      "Compatibility with 3-phase 3-wire/4-wire systems",
      "High-quality contactors or thyristor switching",
      "Integration support with SCADA/BMS"
    ],
    image: "https://images.unsplash.com/photo-1498084393753-b411ce9470b3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 21,
    name: "HT/LT Capacitor Bank",
    category: "APFC Solutions",
    description: "Shunt capacitor banks for effective power factor correction in high and low tension systems.",
    fullDescription: "Enhances power quality and reduces demand charges. Available in automatic and fixed configurations for indoor/outdoor use.",
    features: [
      "Suitable for HT (up to 33kV) and LT (415V) apps",
      "Equipped with detuned or tuned reactors",
      "High-quality APP or MPP capacitors used",
      "Star or delta connection configurable",
      "Automatic or timer-based/manual control",
      "Rugged powder-coated CRCA/Outdoor enclosures",
      "Designed as per IS 13585 and IEC 60831",
      "Ratings from 5 kVAR to 1000 kVAR and above"
    ],
    image: "https://images.unsplash.com/photo-1558441331-2445c23f65e5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 22,
    name: "ATS PANEL - AUTO TRANSFER SWITCH",
    category: "Residential & Commercial",
    description: "Ensures seamless transition of power supply between mains and standby Sources.",
    fullDescription: "Engineered to provide reliability and safety with minimal human intervention, minimizing downtime during utility failure.",
    features: [
      "Automatic transfer from mains to DG and vice versa",
      "Fast switching response with reliable contactors",
      "Microcontroller/PLC-based logic control",
      "Compatible with single and three-phase systems",
      "Status indication for source and load health",
      "Enclosure with IP54/IP65 protection options",
      "Optional integration with AMF/GSM/BMS",
      "Designed for high electrical/mechanical endurance"
    ],
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800"
  }
];

export const categorizedProducts = {
  "APFC Solutions": [1, 2, 3, 4, 20, 21],
  "Motor Control": [8, 9, 10, 11, 12, 19],
  "Power Distribution": [5, 6, 13, 14, 18],
  "Residential & Commercial": [7, 15, 16, 17, 22]
};
