#pragma strict
var laser:Rigidbody;
var health:int=100;
//default value for score is 0
static var score:int=0;

var colours:Material[];



function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag == "alienlaser")
	{
		//the aliens hit the player
		renderer.sharedMaterial = colours[1];
		health -= 2;
	}

}

function OnTriggerExit()
{
	//reset to green when shot exits
	renderer.sharedMaterial = colours[0];
}

function OnGUI()
{
	GUI.color = Color.green;
	//display health
	GUI.Label(Rect(0,0,100,50),"Health: "+health);
	//display the score in the HUD
	GUI.Label(Rect(0,20,100,50),"Score: "+score);
}



function Start () {
	renderer.sharedMaterial = colours[0];
}

function Update () {
	//default material
	
	
	if (Input.GetKeyDown(KeyCode.Space))
	{
		Instantiate(laser,transform.position,transform.rotation);
	}
	
	//borders
	var border:float=1.0;
	
	if (transform.position.x < BordersCalculator.leftmost + border)
	{
		transform.position.x = BordersCalculator.leftmost + border;
	}
	
	if (transform.position.x > BordersCalculator.rightmost - border)
	{
		transform.position.x = BordersCalculator.rightmost - border;
	}
	
	//horizontal movement code
	transform.Translate(Vector3.right * 10 * Time.deltaTime * Input.GetAxis("Horizontal"));
	
}