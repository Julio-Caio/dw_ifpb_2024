function openSidebar() {
  document.getElementById("collapseSidebar").style.width = "15em";
}

function closeSidebar() {
  document.getElementById("collapseSidebar").style.width = "0";
}

function toggleSidebar() {
  const sidebar = document.getElementById("collapseSidebar");
  if (sidebar.style.width === "15em") {
    closeSidebar();
  } else {
    openSidebar();
  }
}