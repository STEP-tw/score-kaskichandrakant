const Game=function(){
  this.score=0;
}

Game.prototype={
  getScore:function(){
    return this.score;
  },
  addScore:function(){
    this.score+=10;
  }
};

let game=new Game();
