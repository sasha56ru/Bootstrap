/*Блок с функциями*/
function Print(str)
{
	document.write(str);
}

function STriangl(a,h)
{
	return a*h*1/2;
}

//Вызов функций
function NewTriangle()
{
Print("<br/>Площадь треугольника равна: "+ STriangl(5,21));
}