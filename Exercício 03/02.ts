var c : number = 0;
function primo(x: number){
  for (c = 2; c < x; c++) {
        if (x % c == 0)
            return console.log(false);
    }
    return console.log(true);
}

primo(7)