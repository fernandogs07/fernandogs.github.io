function calculo(){

    var nome = document.getElementById("nome").value
    var salario = parseFloat(document.getElementById("valor_salario").value)
    var horasmes = Number(document.getElementById("valor_horas").value)
    var horasNormais = Number(document.getElementById("valor_horas_normais").value)
    var horasEspecial = Number(document.getElementById("valor_horas_domingo").value)
    var valoradicional = Number(document.getElementById("adicional_valor").value)
    var valorhora,horaextra,horaextradomingo,valorextranormal,valorextraespecial,final,el = document.getElementById("table"),total,dsr_view = document.getElementById("dsr")
   
    //Cálculo de horas extras
    valorhora = salario / horasmes
    horaextra = (valorhora / 100) * valoradicional
    horaextradomingo = (valorhora / 100) * 100
    valorextranormal = (valorhora + horaextra) * horasNormais
    valorextraespecial = (valorhora + horaextradomingo) * horasEspecial
    //Cálculo DSR
    var uteis = document.getElementById("valor_dias_uteis").value
    var nouteis = document.getElementById("valor_dias_especiais").value
    var dsr
    dsr = (valorextranormal + valorextraespecial) / uteis
    dsr = dsr * nouteis
    //Fim cálculo DSR

    total = valorextranormal + valorextraespecial + dsr + salario
    final = `O funcionário ${nome} que recebe o salário ${salario.toLocaleString('pt-BR' , {style: 'currency',currency: 'BRL'})} receberá ${valorextranormal.toLocaleString('pt-BR' , {style: 'currency',currency: 'BRL'})} de extras esse mês`

    //document.getElementById("horas_extra").innerHTML=final
    el.style.display='inline-table';
    dsr_view.style.display='none';
    document.getElementById("salario_view").innerHTML=salario.toLocaleString('pt-BR' , {style: 'currency',currency: 'BRL'})
    //document.getElementById("valorextras").innerHTML = valorextranormal.toLocaleString('pt-BR' , {style: 'currency',currency: 'BRL'})
    document.getElementById("valorextras").innerHTML= valorextranormal.toLocaleString('pt-BR' , {style: 'currency',currency: 'BRL'})
    document.getElementById( "valorextrasespecial").innerHTML= valorextraespecial.toLocaleString('pt-BR' , {style: 'currency',currency: 'BRL'})
    document.getElementById("valor_dsr").innerHTML=dsr.toLocaleString('pt-BR' , {style: 'currency',currency: 'BRL'})
    document.getElementById("total_view").innerHTML=total.toLocaleString('pt-BR' , {style: 'currency',currency: 'BRL'})
       
}
function limpar(){
    location = location
}

   

  
    function login(){
    
        var login = document.getElementById("user").value
        var senha = document.getElementById("senha").value
        var site = "index.html"
        var usuarios = ["fernando","eliene","admin"]
        var senhas = ["Admin2010e","Ami2019@@","admin"]
        
        
    
        if (usuarios[0] == login && senhas[0] == senha){
            window.location.href = site
        }else if (usuarios[1] == login && senhas[1] == senha){
            window.location.href= site
        }else if(usuarios[2] == login && senhas[2] == senha){
            window.location.href= site
        } else {
            document.getElementById("erro").innerHTML="X - Usuário ou senha incorreto"
            document.getElementById("user").value=""
            document.getElementById("senha").value=""
            //location = location
        }
        //usuarios.push("administrator")
        //senhas.push("240191")
    }

    function aba1(){

        var a = document.getElementById('abcd')
        var b = document.getElementById('Abas')
        //var c = document.getElementById('volta')
        a.style.display='block'
        b.style.display='none'
        

    }
    function volta(){


        location = location

        
    }





