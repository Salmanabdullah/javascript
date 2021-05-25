var x = function(msg){
    document.getElementById('output').innerHTML = "Length is: "+ msg;
}

document.getElementById('btn').onclick = function(){
    x(document.getElementById('word').value.length);
}