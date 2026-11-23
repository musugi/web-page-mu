/* Chibi + motion layer for the Blowfish theme.
 * - Scroll-reveal for content blocks
 * - Animated homepage avatar (idle bob, hop + greeting on click)
 * - Typewriter effect on the homepage headline
 * - Small chibi next to inner-page titles
 * - Floating chibi buddy with rotating speech bubble
 * - Reading-progress bar on long pages
 * Everything degrades gracefully and respects prefers-reduced-motion.
 */
(function () {
  "use strict";

  var cfg = window.__chibi || {};
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var main = document.querySelector("main") || document.body;

  /* ---------- 1. Scroll reveal ---------- */
  function setupReveal() {
    var targets = main.querySelectorAll(
      ".sg-hero-text > *, .sg-hero-art, .sg-section, .sg-card, .sg-news > li, .sg-skill, article header, .article-content > *, .chibi-404 > *"
    );
    if (reduce || !("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    var i = 0;
    targets.forEach(function (el) {
      el.classList.add("reveal");
      el.style.setProperty("--reveal-delay", Math.min(i++, 6) * 60 + "ms");
      io.observe(el);
    });
  }

  /* ---------- 2. Homepage avatar ---------- */
  function setupAvatar() {
    if (cfg.kind !== "home") return;
    var img = main.querySelector("[data-chibi-avatar]") ||
              main.querySelector("img.rounded-full") || main.querySelector("header img");
    if (!img) return;
    img.classList.add("chibi-avatar");

    // The editorial home layout ships its own wrapper + bubble; Blowfish's profile layout doesn't.
    var wrap = img.closest(".chibi-avatar-wrap");
    if (!wrap) {
      wrap = document.createElement("span");
      wrap.className = "chibi-avatar-wrap";
      img.parentNode.insertBefore(wrap, img);
      wrap.appendChild(img);
      var bubble = document.createElement("span");
      bubble.className = "chibi-avatar-bubble";
      bubble.textContent = cfg.hello || "Hi!";
      bubble.setAttribute("aria-hidden", "true");
      wrap.appendChild(bubble);
    }

    img.setAttribute("tabindex", "0");
    img.setAttribute("role", "button");
    img.setAttribute("aria-label", cfg.hello || "Hi!");
    function hop() {
      wrap.classList.remove("is-hopping");
      void wrap.offsetWidth; // restart animation
      wrap.classList.add("is-hopping");
    }
    img.addEventListener("click", hop);
    img.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); hop(); }
    });

    /* Typewriter on the headline */
    var headline = main.querySelector("[data-typewriter]");
    if (!headline) {
      var header = wrap.closest("header") || wrap.parentNode;
      headline = header && header.querySelector("h2");
    }
    if (headline && !reduce && headline.children.length === 0) {
      var full = headline.textContent.trim();
      headline.setAttribute("aria-label", full);
      headline.textContent = "";
      headline.classList.add("typewriter");
      var n = 0;
      setTimeout(function type() {
        headline.textContent = full.slice(0, ++n);
        if (n < full.length) setTimeout(type, 28 + Math.random() * 40);
        else setTimeout(function () { headline.classList.add("typewriter-done"); }, 1600);
      }, 500);
    }
  }

  /* ---------- 3. Chibi next to page titles ---------- */
  function setupTitleChibi() {
    if (cfg.kind === "home" || cfg.kind === "404") return;
    var h1 = main.querySelector("h1");
    if (!h1 || h1.querySelector(".chibi-title")) return;
    var mini = document.createElement("img");
    mini.src = cfg.head;
    mini.alt = "";
    mini.width = 44;
    mini.height = 44;
    mini.className = "chibi-title";
    h1.classList.add("has-chibi");
    h1.insertBefore(mini, h1.firstChild);
  }

  /* ---------- 4. Floating buddy ---------- */
  function setupBuddy() {
    var root = document.createElement("div");
    root.id = "chibi-buddy";
    root.className = "chibi-buddy";
    root.setAttribute("aria-live", "polite");

    var bubble = document.createElement("div");
    bubble.className = "chibi-bubble";
    bubble.id = "chibi-bubble";
    bubble.hidden = true;
    var text = document.createElement("p");
    text.className = "chibi-bubble-text";
    var link = document.createElement("a");
    link.className = "chibi-bubble-link";
    link.href = cfg.contactUrl || "#";
    link.textContent = cfg.contactLabel || "Say hello →";
    bubble.appendChild(text);
    bubble.appendChild(link);

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chibi-buddy-btn";
    btn.setAttribute("aria-label", cfg.buddyLabel || "Chat with the chibi");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", "chibi-bubble");
    var face = document.createElement("img");
    face.src = cfg.head; face.alt = ""; face.width = 64; face.height = 64;
    btn.appendChild(face);

    root.appendChild(bubble);
    root.appendChild(btn);
    document.body.appendChild(root);

    var lines = (cfg.lines && cfg.lines.length) ? cfg.lines : ["Hi!"];
    var idx = 0;
    var hideTimer;

    function open() {
      text.textContent = lines[idx % lines.length];
      idx++;
      bubble.hidden = false;
      requestAnimationFrame(function () { bubble.classList.add("is-open"); });
      btn.setAttribute("aria-expanded", "true");
      btn.classList.remove("is-waving"); void btn.offsetWidth; btn.classList.add("is-waving");
      clearTimeout(hideTimer);
      hideTimer = setTimeout(close, 6000);
    }
    function close() {
      bubble.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
      setTimeout(function () { if (!bubble.classList.contains("is-open")) bubble.hidden = true; }, 250);
    }
    // Each click shows the next line; click elsewhere or Esc to close.
    btn.addEventListener("click", open);
    document.addEventListener("click", function (e) {
      if (!e.target.closest("#chibi-buddy")) close();
    });
    btn.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });

    setTimeout(function () { root.classList.add("is-in"); }, reduce ? 0 : 900);
    try {
      if (!sessionStorage.getItem("chibi-greeted")) {
        setTimeout(open, 2200);
        sessionStorage.setItem("chibi-greeted", "1");
      }
    } catch (e) { /* storage blocked: skip auto-greeting */ }
  }

  /* ---------- 5. Reading progress ---------- */
  function setupProgress() {
    if (cfg.kind !== "page") return;
    if (document.documentElement.scrollHeight < window.innerHeight * 1.6) return;
    var bar = document.createElement("div");
    bar.className = "chibi-progress";
    bar.setAttribute("aria-hidden", "true");
    document.body.appendChild(bar);
    var ticking = false;
    function update() {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = "scaleX(" + (h > 0 ? window.scrollY / h : 0) + ")";
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  function init() {
    setupAvatar();
    setupTitleChibi();
    setupReveal();
    setupBuddy();
    setupProgress();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
