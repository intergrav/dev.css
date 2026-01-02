/* responsive-sidebar for dev.css v4, a lightweight CSS framework - https://github.com/intergrav/dev.css */
/* about: auto open/close `aside details` at 82rem breakpoint. prevents sidebar from looking awkward on wide screens, improves usability on small screens */

const mediaQuery = matchMedia("(min-width: 82rem)");
const toggleDetails = (matches) =>
	document
		.querySelectorAll("aside details")
		.forEach((details) => details.toggleAttribute("open", matches));
toggleDetails(mediaQuery.matches);
mediaQuery.addEventListener("change", (event) => toggleDetails(event.matches));
