window.onload = function() {
	document.getElementById("peso").focus();
};

function CalculoIMC()
{
	document.getElementById("error_form").innerHTML = "";
	var altura=+document.getElementById("altura").value;
	var peso=+document.getElementById("peso").value;
	if(peso=="")
	{
		document.getElementById("error_form").innerHTML = "Ingrese Peso";
		document.getElementById("peso").focus();
	}
	else if(altura=="")
	{
		document.getElementById("error_form").innerHTML = "Ingrese Altura";
		document.getElementById("altura").focus();
	}
	else if(altura<=0)
	{
		document.getElementById("error_form").innerHTML = "Altura debe ser mayor a 0";
	}
	else if(peso<=0)
	{
		document.getElementById("error_form").innerHTML = "Peso debe ser mayor a 0";
	}
	else
	{
		var xAltura = altura / 100;
		var alturaCuadrado = xAltura * xAltura;
		var imc = peso / alturaCuadrado;
		
		document.getElementById("imc").value = Math.round(imc*100)/100;
		if(imc < 16.0)
		{
			document.getElementById("estado").value = "Delgadez severa";
		}
		else if (imc < 16.9)
		{
			document.getElementById("estado").value = "Delgadez moderada";
		}
		else if (imc < 18.49)
		{
			document.getElementById("estado").value = "Delgadez aceptable";
		}
		else if (imc < 24.9)
		{
			document.getElementById("estado").value = "Normal";
		}
		else if (imc <= 25.0)
		{
			document.getElementById("estado").value = "Sobrepeso";
		}
		else if (imc < 29.9)
		{
			document.getElementById("estado").value = "Pre-obeso";
		}
		else if (imc < 34.9)
		{
			document.getElementById("estado").value = "Obeso tipo I";
		}
		else if (imc < 39.9)
		{
			document.getElementById("estado").value = "Obeso tipo II";
		}
		else if (imc >= 40.0)
		{
			document.getElementById("estado").value = "Obeso tipo III";
		}
	}
}

function Limpiar()
{
	document.getElementById("error_form").innerHTML = "";
	var altura=document.getElementById("altura").value = "";
	var peso=document.getElementById("peso").value = "";
	var altura=document.getElementById("imc").value = "";
	var peso=document.getElementById("estado").value = "";
	document.getElementById("peso").focus();
}

function valida(e){
    tecla = (document.all) ? e.keyCode : e.which;
    //Tecla de retroceso para borrar, siempre la permite
    if (tecla==8)
    {
        return true;
    }  
    // Patron de entrada, en este caso solo acepta numeros
    patron =/[0-9]/;
    //patron =/[0-9-.]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}