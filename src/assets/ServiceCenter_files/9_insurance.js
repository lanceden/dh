function ins(conf){

	conf = $.extend({param:{}}, conf);
	conf.param = $.extend({
		page: 1,
		pageSize: 10,
		isPagination: true,
		keyword: '',
		areaId: '',
		categoryId: '',
		propertyId: '',
		typeId: '',
		announceId: ''
	}, conf.param);

	//console.debug('ins conf', conf);

	conf['callback'] = function(config){
		_createCategoryContent(config);
	};

	_getInsData(conf);
} // end ins function

function _getInsData(conf){

	//console.debug('_getInsData conf', conf, conf.categoryId, conf.target);

	var param = conf.param;

	GardenUtils.ajax.loading({
        async : false,
        //url: ajaxPrefix + 'mock/insurance.json?v='+ new Date().getTime(),
        url: ajaxPrefix + 'jsp/insuranceInfo.jsp?areaId='+param.areaId+'&categoryId='+param.categoryId+'&propertyId='+param.propertyId
        	+'&typeId='+param.typeId+'&keyword='+encodeURI(param.keyword)+'&announceId='+param.announceId+'&page='+param.page+'&pageSize='+param.pageSize+'&v='+ new Date().getTime(),
        dataType: 'json',
		callback : function(json) {
            if(typeof json == 'string') json = $.parseJSON(json);
            conf['datas'] = json;
            conf.callback(conf);
        }
    });
	
} // end _getInsData function

function _createCategoryContent(conf){

	//console.debug('_createCategoryContent conf', conf);

	var target = conf.target.empty(),
        all_datas = conf.datas.hasOwnProperty('datas')?conf.datas.datas:[],
		categoryId = conf.param.categoryId,
        keyword = conf.param.keyword,
		areaId = conf.param.areaId,
		propertyId = conf.param.propertyId,
		typeId = conf.param.typeId,
		pageSize = conf.param.pageSize,
		isPagination = conf.param.isPagination;

	if( areaId != '' ){ // 專區: areaId=3
		var gaTab_obj = {
            target: target,
            options: {
                tabTitleContainerClass: 'tab_red'
            },
            datas: []
        }; // end gaTab_obj

        $.each(all_datas, function(i, dataObj){
            gaTab_obj.datas.push({
                id: dataObj.category_id,
                name: dataObj.category_name
            });
        });

        if(areaId == insurance_conf.aged_areaId){ // 高齡化專區
        	gaTab_obj.datas.push({
                id: 'aged_business_info',
                name: '業務資訊',
                attr: 'target="_blank"'
            },{
                id: 'aged_promotional_info',
                name: '宣導活動資訊',
                attr: 'target="_blank"'
            });
		} else if(areaId == insurance_conf.inKind_areaId){ // 實物型專區
        	gaTab_obj.datas.push({
                id: 'inKind_prospectus',
                name: '合作廠商資訊',
                attr: 'target="_blank"'
            });
		}

        gaTab_obj['callback'] =  function(config){

            var target = config.target;

            conf['target'] = target;
            conf['datas'] = {
            	datas: all_datas
            };
            conf['categoryId'] = target.attr('id');

            console.debug('area categoryId', conf['categoryId']);

            _createInsContent(conf);
        }; // end callback: category tab

		_createGATab(gaTab_obj);

		if(areaId == insurance_conf.aged_areaId){ // 高齡化專區
			target.find('[href="#aged_business_info"], [ga-tab-href="#aged_business_info"]').attr('href', ajaxPrefix+'pdf/26_Aged_Product.pdf');
			// target.find('[href="#aged_promotional_info"], [ga-tab-href="#aged_promotional_info"]').attr('href', 'e34d895214.html');
			target.find('[href="#aged_promotional_info"], [ga-tab-href="#aged_promotional_info"]').attr('href', 'http://care.skl.com.tw/');

			target.find('.ga-tab-content-container').append('<a  href="'+ajaxPrefix+'pdf/26_Aged_Product.pdf" target="_blank" class="ga-tab-title-mobile">業務資訊</a>');
			// target.find('.ga-tab-content-container').append('<a  href="e34d895214.html" target="_blank" class="ga-tab-title-mobile">宣導活動資訊</a>');
			target.find('.ga-tab-content-container').append('<a  href="http://care.skl.com.tw/" target="_blank" class="ga-tab-title-mobile">宣導活動資訊</a>');
		} else if(areaId == insurance_conf.inKind_areaId){ // 實物型專區
			target.find('[href="#inKind_prospectus"], [ga-tab-href="#inKind_prospectus"]').attr('href', ajaxPrefix+'pdf/30_in_kind_product_prospectus.pdf');
			
			target.find('.ga-tab-content-container').append('<a  href="'+ajaxPrefix+'pdf/30_in_kind_product_prospectus.pdf" target="_blank" class="ga-tab-title-mobile">合作廠商資訊</a>');
		}
	} else if( categoryId != '' ){ // 險種: categoryId=12
		conf['categoryId'] = categoryId;
		_createInsContent(conf);
	} else { // 族群: typeId=3; 關鍵字

		$.each(all_datas, function(i, dataObj){
			var categoryId = dataObj.category_id;
            var content_div = $('<div class="sk-insurance-product-service-freshman-block"></div>').appendTo(target);
            content_div.append('<div class="product-service-sub-tit">'
            	+'<div class="imsquare '+dataObj.category_class_light+'"></div>'
            	+'<p class="product-service-subtitp">'+dataObj.category_name+'</p></div>'
            	+'<div id="'+categoryId+'" class="insuranceContent product-service-content-filter"></div>');

            //console.debug('_createCategoryContent all_datas', all_datas);

            conf['target'] = target.find('#'+categoryId+'.insuranceContent');
			conf['categoryId'] = categoryId;
            conf['datas'] = {
            	datas: all_datas
            };
			_createInsContent(conf);
        });

        if( all_datas.length == 0 ){
	    	target.append('<div class="noDatas">查無資料</div>');
	    }
	}
} // end _createCategoryContent function

function _createInsContent(conf){

	var target = conf.target,
		categoryId = conf.categoryId,
		all_datas = conf.datas.hasOwnProperty('datas')?conf.datas.datas:[],
		datas = [];

	// console.debug('_createInsContent target', target);
	// console.debug('_createInsContent categoryId', categoryId);

	$.each(all_datas, function(i, dataObj){
		//alert(categoryId+', '+dataObj.category_id+', '+dataObj.category_name);
		if(categoryId == dataObj.category_id){
			datas = dataObj;
		}
	});

	console.debug('_createInsContent datas', datas);

	if( target.find('div.insuranceProducts').length == 0 ){
        var content_div = $('<div class="insuranceProducts"></div>').appendTo( target );
    }

    if( target.find('.bottom_pagination').length == 0 ){
        var paginationEle = $('<div class="bottom_pagination"></div>').appendTo( target );

        if( datas.hasOwnProperty('pageInfo') ){
        	//console.log('paginationEle', datas.pageInfo);

	        GardenUtils.display.pagination({
	            pageInfo: datas.pageInfo,
	            target: target.find('.bottom_pagination').empty(),
	            getPageInfoCallBackFn: function(pageNum){

	            	var tmp_conf = $.extend({}, conf);

	                tmp_conf['param']['page'] = pageNum;
	                tmp_conf['target'] = target.find('.insuranceProducts');
	                tmp_conf.callback = function(config) {

	                	//console.debug('pagination config', config, config.target);

	                	var datas = config.datas.hasOwnProperty('datas')?config.datas.datas:[];
	                	$.each(datas, function(i, dataObj){
	                		if(categoryId == dataObj.category_id){
	                			config['datas'] = dataObj;
	                		}
	                	});

	                    _createInsList(config);
	                };

	                _getInsData(tmp_conf);
	            }
	        });
        }
    }
} // end _createInsContent function

function _createInsList(conf){
	var target = conf.target.empty(),
        datas = conf.datas.hasOwnProperty('ins_datas')?conf.datas:[];

    //console.log('_createInsList', conf, datas);

    var properties = datas.properties,
		ins_datas = datas.ins_datas;

    $.each(ins_datas, function(i, data){
    	var ins_age = data.hasOwnProperty('ins_age')?('投保年齡：'+data.ins_age):'';

    	var liEle = $('<div class="insuranceProducts sk-insurance-product-service-content">'
    		+'<div class="sk-insurance-product-service-content-L">'
    		+'<div class="sk-insurance-product-service-content-Lup">'
	    	+'<div class="sk-insurance-product-service-content-Lup-sub-tit">'
	    	+'<div class="sk-insurance-product-service-content-Lup-sub-tit-tag insurance-product-collapse">'
	    	+'<div class="insuranceTags sk-insurance-product-service-content-Lup-sub-tit-tag-item"></div>'
	    	//+'<div class="insuranceIcon sk-insurance-product-service-content-Lup-sub-tit-tag-plmi"><img src="image/icon-plus.svg"/></div>'
	    	+'</div>'
	    	+'<p><span class="boldd fontsize-b">'+data.ins_name+'</span></p>'
	    	//+'<p><span class="boldd fontsize-s">'+(data.ins_start_age!=-1&&data.ins_end_age!=-1? ins_age:'')+'</span></p></div>'
	    	+'<p><span class="boldd fontsize-s">'+ins_age+'</span></p></div>'
	    	+'<ul class="insuranceFeatures insurance-product-collapse-content"></ul></div>'
	    	+'<div class="sk-insurance-product-service-content-Ldown">'
	    	+'<ul class="insuranceProperties insurance-product-collapse-content"></ul>'
	    	+'<div class="sk-insurance-product-service-content-Rdown-block">'
	    	+'<div class="sk-insurance-product-service-content-Rdown-btn">'
	    	+'<a href="'+data.url+'"><span class="fontsize-ss">瞭解更多</span></a></div>'
	    	+'<div class="sk-insurance-product-service-content-Rdown-pic"><img src="img/triangle.png"/></div>'
	    	+'</div></div></div></div>').appendTo( target );

    	var insuranceTags_div = liEle.find('.insuranceTags'),
    		insuranceFeatures_div = liEle.find('.insuranceFeatures'),
    		insuranceProperties_div = liEle.find('.insuranceProperties');

    	// 商品 tag
    	if( data.hasOwnProperty('ins_Hot') && data.ins_Hot ){
    		insuranceTags_div.append('<p class="sk-insurance-product-service-content-Lup-sub-tit-tag-item-a insurance-hot">HOT!</p>');
    	}

    	if( data.hasOwnProperty('tags') ){
    		$.each(data.tags, function(j, tagObj){
	    		insuranceTags_div.append('<p class="sk-insurance-product-service-content-Lup-sub-tit-tag-item-a '+tagObj.class_name+'">'+tagObj.name+'</p>');
	    	});
    	}
    	

    	// 商品特色
    	if( data.hasOwnProperty('features') ){
	    	$.each(data.features, function(j, feature){
	    		insuranceFeatures_div.append('<li><div class="sk-insurance-product-service-square-pic">'
	    			+'<div class="sk-insurance-product-service-square-red"></div></div>'
	    			+'<p>'+feature+'</p></li>');
	    	});
	    }

    	// 商品特點
    	if( data.hasOwnProperty('property_ids') ){
	    	var selectedProperties = data.property_ids.indexOf(',') != -1? data.property_ids.split(','): [data.property_ids];
	    	$.each(properties, function(j, property){
	    		var img_url = property.img_url_grey;

	    		if($.inArray(property.property_id, selectedProperties) != -1){
	    			img_url = property.img_url_color;
	    		}

	    		insuranceProperties_div.append('<li><img src="'+img_url+'"/></li>');
	    	});
	    }
    }); // end ins datas

    // 商品項目收合
    $('.insurance-product-collapse').off('click').on('click', function(){
    	$(this).toggleClass('active');
    	$(this).parents('.insuranceProducts').first().find('.insurance-product-collapse-content').toggleClass('active');
    });
} // end _createInsList function

// 商品搜尋
function productSearch(view){
	var target = view.find('#product_searchResult');
	var keyword = '';

	var url = window.location.href;
    var params_str = url.indexOf('?')!=-1 && url.split('?').length > 1? url.split('?')[1]:'';
    var params = params_str.indexOf('&')!=-1? params_str.split('&'):[params_str];
	$.each(params, function(i, param_str){
        if( param_str.indexOf('=') != -1 ){
            var key = param_str.split('=')[0];
            var value = param_str.split('=').length > 1? param_str.split('=')[1]:'';
            if(key == 'keyword' && value != ''){
                keyword = value;
            }
        }
    });

	ins({
		target: target,
		param:{
			keyword: keyword
		}
	});
} // end productSearch function

function _getInsPreviewContentData(config){

    config = $.extend({page:1}, config);
    var isPreview = config.hasOwnProperty('isPreview')? '&isPreview='+config.isPreview: '';

    $.ajax({
        //url: ajaxPrefix + 'mock/qa.json?v='+new Date().getTime(),
        url: ajaxPrefix + 'jsp/ins_preview_data.jsp?typeId='+config.typeId+'&pageSize='+config.pageSize+'&page='+config.page+isPreview+'&v=' + new Date().getTime(),
        dataType: 'json',
        success:function(json) {
            if( typeof json == 'string' ) json = $.parseJSON(json);
            config['datas'] = json;
            config.callback( config );
        }
    });
} // end _getInsPreviewContentData function

function _createPreviewContent(config){
    var target = config.target.empty(),
        pageSize = config.pageSize,
        datas = config.datas;

    if( target.find('.ga-qa-item-container').length == 0 ){
        var content_ul = $('<ul class="ga-qa-item-container skin-044-sty"></ul>').appendTo( target );
        config.target = content_ul;;
    }

    if( config.isPagination && target.find('.bottom_pagination').length == 0 ){
        var paginationEle = $('<div class="bottom_pagination"></div>').appendTo( target );

        console.log('paginationEle', datas.pageInfo);

        GardenUtils.display.pagination({
            pageInfo: datas.pageInfo,
            target: target.find('.bottom_pagination').empty(),
            getPageInfoCallBackFn: function(pageNum){
                config.page = pageNum;
                config.target = content_ul;
                config.callback = function(config){
                    _createQAContentList(config);
                };

                _getInsPreviewContentData(config);
            }
        });
    } else if( !config.isPagination ){
    	config.target = content_ul;
    	_createQAContentList(config);
    }
} // end _createPreviewContent function

function insurance(){

	// 商品特點 filter
	$('.sk-insurance-product-service-filteritem li').off('click').on('click', function(){

        $(this).toggleClass('active');

        var categoryId = $(this).parent().attr('categoryId');

        var propertyIds = '',
        	active_propertyEle = $('.sk-insurance-product-service-filteritem li.active');
        if(active_propertyEle.length > 0){
        	active_propertyEle.each(function(i){
	            if(i != 0) propertyIds += ',';
	            propertyIds += $(this).attr('propertyId');
	        });
        } else {
        	propertyIds = '-1';
        }
        

        ins({
            target: $('#sk-insurance-product-service-content-list'),
            param:{
               categoryId: categoryId,
               propertyId: propertyIds
            }
         });
    });
	
	// 注意事項 170220 Bill update
	$('div.notice a').off('click').on('click',function(ev){
		ev.preventDefault();
		
		var notice_target = $(this).parents('.notice').first().attr('target'),
			notice_contents = [], pop_title ='注意事項';

		if( notice_target == 'insurance_content' ){
			pop_title = '保險內容';
			$('.'+notice_target).each(function(){
				if($(this).find('.insurance_content_desc_detail').length > 0){
					notice_contents.push({
						title: $(this).find('.insurance_content_title').text(),
						description:　$(this).find('.insurance_content_desc_detail').html()
					});
				}
			});
		} else if( notice_target == 'insurance_content_img' ){
			pop_title = '圖解說明';
			$('.'+notice_target).each(function(){
				notice_contents.push({
					//title: '圖解說明',
					description:　$(this).attr('notice')
				});
			});
		} else if( notice_target == 'insurance_condition_desc' ){
			pop_title = '投保條件';
			notice_contents.push({
				title: $(this).parents('.insurance_condition_title').children('span').text(),
				description:　$(this).parents('.insurance_condition_title').find('.insurance_condition_desc_detail').html()
			});
		}

		var notice_content = '';
		$.each(notice_contents, function(i, contentObj){
			notice_content += '<div class="notice_ele">';
            if(contentObj.title!=undefined && contentObj.title!=''){
            	notice_content += ' <div class="skholdings-015-main-page-sub-title"><div class="imsquare"></div>'
            	+'<p>'+contentObj.title+'</p><div class="arrow-icon"> <img src="img/arrow-to-top.png"> </div> </div>';
            }
            notice_content += '<p>'+contentObj.description+'</p></div>';
		});

		if( notice_content == '' ){
			notice_content = '暫無資料';
		}

		GardenUtils.display.popup({
			title: pop_title,			 
		    content : notice_content,//'<div class="skholdings-015-main-page-sub-title"> <div class="imsquare"></div> <p>身故(全殘廢)保險金</p> <div class="arrow-icon"> <img src="img/arrow-to-top.png"> </div> </div><p>未曾領取重大傷病保險金者，本公司按下列二款之金額最大者給付後，本契約效力即行終止：1. 保險金額。2. 「應繳保險費總和」。</p><div class="skholdings-015-main-page-sub-title"> <div class="imsquare"></div> <p>第一次重大傷病保險金</p> <div class="arrow-icon"> <img src="img/arrow-to-top.png"> </div> </div><p>被保險人自本契約生效日或復效日起經「等待期間」後初次罹患並診斷確定符合保單條款第九條約定之「重大傷病」其中六組之任一組時，本公司依其「診斷確定日」按下列二款之金額最大者給付「第一次重大傷病保險金」。1. 保險金額。2. 「應繳保險費總和」。</p><div class="skholdings-015-main-page-sub-title"> <div class="imsquare"></div> <p>第二次重大傷病保險金</p> <div class="arrow-icon"> <img src="img/arrow-to-top.png"> </div> </div><p>被保險人自罹患第一次「重大傷病」經過一年後，第二次罹患「重大傷病」，且非第一次「重大傷病」所屬組別，而係其餘五組之任一組時，本公司按「保險金額」給付「第二次重大傷病保險金」。</p>',
		    closeCallBackFn : function(){},
			showCallBackFn : function(){},
		    isShowSubmit : false,
			isShowClose : true
		});
	});
	
	// 商品內頁底色
	$('.insurance-content').each(function(i){
		if( i%2 == 0 ){
			$(this).addClass('deep-gray');
		} else {
			$(this).addClass('light-gray');
		}
	});

	// 商品內頁 保戶心聲
	$('.productQA').off('click').on('click', function(ev){
		ev.preventDefault();

		window.location.href = '3d516f1d14.html?serviceId='+$(this).attr('serviceId');
	});

	// 商品搜尋
	$('.skinsurance-search-block  .search-pic').css('cursor', 'pointer');
	$('.skinsurance-search-block  .search-pic').off('click').on('click', function(){
		var keyword = $('.skinsurance-search-block [name="keyword"]').val();
		var tmp_val = keyword;

		while( tmp_val.indexOf(' ') != -1 ){
			tmp_val = tmp_val.replace(' ', '');
		}

		if( tmp_val.length == 0 ){
			alert('請輸入搜尋內容');
		} else {
			
			window.location.href = 'productSearch.html?keyword='+encodeURIComponent(keyword);
		}
	});
	$('.skinsurance-search-block [name="keyword"]').on('keypress', function(ev){

		if(ev.which == 13) {
			$('.skinsurance-search-block  .search-pic').trigger('click');
	    }
		
	});
} // end insurance function

function insuranceIndex(conf){
	var target = conf.target.find('#insuranceIndex ul');

	_getInsuranceIndexData({
		target: target,
		callback: function(config){
			var target = config.target,
				datas = config.datas;

			if( datas.hasOwnProperty('category') ){
				$.each(datas.category, function(i, categoryObj){
					var category_li = $('<li class="insupaper-item">'
						+'<p class="item-top" categoryId="'+categoryObj.categoryId+'">'+categoryObj.categoryName+'</p>'
						+'<div class="item-middle" style="background-image:url('+categoryObj.pic+')"></div>'
						+'<div class="item-bottom"><ul class="ins_list"></ul></div>'
						+'<div class="morebtnn"><a href="'+categoryObj.url+'">瞭解更多</a></div>'
						+'<div class="triangle"><img src="img/triangle.png"></div></li>').appendTo(target);

					if( categoryObj.hasOwnProperty('ins') ){
						$.each(categoryObj.ins, function(j, insObj){
							//var tmp_name = insObj.insName.length > 10? insObj.insName.substr(0,9)+'...':insObj.insName;
							
							var tmp_name = _insuranceName({
								insName: insObj.insName
							});

							category_li.find('ul.ins_list').append('<li><div class="item-bottom-pic">'
								+'<img src="img/arrow-to-right-02.png"></div>'
								+'<a href="content.html?insId='+insObj.insId+'" title="'+insObj.insName+'">'+tmp_name+'</a></li>');
						});
					}
				});
			} // end if: datas is exist
		}
	});

	$(window).resize(function() {
		target.find('ul.ins_list li > a').each(function(){
			$(this).text( _insuranceName({
				insName: $(this).attr('title')
			}) );
		});
	});
} // end insuranceIndex function

function _insuranceName(conf){
	var insName = conf.insName;

	var tmp_name = insName;
	var window_w = $(window).width();
	if( window_w > 1024 ){
		tmp_name = insName.length > 13? insName.substr(0,12)+'...':insName;
	} else if( window_w > 768 ){
		tmp_name = insName.length > 10? insName.substr(0,9)+'...':insName;
	} else if( window_w > 480 ){
		tmp_name = insName.length > 19? insName.substr(0,18)+'...':insName;
	} else if( window_w > 375 ){
		tmp_name = insName.length > 21? insName.substr(0,20)+'...':insName;
	} else if( window_w > 320 ){
		tmp_name = insName.length > 18? insName.substr(0,17)+'...':insName;
	} else {
		tmp_name = insName.length > 16? insName.substr(0,15)+'...':insName;
	}

	return tmp_name;
} // end _insuranceName function

function _getInsuranceIndexData(conf){
    $.ajax({
        url: ajaxPrefix + 'jsp/categoryInfo.jsp?v=' + new Date().getTime(),
        dataType: 'json',
        success:function(json) {
            if( typeof json == 'string' ) json = $.parseJSON(json);
            conf['datas'] = json;
            conf.callback( conf );
        }
    });
} // end _getInsuranceIndexData function

function insuranceIndexType(conf){
	var target = conf.target.find('#insuranceIndexType');

	_getInsuranceIndexTypeData({
		target: target,
		callback: function(config){
			var target = config.target,
				datas = config.datas;

			if(datas.hasOwnProperty('type')){
				$.each(datas.type, function(i, typeObj){
					$('<a href="'+typeObj.url+'" class="items" typeId="'+typeObj.id+'">'
						+'<div class="item-pic"><img src="'+typeObj.pic+'"></div>'
						+'<div class="item-txt"><div class="item-txt-top">'+typeObj.name+'</div>'
						+'<div class="item-txt-bottom">'+typeObj.desc+'</div></div></a>').appendTo(target);
				});
			}
		}
	});
} // end insuranceIndexType fucntion

function _getInsuranceIndexTypeData(conf){
    $.ajax({
        url: ajaxPrefix + 'jsp/typeInfo.jsp?v=' + new Date().getTime(),
        dataType: 'json',
        success:function(json) {
            if( typeof json == 'string' ) json = $.parseJSON(json);
            conf['datas'] = json;
            conf.callback( conf );
        }
    });
} // end _getInsuranceIndexTypeData function

function miniProduct(view){
	view.find('.ga-tab-title-container').append('<li><a href="'+ajaxPrefix+'pdf/27_Mini_Products.pdf" ga-tab="collapse" target="_blank">業務資訊</a></li>'
		+'<li><a href="'+ajaxPrefix+'pdf/微型保險商品聯絡資訊.pdf" ga-tab="collapse" target="_blank">聯絡資訊</a></li>');

	view.find('.ga-tab-content-container').append('<a  href="'+ajaxPrefix+'pdf/27_Mini_Products.pdf" target="_blank" class="ga-tab-title-mobile">業務資訊</a>'
		+'<a href="'+ajaxPrefix+'pdf/微型保險商品聯絡資訊.pdf" target="_blank" class="ga-tab-title-mobile">聯絡資訊</a>');
} // end miniProduct fucntion

// 商品服務 左側選單
function menu_left_insurance(view){
    menu_left(view, '商品服務');
} // end menu_left_insurance function
