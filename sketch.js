var planets = [];

function setup() 
{
	createCanvas(1600 , 750);
	for (var i = 0; i < 300; i++) 
	{
		planets[i] = new Planet();
	}
		
}


function draw() 
{
	background(0);

	for (var i = 0; i < planets.length; i++)
	{
		planets[i].show();
		planets[i].move();
	}
}


	function Planet()
	{
		this.x = random(0 , width);
		this.y = random(-0 , -700);
		this.d = random(5 , 40);

	this.show = function()
	{
		stroke(255 , 151);
		strokeWeight(4);
		noFill();
		ellipse(this.x , this.y , this.d);
	}
		this.move = function()
		{
			this.y = this.y + random(1 , 2);

			if (this.y > 770) 
				{
					this.y = random(0 , -700);
				}
		}
		
	}
	