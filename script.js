//V.2

brilho = 1;
link = '';
materia2 = '';

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
    localStorage.setItem('cor', cache);
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
       now = new Date;
       var x = now.getDay();
       var hora = now.getHours();
       /*var x = 5;
       var hora = 14;*/
       var minuto = now.getMinutes();
       const ingles = 'https://meet.google.com/xdy-vzqw-mvm';
       const sociologia = 'https://meet.google.com/vht-nnez-yvq';
       const historia = 'https://meet.google.com/xks-fhea-rvo';
       const matematica = 'https://meet.google.com/xbn-tyzt-dtr';
       const dw = 'https://meet.google.com/nvd-nfsu-den';
       const quimica = 'http://meet.google.com/fwb-yhjq-jbh';
       const domingo = 0;
       const segunda = 1;
       const terca = 2;
       const quarta = 3;
       const quinta = 4;
       const sexta = 5;
       const sabado = 6;

   if (x == domingo){
       d = 'DOMINGO';
       semaulahoje()
       } 
       else if(x == segunda){
           d = 'SEGUNDA-FEIRA';
           if (comparahora(hora, minuto, '<=', 14, 09)){
               semaulaagora2('Química', 14, 20);
           }
           else if (entre(hora, minuto, 14, 09, 16, 11)){
               redirecionar(quimica, 'QUÍMICA')
           } else if (comparahora(hora, minuto, '>=', 16, 11)){
               semaulamais()
           }
       }
       else if(x == terca){
           d = 'TERÇA-FEIRA';
            if (comparahora(hora, minuto, '<', 13, 50)){
               semaulaagora1('Inglês', 14, '00', 'Sociologia', 16, 20);
           }
           else if (entre(hora, minuto, 13, 50, 16, 11)){
               redirecionar(ingles, 'INGLÊS')
           } else if (entre(hora, minuto, 16, 11, 18, 01)){
               redirecionar(sociologia, 'SOCIOLOGIA')
           } else if (comparahora(hora, minuto, '>=', 18, 01)){
               semaulamais()
           }
       }
       else if(x == quarta){
           if (comparahora(hora, minuto, '<', 13, 20)){
               semaulaagora2('Des. Web', 15, 30);
           }
            else if (entre(hora, minuto, 15, 00, 17, 05)){
               redirecionar(dw, 'DES. WEB')
           } else if (comparahora(hora, minuto, '>', 17, 05)){
               semaulamais()
           }
       }
       else if(x == quinta){
           /*d = 'QUINTA-FEIRA'
           semaulahoje()*/
           if (comparahora(hora, minuto, '<', 15, 00)){
               semaulaagora2('Des. Web', 15, '10');
           }
           else if (entre(hora, minuto, 15, 00, 18, 80)){
               redirecionar(dw, 'DES. WEB')
           }
            else if (comparahora(hora, minuto, '>', 18, 20)){
               semaulamais()
           }
           }
       else if(x == sexta){
             if (comparahora(hora, minuto, '<', 13, 20)){
               semaulaagora1('Sociologia', 13, 30, 'Matemática', 16, '00');
           }
           else if (entre(hora, minuto, 13, 19, 15, 16)){
               redirecionar(sociologia, 'SOCIOLOGIA')
           }
           else if (entre(hora, minuto, 15, 16, 15, 51)){
               semaulaagora2('Matemática', 16, '00')
           }
            else if (entre(hora, minuto, 15, 50, 18, 01)){
               redirecionar(matematica, 'MATEMÁTICA')
           } else if (comparahora(hora, minuto, '>', 18, 00)){
               semaulamais()
           }
       }
       else if(x == sabado){
            d = 'SÁBADO'
            semaulahoje()
       }

       
}
const semaulaagora2 = function(materia, h, m){
   document.getElementsByClassName('skill')[0].style.display = 'none';
   document.getElementById('p').style.color = "rgb(0, 255, 13)";
   document.getElementById('p').innerHTML = '<p2></p2>';
   document.getElementsByTagName('p2')[0].innerHTML = "Ops... Não estamos tendo uma aula síncrona no momento <br><br>";
   document.getElementById('p2').innerHTML =   '<p class="cor">PRÓXIMAS AULAS:</p><p>' + materia  + ' - ' +  h + 'h' + m + '</p>';
}
const semaulaagora1 = function(materia, h, m, materia2, h1, m1){
   document.getElementsByClassName('skill')[0].style.display = 'none';
   document.getElementById('p').style.color = "rgb(0, 255, 13)";
   document.getElementById('p').innerHTML = '<p2></p2>';
   document.getElementsByTagName('p2')[0].innerHTML = "Ops... Não estamos tendo uma aula síncrona no momento<br><br>";
   document.getElementById('p2').innerHTML =  '<p class="cor">PRÓXIMAS AULAS:</p><p>' + materia  + ' - ' +  h + 'h' + m + '<br>' + materia2  + ' - ' +  h1 + 'h' + m1 + '</p>';
}
const semaulahoje = function(){
   hora();
   document.getElementsByClassName('skill')[0].style.display = 'none';
   document.getElementById('p').style.color = "rgb(0, 255, 13)";
   document.getElementById('p').innerHTML = '<p2></p2>'
   document.getElementsByTagName('p2')[0].innerHTML = "Ops... Não temos aula síncrona hoje. Tenha um bom descanso! <br><br>";
}
const semaulamais = function(){
   hora();
   document.getElementsByClassName('skill')[0].style.display = 'none';
   document.getElementById('p').style.color = "rgb(0, 255, 13)";
   document.getElementById('p').innerHTML = '<p2></p2>'
   document.getElementsByTagName('p2')[0].innerHTML = "Ops... Não temos mais aula síncrona hoje. Aproveite! <br><br>";
}
const redirecionar = function(materia, materia2){
   document.getElementsByTagName('p2')[0].innerHTML = materia2;
   link = materia;
   hora();
}
const comparahora = function(h, m, sinal, h1, m1){
   if (sinal == ">"){
       if (h > h1 || (h == h1 && m > m1)){
           return true;
       } else {
           return false;
       }
   }
   else if (sinal == "<"){
       if (h < h1 || (h == h1 && m < m1)){
           return true;
       } else {
           return false;
       }
   }
   else if (sinal == "=="){
       if (h == h1 && m == m1){
           return true
       } else {
           return false
       }
   }
   else if (sinal == ">="){
       if (comparahora(h, m, '>', h1, m1) || comparahora(h, m, '==', h1, m1)){
           return true;
       }
       else {
           return false;
       }
   }
   else if (sinal == "<="){
       if (comparahora(h, m, '<', h1, m1) || comparahora(h, m, '==', h1, m1)){
           return true;
       }
       else {
           return false;
       }
   }
   
}
const entre = function(h, m, h1, m1, h2, m2){
   if (comparahora(h, m, '>', h1, m1) && comparahora(h, m, '<', h2, m2)){
       return true;
   }
   else {
       return false;
   }
}
const hora = function(){
    var dia =  now.getDay()
   var hora = now.getHours();
   var minuto = now.getMinutes()
   var day = ['DOMINGO', 'SEGUNDA-FEIRA', 'TERÇA-FEIRA', 'QUARTA-FEIRA', 'QUINTA-FEIRA', 'SEXTA-FEIRA', 'SÁBADO']
   var d = day[dia]

   if (minuto < 10){
       if (hora < 10){
           document.getElementById('p2').innerHTML = d + ' - 0' + hora + 'h0' + minuto;
       } else {
           document.getElementById('p2').innerHTML = d + ' - ' + hora + 'h0' + minuto;
       }
   } else {
       if (hora < 10){
           document.getElementById('p2').innerHTML = d + ' - 0' + hora + 'h' + minuto;
       } else {
           document.getElementById('p2').innerHTML = d + ' - ' + hora + 'h' + minuto;
       }
   }
}    
