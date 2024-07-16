/* addon for dev.css v3, a classless CSS framework - https://github.com/intergrav/dev.css */
/* about: shows a "scroll to top" button in the bottom right corner of the screen when scrolling */

const scrollToTopButton = document.createElement("button");
scrollToTopButton.textContent = "▲";
Object.assign(scrollToTopButton.style, {
	transition: "0.25s",
	opacity: "0",
	padding: "0",
	position: "fixed",
	bottom: "1rem",
	right: "1rem",
	width: "2.5rem",
	height: "2.5rem",
});
document.body.appendChild(scrollToTopButton);

window.addEventListener("scroll", () => {
	scrollToTopButton.style.opacity = window.scrollY > 0 ? "0.5" : "0";
});

scrollToTopButton.addEventListener("click", () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
});
