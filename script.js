document.addEventListener('DOMContentLoaded', function() {
    
    //seta o dia atual
    var dia = document.getElementById('labelHour');
    dia.innerHTML = getDiaAtual();

    //seta o dia da semana
    var weekDay = document.getElementById('labelDay');
    weekDay.innerHTML= getWeekDay();

    // seta a hora atual
    setInterval(function() {
        var horaAtual = getHoraAtual();
        var icon = document.getElementById('icon');
        document.getElementById('hours').innerHTML = horaAtual;
        if (parseInt(horaAtual.substring(0, 2)) > 18 || parseInt(horaAtual.substring(0, 2)) < 5) { 
            icon.classList.remove("fa-cloud-sun");
            icon.classList.add("fa-cloud-moon");
        }
        else{
            icon.classList.remove("fa-cloud-moon");
            icon.classList.add("fa-cloud-sun");
        }
    }, 1000);
    
    

});


function getDiaAtual(){
    var dataAtual = new Date();
    var diaAtual = dataAtual.getDate();
    return diaAtual;
}

function getWeekDay(){
    const weekday = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

    const d = new Date();
    return weekday[d.getDay()];
}

function getHoraAtual() {
    var dataAtual = new Date();
    var hora = dataAtual.getHours();
    var minutos = dataAtual.getMinutes();
    var segundos = dataAtual.getSeconds();

    hora = hora < 10 ? "0" + hora : hora;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    return hora + ":" + minutos;
}

