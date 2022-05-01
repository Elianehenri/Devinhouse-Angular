class Conta{
    protected numero: number;
    protected saldo: number;
    protected estaAtiva: boolean;
    protected dono: string;
    
    constructor( numero:number, saldo:number, estaAtiva: boolean, dono:string){
        this.numero = numero;
        this.saldo = saldo;
        this.estaAtiva = estaAtiva;
        this.dono = dono;
    }

}


class ContaEmpresa extends Conta{
    private limiteDeDposito: number = 1000;

    constructor( numero:number, saldo:number, estaAtiva: boolean, dono:string){
        super(numero,saldo,estaAtiva,dono);
    }

    deposito(valor:number){
        if(valor <= this.limiteDeDposito){
            this.saldo = this.saldo + valor;
        }

    }

    imprimeValorConta(){
        console.log(this.saldo);

    }

}

let classeConta = new ContaEmpresa(12345, 0, true, "Eliane");

classeConta.deposito(1000);
classeConta.deposito(1000);
classeConta.deposito(1000);
classeConta.deposito(500);


classeConta.imprimeValorConta();
