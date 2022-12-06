function designate(a){
    document.display.value += a;
}


function del(){
    var war = document.display.value;
    document.display.value = war.substring(0, war.length-1);
}


function ac(){
    document.display.value = "";
}


function equal(){
    document.display.value = eval(document.display.value);
}

function sqrt(){

    var qwerty = document.display.value;

    var store = Math.sqrt(qwerty);
    document.display.value = store;
}

function per(){
    var percentage = document.display.value;
    var temp = eval(percentage);
    var anpercent = temp*100 + "%";
    document.display.value = anpercent;
}

function  fact(){
    var n = document.display.value;
    let answer = 1;
    if (n == 0 || n == 1){
      answer = 1;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      
    } 
    
    document.display.value = answer;
}



function rad(){
    var radian = document.display.value;
    var radia = (radian*180)/3.14;
    document.display.value = radia;
}

function square(){
    var squared = document.display.value;
    var redeeemd = Math.pow(squared,2);
    document.display.value = redeeemd;
}

function logarithm(){
    var logarit = document.display.value;
    var legit = Math.log10(logarit);
    document.display.value = legit;
}

function lan(){
    var logarit = document.display.value;
    var legit = Math.log(logarit);
    document.display.value = legit;
}

function pi(){
    var pai = document.display.value;
    var paai = pai * 3.141;
    document.display.value = paai;
}

function sine(){
    var trignometry = document.display.value;
    var result = Math.sin(trignometry);
    document.display.value = result;

}

function cos(){
    var trignometry = document.display.value;
    var result = Math.cos(trignometry);
    document.display.value = result;
    
}
function tan(){
    var trignometry = document.display.value;
    var result = Math.tan(trignometry);
    document.display.value = result;
    
}