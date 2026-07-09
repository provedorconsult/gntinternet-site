(function () {
  var cfg = window.GNT_CONFIG || {};

  // Links de WhatsApp (todos os elementos .js-whatsapp)
  document.querySelectorAll(".js-whatsapp").forEach(function (el) {
    el.addEventListener("click", function (ev) {
      ev.preventDefault();
      var msg = cfg.whatsappMessage || "";
      var plan = el.getAttribute("data-plan");
      if (plan) msg = "Olá! Quero assinar o plano " + plan + " da GNT Internet.";
      var url = "https://wa.me/" + (cfg.whatsapp || "") + "?text=" + encodeURIComponent(msg);
      window.open(url, "_blank", "noopener");
    });
  });

  // Contatos exibidos
  document.querySelectorAll(".js-phone-display").forEach(function (el) {
    el.textContent = cfg.phoneDisplay || "";
    el.href = "tel:+" + (cfg.whatsapp || "");
  });
  document.querySelectorAll(".js-email-display").forEach(function (el) {
    el.textContent = cfg.email || "";
    el.href = "mailto:" + (cfg.email || "");
  });
  document.querySelectorAll(".js-hours-display").forEach(function (el) {
    el.textContent = cfg.hours || "";
  });
  document.querySelectorAll(".js-legal-display").forEach(function (el) {
    el.textContent = cfg.legal || "";
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
