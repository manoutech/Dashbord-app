var sidebarOpen = false;

var sidebar = document.getElementById("sidebar");

function openSidebar() {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
}

function closeSidebar() {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
}

function closesidebar() {
    closeSidebar();
}