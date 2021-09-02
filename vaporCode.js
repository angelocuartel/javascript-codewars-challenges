function vaporcode(string) {
    return string.toUpperCase().replace(/ /g,'').split('').reduce((t,v) => `${t} ` +` ${v}`).trimEnd();
  }

  console.log(vaporcode('Let\'s go to the movies'));
  console.log('L  E  T  \'  S  G  O  T  O  T  H  E  M  O  V  I  E  S');