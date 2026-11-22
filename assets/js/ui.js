import { BUSINESS, CARS, SERVICES } from './data.js';

// ------------------------------------------------------------ Icons
const PATHS = {
  back: '<path d="M15 18l-6-6 6-6"/>',
  next: '<path d="M9 18l6-6-6-6"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  close: '<path d="M18 6 6 18M6 6l12 12"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  sort: '<path d="M4 6h16M7 12h10M10 18h4"/>',
  share: '<path d="M12 3v13M7 8l5-5 5 5"/><path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/>',
  pin: '<path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
  calendar: '<rect x="3" y="4.5" width="18" height="16.5" rx="2.5"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/>',
  car: '<path d="M5 17h14M3.5 13.5l1.8-5.1A2 2 0 0 1 7.2 7h9.6a2 2 0 0 1 1.9 1.4l1.8 5.1"/><rect x="2.5" y="13" width="19" height="5" rx="1.5"/><circle cx="7" cy="18.5" r="1.5"/><circle cx="17" cy="18.5" r="1.5"/>',
  year: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  wheel: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/><path d="M12 3v7M5 16l5.3-3M19 16l-5.3-3"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  shield: '<path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6z"/><path d="m8.8 12 2.2 2.2 4.2-4.4"/>',
  bolt: '<path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12z"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.6-3.4 3.3-5.5 6.5-5.5s5.9 2.1 6.5 5.5"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.8c1.9.7 3.2 2.5 3.5 5.2"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
  chat: '<path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.5L3 21l1.9-5.4A8.4 8.4 0 1 1 21 11.5z"/>',
  print: '<path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M6 14h12v7H6z"/>',
  spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/>',
  home: '<path d="M3 11.5 12 4l9 7.5M5.5 9.5V20h13V9.5"/>',
};
export const icon = (name, cls = 'icon') =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${PATHS[name] || ''}</svg>`;

// ------------------------------------------------------------ Small helpers
export const $ = (s, el = document) => el.querySelector(s);
export const $$ = (s, el = document) => [...el.querySelectorAll(s)];
export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const carBySlug = (slug) => CARS.find((c) => c.slug === slug);
export const carImg = (c, hero = false) => `/img/cars/${hero && c.hero ? c.hero : c.img}.jpg`;

export function money(n, cents = false) {
  const v = Number(n).toLocaleString('en-GH', { minimumFractionDigits: cents ? 2 : 0, maximumFractionDigits: cents ? 2 : 0 });
  return `${BUSINESS.currency} ${v}`;
}
// Price shown on cards: the rental day rate, or "On request".
export function priceLabel(car, service = 'rental') {
  const p = car.price?.[service];
  return p ? { amount: money(p), unit: `/ ${SERVICES[service].unit}` } : { amount: 'On request', unit: '' };
}

// Dates are handled as local "YYYY-MM-DD" strings.
export const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
export const parse = (s) => { const [y, m, d] = String(s).split('-').map(Number); return new Date(y, m - 1, d); };
export const today = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; };
export const daysBetween = (a, b) => Math.round((parse(b) - parse(a)) / 86400000);
export const fmt = (s, o = { weekday: 'short', day: 'numeric', month: 'short' }) => parse(s).toLocaleDateString('en-GB', o);
export const isValidDate = (s) => /^\d{4}-\d{2}-\d{2}$/.test(s || '') && !isNaN(parse(s));

// ------------------------------------------------------------ WhatsApp
export const waLink = (msg) => `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(msg)}`;

// A booking: what the customer chose, plus their details once entered.
export function bookingDays(b) {
  return SERVICES[b.service].dates === 'range' ? Math.max(1, daysBetween(b.start, b.end)) : 1;
}
export function quote(b) {
  const car = carBySlug(b.car);
  const unit = car?.price?.[b.service];
  if (!unit) return null;
  const qty = b.service === 'rental' ? bookingDays(b) : b.count;
  return { unit, qty, total: unit * qty, label: b.service === 'rental' ? `${qty} day${qty > 1 ? 's' : ''} × ${money(unit)}` : `${qty} car${qty > 1 ? 's' : ''} × ${money(unit)}` };
}
export function whenLabel(b) {
  if (SERVICES[b.service].dates === 'range') {
    const n = bookingDays(b);
    return `${fmt(b.start)} to ${fmt(b.end)} (${n} day${n > 1 ? 's' : ''})`;
  }
  return fmt(b.start, { weekday: 'long', day: 'numeric', month: 'long' });
}
export function bookingMessage(b) {
  const car = carBySlug(b.car);
  const q = quote(b);
  const lines = [
    `Hi ${BUSINESS.name}, I'd like to book.`,
    ``,
    `Reference: ${b.ref}`,
    `Service: ${SERVICES[b.service].label}`,
    `Car: ${car ? `${car.year} ${car.name}` : 'Any'}`,
    `${b.service === 'rental' ? 'Dates' : 'Date'}: ${whenLabel(b)}`,
  ];
  if (b.service !== 'rental') lines.push(`Cars needed: ${b.count}`);
  if (b.service === 'rental') lines.push(`Driver: ${b.driver === 'self' ? 'Self-drive' : 'With driver'}`);
  if (b.location) lines.push(`${locationLabel(b.service)}: ${b.location}`);
  lines.push(`Name: ${b.name}`, `Phone: ${b.phone}`);
  if (b.email) lines.push(`Email: ${b.email}`);
  if (b.notes) lines.push(`Notes: ${b.notes}`);
  if (q) lines.push(`Estimate: ${money(q.total)}`);
  return lines.join('\n');
}
export const locationLabel = (service) => ({ rental: 'Pickup location', escort: 'Start point and route', event: 'Event venue' }[service]);

// ------------------------------------------------------------ Saved bookings (this device only)
const KEY = 'sm-bookings-v1';
export function loadBookings() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; }
}
export function saveBooking(b) {
  try {
    const all = loadBookings().filter((x) => x.ref !== b.ref);
    all.unshift(b);
    localStorage.setItem(KEY, JSON.stringify(all.slice(0, 50)));
  } catch { /* storage unavailable: the booking still goes out on WhatsApp */ }
}
export const findBooking = (ref) => loadBookings().find((b) => b.ref === ref);
export function newRef() {
  const a = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const r = crypto.getRandomValues(new Uint8Array(6));
  return 'SM-' + [...r].map((n) => a[n % a.length]).join('').replace(/^(.{3})/, '$1-');
}
// Status shown to the customer.
export function bookingStatus(b) {
  if (b.status === 'draft') return { id: 'draft', label: 'Not sent yet' };
  const end = SERVICES[b.service].dates === 'range' ? b.end : b.start;
  if (parse(end) < today()) return { id: 'past', label: 'Past' };
  return { id: 'sent', label: 'Request sent' };
}

// ------------------------------------------------------------ Header
export function header(active) {
  const el = document.createElement('header');
  el.className = 'top';
  el.innerHTML = `
    <a class="top__logo" href="/" aria-label="${BUSINESS.name} home"><img src="/img/brand/wordmark-white.svg" alt="" width="130" height="36"></a>
    <nav class="seg seg--nav" aria-label="Main">
      <a href="/fleet" ${active === 'fleet' ? 'aria-current="page"' : ''}>${icon('car')}<span>Fleet</span></a>
      <a href="/bookings" ${active === 'bookings' ? 'aria-current="page"' : ''}>${icon('calendar')}<span>Bookings</span></a>
    </nav>`;
  document.body.prepend(el);
  return el;
}

export function footer() {
  const el = document.createElement('footer');
  el.className = 'foot';
  el.innerHTML = `
    <div class="wrap foot__in">
      <img src="/img/brand/logo-white.svg" alt="${BUSINESS.name}" width="200" height="77">
      <div class="foot__cols">
        <p><span class="muted">Find us</span><br>${BUSINESS.address}</p>
        <p><span class="muted">Call or WhatsApp</span><br><a href="tel:${BUSINESS.phone}">${BUSINESS.phoneLabel}</a></p>
        <p><span class="muted">Services</span><br>Rentals, escorts and events</p>
      </div>
    </div>`;
  document.body.append(el);
}

// ------------------------------------------------------------ Share
export async function share(url, title) {
  const full = new URL(url, location.origin).href;
  try {
    if (navigator.share) { await navigator.share({ title, url: full }); return; }
    await navigator.clipboard.writeText(full);
    toast('Link copied');
  } catch { /* user cancelled */ }
}
export function toast(text) {
  let t = $('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.append(t); }
  t.textContent = text;
  t.classList.add('is-on');
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.remove('is-on'), 2200);
}

// ------------------------------------------------------------ Car card (fleet and "you may also like")
export function carCard(c, service = 'rental') {
  const p = priceLabel(c, service);
  const q = service === 'rental' ? '' : `?service=${service}`;
  return `<article class="card">
    <a class="card__media" href="/cars/${c.slug}${q}" tabindex="-1" aria-hidden="true">
      <img src="${carImg(c)}" alt="" loading="lazy" width="810" height="826" style="object-position:${c.pos || '50% 55%'}">
    </a>
    <div class="card__tags"><span class="pill">${c.body}</span>${c.luxury ? '<span class="pill pill--ghost">Signature</span>' : ''}</div>
    <button class="icon-btn icon-btn--light card__share" type="button" data-share="/cars/${c.slug}" data-title="${esc(c.name)}" aria-label="Share ${esc(c.name)}">${icon('share')}</button>
    <div class="card__body">
      <p class="price"><strong>${p.amount}</strong>${p.unit ? `<span>${p.unit}</span>` : ''}<span class="pill pill--small">Quick booking</span></p>
      <h3 class="card__title"><a href="/cars/${c.slug}${q}">${esc(c.name)}</a></h3>
      <p class="loc">${icon('pin')}${BUSINESS.area}</p>
      <ul class="specs">
        <li>${icon('year')}${c.year}</li>
        <li>${icon('car')}${c.body}</li>
        <li>${icon('wheel')}Driver on request</li>
      </ul>
      <div class="card__cta">
        <a class="btn btn--outline" href="/cars/${c.slug}${q}">View car</a>
        <a class="btn" href="/cars/${c.slug}${q ? q + '&' : '?'}book=1">Reserve</a>
      </div>
    </div>
  </article>`;
}
export function wireShare(root = document) {
  root.addEventListener('click', (e) => {
    const b = e.target.closest('[data-share]');
    if (b) { e.preventDefault(); share(b.dataset.share, b.dataset.title); }
  });
}

// ------------------------------------------------------------ Calendar
// mode: 'range' (start and end) or 'single'. onChange(start, end) gets ISO strings or null.
export function calendar(root, { mode = 'range', start = null, end = null, onChange = () => {} } = {}) {
  const min = today();
  const max = new Date(min.getFullYear(), min.getMonth() + 12, 0);
  let view = start ? parse(start) : new Date(min);
  view.setDate(1);
  const state = { mode, start, end };

  function render() {
    const y = view.getFullYear(), m = view.getMonth();
    const first = new Date(y, m, 1);
    const lead = (first.getDay() + 6) % 7; // weeks start on Monday
    const days = new Date(y, m + 1, 0).getDate();
    const title = first.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
    const canPrev = new Date(y, m, 1) > new Date(min.getFullYear(), min.getMonth(), 1);
    const canNext = new Date(y, m + 1, 1) <= max;
    let cells = '';
    for (let i = 0; i < lead; i++) cells += '<span></span>';
    for (let d = 1; d <= days; d++) {
      const date = new Date(y, m, d), s = iso(date);
      const off = date < min || date > max;
      const isStart = s === state.start, isEnd = s === state.end;
      const inRange = state.mode === 'range' && state.start && state.end && s > state.start && s < state.end;
      const cls = ['cal__day', off && 'is-off', isStart && 'is-start', isEnd && 'is-end', inRange && 'is-in',
        isStart && (state.mode === 'single' || !state.end) && 'is-solo', +date === +min && 'is-today'].filter(Boolean).join(' ');
      const label = date.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
      cells += `<button type="button" class="${cls}" data-d="${s}" ${off ? 'disabled' : ''} aria-label="${label}" aria-pressed="${isStart || isEnd}">${d}</button>`;
    }
    root.innerHTML = `
      <div class="cal__head">
        <button type="button" class="icon-btn" data-nav="-1" ${canPrev ? '' : 'disabled'} aria-label="Previous month">${icon('back')}</button>
        <strong class="cal__title">${title}</strong>
        <button type="button" class="icon-btn" data-nav="1" ${canNext ? '' : 'disabled'} aria-label="Next month">${icon('next')}</button>
      </div>
      <div class="cal__grid" role="grid">
        ${['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((d) => `<span class="cal__dow">${d}</span>`).join('')}
        ${cells}
      </div>`;
  }
  root.addEventListener('click', (e) => {
    const nav = e.target.closest('[data-nav]');
    if (nav) { view = new Date(view.getFullYear(), view.getMonth() + Number(nav.dataset.nav), 1); render(); return; }
    const day = e.target.closest('[data-d]');
    if (!day || day.disabled) return;
    const d = day.dataset.d;
    if (state.mode === 'single') { state.start = d; state.end = null; }
    else if (!state.start || state.end || d <= state.start) { state.start = d; state.end = null; }
    else { state.end = d; }
    render();
    onChange(state.start, state.end);
  });
  render();
  return {
    set(next) { Object.assign(state, next); if (state.start) { view = parse(state.start); view.setDate(1); } render(); },
    clear() { state.start = null; state.end = null; render(); onChange(null, null); },
    get: () => ({ ...state }),
  };
}

// ------------------------------------------------------------ Stepper (number +/-)
export function stepper(root, { value = 1, min = 1, max = 20, label = '', onChange = () => {} }) {
  let v = value;
  root.classList.add('stepper');
  const render = () => {
    root.innerHTML = `
      <button type="button" class="icon-btn" data-step="-1" ${v <= min ? 'disabled' : ''} aria-label="Fewer ${label}">${icon('minus')}</button>
      <output aria-live="polite">${v}</output>
      <button type="button" class="icon-btn" data-step="1" ${v >= max ? 'disabled' : ''} aria-label="More ${label}">${icon('plus')}</button>`;
  };
  root.addEventListener('click', (e) => {
    const b = e.target.closest('[data-step]');
    if (!b) return;
    v = Math.min(max, Math.max(min, v + Number(b.dataset.step)));
    render();
    onChange(v);
  });
  render();
  return { get: () => v };
}
