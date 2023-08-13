let rlSync = require('readline-sync');

console.log(" 1 = chá \n 2 = café \n 3 = leite")

let bebida = parseInt(rlSync.question("Qual bebida voce deseja? \n"));

switch (bebida){
    case 1:
        console.log("Você escolheu chá");
        break;
    case 2:
        console.log("Você escolheu café");
        break;
    case 3:
        console.log("Você escolheu leite");
        break;
    default:
        console.log("bebida invalida");
}