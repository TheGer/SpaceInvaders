#pragma strict

var gameOver:boolean=false;

static var rows:int=3;
static var cols:int=5;

var levelsPlayed:int=0;



function Start () {
	DontDestroyOnLoad(this);
}

function Update () {
	var numberOfAliens:int;
	
	//total number of aliens in the scene
	numberOfAliens = GameObject.FindGameObjectsWithTag("enemy").Length;
	
	if (numberOfAliens <=0)
	{
		levelsPlayed++;
		rows++;
		PlayerController.score = 0;
		Application.LoadLevel(0);
		print(levelsPlayed);
		//gameOver=true;
	}
	
	
	
}

function OnGUI()
{
	if (gameOver)
	{
		
		//remove player
		Destroy(GameObject.FindGameObjectWithTag("player"));
		//display game over
		GUI.Label(Rect(300,300,300,300),"Game Over");
	}
}