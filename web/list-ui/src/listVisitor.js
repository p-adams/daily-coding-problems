/** TODO:
 * Create a function that, given a DOM Element on the page, will visit the element itself and all of its descendents (not just its immediate children). For each element visited, the function should pass that element to a provided callback function.

    The arguments to the function should be:

    a DOM element
    a callback function (that takes a DOM element as its argument)
 * 
 */

function visit(node, fn) {
  fn(node);
  if (node.firstChild) {
    visit(node.firstChild, fn);
  }
  if (node.nextSibling) {
    visit(node.nextSibling, fn);
  }
}

function _main() {
  const app = document.querySelector("#app");
  if (app) {
    visit(app, (node) => {
      console.log("visited: ", node);
    });
  }
}
