// Inventory data + filtering
const CARS = [
  { id:1, name:"Toyota Camry XLE",   brand:"Toyota",        year:2020, price:18500000, condition:"Pre-owned", img:"images/car-1.jpg", type:"Sedan" },
  { id:2, name:"Lexus RX 350",       brand:"Lexus",         year:2021, price:32000000, condition:"Pre-owned", img:"images/car-2.jpg", type:"SUV" },
  { id:3, name:"Toyota Land Cruiser",brand:"Toyota",        year:2022, price:55000000, condition:"New",        img:"images/car-3.jpg", type:"4x4" },
  { id:4, name:"Honda Accord Sport", brand:"Honda",         year:2019, price:14500000, condition:"Pre-owned", img:"images/car-4.jpg", type:"Sedan" },
  { id:5, name:"Mercedes-Benz GLE",  brand:"Mercedes-Benz", year:2022, price:48000000, condition:"New",        img:"images/car-5.jpg", type:"SUV" },
  { id:6, name:"Ford Ranger Wildtrak",brand:"Ford",         year:2021, price:26000000, condition:"Pre-owned", img:"images/car-6.jpg", type:"Pickup" },
];

const fmt = n => "₦" + n.toLocaleString("en-NG");

function render(list){
  const grid = document.getElementById("car-grid");
  const count = document.getElementById("count");
  count.innerHTML = `<strong>${list.length}</strong> vehicle${list.length===1?"":"s"} available`;
  if (!list.length){
    grid.innerHTML = `<div class="empty"><p class="display" style="font-size:1.3rem;color:var(--primary);margin-bottom:.5rem">No matches found</p><p class="muted">Try adjusting your filters.</p></div>`;
    grid.style.gridTemplateColumns = "1fr";
    return;
  }
  grid.style.gridTemplateColumns = "";
  grid.innerHTML = list.map(c => `
    <article class="car-card">
      <div class="img"><img src="${c.img}" alt="${c.name}" loading="lazy"></div>
      <div class="car-body">
        <span class="tag">${c.condition}</span>
        <div class="meta">${c.year} · ${c.type}</div>
        <h3>${c.name}</h3>
        <div class="price">${fmt(c.price)}</div>
      </div>
    </article>
  `).join("");
}

function applyFilters(){
  const brand = document.getElementById("f-brand").value;
  const year  = document.getElementById("f-year").value;
  const cond  = document.getElementById("f-cond").value;
  const max   = +document.getElementById("f-price").value;
  document.getElementById("f-price-label").textContent = "Up to " + fmt(max);
  const out = CARS.filter(c =>
    (brand==="all"||c.brand===brand) &&
    (year==="all"||c.year===+year) &&
    (cond==="all"||c.condition===cond) &&
    c.price <= max
  );
  render(out);
}

document.addEventListener("DOMContentLoaded", () => {
  // populate brand and year selects
  const brandSel = document.getElementById("f-brand");
  const yearSel  = document.getElementById("f-year");
  [...new Set(CARS.map(c=>c.brand))].sort().forEach(b => brandSel.insertAdjacentHTML("beforeend",`<option value="${b}">${b}</option>`));
  [...new Set(CARS.map(c=>c.year))].sort((a,b)=>b-a).forEach(y => yearSel.insertAdjacentHTML("beforeend",`<option value="${y}">${y}</option>`));

  ["f-brand","f-year","f-cond","f-price"].forEach(id => document.getElementById(id).addEventListener("input", applyFilters));
  document.getElementById("f-reset").addEventListener("click", () => {
    document.getElementById("f-brand").value="all";
    document.getElementById("f-year").value="all";
    document.getElementById("f-cond").value="all";
    document.getElementById("f-price").value=60000000;
    applyFilters();
  });
  applyFilters();
});
