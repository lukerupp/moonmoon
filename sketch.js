let img

function preload() {
  img = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs_FacoOBM695hGSsq_zN_niIHFt7q0YZTDecHleL8gcKu77oK%3Ahttps%3A%2F%2Fi.redd.it%2F6sqfhnhvkhk51.jpg&usqp=CAU")
}

function setup() {
  createCanvas(400,400,WEBGL)
}

function draw() {
  background(220)
  
  texture(img)
  orbitControl()
  rotateZ(frameCount * 0.1 * PI / 6)
  
  //orgin
  box(5,5,5)
  //x-axis
  stroke("red")
  line(0,0,0,200,0,0)
  //y-axis
  stroke("green")
  line(0,0,0,0,200,0)
  //z-axis
  stroke("blue")
  line(0,0,0,0,0,200)
  
  translate(50,100,100)
  noStroke()
  sphere(100)
}