// Count Increase Effect
// Works: increases a number value with smooth transition counter.
// Requirements: a function in js file.
// Syntax: increase(<the class name of the target>, <the maximum number>, <jumps between two numbers while increasing>, <transition delay between two number>);
function increase(target_class, max_number, delay, counter_delay) {
    let increaseIndex = 0;
    let palateNumber = document.querySelector(target_class);
    if (palateNumber.textContent == max_number) {
        palateNumber.textContent = max_number;
    } else {
        function main() {
            palateNumber.textContent = increaseIndex;
            if (increaseIndex >= max_number) {
                increaseIndex = max_number;
            }
            if (increaseIndex < max_number) {
                increaseIndex += delay;
            } else {
                increaseIndex == 0;
            }
            setTimeout(main, counter_delay);
        }
        main();
    }
}
