function main() {
  document.querySelector(".icon-button").onclick = Utilities.handleDarkClick;
}

class Utilities {
  static handleDarkClick() {
    document.querySelector(".toggle-box").classList.toggle("dark");
  }
}

window.onload = main;
