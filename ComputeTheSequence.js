function compute(num) {
    let result = [];
    let tick=1;
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
            tick++;
        }
        else if (i == 2) {
            result.push(1);
            tick++;
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
            tick++;
        }
    }
    return {result, tick};
}
console.log(compute(200));

//This function generate Fibonacci number.
//Time complexity is 0(n) because the running time is proportional with the value of the number.