let mes = parseInt(1);
if (mes <= 0) {
    console.log(mes + " no existe este mes");
    return;
}
switch (mes) {
    case 1:
        console.log("Enero: Es invierno y hace mucho frío");
        break;
    case 2:
        console.log("Febrero: Es invierno y hace mucho frío");
        break;
    case 3:
        console.log("Marzo: Es primavera y tengo alergia");
        break;
    case 4:
        console.log("Abril: Es primavera y tengo alergia");
        break;
    case 5:
        console.log("Mayo: Es primavera y tengo alergia");
        break;
    case 6:
        console.log("Junio: Es verano y hace mucho calor");
        break;
    case 7:
        console.log("Julio: Es verano y hace mucho calor");
        break;
    case 8:
        console.log("Agosto: Es verano y hace mucho calor");
        break;
    case 9:
        console.log("Septiembre: Es otoño y hace fresquito");
        break;
    case 10:
        console.log("Octubre: Es otoño y hace fresquito");
        break;
    case 11:
        console.log("Noviembre: Es otoño y hace fresquito");
        break;
    case 12:
        console.log("Diciembre: Es invierno y hace mucho frío");
        break;

    default:
        console.log(mes + " no existe este mes");
        break;
}