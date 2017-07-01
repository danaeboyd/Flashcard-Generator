function Card(front, back){
    this.frontVal = front;
    this.backVal = back;
    this.display = function(side){
        if( side === 0 ){
            return this.frontVal;
        }else{
            return this.backVal;
        }
    };
}

module.exports = BasicCard;