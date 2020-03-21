$('input[name="inlineRadioOptions"]').on('change', function (a, b) {
    var value = this.value;
    $('.card').hide();
    if (value == 'Adults') {
        $('.card').filter(function (a, b) {
            var v;
            v = document.querySelectorAll('.Adults');
            return v
        }).show();
        $('.card.Kids').hide();
    }
    if (value == 'Kids') {
        $('.card').filter(function (a, b) {
            var v;
            v = document.querySelectorAll('.Kids');
            return v
        }).show();
        $('.card.Adults').hide();
    }
    if (value == 'All') {
        $('.card').show();
    }
});