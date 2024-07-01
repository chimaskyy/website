document.addEventListener("DOMContentLoaded", () => {
  function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().slice(17, 25);
    const day = now.toLocaleDateString("en-US", { weekday: "long" });

    document.getElementById("currentTimeUTC").textContent = utcTime;
    document.getElementById("currentDay").textContent = day;
  }

  updateTime();
  setInterval(updateTime, 1000);
});
