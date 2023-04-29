/*function myFunction(){

    var x,y,suma,text;  
    x = document.getElementById("num1").value;  
    y = document.getElementById("num2").value;  
    if (isNaN(x) || isNaN(y)) {  
      text = "Es necesarios introducir dos números válidos";  
    } else {  
      //si no ponemos parseFloat concatenaría x con y  
      suma=parseFloat(x)+parseFloat(y);  
      text= suma;  
    }  
    document.getElementById("sumando").innerHTML = text;

}*/

/*segundo funcion*/
/*De esta manera se realizan las funiones en JS */

confirm("Quiere aceptar todas nuestras condiciones?");

function DEVOLVERNOMBRE(){

    var DevolverRESULTADO, texto , DevolerApellido, textoParaelusaurio2,textoParaUsuario3, Correo;

    DevolverRESULTADO = document.getElementById("Ingreso-Nombre").value;
    DevolerApellido = document.getElementById("Ingreso-Apellido").value;
    Correo = document.getElementById("CORREO_ELECTRONICO").value;

    texto="HOLA ";
    textoParaelusaurio2 = ", A continuacion te pediremos que sigas con los siguientes pasos para regitrarte";
    textoParaUsuario3 = "Sabemos que tu correo electronico es: ";


    document.getElementById("MUESTRA").innerHTML = texto + DevolverRESULTADO + " "+ DevolerApellido + textoParaelusaurio2+ "."
    + textoParaUsuario3 + Correo;
}


function Ingresar_Dinero(){
    var Dinero , textoDinero, Opcional; 

    Dinero = document.getElementById("Ingreso_efectivo").value;
    Opcional = "Recuerde que todos sus datos quedan registrados";

    if((Dinero <= 100)){
        textoDinero = "Es muy poco dinero" + ", Vuelva a intentarlo";
    }else{
        if((Dinero > 100) && (Dinero < 1000 ) ){
            textoDinero = "Jefe , no sea rata , apenas son dos dolares!!!"
        }else{
            if(Dinero>1000){
                textoDinero = "El monto que ingreso es correcto ";
            }
        }
    }


    document.getElementById("MuestraDinero").innerHTML = textoDinero + Opcional;

}

function DevolerDevolucion(){

    var OpinionDelUsuario, Hola; 

    OpinionDelUsuario=document.getElementById("Comentario_Usuario").value;

    /*Sentencia switch en JS */

    if((OpinionDelUsuario) == 1 ){
        Hola = "GRACIAS POR LA PARTICIPACION";
    }
    else{
        if((OpinionDelUsuario) == 2){
            Hola = "Gracias";
        }
        else{
            if((OpinionDelUsuario) == 3){
                Hola = "Bueno, podemos ir mejorando";
            }
            else{
                if((OpinionDelUsuario) == 4){
                    Hola = "Quien te crees que sos , estudiante de filosofia? . Tomatela";
                }
                else{
                    if((OpinionDelUsuario) == 5){
                        Hola = "TOMATELA TE DIJE";
                    }
                }
            }
        }
    }

    document.getElementById("RESPUESTA_A_COMENTARIO").innerHTML = OpinionDelUsuario + " = "+ Hola;
}