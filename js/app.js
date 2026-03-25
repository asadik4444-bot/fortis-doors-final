/* ============================================================
   Fortis Doors V6 — Main Application (Alpine.js)
   ============================================================ */

// ---------------------------------------------------------------------------
// 1. Products Data — Real Fortis catalog
// ---------------------------------------------------------------------------

const products = [
  // ===== КОМФОРТ (K) Series =====
  // 75mm door, 90mm frame, 1mm metal, 1.2mm frame metal, 3 seals, 2 locks, 3 insulation layers
  {
    slug: "komfort-k1",
    category: "komfort",
    image: "images/doors/komfort-k1.jpg",
    specs: { doorThickness: "75 мм", frameThickness: "90 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Хром" },
    outerPanels: ["Шагрень", "Серебро", "Антик"],
    innerPanels: ["Белый", "Венге"],
  },
  {
    slug: "komfort-k2",
    category: "komfort",
    image: "images/doors/komfort-k2.jpg",
    specs: { doorThickness: "75 мм", frameThickness: "90 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Хром" },
    outerPanels: ["Шагрень", "Серебро", "Антик"],
    innerPanels: ["Белый", "Венге"],
  },
  {
    slug: "komfort-k3",
    category: "komfort",
    image: "images/doors/komfort-k3.jpg",
    specs: { doorThickness: "75 мм", frameThickness: "90 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Хром" },
    outerPanels: ["Шагрень", "Серебро", "Антик"],
    innerPanels: ["Белый", "Венге"],
  },
  {
    slug: "komfort-k4",
    category: "komfort",
    image: "images/doors/komfort-k4.jpg",
    specs: { doorThickness: "75 мм", frameThickness: "90 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Хром" },
    outerPanels: ["Шагрень", "Серебро", "Антик"],
    innerPanels: ["Белый", "Венге"],
  },
  {
    slug: "komfort-k5",
    category: "komfort",
    image: "images/doors/komfort-k5.jpg",
    specs: { doorThickness: "75 мм", frameThickness: "90 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Хром" },
    outerPanels: ["Шагрень", "Серебро", "Антик"],
    innerPanels: ["Белый", "Венге"],
  },
  {
    slug: "komfort-k6",
    category: "komfort",
    image: "images/doors/komfort-k6.jpg",
    specs: { doorThickness: "75 мм", frameThickness: "90 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Хром" },
    outerPanels: ["Шагрень", "Серебро", "Антик"],
    innerPanels: ["Белый", "Венге"],
  },
  {
    slug: "komfort-k7",
    category: "komfort",
    image: "images/doors/komfort-k7.jpg",
    specs: { doorThickness: "75 мм", frameThickness: "90 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Хром" },
    outerPanels: ["Шагрень", "Серебро", "Антик"],
    innerPanels: ["Белый", "Венге"],
  },

  // ===== МОДЕРН (M) Series =====
  // 85mm door, 100mm frame, 1mm metal, 1.2mm frame metal, 3 seals, 2 locks, 3 insulation layers, Black color
  {
    slug: "modern-m1-black",
    category: "modern",
    image: "images/doors/modern-m1-black.jpg",
    specs: { doorThickness: "85 мм", frameThickness: "100 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "modern-m1-brown",
    category: "modern",
    image: "images/doors/modern-m1-brown.jpg",
    specs: { doorThickness: "85 мм", frameThickness: "100 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "modern-m2-wenge",
    category: "modern",
    image: "images/doors/modern-m2-wenge.jpg",
    specs: { doorThickness: "85 мм", frameThickness: "100 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "modern-m2-black",
    category: "modern",
    image: "images/doors/modern-m2-black.jpg",
    specs: { doorThickness: "85 мм", frameThickness: "100 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "modern-m2-carbon",
    category: "modern",
    image: "images/doors/modern-m2-carbon.jpg",
    specs: { doorThickness: "85 мм", frameThickness: "100 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "modern-m3-beton",
    category: "modern",
    image: "images/doors/modern-m3-beton.jpg",
    specs: { doorThickness: "85 мм", frameThickness: "100 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "modern-m3-chestnut",
    category: "modern",
    image: "images/doors/modern-m3-chestnut.jpg",
    specs: { doorThickness: "85 мм", frameThickness: "100 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "modern-m4-carbon",
    category: "modern",
    image: "images/doors/modern-m4-carbon.jpg",
    specs: { doorThickness: "85 мм", frameThickness: "100 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "modern-m5-mokko",
    category: "modern",
    image: "images/doors/modern-m5-mokko.jpg",
    specs: { doorThickness: "85 мм", frameThickness: "100 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "modern-m5-black",
    category: "modern",
    image: "images/doors/modern-m5-black.jpg",
    specs: { doorThickness: "85 мм", frameThickness: "100 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "modern-m5-beton",
    category: "modern",
    image: "images/doors/modern-m5-beton.jpg",
    specs: { doorThickness: "85 мм", frameThickness: "100 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "modern-m5-brown",
    category: "modern",
    image: "images/doors/modern-m5-brown.jpg",
    specs: { doorThickness: "85 мм", frameThickness: "100 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },

  // ===== ПРЕСТИЖ (P) Series =====
  // 85mm door, 100mm frame, 1mm metal, 1.2mm frame metal, 3 seals, 2 locks, 3 insulation layers, Black color
  {
    slug: "prestige-p1-black",
    category: "prestige",
    image: "images/doors/prestige-p1-black.jpg",
    specs: { doorThickness: "85 мм", frameThickness: "100 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "prestige-p2-black",
    category: "prestige",
    image: "images/doors/prestige-p2-black.jpg",
    specs: { doorThickness: "85 мм", frameThickness: "100 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "prestige-p3-walnut",
    category: "prestige",
    image: "images/doors/prestige-p3-walnut.jpg",
    specs: { doorThickness: "85 мм", frameThickness: "100 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "prestige-p4-beton",
    category: "prestige",
    image: "images/doors/prestige-p4-beton.jpg",
    specs: { doorThickness: "85 мм", frameThickness: "100 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "prestige-p4-black",
    category: "prestige",
    image: "images/doors/prestige-p4-black.jpg",
    specs: { doorThickness: "85 мм", frameThickness: "100 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "prestige-p5-black",
    category: "prestige",
    image: "images/doors/prestige-p5-black.jpg",
    specs: { doorThickness: "85 мм", frameThickness: "100 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "prestige-p5-brown",
    category: "prestige",
    image: "images/doors/prestige-p5-brown.jpg",
    specs: { doorThickness: "85 мм", frameThickness: "100 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "prestige-p6-chestnut",
    category: "prestige",
    image: "images/doors/prestige-p6-chestnut.jpg",
    specs: { doorThickness: "85 мм", frameThickness: "100 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "prestige-p7-walnut-gold",
    category: "prestige",
    image: "images/doors/prestige-p7-walnut-gold.jpg",
    specs: { doorThickness: "85 мм", frameThickness: "100 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },

  // ===== ЭЛИТ (E) Series =====
  // 87mm door, 110mm frame, 1mm metal, 1.2mm frame metal, 3 seals, 2 locks, 3 insulation layers, Black color
  {
    slug: "elite-e2-brown",
    category: "elite",
    image: "images/doors/elite-e2-brown.jpg",
    specs: { doorThickness: "87 мм", frameThickness: "110 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "elite-e2-cherry",
    category: "elite",
    image: "images/doors/elite-e2-cherry.jpg",
    specs: { doorThickness: "87 мм", frameThickness: "110 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "elite-e2-green",
    category: "elite",
    image: "images/doors/elite-e2-green.jpg",
    specs: { doorThickness: "87 мм", frameThickness: "110 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "elite-e3-brown",
    category: "elite",
    image: "images/doors/elite-e3-brown.jpg",
    specs: { doorThickness: "87 мм", frameThickness: "110 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "elite-e3-cherry",
    category: "elite",
    image: "images/doors/elite-e3-cherry.jpg",
    specs: { doorThickness: "87 мм", frameThickness: "110 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "elite-e3-green",
    category: "elite",
    image: "images/doors/elite-e3-green.jpg",
    specs: { doorThickness: "87 мм", frameThickness: "110 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "elite-e4-brown",
    category: "elite",
    image: "images/doors/elite-e4-brown.jpg",
    specs: { doorThickness: "87 мм", frameThickness: "110 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "elite-e4-cherry",
    category: "elite",
    image: "images/doors/elite-e4-cherry.jpg",
    specs: { doorThickness: "87 мм", frameThickness: "110 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "elite-e4-green",
    category: "elite",
    image: "images/doors/elite-e4-green.jpg",
    specs: { doorThickness: "87 мм", frameThickness: "110 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },

  // ===== 120 СЕРИЯ (Double doors) =====
  // 120 Комфорт: 75mm door, 90mm frame
  {
    slug: "s120-komfort-k1",
    category: "120",
    image: "images/doors/s120-komfort-k1.jpg",
    specs: { doorThickness: "75 мм", frameThickness: "90 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Хром" },
    outerPanels: ["Шагрень", "Серебро", "Антик"],
    innerPanels: ["Белый", "Венге"],
  },
  {
    slug: "s120-komfort-k2",
    category: "120",
    image: "images/doors/s120-komfort-k2.jpg",
    specs: { doorThickness: "75 мм", frameThickness: "90 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Хром" },
    outerPanels: ["Шагрень", "Серебро", "Антик"],
    innerPanels: ["Белый", "Венге"],
  },
  {
    slug: "s120-komfort-k3",
    category: "120",
    image: "images/doors/s120-komfort-k3.jpg",
    specs: { doorThickness: "75 мм", frameThickness: "90 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Хром" },
    outerPanels: ["Шагрень", "Серебро", "Антик"],
    innerPanels: ["Белый", "Венге"],
  },
  // 120 Элит-3: 87mm door, 110mm frame
  {
    slug: "s120-elite3-brown",
    category: "120",
    image: "images/doors/s120-elite3-brown.jpg",
    specs: { doorThickness: "87 мм", frameThickness: "110 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "s120-elite3-cherry",
    category: "120",
    image: "images/doors/s120-elite3-cherry.jpg",
    specs: { doorThickness: "87 мм", frameThickness: "110 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "s120-elite3-green",
    category: "120",
    image: "images/doors/s120-elite3-green.jpg",
    specs: { doorThickness: "87 мм", frameThickness: "110 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  // 120 Элит-4: 87mm door, 110mm frame
  {
    slug: "s120-elite4-brown",
    category: "120",
    image: "images/doors/s120-elite4-brown.jpg",
    specs: { doorThickness: "87 мм", frameThickness: "110 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "s120-elite4-cherry",
    category: "120",
    image: "images/doors/s120-elite4-cherry.jpg",
    specs: { doorThickness: "87 мм", frameThickness: "110 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
  {
    slug: "s120-elite4-green",
    category: "120",
    image: "images/doors/s120-elite4-green.jpg",
    specs: { doorThickness: "87 мм", frameThickness: "110 мм", metalDoor: "1 мм", metalFrame: "1,2 мм", seals: "3 шт", locks: "2", insulation: "3", color: "Чёрный" },
    outerPanels: [],
    innerPanels: ["Белый"],
  },
];

// ---------------------------------------------------------------------------
// 2. Alpine Store — i18n
// ---------------------------------------------------------------------------
document.addEventListener("alpine:init", () => {
  Alpine.store("i18n", {
    locale: localStorage.getItem("fortis-locale") || "ru",

    get t() {
      return translations[this.locale] || translations.ru;
    },

    setLocale(locale) {
      this.locale = locale;
      localStorage.setItem("fortis-locale", locale);
      document.documentElement.lang = locale;
    },
  });
});

// ---------------------------------------------------------------------------
// 3. Scroll Reveal — IntersectionObserver
// ---------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.classList.add("revealed");
          }, delay * 1000);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "-80px" }
  );

  document.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el));

  const reobserve = () => {
    document.querySelectorAll(".scroll-reveal:not(.revealed)").forEach((el) => observer.observe(el));
  };

  document.addEventListener("alpine:initialized", reobserve);
  window.addEventListener("load", reobserve);

  // --- Counter Animation ---
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = el.dataset.target;
          const suffix = el.dataset.suffix || "";
          const prefix = el.dataset.prefix || "";
          const num = parseInt(target, 10);
          const duration = 1200;
          const startFrom = Math.round(num * 0.8);
          const range = num - startFrom;
          const start = performance.now();
          const easeOut = (t) => 1 - Math.pow(1 - t, 3);

          const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const value = Math.round(startFrom + easeOut(progress) * range);
            el.textContent = prefix + value.toLocaleString() + suffix;
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          counterObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.3 }
  );
  document.querySelectorAll("[data-counter]").forEach((el) => counterObserver.observe(el));
});

// ---------------------------------------------------------------------------
// 4. Alpine Data Components
// ---------------------------------------------------------------------------

function headerComponent() {
  return {
    scrolled: false,
    mobileOpen: false,

    init() {
      this.scrolled = window.scrollY > 40;
    },

    onScroll() {
      this.scrolled = window.scrollY > 40;
    },
  };
}

function catalogComponent() {
  return {
    activeFilter: new URLSearchParams(window.location.search).get("category") || "all",

    get filtered() {
      if (this.activeFilter === "all") return products;
      return products.filter((p) => p.category === this.activeFilter);
    },
  };
}

function contactFormComponent() {
  return {
    form: { name: "", email: "", phone: "", subject: "", message: "" },
    status: "idle",
    loading: false,
    errorMessage: "",

    submitForm() {
      this.loading = true;
      this.errorMessage = "";

      const t = Alpine.store("i18n").t.contactForm;
      const subjectText = this.form.subject
        ? t["subject" + this.form.subject.charAt(0).toUpperCase() + this.form.subject.slice(1)] || this.form.subject
        : "Contact Form";

      const encodedSubject = encodeURIComponent(subjectText);
      const encodedBody = encodeURIComponent(
        `Name: ${this.form.name}\nEmail: ${this.form.email}\nPhone: ${this.form.phone}\n\n${this.form.message}`
      );

      window.open(`mailto:asadik4444@gmail.com?subject=${encodedSubject}&body=${encodedBody}`, "_self");

      this.status = "success";
      this.loading = false;
      this.form = { name: "", email: "", phone: "", subject: "", message: "" };
    },

    resetForm() {
      this.status = "idle";
      this.errorMessage = "";
    },
  };
}

function productDetailComponent() {
  return {
    slug: new URLSearchParams(window.location.search).get("slug") || "",
    showContactModal: false,

    get product() {
      return products.find(p => p.slug === this.slug) || null;
    },

    get related() {
      if (!this.product) return [];
      return products
        .filter(p => p.category === this.product.category && p.slug !== this.slug)
        .slice(0, 3);
    },
  };
}
