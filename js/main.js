$(document).ready(function(){
    $('.calculator-button-main-block button').on('click',function(){
        let btnValue = $(this).val();
        $('.calculator-display-block input').val($('.calculator-display-block input').val() + btnValue);
    });
    $('.clear-screen-btn').on('click',function(){
        $('.calculator-display-block input').val('0');
    });
    let digitCount = $('.calculator-display-block input').val();
    if(digitCount.length > '4'){
        $('.calculator-display-block input').css('font-size','2.6rem');
        console.log(digitCount.length);
    }
    if($('.display-screen').length != '0'){
        $('.clear-screen-btn').html('C');
    }
    //Addition Function//
    $('.result-btn').on('click',function(){
        let result = $('.display-screen').val();
        eval(result);
        $('.display-screen').val(result);
    });
});