var colors = ['#0a5569','red','blue','maroon','#de7bb3','#b8e9de'];
var i = 0;
$('#click').click(function(){
    $('div').css('backgroundColor',colors[i]);
        if (i == colors.length - 1){
            i = 0;
        }else{
           i = i + 1;
        }
    //shorthand
    // i = (i == colors.length - 1) ? 0 : (i + 1);
});