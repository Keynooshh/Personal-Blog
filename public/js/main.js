document.addEventListener("DOMContentLoaded", () => {
    const ta = document.getElementById("messageTextarea");
    ta.value = "";

    document.querySelectorAll(".kaomoji-btn").forEach(btn => {
        btn.onclick = () => {
            const k = btn.dataset.kaomojiVal.trim();
            ta.value = (ta.value.trim() + " " + k).trim();
            ta.focus();
        };
    });
});
