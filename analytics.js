(function () {
  const measurementId = "G-RQ5ENNHQBF";

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + measurementId;
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", measurementId);
})();
