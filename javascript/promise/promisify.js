function promisify(func) {
  return function (url, obj) {
    return new Promise((resolve, reject) => {
      func.call(this, ...arguments, (err, result) => {
        err ? reject(err) : resolve(result);
      });
    });
  };
}

function foo(url, options, callback) {
  apiCall(url, options)
    .then((data) => callback(null, data))
    .catch((err) => callback(err));
}

const promisifiedFoo = promisify(foo);
const data = await promisifiedFoo("example.com", { foo: 1 });
