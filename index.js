const sinon =  ['Lisa', 'Kaitlin', 'Jan'];

function writeCards(sinon) {
    const newSinon = [ ];
    for (let cards = 0; cards < sinon.length; cards++) {
        newSinon.push(`Thank you, ${sinon[cards]}, for the wonderful surprise gift!`);
    } 
    return newSinon;
}

let callCount = 10;
function countDown(callCount) {
    while (callCount >= 0) 

   console.log(callCount--);
}

