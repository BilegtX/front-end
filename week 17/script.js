//#1
function greeting(name) {
    console.log(`Hello ${name}, welcome to Nest!`);
}

function introduction(firstName, lastName, callback) {
    const fullName = `${firstName} ${lastName}`;
    callback(firstName);
}

introduction("Bilegt", "Khurts", greeting)


//#2
const weather = true;
const date = new Promise(function (resolve, reject) {
    if(weather) {
        const dateDetails = {
            name: "TOM N TOMS downtown",
            location: "KhUD, 11th street, Ulaanbaatar",
            table: 10,
        };
        resolve(dateDetails);
    }else{
        reject(new Error("Bad weather, so no Date"));
    }
});

const orderUBCAB = function(dateDetails) {
    return new Promise(function (resolve, reject) {
        const message = `Get me an UBCAB ASAP to ${dateDetails.location}, we are going on date`;
        resolve(message);
    })
}

const myDate = function() {
    date
        .then(orderUBCAB)
        .then(function(done) {
            console.log("We are going on a date")
            console.log(done)
        })
        .catch(function(error) {
            console.log(error.message)
        })
}

myDate();

//#3
async function myRide() {
    return "Ford Raptor F150";
}

function yourRide() {
    return Promise.resolve("Ford Raptor F150");
}

function foo() {
    return Promise.reject(25);
}

//is equal to
async function foo() {
    throw 25;
}

async function mydate() {
    try {
        let dateDetails = await date();
        let message = await orderUBCAB(dateDetails);
        console.log(message);
    } catch (error) {
        console.log(error.message);
    }
}

(async () => {
    await mydate();
})();