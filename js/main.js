$(document).ready(function(){
    $('.calculator-button-main-block button').on('click',function(){
        let a = $(this).val();
        $('.calculator-display-block h2').html(a);
    });
});