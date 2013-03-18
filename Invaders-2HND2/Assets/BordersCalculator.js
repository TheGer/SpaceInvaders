#pragma strict
static var leftmost:float;
static var rightmost:float;
static var topmost:float;
static var bottommost:float;


function Start () {

}

function Update () {

	//CALCULATE LEFT MOST
	leftmost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).x;
	//RIGHT MOST POSITION
	rightmost = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).x;
	
	//BOTTOM MOST POSITION
	bottommost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).y;
	//TOP MOST POSITION
	topmost = Camera.main.ScreenToWorldPoint(Vector3(0,Screen.height,0)).y;
}

//this function takes a transform as a parameter
static function EnableBorders(object:Transform)
{
	//exit stage left
	if(object.position.x < leftmost)
	{
		object.position.x = rightmost;
	}
	//exit stage right
	if(object.position.x > rightmost)
	{
		object.position.x = leftmost;
		
	}
	//exit stage top
	if (object.position.y > topmost)
	{
		object.position.y = bottommost;
	}
	//exit stage bottom
	if(object.position.y < bottommost)
	{
		object.position.y = topmost;
	}

}