const band = {
    bandName: "led zepplind",
    famousSong: "stairway to heaven" 
}

const { bandName, famousSong} = band;
console.log(bandName);

//if we want to change the variable name i.e bandName and famousSong then do like this:
const { bandName:var1, famousSong:var2} = band;
console.log(var1, var2);