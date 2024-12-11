const currentDate = new Date().getFullYear();

const node = document.createElement("p");
const textnode = document.createTextNode(`All rights reserved. © ${currentDate}`);
node.appendChild(textnode);
document.querySelector(".bottom-container").appendChild(node);
