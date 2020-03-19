sum = function(array){
    summ = 0;
    for(let i = 0; i < this.length; i++){
        summ += this[i];
    }
    return summ;
};

console.log(sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));