// ../js/dark-mode.js

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("darkModeToggle");
    const root = document.documentElement;

    // Estado inicial
    const darkEnabled = localStorage.getItem("darkMode") === "enabled";

    if (darkEnabled) {
        root.classList.add("dark");
    } else {
        root.classList.remove("dark");
    }

    // Sincronizar switch (solo existe en settings.html)
    if (toggle) {
        toggle.checked = darkEnabled;

        toggle.addEventListener("change", () => {
            if (toggle.checked) {
                root.classList.add("dark");
                localStorage.setItem("darkMode", "enabled");
            } else {
                root.classList.remove("dark");
                localStorage.setItem("darkMode", "disabled");
            }
        });
    }
});
