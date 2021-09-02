function findUniq(arr) {
    
    for(item1 in arr){
        let item = arr[item1].toLowerCase();


   
        for(let i = 0 ; i < arr.length;i++){

        
            for(c in item){
                if(!arr[i].toLowerCase().includes(item[c])){
                    return arr[i];
                }

               

            }
          
        }
    
    }
    return '12';
  }

  console.log(findUniq([ '    ', 'a', ' ' ]));
  
  