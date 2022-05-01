
const soma:{ vlor1:number, vlor2 :number} = {     
    vlor1:150, 
    vlor2:250,
}


function sum(soma:any): number{
    return soma. vlor1 + soma. vlor2;
}

console.log(sum(soma));