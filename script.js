let allButtons = Array.from(document.getElementsByClassName("button"));
const display = document.getElementById("output");
allButtons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        display.innerText = "";
        break;
      case "Del":
        display.innerText = display.innerText.slice(0, -1);
        break;
      case "=":
        display.innerText = eval(display.innerText);

        break;
      default:
            
            display.innerText += e.target.innerText;
        
    }
  });
});

