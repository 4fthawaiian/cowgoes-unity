#pragma strict
import MiniJSON;
import System.Collections.Generic;

var web_viewer : GameObject;

function Start()
{
	var viewport_right = 3; // outside right position to start at creating web views
  var counter=0;
	var web_animals : WWW = new WWW ("http://vpn.mccroreys.com:3000/v1/animals");
	// Wait for download to complete
	yield web_animals;
	var animals = web_animals.text;
	var dict = Json.Deserialize(animals) as Dictionary.<String,System.Object>;
	for(var key in dict) {
		Debug.Log(key.Key+" is the key!");
		// var thisval = key.Value as Dictionary.<String,System.Object>;
		// for(var valkey in thisval) {
		// 	Debug.Log(valkey.Key);
		// }
    var this_animal = key.Key;
    var x = (viewport_right + (0 - (.75*counter) ));
		var animal_view = Instantiate(web_viewer, Vector3(x,1,5), Quaternion.identity);
    Debug.Log(animal_view);
    var m_View = animal_view.GetComponentInChildren(CoherentUIView);
    Debug.Log("http://localhost:3000/animal/"+this_animal);
    Debug.Log(m_View);
    m_View.Page = "http://localhost:3000/animal/"+this_animal;
    counter++;
	}
}

function Update()
{
}
