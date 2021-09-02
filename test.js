function pigLating(word){
  if(hasNum(word)) return null;
  else {
  let vowels = ['a','e','i','o','u'];
  let nums = '1234567890';
  let vowel = '';
  let cons = '';
  word = word.toLowerCase();
  
  for(let i = 0 ; i < word.length ; i++){
     if(i < 1 && vowels.includes(word[i])) return word+"way";
    else if(!vowels.includes(word[i])) cons+=word[i];
    else break;
  }



  return word.replace(cons,'')+cons+"ay";
}
}

function hasNum(word){
  let nums = '1234567890';
  
  for(n  in nums) if (word.includes(nums[n])) return true;
   return false;
}

console.log(pigLating("egg1"));