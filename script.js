document.addEventListener("DOMContentLoaded", function() {
    const targetDate = new Date("2023-10-30T13:00:00"); // Set target time.

    function showContent() {
        const currentDate = new Date();
        const remainingTime = targetDate - currentDate; //in milliseconds

        if (remainingTime <= 0) {
            const pre_content = document.getElementById("pre-content");
            pre_content.classList.remove("visible");
            pre_content.classList.add("hidden");
            
            const post_content = document.getElementById("post-content");
            post_content.classList.remove("hidden");
            post_content.classList.add("visible");
        }
        const seconds = Math.floor((remainingTime / 1000) % 60);
        const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
        const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    const show_delay = setInterval(showContent, 500); // Updates every second.
});
