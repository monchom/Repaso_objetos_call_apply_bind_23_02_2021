// const Saludar = function(p1=null){
//     return `${this.name} ${p1}`;
// }

// const data = new Object({
//     name : "Miguel"
// });

// let mostrar = Saludar.bind(data,"Angel");
// console.log(mostrar());











//Crear una funcion que revisa x cantidad de numeros en viados en this y mostrar 
//el mayor de ellos,
//si los numeros ingresados en this, es mayor o igual a 5 
//realizar todas las operaciones matematicas basicas
// Suma, resta, multiplicacion, division


const Calculadora = new Object({
    sumar(){
        for(let value of this.data){
            this.res += value;
        }
        return `${this.menSuma} ${this.res}`;
    },
    restar(){
        for (let i = (this.data.length-1); i >= 0; i--) {
            if(this.res==0){
                this.res = this.data[i];
            }else{
                this.res -= this.data[i];
            }
        }
        return `${this.menResta} ${this.res}`;
    },
    multiplicacion(){
        for(let value of this.data){
            this.res *= value;
        }
        return `${this.menMultiplicacion} ${this.res}`;
    },
    dividir(){
        for(let value of this.data){
            this.res += value;
        }
        return `${this.menDivicion} ${(this.res)/this.data.length}`;
    }
    
});
const Mayor = function(){
    let orden = this.x.sort((a, b)=>{return a-b});
    let comparacion = parseInt(orden.slice((orden.length)-1, (orden.length)).join());
    const resultados = [];
    if(comparacion>=5){
        resultados.push(Calculadora.sumar.bind({data : orden, menSuma: this.menSuma, res : 0})());
        resultados.push(Calculadora.restar.bind({data : orden, menResta: this.menResta, res  : 0})());
        resultados.push(Calculadora.multiplicacion.bind({data : orden, menMultiplicacion: this.menMultiplicacion, res : 1})());
        resultados.push(Calculadora.dividir.bind({data : orden, menDivicion: this.menDivicion, res : 0})());
        this.x.unshift(this.menDatos);
        resultados.push(this.x);
        return resultados;
    }else{
        resultados.push(`${this.menMayor} ${comparacion}`);
        this.x.unshift(this.menDatos);
        resultados.push(this.x);
        return resultados;
    }
}
const data = new Object({
    x : [],
    menSuma : `La suma de los datos son:`,
    menResta : `La resta de los datos son:`,
    menMultiplicacion : `La Multiplicacion de los datos son:`,
    menDivicion : `El promedio de los datos es:`,
    menMayor : `El numero mayor es:`,
    menDatos : `Los datos suminostrados son`
});
parar:
do{
    if(data.x.length <5){
        data.x.push(parseInt(prompt("Ingrese un numero")));
        continue parar;
    }else{
        console.log(new Object({Resultado: Mayor.call(data)}).Resultado);
        break parar;
    }
}while(true)







// const saludar = function(p1, p2){
//     let cadena = `Hola ${this.name} como estas te saluda ${this.maquina} ${this.mensaje} \n`;
//     cadena += `Hola ${p1} como estas te saluda ${p2}`;
//     console.log(cadena); 
// }
// const data = new Object ({
//     name : "Miguel",
//     maquina : "Cortana",
//     mensaje : ":V"
// });

// saludar.call(data, "Adrian", "Siri");

// const arg = ["Adrian", "Siri"];
// saludar.apply(data, arg);

// const mostrar = saludar.bind(data);

// mostrar("Adrian", "Siri");
// mostrar("Diana", "Ok Google");
