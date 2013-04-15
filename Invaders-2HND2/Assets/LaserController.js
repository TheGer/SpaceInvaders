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


function OnTriggerEnter(other:Collider)
{
//laser hits something
	//check if it is the player's laser shooting UPWARDS
	if(shootingup == true)
	{
		if (other.gameObject.tag == "enemy")
		{
		//laser hits an alien
		//increment score
			PlayerController.score++;
			
			var PlayerControllerScript:PlayerController;
			
			PlayerControllerScript = GameObject.FindGameObjectWithTag("Player").GetComponent(PlayerController);
			
			PlayerControllerScript.PlayAlienExplosion();
			
			
		//destroy the alien
			Destroy(other.gameObject);
		//destroy the laser
			Destroy(this.gameObject);
		}
	}

}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
	
}