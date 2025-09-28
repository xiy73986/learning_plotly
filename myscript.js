async function loadFeature(name) {
  if (name === "scroll_zoom") {
    const { showFeature } = await import("./src/scroll_zoom.js");
    showFeature();
  }
}

document.getElementById("scroll_zoom_btn").onclick = () => loadFeature("scroll_zoom");