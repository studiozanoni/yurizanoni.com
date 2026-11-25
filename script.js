(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.classList.add("js");

  var bar = document.querySelector("[data-bar]");
  function onScroll() { if (bar) bar.classList.toggle("is-scrolled", window.scrollY > 12); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  var clock = document.querySelector("[data-clock]");
  if (clock) {
    var fmt;
    try {
      fmt = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Hong_Kong", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
    } catch (e) { fmt = null; }
    var tick = function () { if (fmt) clock.textContent = fmt.format(new Date()); };
    tick();
    setInterval(tick, 1000);
  }

  var nodes = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    nodes.forEach(function (el) { el.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  nodes.forEach(function (el) { io.observe(el); });
})();
