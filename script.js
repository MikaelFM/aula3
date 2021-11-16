//V.2
aulaarray = {}
brilho = 1;
link = '#';
materia2 = '';
var now = new Date();
var dia =  now.getDay()
var hora1 = now.getHours();
var minuto = now.getMinutes()
var day = ['DOMINGO', 'SEGUNDA-FEIRA', 'TERÇA-FEIRA', 'QUARTA-FEIRA', 'QUINTA-FEIRA', 'SEXTA-FEIRA', 'SÁBADO']
var d = day[dia]
console.log(d)
var el = document.getElementsByTagName('body')[0]


if (Object.keys(localStorage).length < 2){
    var n = 0;
    localStorage.setItem('n', n);
} else {
    var n = parseInt(localStorage.n);
}
if (parseInt(localStorage.n) % 2 == 0 ){
    n += 1
    localStorage.setItem('n', n);
    location.reload
} else {
    n += 1
    localStorage.setItem('n', n);
}
function white (){
    var el = document.getElementsByTagName('body')[0]
    if ((brilho % 2 == 1)){
        document.getElementById("img").src="IFV.png";
        el.classList.remove('black');
        el.classList.add('white');
        cache = 'white';
    } else {
        document.getElementById("img").src="IF.jpg";
        el.classList.remove('white');
        el.classList.add('black');
        cache = 'black';
    }
    brilho += 1
    console.log(brilho)
    localStorage.setItem('cor>', cache);
}
function white2 (){
    var el = document.getElementsByTagName('body')[0]
    if (localStorage.cor == 'white' || localStorage.cor == undefined){
        document.getElementById("img").src="IFV.png";
        el.classList.remove('black');
        el.classList.add('white');
        cache = 'white';
    } else {
        document.getElementById("img").src="IF.jpg";
        el.classList.remove('white');
        el.classList.add('black');
        cache = 'black';
    }
    brilho += 1
    localStorage.setItem('cor', cache);
}
function isKeyExists(obj,key){
    return key in obj;
}

const aulas = function(agora, array){
    tamanho = Object.keys(aulaarray).length;
    if (isKeyExists(aulaarray, 'aula1')){
        horainicio1 = array['aula1']['horainicio']
    }
    if (isKeyExists(aulaarray, 'aula2')){
        horainicio2 = array['aula2']['horainicio']
    }
    for (let key in array) {
        formataHora(array[key])
    }
    if (tamanho == 0){
        if (entre(agora, sethora('13:35').toString() ,sethora('18:00').toString())){
            presencial()
        } else if (agora > sethora('18:00').toString()){
            semaulamais()
        } else if (agora < sethora('13:30').toString()){
            semaulaagora1('Aula Presencial', '13:30')
        }
    }
    if (tamanho == 1){
        aula1 = array['aula1']
        if (entre(agora, aula1['horainicio'], aula1['horafim'])){
            redirecionar(aula1['link'], aula1['nome'])
        }  else if (agora.toString() > aula1['horafim']){
            console.log(agora.toString(), aula1['horafim'])
            semaulamais()
        }  else if (agora.toString() < aula1['horainicio']){
            semaulaagora1(aula1['nome'], horainicio1)
        }
    }
    else if (tamanho == 2){
        aula1 = array['aula1']
        aula2 = array['aula2']
        if(entre(agora, aula1['horainicio'], aula1['horafim'])){
            redirecionar(aula1['link'], aula1['nome'])
        } else if(entre(agora, aula2['horainicio'], aula2['horafim'])){
            redirecionar(aula2['link'], aula2['nome'])
        } else if (entre(agora, aula1['horafim'], aula2['horainicio'])) {
            semaulaagora1(aula2['nome'], horainicio2)
        } else if (agora.toString() > aula2['horafim']){
            semaulamais()
        }  else if (agora.toString() < aula1['horainicio']){
            semaulaagora1(aula1['nome'], horainicio1, aula2['nome'], horainicio2)
        }
    }
}     
function sleep(milliseconds){
   var start = new Date().getTime();
   var end=0;
   while( (end-start) < milliseconds){
       end = new Date().getTime();
   }
}
var c = 10
const gato = function(){if (c <= 100){
   document.getElementsByClassName('value')[0].innerHTML = c + '%';				
   setTimeout('gato()', 250);	
   c += 10;
} else if (link != ''&& link != undefined){
   window.location.href = link;
}
}

const getDia = function(){
   gato();
   white2();
    const ingles = 'https://meet.google.com/xdy-vzqw-mvm';
    const sociologia = 'https://meet.google.com/nvd-nfsu-den';
    const historia = 'https://meet.google.com/xks-fhea-rvo';
    const matematica = 'https://meet.google.com/xbn-tyzt-dtr';
    const dw = 'https://meet.google.com/gdt-psmk-aps';
    const quimica = 'http://meet.google.com/fwb-yhjq-jbh';
    const ef = 'https://meet.google.com/bbu-cxrw-obg';

   if (d == 'DOMINGO'){
       semaulahoje()
       } 
       else if(d == 'SEGUNDA-FEIRA'){
           aulaarray = {'aula1': {'link': ef, 'nome': 'ED. FÍSICA', 'horainicio': '13:30', 'horafim': '15:10'}}
           aulas(now.toString(), aulaarray)
       }
       else if(d == 'TERÇA-FEIRA'){
           aulaarray = {'aula1': {'link': ef, 'nome': 'ED. FÍSICA', 'horainicio': '13:30', 'horafim': '15:10'}}
           aulas(now.toString(), aulaarray)
       }
       else if(d == 'QUARTA-FEIRA'){
            aulaarray = {}
           aulas(now.toString(), aulaarray)
       }
       else if(d == 'QUINTA-FEIRA'){
        aulaarray = {}
        aulas(now.toString(), aulaarray)
        }
       else if(d == 'SEXTA-FEIRA'){
        aulaarray = {}
        aulas(now.toString(), aulaarray)
       }
       else if(d == 'SÁBADO'){
            semaulahoje()
       }
}
         
const sethora = function(hours){
    x = new Date()
    hours = hours.toString()
    result = hours.split(":");
    x.setHours(result[0], result[1], 0, 0)
    return x
}

const faz = function(txt1, txt2){
    document.getElementsByClassName('skill')[0].style.display = 'none';
    document.getElementById('p').style.color = "rgb(0, 255, 13)";
    document.getElementById('p').innerHTML = '<p2></p2>';
    document.getElementsByTagName('p2')[0].innerHTML = txt1
   if (txt2 != 'none'){
        document.getElementById('p2').innerHTML =  txt2;
   }
}

const redirecionar = function(materia, materia2){
   document.getElementsByTagName('p2')[0].innerHTML = materia2;
   link = materia;
   hora();
}

const entre = function(date, h1, h2){
   date1 = h1.toString()
   date2 = h2.toString()
   if (date1 <= date.toString() && date.toString() <= date2){
       return true
   } else {
       return false
   }
}

const formataHora = function(item){
   var x = sethora(item['horainicio']);
   x.setMinutes(x.getMinutes() - 10)
   item['horainicio'] = x.toString()
   var y = sethora(item['horafim']);
   y.setMinutes(y.getMinutes() + 10)
   item['horafim'] = y.toString()
 }


const hora = function(){
    document.getElementById('p2').innerHTML = d + ' - ' + ("0000" + hora1).slice(-2) + 'h' + ("0000" + minuto).slice(-2);
}

const semaulaagora1 = function(materia, horario1, materia2, horario2){
    resultado1 = horario1.split(":");
    h = resultado1[0];
    m = resultado1[1];
    if(horario2 != undefined){
        resultado2 = horario2.split(":");
        h1 = resultado2[0];
        m1 = resultado2[1];
    }
    x.setHours(result[0], result[1], 0, 0)
    if (materia2 != undefined){
    faz("Ops... Não estamos tendo uma aula síncrona no momento<br><br>", '<p class="cor">PRÓXIMAS AULAS:</p><p>' + materia  + ' - ' +  h + 'h' + m + '<br>' + materia2  + ' - ' +  h1 + 'h' + m1 + '</p>')
    } else {
        faz("Ops... Não estamos tendo uma aula síncrona no momento <br><br>", '<p class="cor">PRÓXIMAS AULAS:</p><p>' + materia  + ' - ' +  h + 'h' + m + '</p>')
    }
}

const semaulahoje = function(){
   hora();
   faz("Ops... Não temos aula síncrona hoje. Tenha um bom descanso! <br><br>", 'none')
}
const semaulamais = function(){
   hora();
   faz("Ops... Não temos mais aula síncrona hoje. Aproveite! <br><br>", 'none')
}
const presencial = function(){
    hora();
    faz("Estamos em aula presencial no momento. Boa Aula! <br><br>", 'none')
 }
