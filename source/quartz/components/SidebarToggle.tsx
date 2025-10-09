import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/sidebarToggle.scss"

// @ts-ignore
import script from "./scripts/sidebarToggle.inline"

const SidebarToggle: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <button
      id="sidebar-toggle"
      class={displayClass}
      aria-label="Toggle sidebar"
      title="Toggle sidebar"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </button>
  )
}

SidebarToggle.css = style
SidebarToggle.afterDOMLoaded = script

export default (() => SidebarToggle) satisfies QuartzComponentConstructor
