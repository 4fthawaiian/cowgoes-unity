#pragma strict
import MiniJSON;
import System.Collections.Generic;

var web_viewer : GameObject;
function get_animals() {
	var www : WWW = new WWW ("http://vpn.mccroreys.com:3000/v1/animals");
	// Wait for download to complete
	yield www;
	var animals = www.text;
	var dict = Json.Deserialize(animals) as Dictionary.<String,System.Object>;
	for(var key in dict) {
		Debug.Log(key.Key+" is the key!");
		var thisval = key.Value as Dictionary.<String,System.Object>;
		for(var valkey in thisval) {
			Debug.Log(valkey.Key);
		}
	}
}
function Start()
{
	get_animals();
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