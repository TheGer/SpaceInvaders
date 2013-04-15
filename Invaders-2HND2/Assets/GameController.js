#pragma strict

var gameOver:boolean=false;

static var rows:int=3;
static var cols:int=5;

var levelsPlayed:int=0;

function Awake()
{
	if(GameObject.FindGameObjectsWithTag("gamecontroller").Length > 1)
	{
		Destroy(this);
	}
}

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
	
	//third level code here
	if (levelsPlayed == 4)
	{
		gameOver=true;
	
	}
	
	
	
}

function OnGUI()
{
	GUI.Label(Rect(10,200,300,300),"Level: "+levelsPlayed);

	if (gameOver)
	{
		
		//remove player
		Destroy(GameObject.FindGameObjectWithTag("player"));
		//display game over
		GUI.Label(Rect(300,300,300,300),"Game Over");
	}
}