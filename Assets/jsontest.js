import SimpleJSON;

function get_animals() {
	var www : WWW = new WWW ("http://vpn.mccroreys.com:3000/v1/animals");
	// Wait for download to complete
	yield www;
	var animals = www.text;
	// work with the JSON
	var animal_json = JSON.Parse(animals);
	Debug.Log(animal_json["cow"]["says"]);
	Debug.Log(typeof animal_json);
}
get_animals();