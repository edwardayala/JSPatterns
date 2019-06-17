// Edward Ayala | Done 6/12

var width = document.getElementById("width");
var height = document.getElementById("height");
var print_button = document.getElementById("print2");
var pattern2 = document.getElementById("pattern2");
var p2 ="<pre>"; //Initialize the pattern

//Register a click event for the button
print_button.addEventListener('click', print_pattern);

function print_pattern()
{
  var w = parseInt(width.value);
  var h = parseInt(height.value);

  for(var i = h; i >= 0; i--)
  {
    for(var j = 0; j <= w; j++)
    {
      var hyp = (i * w) / (h);

      if(j == hyp)
      // if(j == hyp.toFixed(0)) // use this for boxes with whose width and length are not far apart i.e. w = 15 h = 16
        //document.write("<span>0 </span>");
        p2 += "<span>1 </span>";

      else
        //document.write("1 ");
        p2 +="0 ";
    }
    //document.write("<br>");
    p2 +="<br>";
  }
        p2 += "<br><br><hr>"
        p2 +="</pre>"; //Initialize the pattern
        //Display the pattern in the <div> area
        pattern2.innerHTML = p2;
	//Find all span objects
	var objs = document.getElementsByTagName("span");
	//Apply styles to all span objects
	for(var i = 0; objs.length; i++)
	{
		objs[i].style.color = 'red';
		//objs[i].style.background = 'rgba(255, 255, 0, 0.5)';
	}
}
