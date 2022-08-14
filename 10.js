var ms = prompt("Tempo em milissegundos: ")

dias = ms / 86400000;
horas = (ms % 86400000)  / 3600000;
minutos = ((ms % 86400000) % 3600000) / 60000;
segundos =  (((ms % 86400000) % 3600000) % 60000) / 1000;

dias = parseInt(dias);
horas = parseInt(horas);
minutos = parseInt(minutos);
segundos = parseInt(segundos);

console.log(dias, "dias", horas, "horas", minutos, "minutos", segundos, "segundos")