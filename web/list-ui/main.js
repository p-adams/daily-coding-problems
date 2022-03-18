import "./style.css";

/** TODO:
 * Create a function that, given a DOM Element on the page, will visit the element itself and all of its descendents (not just its immediate children). For each element visited, the function should pass that element to a provided callback function.

    The arguments to the function should be:

    a DOM element
    a callback function (that takes a DOM element as its argument)
 * 
 */
document.querySelector("#app").innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
