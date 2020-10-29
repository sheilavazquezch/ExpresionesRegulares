/* Creacion de la funcion validar */
function validar() {
    /* Creacion de variables con los datos recibidos para la comparacion de expresion regular */
    var horario = document.getElementById("valHorario").value;
    var identificador = document.getElementById("valIdentificador").value;
    var resultado = false;
    var resultado2 = false;

    /* Expresion regular para aceptar el formato, primero se da la opcion de poner 00hrs hasta 23hrs,
     despues de 00 a 59 en minutos y segundos igualmente, el formato seria 00:00:00 hasta 23:59:59 */
    if (!(/^([0-1]?[0-9]|[2][0-3]):[0-5][0-9]:[0-5][0-9]$/.test(horario))) {
        /* Alerta para mostrar que los datos no son validos */
        alert("HH:MM:SS invalidos");
        resultado = false;
    } else {
        /* Alerta para mostrar que los datos son correctos */
        alert("HH:MM:SS correctos");
        resultado = true;
    }
    /* Expresion regular para la creacion de identificadores, primero indicamos que unicamente puede
     iniciar con _ , $ , letras mayusculas y minusculas, despues se pueden poner lo mismo ahora incluyendo
     numeros sin embargo un identificador puede ser una letra si asi lo desea el usuario entonces ponemos *
     para dar la opcion de que se ponga 0 o mas veces en caso de que solo desen poner una letra o signo
     de los validos al inicio */
    if (!(/^([_a-zA-Z-$][_a-zA-Z0-9-$]*)$/.test(identificador))) {
        /* Alerta para mostrar que los datos no son validos */
        alert("Identificador invalido");
        resultado2 = false;
    } else {
        /* Alerta para mostrar que los datos son correctos */
        alert("Identificador correcto");
        resultado2 = true;
    }
     /* Comprobar por medio del if que ambos resultados sean true */
    if (resultado && resultado2) {
        /* Creacion de alertas para mostrar datos personales*/
        alert("Alumna: Sheila Elizabeth Vázquez Chimay " +
            "\n Carrera: Ingenieria en Sistemas Computacionales " +
            "\n Grupo: 7U \n Numero de control: 17390367");
        /* En caso de querer usar esta segunda opcion poner en comentario la alerta*/
        /* document.write("Alumna: Sheila Elizabeth Vázquez Chimay" + "<br>" +
        "Carrera: Ingenieria en Sistemas Computacionales" + "<br>" +
        "Grupo: 7U" + "<br>" + "Numero de control: 17390367"); */
        return true;
    } else {
        return false;
    }
}

