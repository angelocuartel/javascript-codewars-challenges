function isValidIP(str) {
   const subnet = str.split('.');
   
   return !str.endsWith('.') && !str.startsWith('.') && subnet.length == 4 && subnet.every(function(value){
     const subnet = parseInt(value);
      return !isNaN(value) && !value.includes(' ') && !value.includes('e') && !value.includes('\n') && !hasLeadingZero(value) && subnet > -1 && subnet <= 255;
   });
  }

function hasLeadingZero(subnet){
  return subnet.length > 1 && subnet.startsWith('0');
}

console.log('isvalidip: '+isValidIP('0.0.0.01'));


