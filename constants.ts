
export const BUSINESS_DETAILS = {
  name: 'BASSEAL HVAC',
  phone: '0902 085 6177',
  phoneRaw: '+2349020856177',
  whatsapp: '2349020856177',
  email: 'info@bassealhvac.com',
  address: '11 Adeola St, Pedro, Lagos 100233, Lagos',
  rating: '5.0',
  reviewCount: '265',
  hours: 'Opens 9 am · Closes 5 pm',
  serviceArea: 'Lagos and nearby areas'
};

export const SERVICES = [
  { id: 'ac-maint', title: 'A/C System Maintenance', description: 'Preventative care to keep your cooling system efficient.' },
  { id: 'ac-repair', title: 'A/C System Repair', description: 'Fast, reliable repairs for all major air conditioning brands.' },
  { id: 'ac-install', title: 'AC Installation', description: 'Professional installation of high-efficiency cooling units.' },
  { id: 'heat-install', title: 'Heating System Installation', description: 'Expert setup of heating systems for cooler nights.' },
  { id: 'heat-maint', title: 'Heating System Maintenance', description: 'Annual checkups to ensure safe and warm operations.' },
  { id: 'heat-repair', title: 'Heating System Repair', description: 'Troubleshooting and fixing any heating failures quickly.' },
  { id: 'hvac-maint', title: 'HVAC System Maintenance', description: 'Comprehensive care for integrated heating and cooling units.' },
  { id: 'hvac-repair', title: 'HVAC System Repair', description: 'Expert diagnosis and repair for complex HVAC systems.' },
  { id: 'duct-cleaning', title: 'HVAC Duct & Vent Cleaning', description: 'Improve air quality with professional duct sanitization.' },
  { id: 'duct-install', title: 'HVAC Duct & Vent Installation', description: 'Precision engineering for optimal airflow distribution.' },
  { id: 'duct-repair', title: 'HVAC Duct & Vent Repair', description: 'Sealing leaks and fixing damaged ductwork for efficiency.' },
  { id: 'ductless', title: 'Ductless Heating & A/C', description: 'Flexible cooling and heating solutions for specific zones.' },
  { id: 'ac-purchase', title: 'Purchase AC Systems', description: 'Top-quality air conditioning units available for sale.' }
];

export const AI_SYSTEM_PROMPT = `
You are the AI Comfort Assistant for BASSEAL HVAC, a top-rated HVAC service in Lagos, Nigeria.
Business Info:
- Name: ${BUSINESS_DETAILS.name}
- Address: ${BUSINESS_DETAILS.address}
- Phone/WhatsApp: ${BUSINESS_DETAILS.phone}
- Services: ${SERVICES.map(s => s.title).join(', ')}
- Rating: 5.0 Stars with 265 reviews.
- Focus: Reliable, fast, professional service.

Your goal is to help users understand our services and encourage them to book a visit or call. 
Keep responses helpful, professional, and concise. 
If asked about pricing, explain that we provide upfront quotes after a diagnostic. 
Always recommend calling or using WhatsApp for urgent repairs.
`;
