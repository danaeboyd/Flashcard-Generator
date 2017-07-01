var Card = function(front, back) {
    this.front = front;
    this.back = back;

}

Card.prototype.printCard = function() {
    console.log('Front: ' + this.front + ', ' + 'Back: ' + this.back);
};

Card.prototype.printFront = function() {
    console.log(this.front);

};


Card.prototype.printAnswer = function() {
    console.log('Answer: ' + this.back + '.');
};

module.exports = BasicCard;