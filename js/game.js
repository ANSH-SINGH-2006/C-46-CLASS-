class Game{
    constructor(){


    }

    getState(){
        var gameStateRef= database.ref('gameState');
        gameStateRef.on("value",(data)=>{
            gameState=data.val();
        })
        


    }

    update(state){

        database.ref('/').update({
            gameState:state

        })

    }

    async start(){
        if(gameState===0){
            player=new Player();
            var playerCountRef=await database.ref('playerCount').once("value");

            if(playerCountRef.exists()){

                playerCount=playerCountRef.val();
                player.getCount();
            }
            
            form=new Form();
            form.display();
        }

        
        

        
    }
    
    play(){
        //bg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
        //bg.scale=3;
       // bg.addImage(gg1);
        form.hide();
        //textSize(30);
        //text("GAME START",120,100);
        Player.getPlayerInfo();
        Player.getCarsAtEnd();
        
        if(allPlayers!==undefined){
        
            //var display_position=130;

            //image(gg1,displayWidth/16,displayHeight/16,displayWidth,displayHeight);
            background("brown");
            iground=createSprite(displayWidth/2,displayHeight-250,displayWidth,20);
        car1=createSprite(200,700);
        car1.addImage("car1",p1);
        car1.scale=0.2
        car2=createSprite(600,700);
        car2.scale=0.2
        car2.addImage("car2",p2);
        car3=createSprite(1000,700);
        car3.scale=0.2
        car3.addImage("car3",p1);
        car4=createSprite(1400,700);
        car4.addImage("car4",p2);
        car4.scale=0.2

        cars=[car1,car2,car3,car4];

        

        
        

                var index=0;
                var x=175;
                var y;


            for(var plr in allPlayers){

                index=index+1;

                y=700;

                x=(displayWidth-1400)-allPlayers[plr].distance;
                
                cars[index-1].x=x;
                cars[index-1].y=y;

                


                if(plr==="player"+player.index)
                fill("red");
                else
                fill("black");

                //display_position+=30;
                //textSize(15);
                //text(allPlayers[plr].name+" : "+allPlayers[plr].distance,120,display_position)

                
            
        }
    }
        if(keyDown("LEFT_ARROW")&&player.index!==null){

            player.distance+=50;
            player.update();
        }

        if(keyDown("RIGHT_ARROW")&&player.index!==null){

            player.distance-=50;
            player.update();
        }

if(player.distance>5000){

    gameState=2;
    Player.rank+=1;
    Player.updateCarsAtEnd(Player.rank);
   // game.update(2);

}
drawSprites();
        
    }

end(){

    console.log("gameEnded");
    console.log(Player.rank);
    //game.update(2);
    drawSprites();


}

  

}

