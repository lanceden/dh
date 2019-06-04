
// 首頁輪播
function skl_mainBanner(view){
    _getsklIndexBannerData({
        target: view,
        callback: function(config){
            var target = config.target,
                res = config.datas;

            if( res.hasOwnProperty('datas') ){

                var slider_div = $('<div class="ga-silder" style="display:none;"></div>').appendTo(target);

				var promoLiArray = [];
				var liArray = [];
				var originalValue = GardenUtils.browser.getCookie({name : 'garden_promo'});

				var array = originalValue.split('|');
                $.each(res.datas, function(i, data){
                
                    var url = (data.hasOwnProperty('url')? data.url : '');
					var promoType = (data.hasOwnProperty('promo_type')? data.promo_type : '');
					
					var content = '<li style="background-image:url('+data.img_url+');">'
	                            +'<div class="persfinance-slide-img-in"><div class="persfinance-slide-img-in-maxwi">'
	                            +'<div>'+data.description+'</div></div></div></li>';
	                
	                if(url != '') {
	                    content = '<li style="background-image:url('+data.img_url+');">'
	                        +'<a href="'+url+'" target="_blank"><div class="persfinance-slide-img-in"><div class="persfinance-slide-img-in-maxwi">'
	                        +'<div>'+data.description+'</div></div></div></a></li>';
	                }

					//如果後台有丟這個輪播是推哪個行銷
					if(promoType != undefined && promoType != '' && $.inArray(promoType,array) != -1) {
						promoLiArray.push('<div class="ga-item"  ga-page-title="'+data.title+'">'+content+'</div>');
					}
					else {
						liArray.push('<div class="ga-item"  ga-page-title="'+data.title+'">'+content+'</div>');
					}
                    
                });
				
				slider_div.append(promoLiArray.join('') + liArray.join(''));
            } // end if: datas

            //target.empty();

            if( target.children().length > 0 ){
                // GardenUtils.plugin.slider({
                //     target: target,
                //     options: {
                //         pageType: 'text',
                //         pageClass: 'persfinance-li-sty',
                //         pageContainerClass: 'persfinance-slide-lists'
                //     },
                //     datas: datas
                // });
                GardenUtils.plugin.slider({
                    target: target,
                    options: {
                        items: 1,
                        carouselClass: 'skl-mainBanner',
                        margin: 0,
                        page: {
                            type: 'text'
                        }
                    },
                    callback: function( target ){
                        target.find('.ga-silder').hide();
                    }
                });
            }
        }
    }); // end call _getsklIndexBannerData

} // end skl_mainBanner function

function _getsklIndexBannerData(conf){

    $.ajax({
        url: ajaxPrefix + 'jsp/slider.jsp?typeId=48239c5e8a9141c6b8cc98b470ad8a16&v=' + new Date().getTime(), 
        dataType: 'json',
        success:function(json) {
            conf['datas'] = json;
            conf.callback(conf);
        }
    });
} // end _getsklIndexBannerData function

// 首頁登入區塊
function skl_mainlogin(view){
    
    // login qr-code
    view.find('.loginrbg').on('click', function(){
        $('.QRcodeArea').fadeIn();

    });

    view.find('.qr-close').on('click', function(){
        $('.QRcodeArea').fadeOut();

    });
} // end skl_mainlogin function

// 首頁熱門產品服務
function skl_hot_service(view){
    _getIndexHotService({
        target: view,
        callback: function(config){

            var target = config.target,
                res = config.datas;

            var ul = $('<ul class="margo_lulu skbankindex-left-k ga-title-collapse-content" id="hot_service"></ul>').appendTo(target);
            
            var liArray = [];
            $.each(res.hotProducts,function(i,hotProduct){
                var typeName = hotProduct.typeName;
                var typeImg = hotProduct.typeImg;
                var typeUrl = hotProduct.typeUrl;

                // var li = $('<li><h3 class="calvin">'+typeName+'</h3>'
                //     +'<div class="bgimg" style="background-image:url('+typeImg+')"></div>'
                //     +'<div class="margotxt"><ul class="homer"></ul></div>'
                //     +'<a href="'+typeUrl+'" class="tony">瞭解更多</a></li>');


                // var productArray = [];
                // $.each(hotProduct.products,function(j,product){
                //     productArray.push('<li><a href="'+product.url+'">'+product.title+'</a></li>');
                // });
                
                // li.find('.margotxt > ul').append(productArray.join(''));
                // liArray.push('<li class="index-left-item-k">' + li.html() + '</li>');

                // var li = $('<li class="index-left-item-k"><h3 class="">'+typeName+'</h3>'
                //     +'<div class="bgimg" style="background-image:url('+typeImg+')"></div></li>').appendTo( ul );

                // $.each(hotProduct.products,function(j,product){
                //     li.append('<div class="margotxt"><p class="product-title">'+product.title+'</p>'
                //         +'<p class="e-down-list-txt">'+product.featureContent+'</p></div>'
                //         +'<a href="'+product.url+'" class="tony">瞭解更多</a>');
                // });
//0220 Bill update
                $.each(hotProduct.products,function(j,product){
                    var li=$('<li class="index-left-item-k"><a href="'+product.url+'"><h3 class="">'+typeName+'</h3>'
                    +'<div class="bgimg" style="background-image:url('+typeImg+')"></div>'
                    +'<div class="margotxt"><p class="product-title">'+product.title+'</p>'
                        +'<p class="e-down-list-txt">'+product.featureContent+'</p></div></a>'
                        +'<a href="'+typeUrl+'" class="tony">更多商品</a></li>').appendTo( ul );
                });
                
            });
        }
    });
} // end skl_hot_service function

function _getIndexHotService(conf){
    $.ajax({
        //url: ajaxPrefix + 'mock/indexHotService.json?v='+ new Date().getTime(),
        url: ajaxPrefix + 'jsp/hotProductsInfo.jsp?v=' + new Date().getTime(),
        dataType: 'json',
        success:function(json) {
            if(typeof json == 'string') json = $.parseJSON(json);
            conf['datas'] = json;
            conf.callback(conf);
        }
    });
} // end _getIndexHotService function

// 首頁保戶服務
function skl_insured_services(view){
    _getIndexInsuredService({
        target: view,
        callback: function(config){

            var target = config.target,
                res = config.datas;

            if( res.hasOwnProperty('datas') ){

                // has title
                var title_ele = target.find('[href="#insured_service"]');
                if( res.datas.hasOwnProperty('title') ){
                    title_ele.text(res.datas.title);
                } else {
                    title_ele.hide();
                }

                // has link
                var link_ele = target.find('#insured_service_link a');
                if( res.datas.hasOwnProperty('link') ){
                    link_ele.text(res.datas.link.text);
                    link_ele.attr('href', res.datas.link.url);
                    link_ele.attr('target', '_blank');
                } else {
                    link_ele.hide();
                }

                // has content
                var content_ele = target.find('#insured_service_content');
                if( res.datas.hasOwnProperty('content') ){
                    var content = res.datas.content;
                    $.each(content, function(i, insuredService){
                        content_ele.append('<div class="skinsurance-003 index-right-forrd"><a href="'+insuredService.url+'">'
                            +'<div class="index-r"><div class="index-r-pic">'
                            +'<img src="'+insuredService.img_url+'" alt=""></div>'
                            +'<div class="index-r-txt"><h4>'+insuredService.title+'</h4>'
                            +'<ul><li><p>'+insuredService.description+'</p></li></ul>'
                            +'</div></div></a></div>');
                    });
                }
            } // end if: datas exist
        }
    });
} // end skl_insured_services function

function _getIndexInsuredService(conf){
    $.ajax({
        //url: ajaxPrefix + 'mock/indexInsuredService.json?v='+ new Date().getTime(),
        url: ajaxPrefix + 'jsp/PolicyholdersServiceInfo.jsp?v=' + new Date().getTime(),
        dataType: 'json',
        success:function(json) {
            if(typeof json == 'string') json = $.parseJSON(json);
            conf['datas'] = json;
            conf.callback(conf);
        }
    });
} // end _getIndexInsuredService function

// 首頁最新消息
function skl_news(view){
    var target = view.find('#skl-whole-news');

    _getIndexNewsData({
        target: target,
        callback: function(config){
            var gaTab_obj = {
                target: target,
                options: {
                    tabTitleContainerClass: 'tab_level2_red',
                    mobileActionType: 'tab'
                },
                datas: [{
                    id: 'sk_news',
                    name: '新光快訊',
                    attr: 'typeId="000102"'
                },{
                    id: 'financial_info',
                    name: '理財快訊'
                },{
                    id: 'investment_news',
                    name: '投資重大訊息',
                    attr: 'typeId="000101"'
                }]
            };

            

            gaTab_obj['callback'] =  function(config){

                var target = config.target,
                    id = target.attr('id'),
                    typeId = target.attr('typeId');

                if(id != 'financial_info') {

                    var moreUrl = '';
                    switch(id){
                        case 'sk_news':
                            moreUrl = '0989a3a114.html';
                            break;
                        case 'investment_news':
                            moreUrl = '863ee37f14.html';
                            break;
                    };

                    GardenUtils.plugin.listNews({
                        target: target,
                        ajaxUrl: 'jsp/News.jsp',
                        typeId: typeId,
                        recsOfPage: 5,
                        isPagination: false,
                        knowMoreUrl: moreUrl/*,
                        knowMoreTxt: 'More',
                        knowMoreClass: 'know-more'*/
                    });
                } else {
                    if(target.find('iframe').length == 0) {
						var iframe = $('<iframe id="SysJustIFRAME" frameborder="0" scrolling="no" width="100%" src="https://sklife.moneydj.com/w/wu/wu01s.djhtm"/>');
						
						iframe.appendTo(target);
					}
                }
            }; // end callback: tab content

            _createGATab(gaTab_obj);
        }
    });
} // end skl_news function

function _getIndexNewsData(conf){
    $.ajax({
        url: ajaxPrefix + 'jsp/News.jsp?typeId='+conf.typeId+'&v=' + new Date().getTime(),
        dataType: 'json',
        success:function(json) {
            if(typeof json == 'string') json = $.parseJSON(json);
            conf['datas'] = json;
            conf.callback(conf);
        }
    });
} // end _getIndexNewsData function

// 首頁宣告利率
function skl_ratio(view){
    var target = view.find('#ratio');

    _getIndexRatioData({
        target: target,
        callback: function(config){
            var target = config.target,
                datas = config.datas;

            if(datas.hasOwnProperty('content')){
                target.append('<div class="skl-table-ratio"><div class="table-scroll">'
                    +'<div class="skl-table-title"><span class="column-text1"></span>'
                    +'<span class="column-text2">開賣日期</span>'
                    +'<span class="column-text3">宣告利率</span></div>'
                    +'<ul class="skl-content"></ul>'
                    //+'<div class="know-more"><a href="91d9af4914.html">MORE</a></div>'
                    +'<div class="knowMore"><a href="91d9af4914.html" class="index-new-btn-k">瞭解更多</a></div>'
                    +'</div></div>');

                var content_ul = target.find('ul.skl-content');
                $.each(datas.content, function(i, ratioObj){
                    content_ul.append('<li><span class="column-text1">'+ratioObj.name+'</span>'+
                        '<span class="column-text2">'+ratioObj.startdate+'</span>'
                        +'<span class="column-text3">'+ratioObj.rate+'</span></li>');
                });
            }
        }
    });
} // end skl_ratio function

function _getIndexRatioData(conf){
    $.ajax({
        url: ajaxPrefix + 'jsp/rate.jsp?action=sklife&intIsClose=2&v=' + new Date().getTime(),
        dataType: 'json',
        success:function(json) {
            if(typeof json == 'string') json = $.parseJSON(json);
            conf['datas'] = json;
            conf.callback(conf);
        }
    });
} // end _getIndexRatioData function

// 首頁下方活動輪播
function skl_events_slider(view){
     _getIndexEventData({
        target: view.find('#skl-eventslider'),
        callback: function(config){
            var target = config.target,
                res = config.datas;

            if( res.hasOwnProperty('datas') ){

                var slider_div = $('<div class="ga-silder" style="display:none;"></div>').appendTo(target);

                $.each(res.datas, function(i, data){
                
                    var url = (data.hasOwnProperty('url')? data.url : '');
                    var content = '<div>'
                        +'<div class="acti-slider-item-top-img" style="background-image:url('+data.img_url+')"></div>'
                        +'<div class="skl-event-text"><h1 class="skl-event-title">'+data.title+'</h1>'
                        +'<div class="skl-event-text">'+data.description+'</div></div></div>';
                
                    if(url != '') {
                        content = '<a href="'+url+'" target="_blank">'
                            +'<div class="acti-slider-item-top-img" style="background-image:url('+data.img_url+')"></div>'
                            +'<div class="skl-event-text"><h1 class="skl-event-title">'+data.title+'</h1>'
                            +'<div class="skl-event-text">'+data.description+'</div></div</a>';
                    }

                    slider_div.append('<div class="ga-item">'+content+'<div>');
                });
            } // end if: datas

            //target.empty();

            if( target.children().length > 0 ){
                GardenUtils.plugin.slider({
                    target: target,
                    options: {
                        isFull: false,
                        items: 3,
                        itemsClass: 'acti-slider-item',
                        navigation: {
                            isDisable: false,
                            prevClass: 'event-slider-prev',
                            nextClass: 'event-slider-next'
                        },
                        responsive: {
                            768: {
                                items: 1
                            },
                            1024: {
                                items: 3
                            }
                        }
                    },
                    callback: function( target ){
                        target.find('.ga-silder').hide();
                    }
                });
            }
        }
    }); // end call _getIndexEventData
} // end skl_events_slider function

function _getIndexEventData(conf){

    $.ajax({
        url: ajaxPrefix + 'jsp/slider.jsp?typeId=99e1cd3b1b8f4c29b77c881941514dbf&v=' + new Date().getTime(), 
        dataType: 'json',
        success:function(json) {
            conf['datas'] = json;
            conf.callback(conf);
        }
    });
} // end _getsklIndexBannerData function

// 英文版首頁下方輪播
function index_en_slider(view){
     _getIndexEnData({
        target: view,
        callback: function(config){
            var target = config.target,
                res = config.datas;

            if( res.hasOwnProperty('datas') ){

                var slider_div = $('<div class="ga-silder" style="display:none;"></div>').appendTo(target);

                $.each(res.datas, function(i, data){
                
                    var url = (data.hasOwnProperty('url')? data.url : '');
                    var content = '<div><div class="acti-slider-item-top-img" style="background-image:url('+data.img_url+')"></div>'
                        +'<div class="skl-event-text"><h1 class="skl-event-title">'+data.title+'</h1>'
                        +'<div class="skl-event-text">'+data.description+'</div></div></div>';
                
                    if(url != '') {
                        content = '<a href="'+url+'" target="_blank">'
                            +'<div class="acti-slider-item-top-img" style="background-image:url('+data.img_url+')"></div>'
                            +'<div class="skl-event-text">'
                            +'<h1 class="skl-event-title">'+data.title+'</h1>'
                            +'<div class="skl-event-text">'+data.description+'</div></div></a>';
                    }

                    slider_div.append('<div class="ga-item">'+content+'</div>');
                });
            } // end if: datas

            //target.empty();

            if( target.children().length > 0 ){
                GardenUtils.plugin.slider({
                    target: target,
                    options: {
                        isFull: false,
                        items: 3,
                        itemsClass: 'acti-slider-item',
                        navigation: {
                            isDisable: false,
                            prevClass: 'event-slider-prev',
                            nextClass: 'event-slider-next'
                        },
                        responsive: {
                            768: {
                                items: 1
                            },
                            1024: {
                                items: 3
                            }
                        }
                    },
                    callback: function( target ){
                        target.find('.ga-silder').hide();
                    }
                });
            }
        }
    }); // end call _getIndexEnData
} // end index_en_slider function

function _getIndexEnData(conf){

    $.ajax({
        url: ajaxPrefix + 'jsp/slider.jsp?typeId=33ba7cad166f44f5be6c19d14c1ef928&v=' + new Date().getTime(), 
        dataType: 'json',
        success:function(json) {
            conf['datas'] = json;
            conf.callback(conf);
        }
    });
} // end _getIndexEnData function

// 新聞一覽
function newsList(view){

	var defaultPageNo = '1';
	var search = location.search;
	var typeId = '';
	if(search.indexOf('page') != -1) {
		search = search.substring(1,search.length);

		var params = search.split('&');
		$.each(params,function(i,param){
			if(param.indexOf('=') != -1) {
				var paramName = param.split('=')[0];
				var paramValue = param.split('=')[1];
				
				if(paramName == 'page') {
					defaultPageNo = paramValue;
				}
				else if(paramName == 'typeId') {
					typeId = paramValue;
				}
			}
		});
	}

    _getSklifeNewsType({
        target: view.find('#newsList_data #newsSelect'),
        callback: function(config){
            var target = config.target,
                datas = config.datas;

            if($(datas).find('Type').length != 0){
                $(datas).find('Type[name="ROOT"] > Type').each(function(){
                    $('<option value="'+$(this).attr('id')+'">'+$(this).attr('name')+'</option>').prependTo(target);
                });

                $(target).on('change', function(){
                    var target = $('#newsList_data #newsList_content'),
                        selected_year = $(this).val();

                    GardenUtils.plugin.listNews({
                        target: target,
                        ajaxUrl: 'jsp/SklifeNewsInfo.jsp',
                        typeId: selected_year,
						page : defaultPageNo,
                        recsOfPage: 10,
                        isPagination: true,
                        hasGoToPage: false
                    });
                });

				if(typeId != '') {
					$(target).val(typeId).trigger('change');
				}
				else {
					$(target).val($(target).children().first().val()).trigger('change');
				}
                
            }
        } // end callback
    }); // end call: _getSklifeNewsType
} // end newsList function

function _getSklifeNewsType(conf){
    $.ajax({
        //async: false,
        url: ajaxPrefix + 'jsp/SklifeNewsType.jsp?v=' + new Date().getTime(), 
        dataType: 'xml',
        success:function(xml) {
            conf['datas'] = xml;
            conf.callback(conf);
        }
    });
} // end _getSklifeNewsType function

// 投資重大訊息
function investmentNews(view){
    if (view.find('#investmentNews_data').length == 0) {
        $('<div id="investmentNews_data"></div>').appendTo(view);
    }
	
	var defaultPageNo = '1';
	var search = location.search;
	var typeId = '';
	if(search.indexOf('page') != -1) {
		search = search.substring(1,search.length);

		var params = search.split('&');
		$.each(params,function(i,param){
			if(param.indexOf('=') != -1) {
				var paramName = param.split('=')[0];
				var paramValue = param.split('=')[1];
				
				if(paramName == 'page') {
					defaultPageNo = paramValue;
				}
				else if(paramName == 'typeId') {
					typeId = paramValue;
				}
			}
		});
	}

    GardenUtils.plugin.listNews({
        target: view.find('#investmentNews_data'),
        ajaxUrl: 'jsp/News.jsp',
        typeId: '000101',
		page : defaultPageNo,
        recsOfPage: 10,
        isPagination: true,
        hasGoToPage: true
    });
} // end investmentNews function

// 利變商品宣告利率
function rateQuery(view){

    var content_div = view.find('#rateQuery');
    if( !content_div.prev().hasClass('rateCurrentMonth') ){
        var currentMonth = _getRateMonth();
        content_div.before('<div class="st-content-row rateCurrentMonth">'
            +'<h4>宣告利率年月：'+currentMonth+' N/A：當月未銷售或尚未宣告</h4></div>');
    }

    _getRateTypeData({
        target: content_div,
        callback: function(config){

            config['createTabContent'] = function(config){

                config['callback'] = function(conf){
                    _createRateContent(conf);
                };

                _getRateData(config);
            };

            _createRecursiveTab(config);
        }
    }); // end _getRateTypeData function
} // end rateQuery function

function _getRateMonth(){
    var currentMonth = '';
    $.ajax({
        async: false,
        url: ajaxPrefix + 'jsp/SklifeRate.jsp?v=' + new Date().getTime(), 
        dataType: 'json',
        success:function(json) {
            if(typeof json == 'string'){
                json = $.parseJSON(json);
            }
            currentMonth = (json.hasOwnProperty('currentMonth')? json.currentMonth: '');
        }
    });
    return currentMonth;
} // end _getRateMonth function

function _getRateTypeData(conf){
    var resp = {};
    $.ajax({
        //async: false,
        url: ajaxPrefix + 'mock/rateType.xml?v=' + new Date().getTime(),
        //url: ajaxPrefix + 'jsp/rate.jsp?intIsClose=2&v=' + new Date().getTime(), 
        dataType: 'xml',
        success:function(xml) {
            conf['datas'] = xml;
            conf.callback(conf);
        }
    });
} // end _getRateTypeData function

function _getRateData(conf){
    conf = $.extend({page: 1, pageSize:'', year:''}, conf);

    var mockUrl = 'rateData'+conf.page+'.json';
    if( conf.hasOwnProperty('typeId') && (conf.typeId == 'GOV10' || conf.typeId == 'CFT2Y') ){
        mockUrl = 'rateInsideData.json';
    }

    var resp = {};

    var keyword = (conf.hasOwnProperty('keyword')? encodeURIComponent(conf.keyword) : '');//conf.target.find('input').val();
    var addition = (keyword!=''&&keyword!=undefined) ? '&keyword='+keyword : '' ;
    //console.log('yoooooo', conf.target, keyword);

    $.ajax({
        async: false,
        //url: ajaxPrefix + 'mock/'+mockUrl+'?v=' + new Date().getTime(), 
        url: ajaxPrefix + 'jsp/SklifeRate.jsp?action='+conf.typeId+'&year='+conf.year+'&pageSize='+conf.pageSize+'&page='+conf.page+ addition + '&v=' + new Date().getTime(), 
        dataType: 'json',
        success:function(json) {
            conf['datas'] = json;
            conf.callback(conf);
        }
    });
} // end _getRateData function

function _createRateContent(conf){
    var target = conf.target.empty(),
        datas = conf.datas,
        typeId = target.attr('id');

    if( target.find('div.RateContent').length == 0 ){
        var content_div = $('<div class="RateContent"></div>').appendTo( target );
    }

    if(typeId == 'rate' || typeId == 'historicalrate' ){
        target.prepend('<div class="skinsurance-search-block search-rate" style="position: relative;display: inline-block;width: 100%;padding-bottom: 10px;"><div class="search-pic" style="cursor: pointer;"><img src="img/skinsu-productserv-46.png"></div><input type="text" name="keyword" placeholder="請輸入商品關鍵字"></div>');
        target.find('.search-pic img').on('click',function(e){
            conf['keyword'] = $(this).parents('.search-rate').first().find('input').val();
            //target.find('.bottom_pagination').remove();
            conf.target = target.find('div.RateContent').first().empty();
            conf.callback = function(config){
                createRateTableContent(config);
            };
            _getRateData(conf);
        });
        // target.find('.search-rate button').on('click',function(e){
        //     $(this).parents('.search-rate').first().find('input').val('');
        //     $(this).parents('.search-rate').first().find('.search-pic img').trigger('click');  
        // });
        target.find('.search-rate input').keydown(function (e){
            if(e.keyCode == 13){
                $(this).parents('.search-rate').first().find('.search-pic img').trigger('click'); 
            }
        })
    }

    if( typeId == 'GOV10' || typeId == 'CFT2Y' ){
        if( datas.hasOwnProperty('content') ){
            datas = datas.content[0];

            var typeName = $('[href="#'+typeId+'"]').text();

            content_div.append('<div class="st-content-row"><h4>'+datas.rate+'</h4></div>'
                +'<div class="shareblock sklife-inside"><div class="form-group">'
                +'<label class="col-xs-6  col-md-4 sharelabel">選擇年度利率</label>'
                +'<div class="col-xs-6  col-md-4 inside-select">'
                +'<select class="n-form-select w100 rateDateSelect"><option value="">請選擇</option></select></div></div></div>'
                +'<div class="st-content-row"><h3 class="rateDateTitle"></h3></div>'
                +'<div class="tableDiv"></div>');

            if( datas.hasOwnProperty('year') && datas.year.length > 0 ){
                $.each(datas.year, function(i, yearObj){
                    content_div.find('.rateDateSelect').append('<option value="'+yearObj.key+'">'+yearObj.value+'</option>');
                });

                content_div.find('.rateDateTitle').text(datas.year[datas.year.length-1].value+'年度'+typeName);

                content_div.find('.rateDateSelect').on('change', function(){
                    var selected_rateDate_val = $(this).children(':selected').val(),
                        selected_rateDate_txt = $(this).children(':selected').text();
                    content_div.find('.rateDateTitle').text(selected_rateDate_txt+'年度'+typeName);
                    conf['year'] = selected_rateDate_val;
                    conf['target'] = content_div.find('.tableDiv');
                    conf['callback'] = function(config){
                        var target = config.target,
                            datas = config.datas;

                        if( datas.hasOwnProperty('content') ){
                            datas = datas.content[0];

                            if( datas.hasOwnProperty('datas') && datas.datas.length > 0 ){
                                _createRateTable({
                                    target: target,
                                    datas: datas.datas
                                });
                            }
                        }
                    };
                    _getRateData(conf);
                });
            }

            if( datas.hasOwnProperty('datas') && datas.datas.length > 0 ){
                _createRateTable({
                    target: content_div.find('.tableDiv'),
                    datas: datas.datas
                });
            }
        } // end if: data exist
        else {
            content_div.append('<div class="st-content-row"><h3>暫無資料！</h3></div>');
        }
    } else {
        conf.target = content_div;
        createRateTableContent(conf);
    }
} // end _createRateContent function

function createRateTableContent(conf){
    var target = conf.target;
    var datas = conf.datas;

    if( target.find('div.RateTableContent').length == 0 ){
        var table_content_div = $('<div class="RateTableContent"></div>').appendTo( target );
    }

    if( target.find('.bottom_pagination').length == 0 ){
        var paginationEle = $('<div class="bottom_pagination"></div>').appendTo( target );

        console.log('paginationEle', datas.pageInfo);

        GardenUtils.display.pagination({
            pageInfo: datas.pageInfo,
            target: target.find('.bottom_pagination').empty(),
            hasGoToPage: true,
            getPageInfoCallBackFn: function(pageNum){
                conf.page = pageNum;
                conf.target = table_content_div;
                conf.callback = function(config){
                    config['datas'] = ( config.datas.hasOwnProperty('content')? config.datas.content:[] );

                    if( config.datas.length > 0 ){
                        _createRateTable(config);
                    } else {
                        config.target.find('.tablescroll tbody').empty();
                        config.target.find('.st-content-row').remove();
                        config.target.append('<div class="st-content-row"><h3>查無資料！</h3></div>');
                    }
                };

                _getRateData(conf);
            }
        });
    }
}

function _createRateTable(config){
    var target = config.target,
        datas = config.datas;

    //console.log('_createRateTable', config);

    if( datas.length > 0 ){

        target.empty();

        target.append('<div class="tablescroll">'
            +'<table class="ratetable"></table></div>');

        var thead = $('<thead></thead>').appendTo( target.find('table') ),
            tbody = $('<tbody></tbody>').appendTo( target.find('table') );

        var rowStart = 0;
        $.each(datas, function(i, data){

            if( data.hasOwnProperty('title') ){
                ++rowStart;
                target.parents('.RateContent').first().find('.rateDateTitle').text(data.title);
            }

            if( data.hasOwnProperty('row') ){
                if( i==rowStart ) var tr_thead = $('<tr></tr>').appendTo( thead );
                var tr_tbody = $('<tr></tr>').appendTo( tbody );

                $.each(data.row, function(j, obj){
                    var value = obj.hasOwnProperty('link') ? ('<a href="rateQueryDetail.html'+obj.link+'">'+obj.value+'</a>'):obj.value;

                    if( i==rowStart ){
                        tr_thead.append('<th>'+obj.displayText+'</th>');
                    }

                    tr_tbody.append('<td>'+value+'</td>');
                });
            }
        });

        var rateTable = target.find('.ratetable');
        if( rateTable.width() > rateTable.parent().width() ){
            rateTable.parent().css({
                overflowX: 'scroll'
            });
        }
    } // end if: check data exist
}; // end _createRateTable function

function rateQueryDetail(view){
    view.append('<div class="skholdings-015-main-page-sub-title"><div class="imsquare"></div>'
        +'<p>利變商品宣告利率</p>'
        //+'<div class="arrow-icon"><img src="img/arrow-to-top.png"/></div>'
        +'</div><div class="RateContent"></div>');

    var href = window.location.href,
        param_str = href.indexOf('?')!=-1? href.split('?')[1]: '',
        param_arr = param_str.indexOf('&')!=-1? href.split('&'): [],
        product = '',
        ProductSN = '',
		type = '';

    if(param_arr.length > 0){
        $.each(param_arr, function(i, param){
            if(param.indexOf('product')!=-1){
                product = param.split('=')[1];
            } else if(param.indexOf('ProductSN')!=-1){
                ProductSN = param.split('=')[1];
            } else if(param.indexOf('type')!=-1){
                type = param.split('=')[1];
            }
        });
    }

    _getRateDetailData({
        target: view.find('.RateContent'),
        product: product,
        ProductSN: ProductSN,
		type : type,
        callback: function(config){
            var datas = config.datas;
            if(datas.hasOwnProperty('content')) datas = datas.content[0];
            else datas = {};

            config['datas'] = datas;

            _createRateDetailContent(config);
        }
    });
} // end rateQueryDetail function

function _getRateDetailData(conf){
    conf = $.extend({year:''}, conf);

    var resp = {};
    $.ajax({
        async: false,
        url: ajaxPrefix + 'jsp/DeclaredInterestInfo.jsp?type='+conf.type+'&product='+conf.product+'&ProductSN='+conf.ProductSN+'&year='+conf.year+'&v=' + new Date().getTime(), 
        dataType: 'json',
        success:function(json) {
            conf['datas'] = json;
            conf.callback(conf);
        }
    });
} // end _getRateDetailData function

function _createRateDetailContent(conf){
    var target = conf.target,
        datas = conf.datas;

    if(datas.hasOwnProperty('desc')){
        target.append('<div class="noscroll">'
            +'<table class="ratetable"></table></div>');

        var tbody = $('<tbody></tbody>').appendTo( target.find('table') );

        $.each(datas.desc, function(i, data){
            if( data.hasOwnProperty('row') ){
                $.each(data.row, function(j, obj){
                    tbody.append('<tr><th>'+obj.displayText+'</th>'
                        +'<td>'+obj.value+'</td></tr>');
                });
            }
        });
    }

    if( datas.hasOwnProperty('year') && datas.year.length > 0 ){

        target.append('<div class="shareblock sklife-inside"><div class="form-group">'
                +'<label class="col-xs-6  col-md-4 sharelabel">選擇年度利率</label>'
                +'<div class="col-xs-6  col-md-4 inside-select">'
                +'<select class="n-form-select w100 rateDateSelect"><option value="">請選擇</option></select></div></div></div>'
                +'<div class="sharenote"><ul class="sharenoteul"><li><span>註:</span>若該年度無法查詢，則表示該年度各月份皆未宣告。</li></ul></div>');

        $.each(datas.year, function(i, yearObj){
            target.find('.rateDateSelect').append('<option value="'+yearObj.key+'">'+yearObj.value+'</option>');
        });

        target.find('.rateDateSelect').on('change', function(){
            var selected_rateDate_val = $(this).children(':selected').val();
            conf['year'] = selected_rateDate_val;
            conf['target'] = target.find('.tableDiv');
            conf['callback'] = function(config){
                var target = config.target,
                    datas = config.datas;

                if( datas.hasOwnProperty('content') ){
                    datas = datas.content[0];

                    if( datas.hasOwnProperty('datas') && datas.datas.length > 0 ){
                        _createRateTable({
                            target: target,
                            datas: datas.datas
                        });
                    }
                }
            };
            _getRateDetailData(conf);
        });
    }

    if( datas.hasOwnProperty('datas') && datas.datas.length > 0 ){

        target.append('<div class="st-content-row"><h3 class="rateDateTitle"></h3></div>'
            +'<div class="tableDiv"></div>');

        _createRateTable({
            target: target.find('.tableDiv'),
            datas: datas.datas
        });
    }
} // end _createRateDetailContent function

function rateQuery_left(view){
    menu_left(view, '投資理財');
} // end rateQuery_left function

// 特約醫院及檢驗所
function spech(view){
    view.append('<h3 class="skinsurance-005-contentTitle"><span></span>特約醫院及檢驗所</h3>');
    view.append('<div id="spech_content"></div>');

    // create tab
    _createGATab({
        target: view.find('#spech_content'),
        options: {
            tabTitleContainerClass: 'tab_red'
        },
        datas: [{
            id: 'hosp',
            name: '特約醫院/診所'
        },{
            id: 'mt',
            name: '特約檢驗所'
        },{
            id: 'quality',
            name: '優體醫院'
        }],
        callback: function(config){ // 長 tab content
            var target = config.target;

            if( target.children().length == 0 ){
                var city_filter = $('<div class="skinsurance-011-insideHeader"><div>'
                        +'<p>請選擇欲查詢的縣市區域</p></div>'
                        +'<div class="service-place"><div class="hosptselect"><select name="" id="city_filter"></select></div>'
                        +'<div class="hosptselect"><select name="" id="area_filter"></select></div></div>'
                        +'<div class="hosptselectbtn"><a href="#" class="searchBtn">確認查詢</a></div></div>').appendTo( target ),
                    title_div = $('<div class="skinsurance-hospitalItem-container"><div>'
                        +'<span class="item">體檢項目</span><div>'
                        +'<span class="skinsurance-hospitalItem"><span class="red">A</span> : 體檢</span>'
                        +'<span class="skinsurance-hospitalItem"><span class="yellow">B</span> : 心電圖</span>'
                        +'<span class="skinsurance-hospitalItem"><span class="blue">C</span> : X光</span>'
                        +'<span class="skinsurance-hospitalItem"><span class="coffee">D</span> : 抽血</span></div></div>'
                        +'<div><span class="item">可抽檢3%</span><div>3%</div></div></div>').appendTo( target ),
                    result_div = $('<div id="spech_result"></div>').appendTo( target );

                // 取得縣市資料
                var firstGetCity = true;
                _getCityData({
                    target: city_filter.find('select#city_filter'),
                    ctype: 0,
                    atype: 1,
                    callback: function(config){
                        var target = config.target,
                            datas = config.datas;

                        //target.empty().append('<option value="">全區</option>');

                        if(datas.hasOwnProperty('data')){
                            $.each(datas.data, function(i, cityObj){
                                target.append('<option value="'+cityObj.cityId+'">'+cityObj.cityName+'</option>');
                            });
                        } // end if: city data exist

                        target.val('2').trigger('change');
                    }
                }); // end call: _getCityData

                city_filter.find('select#city_filter').on('change', function(){
                    _getCityData({
                        target: city_filter.find('select#area_filter'),
                        city: $(this).val(),
                        ctype: 0,
                        atype: 1,
                        callback: function(config){
                            var target = config.target,
                                datas = config.datas;

                            target.empty().append('<option value="">全區</option>');

                            if(datas.hasOwnProperty('data')){
                                $.each(datas.data, function(i, areaObj){
                                    target.append('<option value="'+areaObj.cityId+'">'+areaObj.cityName+'</option>');
                                });
                            } // end if: city data exist

                            if(firstGetCity){
                                city_filter.find('.searchBtn').trigger('click');
                                firstGetCity = false;
                            }
                        }
                    }); // end call: _getCityData
                });

                // trigger 縣市
                city_filter.find('.searchBtn').off('click').on('click', function(ev){
                    ev.preventDefault();

                    var city_select = city_filter.find('select#city_filter'),
                        selected_city = city_select.children(':selected').val(),
                        area_select = city_filter.find('select#area_filter'),
                        selected_area = area_select.children(':selected').val();

                    _getSpechData({
                        target: result_div,
                        type: target.attr('id'),
                        city: selected_city,
                        area: selected_area,
                        callback: function(config){
                            _createSpechContent(config);
                        }
                    });
                }); // end click: city_filter search
                //city_filter.find('.searchBtn').trigger('click');
            } // end if: content exist
        }
    }); // end call: _createGATab
} // end spech function

// 取得縣市
function _getCityData(config){ // ctype, atype: 0=數字, 1=中文
    config = $.extend({
        city: '',
        ctype: 0,
        atype: 0
    }, config);

    var url_uri = encodeURI('city='+config.city+'&ctype='+config.ctype+'&atype='+config.atype);

    $.ajax({
        //url: ajaxPrefix + '/mock/city.json?v=' + new Date().getTime(),
        url: ajaxPrefix + 'jsp/city.jsp?'+url_uri+'&v=' + new Date().getTime(), 
        dataType: 'json',
        success:function(json) {
            if( typeof json == 'string' ) json = $.parseJSON(json);
            config['datas'] = json;
            config.callback( config );
        }
    });
} // end _getCityData function

// 取得特約醫院內容
function _getSpechData(config){
    config = $.extend({page: 1, pageSize: ''}, config);

    var url_uri = encodeURI('type='+config.type+'&city='+config.city+'&area='+config.area+'&pageSize='+config.pageSize+'&page='+config.page);

	GardenUtils.ajax.loading({
        url: ajaxPrefix + 'jsp/hosp.jsp?'+url_uri+'&v=' + new Date().getTime(), 
        dataType: 'json',
		callback : function(json) {
            if( typeof json == 'string' ) json = $.parseJSON(json);
            config['datas'] = json;
            config.callback( config );
        }
    });
	
   
} // end _getSpechData function

// 特約醫院存放內容 div 與頁碼
function _createSpechContent(config){
    var target = config.target.empty(),
        datas = config.datas;

    if( target.find('div.SpechContent').length == 0 ){
        var content_div = $('<div class="SpechContent"></div>').appendTo( target );
    }

    if( target.find('.bottom_pagination').length == 0 ){
        var paginationEle = $('<div class="bottom_pagination"></div>').appendTo( target );

        console.log('paginationEle', datas.pageInfo);

        GardenUtils.display.pagination({
            pageInfo: datas.pageInfo,
            target: target.find('.bottom_pagination').empty(),
            getPageInfoCallBackFn: function(pageNum){
                config.page = pageNum;
                config.target = content_div;
                config.callback = function(config){
                    _createSpechList(config);
                };

                _getSpechData(config);
            }
        });
    }
} // end _createSpechContent function

// 特約醫院內容
function _createSpechList(config){
    var target = config.target.empty(),
        datas = config.datas.hasOwnProperty('datas')?config.datas.datas:[];

    if( datas.length == 0 ){
        target.append('<div class="skinsurance-hospitalContent">'
            +'<div class="skinsurance-hospitalContainer col-md-12">'
            +'<div class="col-sm-5 skin-hosp-topone-k block"><div class="col-sm-3"></div>'
            +'<div class="col-sm-9"><h4 class="col-sm-6 hospName">查無資料</h4></div></div></div></div>');
    } else {
        $.each(datas, function(i, data){

            var hospItemStr = '',
                hospItemArr = data.hospItem.indexOf(',')!=-1? data.hospItem.split(','):[data.hospItem];
            
            $.each(hospItemArr, function(j, hospItem){
                switch(hospItem){
                    case 'A':
                        hospItemStr += '<span class="red">A</span>';
                        break;
                    case 'B':
                        hospItemStr += '<span class="yellow">B</span>';
                        break;
                    case 'C':
                        hospItemStr += '<span class="blue">C</span>';
                        break;
                    case 'D':
                        hospItemStr += '<span class="coffee">D</span>';
                        break;
                }
            });

            if( data.Sampling ){
                hospItemStr += '<span>3%</span>';
            }

			var latitude = data.latitude;
			var longitude = data.longitude;
            var liEle = $('<div class="skinsurance-hospitalContent">'
                    +'<div class="skinsurance-hospitalContainer col-md-12">'
                    +'<div class="col-sm-5 skin-hosp-topone-k block"><div class="col-sm-3"></div>'
                    +'<div class="col-sm-9"><p class="hospCode">'+data.hospCode+'</p><h4 class="col-sm-6 hospName">'+data.hospName+'</h4>'
                    +'<div class="col-sm-6 skinsurance-hospitalItem">'+hospItemStr+'</div></div>'
                    +'<div class="col-sm-12"><a class="map_link col-sm-3"><img src="image/map.png" alt=""/></a>'
                    +'<div class="col-sm-9"><a class="map_addr">'+data.hospAddress+'</a>'
                    +'<p>Tel '+data.tel+'</p></div></div></div>'
                    +'<div class="open col-sm-2 skin-hosp-toptwo-k block"><h4>平日</h4><p>'+data.timeNoSun+'</p></div>'
                    +'<div class="col-sm-2 skin-hosp-topthree-k block"><h4>假日</h4><p>'+data.timeSun+'</p></div>'
                    +'<div class="post col-sm-2 skin-hosp-topfour-k block"><h4>公告</h4><p>'+data.bulletin+'</p></div>'
                    +'</div></div>').appendTo( target );

            liEle.find('.map_link, .map_addr').off('click').on('click', function(ev){
                ev.preventDefault();

                var addr = $(this).hasClass('map_link')? $(this).parent().find('.map_addr').text(): $(this).text();

				if(latitude != '' && longitude != '') {
					//window.open('https://www.google.com.tw/maps?q='+latitude+','+longitude+'');
                    window.open('https://www.google.com.tw/maps/place/'+addr+'/@'+latitude+','+longitude);
				}
				else {
					window.open("http://maps.google.com.tw/maps?f=q&source=s_q&hl=zh-TW&geocode=&q=" + addr); 
				}
            });
        }); // end each: datas
    } // end else: has datas
} // end _createSpechList function

// 保戶刊物
function publicationList(view){
    //view.append('<h3 class="skinsurance-005-contentTitle"><span></span>新光刊物</h3>');
    view.append('<div class="skholdings-015-main-page-sub-title">'
        +'<div class="imsquare"></div><p>新光刊物</p>'
        +'<div class="arrow-icon"><img src="img/arrow-to-top.png"/></div></div>');
    view.append('<div id="publication_content"></div>');

    _getPublicationTypeData({
        target: view.find('#publication_content'),
        callback: function(conf){

            var datas = [];

            if($(conf.datas).find('Type').length != 0){
                $(conf.datas).find('Type[name="ROOT"] > Type').each(function(){
                    datas.push({
                        id: 'publicationType_'+$(this).attr('id'),
                        name: $(this).attr('name'),
                        attr: 'typeId = '+$(this).attr('id')
                    });
                });
            } // end if: Type exist


            // create tab
            _createGATab({
                target: conf.target,
                options: {
                    tabTitleContainerClass: 'tab_red'
                },
                datas: datas,
                callback: function(config){ // 長 tab content

                    var target = config.target,
                        typeId = target.attr('typeId');

                    _getPublicationListData({
                        target: target,
                        typeId: typeId,
                        callback: function(config){
                            target.append('<div class="skinsurance-007-inside PublicationContent"></div>');
                            config.target = target.find('.PublicationContent');
                            _createPublicationContent(config);
                        }
                    });
                }
            }); // end call: _createGATab
        }
    }); // end call: _getPublicationTypeData
} // end publicationList function

// 刊物分類
function _getPublicationTypeData(config){
    $.ajax({
        url: ajaxPrefix + '/jsp/publicationType.jsp?v=' + new Date().getTime(), 
        dataType: 'xml',
        success:function(xml) {
            if( typeof xml == 'string' ) xml = $.parseXML(xml);
            config['datas'] = xml;
            config.callback( config );
        }
    });
} // end _getPublicationTypeData function

// 取得刊物清單
function _getPublicationListData(config){
    config = $.extend({page: 1, pageSize: ''}, config);

    $.ajax({
        url: ajaxPrefix + '/jsp/publication.jsp?typeId='+config.typeId+'&pageSize='+config.pageSize+'&page='+config.page+'&v=' + new Date().getTime(), 
        dataType: 'json',
        success:function(json) {
            if( typeof json == 'string' ) json = $.parseJSON(json);
            config['datas'] = json;
            config.callback( config );
        }
    });
} // end _getPublicationTypeData function

// 刊物清單存放內容 div 與頁碼
function _createPublicationContent(config){
    var target = config.target.empty(),
        datas = config.datas;

    if( target.find('ul.publicationList').length == 0 ){
        var content_ul = $('<ul class="skinsurance-013-publications publicationList"></ul>').appendTo( target );
    }

    if( target.find('.bottom_pagination').length == 0 ){
        var paginationEle = $('<div class="bottom_pagination"></div>').appendTo( target );

        console.log('paginationEle', datas.pageInfo);

        GardenUtils.display.pagination({
            pageInfo: datas.pageInfo,
            target: target.find('.bottom_pagination').empty(),
            getPageInfoCallBackFn: function(pageNum){
                config.page = pageNum;
                config.target = content_ul;
                config.callback = function(config){
                    _createPublicationList(config);
                };

                _getPublicationListData(config);
            }
        });
    }
} // end _createPublicationContent function

// 刊物清單內容
function _createPublicationList(config){
    var target = config.target.empty(),
        typeId = config.typeId,
        datas = config.datas.hasOwnProperty('datas')?config.datas.datas:[];

    $.each(datas, function(i, data){

        var liEle = $('<li><a href="publication.html?id='+data.id+'">'+data.title+'</a></li>').appendTo(target);

    });
} // end _createPublicationList function

// 保戶刊物左選單
function publication_left(view){
    menu_left(view, '客戶服務');
} // end publication_left function

// 保戶刊物內頁清單
function publication(view){
    //view.append('<h3 class="skinsurance-005-contentTitle"><span></span>新光刊物</h3>');
    view.append('<div class="skholdings-015-main-page-sub-title">'
        +'<div class="imsquare"></div><p>新光刊物</p>'
        +'<div class="arrow-icon"><img src="img/arrow-to-top.png"/></div></div>');
    view.append('<div id="publication_content" class="skinsurance-publicationInside"></div>'
        +'<div class="publication-back-btn"><a href="">回列表</a></div>');

    if( $('.breadCrumbs .pathArea li').length > 0 ){
        view.find('.publication-back-btn a').attr('href', $('.breadCrumbs .pathArea li a.active').parents('li').first().prev().find('a').attr('href'));
    }

    var href = window.location.href,
        param_str = href.indexOf('?')!=-1? href.split('?')[1]: '',
        id = param_str!='' && param_str.indexOf('id=')!=-1? param_str.split('id=')[1].split('&')[0]:'',
        isPreview = param_str!='' && param_str.indexOf('isPreview=')!=-1? param_str.split('isPreview=')[1].split('&')[0]:'' ;

    _getPublicationDetailListData({
        target: view.find('#publication_content'),
        id: id,
        isPreview: isPreview,
        callback: function(conf){
            var target = conf.target,
                typeId = '',
                datas = conf.datas;
            
            if( datas.hasOwnProperty('info') ){
                var infoData = datas.info;
                
                var info_div = $('<div class="skinsurance-frontCover">'
                        +'<img src="'+infoData.img_url+'" alt="">'
                        +'<a href="'+infoData.download_url+'" target="_blank">下載本冊</a></div>').appendTo( target );

                typeId = infoData.type;
            }

            if( datas.hasOwnProperty('datas') ){
                if( target.find('ul.publicationList').length == 0 ){
                    var content_ul = $('<ul class="skinsurance-017-booksTitle publicationList"></ul>').appendTo( target );
                }

                if( target.find('.bottom_pagination').length == 0 ){
                    var paginationEle = $('<div class="bottom_pagination"></div>').appendTo( target );

                    console.log('paginationEle', datas.pageInfo);

                    GardenUtils.display.pagination({
                        pageInfo: datas.pageInfo,
                        target: target.find('.bottom_pagination').empty(),
                        getPageInfoCallBackFn: function(pageNum){
                            conf.page = pageNum;
                            conf.target = content_ul;
                            conf.typeId = typeId;
                            conf.listId = id;
                            conf.isPreview = isPreview;
                            conf.callback = function(config){
                                _createPublicationDetailContent(config);
                            };

                            _getPublicationDetailListData(conf);
                        }
                    });
                }
            }
        }
    }); // end call: _getPublicationDetailListData
} // end publication function

// 取得刊物內頁清單
function _getPublicationDetailListData(config){
    config = $.extend({page: 1, pageSize: ''}, config);

    $.ajax({
        url: ajaxPrefix + 'jsp/publication_detail.jsp?id='+config.id+'&pageSize='+config.pageSize+'&page='+config.page+'&isPreview='+config.isPreview+'&v=' + new Date().getTime(), 
        dataType: 'json',
        success:function(json) {
            if( typeof json == 'string' ) json = $.parseJSON(json);
            config['datas'] = json;
            config.callback( config );
        }
    });
} // end _getPublicationDetailListData function

// 刊物內頁清單內容
function _createPublicationDetailContent(config){
    var target = config.target.empty(),
        typeId = config.typeId,
        listId = config.listId,
        datas = config.datas.hasOwnProperty('datas')?config.datas.datas:[],
        isPreview = config.isPreview,
        pageUrl = isPreview!=undefined&&isPreview=='Y' ? '#!publicationDetail': 'publicationDetail.html',
        previewParam = isPreview!=undefined&&isPreview=='Y' ? '&isPreview=Y': '';

    $.each(datas, function(i, data){

        var liEle = $('<li><a href="'+pageUrl+'?typeId='+typeId+'&listId='+listId+'&id='+data.id+previewParam+'"><h5>'+data.title+'</h5></a></li>').appendTo(target);

    });
} // end _createPublicationDetailContent function

// 保戶刊物內頁
function publicationDetail(view){
    var href = window.location.href,
        param_str = href.indexOf('?')!=-1? href.split('?')[1]: '',
        param = param_str!=''? (param_str.indexOf('&')!=-1? param_str.split('&'):[param_str]) :[],
        typeId = param.length!=0 && param[0].indexOf('=')!=-1? param[0].split('=')[1] :'',
        id = param.length>1 && param[2].indexOf('=')!=-1? param[2].split('=')[1]:'',
        isPreview = param_str!='' && param_str.indexOf('isPreview=')!=-1? param_str.split('isPreview=')[1].split('&')[0]:'' ;

    _getPublicationDetailData({
        target: view,
        typeId: typeId,
        id: id,
        isPreview: isPreview,
        callback: function(conf){

            var target = conf.target,
                datas = conf.datas;

            if( datas.hasOwnProperty('datas') ){
                var data = datas.datas[0];

                //target.append('<h3 class="skinsurance-005-contentTitle"><span></span>'+data.typeName+'</h3>');
                target.append('<div class="skholdings-015-main-page-sub-title">'
                    +'<div class="imsquare"></div><p>'+data.typeName+'</p>'
                    +'<div class="arrow-icon"><img src="img/arrow-to-top.png"/></div></div>');
                target.append('<div id="publication_content" class="skinsurance-skarticle-block">'
                    +'<div class="skarticle-title-block"><div class="title-block-up">'
                    +'<p>'+data.date+'</p></div><div class="title-block-middle">'
                    +'<p class="fb_title">'+data.title+'</p></div></div>'
                    +'<div class="skarticle-title-block-second">'
                    +'<div class="little-desc-L"><p>分享文章至</p>'
                    +'<div class="little-desc-L-pic"><a class="fb-share"><img src="img/icon-facebook.svg" /></a></div>'
                    +'<div class="little-desc-L-pic"><a class="line-share"><img src="img/icon-line.svg" /></a></div></div>'
                    +'<div class="little-desc-R"><div class="little-desc-R-top">'
                    +'<div class="little-desc-R-top-left"><p>作者：</p></div>'
                    +'<div class="little-desc-R-top-right"><p>'+data.author+'</p></div></div>'
                    +'<div class="little-desc-R-bottom"><div class="little-desc-R-bottom-left"><p>出處：</p></div>'
                    +'<div class="little-desc-R-bottom-right"><p>'+data.source+'</p></div></div></div></div>'
                    +'<div class="skarticle-content-block fb_img fb_description">'+data.content+'</div></div>'
                    +'<div class="publication-back-btn"><a href="">回列表</a></div>');

                if( $('.breadCrumbs .pathArea li').length > 0 ){
                    // target.find('.publication-back-btn a').attr('href', $('.breadCrumbs .pathArea li a.active').parents('li').first().prev().find('a').attr('href'));
                    target.find('.publication-back-btn a').attr('href', $('.breadCrumbs .pathArea li.active').first().prev().find('a').attr('href'));
                }

                target.find('.fb-share').off('click').on('click', function(ev){
                    ev.preventDefault();

                    GardenUtils.plugin.FBPost({
                        appId: fb_appId,
                        title: target.find('.fb_title').text(),
                        url:  window.location.href,
                        picture: target.find('.fb_img img').first().attr('href'),
                        description: target.find('.fb_description').text()
                    });
                });

                target.find('.line-share').off('click').on('click', function(ev){
                    ev.preventDefault();

                    window.open(lineURL, '新光人壽Line分享');
                });
            } // end if: data exist
        }
    }); // end call: _getPublicationDetailData
} // end publicationDetail function

function _getPublicationDetailData(config){
    config = $.extend({page: 1, pageSize: ''}, config);
    var previewParam = config.hasOwnProperty('isPreview') && config.isPreview=='Y' ? '&isPreview=Y' : '';

    $.ajax({
        url: ajaxPrefix + '/jsp/publication_news.jsp?type='+config.typeId+'&id='+config.id+previewParam+'&v=' + new Date().getTime(), 
        dataType: 'json',
        success:function(json) {
            if( typeof json == 'string' ) json = $.parseJSON(json);
            config['datas'] = json;
            config.callback( config );
        }
    });
} // end _getPublicationDetailData function

// 服務中心
function serviceCenter(view){
    //view.append('<h3 class="skinsurance-005-contentTitle"><span></span>服務中心</h3>');

    var target = view.find('#serviceCenter_content'),
        city_filter = $('<div class="skinsurance-011-insideHeader"><div>'
            +'<p>請選擇欲查詢的縣市區域</p></div>'
            +'<div class="service-place"><div><select name="" id="city_filter"><option value="全部">全部</option></select></div>'
            +'<div><select name="" id="area_filter"></select></div></div>'
            +'<div class="hosptselectbtn"><a href="#" class="searchBtn">確認查詢</a></div></div>').appendTo( target ),
        result_div = $('<div id="service_result" class="row">'
            +'<div class="col-md-6" id="map"></div>'
            +'<div class="col-md-6 map-list"></div></div>').appendTo( target );

    // 取得縣市資料
    var firstGetCity = true;
    _getCityData({
        target: city_filter.find('select#city_filter'),
        ctype: 1,
        atype: 1,
        callback: function(config){
            var target = config.target,
                datas = config.datas;

            if(datas.hasOwnProperty('data')){
                $.each(datas.data, function(i, cityObj){
                    target.append('<option value="'+cityObj.cityId+'">'+cityObj.cityName+'</option>');
                });
            } // end if: city data exist

            target.trigger('change');

            //city_filter.find('.searchBtn').trigger('click');
        }
    }); // end call: _getCityData

    city_filter.find('select#city_filter').on('change', function(){
        _getCityData({
            target: city_filter.find('select#area_filter'),
            city: $(this).val(),
            ctype: 1,
            atype: 1,
            callback: function(config){
                var target = config.target,
                    datas = config.datas;

                target.empty().append('<option value="">全區</option>');

                if(datas.hasOwnProperty('data')){
                    $.each(datas.data, function(i, areaObj){
                        target.append('<option value="'+areaObj.cityId+'">'+areaObj.cityName+'</option>');
                    });
                } // end if: city data exist

                if(firstGetCity){
                    city_filter.find('.searchBtn').trigger('click');
                    firstGetCity = false;
                }
            }
        }); // end call: _getCityData
    });

    // trigger 縣市
    city_filter.find('.searchBtn').off('click').on('click', function(ev){
        ev.preventDefault();

        var city_select = city_filter.find('select#city_filter'),
            selected_city = city_select.children(':selected').val(),
            area_select = city_filter.find('select#area_filter'),
            selected_area = area_select.children(':selected').val();

        _getSerData({
            target: result_div.find('.map-list'),
            city: selected_city,
            area: selected_area,
            callback: function(config){
                _createServiceCenterContent(config);
            },
            dataType:'serviceCenter'
        });
    }); // end click: city_filter search
} // end serviceCenter function

function _getSerData(config){
    config = $.extend({page: 1, pageSize: 8}, config);

    //alert(config.city);

    var url_uri = encodeURI('type=service&city='+config.city+'&area='+config.area+'&pageSize='+config.pageSize+'&page='+config.page);

	GardenUtils.ajax.loading({
        url: ajaxPrefix + 'jsp/service.jsp?'+url_uri+'&v=' + new Date().getTime(), 
        dataType: 'json',
		callback : function(json) {
            if( typeof json == 'string' ) json = $.parseJSON(json);
            config['datas'] = json;
            config.callback( config );
        }
    });
	
    
} // end _getSerData function

function _createServiceCenterContent(config){
    var target = config.target.empty(),
        datas = config.datas;

        if(target.find('ul#map-list').length == 0){
            var content_div = $('<ul id="map-list"></ul>').appendTo(target);
        }

    if( target.find('.bottom_pagination').length == 0 ){
        var paginationEle = $('<div class="bottom_pagination"></div>').appendTo( target );

        console.log('paginationEle', datas.pageInfo);

        GardenUtils.display.pagination({
            pageInfo: datas.pageInfo,
            target: target.find('.bottom_pagination').empty(),
            getPageInfoCallBackFn: function(pageNum){
                config.page = pageNum;
                config.target = content_div;
                config.callback = function(config){
                    _createMapList(config);
                };

                _getSerData(config);
            }
        });
    }
} // end _createServiceCenterContent function

function _createMapList(config){
    var target = config.target.empty(),
        datas = config.datas.hasOwnProperty('locations')?config.datas.locations:[];

    var mapId = target.parent().prev().attr('id'),
        zoom = 13,
        nameArray = [], addrArray = [], telArray = [], googleAddrArray = [];

    if( datas.length == 0 ){
        target.append('<li class="branchItem"><h5 class="">查無資料</h5></li>');
    } else {
        $.each(datas, function(i, data){
            var remark = (data.hasOwnProperty('remark')&&data.remark!=''? data.remark+' ':'');
            //var google_addr = data.GoogleMapAddress;
            var google_addr = data.GoogleMapAddress.indexOf('號')? (data.GoogleMapAddress.split('號')[0]+'號'): data.GoogleMapAddress;

            console.log('_createMapList config',config);
            // alert(1);
            var fax = config.hasOwnProperty('dataType')&&config['dataType']=='serviceCenter'?'': ('<span class="branchFax"> 傳真：'+(data.hasOwnProperty('FAX')   ?data.FAX:''+'</span>')),
                crowdInfo = data.hasOwnProperty('crowdInfo') && data['crowdInfo']!='' ? '<p><a class="crowd_popup">尖離峰時段分佈圖</a></p><div class="hidden crowdInfo">'+data.crowdInfo+'</div>':'',
                liEle = $('<li class="branchItem">'
                +'<h5 class="branchName">'+remark+data.Name+'</h5>'
                +'<a class="branchAddr">'+data.Addr+'</a>'
                +'<p><span class="branchTel">電話：'+data.Tel+'</span>'
                + fax +'</p>'
                +'<p class="branchGoogleAddr" style="display:none">'+google_addr+'</p>'
                + crowdInfo
                +'</li>').appendTo(target);

                // alert(fax);

            if( i==0 ){
                nameArray.push(data.Name);
                addrArray.push(data.Addr);
                telArray.push(data.Tel);
                googleAddrArray.push(google_addr);
            }
        });

        target.find('li.branchItem').off('click').on('click', function(){
            var window_w = $(window).width();

            if(window_w < 768){
                window.open("http://maps.google.com.tw/maps?f=q&source=s_q&hl=zh-TW&geocode=&q=" + $(this).find('.branchGoogleAddr').text()); 
            } else {
                var tel_str = $(this).find('.branchTel').text();
                if( tel_str.indexOf('電話：') != -1 ) tel_str = tel_str.replace('電話：', '');
                addressMap(mapId, [$(this).find('.branchName').text()], [$(this).find('.branchAddr').text()]
                    , [tel_str], zoom, [$(this).find('.branchGoogleAddr').text()]);
            }
            
        });

        target.find('li.branchItem a.crowd_popup').off('click').on('click',function(e){
            e.preventDefault();
            e.stopPropagation();

            var popupContent = $(this).parents('li').first().children('.crowdInfo');

            // console.log('popupContent',popupContent);
            GardenUtils.display.popup({
                title: '尖離峰時段分佈圖',            
                content : popupContent.html(),
                closeCallBackFn : function(){},
                showCallBackFn : function(){
                    $('.modal-body').css('height','350px');
                },
                isShowSubmit : false,
                isShowClose : true
            });
        });

        target.find('a.branchAddr').on('click', function(ev){
            ev.preventDefault();

            window.open("http://maps.google.com.tw/maps?f=q&source=s_q&hl=zh-TW&geocode=&q=" + $(this).text()); 
        });
    } // end else: has datas

    addressMap(mapId, nameArray, addrArray, telArray, zoom, googleAddrArray);
} // end _createServiceCenterList function

function addressMap(mapId, nameArray, addrArray, telArray, zoom, googleAddrArray) {
    console.debug(nameArray);
    console.debug(addrArray);
    console.debug(telArray);
    console.debug(zoom);
    console.debug(googleAddrArray);

    var dialogArray = [];
    if (nameArray.length > 1) {
        $.each(nameArray, function(i, branchName) {
            if (telArray != '' && telArray != undefined) {
                dialogArray.push('<h3 class="google_dialog_title">' + branchName + '</h3><p class="google_dialog_addr">' + addrArray[i] + '</p><p class="google_dialog_tel">' + telArray[i] + '</p>');
            } else {
                dialogArray.push('<h3 class="google_dialog_title">' + branchName + '</h3><p class="google_dialog_addr">' + addrArray[i] + '</p>');
            }
        });

        GardenUtils.plugin.showGoogleMap({
            divId: mapId,
            zoom: zoom,
            address: googleAddrArray,
            //icon: 'image/03.png',
            icon: 'image/location.png',
            dialog: dialogArray,
            scrollwheel: false,
            showDialog: true,
            zoomPosition: 'LEFT_BOTTOM',
            streetPosition: 'LEFT_BOTTOM'
        });
    } 
    else if(nameArray.length == 1){
        $.each(nameArray, function(i, branchName) {
            if (telArray != '' && telArray != undefined) {
                dialogArray.push('<h3 class="google_dialog_title">' + branchName + '</h3><p class="google_dialog_addr">' + addrArray + '</p><p class="google_dialog_tel">電話：' + telArray + '</p>');
            } else {
                dialogArray.push('<h3 class="google_dialog_title">' + branchName + '</h3><p class="google_dialog_addr">' + addrArray + '</p>');
            }
        });

        GardenUtils.plugin.showGoogleMap({
            divId: mapId,
            zoom: zoom,
            address: googleAddrArray,
            icon: 'image/03.png',
            dialog: dialogArray,
            scrollwheel: false,
            showDialog: true,
            zoomPosition: 'LEFT_BOTTOM',
            streetPosition: 'LEFT_BOTTOM'
        });
    }
    else {
        console.debug(mapId);
        GardenUtils.plugin.showGoogleMap({
            divId: mapId,
            zoom: 7,
            address: '台灣省',
            icon: '',
            dialog: '',
            scrollwheel: false,
            showDialog: true,
            zoomPosition: 'LEFT_BOTTOM',
            streetPosition: 'LEFT_BOTTOM'
        });
    }
} // end addressMap function

// 營運據點
function operatingPositions(view){

    var target = view.find('#operatingPositions_content'),
        city_filter = $('<div class="skinsurance-011-insideHeader"><div>'
            +'<p>請選擇欲查詢的縣市區域</p></div>'
            +'<div class="service-place"><div><select name="" id="city_filter"></select></div>'
            +'<div><select name="" id="area_filter"></select></div></div>'
            +'<div class="hosptselectbtn"><a href="#" class="searchBtn">確認查詢</a></div></div>').appendTo( target ),
        result_div = $('<div id="service_result" class="row">'
            +'<div class="col-md-6" id="map"></div>'
            +'<div class="col-md-6 map-list"></div></div>').appendTo( target );

    // 取得縣市資料
    var firstGetCity = true;
    _getCityData({
        target: city_filter.find('select#city_filter'),
        ctype: 1,
        atype: 1,
        callback: function(config){
            var target = config.target,
                datas = config.datas;

            if(datas.hasOwnProperty('data')){
                $.each(datas.data, function(i, cityObj){
                    target.append('<option value="'+cityObj.cityId+'">'+cityObj.cityName+'</option>');
                });
            } // end if: city data exist
            
            target.val('台北市').trigger('change');
            //city_filter.find('.searchBtn').trigger('click');
        }
    }); // end call: _getCityData


    city_filter.find('select#city_filter').on('change', function(){
        _getCityData({
            target: city_filter.find('select#area_filter'),
            city: $(this).val(),
            ctype: 1,
            atype: 1,
            callback: function(config){
                var target = config.target,
                    datas = config.datas;

                target.empty().append('<option value="">全區</option>');

                if(datas.hasOwnProperty('data')){
                    $.each(datas.data, function(i, areaObj){
                        target.append('<option value="'+areaObj.cityId+'">'+areaObj.cityName+'</option>');
                    });
                } // end if: city data exist

                if(firstGetCity){
                    city_filter.find('.searchBtn').trigger('click');
                    firstGetCity = false;
                }
            }
        }); // end call: _getCityData
    });

    // trigger 縣市
    city_filter.find('.searchBtn').off('click').on('click', function(ev){
        ev.preventDefault();

        var city_select = city_filter.find('select#city_filter'),
            selected_city = city_select.children(':selected').val(),
            area_select = city_filter.find('select#area_filter'),
            selected_area = area_select.children(':selected').val();

        _getOpeData({
            target: result_div.find('.map-list'),
            city: selected_city,
            area: selected_area,
            callback: function(config){
                _createOperatingPositionsoContent(config);
            }
        });
    }); // end click: city_filter search
} // end operatingPositions function

function _getOpeData(config){
    config = $.extend({page: 1, pageSize: 8}, config);

    var url_uri = encodeURI('type=shop&city='+config.city+'&area='+config.area+'&pageSize='+config.pageSize+'&page='+config.page);

	GardenUtils.ajax.loading({
        url: ajaxPrefix + 'jsp/service.jsp?'+url_uri+'&v=' + new Date().getTime(), 
        dataType: 'json',
		callback : function(json) {
            if( typeof json == 'string' ) json = $.parseJSON(json);
            config['datas'] = json;
            config.callback( config );
        }
    });
	
    
} // end _getOpeData function

function _createOperatingPositionsoContent(config){
    var target = config.target.empty(),
        datas = config.datas;

        if(target.find('ul#map-list').length == 0){
            var content_div = $('<ul id="map-list"></ul>').appendTo(target);
        }

    if( target.find('.bottom_pagination').length == 0 ){
        var paginationEle = $('<div class="bottom_pagination"></div>').appendTo( target );

        console.log('paginationEle', datas.pageInfo);

        GardenUtils.display.pagination({
            pageInfo: datas.pageInfo,
            target: target.find('.bottom_pagination').empty(),
            getPageInfoCallBackFn: function(pageNum){
                config.page = pageNum;
                config.target = content_div;
                config.callback = function(config){
                    _createMapList(config);
                };

                _getOpeData(config);
            }
        });
    }
} // end _createOperatingPositionsoContent function



function houseloanmath(view) {

	//綁form的輸入框離開後判斷是否數字
	view.find('form input').on('blur',function(e){
		var val = $(this).val();
		
		if(val != '') {
			try{		
				var result = parseInt(val);
				
				if(isNaN(result) || result < 0) {
					$(this).val('');
					$(this).focus();
				}
			}catch(e) {
				console.debug(e);
				e.preventDefault();
				$(this).val('');
			}
		}
		
	});
	
	//綁每個結束日自動帶入下一個起月
	view.find('[name="endMonth1"],[name="endMonth2"]').on('blur',function(e){
		var val = $(this).val();
		
		if(val != '') {
			try{		
				var result = parseInt(val);
				
				if(!isNaN(result) && result > 0) {
					var parent = $(this).parents('.inputDiv:first');
					parent.next().find('input[type="text"]:first').val(result+1);
				}
			}catch(e) {
				console.debug(e);
				e.preventDefault();
			}
		}
		
	});
	
	//綁輸入年份後自動帶入
	view.find('[name="year"]').on('blur',function(e){
		var val = $(this).val();
		
		var rateSplitVal = view.find('[name="rateSplit"]:checked').val();		
		
		view.find('[name="startMonth1"]').val('1');
		view.find('[name="endMonth'+rateSplitVal+'"]').val(parseInt(val) * 12);
	});

	//綁選擇radio後開關div
	view.find('[name="rateSplit"]').off('click').on('click',function(e){
		
		var val = $(this).val();
		view.find('.inputDiv').hide();
		
		for(var i=1;i<=parseInt(val);i++) {
			view.find('.inputDiv' + i).show();
		}
	});

	//綁送出
	view.find('a.submit').off('click').on('click',function(e){
		e.preventDefault();
		
		view.find('[name="year"]').trigger('blur');
		
		var res = GardenUtils.valid.validForm({
                type: "alert",
                showAllErr: false,
                formId: ['mainForm'],
                validEmpty: [
					{
	                    name: 'amount',
	                    msg: '貸款金額'
	                }
					,{
	                    name: 'year',
	                    msg: '貸款期間'
	                }
					,{
	                    name: 'startMonth1',
	                    msg: '貸款利率階段1起始月份'
	                }, {
	                    name: 'endMonth1',
	                    msg: '貸款利率階段1截止月份'
	                },{
	                    name: 'rate1',
	                    msg: '貸款利率階段1'
	                },{
	                    name: 'startMonth2',
	                    msg: '貸款利率階段2起始月份'
	                }, {
	                    name: 'endMonth2',
	                    msg: '貸款利率階段2截止月份'
	                },{
	                    name: 'rate2',
	                    msg: '貸款利率階段2'
	                },{
	                    name: 'startMonth3',
	                    msg: '貸款利率階段3起始月份'
	                }, {
	                    name: 'endMonth3',
	                    msg: '貸款利率階段3截止月份'
	                },{
	                    name: 'rate3',
	                    msg: '貸款利率階段3'
	                }
				],
                validNumber: [
					{
	                    name: 'amount',
	                    msg: '貸款金額'
	                }
					,{
	                    name: 'year',
	                    msg: '貸款期間'
	                }
				],
                validDecimal: [],
                validEmail: [],
                validDate: [],
                validMobile: [],
                errorDel: [],
                customizeFun: function(customizeValidResult) {
					//貸款期間不得小於3
	                if (view.find('[name="year"]').val() == '' || parseInt(view.find('[name="year"]').val()) < 3) {
	                    customizeValidResult.push({
	                        obj: view.find('[name="year"]'),
	                        msg: '貸款期間最少3年'
	                    });
	                }
					
					//各階段的迄月不得小於起月
					if(view.find('[name="startMonth1"]').parents(":hidden").length == 0) {
						if (view.find('[name="startMonth1"]').val() != '' && view.find('[name="endMonth1"]').val() != '') {					
							if(parseInt(view.find('[name="startMonth1"]').val()) >= parseInt(view.find('[name="endMonth1"]').val())) {
								customizeValidResult.push({
			                        obj: view.find('[name="endMonth1"]'),
			                        msg: '階段1起始月份不可大於等於截止月份!'
			                    });
							}
		                }
					}
					
					
					if(view.find('[name="startMonth2"]').parents(":hidden").length == 0) {
						if (view.find('[name="startMonth2"]').val() != '' && view.find('[name="endMonth2"]').val() != '') {
					
							if(parseInt(view.find('[name="startMonth2"]').val()) >= parseInt(view.find('[name="endMonth2"]').val())) {
								customizeValidResult.push({
			                        obj: view.find('[name="endMonth2"]'),
			                        msg: '階段2起始月份不可大於等於截止月份!'
			                    });
							}
		                }
					}
					
					if(view.find('[name="startMonth3"]').parents(":hidden").length == 0) {
						if (view.find('[name="startMonth3"]').val() != '' && view.find('[name="endMonth3"]').val() != '') {
					
							if(parseInt(view.find('[name="startMonth3"]').val()) >= parseInt(view.find('[name="endMonth3"]').val())) {
								customizeValidResult.push({
			                        obj: view.find('[name="endMonth3"]'),
			                        msg: '階段3起始月份不可大於等於截止月份!'
			                    });
							}
		                }
					}
					
                }
            });
		
		if(res) {
			var form = view.find('form');
			GardenUtils.ajax.loading({
		            type : 'post',
		            url : ajaxPrefix + 'jsp/MortgageCalculationInfo.jsp',
		            data : form.serialize(),
		            datatype : 'json',
		            callback : function(json) {
		                json = $.parseJSON(json);
		                
						var resultDiv = view.find('.skinsurance-mathResult');
                        var noteDiv = view.find('.skinsurance-mathResult-note');
						var tableDiv = view.find('.skinsurance-immovablesTableArea');
						
						//reset all result
						resultDiv.find('#part1').hide();
						resultDiv.find('#part2').hide();
						resultDiv.find('#part3').hide();
						resultDiv.find('[name="startMonth"]').val('');
						resultDiv.find('[name="endMonth"]').val('');
						resultDiv.find('[name="amount"]').val('');
						
						$.each(json.datas.payable[0],function(i,obj){
							console.debug(obj);
							//obj = obj[0];
							var part = obj.part;
							var startMonth = obj.startMonth;
							var endMonth = obj.endMonth;
							var amount = obj.amount;
							
							var partDiv = resultDiv.find('#part' + part);

							partDiv.find('[name="startMonth"]').val(startMonth);
							partDiv.find('[name="endMonth"]').val(endMonth);
							partDiv.find('[name="amount"]').val(amount);
							
							partDiv.show();
						});
						
						
						var trArray = [];
						$.each(json.tableArray,function(i,obj){
							console.debug(obj);
							//obj = obj[0];
							var no = (i+1) + '';
							var amount = obj.amount;
							var interest = obj.interest;
							var repayment = obj.repayment;
							var balance = obj.balance;
							
							trArray.push('<tr><td>'+no+'</td><td class="right">'+amount+'</td><td class="right">'+interest+'</td><td class="right">'+repayment+'</td><td class="right">'+balance+'</td></tr>');
						});
						
						tableDiv.find('tbody').empty().append(trArray.join(''));
						
						resultDiv.show();
                        noteDiv.show();
						tableDiv.removeClass('active');
		            }
		        });
		}
		
		
	});
	
	//綁清空
	view.find('a.clear').off('click').on('click',function(e){
		e.preventDefault();
		
		view.find('form')[0].reset();
	});

    // 各期本利分攤表
    view.find('a.skinsurance-mathResult-note-btn').off('click').on('click',function(e){
        e.preventDefault();
        
        view.find('.skinsurance-immovablesTableArea').addClass('active');
    });
}


function TrialBalance(view) {
    var pcArea = view.find('.pcArea'); //大網
    var mobileArea = view.find('.mobileArea'); //小網
    var tabOption = view.find('.tabOption'); //頁籤
    var startMath = view.find('.startMath'); //開始計算的按鈕
    var securityArea; //保障需求分析的區塊
    var retirementArea; //退休需求分析的區塊
    
    _bindTabIdAction({
        target: view
    });

	var content1 = view.find('div.security_pc');
	content1.find('[name="form15"] [name="official_salary"]').change(function(){		
		content1.find('[name="form15"] [name="labor_salary"]').val('0');
	});
	
	content1.find('[name="form15"] [name="labor_salary"]').change(function(){	
		content1.find('[name="form15"] [name="official_salary"]').val('0');
	});
	
	var content2 = view.find('div.retirement_pc');
	content2.find('[name="position"]').click(function(ev){
		var val = $(this).val();		
		
		if(val == 'laborer') {
			content2.find('.housingLoans [name="salary"]:first').trigger('click');
		} else if(val == 'official'){
            content2.find('.costOfChildren [name="salary"]:first').trigger('click');
        }
	});
	
    //按下開始計算
    startMath.off('click').on('click', function(ev) {
        ev.preventDefault();
        var thisBtn = $(this);
        var areaOfThisBtn = thisBtn.parent();
        var areaOfThisBtnID = areaOfThisBtn.attr('id');

        console.debug(areaOfThisBtnID);

        switch (areaOfThisBtnID) {
            case 'security_pc': //保障需求分析(大網)
                var thisArea = view.find('div.security_pc');
                computeSecurity(thisArea);
                break;
            case 'retirement_pc': //退休需求分析(大網)
                var thisArea = view.find('div.retirement_pc');
                computeRetirement(thisArea);
                break;
            /*case 'security_mobile': //保障需求分析(小網)
                var thisArea = view.find('div.security_mobile');
                computeSecurity(thisArea);
                break;
            case 'retirement_mobile': //退休需求分析(大網)
                var thisArea = view.find('div.retirement_mobile');
                computeRetirement(thisArea);
                break;*/
        }
    });

    //代預設
    //tabOption.eq(0).trigger('click');
}

//保障需求分析的計算
function computeSecurity(thisArea) {
    //alert(thisArea.html());

    /*==================
     第２題：幾個小孩
     ==================*/
    var obj = thisArea.find('[name="form2"]');
    var objOption = obj.find('[name="child"]');

    var aj = "";
    for (i = 0; i < (objOption.length); i++) {
        if (objOption.eq(i).is(':checked')) { //查找有幾個小孩
            aj = objOption.eq(i).val();
            console.debug(aj);
            break;
        }
    }
    thisArea.find('[name="form22"] [name="total_child"]').val(aj);
	thisArea.find('span.childNum').text(aj);
	thisArea.find('span.childNumStr').show();
	
    /*==================
     第４題：教育費用
     ==================*/
    if (aj == "0") //無小孩則教育程度、教育費用及總教育費為０
    {
        var bj = 125;
        //thisArea.find('[name="form4"] [name="edu_cost"]').val(bj);
        thisArea.find('[name="form22"] [name="total_edu_cost"]').val(bj);
        thisArea.find('[name="form3"] [name="edu"]').val(0);
    } else {
        obj = thisArea.find('[name="form4"]'); //有小孩計算教育費用
        var bj = 0;
        for (i = 0; i < (obj.find('[name="edu_cost"]').length); i++) {
            if ((obj.find('[name="edu_cost"]').eq(i).is(':checked'))) {
                bj = obj.find('[name="edu_cost"]').eq(i).val();
                break;
            }
        }
        thisArea.find('[name="form22"] [name="total_edu_cost"]').val(bj); //查找到的教育費用的值傳給結果表單(form22)中的教育費用多少萬(total_edu_cost)欄位
    }

    /*==================
     第５題：房屋貸款
     ==================*/
    var cj = 0;
    var obj = thisArea.find('[name="form6"] [name="house_cost"]').length; //設一個變數其值等於 form6 中項目的個數
    for (i = 0; i < obj; i++) {
        if (thisArea.find('[name="house_cost"]').eq(i).is(':checked')) //查找在同一個 Name 下 arry 中那一個 radio 鈕被按下
        {
            cj = thisArea.find('[name="house_cost"]').eq(i).val();
            console.debug(cj);
            break; //將被按下 radio 鈕的值傳給變數 cj
        }
    }
    thisArea.find('[name="form22"] [name="total_house_cost"]').val(cj); //查找到的貸款金額值(cj)傳給結果表單(form22)中的房屋貸款多少萬(total_house_cost)欄位

    /*==================
     第６題：房屋租金
     ==================*/
    var dj = 0; //dj 為浮點數
    var hr = 0;
    var obj = thisArea.find('[name="form7"] [name="house_rent"]').length;
    for (i = 0; i < obj; i++) {
        if (thisArea.find('[name="house_rent"]').eq(i).is(':checked')) {
            dj = parseFloat(thisArea.find('[name="house_rent"]').eq(i).val());
            break;
        }
    }
    hr = dj * 12;
    thisArea.find('[name="form22"] [name="total_house_rent"]').val(hr);
    //每個月的房租（結果表單中為全年費用，故須乘以 12）

    /*=======================
     第７題：預計租屋幾年？
     =======================*/
    var obj = thisArea.find('[name="form8"] [name="family_cost"]').length;
    var ej = 0;
	
    if (dj == 0) //若無租屋，則第７題預計會租幾年必須等於 0
    {
        thisArea.find('[name="form22"] [name="total_how_long"]').val(ej);
    }
	 //若有租屋，則須計算第７題預計會租幾年
    else  {
        //	var obj=document.form8;
        var ej = 0;

        for (i = 0; i < obj; i++) {
            if (thisArea.find('[name="family_cost"]').eq(i).is(':checked')) {
                ej = thisArea.find('[name="family_cost"]').eq(i).val();
                break;
            }
        }
		

        thisArea.find('[name="form22"] [name="total_how_long"]').val(ej);
    }

    /*======================
     第８題：自己的喪葬費
     ======================*/
    obj = thisArea.find('[name="form9"]');
    var fj = 0;
    for (i = 0; i < (obj.find('[name="death_cost"]').length); i++) {
        if (obj.find('[name="death_cost"]').eq(i).is(':checked')) {
            fj = obj.find('[name="death_cost"]').eq(i).val();
            break;
        }
    }
	
    thisArea.find('[name="form22"] [name="total_death_cost"]').val(fj);

    /*====================
     第９題：未清償借款
     ====================*/
    obj = thisArea.find('[name="form10"]');
    var gj = 0;
    for (i = 0; i < (obj.find('[name="credit"]').length); i++) {
        if (obj.find('[name="credit"]').eq(i).is(':checked')) {
            gj = obj.find('[name="credit"]').eq(i).val();
            break;
        }
    }
    thisArea.find('[name="form22"] [name="total_credit"]').val(gj);

    /*========================================
     第１０題：其他費用(為家庭準備的應急費)
     ========================================*/
    obj = thisArea.find('[name="form11"]');
    var hj = 0;
    for (i = 0; i < (obj.find('[name="urgent_cost"]').length); i++) {
        if (obj.find('[name="urgent_cost"]').eq(i).is(':checked')) {
            hj = obj.find('[name="urgent_cost"]').eq(i).val();
            break;
        }
    }
    thisArea.find('[name="form22"] [name="other_spend"]').val(hj);
    // 以上為結果分析表中現金需求

    /****************************
     * 以下為結果分析表生活費用 *
     ****************************/

    /*========================
     第１１題：每月家庭開銷
     ========================*/
    obj = thisArea.find('[name="form12"]');
    var ij = 0;
    for (i = 0; i < (obj.find('[name="family_cost"]').length); i++) {
        if (obj.find('[name="family_cost"]').eq(i).is(':checked')) {
            ij = obj.find('[name="family_cost"]').eq(i).val();
            break;
        }
    }
    thisArea.find('[name="form22"] [name="total_family_cost"]').val(ij);

    /*===============================
     第1２題：死後遺產留給家人幾年
     ===============================*/
    obj = thisArea.find('[name="form13"]');
    var jj = 0;
    for (i = 0; i < (obj.find('[name="legacy_year"]').length); i++) {
        if (obj.find('[name="legacy_year"]').eq(i).is(':checked')) {
            jj = obj.find('[name="legacy_year"]').eq(i).val();
            break;
        }
    }
    thisArea.find('[name="form22"] [name="total_legacy_year"]').val(jj);

    /*==================
     第１３題：其他年收入
     ==================*/
    obj = thisArea.find('[name="form14"]');
    var kj = 0;
    for (i = 0; i < (obj.find('[name="other_income"]').length); i++) {
        if (obj.find('[name="other_income"]').eq(i).is(':checked')) {
            kj = obj.find('[name="other_income"]').eq(i).val();
            break;
        }
    }
    thisArea.find('[name="form22"] [name="total_other_income"]').val(kj);

    /*======================
     第１９題：配偶年收入
     ======================*/
    obj = thisArea.find('[name="form20"]');
    var lj = 0;
    for (i = 0; i < (obj.find('[name="income_year"]').length); i++) {
        if (obj.find('[name="income_year"]').eq(i).is(':checked')) {
            lj = obj.find('[name="income_year"]').eq(i).val();
            break;
        }
    }
    thisArea.find('[name="form22"] [name="total_income_year"]').val(lj);
    //以上為結果分析表單中生活費用

    /**********************************
     * 以下為結果分析表單中已有的準備 *
     **********************************/

    /*===============================================
     第１４、１５題：社會保險給付(公、勞保投保薪資)
     =================================================*/

    ibo = thisArea.find('[name="form15"] [name="official_salary"]');
    ibj = thisArea.find('[name="form15"] [name="labor_salary"]');
    var osj = 0;
    var mj = 0;
    var mmj = 0;
    osj = ibo.val();
    mmj = ibj.val();
    if (osj == 0 && mmj != 0) {
        mj = Math.round(mmj * 45 / 10000);
        thisArea.find('[name="form22"] [name="pay_society"]').val(mj); //勞工以最高45基數計算
    }
    if (osj != 0 && mmj == 0) {
        mj = Math.round(osj * 36 / 10000);
        thisArea.find('[name="form22"] [name="pay_society"]').val(mj); //公教以最高36個月計算
    }
    if (osj != 0 && mmj != 0) {
        alert("請依您的身份在第14題或第15題擇一作答");
    }

    /*======================
     第１６題：終身保險
     ======================*/
    obj = thisArea.find('[name="form16"]');
    var nj = 0;
    var bb = thisArea.find('[name="form16"] [name="life_insurance"]').length; //設一個變數其值等於 form16 中項目的個數
    for (i = 0; i < bb; i++) {
        if (thisArea.find('[name="life_insurance"]').eq(i).is(':checked')) //查找在同一個 Name 下 arry 中那一個 radio 鈕被按下
        {
            nj = thisArea.find('[name="life_insurance"]').eq(i).val();
            break; //將被按下 radio 鈕的值傳給變數 nj
        }
    }
    thisArea.find('[name="form22"] [name="pay_life"]').val(nj); //再將變數 nj 的值傳給結果分析表對應的欄位

    /*======================
     第１７題：銀行存款
     ======================*/
    obj = thisArea.find('[name="form18"]');
    var pj = 0;
    var bd = thisArea.find('[name="form18"] [name="bank_save"]').length;
    for (i = 0; i < bd; i++) {
        if (thisArea.find('[name="bank_save"]').eq(i).is(':checked')) {
            pj = thisArea.find('[name="bank_save"]').eq(i).val();
            break;
        }
    }
    thisArea.find('[name="form22"] [name="total_bank_save"]').val(pj);

    /*======================
     第１８題：投資
     ======================*/
    obj = thisArea.find('[name="form19"]');
    var qj = 0;
    for (i = 0; i < 10; i++) {
        if (thisArea.find('[name="invest"]').eq(i).is(':checked')) {
            qj = thisArea.find('[name="invest"]').eq(i).val();
            break;
        }
    }
    thisArea.find('[name="form22"] [name="total_invest"]').val(qj);
    //以上為結果分析表中已有的準備

    /****************
     * 您需要的現金 *
     ****************/
    var nc = 0;
    nc = ((parseInt(aj) * parseInt(bj)) + parseInt(cj) + (hr * ej) + parseInt(fj) + parseInt(gj) + parseInt(hj));
    //alert(aj);
    //alert(bj);
    //alert(cj);
    //alert(hr);
    //alert(ej);
    //alert(fj);
    //alert(gj);
    //alert(hj);
    //alert(nc);
    thisArea.find('[name="form22"] [name="you_need"]').val(nc);

    /**********
     * 生活費 *
     **********/
    var lc = 0;
	lc = (parseFloat(ij) * 12 * parseInt(jj)) + parseInt(lj) + parseInt(kj);
	//lc = (((parseFloat(ij) * 12) - parseInt(lj) - parseInt(kj)) * parseInt(jj));
    if (lc < 0) {
        lc = 0;
        thisArea.find('[name="form22"] [name="your_spend"]').val(lc);
    } else {
        thisArea.find('[name="form22"] [name="your_spend"]').val(lc);
    }

    /**********
     * 已準備 *
     **********/
    var al = 0;
    al = (parseInt(mj) + parseInt(nj) + parseInt(pj) + parseInt(qj));
    thisArea.find('[name="form22"] [name="you_have"]').val(al);

    /****************
     * 家庭保障需求 *
     ****************/
    var nf = 0;
    var form22Ele = thisArea.find('[name="total_family_need"]');
    console.debug(form22Ele);
    nf = (parseInt(nc) + parseInt(lc) - parseInt(al));
    if (nf < 0) {
		nf = 0;

    } 
	console.debug(nf);
        var form22EleSpan = form22Ele;
        form22EleSpan.text(nf);
}

//退休需求分析的計算
function computeRetirement(thisArea) {
    /****************************************
     以下計算家庭養老金及喪偶養老金
     ****************************************/
    var a = 0; //結婚變數
    var sex = ""; //性別變數
    var mry = thisArea.find('[name="marry"]').length; //是否結婚項目長度
    var sexl = thisArea.find('[name="sex"]').length; //性別項目長度
    var posit = thisArea.find('[name="formposition"] [name="position"]').length; //身分項目長度
    var posi = ""; //身分變數
    //判斷是否結婚？
    for (i = 0; i < mry; i++) {
        if (thisArea.find('[name="marry"]').eq(i).is(':checked')) {
            a = thisArea.find('[name="marry"]').eq(i).val();
            break;
        }
    }

    //判斷性別
    for (i = 0; i < sexl; i++) {
        if (thisArea.find('[name="sex"]').eq(i).is(':checked')) {
            sex = thisArea.find('[name="sex"]').eq(i).val();
            break;
        }
    }
    if (sex == "") {
        alert("您忘了回答第２題！請選擇您的性別，謝謝！")
    }

    //判斷身分（公教人員 或 勞工）
    for (i = 0; i < posit; i++) {
        if (thisArea.find('[name="position"]').eq(i).is(':checked')) {
            posi = thisArea.find('[name="position"]').eq(i).val();
            break;

        }
    }
    if (posi == "") {
        alert("您忘了回答第４題！請選擇您的身分別，謝謝！")
    }

    /*-------------------------------
     判斷第８題的值：退休時每月開銷
     ------------------------------*/
    var oj = 0;
    var bc = thisArea.find('[name="family_cost"]').length;
    for (i = 0; i < bc; i++) {
        if (thisArea.find('[name="family_cost"]').eq(i).is(':checked')) {
            oj = thisArea.find('[name="family_cost"]').eq(i).val();
            break;
        }
    }

    /*=================
     單身男女年齡選擇
     =================*/
    var pom; //男生變數
    var pof; //女生變數
    var ma = thisArea.find('[name="your_age"]'); //男性年齡選項
    var wa = thisArea.find('[name="other_age"]'); //女性年齡選項
    var avm = 0; //男性平均餘命
    var avf = 0; //女性平均餘命
    var po2 = 0; //夫妻平均餘命較短之年期
    var fr = 0;
    var lr = 0;

    //未選擇性別及男女年齡時出現的警告
    if (a == "nomarry" && sex == "") {
        alert("您忘了回答第３題！請選擇男性或女性的年齡，謝謝！")
        sex = "";
    }
    /*---------------
     未婚--男性年齡
     --------------*/
    if (a == "nomarry" && sex == "B") {
        pom = ma.val();
        if (posi == "laborer" && pom > 59) //男性勞工年齡大於59
        {
            pom = 60;
            avm = (73 - pom); //男性平均餘命
        }
        pof = 0;
        avm = (73 - pom);
        avf = 0; //女性平均餘命
        //判斷是否有選擇男生年齡？
        if (pom == 0) {
            alert("您忘了回答第３題！請選擇男性的年齡，謝謝！")
            pom = 0;
        }
        //家庭養老金（以喪偶養老金計） = 退休時每月生活費 * 0.5 * 12 * 男性平均餘命)
        fr = Math.round(oj * 0.5 * 12 * avm);
        thisArea.find('[name="form222"] [name="family_retire"]').val(fr);
    }
    /*---------------
     未婚--女性年齡
     --------------*/
    if (a == "nomarry" && sex == "G") {
        pof = wa.val();
        if (posi == "laborer" && pof > 59) //女性勞工年齡大於59
        {
            pof = 60;
            avf = (80 - pof);
        }
        pom = 0;
        avm = 0;
        avf = (80 - pof);
        //判斷是否有選擇女生年齡？
        if (pof == 0) {
            alert("您忘了回答第３題！請選擇女性的年齡，謝謝！")
            pof = 0;
        }
        //家庭養老金（以喪偶養老金計） = 退休時每月生活費 * 0.5 * 12 * 女性平均餘命)
        fr = Math.round(oj * 0.5 * 12 * avf);
        thisArea.find('[name="form222"] [name="family_retire"]').val(fr);
    }

    //喪偶養老退休金 = 退休時每月生活費 * 0.5 * 12 * (本人退休時夫妻平均餘命中較長年期 - 較短年期)
    //單身男、女性無配偶，所以無喪偶養老金
    lr = 0;
    thisArea.find('[name="form222"] [name="lost_retire"]').val(lr);

    /*-------------------
     已婚--男、女性年齡
     ------------------*/
    if (a == "marryed") {
        //第３題：本人的年齡
        pom = ma.val();
        if (posi == "laborer" && pom > 59) //男性
        {
            pom = 60;
            avm = (73 - pom);
        }
        if (pom == 0) //判斷是否有選擇年齡
        {
            alert("您忘了回答第３題！請選擇男生的年齡，謝謝！")
            pom = 0;
            avm = 0; //已婚未選年齡：男性平均餘命為０
        }
        //第３題 :配偶的年齡
        pof = wa.val(); //第3題：配偶的年齡，將被選擇的值傳給變數 po1
        if (posi == "laborer" && pof > 59) //女性
        {
            pof = 60;
            avf = (80 - pof);
        }
        avm = (73 - pom);
        avf = (80 - pof);

        //判斷是否有選擇配偶年齡
        if (pof == 0) {
            alert("您忘了回答第３題！請選擇女生的年齡，謝謝！")
            pof = 0;
            avf = 0; //已婚未選年齡：女性平均餘命為０
        }
        /*---------------------------
         判斷夫妻平均餘命中何者較短
         --------------------------*/
        if (avm > avf) //男大於女
        {
            po2 = avf;
        } else //女大於男
        {
            po2 = avm;
        }

        //家庭養老金 = 退休時每月生活費 * 0.7 * 12 * (退休時夫妻平均餘命中較短之年期)
        fr = Math.round(oj * 0.7 * 12 * parseInt(po2));

        thisArea.find('[name="form222"] [name="family_retire"]').val(fr);
        //喪偶養老退休金 = 退休時每月生活費 * 0.5 * 12 * (本人退休時夫妻平均餘命中較長年期 - 較短年期)
        lr = Math.round(oj * 0.5 * 12 * Math.abs(parseInt(avm) - parseInt(avf)));
        thisArea.find('[name="form222"] [name="lost_retire"]').val(lr);

    }

    /**********************
     必要的養老資金
     **********************/
    var tempValue = parseInt(fr) + parseInt(lr);
    thisArea.find('[name="form222"] [name="must_retire"]').val(tempValue);
    //以上家庭養老金及喪偶養老計算結束

    /***************************
     以下計算現有流動資產
     ***************************/
    //第１０、１１題：現有流動資產
    var bs = 0; //銀行存款
    var pj = 0; //投資
    var fa = 0; //流動資產總額
    var bc = thisArea.find('[name="bank_save"]').length;
    var bd = thisArea.find('[name="invest"]').length;
    for (i = 0; i < bc; i++) //判斷現有銀行存款有多少？
    {
        if (thisArea.find('[name="bank_save"]').eq(i).is(':checked')) {
            bs = thisArea.find('[name="bank_save"]').eq(i).val();
            break;
        }
    }
    for (i = 0; i < bd; i++) //判斷現有投資金額有多少？
    {
        if (thisArea.find('[name="invest"]').eq(i).is(':checked')) {
            pj = thisArea.find('[name="invest"]').eq(i).val();
            break;
        }
    }
    fa = parseInt(bs) + parseInt(pj);
    thisArea.find('[name="form222"] [name="flow_assets"]').val(fa);
    //以上現有流動資產計算結束

    /*******************************
     以下計算預估工作退休金
     *******************************/
    //第６、７題：預估工作退休金
    var sl = 0; //被選擇到的項目的值(月薪)
    var sll = thisArea.find('[name="salary"]').length; //表單 105 中薪資項目總個數的長度
    var sly = 0; //年薪
    var si = 0; //第幾個 i
    var rb = thisArea.find('[name="retire_base"]'); //表單 107 中勞工退休基數
    var rbo = thisArea.find('[name="official_base"]'); //表單 107 中公教人員退休基數
    var rbv = 0; //勞工被選到的基數值
    var rbvo = 0; //公教被選到的基數值
    var pr = 0; //將退休金傳遞給已有養老準備
	

    for (i = 0; i < sll; i++) //判斷目前月薪
    {
        if (thisArea.find('[name="salary"]').eq(i).is(':checked')) {

			
			si = i + 1;
			break;
			
			/**
            var kindOfOption = thisArea.find('[name="salary"]').eq(i).parents('ul:first');
            if (kindOfOption.attr('class') == 'costOfChildren') {
                si = i + 1;
                break;
            } else {
                si = i + 1;
                break;
            }
			**/
        }
    }
    /*===================================
     勞工退休新制（公教人員不適用）
     ==================================*/
	 

    if (posi == "laborer" && si == 0) //身份為 勞工 但是未選擇 新制 或 舊制 項目時提出警告！
    {
        alert("你忘了回答第５或第６題，請依新制或舊制擇一選答。謝謝！")
    }
    if (si > 0 && si <= 12) // si 小於 12 表示選擇新制
    {
        sl = thisArea.find('[name="salary"]').eq(i).val();
        sly = sl * 12; //年薪
        if (sex == "B") //男性新制
        {
            pr = Math.round(sly * (Math.pow(1.015, (60 - pom)) - Math.pow(1.02, (60 - pom))) / (0.015 - 0.02) * 0.06);
            thisArea.find('[name="form222"] [name="predict_retire"]').val(pr);
        }
        if (sex == "G") //女性新制
        {
            pr = Math.round(sly * (Math.pow(1.015, (60 - pof)) - Math.pow(1.02, (60 - pof))) / (0.015 - 0.02) * 0.06);
            thisArea.find('[name="form222"] [name="predict_retire"]').val(pr);
        }
    }
    /*====================================
     公務人員 及 勞工選擇退休舊制
     ===================================*/
    if (si > 12 && si != 0) // si 大於 11 表示選擇舊制，須繼續做答第７題
    {
        sl = thisArea.find('[name="salary"]').val();
        if (posi == "official") //公務員
        {
            rbvo = rbo.val();
            rbv = 0;

            pr = Math.round(2 * sl * 0.75 * rbvo);
            thisArea.find('[name="form222"] [name="predict_retire"]').val(pr);
        }
        if (posi == "laborer") //勞工
        {
            rbv = rb.val();
            rbvo = 0;
            pr = Math.round(sl * 0.75 * rbv);
            //舊制預估工作退休金 = 退休時每月薪資 * 0.75 * 預估基數
            thisArea.find('[name="form222"] [name="predict_retire"]').val(pr);
        }
        if (rbv == "#" || rbvo == "#") {
            rbv = 0;
            pr = rbv;
            thisArea.find('[name="form222"] [name="predict_retire"]').val(pr);
            alert("您忘了回答第７題！請選擇您的基數。謝謝！")
        }
    }
    if (si <= 12 && posi == "official") //若身份為 公教人員 未選擇薪資時提出警告
    {
        alert("你忘了回答第６題，請選擇你預計退休當時每月薪資。謝謝！")
    }
    //預估工作退休金計算結束

    /************************
     以下計算社會保險
     ************************/
    //第９題：社會保險　－　勞保（公教人員無此項）
    var tsi = 0;
    var ttsi = 0;
    var bc = thisArea.find('[name="insurance_salary"]');

    if (posi == "laborer" && tsi != "#") {
        tsi = bc.val();
        ttsi = Math.round(parseFloat(tsi) * 45 / 10000);
        thisArea.find('[name="form222"] [name="total_society_insurance"]').val(ttsi);
    }
    if (posi == "laborer" && tsi == "#") {
        ttsi = 0;
        thisArea.find('[name="form222"] [name="total_society_insurance"]').val(ttsi);
        alert("你忘了回答第９題，請選擇投保薪資。謝謝！")
    }
    if (posi == "official") {
        ttsi = 0;
        thisArea.find('[name="form222"] [name="total_society_insurance"]').val(ttsi);
    }
    //以上社會保險計算結束

    /******************************
     以下計算因病身故保險給付
     ******************************/
    //第１２題：退休養老金
    var gi = 0;
    var bc = thisArea.find('[name="period_insurance"]').length;
    for (i = 0; i < bc; i++) {
        if (thisArea.find('[name="period_insurance"]').eq(i).is(':checked')) {
            gi = thisArea.find('[name="period_insurance"]').eq(i).val();
            break;
        }
    }
    thisArea.find('[name="form222"] [name="total_period_insurance"]').val(gi);
    //以上因病身故保障金額計算結束

    /********************************
     以下計算商業年金險養老給付
     ********************************/
    //第１３題：個人商業年金保障金額
    var li = 0;
    var bc = thisArea.find('[name="life_insurance"]').length;
    for (i = 0; i < bc; i++) {
        if (thisArea.find('[name="life_insurance"]').eq(i).is(':checked')) {
            li = thisArea.find('[name="life_insurance"]').eq(i).val();
            break;
        }
    }
    thisArea.find('[name="form222"] [name="total_life_insurance"]').val(li);
    //以上個人商業年金計算結束

    /*********************
     已有的養老準備
     *********************/
    var tempVal = parseInt(fa) + parseInt(pr) + Math.round(ttsi) + parseInt(gi) + parseInt(li);
    thisArea.find('[name="form222"] [name="prepare_retire"]').val(tempVal);

    /******************
     退休保障缺口
     ******************/
    var mr = thisArea.find('[name="form222"] [name="must_retire"]').val();
    var ar = thisArea.find('[name="form222"] [name="prepare_retire"]').val();
    var nef = 0;
    if ((mr - ar) > 0) {
        nef = parseInt(mr) - parseInt(ar);
    } else {
        nef = 0;
    }
    thisArea.find('[name="form222"] [name="not_enough"]').text(nef);
}

function fullsearch(view){

    var searchbar = $('<div class="brittany"></div>')
                    .appendTo( view );

    var search = $('<input id="searchInput" type="text" placeholder="請輸入關鍵字">'
                    +'<a id="searchButton" href="#" class="roberta">搜尋</a>')
                .appendTo( searchbar );

    var target = $('<div id="searchResult"></div>').appendTo( view );

    $("#searchButton").off('click').on('click',function(ev){
        var $this = $(this);
        
        ev.preventDefault();

        var value = $("#searchInput").val();
        
        value = value.replace(/ /g, "");
        if(value == '') {
            alert('請輸入查詢關鍵字');
        }
        else {
            _keywordSearch({
                target: target,
                keyword: value
            });
        }
    }); // end click: searchButton

    $("#searchInput").on('keypress',function(ev) {
        //ev.preventDefault();
        var code = ev.which;
        if(code == 13){
            var input = $(this);
            var value = input.val();
            value = value.replace(/ /g, "");
            console.debug(value);
            if(value == '') {
                alert('請輸入查詢關鍵字');
            }
            else {
                _keywordSearch({
                    target: target,
                    keyword: value
                });
            }
        }
    }); // end keypress: searchInput    
} // end fullsearch function

function _keywordSearch(conf){

    conf = $.extend({
        page: 1
    }, conf);

    var target = conf.target,
        searchKeyword = conf.keyword,
        page = conf.page;

    _getSearchResult({
        keyword: searchKeyword,
        page: page,
		callback : function(resp) {
			console.debug(resp);
		    conf.target.empty();

		    // create content
		    var contentEle = $('<div class="container">'
		                        +'<h2 class="page-header">搜尋結果</h2>'
		                        +'<div class="page-content-wrap"><div class="row"><div class="col-md-12">'
		                            +'<div class="contentflame"></div>'
		                        +'</div></div></div>'
		                    +'</div>').appendTo( target );
		    var contentflame = contentEle.find('.contentflame');

		    contentflame.append('<p class="lead">搜尋關鍵字 "<em>'+resp.keyword+'</em>" 結果，共用 '+resp.pageInfo.totalRec+' 筆。</p>');
		    
		    var resultListEle = $('<ul class="textls-type-04"></ul>').appendTo( contentflame );
		    _createResultList({
		        target: resultListEle,
		        setEmpty: true,
		        searchResults: resp.searchResults
		    });

		    var paginationEle = $('<div class="bottom_pagination"></div>').appendTo( contentflame );
		    GardenUtils.display.pagination({
		        pageInfo: resp.pageInfo,
		        target: paginationEle,
		        getPageInfoCallBackFn: function(pageNum){
		            _getSearchResult({
		                keyword: searchKeyword,
		                page: pageNum,
						callback : function(res) {
							_createResultList({
				                target: resultListEle,
				                setEmpty: true,
				                searchResults: res.searchResults
				            });
						}
		            });

		            
		        }
		    });
		}
    });

	
} // end  _keywordSearch function

function _getSearchResult(conf){ // keyword, page

    console.log('_getSearchResult', conf.keyword, conf.page);

    var resp = {};
	
	GardenUtils.ajax.loading({
		async: false, 
        url: ajaxPrefix + 'jsp/fullSearch.jsp?v=' + new Date().getTime(),
		data : {
            keyword : conf.keyword,
            page : conf.page
        },
        dataType: 'json',
		callback : conf.callback
    });
    
    return resp;
} // end _getSearchResult function

function _createResultList(conf){ // target, setEmpty, searchResults

    if(conf.setEmpty) conf.target.empty();

    $.each(conf.searchResults, function(i, result){
        var resultEle = $('<li><h6><a href="'+result.url+'">'+result.title+'</a></h6>'
                                +'<p>'+result.description+'</p>'
                                +'<div><a href="'+result.url+'">詳全文</a></div></li>').appendTo( conf.target );
    }); // end each: searchResults
} // end _createResultList function


function menu_left_investment(view){
    menu_left(view, '投資理財');
} // end menu_left_insurance function