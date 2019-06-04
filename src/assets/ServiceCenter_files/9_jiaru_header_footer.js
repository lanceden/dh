// 右上方快速選單
function upper_right_quicklink(view){
	view.find('ul.navctroy li').each(function(i,li){
		li = $(this);
		var href = li.find('a').attr('href');
        var funcId = li.attr('data-ga-id');
        var name = li.find('span.text').text();
		var text = 'text="'+name+'"';
        var icon = '';
		
		li.empty();
		
        switch(funcId){
            case 'sk-app-download':
                icon = '<span class="icon icon-app-download"></span>';
                break;
            case 'sk-google-plus':
                icon = '<span class="icon icon-google-plus"></span>';
                name = '';
                break;
            case 'sk-youtube':
                icon = '<span class="icon icon-youtube"></span>';
                name = '';
                break;
            case 'sk-fb':
                icon = '<span class="icon icon-facebook"></span>';
                break;
            default:
                icon = '';
        };

        var a_target = 'target="_blank"';
        //if(funcId == 'sk-en') a_target = '';
        var a = $('<a href="'+href+'" '+a_target+'" '+text+'>'+icon+name+'</a>');
        a.appendTo(li);
	});
} // end upper_right_quicklink function

function upper_right_quicklink_en(view){
    upper_right_quicklink(view);
} // end upper_right_quicklink_en function

// 上方快速選單
function top_quicklink(view){
    var ul = $('<ul class="hanNavUL"></ul>');
    $.each(quicklink_conf, function(i, quicklink){
        var link = quicklink.hasOwnProperty('link')? quicklink.link:'#';
		var link_target = quicklink.hasOwnProperty('link_target')? quicklink.link_target:'_self';
        $('<li><a href="'+link+'" class="skmain-client" id="'+quicklink.id+'" target="'+link_target+'">'
            +'<img src="'+quicklink.icon+'" alt="">'+quicklink.name+'</a></li>').appendTo(ul);
    });
	ul.appendTo(view);
	
    var mainNavAreaDiv = $('[class^="mainNavArea_content_"]').first();
    //表單下載/業務夥伴/新光專區
    //view.find('li a#skmain-download,li a#skmain-partner,li a#skmain-area').off('click').on('click', function(ev){
     view.find('li a#skmain-partner,li a#skmain-area').off('click').on('click', function(ev){
        ev.preventDefault();
        ev.stopPropagation();

		if( !$(this).hasClass('active') && $('.mainNavAreaDiv.active').length > 0 ){
            $('.mainNavAreaDiv').removeClass('active');
            $('#sub_business_service ul li a').removeClass('active');
            $('#top_quicklink ul li a').removeClass('active');
        }

		var linkEle = $(this);
        var linkId = $(this).attr('id');
		
		var mainNavAreaContent_inner = mainNavAreaDiv.children('.mainNavAreaContent_inner');
		mainNavAreaContent_inner.empty();
		
		_createQuicklinkContent({
			target: mainNavAreaContent_inner,
            linkId: linkId,
            mainNavAreaDiv: mainNavAreaDiv,
            linkEle: linkEle
		});

    });
	
	//先長出網站地圖
	var target = $('.mainNavArea_content_7 #sitemap');
    var siteMap = _ga.site.func_map;
    if( siteMap.find('func[id="index"]').length > 0 ){
        var rootId = 'index',
            maxLevel = 3,
            currentLevel = 1;

        target.attr('createRowHeight', false);

        siteMap.find('func[id="index"] > func').each(function(){
            _createSiteMap({
                target: target,
                root: $(this),
                currentLevel: 1
            });
        });
        
    } // end if: check root exist
	
	//網站地圖
    view.find('li a#skmain-sitemap').off('click').on('click', function(ev){
        ev.preventDefault();
        ev.stopPropagation();

        if( !$(this).hasClass('active') ){
            $('#top_quicklink ul.hanNavUL li a').removeClass('active');
            //$('[class^=mainNavArea_content_]').removeClass('active');
            $('.mainNavAreaDiv').removeClass('active');
        }

        var sitemap_div = $('.mainNavArea_content_7');

        $(this).toggleClass('active');
        sitemap_div.toggleClass('active');

        if( $(this).hasClass('active') ){
            sitemap_div.find('.sitemap-content-row').each(function(){
                var row_target = $(this),
                    minHeight = 0;

                row_target.children('.sitemap-content-block').each(function(){
                    if( $(this).height() > minHeight ) minHeight = $(this).height();
                });

                row_target.css('minHeight', minHeight);
            });
        }
    });
} // end top_quicklink function

function top_quicklink_en(view){
    //
} // end top_quicklink_en function

function _createQuicklinkContent(config){
    config = $.extend({
        isMobile: false
    }, config);

    var target = config.target,
        linkId = config.linkId,
        isMobile = config.isMobile;
	
	if( !isMobile ){
        var mainNavAreaDiv = config.mainNavAreaDiv,
            linkEle = config.linkEle;

        // active
        mainNavAreaDiv.toggleClass('active');
        linkEle.toggleClass('active');
	}
	

	console.debug('linkId = ' + linkId);
	
	if(linkId == 'skmain-search') {
		console.log('搜尋關鍵字');
		window.location = 'fullsearch.html';
	}
	else if(linkId == 'skmain-member') {
		console.log('會員專區');
		window.location = 'https://einsurance.skl.com.tw/Login.aspx?ReturnUrl=/';
	}
	else if(linkId == 'skmain-download') {
		console.log('表單下載');
		window.location = 'dff8aa4e14.html';
	}
	else if(linkId == 'skmain-partner') {
		console.log('業務夥伴');
		
		var content = $('<div class="tollArea skbank-megacashstandard"></div>').appendTo( target );
        if( content.children().length == 0 ){
            _getPartnerData({
                callback: function(res){
                    if( res.hasOwnProperty('datas') ){

                        if( res.datas.length > 18 && !isMobile ){
                            target.css('overflow-y', 'scroll');
                        }

                        $.each(res.datas, function(i, data){
                            content.append('<div><a href="'+data.url+'" class="charges" target="_blank">'
                                +data.title+'</a></div>');
                            
                        });
                    }
                }
            });
        }
		
	}
	else if(linkId == 'skmain-area') {
		console.log('新光專區');
		
		var content = $('<div class="tollArea skbank-megacashstandard"></div>').appendTo( target );
        if( content.children().length == 0 ){
            _getAreaData({
                callback: function(res){
                    if( res.hasOwnProperty('datas') ){

                        if( res.datas.length > 18 && !isMobile ){
                            target.css('overflow-y', 'scroll');
                        }

                        $.each(res.datas, function(i, data){
                            content.append('<div><a href="'+data.url+'" class="charges" target="_blank">'
                                +data.title+'</a></div>');
                            
                        });
                    }
                }
            });
        }
	}
    else if(linkId == 'online-service') {
        console.log('線上客服');

        _createCustomerServiceHepler({
            target: target,
            type : 'mobile'
        });
        
        // target.html( getCustomizeHTML('customerService.html') );
        // customerService({
        //     target: target
        // });
    }
} // end _createQuicklinkContent function	

function _getPartnerData(config){
	GardenUtils.ajax.loading({
        url: ajaxPrefix + 'jsp/quickLink.jsp?action=getPartner&v=' + new Date().getTime(), 
        dataType: 'json',
		callback : config.callback
    });
	
    //return resp;
}

function _getAreaData(config){
	GardenUtils.ajax.loading({
        url: ajaxPrefix + 'jsp/quickLink.jsp?action=getArea&v=' + new Date().getTime(), 
        dataType: 'json',
		callback : config.callback
    });
	
    //return resp;
}

function top_quicklink_mobile(view){ // 上方快速選單小版
    $('.breadCrumbs .pathArea').append('<li><a href="" data-ga-link="_index">首頁</a></li><li class="active"><a>快捷選單</a></li>');
    $('.breadCrumbs').addClass('no_mobile_menu');

    var hashStr = window.location.hash;
    
    if(hashStr == '') {
        hashStr = window.location.search;
    }
    
    var paramStr = (hashStr.indexOf('?') > -1 ? hashStr.split('?')[1] : ''),
        linkId = (paramStr != '' && paramStr.indexOf('id=') > -1? (paramStr.split('id=')[1].indexOf('=') > -1 ? paramStr.split('id=')[1].split('=')[0] : paramStr.split('id=')[1]) : '' ),
        linkText = $('#top_quicklink #'+linkId).text();

    view.append('<div class="top_quicklink_mobile_title"><div class="skholdings-015-main-page-sub-title">'
        +'<div class="imsquare"></div><p>'+linkText+'</p></div></div>');
    view.append('<div class="top_quicklink_mobile_content"></div>');

    if( linkId != '' ){
        _createQuicklinkContent({
            target: view.find('.top_quicklink_mobile_content'),
            linkId: linkId,
            isMobile: true
        });
    } else {
        console.debug('top_quicklink_mobile hasn\'t linkId.' );
    }
} // end top_quicklink_mobile function

function top_quicklink_mobile_en(view){
    //
} // end top_quicklink_mobile_en function

function _createSiteMap(config){
    var target = config.target,
        root = config.root,
        currentLevel = config.currentLevel,
        contentRowMax = 4;

    var funcId = root.attr('id'),
        funcName = root.attr('name'),
        //url = (root.attr('page')!=''? '#!'+root.attr('page'): (root.attr('url')!=''? root.attr('url') : '#!'+root.children().first().attr('page')));
        url = (root.attr('page')!=''? root.attr('page')+'.html': (root.attr('url')!=''? root.attr('url') : root.children().first().attr('page')+'.html'));
        //console.log(currentLevel, funcId+', '+funcName);

    switch( currentLevel ){
        case 1:
            target.append('<div class="sitemap-block" funcId="'+funcId+'">'
                +'<div class="sitemap-title"><h2><a href="'+(url==''?'#':url)+'">'+funcName+'</a></h2></div>'
                +'<div class="sitemap-content"></div></div>');

            var content_target = target.find('[funcId="'+funcId+'"] .sitemap-content'),
                row_target = $();

            root.children('func').each(function(i){

                if(i%contentRowMax == 0){
                    row_target = $('<div class="sitemap-content-row"></div>')
                        .appendTo( content_target );
                }

                _createSiteMap({
                    target: row_target,
                    root: $(this),
                    currentLevel: currentLevel+1,
                    contentRowCount: 0
                });
            });            return;
        case 2:
            target.append('<div class="sitemap-content-block geraldine" funcId="'+funcId+'">'
                +'<h3 class="bertha"><a href="'+(url==''?'#':url)+'">'+funcName+'</a></h3>'
                +'<ul class="emmett_1"></ul></div>');

            root.children('func').each(function(){
                _createSiteMap({
                    target: target.find('[funcId="'+funcId+'"] ul.emmett_1'),
                    root: $(this),
                    currentLevel: currentLevel+1
                });
            });
            return;
        case 3:
            target.append('<li funcId="'+funcId+'"><a href="'+url+'">'+funcName+'</a></li>');

            /*root.children('func').each(function(){
                _createSiteMap({
                    target: target.find('[funcId="'+funcId+'"] li'),
                    root: root,
                    currentLevel: currentLevel+1
                });
            });*/
            return;
        default:
            return;
    } // end switch: create sitemap content
} // end _createSiteMap function

//上方第二層業務別
function sub_business_service(view) {
    //長標頭
    view.find('ul.navchad > li').each(function() {
        var li = $(this);
        var a = li.find('a');
        var text = li.find('span.text:first').text();
        a.text(text);
        var idValue = a.attr('data-ga-link');
        a.attr('id', idValue);

        console.debug('idValue = ' + idValue);
        console.debug($.inArray(idValue, hasMegaMenu));

        //如果要長MetaMenu，要把data-ga-link的屬性移掉才能綁事件
        if ($.inArray(idValue, hasMegaMenu) != -1 && $(window).width() > 1024 ) {
            a.removeAttr('data-ga-link');
            li.addClass('megaMenu');
        }

    });
} // end sub_business_service function

function sub_business_service_en(view){
    //
} // end sub_business_service_en function

function megamenu_hover(conf){
    var target = conf.target;
    var li_list = target.find('ul.navchad > li');

    li_list.each(function(){
        var liEle = $(this),
            id = liEle.attr('data-ga-id');

		//如果是線上客服額外判斷
		if(id == 'online-service') {
			liEle.children('a').off('click').on('click', function(ev){
	            ev.preventDefault();

	            conf['liEle'] = liEle;
	            conf['liList'] = li_list;
	            megamenu_trigger(conf);
	        });
		}
		else {
			//如果有megamenu且大於1024要綁hover
			if( $.inArray(id, hasMegaMenu) != -1) {
				if($(window).width() > 1024) {
					liEle.hover(function(){ // in
		                conf['liEle'] = liEle;
		                conf['liList'] = li_list;
		                megamenu_trigger(conf);
		            }, function(){ // out
		                conf['liEle'] = liEle;
		                conf['liList'] = li_list;
		                megamenu_trigger(conf);
		            });
				}
				else if($(window).width() == 1024) {
					liEle.children('a').off('click').on('click', function(ev){
		                ev.preventDefault();

		                conf['liEle'] = liEle;
		                conf['liList'] = li_list;
		                megamenu_trigger(conf);
		            });
				}
			}

		}

    });
} // end megamenu_hover function

function megamenu_trigger(conf){
    var target = conf.target;
    var parent_width = conf.hasOwnProperty('parent_width')? conf.parent_width: 0;
    var li_list = conf.liList;
    var li_ele = conf.liEle;
    var a_ele = li_ele.children('a');
    var id = li_ele.attr('data-ga-id');
    var megaMenu_content = $('#megaMenu_'+id);

    //if( $.inArray(id, hasMegaMenu) != -1 ){
        if(megaMenu_content.length == 0){
            li_ele.append('<div class="mainNavArea_content_2 mainNavAreaDiv">'
                +'<div class="mainNavAreaContent_inner" id="megaMenu_'+id+'"></div></div>');
            megaMenu_content = li_ele.find('#megaMenu_'+id);
        }

        if( !a_ele.hasClass('active') && $('.mainNavAreaDiv.active').length > 0 ){
            $('.mainNavAreaDiv').removeClass('active');
            $('#sub_business_service ul li a').removeClass('active');
            $('#top_quicklink ul li a').removeClass('active');
        }
        
        var mainNavAreaDiv = megaMenu_content.parents('.mainNavAreaDiv').first();
        mainNavAreaDiv.toggleClass('active');
        a_ele.toggleClass('active');

        if( mainNavAreaDiv.hasClass('active') ){
            megaMenu_content.css('width', parent_width);
            if( id != 'online-service' ){
                var li_w = li_ele.width();
                var li_index = $(li_list).index(li_ele);
                var left_pos = (li_index==0? '0': (0-li_w*li_index)+'px');
                mainNavAreaDiv.css({
                    'top': target.height(),
                    'width': $(window).width()/*,
                    'left': left_pos*/
                });
                megaMenu_content.css({
                    'margin-left': '0'
                });

                if( megaMenu_content.children().length == 0 ){
                    _getMegamenuData({
                        target: megaMenu_content,
                        typeId: id,
                        funcName: a_ele.text(),
                        callback: function(config){
                            var target = config.target;

                            if(target.children().length == 0){
                                _createMegamenu(config);
                            }
                        }
                    });
                }
            } 
            // else { // 線上客服
            //     mainNavAreaDiv.css({
            //         'top': target.height(),
            //         'right': '0',
            //         'width': megaMenu_content.width()
            //     });

            //     if( megaMenu_content.children().length == 0 ){
            //         // megaMenu_content.html( getCustomizeHTML('customerService.html') );
            //         // customerService({
            //         //     target: megaMenu_content
            //         // });

            //         megaMenu_content.find('select, option, div, input, a').on('mouseleave click', function(e){
            //             if (e && e.stopPropagation)
            //                 e.stopPropagation();
            //             else
            //                 window.event.cancelBubble = true;
            //         });
            //     }
            // }
            
        } // end if: megamenu active
    //} // end if: has MegaMenu/
} // end megamenu_trigger function

function _getMegamenuData(config){

    $.ajax({
        //url: ajaxPrefix + '/mock/getMegamenu.json?v=' + new Date().getTime(),
        url: ajaxPrefix + 'jsp/metaMenu.jsp?typeId='+config.typeId+'&v=' + new Date().getTime(), 
        dataType: 'json',
        success:function(json) {
            if( typeof json == 'string' ) json = $.parseJSON(json);
            config['datas'] = json;
            config.callback( config );
        }
    });
} // end _getMegamenuData function

function _createMegamenu(conf){
    var target = conf.target,
        funcName = conf.funcName,
        typeId = conf.typeId,
        datas = conf.datas;

    if( datas.hasOwnProperty('MegaMenu') ){
        var megamenu_data = datas.MegaMenu,
            dataBlock_count = 1;

        target.append('<div class="border_r doyle"><div class="top"><p>立即前往了解<br>'+funcName+'</p>'
            +'<a href="'+typeId+'.html" class="trent">進入專區</a></div>'
            +'<ul class="aubrey"></ul></div>');

        // 快速連結
        if( megamenu_data.hasOwnProperty('QuickLink') && megamenu_data.QuickLink.length > 0 ){
            var quicklink_data = megamenu_data.QuickLink;
            $.each(quicklink_data, function(i, quicklink){
                target.find('.aubrey').append('<li><span class="megamenu_quickicon"></span>'
                    +'<a href="'+quicklink.url+'">'+quicklink.title+'</a></li>');
            });
        } // end if: 快速連結

        // 業務服務
        /*if( megamenu_data.hasOwnProperty('BusinessService') && megamenu_data.BusinessService.length > 0 ){
            var service_data = megamenu_data.BusinessService;

            target.append('<div class="clay"><h3 class="bertha">'+funcName+'</h3>'
                +'<ul class="emmett_2"></ul></div>');
            ++dataBlock_count;

            if(service_data.length > 10) {
                target.find('.clay').append('<ul class="emmett_2"></ul></div>');
                target.find('.emmett_2').addClass('block_2');
                ++dataBlock_count;
            }

            $.each(service_data, function(i, service){
                
                if(i < 10) {
                    target.find('.emmett_2').first()
                        .append('<li><a href="'+service.url+'">'+service.title+'</a></li>');
                } else {
                    target.find('.emmett_2').last()
                        .append('<li><a href="'+service.url+'">'+service.title+'</a></li>');
                }
            });
        } // end if: 業務服務*/
        var siteMap = _ga.site.func_map;
        var service_func = siteMap.find('func[id="'+typeId+'"]');
        if( service_func.length > 0 ){
            target.append('<div class="clay"><h3 class="bertha">'+funcName+'</h3>'
                +'<ul class="emmett_2"></ul></div>');
            ++dataBlock_count;

            if(service_func.length > 10) {
                target.find('.clay').append('<ul class="emmett_2"></ul></div>');
                target.find('.emmett_2').addClass('block_2');
                ++dataBlock_count;
            }

            service_func.children('func').each(function(i){
                var rootEle = $(this),
                    funcId = rootEle.attr('id'),
                    funcName = rootEle.attr('name'),
                    // url = (rootEle.attr('page')!=''? '#!'+rootEle.attr('page'): (rootEle.attr('url')!=''? rootEle.attr('url') : '#!'+rootEle.children().first().attr('page')));
                    url = (rootEle.attr('page')!=''? rootEle.attr('page')+'.html': (rootEle.attr('url')!=''? rootEle.attr('url') : rootEle.children().first().attr('page')+'.html'));
                    
                if(i < 10) {
                    target.find('.emmett_2').first()
                        .append('<li><a href="'+url+'">'+funcName+'</a></li>');
                } else {
                    target.find('.emmett_2').last()
                        .append('<li><a href="'+url+'">'+funcName+'</a></li>');
                }
            });
        } // end if: 業務服務*/

        // 廣告
        if( megamenu_data.hasOwnProperty('AD') && megamenu_data.AD.length > 0 ){
            var ad_data = megamenu_data.AD;

            target.append('<div class="dewayne"><ul class="harleyUL"></ul></div>');
            ++dataBlock_count;

            $.each(ad_data, function(i, ad){
                target.find('.harleyUL').append('<li><a href="'+ad.url+'">'
                    +'<div class="img"><img src="'+ad.imgSrc+'" alt=""></div>'
                    +'<h4>'+ad.title+'</h4>'
                    +'<p>'+ad.description+'</p></a></li>');
            });
        } // end if: 廣告

        switch(dataBlock_count){
            case 1:
                //target.parents('.mainNavAreaDiv').first().removeClass('active');
                break;
            case 2:
                target.addClass('type-s');
                break;
            case 3:
                target.addClass('type-m');
                break;
            case 4:
                target.addClass('type-l');
                break;
        };
    } // end if: datas exist
} // end _createMegamenu function

// 左邊選單
function menu_left(view,pageName) {
    
    if(pageName == undefined) {
        //依照目前的節點長第二層的名稱
        var api = new GardenAPI();
        var gardenNavigator = api.getCurrentNavigator();

        if (gardenNavigator != undefined && gardenNavigator.currentPageId != '') {

            //拿到現在的導覽列
            var navigatorArray = gardenNavigator.navigator;

            //固定取出第二層
            var firstObj = navigatorArray[1];
            var level2PageName = firstObj.name;
            var level2Page = firstObj.link;

            $('.sideMenu_ida div.menuTitle .sk_people').html('<a href="#" data-ga-link="'+level2Page+'">'+level2PageName + '</a>');

        }   
    }
    else {
        $('.sideMenu_ida div.menuTitle .sk_people').text(pageName);
    }
    
    
    //處理左側選單的每個項目事件及內容
    view.find('ul.menu_susan > li').each(function() {       
        var li = $(this);
        console.debug('li = ' + li);
        var a = li.children('a');
        var childUl = li.find('ul');
        //var childUl = li.children('ul');

        //li.addClass('active');

        //先重長第一層的名稱
        var text = li.find('span.text:first').text();
        a.text(text).removeAttr('collapse');
        
        //把第二層的UL加上class
        childUl.addClass('hugh');
    });

    view.find('ul.menu_susan li').each(function() {       
        var li = $(this);
        console.debug('li = ' + li);
        var a = li.children('a');
        var childUl = li.children('ul');

        if(childUl.children().length == 0) a.addClass('nochild');
    });
    
    
    //取出目前的sitemap物件及目前的頁面
    var siteMap = _ga.site.func_map;
    var apPageObj = window._ga.el.data('ap.page');
    
    if(apPageObj != undefined){
        var pageId = apPageObj['id'];
        
        var funcId = siteMap.find('func[page="'+pageId+'"]').attr('id');
        var activeNode = view.find('[data-ga-link="_'+pageId+'"]');
        var activePageId = pageId;

        if(typeof funcId != undefined){
            switch(pageId){
                case 'publication': case 'publicationDetail':
                    activeNode = view.find('[data-ga-link="_publicationList"]');
                    activePageId = 'publicationList';
                    break;
                case 'rateQueryDetail':
                    activeNode = view.find('[data-ga-link="_91d9af4914"]');
                    activePageId = '91d9af4914';
                    break;
                case 'newsDetail':
                    if (_newsType == 'important') {
                        activeNode = view.find('[data-ga-link="_863ee37f14"]');
                        activePageId = '863ee37f14';
                    } else {
                        activeNode = view.find('[data-ga-link="_0989a3a114"]');
                        activePageId = '0989a3a114';
                    }
                    break;
                case 'content':
                    var categoryTitle = $('.skinsurance-contentArea .skholdings-015-main-page-sub-title p').text();
                    var activePage = siteMap.find('func[name="'+categoryTitle+'"]').attr('page');
                    activeNode = view.find('[data-ga-link="_'+activePage+'"]');
                    activePageId = activePage;
                    break;
            }
        }
                
        if(activeNode.length != 0) {
            //展開上下層選單           
            activeNode.parents('ul.hugh').show();
            activeNode.parents('li:first').children('ul.hugh').show();
            //activeNode.parents('li:first').find('ul.hugh').show();
            activeNode.parents('li').addClass('active');
            activeNode.last().addClass('activeNode');
        }
        
    }

    var rootId = view.attr('id').indexOf('_en') == -1 ? 'index' : 'index_en';
    // 小版選單
    GardenUtils.display.buildMobileSelect({
        rootId : rootId,
        startLevel : 2,
        target : $('.pathArea').parent(),
        activePageId: (typeof activePageId !== 'undefined' && activePageId !== false ? activePageId:'')
    });
} // end menu_left function

// 置底下方選單
function footer_info_top(view) {

    var ul = view.find('ul.footer-info-top');

    //var fb = $('<li><span>|</span><a href="'+fbURL+'" target="_blank"><span class="icon-facebook"></span><span class="text">新光粉絲團</span></a></li>');
    //var line = $('<li><span>|</span><a href="'+lineURL+'" target="_blank"><span class="icon-line"></span><span class="text">Line</span></a></li>');
    //var youtube = $('<li><span>|</span><a href="'+youtubeURL+'" target="_blank"><span class="icon-youtube"></span><span class="text">官方頻道</span></a></li>');
    
        
    //youtube.prependTo(ul);
    //line.prependTo(ul);
    fb.prependTo(ul);
}; // end footer_info_top function

function footer_info_top_en(view){
    //
} // end footer_info_top_en function

function _createCustomerServiceHepler(conf){
    var target = conf.target;
    var type = conf.type;
    var helper = target.find('ul.nav-extra-right');
    var onlineService = helper;
    if( helper.length == 0 ){
        var html = getCustomizeHTML('customerServiceHepler.html');
        html = $(html);
        // added by Titan
        if(type == undefined) {
            target.prepend(html);
            onlineService = target.find('ul.nav-extra-right');
        }
        else {
            html.find('.online-cs-block').addClass('sm-layout-cs');
            target.prepend(html.find('.online-cs-block'));
            $('.imsquare').remove();
            onlineService = target.find('.online-cs-block');
        }
        helper = target.find('ul.nav-extra-right');
    }

    customerService({
        target: onlineService
    });

    // get event link
    _getCustomerServiceEventList({
        callback: function(config){
            // console.warn('config', config);
            var datas = config.hasOwnProperty('datas')? config.datas:{};
            if( datas.hasOwnProperty('customerServices') ){
                // remove links
                helper.children().each(function(){
                    var ele = $(this);
                    if( !ele.hasClass('cs-online-tag-block') ){
                        ele.remove();
                    }
                });

                // create links
                $.each(datas.customerServices, function(i, linkObj){
                    var url = linkObj.hasOwnProperty('url')? linkObj.url:'#';
                    var title = linkObj.hasOwnProperty('title')? linkObj.title:'';
                    helper.prepend('<li> <a href="'+url+'" target="_blank"> '
                        +'<i class="nav-icon"><img src="image/icon-tab01.png" alt=""></i> '
                        +title+'</a> </li>');
                }); // end each: customerServices
            }

            // append to mobile: 線上客服 & 活動連結
            var rightMenuEle = $('#header-main-menu-right');
            var customerServices_arr = [];
            if( helper.length > 0 ){
                helper.find('li > a').each(function(){
                    var ele = $(this);
                    console.warn('ele', ele);

                    var id = ele.attr('id');
                    if(typeof id !== typeof undefined && id !== false
                        && id == 'online-service'){
                        customerServices_arr.unshift('<li id="online-service"><a href="#" page="top_quicklink_mobile.html" id="online-service">線上客服</a></li>');
                    } else {
                        var title = ele.text();
                        var url = ele.attr('href');
                        customerServices_arr.unshift('<li><a href="'+url+'" target="_blank">'+title+'</a></li>');
                    }
                }); // end each: customerServices
            } // end if: has customerServices

            $.each(customerServices_arr, function(i, link){
                rightMenuEle.find('ul.mm-listview:first').append(link);
            });

            rightMenuEle.find('a[page]').on('click', function(){
                var idParamStr = (typeof $(this).attr('id') !== typeof undefined && $(this).attr('id') !== false?'?id='+$(this).attr('id'):'');
                window.location = $(this).attr('page')+idParamStr;
                rightMenuEle.trigger( "close" );
            });
        } // end callback
    }); // end call: _getCustomerServiceEventList

    // bind event
    var flagOpen = false;
    helper.find('.cs-click').on('click', function(){
        
        if (flagOpen == false){
            helper.find('.cs-online-tag-block').stop().animate({
                right:"530px"
            }, 900);
            flagOpen = true;
        }
        else{
            helper.find('.cs-online-tag-block').stop().animate({
                right:"0px"
            }, 900);
            flagOpen = false;
        }

    }); // end click: cs-click

    $('body').on('click', function(ev) {
        var target = $(ev.target);

        if(target.parents('.cs-online-tag-block').length == 0 && flagOpen) {
            helper.find('.cs-click').trigger('click');
        }
    });
} // end _createCustomerServiceHepler function

// 取得活動連結
function _getCustomerServiceEventList(conf){
    $.ajax({
        url: ajaxPrefix + 'jsp/onlineCustomerService.jsp?action=list&v=' + new Date().getTime(), 
        dataType: 'json',
        success:function(json) {
            if( typeof json == 'string' ) json = $.parseJSON(json);
            conf['datas'] = json;
            conf.callback( conf );
        }
    });
} // end _getCustomerServiceEventList function

function header_footer(link) {

    // fixed 線上客服
	
	/*2017-07-18 如果是英文版的話就不加上線上客服*/
	var apPageObj = window._ga.el.data('ap.page');			
	if(apPageObj != undefined){
		var siteMap = _ga.site.func_map;
		var pageId = apPageObj['id'];				
		var currentNode = siteMap.find('[page="'+pageId+'"]');		
		if(pageId != 'index_en' && currentNode.parents('#index_en').length == 0) {
			_createCustomerServiceHepler({
		        target: $('#wrapper')
		    });
		}
	
	}
    

    // 快捷選單事件
    if( $('#header-main-menu-left.mm-menu').length == 0  ){
        var leftMenuEle = $('#mobile_nav').find('#header-main-menu-left'),
            rightMenuEle = $('#mobile_nav').find('#header-main-menu-right');

        // 左選單內容
		/**
        leftMenuEle.append('<ul>'
            +'<li><a href="#">快捷選單</a></li></ul>');

        leftMenuEle.find('li').each(function(i){
            if( i == 0 ){
                var ulEle = $('<ul></ul>').appendTo( $(this) );
                $('#top_quicklink > ul > li > a').each(function(){
                    var id = $(this).attr('id');
                    var href = $(this).attr('href')!='#'? $(this).attr('href'): '#';
                    if(id != 'skmain-sitemap') ulEle.append('<li><a href="'+href+'" page="top_quicklink_mobile.html" id="'+id+'">'+$(this).text()+'</a></li>');
                });
            }
        });
		**/
		
		leftMenuEle.append('<ul></ul>');

        $('#top_quicklink > ul > li > a').each(function(){
			var id = $(this).attr('id');
			var href = $(this).attr('href')!='#'? $(this).attr('href'): '#';
			if(id != 'skmain-sitemap') leftMenuEle.children('ul').append('<li><a href="'+href+'" page="top_quicklink_mobile.html" id="'+id+'">'+$(this).text()+'</a></li>');
		});

        $('#upper_right_quicklink > ul > li > a').each(function(){
            //var url = ($(this).attr('href')!='#'?'page="'+$(this).attr('href')+'"':''),
            var url = ($(this).attr('href')!='#'?$(this).attr('href'):''),
                icon = $(this).children('span.icon').length > 0? $(this).children('span.icon').prop('outerHTML'):'',
                id = (typeof $(this).parent().attr('data-ga-id') !== typeof undefined && $(this).parent().attr('data-ga-id') !== false?$(this).parent().attr('data-ga-id'):'');
            
            //leftMenuEle.children('ul').append('<li id="'+id+'"><a href="#"'+url+' target="_blank">'+icon+$(this).text()+'</a></li>');
            var a_target = 'target="_blank"';
            //if(id == 'sk-en') a_target = '';
            leftMenuEle.children('ul').append('<li id="'+id+'"><a href="'+url+'" '+a_target+'">'+icon+$(this).attr('text')+'</a></li>');
        });

        // 右選單內容
        var siteMap = _ga.site.func_map,
            rootId = 'index';
        if( siteMap.find('func[id="'+rootId+'"]').length > 0 ){
            var maxLevel = 2,
                currentLevel = 1;

            rightMenuEle.append('<ul></ul>');

            siteMap.find('func[id="'+rootId+'"] > func').each(function(){
                _createRightmenu({
                    target: rightMenuEle.children('ul'),
                    root: $(this),
                    currentLevel: 1,
                    maxLevel: maxLevel
                });
            });
            
        } // end if: check root exist

        // bind a click: scroll to top
        $('#mobile_nav').find('a[href="#header-main-menu-left"], a[href="#header-main-menu-right"]').on('click', function(ev){
            
            ev.preventDefault();

            $('body').scrollTop(0);
        });


        // bind mmenu action
        var leftMenu = $('nav#header-main-menu-left'),
            rightMenu = $('nav#header-main-menu-right');

        leftMenu.mmenu({
            "navbar": {
                "title": "選單"
            }
        });

        leftMenu.find('a[page]').on('click', function(){
            var idParamStr = (typeof $(this).attr('id') !== typeof undefined && $(this).attr('id') !== false?'?id='+$(this).attr('id'):'');
            window.location = $(this).attr('page')+idParamStr;
            leftMenu.trigger( "close" );
        });

        rightMenu.mmenu({
            "navbar": {
                "title": "主功能"
            },
            "offCanvas": {
                "position": "right"
            }
        });

        rightMenu.find('a[page]').on('click', function(){
            //window.location = $(this).attr('page');
            var idParamStr = (typeof $(this).attr('id') !== typeof undefined && $(this).attr('id') !== false?'?id='+$(this).attr('id'):'');
            window.location = $(this).attr('page')+idParamStr;
            rightMenu.trigger( "close" );
        });
    } // end if: mmenu isn't exist

    // 英文版小版左右選單
    // 快捷選單事件
    if( $('#header-main-menu-left-en.mm-menu').length == 0  ){
        var leftMenuEle = $('#mobile_nav_en').find('#header-main-menu-left-en'),
            rightMenuEle = $('#mobile_nav_en').find('#header-main-menu-right-en');

        // 左選單內容
        leftMenuEle.append('<ul></ul>');

        $('#upper_right_quicklink_en > ul > li > a').each(function(){
            //var url = ($(this).attr('href')!='#'?'page="'+$(this).attr('href')+'"':''),
            var url = ($(this).attr('href')!='#'?$(this).attr('href'):''),
                icon = $(this).children('span.icon').length > 0? $(this).children('span.icon').prop('outerHTML'):'',
                id = (typeof $(this).parent().attr('data-ga-id') !== typeof undefined && $(this).parent().attr('data-ga-id') !== false?$(this).parent().attr('data-ga-id'):'');
            
            //leftMenuEle.children('ul').append('<li id="'+id+'"><a href="#"'+url+' target="_blank">'+icon+$(this).text()+'</a></li>');
            var a_target = 'target="_blank"';
            //if(id == 'sk-en') a_target = '';
            leftMenuEle.children('ul').append('<li id="'+id+'"><a href="'+url+'" '+a_target+'">'+icon+$(this).text()+'</a></li>');
        });

        // 右選單內容
        var siteMap = _ga.site.func_map,
            rootId = 'index_en';
        if( siteMap.find('func[id="'+rootId+'"]').length > 0 ){
            var maxLevel = 2,
                currentLevel = 1;

            rightMenuEle.append('<ul></ul>');

            siteMap.find('func[id="'+rootId+'"] > func').each(function(){
                _createRightmenu({
                    target: rightMenuEle.children('ul'),
                    root: $(this),
                    currentLevel: 1,
                    maxLevel: maxLevel
                });
            });
            
        } // end if: check root exist

        // bind a click: scroll to top
        $('#mobile_nav_en').find('a[href="#header-main-menu-left-en"], a[href="#header-main-menu-right-en"]').on('click', function(ev){
            
            ev.preventDefault();

            $('body').scrollTop(0);
        });


        // bind mmenu action
        var leftMenu = $('nav#header-main-menu-left-en'),
            rightMenu = $('nav#header-main-menu-right-en');

        leftMenu.mmenu({
            "navbar": {
                "title": "Menu"
            }
        });

        leftMenu.find('a[page]').on('click', function(){
            var idParamStr = (typeof $(this).attr('id') !== typeof undefined && $(this).attr('id') !== false?'?id='+$(this).attr('id'):'');
            window.location = $(this).attr('page')+idParamStr;
            leftMenu.trigger( "close" );
        });

        rightMenu.mmenu({
            "navbar": {
                "title": "Main Function"
            },
            "offCanvas": {
                "position": "right"
            }
        });

        rightMenu.find('a[page]').on('click', function(){
            window.location = $(this).attr('page');
            rightMenu.trigger( "close" );
        });
    } // end if: mmenu isn't exist

    // start 麵包屑
    var api = new GardenAPI();
    var array = [];

    var gardenNavigator = api.getCurrentNavigator();
    console.log('GardenAPI', api, gardenNavigator);

    if (gardenNavigator != undefined && gardenNavigator.currentPageName != '') {

        console.log('gardenNavigator', gardenNavigator.navigator);
        
        var level2PageName = '';
        $.each(gardenNavigator.navigator, function (i, obj) {
            console.debug(i + ':::');
            console.debug(obj);

            if(i == 2) {
                level2PageName = obj.name;
            }

            if (i == 0) {
                if((obj.id == 'index' || obj.id == 'index_en')) {
                    var name = obj.id == 'index'? '首頁':'Home';
                    if (obj.url == '_') {
                        array.push('<li>' + name + '</li>');
                    }
                    else {
                        var url = obj.id == 'index'? 'index':'index_en';
                        array.push('<li><a href="'+url+'.html">' + name + '</a></li>');
                    }
                }
            }
            else if (obj.isCurrent == 'N') {
                if (obj.url == '_') {
                    array.push('<li>' + obj.name + '</li>');
                }
                else {
                    array.push('<li><a href="' + obj.url + '" data-ga-link=' + obj.link + '>' + obj.name + '</a></li>');
                }

            }
            else {
                array.push('<li class="active"><a>' + obj.name + '</a></li>');
            }
        });
        
    } else {
	
        var apPageObj = window._ga.el.data('ap.page');
    
        if(apPageObj != undefined){
            var pageId = apPageObj['id'];

            switch( pageId ){
                case 'publication':
                    var parent_txt = $('#publication_left li.active a').text();
                    array.push('<li><a href="" data-ga-link="_index">首頁</a></li>');
                    array.push('<li><a href="" data-ga-link="_3d516f1d14">客戶服務</a></li>');
                    array.push('<li><a href="" data-ga-link="_publicationList">'+parent_txt+'</a></li>');
                    array.push('<li class="active"><a>'+parent_txt+'內頁清單</a></li>');

                    if( $('.publication-back-btn').length > 0 ){
                        $('.publication-back-btn a').attr('href', 'publicationList.html');
                    }
                    break;

                case 'publicationDetail':
                    var href = window.location.href,
                        param_str = href.indexOf('?')!=-1? href.split('?')[1]: '',
                        param = param_str!=''? (param_str.indexOf('&')!=-1? param_str.split('&'):[param_str]) :[],
                        listId = param.length!=0 && param[1].indexOf('=')!=-1? param[1].split('=')[1] :'',
                        isPreview = param_str!='' && param_str.indexOf('isPreview=')!=-1? param_str.split('isPreview=')[1].split('&')[0]:'' ,
                        pageUrl = isPreview!=undefined&&isPreview=='Y' ? '#!publication': 'publication.html',
                        previewParam = isPreview!=undefined&&isPreview=='Y' ? '&isPreview=Y': '';

                    var parent_txt = $('#publication_left li.active a').text();
                    array.push('<li><a href="" data-ga-link="_index">首頁</a></li>');
                    array.push('<li><a href="" data-ga-link="_3d516f1d14">客戶服務</a></li>');
                    array.push('<li><a href="" data-ga-link="_publicationList">'+parent_txt+'</a></li>');
                    array.push('<li><a href="'+pageUrl+'?id='+listId+previewParam+'">'+parent_txt+'內頁清單</a></li>');
                    array.push('<li class="active"><a>'+parent_txt+'內頁</a></li>');

                    if( $('.publication-back-btn').length > 0 ){
                        $('.publication-back-btn a').attr('href', 'publication.html?id='+listId);
                    }
                    break;
					
				case 'newsDetail':
					if(_newsType == 'important') {
                        array.push('<li><a href="" data-ga-link="_index">首頁</a></li>');
						array.push('<li><a href="" data-ga-link="_21cd6d6a14">投資理財</a></li>');
	                    array.push('<li><a href="" data-ga-link="_863ee37f14">金融資訊</a></li>');
						array.push('<li><a href="" data-ga-link="_863ee37f14">投資重大訊息</a></li>');
                        array.push('<li class="active"><a>訊息內容</a></li>');
					}
					else {
                        array.push('<li><a href="" data-ga-link="_index">首頁</a></li>');
						array.push('<li><a href="" data-ga-link="_087b46cc14">關於我們</a></li>');
	                    array.push('<li><a href="" data-ga-link="_0989a3a114">新聞一覽</a></li>');
                        array.push('<li class="active"><a>新聞內容</a></li>');
					}
                    break;

                case 'rateQueryDetail':
                    array.push('<li><a href="" data-ga-link="_index">首頁</a></li>');
                    array.push('<li><a href="" data-ga-link="_21cd6d6a14">投資理財</a></li>');
                    array.push('<li><a href="" data-ga-link="_91d9af4914">利變商品宣告利率</a></li>');
                    array.push('<li class="active"><a>利變商品宣告利率</a></li>');
                    break;


                case 'content':
                    var siteMap = _ga.site.func_map;
                    var categoryTitle = $('.skinsurance-contentArea .skholdings-015-main-page-sub-title p').text();
                    var pageId = siteMap.find('func[name="'+categoryTitle+'"]').attr('page');
                    array.push('<li><a href="" data-ga-link="_index">首頁</a></li>');
                    array.push('<li><a href="" data-ga-link="_852849ed14">商品服務</a></li>');
                    array.push('<li><a href="" data-ga-link="_9612da7214">保險商品介紹</a></li>');
                    array.push('<li><a href="" data-ga-link="_'+(typeof pageId != 'undefined'? pageId: '9612da7214')+'">'+categoryTitle+'</a></li>');
                    array.push('<li class="active"><a>保險商品內容</a></li>');
                    break;
					
				case 'fullsearch':
                        array.push('<li><a href="" data-ga-link="_index">首頁</a></li>');
                        array.push('<li class="active"><a>搜尋關鍵字</a></li>');
                        break;
                
                case 'productSearch':
                        array.push('<li><a href="" data-ga-link="_index">首頁</a></li>');
                        array.push('<li><a href="" data-ga-link="_852849ed14">商品服務</a></li>');
                        array.push('<li class="active"><a>商品搜尋</a></li>');
                        break;
						
						
				case 'e34d895214':
                        array.push('<li><a href="" data-ga-link="_index">首頁</a></li>');
                        array.push('<li><a href="" data-ga-link="_852849ed14">商品服務</a></li>');
						array.push('<li><a href="" data-ga-link="_a7ffbf5414">實用保險專區</a></li>');
						array.push('<li><a href="" data-ga-link="_b8515c1614">高齡化商品專區</a></li>');
                        array.push('<li class="active"><a>宣導活動資訊</a></li>');
                        break;
						
				case 'investmentDetail':
                        array.push('<li><a href="" data-ga-link="_index">首頁</a></li>');
                        array.push('<li><a href="" data-ga-link="_21cd6d6a14">投資理財</a></li>');
                        array.push('<li class="active"><a>投資標的查詢</a></li>');
                        break;
            }
        }
    }

    if( array.length > 0 ){
        $('.title_kay .pathArea').empty().append(array.join(''));

        if( $('.title_kay.breadCrumbs .mobile_menu').length > 0 ){
                $('.title_kay .pathArea').on('click', function(){
                $(this).toggleClass('active');
                $('.mobile_menu').toggleClass('active');
            });
        } else {
            $('.title_kay.breadCrumbs').addClass('no_mobile_menu');
        }

        
    } else if($('.title_kay.breadCrumbs').length == 0) {
        $('.title_kay.breadCrumbs').hide();
    }
    // end 麵包屑

    // scrollTop
	var isInto = false;
	
    $(window).scroll(function(){
		
		if(!isInto) {
			isInto = true;
			setTimeout(function(){
				
				$('body').trigger('click');

			    if ($(this).scrollTop() > 100) {
			        $('.footer .scroll-top-button').fadeIn();
			    } else {
			        $('.footer .scroll-top-button').fadeOut();
			    }
				
				isInto = false;
			},200);
			
		}
		
    });
	
	$(window).trigger('scroll');

    // Click event to scroll to top
    $('.footer .scroll-top-button').off('click').on('click', function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    // fix footer: min-height
    fixFooter();
    var fixFooter_resize = function(){
        $(window).resize(function(){
            setTimeout(fixFooter(),700);
        });
    };
    fixFooter_resize();
}; // end page loaded

function fixFooter(){

    $('#wrapper > .content').css('min-height', 'inherit');

    var window_h = $(window).height(),
        content_h = $('#wrapper > .content').height();

    //alert(window_h + ',' + content_h);
    if( window_h > content_h ){
        $('#wrapper > .content').css('min-height', window_h - $('.footer').height());
    }
} // end fixFooter function


function _createRightmenu(config){
    var target = config.target,
        root = config.root,
        currentLevel = config.currentLevel,
        maxLevel = config.maxLevel;

    var funcId = root.attr('id'),
        funcName = root.attr('name'),
        //url = (root.attr('page')!=''? '#!'+root.attr('page'): (root.attr('url')!=''? root.attr('url') : '#!'+root.children().first().attr('page')));
        url = (root.attr('page')!=''? root.attr('page')+'.html': (root.attr('url')!=''? root.attr('url') : root.children().first().attr('page')+'.html'));
    
    target.append('<li id="'+funcId+'"><a href="#" page="'+url+'">'+funcName+'</a></li>');
    
    if( currentLevel >= maxLevel ) return false;
    if(root.children('func').length > 0) target.find('li#'+funcId).append('<ul></ul>');

    root.children('func').each(function(){
        _createRightmenu({
            target: target.find('#'+funcId+'> ul'),
            root: $(this),
            currentLevel: currentLevel+1,
            maxLevel: maxLevel
        });
    });
} // end _createRightmenu function

// fix top
$(document).on('scroll', function() {
    if ($(document).scrollTop() > 75) {
        $(".mainNav").addClass("fixed-top");

    } else {
        $(".mainNav").removeClass("fixed-top");
    }

});

//按標頭以外的body位置, 會把標頭和其內容關掉(remove active class )
$('body').on('click', function(ev) {
    var target = ev.target;
    //console.debug(target);    
    
    var mainNavAreaDivParentsEle = ($(target).parents('.mainNavAreaDiv, [class^="mainNavArea_content_"]') == undefined) ? '' : $(target).parents('.mainNavAreaDiv, [class^="mainNavArea_content_"]'); //子選單展開的內容
    var mainNavParentsEle = ($(target).parents('#top_quicklink') == undefined) ? '' : $(target).parents('#top_quicklink'); //第一子選單的標頭
    var navchadParentsEle = ($(target).parents('.navchad') == undefined) ? '' : $(target).parents('.navchad'); //第二子選單的標頭
    var upperRightParentsEle = ($(target).parents('#upper_right_quicklink') == undefined) ? '' : $(target).parents('#upper_right_quicklink'); //右上快捷選單的標頭

    //console.debug(mainNavAreaDivParentsEle.attr('class'));
    //console.debug(mainNavParentsEle.attr('class'));
    //console.debug(navchadParentsEle.attr('class'));

    if (mainNavAreaDivParentsEle.attr('class') == undefined 
        && mainNavParentsEle.attr('class') == undefined 
        && navchadParentsEle.attr('class') == undefined
        && upperRightParentsEle.attr('class') == undefined) {
        var isHeaderArea = $('.headerArea');
        var mainNavAreaDivEle = isHeaderArea.find('.mainNavAreaDiv, [class^="mainNavArea_content_"]');
        var mainNavAreaEle = isHeaderArea.find('div.mainNav ul.hanNavUL a');
        var mainNavEle = isHeaderArea.find('div.mainNav ul.navchad a');
        var mainNavDivEle = isHeaderArea.find('.mainNav_content_1');
        var upperRightEle = isHeaderArea.find('ul.navctroy a');


        mainNavAreaDivEle.removeClass('active');
        mainNavAreaEle.removeClass('active');
        mainNavEle.removeClass('active');
        mainNavDivEle.removeClass('active');
        upperRightEle.removeClass('active');
    }
});