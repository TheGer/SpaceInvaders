#pragma strict

var shootingup:boolean;


function Start () {

}

function Update () {
	if(shootingup)
	{
		//shoot up
		transform.Translate(Vector3.up * 10 * Time.deltaTime);
	}
	else
	{
		//shoot down
		transform.Translate(Vector3.up * -10 * Time.deltaTime);
	}


}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
	
}