'use strict';

$('#burger').click(function () {
    $('#menu').addClass(`open`);
});

$(`#menu *`).each(function () {
        $(this).click(function () {
            $('#menu').removeClass(`open`);
        })
    }
)

let loader = $('#loader');
$('#submit').click(function () {
    let productName = $('#product');
    let userName = $('#user-name');
    let userPhone = $('#user-phone');
    let url = 'https://testologia.ru/checkout?name=' + userName.val();
    let hasError = false;
    let form = $('.fourth__form');
    let thanks = $('.thanks');
    $('.fourth__div-input').css('border-color', '#821328');

    loader.css('display', 'flex');

    $('.fourth__label').hide();

    if (!productName.val()) {
        productName.prev().show();
        productName.parent().parent().css('border-color', '#CC183AFF');
        hasError = true;
    }
    if (!userName.val()) {
        userName.prev().show();
        userName.parent().parent().css('border-color', '#CC183AFF');
        hasError = true;
    }
    if (!userPhone.val()) {
        userPhone.prev().show();
        userPhone.parent().parent().css('border-color', '#CC183AFF');
        hasError = true;
    }

    if (hasError === false) {
        $.ajax({
            method: "POST",
            url: url,
            data: {product: productName.val(), name: userName.val(), phone: userPhone.val()}
        })
            .done(function (msg) {
                loader.hide();
                if (msg.success) {
                    console.log(msg);
                    form.hide();
                    thanks.show();
                } else {
                    console.log(msg);
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                }
            });
    } else {
        loader.hide();
    }
});