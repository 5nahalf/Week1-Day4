var playerA = [];


function Monster(name, strength, dexterity, constitution, wisdom, intelligence, charisma) {
	this.name = name;
	this.strength = strength;
	this.dexterity = dexterity;
	this.constitution = constitution;
	this.wisdom = wisdom;
	this.intelligence = intelligence;
	this.charisma = charisma;


};


function Player(name, strength, dexterity, constitution, wisdom, intelligence, charisma, playerClass) {
	Monster.call(this, name, strength, dexterity, constitution, wisdom, intelligence, charisma);
	this.playerClass = playerClass;
}



function addMonster() {
	var name = document.getElementById('name').value;
	var strength = document.getElementById('strength').value;
	var dexterity = document.getElementById('dexterity').value;
	var constitution = document.getElementById('constitution').value;
	var wisdom = document.getElementById('wisdom').value;
	var intelligence = document.getElementById('intelligence').value;
	var charisma = document.getElementById('charisma').value;
		var madeMonster = new Monster(name, strength, dexterity, constitution, wisdom, intelligence, charisma);
	playerA.push(madeMonster);
	/////////
	var table = document.getElementById("monster");

	var row = table.insertRow();


	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);

	cell1.innerHTML = madeMonster[0];
	cell2.innerHTML = madeMonster[1];
};

 
int redPin = 3;
int greenPin = 5;
int bluePin = 6;
 
//uncomment this line if using a Common Anode LED
//#define COMMON_ANODE
 
void setup()
{
  pinMode(redPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
  pinMode(bluePin, OUTPUT);  
}
 
void loop()
{
  setColor(5, 0, 5);  // night
    delay(43200000);
  setColor(10, 0, 10);
    delay(200000);
  setColor(15, 0, 15);
    delay(200000);
  setColor(20, 0, 20);
    delay(200000);
  setColor(25, 1, 25);
    delay(200000);
  setColor(30, 3, 30);
    delay(200000);
  setColor(35, 4, 35);
    delay(200000);
  setColor(40, 5, 40);
    delay(200000);
  setColor(50, 10, 50); 
    delay(200000);
  setColor(60, 20, 60); 
    delay(200000);
  setColor(70, 30, 70);
    delay(200000);
  setColor(80, 40, 80);
    delay(200000);
  setColor(90, 50, 90); 
    delay(200000);
  setColor(100, 60, 100); 
    delay(200000);
  setColor(110, 70, 110);  
    delay(200000);
  setColor(130, 90, 130);  
    delay(200000);
  setColor(150, 120, 150); 
    delay(200000);
  setColor(170, 150, 170);  
    delay(200000);
  setColor(180, 170, 180);  
    delay(200000);
  setColor(200, 200, 200); 
    delay(200000);
  setColor(220, 220, 220); 
    delay(200000);
  setColor(255, 255, 255);  // day
    delay(28800000);
  setColor(220, 220, 220);  
    delay(200000);
  setColor(200, 200, 200);  
    delay(200000);
  setColor(180, 170, 180); 
    delay(200000);
  setColor(170, 150, 170);  
    delay(200000);
  setColor(150, 120, 150);  
    delay(200000);
  setColor(130, 90, 130);
    delay(200000);
  setColor(110, 70, 110); 
    delay(200000);
  setColor(100, 60, 100); 
    delay(200000);
  setColor(90, 50, 90); 
    delay(200000);
  setColor(80, 40, 80); 
    delay(200000);
  setColor(70, 30, 70); 
    delay(200000);
  setColor(60, 20, 60);  
    delay(200000);
  setColor(50, 10, 50);  
    delay(200000);
  setColor(40, 5, 40); 
    delay(200000);
  setColor(35, 4, 35);
    delay(200000);
  setColor(30, 3, 30); 
    delay(200000);
  setColor(25, 1, 25); 
    delay(200000);
  setColor(20, 0, 20);  
    delay(200000);
  setColor(15, 0, 15); 
    delay(200000);
  setColor(10, 0, 10);
    delay(200000);
}
 
void setColor(int red, int green, int blue)
{
  #ifdef COMMON_ANODE
    red = 255 - red;
    green = 255 - green;
    blue = 255 - blue;
  #endif
  analogWrite(redPin, red);
  analogWrite(greenPin, green);
  analogWrite(bluePin, blue);  
}
