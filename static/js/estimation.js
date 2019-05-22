var year = "1911";
var month = "1";
var MonthDay = [];

$(document).ready(function () {
    // sheet Document
    $('#sheet').children().on('click touchstart', function () {
        $('#sheet').find('.active').removeClass('active');
        $(this).addClass('active');
        $(this).find('input[name=radio]:checked~input').focus();
    });

    SelectBirthdayDays();

    $("#inputMonth").on("change", function () {
        SelectBirthdayDays();
    });

    $("#inputyear").on("change", function () {
        SelectBirthdayDays();
    });
});

function IsWholeNumber(n) {
    if (n.trim() == "")
        return false;

    var strCheck = "0123456789";

    for (var i = 0; i < n.length; ++i) {
        if (strCheck.indexOf(n[i]) == -1) {

            return false;
        }
    }

    return true;
}

//千分位
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//顯示日下拉選項
function SelectBirthdayDays() {
    year = $("#inputyear").val();
    month = $("#inputMonth").val();
    MonthDay = [];
    GetDaysInMonth(year, month);

    $("#inputDay").html("");

    $.each(MonthDay, function (index, value) {
        $("#inputDay").append($("<option></option>").attr("value", value).text(value));
    });
}

//取得月份天數
function GetDaysInMonth(year, month) {
    var d = new Date(year, month, 0).getDate();
    for (i = 1; i <= d; i++) {
        MonthDay.push(i);
    }
    return false;
}