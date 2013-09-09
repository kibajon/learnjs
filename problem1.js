// Problem 1
// Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// The function below returns the sum of 3 or 5 multiples between two numbers

function calculateSum(min, max) {
    
    // TODO: should return sum of 3 or 5 multiples between min and max
    return 0;
}

// test
//calculateSum (0, 10) == 23
//calculateSum (-10, 10) == 0


//Done with For loop
function calculateSum(min, max) {
    
    // we will keep track of the total here
    var total = 0;
    
    // for every number between min and max
    // check if it is divisible by 3 or 5
    for (var i = min ; i < max; i++) {
        
        // if a number is divisible by 3 or 5, then add it to the total
        if (i % 3 === 0 || i % 5 === 0)
            total = total + i;
    }
    return total;
}

// test
calculateSum (0, 10);

//Done with While loop
function calculateSum(min, max) {
    var total = 0;
    var i = min;
    while(i<max){
        if(i % 3 === 0 || i % 5 === 0)
            total = total + i;
            i ++;
    }
        return total;
    }
    calculateSum(0,10);
