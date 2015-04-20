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
