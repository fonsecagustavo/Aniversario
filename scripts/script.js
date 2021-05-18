
let div = document.getElementById("dias-container");


function calcular() {
    let datas = alterarParaString();
    let [,,ano] = aniversario();
    div.innerHTML = ' ';
    datas.forEach((data)=>{
        ano++;
        console.log(data, ano);
        div.innerHTML += `<span>${ano}</span><span>${data}</span>`;
       
        
    })
}

function alterarParaString(){
    let diasDaSemana = calcularDiasDaSemana ();
    let stringSemana = [];

    diasDaSemana.forEach((dia)=>{
        switch(dia) {
            case 0:
            stringSemana.push('Domingo');
            break;
            case 1:
            stringSemana.push('Segunda');
            break;
            case 2:
            stringSemana.push('Terça');
            break;
            case 3:
            stringSemana.push('Quarta');
            break;
            case 4:
            stringSemana.push('Quinta');
            break;
            case 5:
            stringSemana.push('Sexta');
            break;
            case 6:
            stringSemana.push('Sabado');
            break;
            default:
            console.log('Erro');
    
        }
    })


    return stringSemana;
}


function calcularDiasDaSemana () {
    let data = new Date();
    let [dia, mes, ano] = aniversario();
    let [diaAtual, mesAtual, anoAtual] = dataHoje();
    let diaDaSemana = [];

    for(let i = ano + 1; i <= anoAtual; i++){
        
        if(i==anoAtual){
            if(mesAtual < mes){
                
            }else if(mesAtual == mes){
                
                if(diaAtual < dia){

                }else if(diaAtual == dia){
                    //parabens
                    data.setFullYear(i,mes,dia);
                    diaDaSemana.push(data.getDay());
                }else {
                    data.setFullYear(i,mes,dia);
                    diaDaSemana.push(data.getDay());
                }
            }else {
                data.setFullYear(i,mes,dia);
                diaDaSemana.push(data.getDay());
            }
        }else{
            data.setFullYear(i,mes,dia);
            diaDaSemana.push(data.getDay());
        }
    }

    return diaDaSemana;
    
}

function dataHoje(){
    let dataAtual = new Date();
    let anoAtual = parseInt(dataAtual.getFullYear());
    let mesAtual = parseInt(dataAtual.getMonth()) + 1;
    let diaAtual = parseInt(dataAtual.getDate());

    return [diaAtual,mesAtual,anoAtual];
} 

function aniversario() {
    let aniversario = document.getElementById("data").value;
    let [ano,mes,dia] = aniversario.split("-");

    ano = parseInt(ano)
    mes = parseInt(mes)
    dia = parseInt(dia)

    return [dia,mes,ano];
}