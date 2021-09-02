function high(x){
    let index = 0 ;
    let highest = 0;
    const splitArray = x.split(' ');

    for(let word of splitArray){

        let score = 0;

        for(let k in word){
            score += word[k].charCodeAt(0) -96;
        }

        if(score > highest){
            highest = score;
            index = splitArray.indexOf(word);
        }

    }

    return splitArray[index];
  
}

console.log(high("what time are we climbing up the volcano"));