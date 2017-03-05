

var greeting = function (greeting) {
  return function (name) {
    console.log(greeting + ',' + name);
  };
};

greeting('Hello')('Adam');
