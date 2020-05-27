function light(value)
{
	var pic;

	if(value == 0)
	{
		pic = "off.png"; 
	}
	else 
	{
		pic = "onn.png";
	}

	document.getElementById("bulb").src = pic;
}