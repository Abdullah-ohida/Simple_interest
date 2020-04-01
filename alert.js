// Assigning array of object to data

let data = [{
        principal: 2500,
        time: 1.8
    },

    {
        principal: 1000,
        time: 5
    },

    {
        principal: 3000,
        time: 1
    },

    {
        principal: 2000,
        time: 3
    }
]


// This is the function that execute the output of rate and interest.

function interestCalculator(dataArray) {

    // Assigning interestData to an empty array
    let interestData = [];
    // Loop through the array of object using forof loop
    for (obj of dataArray) {
        // Checking if some parameter is truth and false. So execution takes place if the condition is true
        // and create a new key called rate and assign a value to it.
        if (obj.principal >= 2500 && obj.time > 1 < 3) {
            obj.rate = 3;

        } else if (obj.principal >= 2500 && obj.time >= 3) {
            obj.rate = 4;

        } else if (obj.principal < 2500 || obj.time <= 1) {
            obj.rate = 2;

        } else {
            obj.rate = 1;
        }

        // Here is where the operation is taking place, so it create a new key called interest and assign the endpoint of the operation.
        obj.interest = (obj.principal * obj.rate * obj.time) / 100;
        //pushing obj to interestData and console logging interestData.
        interestData.push(obj);
        console.log(interestData);
    }
    return interestData;
}
interestCalculator(data);