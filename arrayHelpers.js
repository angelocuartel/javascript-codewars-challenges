

Array.prototype.odd = function(){
    let oddNums =[];
    let position = 0;

    for(let i = 0 ; i < this.length ;i++){
        if(this[i] % 2 != 0){
            oddNums[position] = this[i];
            position++;
        }
    }

    return oddNums;
}

Array.prototype.sum = function(){
    let numSum = 0;
    for(let i = 0 ;i < this.length ;i++){
        numSum+=this[i];
    }

    return numSum;
}

Array.prototype.square = function(){
    let squaredNums =[];
    for(let i = 0 ;i < this.length ;i++){
        squaredNums[i] = Math.pow(this[i],2);
    }

    return squaredNums;
}

Array.prototype.cube = function(){

   let cubedNums =[];
   for(let i = 0; i < this.length ; i++){
        cubedNums[i] = Math.pow(this[i],3);
   }

   return cubedNums;
}

Array.prototype.average = function(){
    return this.sum() / this.length;
}

Array.prototype.even = function(){
    let evenNums =[];
    let position = 0;

    for(let i = 0 ; i < this.length ;i++){
        if(this[i] % 2 == 0){
            evenNums[position] = this[i];
            position++;
        }
    }

    return evenNums;
}


let nums =[1,2,3,4,5].squared();

console.log(nums);



