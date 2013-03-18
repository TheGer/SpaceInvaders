#pragma strict
//left margin in world coordinates
var leftborder:float=-10.0;

var rightborder:float=8.8;

var touchedrightwall:boolean=false;
var touchedleftwall:boolean=false;


function Start () {

}

function Update () {
	
	if (transform.position.x > rightborder)
	{
		touchedrightwall=true;
	}
	
	if (transform.position.x < leftborder)
	{
		touchedleftwall = true;
	}
	
	if (touchedrightwall == false)
	{
		//move to the right
		touchedleftwall = false;
		transform.Translate(Vector3.right * 10 * Time.deltaTime);
	}
	//
	if (touchedrightwall == true)
	{
		transform.Translate(Vector3.left * 10 * Time.deltaTime);
	}
	
	if (touchedleftwall == true)
	{
		touchedrightwall = false;
		transform.Translate(Vector3.right * 10 * Time.deltaTime);
	}
		

	
	
}