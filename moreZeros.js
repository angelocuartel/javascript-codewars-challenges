function moreZeros(s){
    
    const words = removeDuplicates(s);

    return getZeroDominant(convertWordsToBinaryArray(words)).map(function(value,index){
        if(value)
            return words[index];
       
    }).filter(function(value){
        return value != undefined;
    });

}

function convertWordsToBinaryArray(word){
 
    let binaryArray =[];

    for(let i = 0 ; i < word.length ;i++){
        binaryArray[i] = word.charCodeAt(i).toString(2);
    }

    return binaryArray;

}

function getZeroDominant(binaryArray){
    
    return binaryArray.map(function(value){
        return value.replace(/1/g ,'').length >= 4 ; 
    });
}



function removeDuplicates(word){

    let newLetters = '';

    for(let i = 0 ; i < word.length ; i ++){

        if(!newLetters.includes(word[i])){
            newLetters+=word[i];
        }
    }

    return newLetters;
}

console.log(moreZeros('abcde'));


