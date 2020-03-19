var i = 0
function createCounter() {
    return function() {
        return ++i;
    };
}

const count = createCounter();

count(); // 1
count(); // 2
count(); // 3
count(); // 4

console.log(count()); // 5