// Show splash screen for 3 seconds, then show main content
setTimeout(() => {
    document.getElementById("splash-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
}, 3000);
