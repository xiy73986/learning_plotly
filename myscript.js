async function loadFeature(name) {
  // if (name === "scroll_zoom") {
  //   const { showFeature } = await import("./src/scroll_zoom.js");
  //   showFeature();
  // } else if () {

  // }
  switch (name) {
    case "scroll_zoom": {
      const { showFeature } = await import("./src/scroll_zoom.js");
      showFeature();
      break;
    }
    case "editable_mode": {
      const { showFeature } = await import("./src/editable_mode.js");
      showFeature();
      break;
    }
  }
}

document.getElementById("scroll_zoom_btn").onclick = () =>
  loadFeature("scroll_zoom");
document.getElementById("editable_mode_btn").onclick = () =>
  loadFeature("editable_mode");
