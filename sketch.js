//Create variables here
var dog
var happyDog
var database
var foodStock
var readStock 
var dog1Image

function preload()
{
  //load images here
  dogImage=loadImage("images/dogImg.png")
  dog1Image = loadImage("images/dogImg1.png")
  
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(300,250,300,250)
  dog.addImage(dogImage)
  dog.scale = .5
  
  database= firebase.database()

  foodStock = database.ref("Food")
  foodStock.on("value",readStock1)
  
}


function draw() {  
  background(46, 139, 87)


  if(keyWentDown(UP_ARROW)){
    writeStock(readStock)
    dog.addImage(dog1Image)

  }

  if(keyWentUp(UP_ARROW)){
    dog.addImage(dogImage)

  }
  fill ("white")
  text("available food:" + readStock,100,20)
  



  drawSprites();
  //add styles here

}

function writeStock(x){
  if(x<0){
   x = 0
  }
  else{x=x-1}
  database.ref("/").update({
    Food:x
  })
  }


function readStock1(data){
  readStock= data.val()

}
