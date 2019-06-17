// Edward Ayala | Done 6/12

var size3 = document.getElementById("boxsize");
var x_coordinate = document.getElementById("xcord");
var y_coordinate = document.getElementById("ycord");
var print_button = document.getElementById("print3");
var pattern3 = document.getElementById("pattern3");
var p3 ="<pre>"; //Initialize the pattern
console.log('vars good');

//Register a click event for the button
print_button.addEventListener('click', print_pattern);
console.log('button good');

function print_pattern()
{
	var sizeBox = parseInt(size3.value);
  var x = parseInt(x_coordinate.value);
  var y = parseInt(y_coordinate.value);
  console.log('vals good');

	for(var i = 0; i <= sizeBox; i++)
	{
		for(var j = 0; j < sizeBox; j++) // This should be -> iterator < size |or| iterator <= size not both
		{
			if(i+y-x == j || -i+y+x == j){
				//document.write("<span>0 </span>");
        if (i === x && j === y) {
          p3 += "<span>1 </span>";
        }
        else {
          p3 += "1 ";

        }
      }
			else
				//document.write("1 ");
				p3 +="0 ";
		}
		//document.write("<br>");
		p3 +="<br>";
	}
  console.log('loop good');

        p3 += "<br><br><hr>";
        p3 +="</pre>"; //Initialize the pattern
        //Display the pattern in the <div> area
        pattern3.innerHTML = p3;
        console.log('funct good');

	//Find all span objects
	var objs = document.getElementsByTagName("span");
	//Apply styles to all span objects
	for(var i = 0; objs.length; i++)
	{
		objs[i].style.color = 'red';
		//objs[i].style.background = 'rgba(255, 255, 0, 0.5)';
	}
  // document.write("<hr size=\"5px\">");

}


/*
    I learned that javascript variables are PERSISTANT throughout the ENTIRE web page.
    Therefore one must make all variables different throughout their various .js programs.
*/
