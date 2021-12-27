// Code your solutions in this file
// for (let age = 30; age < 40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// for (let age = 30; age < 40; age += 4){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts){
//     for (let i = 0; i < gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }
//     return gifts;
// }

// wrapGifts(gifts);

//------------------------ASSIGNMENT------------------------------
function writeCards(names, event){
    const messages = [];
    for (let i = 0; i < names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return messages;
}

const names = ["Wally", "Bruce", "Emily"];
writeCards(names, "birthday");

//----------------------------------------------------------------

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    let i = 0; //for a while loop, we need to move the initialization of the counter OUTSIDE the body of the loop
    while (i <  gifts.length){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++; //the iteration of the counter moves INSIDE the body of the loop
    }

    return gifts;
}

wrapGifts(gifts);


//for loop vs while loop
let countup = 0;
while (countup < 10){
    console.log(countup++);
}

//this^ is the same as this:
for (let countup = 0; countup < 10; countup++){
    console.log(countup);
}

//--------------ASSIGNMENT------------------
function countDown(number){
    while (number >= 0){
        console.log(number);
        number--;
    }
}

countDown(24);

//-----------------------------------------