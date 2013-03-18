#pragma strict

var laser:Rigidbody;


function Start () {

}

function Update () {
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