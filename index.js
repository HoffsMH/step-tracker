// anything that returns model accepts model obviously
// any public method of a module should accept model?

// how to run tests against something that calls window?


const stepTracker = (function() {
  // ok so there is going to be a single thing at the beginning that renders our entire deal
  function render(model) {
    const {
      mount
    } = model;

    container(mount).innerHTML = 'sometext'
  }

  function container(mount) {
    return document.querySelector(`#${mount}`)
  }

  return Object.freeze({
    render
  });
})()

const containerIO = (function() {

  // write
  // takes elements text or data structures?
  // 
  return {
    container
  }
})()

// turn data structure ino elements
// write elements to container
// two different layers


// want to test in node that
// given a data structure that I get certain elements
// so the puzzle is how and shoul I test turning the data structure  into elements


console.log(stepTracker);
