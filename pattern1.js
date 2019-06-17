// Edward Ayala | Done 6/12

var size_box = document.getElementById("size");
var print_button = document.getElementById("print1");
var pattern1 = document.getElementById("pattern1");
var p1 ="<pre>"; //Initialize the pattern

//Register a click event for the button
print_button.addEventListener('click', print_pattern);

function print_pattern()
{
	var size = parseInt(size_box.value);
	for(var i = size; i >= 0; i--)
	{
		for(var j = 0; j <= size; j++)
		{
			if(i == j)
				//document.write("<span>0 </span>");
				p1 += "<span>1 </span>";

			else
				//document.write("1 ");
				p1 +="0 ";
		}
		//document.write("<br>");
		p1 +="<br>";
	}


        p1 += "<br><br><hr>"
        p1 +="</pre>"; //Initialize the pattern
        //Display the pattern in the <div> area
        pattern1.innerHTML = p1;
	//Find all span objects
	var objs = document.getElementsByTagName("span");
	//Apply styles to all span objects
	for(var i = 0; objs.length; i++)
	{
		objs[i].style.color = 'red';
		//objs[i].style.background = 'rgba(255, 255, 0, 0.5)';
	}
}
