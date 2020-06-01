define(function(require) {
    require('jquery');
    (function ($) {
    $.fn.compSearchBox = function () {
        $(function () {
            $('#click_event').click(function () {
                if ($('#hidden_enent').is(':hidden')) {
                    $(this).addClass("more_bg");
                    $('#hidden_enent').show();
                    $('#click_event').val('点击隐藏');
                } else {
                    $(this).removeClass("more_bg");
                    $('#hidden_enent').hide();
                    $('#click_event').val('点击显示');
                }
            });
            $('#click_event2').click(function () {
                if ($('#hidden_enent2').is(':hidden')) {
                    $(this).addClass("more_bg");
                    $('#hidden_enent2').show();
                    $('#click_event2').val('点击隐藏');
                } else {
                    $(this).removeClass("more_bg");
                    $('#hidden_enent2').hide();
                    $('#click_event2').val('点击显示');
                }
            });
        });
    }
})(jQuery);

$(document).click(function () {
    $("table :checkbox:first").change(function () {
        $(this).closest("table").find(":checkbox:not(:first)").prop("checked", this.checked);
    });
});
});
