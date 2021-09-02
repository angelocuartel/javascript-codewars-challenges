function Convert(arr1){
    let arr2 =[];
    
    for(let i in arr1){
        if(Number.isInteger(arr2[i]) )
            arr2[i] = Number.parseInt(arr1[i]);
        else
         arr2[i] = Number.parseFloat(arr1[i]);
    }

    return arr2;
}
let arr = ['34','1'];
for(let i in Convert(arr)){
console.log()
}