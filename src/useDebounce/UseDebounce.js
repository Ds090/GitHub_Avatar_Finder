// The useDebounce hook takes a callback function (cb) and an optional delay time (default is 200 milliseconds).
function useDebounce(cb, delay = 200) {
    let timerId; // Initialize a variable to hold the timer ID.

    // Returns a function that will be invoked every time the debounced function is called.
    return (...args) => {
        clearTimeout(timerId); // Clear the previous timer.

        // Set a new timer using setTimeout.
        timerId = setTimeout(() => {
            cb(...args); // Execute the provided callback function with the arguments after the specified delay.
        }, delay);
    };
}

export default useDebounce;
