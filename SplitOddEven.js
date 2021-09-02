function splitOddAndEven(n) {
    n = n.toString();
    let nums = n[0];
    for(let i = 1 ;i < n.length ;i++){
        
        if(isOdd(n[i-1]) && !isOdd(n[i]) || !isOdd(n[i-1]) && isOdd(n[i]))
            nums+=',';
            
        nums+=n[i];

    }

    console.log(nums);
    return nums.split(',').map(Number);
}

function isOdd(digit){
    return digit % 2 != 0 ;
}


  console.log(splitOddAndEven(1122345667));

