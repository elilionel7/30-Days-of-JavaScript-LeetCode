// 2623. Memoize
// Medium
// Given a function fn, return a memoized version of that function.
// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
// You can assume there are 3 possible input functions: sum, fib, and factorial.
// sum accepts two integers a and b and returns a + b.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.

/**
 * @param {Function} fn
 */
function memoize(fn) {
    let cache = {};
    return function(...args) {
        const key = String(args);
        if (key in cache){
            return cache[key]
        }
        const val = fn(...args)
        cache[key] = val;
        return val;
    }
}

  let callCount = 0;
  const memoizedFn = memoize(function (a, b) {
 	 callCount += 1;
    return a + b;
  })
  console.log(memoizedFn(2, 3)) // 5
  console.log(memoizedFn(5, 3)) // 5
 console.log(callCount) // 1