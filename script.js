document.addEventListener("DOMContentLoaded", function() {
    const targetDate = new Date("2023-10-26T00:00:00"); // Set target time.

    function showContent() {
        const currentDate = new Date();

        if (currentDate >= targetDate) {
            const pre_content = document.getElementById("pre-content");
            pre_content.classList.remove("visible");
            pre_content.classList.add("hidden");
            
            const post_content = document.getElementById("post-content");
            post_content.classList.remove("hidden");
            post_content.classList.add("visible");

        }
    }

    setInterval(showContent, 1000); // Check every sec.
});
