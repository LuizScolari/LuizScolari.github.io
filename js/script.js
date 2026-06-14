function showTab(tabName) {
    var tabcontent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    var tablinks = document.getElementsByClassName("tab-btn");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    var tab = document.getElementById(tabName);
    if (!tab) return false;

    tab.style.display = "block";
    var btn = document.querySelector('.tab-btn[data-tab="' + tabName + '"]');
    if (btn) btn.classList.add("active");
    return true;
}

function openTab(evt, tabName) {
    showTab(tabName);
    history.replaceState(null, "", "#" + tabName);
}

window.addEventListener("DOMContentLoaded", () => {
    var tabName = window.location.hash.replace("#", "");
    if (!showTab(tabName)) {
        showTab("about");
    }
});
