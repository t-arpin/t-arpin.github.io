const trailer = document.getElementById("trailer");
const history = [];
var hIndex = 0;

window.onmousemove = e => {
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
  
  const keyFrames = {
    transform: `translate(${x - 50}px, ${y - 100}px)`
  }
  
  trailer.animate(keyFrames,{
    duration: 800,
    fill: "forwards"
  });
}


document.getElementById("body").addEventListener("mousedown", function(event) {
    event.preventDefault(); // Prevent text area deselection on mousedown
});

function Newline(){
  var active = document.getElementById("active");
  active.removeAttribute('id');
  active.setAttribute("class", "flex pointer-events-none")
  var clone = active.cloneNode(true);
  history.push(clone.children[1].value);
  hIndex = history.length;
  clone.children[1].value = "";
  clone.setAttribute("id", "active");
  document.getElementById("body").appendChild(clone);
  clone.children[1].select();
  createNewEvent(clone.children[1]);
}

function createNewEvent(obj){
  obj.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      outputLine(checkCommand(document.getElementById("active").children[1].value));
      Newline();
    }
  });
}

window.onload = function() {
  createNewEvent(document.getElementById("input"));
};

document.onkeydown = (e) => {
  e = e || window.event;
  if (e.key === "ArrowUp") {
    if (hIndex != 0){
      hIndex -= 1
      document.getElementById("active").children[1].value = history[hIndex]
    }
  }
  if (e.key === "ArrowDown") {
    if (hIndex != history.length - 1){
      hIndex += 1
      document.getElementById("active").children[1].value = history[hIndex]
    }
  }
};

function checkCommand(command) {
  switch(command) {
    case "help":
      return "";
    case "bittest":
      return "";
    default:
      return "'" + command + "' is not recognized as an internal or external command, operable program or batch file.";
  }
}

function outputLine(input) {
  clone = document.getElementById("outLine").cloneNode(true);
  document.getElementById("body").appendChild(clone);
  clone.innerHTML = input;
} 



//Auto resize text area
const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 0;
  this.style.height = (this.scrollHeight) + "px";
}