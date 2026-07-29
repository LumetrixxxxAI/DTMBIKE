(() => {
  "use strict";

  /* Header scroll state */
  const header = document.getElementById("siteHeader");
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile nav toggle */
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  const navScrim = document.getElementById("navScrim");

  const closeNav = () => {
    navToggle.classList.remove("active");
    mainNav.classList.remove("open");
    navScrim.classList.remove("show");
  };

  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    mainNav.classList.toggle("open");
    navScrim.classList.toggle("show");
  });

  navScrim.addEventListener("click", closeNav);
  mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", closeNav));

  /* Scroll reveal */
  const revealEls = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealObserver.observe(el));

  /* Animated counters */
  const counters = document.querySelectorAll(".counter");
  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimal || "0", 10);
    const duration = 1600;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toLocaleString("es-ES");
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = decimals > 0 ? target.toFixed(decimals) : target.toLocaleString("es-ES");
    };
    requestAnimationFrame(step);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObserver.observe(c));

  /* Footer year */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Cookie banner */
  const cookieBanner = document.getElementById("cookieBanner");
  const cookieAccept = document.getElementById("cookieAccept");
  const cookieDecline = document.getElementById("cookieDecline");
  const COOKIE_KEY = "dtmbike_cookie_choice";

  if (!localStorage.getItem(COOKIE_KEY)) {
    setTimeout(() => cookieBanner.classList.add("show"), 900);
  }

  const setCookieChoice = (value) => {
    localStorage.setItem(COOKIE_KEY, value);
    cookieBanner.classList.remove("show");
  };

  cookieAccept.addEventListener("click", () => setCookieChoice("accepted"));
  cookieDecline.addEventListener("click", () => setCookieChoice("declined"));
})();
