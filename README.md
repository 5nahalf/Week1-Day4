# Week1-Day4
Week 1 day 4 - function prototyping


This project is more or less not done **sad cat


/*
Adafruit Arduino - Lesson 3. RGB LED
*/
 
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
 // setColor(1, 0, 2);  // night
 // delay(4320000);
  setColor(10, 0, 10);  // sunrise
  delay(1000);
  setColor(15, 0, 15);  // sunrise
  delay(1000);
  setColor(20, 0, 20);  // sunrise
  delay(1000);
  setColor(25, 0, 25);  // sunrise
  delay(1000);
    setColor(30, 0, 30);  // green
  delay(1000);
    setColor(35, 0, 35);  // green
  delay(1000);
    setColor(40, 5, 40);  // green
  delay(1000);
    setColor(50, 10, 50);  // green
  delay(1000);
    setColor(60, 20, 60);  // green
  delay(1000);
    setColor(70, 30, 70);  // green
  delay(1000);
  setColor(80, 40, 80);  // green
  delay(1000);
  setColor(90, 50, 90);  // green
  delay(1000);
  setColor(100, 60, 100);  // green
  delay(1000);
  setColor(110, 70, 110);  // green
  delay(1000);
  setColor(130, 90, 130);  // green
  delay(1000);
  setColor(10, 0, 10);  // green
  delay(100);
  setColor(10, 0, 10);  // green
  delay(100);
  setColor(10, 0, 10);  // green
  delay(100);
 // setColor(0, 0, 255);  // blue
 // delay(1000);
 // setColor(255, 255, 255);  // yellow
 // delay(1000);  
 // setColor(80, 0, 80);  // purple
 // delay(1000);
 // setColor(0, 255, 255);  // aqua
 // delay(1000);
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
