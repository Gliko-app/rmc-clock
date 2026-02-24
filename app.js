(function(){
  const TZ = "Europe/Belgrade";

  const timeEl = document.getElementById("clockTime700");
  const dateEl = document.getElementById("clockDate700");

  function updateClock(){
    const now = new Date();

    const time = new Intl.DateTimeFormat("sr-RS", {
      timeZone: TZ,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    }).format(now);

    const date = new Intl.DateTimeFormat("sr-RS", {
      timeZone: TZ,
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric"
    }).format(now);

    timeEl.textContent = time;
    dateEl.textContent = date;
  }

  updateClock();
  setInterval(updateClock, 1000);
})();