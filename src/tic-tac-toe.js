class TicTacToe {
    constructor() {
      this.player ='x';
      this.play_field=[['', '', ''], ['', '', ''], ['', '', '']];
      
    }

    getCurrentPlayerSymbol() {
      return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
           if(this.play_field[rowIndex][columnIndex] == ''){
                this.play_field[rowIndex][columnIndex] = this.player;
                if (this.player=='x'){
                  this.player='o';
                }
                else this.player = 'x';
           }

    }

    isFinished() {
       if (this.isDraw()==true || this.getWinner()!=null){
         return true;
       }
       else return false;
    }

    getWinner() {
      for (var i =0; i<3;i++){
        if(this.play_field[0][i]=='x' && this.play_field[1][i]=='x' && this.play_field[2][i]=='x'){
          return this.play_field[0][i];
        }
      else if(this.play_field[0][i]=='o' && this.play_field[1][i]=='o' && this.play_field[2][i]=='o'){
        return this.play_field[0][i];
      }
      else if(this.play_field[i][0]=='x' && this.play_field[i][1]=='x' && this.play_field[i][2]=='x'){
        return this.play_field[i][0];
      }
    else if(this.play_field[i][0]=='o' && this.play_field[i][1]=='o' && this.play_field[i][2]=='o'){
      return this.play_field[i][0];
    }
    }
    if(this.play_field[0][0]=='x' && this.play_field[1][1]=='x' && this.play_field[2][2]=='x'){
      return this.play_field[0][0];
    }
    else if(this.play_field[0][0]=='o' && this.play_field[1][1]=='o' && this.play_field[2][2]=='o'){
      return this.play_field[0][0];
    }
    else if(this.play_field[0][2]=='o' && this.play_field[1][1]=='o' && this.play_field[2][0]=='o'){
      return this.play_field[0][2];
    }
    else if(this.play_field[0][2]=='x' && this.play_field[1][1]=='x' && this.play_field[2][0]=='x'){
      return this.play_field[0][2];
            }
            else return null;
    }

    noMoreTurns() {
                 for (var i = 0; i<3;i++){
                   for (var j =0;j<3;j++){
                     if (this.play_field[i][j]==''){
return false;
                     }
                   }
                 }
                 return true;
    }

    isDraw() {
              if ( this.noMoreTurns() && this.getWinner()==null){
return true;
              }
              else return false;
    }

    getFieldValue(rowIndex, colIndex) {
    if(this.play_field[rowIndex][colIndex] != ''){
      return this.play_field[rowIndex][colIndex];
    }
    else return null;
    }
}

module.exports = TicTacToe;
