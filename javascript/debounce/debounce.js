const getData = () => {
  console.log("data");
};

const doSomething = (fn, delay) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
};

const betterFunction = doSomething(getData, 300);
