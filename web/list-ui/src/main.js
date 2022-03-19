import "../style.css";

function visit(node, fn) {
  fn(node);
  if (node.firstChild) {
    visit(node.firstChild, fn);
  }
  if (node.nextSibling) {
    visit(node.nextSibling, fn);
  }
}

function main() {
  const app = document.querySelector("#app");
  if (app) {
    visit(app, (node) => {
      console.log("visited: ", node);
    });
  }
}

main();
