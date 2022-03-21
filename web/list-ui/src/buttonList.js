// use event delegation to handle click event
function buttonListApp() {
  const buttonList = document.querySelector(".button-list-wrapper");

  buttonList.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") {
      return;
    }
    clickAlert(e.target);
  });
}

function clickAlert(t) {
  alert(`You clicked: ${t.outerText}`);
}

export default buttonListApp;
