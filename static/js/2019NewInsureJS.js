

        function getQueryStringParameterByKey(key, url) {
            if (!url) {
                url = window.location.href
            }
            key = key.replace(/[ \\[\] ]/g, '\\$&')
            var regex = new RegExp('[?&]' + key + '(=([^&#]*)|&|#|$)')
            let value = regex.exec(url)
            if (!value) return null
            if (!value[2]) return null
            if (value[2] === 'null') return null
            return decodeURIComponent(value[2].replace(/\+/g, ' '))
        }
// 同意書
$(".agree-box .ag-button").on('click', function () {
    var $this = $(this);
    var seq = $this.data("agreement");
    $("div[data-agreement='" + seq + "'].AgreementTitle div[name='AGRadioCheck']").addClass("Check").removeClass("NoCheck");

    if ($('.AgreementTitle div[name="AGRadioCheck"].NoCheck:visible').length == 0) {
        $("#SubmitQuery").prop("disabled", false).removeClass("footer-gary").addClass("footer-right");
    }
})
$(".AgreementContentShowBtn").on('click', function () {
    $('.ag-container').children('.ag-wrapper').children('.ag-background').toggle(false);
    $('.ag-container').children('.ag-wrapper').toggleClass('ag-maxheight', true);

    //直接算已閱讀
    $("div[name='AGRadioCheck']").addClass("Check").removeClass("NoCheck");
    $("#SubmitQuery").prop("disabled", false).removeClass("footer-gary").addClass("footer-right");
})
$(".AgreementContentNoShowBtn").on('click', function () {
    $('.ag-container').children('.ag-wrapper').children('.ag-background').toggle(true);
    $('.ag-container').children('.ag-wrapper').toggleClass('ag-maxheight', false);
})

//同意書
$('.ag-button').click(function () {
    $(this).animate({
        top: '-10px'
    }, 150, 'easeInOutCubic');
    $(this).animate({
        top: '10px'
    }, 150, 'easeInOutCubic', function () {
        // 收闔
        if ($(this).parent().children('.ag-container').children('.ag-wrapper').hasClass('ag-maxheight')){
            $('html,body').animate({ scrollTop: $(this).offset().top - 300 }, 500);
        }
        $(this).parent().children('.ag-container').children('.ag-wrapper').children('.ag-background').toggle();
        $(this).parent().children('.ag-container').children('.ag-wrapper').toggleClass('ag-maxheight');
    });
});


//radio area
$("input[type=radio].radio-circle").on("change", function () {
    var $this = $(this);
    var radioGroup = $this.attr("name");
    $("label[data-group='" + radioGroup + "'].radio-label").parents(".radio-group").children(".radio-item").removeClass("Check").addClass("NoCheck");
    $("label[data-group='" + radioGroup + "'][data-val='" + $("input[name='" + radioGroup + "']:checked").val() + "'].radio-label").parents(".radio-group").children(".radio-item").addClass("Check").removeClass("NoCheck");
})
$(document).ready(function () {
    $("input[type=radio].radio-circle").trigger("change")
})

// 向下箭頭變化
function DownBtn() {
    $(".next-setion").toggle(false);
    if ($(".row.main").height() > ($(window).height())) {
        var nextStepBtn = $(".confirm-btn-div:visible").offset();
        var hideMoment = nextStepBtn == undefined ? $("#EstimateSubmit").offset() : nextStepBtn;
        if (hideMoment == undefined || (hideMoment.top - $(window).scrollTop()) > $(window).height()) {
            $(".next-setion").toggle(true);
        } else {
            $(".next-setion").toggle(false);
        }
    }
}

function scrollTop() {
    $('html,body').animate({ scrollTop: 0 }, 0);
}

// 視窗滾動 向下箭頭變化
$(document).scroll(function () {
    DownBtn();
});

var targetView = "InsuranceInfo".toLowerCase();

window.onpageshow = function (e) {
    if (history.state != null && history.state.step != undefined) {
        // 如果回到流程最後一步則返回流程第一步，避免堆疊一直重複疊加
        if (history.state.flowCount > 1 && history.state.step == history.state.flowCount) {   
            window.history.go(-(history.state.flowCount - 1));
        }
    } else {
        if ($("div[data-step].insured-contain").length > 0) {
            // 新進頁面時改變當下的state為1
            history.replaceState({ step: 1, flowCount: $("div[data-step].insured-contain").length, path: location.pathname.toLowerCase() }, "", "");
        }
    }
    scrollTop();
    // 一進頁面時判斷向下箭頭是否隱藏
    DownBtn();

    // 如果不是投保頁的話加上session storage
    if (location.pathname.toLowerCase().indexOf(targetView) < 0) {
        window.sessionStorage["FromVerify"] = "1";
    }
};

// 如果在SPA同一頁按下返回鈕，則讀取當下state出來
// 需在.insured-contain的div上加上data-step來判斷步驟
// 第一步必須加上1
window.addEventListener("popstate", function (event) {
    if (event.state != null && event.state.step != undefined) {

        // 其他頁回來，避免返回造成資料遺失，重新載入頁面(來啟動fillInformation或清空)
        if (event.state.step == 1 && event.state.path.indexOf(targetView) >= 0 && window.sessionStorage["FromVerify"] == "1") {
            sessionStorage.removeItem('FromVerify');
            window.location.reload();
        }

        $(".insured-contain").hide();
        $(".EstimateResult").hide();
        $("div[data-step='" + (event.state.step) + "'].insured-contain").show();
        if (!$("div[data-step='" + (event.state.step) + "'].insured-contain").hasClass("can-not-go-back")) {
            $(".insured-title").show();
        }
        // 如果從OTP頁返回的話，就導回投保流程
        if ($("div[data-step='" + (event.state.step + 1) + "'].insured-contain").hasClass("can-not-go-back")) {
            window.history.go(-event.state.step);
        }
        setTimeout(scrollTop, 500);
        setTimeout(DownBtn, 500);
    }
    else {
        window.history.go(-1);
    }
});


// 開啟下一步(insured-contain)，需要下一步的按鈕要加next-step-jq
$(".next-step-jq").on('click', function () {
    var $this = $(this);
    $(".insured-contain").hide();
    var nowDom = $this.parents('.insured-contain'),
        step = nowDom.data("step"),
        i = 1,
        nextDom = $('div[data-step="' + (step + i) + '"].insured-contain');
    while (!nextArea(nextDom)) {
        i++;
        nextDom = $('div[data-step="' + (step + i) + '"].insured-contain');
    }
    if (nextDom.hasClass("can-not-go-back")) {
        // 到OTP步驟不可返回
        $(".insured-title").hide();
        if (nextDom.data("step") != undefined) {
            history.pushState({ step: nextDom.data("step"), flowCount: $("div[data-step].insured-contain").length, path: location.pathname.toLowerCase() }, "", "");
        }
    }
    else {
        if (nextDom.data("step") != undefined) {
            // 下一步改變當下的step狀態
            history.pushState({ step: nextDom.data("step"), flowCount: $("div[data-step].insured-contain").length, path: location.pathname.toLowerCase() }, "", "");
        }
    }
})

function nextArea(nextDom) {
    
    nextDom.show();
    scrollTop()
    setTimeout(DownBtn, 500);
    return nextDom.is(":visible");
}


$("#BackBtn").on('click', function () {
    history.back();
})

// OTP數字跳號
$(".otp-num").on('keyup', function () {
    if ($(this).val().length == 1) {
        var num = $(this).parent(".col-sm-2.otp-col-padding").nextAll('input.otp-num');
        if (num.length) num[0].focus();
    }
})

// CC數字跳號
$(".cc-num").on('keyup', function () {
    if ($(this).val().length == 4) {
        var cc = $(this).nextAll('input.cc-num');
        if (cc.length) cc[0].focus();
        else {
            $('select[name=cc_month]').focus()
        }
    }
})

$("select[name=cc_month]").on('keyup', function () {
    if ($(this).val().length == 2) {
        $('.cc-year').focus()
    }
})

$(".cc-year").on('keyup', function () {
    if ($(this).val().length == 2) {
        $('.cc-cvc').focus()
    }
})


// 共用取鄉鎮市func
// value:   city名稱
// id:      鄉鎮市下拉選單的ID
function GetCountyDropDownlist(valUrl, value, id) {
    if (value == "" || value == undefined || id == "" || id == undefined) {
        return;
    }
    var toSend = {
        cityName: value
    };

    $.ajax({
        type: "POST",
        url: valUrl,
        data: toSend,
        success: function (d) {
            // clear all items
            $("#" + id).html("");
            $("#" + id).append("<option value=\"\">請選擇鄉鎮地區</option>");
            $("#" + id).append(d);
        }
    });
}


function getQueryStringParameterByKey(key, url) {
	if (!url) {
		url = window.location.href
	}
	key = key.replace(/[ \\[\] ]/g, '\\$&')
	var regex = new RegExp('[?&]' + key + '(=([^&#]*)|&|#|$)')
	let value = regex.exec(url)
	if (!value) return null
	if (!value[2]) return null
	if (value[2] === 'null') return null
	return decodeURIComponent(value[2].replace(/\+/g, ' '))
}