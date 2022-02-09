class Player {

  constructor() { }

  //read
  getCount(){
    var playerCountLocation = database.ref("playerCount")
    playerCountLocation.on("value", (data)=>{
      playerCount = data.val();
    })
  }

  //write
  updateCount(newValue){
    database.ref('/').update({
      playerCount: newValue
    })
  }
  
}
