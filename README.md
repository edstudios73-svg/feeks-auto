# Signature Motors

Website for Signature Motors, Jungle Avenue Road, East Legon, Accra (024 700 4120): car rentals, VIP escorts and convoys, and cars for events.
Static HTML, deployed on Vercel.

- Edit the fleet: the `CARS` list near the bottom of `index.html` (photos live in `img/cars/`).
- Logo files: `img/brand/` (SVG and PNG, black and white versions, monogram and favicon).

## Pages
- `/` landing with "Slide to explore"
- `/fleet` search, category chips, service picker (Rental / Escort / Event)
- `/cars/<slug>` car page with booking sheet (dates, driver or number of cars)
- `/booking` checkout: details, review, send on WhatsApp, requested
- `/bookings` requests saved on this device

Prices: set `price` for each car in `assets/js/data.js` (null shows "On request").
