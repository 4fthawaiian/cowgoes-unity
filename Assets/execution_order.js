#pragma strict
import SimpleJSON;

var web_viewer : GameObject;
function Start()
{
	var total_viewers = 5;
	var viewport_right = 3; // outside right position to start at creating web views
	for(var i=0;i<total_viewers;i++) {
	    var x = (viewport_right + (0 - (.75*i) ));
		var animal_view = Instantiate(web_viewer, Vector3(x,1,5), Quaternion.identity);
		Debug.Log(animal_view);
	}
}

function Update()
{
}