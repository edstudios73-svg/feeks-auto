// Business details and fleet. Edit this file to update the site.

export const BUSINESS = {
  name: 'Signature Motors',
  phone: '+233247004120',      // used for tap-to-call
  phoneLabel: '024 700 4120',  // shown on the site
  whatsapp: '233247004120',    // wa.me number, no plus sign
  area: 'East Legon, Accra',
  address: 'Jungle Avenue Road, East Legon, Accra',
  currency: 'GHS',
};

// The three ways to book a car.
// unit: what a price is charged per. dates: 'range' for pickup and return, 'single' for one day.
export const SERVICES = {
  rental: { label: 'Rental', unit: 'day', dates: 'range', blurb: 'Daily and weekly hire, with a driver or self-drive.' },
  escort: { label: 'Escort', unit: 'car', dates: 'single', blurb: 'Escort and convoy cars for VIPs and private clients.' },
  event: { label: 'Event', unit: 'car', dates: 'single', blurb: 'Cars for weddings, funerals and corporate events.' },
};

// Prices in Ghanaian Cedis. Leave a price as null to show "On request".
// rental is per day; escort and event are per car, per day.
// img: file in /img/cars/. pos: which part of the photo to keep in cropped views.
export const CARS = [
  { slug: 'range-rover-vogue-2021', name: 'Range Rover Vogue Autobiography', year: 2021, body: 'SUV', luxury: true, colour: 'Black', img: 'range-rover-2021', feats: ['Fully loaded', 'Autobiography trim'], price: { rental: null, escort: null, event: null } },
  { slug: 'bmw-x6-2022', name: 'BMW X6 xDrive40i', year: 2022, body: 'SUV', luxury: true, colour: 'Black', img: 'bmw-x6-2022', hero: 'bmw-x6-2022-tall', feats: ['xDrive all-wheel drive', 'Fully loaded'], price: { rental: null, escort: null, event: null } },
  { slug: 'mercedes-e350-2021', name: 'Mercedes-Benz E350 4Matic', year: 2021, body: 'Saloon', luxury: true, colour: 'Black', img: 'mercedes-e350-2021', feats: ['4Matic all-wheel drive', 'Keyless entry', 'Keyless ignition'], price: { rental: null, escort: null, event: null } },
  { slug: 'mercedes-e300-2017', name: 'Mercedes-Benz E300 4Matic', year: 2017, body: 'Saloon', luxury: true, colour: 'Red', img: 'mercedes-e300-2017', feats: ['4Matic all-wheel drive', 'Keyless entry', 'Keyless ignition'], price: { rental: null, escort: null, event: null } },
  { slug: 'toyota-highlander-2021', name: 'Toyota Highlander XLE', year: 2021, body: 'SUV', colour: 'Black', img: 'toyota-highlander-2021', hero: 'toyota-highlander-2021', pos: '50% 75%', feats: ['All-wheel drive', 'V6 engine'], price: { rental: null, escort: null, event: null } },
  { slug: 'honda-crv-sport-2025', name: 'Honda CR-V Sport', year: 2025, body: 'SUV', colour: 'White', img: 'honda-crv-2025', feats: ['Full option', 'Freshly cleared'], price: { rental: null, escort: null, event: null } },
  { slug: 'honda-crv-touring-2024', name: 'Honda CR-V Sport Touring', year: 2024, body: 'SUV', colour: 'Blue', img: 'honda-crv-2024', feats: ['Full option', 'Freshly cleared'], price: { rental: null, escort: null, event: null } },
  { slug: 'honda-civic-sport-2022', name: 'Honda Civic Sport', year: 2022, body: 'Saloon', colour: 'Black', img: 'honda-civic-2022', feats: ['Keyless entry', 'Side camera'], price: { rental: null, escort: null, event: null } },
  { slug: 'honda-hrv-touring-2020', name: 'Honda HR-V Touring', year: 2020, body: 'SUV', colour: 'White', img: 'honda-hrv-2020', feats: ['Keyless entry', 'Side camera'], price: { rental: null, escort: null, event: null } },
  { slug: 'mitsubishi-outlander-2020', name: 'Mitsubishi Outlander', year: 2020, body: 'SUV', colour: 'Grey', img: 'mitsubishi-outlander-2020', feats: ['Limited edition', 'Push start'], price: { rental: null, escort: null, event: null } },
  { slug: 'hyundai-elantra-se-2020', name: 'Hyundai Elantra SE', year: 2020, body: 'Saloon', colour: 'White', img: 'hyundai-elantra-2020', hero: 'hyundai-elantra-2020', pos: '50% 85%', feats: ['Full option', 'Push start'], price: { rental: null, escort: null, event: null } },
  { slug: 'toyota-corolla-xse-2017', name: 'Toyota Corolla XSE', year: 2017, body: 'Saloon', colour: 'Grey', img: 'toyota-corolla-2017', feats: ['Fully loaded', 'Push start'], price: { rental: null, escort: null, event: null } },
  { slug: 'hyundai-elantra-2017', name: 'Hyundai Elantra', year: 2017, body: 'Saloon', colour: 'White', img: 'hyundai-elantra-2017', feats: ['Rear view camera'], price: { rental: null, escort: null, event: null } },
  { slug: 'scion-ia-2016', name: 'Scion iA', year: 2016, body: 'Saloon', colour: 'Red', img: 'scion-ia-2016', feats: ['Push start', '1.5L 4-cylinder'], price: { rental: null, escort: null, event: null } },
];

// Categories shown as chips on the fleet page.
export const CATEGORIES = [
  { id: 'all', label: 'All', test: () => true },
  { id: 'luxury', label: 'Luxury', test: (c) => c.luxury },
  { id: 'suv', label: 'SUVs', test: (c) => c.body === 'SUV' },
  { id: 'saloon', label: 'Saloons', test: (c) => c.body === 'Saloon' },
];

// Shown on every car page under "Good to know".
export const GOOD_TO_KNOW = [
  'Bring a valid ID when you collect the car',
  'Self-drive rentals need a valid driver\'s licence',
  'Price, fuel and mileage terms confirmed in writing on WhatsApp',
  'Pickup point or meeting point agreed when you book',
  'Your booking is confirmed once we reply on WhatsApp',
];
