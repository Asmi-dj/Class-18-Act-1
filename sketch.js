var Student1 
var Student2

function setup() {
  createCanvas(400,400);

  Student1 = new Student ("Dave", 14, 9); 
  Student1.show_Student(); 

  Student2 = new Student ("Lina", 16, 11);
  Student2.show_Student();
  

}



function draw() 
{
  background(30);
  
}