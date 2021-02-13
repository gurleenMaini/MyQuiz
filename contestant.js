class Contestant{
  constructor(){
    this.index=null;
    this.answer=0;
    this.name=null;
}
getCount(){
    var contestantCountRef = database.ref('contestantCount');
    contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
    }); 
  }

    updateCount(count){
        database.ref('/').update({
            contestantCount: count
        });
      }
      //to update both name and the distance of the player.
      update(){
    // we will use the  index property to update the particular players value in the database.
        var contestantIndex = "contestants/contestant" + this.index;
        database.ref(contestantIndex).set({
          name:this.name,
          answer:this.answer
        });
      }

      // this function will not be attached to any player so its static.
      //static function to each objects of the class.
      // static function are those common functions which are called by the class themselves rather then the objects of the class.
      static getPlayerInfo(){
        var contestantInfoRef=database.ref('contestants');
        contestantInfoRef.on("value",(data)=>{
        allContestants=data.val();
        });
      }
}
