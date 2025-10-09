const SIDEBAR_COLLAPSED_KEY = "sidebarCollapsed"

document.addEventListener("nav", () => {
  const toggle = document.getElementById("sidebar-toggle")
  const sidebar = document.querySelector(".sidebar.left") as HTMLElement

  if (!toggle || !sidebar) return

  // Restore saved state from localStorage
  const savedState = localStorage.getItem(SIDEBAR_COLLAPSED_KEY)
  if (savedState === "true") {
    document.body.classList.add("sidebar-collapsed")
    sidebar.classList.add("collapsed")
  }

  // Toggle sidebar on button click
  toggle.addEventListener("click", () => {
    const isCollapsed = document.body.classList.toggle("sidebar-collapsed")
    sidebar.classList.toggle("collapsed")

    // Save state to localStorage
    localStorage.setItem(SIDEBAR_COLLAPSED_KEY, isCollapsed.toString())
  })
})
