function calculate(){
    var amount = $('#amount').val();
    var percentage = $('#percentage').val();
    var tip = Number(amount) * (percentage / 100);
    var total = Number(amount) + tip;
    $('#tip').val(tip.toFixed(2));
    $('#total').val(total.toFixed(2));
    return false;
};
    $('#calc').submit(calculate);