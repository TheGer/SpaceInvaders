#pragma strict
var alienlaser:Rigidbody;


function Start () {
	var shootdelay:float=0;

	shootdelay = Random.Range(1.0,3.0);
	//call the shoot laser function first after shootdelay seconds, and then according to shoot delay, a random value
	//between 1.0 and 3.0
	InvokeRepeating("shootlaser",shootdelay,shootdelay);

}


//causes the alien to shoot a laser.  
function shootlaser()
{
	Instantiate(alienlaser,transform.position,transform.rotation);
}


function Update () {

}