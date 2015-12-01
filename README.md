
 
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
