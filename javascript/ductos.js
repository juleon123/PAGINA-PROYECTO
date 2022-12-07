function calcular(){

    // valores
    var desarrollo = document.forms["nombre_de_formaulario"]["desarrollo"].value;
    var calibre = document.forms["nombre_de_formaulario"]["calibre"].value;
    var metros = document.forms["nombre_de_formaulario"]["metros"].value;
    var material = document.forms["nombre_de_formaulario"]["material"].value;

    //asignacion de calibre segun desarrollo
    var c26, c24, c22,c20,c18;

    switch(desarrollo) {
        case "30":
             c26= 20000;
             c24= 28000;
             c22= 36000;
             c20= 44000;
             c18= 52000;
            break;

        case "40":
             c26= 30000;
             c24= 38000;
             c22= 46000;
             c20= 54000;
             c18= 62000;
            break;

        case "50":
             c26= 40000;
             c24= 48000;
             c22= 56000;
             c20= 64000;
             c18= 72000;
            break;

        case "60":
             c26= 50000;
             c24= 58000;
             c22= 66000;
             c20= 74000;
             c18= 82000;
            break;

        case "70":
             c26= 60000;
             c24= 68000;
             c22= 76000;
             c20= 84000;
             c18= 92000;
            break;

        case "80":
             c26= 70000;
             c24= 78000;
             c22= 86000;
             c20= 94000;
             c18= 102000;
            break;

        case "90":
             c26= 80000;
             c24= 88000;
             c22= 96000;
             c20= 104000;
             c18= 112000;
            break;

        case "100":
             c26= 100000;
             c24= 108000;
             c22= 116000;
             c20= 124000;
             c18= 132000;
            break;

            default:
                text = "error en el desarrollo";
    }

    // metros * calibre
    var myc;
    switch(calibre){
        case "26":
            myc = c26*metros;
            break;

        case "24":
            myc = c24*metros;
            break;

        case "22":
            myc = c22*metros;
            break;

        case "20":
            myc = c20*metros;
            break;

        case "18":
            myc = c18*metros;
            break;

    }

    //material
    var total = myc*material;

    document.getElementById("resultado").innerHTML = total;
}
