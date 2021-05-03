$(document).ready(function () {
    $('#bt1').click(function () {
        $('.myDiv').css('height', '+=20px');
    })
    $('#bt2').click(function () {
        $('.myDiv').hide();
    })
    $('#bt3').click(function () {
        $('.myDiv').css('background', 'pink');
    })
    $('#bt4').click(function () {
        $('.myDiv').css('background', '');
    })
    $('#bt5').click(function () {
        $('.myDiv').show();
    })
});
