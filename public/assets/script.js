(function () {
  var cfg = window.GNT_CONFIG || {};
  var msgs = cfg.messages || {};

  function waUrl(key) {
    var msg = msgs[key] || msgs.padrao || "";
    return "https://wa.me/" + (cfg.whatsapp || "") + "?text=" + encodeURIComponent(msg);
  }

  // Links de WhatsApp: href real (SEO/acessibilidade) + evento de clique
  document.querySelectorAll(".js-wa").forEach(function (el) {
    el.href = waUrl(el.getAttribute("data-wa-msg") || "padrao");
    el.target = "_blank";
    el.rel = "noopener";
    el.addEventListener("click", function () {
      var event = el.getAttribute("data-event");
      if (event && window.dataLayer) {
        window.dataLayer.push({ event: event });
      }
    });
  });

  // Ano do rodapé
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Menu mobile
  var toggle = document.getElementById("menuToggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
})();
