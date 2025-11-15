function openNav() {
    document.getElementById("mySidebar").style.width = "250px"
    document.getElementById("container-seach-upgrade").style.marginLeft = "200px"
    if (window.innerWidth < 768) {
        document.getElementById("seach-bar").style.width = "200px"
        document.getElementById("seach-bar").style.height = "30px"
        document.getElementById("upgrade-container").style.display = "none"
    }
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0"
    if (window.innerWidth < 768) {
        document.getElementById("container-seach-upgrade").style.marginLeft = "0";
        document.getElementById("upgrade-container").style.display = "block";
    }
}