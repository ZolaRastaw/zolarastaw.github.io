const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if(mySrc === "images/node-ninja-content.png") {
    myImage.setAttribute("src", "images/node-ninja-js.png");
  } else {
    myImage.setAttribute("src", "images/node-ninja-content.png");
  }
};

let myButton = document.querySelector("button");
let myHeader = document.querySelector("h1");

//Now the function

function setUserName() {
  const myName = prompt("please Enter your Name");
  if(!myName) {
    setUserName();
  } else{
    localStorage.setItem("name", myName);
    myHeader.textContent = `Node Ninja is cool, ${myName}`;
  }
  
}

if(!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeader.textContent = `Ninja is great, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};