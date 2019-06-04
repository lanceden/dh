
function adminPreview(callback){
	
	window._ga.event.page.after['all'].apply(window,[]);	
	if(callback != undefined) {
		callback.apply(window,[]);
	}
}

window._ga.event.page.after['all'] = function (link) {

	//2016-10-04 added by titan 加上IE8就跳出提示
	if($('#skl_mainlogin').length != 0) {
		GardenUtils.browser.ieAlert({
			version : 8,
			title : '瀏覽器建議',
			content : '<ol class=""><li class=""><i class="neux_icon_a"></i><div class="">親愛的顧客 您好</div><p class="">本行網站已全面升級，建議您可升級您的瀏覽器，並搭配1024*768以上之螢幕解析度，以使網頁呈現最適之瀏覽效果。</p></li></ol>'
		});
	}
	
	//2016-10-01 added by titan 緊急公告
	$.ajax({
				url : ajaxPrefix + 'jsp/getNotice.jsp?type=TW',
				datatype:'json',
				success:function(json){
					json = $.parseJSON(json);
					var isNotice = json.isNotice;
					if(isNotice == 'Y') {
						GardenUtils.display.popup({
							title:json.title,			 
				            content : '<p>'+json.content+'</p>',
				            closeCallBackFn : function(){},
							showCallBackFn : function(){},
				            isShowSubmit : false,
							isShowClose : true,
						});
					}
				}
			});

	header_footer(link);


    //判斷使用者有沒有閱讀收集cookie
    var isAcceptCookie = GardenUtils.browser.getCookie({
        name : 'sklife_accept_cookie'
    });
    var privacy_description = '';
    var privacy_confirm = '';
    $.ajax({
        async: false,
        url: ajaxPrefix + 'jsp/getParamValue.jsp?configId=privacy_confirm,privacy_description&v=' + new Date().getTime(), 
        dataType: 'json',
        success:function(json) {
            privacy_description = json['datas']['privacy_description'];
            privacy_confirm = json['datas']['privacy_confirm'];
        }
    });
    var cookieBlock = $('<div class="msg-container space-nb-inside-side space-pad-inside-side space-mobile-inside-side">'+
    '<div class="layout-content-full">'+
          '<div class="msg-content msg-content-block">'+
            '<ul>'+
              '<li class="msg-content msg-content-detail ">'+
                '<i class="icon-info"><img src="img/icon-info-white-full.svg" alt="提示"></i>'+
                '<span class="text-detail">'+privacy_description+
                '</span>'+
                '</li>'+
            '</ul>'+
          '</div>'+
          '<div class="btn-block">'+
            '<a href="#" class="btn-default-style btn-color-white msg-close">'+privacy_confirm+'</a>'+
          '</div>'+
    '</div>'+
    '</div>');

    //隱私權條款 小版要加padding-top
    var _adjustMsgPadding = function(showMsg){
        showMsg = showMsg!=undefined ? showMsg: true;
        //加padding高度
        var msgWidth = $('.headerArea .msg-container').width();
        var msgHeight = showMsg ? $('.headerArea .msg-container').height() : 0;
        var headerTopHeight = $('.headerTop').height();
        console.log('msg height',$('.headerArea .msg-container').height());
        if(msgWidth<1024){
            $('.content').css('padding-top',msgHeight+headerTopHeight+'px');
        }
    }

    if(isAcceptCookie == '' && $('.msg-container').length==0) {
        //如果沒有看過，就顯示
        cookieBlock.prependTo($('.headerArea'));
        // $('.layout-header .msg-container').show();

        _adjustMsgPadding();
        
        //綁定點擊叉叉後存cookie
        $('.headerArea .msg-container a.msg-close').click(function(e){
            e.preventDefault();

            GardenUtils.browser.setCookie({
                name : 'sklife_accept_cookie',
                value : 'Y',
                expiresDay : 30,
                isRemeberMe : true
            });
            
            $('.headerArea .msg-container').hide();
            _adjustMsgPadding(false);
        });

    } else {
        $('.headerArea .msg-container').remove();
    }


	var subContent = $('#subcontent');
    if(subContent.length != 0) {
    	
    	// 保戶心聲
        var skinsurance_002 = subContent.find('#skinsurance-customize-002');

        if(skinsurance_002.length !=0) {
            skinsurance_002.find('.customizeArea').html(getCustomizeHTML('CustomerMail.html'));

            // 取得選單資料
            _getInsuranceFAQ({
                target: skinsurance_002,
                callback: function(config){
                    _createInsuranceSelect(config);
                }
            });

            // 個資條款
            // skinsurance_002.find('.agree_link').off('click').on('click', function(ev){
            //     ev.preventDefault();

            //     GardenUtils.display.popup({
            //         title:'蒐集、處理及利用個人資料告知事項',            
            //         content : getCustomizeHTML('CustomerMailAgree.html'),
            //         closeCallBackFn : function(){},
            //         showCallBackFn : function(){},
            //         isShowSubmit : false,
            //         isShowClose : true
            //     });
            // });

            // 取得驗證碼
            _getValidNumber({
                target: skinsurance_002.find('#validnumberImg')
            });

            skinsurance_002.find('#validnumberBtn').off('click').on('click', function(ev){
                ev.preventDefault();

                _getValidNumber({
                    target: skinsurance_002.find('#validnumberImg')
                });
            });

            // bind submit action
            skinsurance_002.find('.confirm').off('click').on('click', function(ev){
                ev.preventDefault();

                _submitMindForm({
                    target: skinsurance_002
                });
            }); // end click: confirm
        } // end if: 保戶心聲

        // 投資理財子首頁 嘉實
        var skinsurance_003 = subContent.find('#skinsurance-customize-003');
        if(skinsurance_003.length !=0) {
            skinsurance_003.css('minHeight', '500px');
            skinsurance_003.find('.customizeArea').html(getCustomizeHTML('investmentIndex.html'));
        } // end if: 投資理財子首頁 嘉實

        // 商品服務子首頁 搜尋框
        var apPageObj = window._ga.el.data('ap.page');
    
        if(apPageObj != undefined){
            var pageId = apPageObj['id'];
            if( pageId == '852849ed14' ){
                $('<div class="skinsurance-search-block">'
                    +'<div class="search-pic"><img src="img/skinsu-productserv-46.png"></div>'
                    +'<input type="text" name="keyword" placeholder="請輸入商品關鍵字"></div>')
                .insertBefore(subContent.find('.skholdings-015-main-page-sub-title').first());
            }
        }

        // 商品服務子首頁 保險商品介紹
        var skinsurance_004 = subContent.find('#skinsurance-customize-004');
        if(skinsurance_004.length !=0) {
            skinsurance_004.find('.customizeArea').html(getCustomizeHTML('insuranceIndex.html'));

            insuranceIndex({
                target: skinsurance_004
            }); // 9_insurance.js
        } // end if: 商品服務子首頁 保險商品介紹

        // 商品服務子首頁 族群介紹
        var skinsurance_006 = subContent.find('#skinsurance-customize-006');
        if(skinsurance_006.length !=0) {
            skinsurance_006.find('.customizeArea').html(getCustomizeHTML('insuranceIndexType.html'));

            insuranceIndexType({
                target: skinsurance_006
            }); // 9_insurance.js
        } // end if: 商品服務子首頁 族群介紹
        
        // 線上客服
        var skinsurance_005 = subContent.find('#skinsurance-customize-005');
        if(skinsurance_005.length !=0) {
            skinsurance_005.find('.customizeArea').html(getCustomizeHTML('customerService.html'));

            setTimeout(function(){
                blockEqualHeight( skinsurance_005 );
            }, 1000);

            customerService({
                target: skinsurance_005
            });
        } // end if: 線上客服

		// 商品服務不動產租賃辦公大樓/住宅出租/售
        var skinsurance_007 = subContent.find('#skinsurance-customize-007');
        if(skinsurance_007.length !=0) {
            skinsurance_007.find('.customizeArea').html(getCustomizeHTML('buildRentInfo.jsp'));

			
            buildRentInfo({
                target: skinsurance_007
            }); // 9_insurance.js
        } // end if: 商品服務不動產租賃辦公大樓/住宅出租/售
		
		
		// 房貸服務-網路送件服務
        var skinsurance_008 = subContent.find('#skinsurance-customize-008');
        if(skinsurance_008.length !=0) {
            skinsurance_008.find('.customizeArea').html(getCustomizeHTML('Housingloans.html'));

			
            Housingloans({
                target: skinsurance_008
            }); // 9_insurance.js
        } // end if: 房貸服務-網路送件服務
		
		// 商品服務/實用保險專區/旅平險專區/旅平險樂call保/試算
        var skinsurance_009 = subContent.find('#skinsurance-customize-009');
        if(skinsurance_009.length !=0) {
            skinsurance_009.find('.customizeArea').html(getCustomizeHTML('funnycall.jsp'));

            funnycall({
                target: skinsurance_009
            });
        } // end if: 商品服務/實用保險專區/旅平險專區/旅平險樂call保/試算
		
		
		// 商品服務/實用保險專區/團意險再保公司
        var skinsurance_010 = subContent.find('#skinsurance-customize-010');
        if(skinsurance_010.length !=0) {
            skinsurance_010.find('.customizeArea').html(getCustomizeHTML('insuranceListPartner.jsp'));
			
			insuranceListPartner({
                target: skinsurance_010
            });
        } // end if: 商品服務/實用保險專區/團意險再保公司

        // 商品服務/實用保險專區/團意險再保經紀人
        var skinsurance_012 = subContent.find('#skinsurance-customize-012');
        if(skinsurance_012.length !=0) {
            skinsurance_012.find('.customizeArea').html(getCustomizeHTML('insuranceListBroker.jsp'));
            
            insuranceListPartner({
                target: skinsurance_012
            });
        } // end if: 商品服務/實用保險專區/團意險再保經紀人

        // 商品服務/實用保險專區/團意險商品內容
        var skinsurance_011 = subContent.find('#skinsurance-customize-011');
        if(skinsurance_011.length !=0) {
            var target = skinsurance_011.find('.customizeArea').empty(),
                typeId = '2';

            _getGroupInsTypeData({
                target: target,
                typeId: typeId,
                callback: function(conf){

                    conf['createTabContent'] = function(config){

                        config['callback'] = function(conf){
                            _createGroupInsContent(conf);
                        };

                        _getGroupInsContentData(config);
                    };

                    _createRecursiveTab(conf);
                }
            });
        } // end if: 商品服務/實用保險專區/團意險商品內容
		
		// 商品服務/實用保險專區/海外專區/海外試算
        var skinsurance_013 = subContent.find('#skinsurance-customize-013');
        if(skinsurance_013.length !=0) {
            skinsurance_013.find('.customizeArea').html(getCustomizeHTML('oversea.jsp'));

            oversea({
                target: skinsurance_013
            });
        } // end if: 商品服務/實用保險專區/旅平險專區/旅平險樂call保/試算

        // 最新消息
        var news = subContent.find('#subarea_news');
        if(news.length !=0) {
            news.each(function(){
                var news_ele = $(this);
                var target = news.find('.customizeArea').empty(),
                    typeId = news.attr('typeid');

                _getNewsTypeData({
                    target: target,
                    typeId: typeId,
                    callback: function(conf){

                        conf['createTabContent'] = function(config){

                            config['callback'] = function(conf){
                                _createNewsContent(conf);
                            };

                            _getNewsContentData(config);
                        };

                        _createRecursiveTab(conf);
                    }
                });
            });
        } // end if: 最新消息

        // 常見問題
        var qa = subContent.find('#subarea_qa');
        if(qa.length !=0) {
            qa.each(function(){
                var qa_ele = $(this);
                var target = qa.find('.customizeArea').empty(),
                    typeId = qa.attr('typeid');

                _getQATypeData({
                    target: target,
                    typeId: typeId,
                    callback: function(conf){

                        conf['createTabContent'] = function(config){

                            config['callback'] = function(conf){

                                var target_tmp = conf.target;
                                var tabContent = target_tmp.parents('.ga-tab-content-container').first().children('.ga-tab-content');
                                if(tabContent.length == 1){
                                    tabContent.addClass('margin-bothSide-none');
                                }

                                _createQAContent(conf);
                            };

                            _getQAContentData(config);
                        };

                        _createRecursiveTab(conf);
                    }
                });
            });
        } // end if: 常見問題

        // 表單下載
        var download = subContent.find('[id="sk_bank-customize-004"]');
        if(download.length !=0) {
            download.each(function(){
                var download_ele = $(this);
                var target = download_ele.find('.customizeArea').empty(),
                    typeId = download_ele.attr('typeid');

                target.addClass('skinsurance-download');

                _getDownloadTypeData({
                    target: target,
                    typeId: typeId,
                    callback: function(conf){

                        conf['createTabContent'] = function(config){

                            config['callback'] = function(conf){
                                _createDownloadContent(conf);
                            };

                            _getDownloadContentData(config);
                        };

                        _createRecursiveTab(conf);
                    }
                });
            });
        } // end if: 表單下載

        // 輪播
        var ga_slider = subContent.find('#Garden-Slider');
        if(ga_slider.length !=0) {
            ga_slider.each(function(){
                var ga_slider_ele = $(this);
                var target = ga_slider.find('.customizeArea').empty(),
                    typeId = ga_slider.attr('typeid');

                target.addClass('skinsurance-mission-03-block');

                _getSliderContentData({
                    target: target,
                    typeId: typeId,
                    callback: function(conf){
                        _createSliderContent(conf);
                    }
                });
            });
        } // end if: 最新消息

        // bind tab
        if(subContent.children('.ga-view-embedded').length == 0){
            _bindTabIdAction({
                target: subContent,
                triggerCallback: true,
                callback: function(conf){
                    blockEqualHeight( conf.target );
                    editorTableScroll();
                }
            });

            // tab 小版 active
            bindTabMobileActive();

            // tab 小版刪除
            removeEmptyTab();
        }
        

        // bind qa
        subContent.find('[ga-qa="collapse"]').each(function(){
            _GAQAActions({
                target: $(this),
                callback: function(qa_conf){
                    var target = qa_conf.target;
                    editorTableScroll();
                }
            });

            _GAQANewActions({
                target: $(this),
                callback: function(qa_conf){
                    var target = qa_conf.target;
                    editorTableScroll();
                }
            });
        });

        // 錨點
        _gaScrollTo();
		
		//2017-01-21 added by titan 加上個人化cookie
		//找這個內頁是不是加在主要的節點內，吃0_config.js的hasMegaMenu參數
			//先找自己的節點
			var apPageObj = window._ga.el.data('ap.page');			
			if(apPageObj != undefined){
		        var siteMap = _ga.site.func_map;
		        var pageId = apPageObj['id'];				
		        var currentNode = siteMap.find('[page="'+pageId+'"]');				
		        if(currentNode.length != 0) {
					$.each(hasMegaMenu,function(i,funcId){
						
						if(currentNode.parents('func[id="'+funcId+'"]').length != 0) {
						
							var originalValue = GardenUtils.browser.getCookie({name : 'garden_promo'});
							
							//2016-06-23 added by titan 把值轉成array然後判斷是否已經加過，另外只留前3筆
							//alert('originalValue = ' + originalValue);
							
							/****/
							var array = originalValue.split('|');
							
							//alert(funcId);
							if($.inArray(funcId,array) == -1) {
								array.push(funcId);
							}
							
							if(array.length > 3) {
								array.shift();
							}

							//alert(array.join('|'));
							/****/
							
							GardenUtils.browser.setCookie({
								name : 'garden_promo',
								value : array.join('|'),
								expiresDay : 7,
								isRemeberMe : true
							});
							
						}

					});
				}
				
			}

    } // end if: subContent exist

    var contentflame = $('#contentflame');
    if(contentflame.length != 0){
        contentflame.parents('.eva_content').first().children('.dulcie').remove();
    } // end if: contentflame exist

    insurance();
	
	/*2016-10-16 added by titan 加上跳離本行訊息*/
	GardenUtils.browser.leaveWeb({
		title : '親愛的客戶您好, 提醒您按確定後將離開新光人壽官網',
		matchURL : ['skl.com.tw']
	});

    blockEqualHeight( $('.main_content') );

	$(window).resize(function(){
        blockEqualHeight($('.main_content'));
    });
	
    _GATitleCollapse();

    // 線上客服
    // $('#sub_business_service ul.navchad').append('<li class="lastlist" data-ga-id="online-service">'
    //     +'<a id="online-service">線上客服</a></li>');
    // // megamenu hover in 9_jiaru_header_footer
     megamenu_hover({
         target: $('#sub_business_service'),
         parent_width: $('#wrapper').width()
     });

     //線上人數按鈕
     $('.service-button').off('click').on('click',function(e){
        e.preventDefault();
        e.stopPropagation();
        _displayOnlineWaiting();
     });

    // editor table scroll
    editorTableScroll();
};

var browser = {
    isIe: function () {
        return navigator.appVersion.indexOf("MSIE") != -1;
    },
	isIpad: function () {
        return navigator.appVersion.indexOf("iPad") != -1;
    },
    navigator: navigator.appVersion,
    getVersion: function() {
        var version = 999; // we assume a sane browser
        if (navigator.appVersion.indexOf("MSIE") != -1)
            // bah, IE again, lets downgrade version number
            version = parseFloat(navigator.appVersion.split("MSIE")[1]);
        return version;
    }
};

function editorTableScroll(){
    $('.editor_table').each(function(){
        var parent_ele = $(this).parent();
        var parent_w = parent_ele.outerWidth(),
            self_width = $(this).width();

        console.debug('self_width = ' + self_width, $(this));
        console.debug('parent_w = ' + parent_w);

		
        if((browser.isIe() && self_width > parent_w && parent_w != 0) || 
            (!browser.isIe() && self_width > parent_w) ||
			(browser.isIpad() && self_width >= parent_w)){
            if( !parent_ele.hasClass('table_mobile_div') ){
                var table_div = $('<div class="table_mobile_div"></div>').append($(this).clone()).insertBefore( $(this) );
                $(this).remove();
                table_div.css({
                    'overflow-x': 'scroll'
                });
            } else {
                parent_ele.css({
                    'overflow-x': 'scroll'
                });
            }
        } else {
            if(self_width < parent_w){
                parent_ele.css({
                    'overflow-x': 'hidden'
                });
            }
        }
    }); // end each: editor_table
} // end editorTableScroll function

function insuranceListPartner(conf) {
	var target = conf.target;
	
	//如果超過三列的話，就要長更多並把第三列之後先hide
	var list = target.find('.skinsurance-013-cooperationList');
	
	if(target.find('.skinsurance-013-cooperationList').children().length > 3) {
		
		//把第三列後的hide
		$.each(target.find('.skinsurance-013-cooperationList').children(),function(i,obj){
			if(i >= 3) {
				obj = $(obj);
				obj.hide();
			}
		});
		
		var more = $('<div class="knowMore"><a href="#">顯示更多</a></div>');
		more.appendTo(list);
		
		more.find('a').off('click').on('click',function(e){
			e.preventDefault();
			
			var $this = $(this);
			if($this.hasClass('active')) {
				$.each(target.find('.skinsurance-013-cooperationList').children(),function(i,obj){
					obj = $(obj);
				
					if(i >= 3 && !obj.hasClass('knowMore')) {						
						obj.hide();
					}
				});
				
				$this.removeClass('active');
                $this.text('顯示更多');
			}
			else {
				target.find('.skinsurance-013-cooperationList').children().show();
				$this.addClass('active');
                $this.text('顯示較少');
			}

            blockEqualHeight($this.parents('.customizeArea').first());
		});
	}
}

function oversea(conf) {
	var target = conf.target;
	
	//綁連動年份跟月份改變最大日期
	target.find('[name="birthYear"],[name="birthMonth"]').change(function(){
		var year = target.find('[name="birthYear"]').val();
		var month = target.find('[name="birthMonth"]').val();
		
		GardenUtils.ajax.loading({
		        type : 'post',
		        url : ajaxPrefix + 'jsp/getDate.jsp?year=' + year + '&month=' + month,
		        datatype : 'json',
		        callback : function(json) {
		            json = $.parseJSON(json);
		              
				console.debug(json);
				
				var birthDaySelect = target.find('[name="birthDay"]');
				
				var options = [];
				for(var i=1;i<=parseInt(json.maxDay);i++) {
					options.push('<option value="'+i+'">'+i+'</option>');
				}
				
				birthDaySelect.empty().append(options.join(''));
		    }
		});
	});
	
	//綁試算
	target.find('a.submit').off('click').on('click',function(e){
		e.preventDefault();
		
		var res = GardenUtils.valid.validForm({
                type: "alert",
                showAllErr: false,
                formId: ["mainForm"],
                validEmpty: [
				{
                    name: 'gender',
                    msg: '性別'
                }
				,{
                    name: 'job',
                    msg: '職業類別'
                }
				,{
                    name: 'faceAmt',
                    msg: '欲投保金額(萬元)'
                }
				],
                validNumber: [
					{
	                    name: 'faceAmt',
	                    msg: '欲投保金額(萬元)'
	                }
				],
                validDecimal: [],
                validEmail: [],
                validDate: [],
                validMobile: [],
                errorDel: [],
                customizeFun: function(customizeValidResult) {					

                }
            });
			
			if(res) {
				
				var form = target.find('form');
			
				GardenUtils.ajax.loading({
			        type : 'post',
			        url : ajaxPrefix + 'jsp/overseacallWS.jsp',
					data : form.serialize(),
			        datatype : 'json',
			        callback : function(json) {
			            json = $.parseJSON(json);
			              
						console.debug(json);
						
						
						
						if(json.isSuccess == 'Y') {
							GardenUtils.display.popup({
								title:'試算結果',			 
					            content : '<div class="TravelCallCalculateResults">保費試算結果\n新臺幣' + json.result + '元</div>',
					            closeCallBackFn : function(){},
								showCallBackFn : function(){},
					            isShowSubmit : false,
								isShowClose : true
							});
						}
						else {

							GardenUtils.display.popup({
								title:'試算結果',			 
					            content : json.errorMsg,
					            closeCallBackFn : function(){},
								showCallBackFn : function(){},
					            isShowSubmit : false,
								isShowClose : true
							});
						}
					}
				});
			}
	});
}

function funnycall(conf) {
	var target = conf.target;
	
	//綁連動年份跟月份改變最大日期
	target.find('[name="poIssueDateYear"],[name="poIssueDateMonth"]').change(function(){
		var year = target.find('[name="poIssueDateYear"]').val();
		var month = target.find('[name="poIssueDateMonth"]').val();
		
		GardenUtils.ajax.loading({
		        type : 'post',
		        url : ajaxPrefix + 'jsp/getDate.jsp?year=' + year + '&month=' + month,
		        datatype : 'json',
		        callback : function(json) {
		            json = $.parseJSON(json);
		              
				console.debug(json);
				
				var poIssueDateDaySelect = target.find('[name="poIssueDateDay"]');
				
				var options = [];
				for(var i=1;i<=parseInt(json.maxDay);i++) {
					options.push('<option value="'+i+'">'+i+'</option>');
				}
				
				poIssueDateDaySelect.empty().append(options.join(''));
		    }
		});
	});
	
	//綁選擇國外要開啟海外突發選項
	target.find('[type="radio"][name="travelDestInd"]').change(function(e){
		var val = $(this).val();
		
		var faceAMT5 = target.find('[name="faceAMT5"]').parent();
		if(val == '1') {
			faceAMT5.addClass('hidden');
		}
		else {
			faceAMT5.removeClass('hidden');
		}

        _insuranceMainContractCeiling({
            target: target
        });
	});

    var relationIndAge = target.find('[name="relationIndAge"]');
    relationIndAge.change(function(e){

        var relationInd_ws = 0;
        switch( $(this).val() ){
            case '14':
                relationInd_ws = 2;
                break;
            case '15': case '21': case '66': case '71': case '76': case '81': case '86': 
                relationInd_ws = 1;
                break;
        };

        target.find('[name="relationInd"]').val( relationInd_ws );

        _insuranceMainContractCeiling({
            target: target
        });
    });
    //relationIndAge.find('[age="21"]').attr('selected', 'selected');
    //relationIndAge.trigger('change');
	
	//綁試算
	target.find('a.submit').off('click').on('click',function(e){
		e.preventDefault();
		
		var res = GardenUtils.valid.validForm({
                type: "alert",
                showAllErr: false,
                formId: ["mainForm"],
                validEmpty: [
				{
                    name: 'travelDestInd',
                    msg: '旅遊地點'
                }
				,{
                    name: 'relationIndAge',
                    msg: '被保險人年齡'
                }
				,{
                    name: 'faceAMT1',
                    msg: '主約保額'
                },
				{
                    name: 'faceAMT2',
                    msg: '傷害醫療保額'
                },
                {
                    name: 'faceAMT5',
                    msg: '海外突發疾病保額'
                },
				{
                    name: 'issuedDays',
                    msg: '旅遊天數'
                }
				
				],
                validNumber: [{
                    name: 'issuedDays',
                    msg: '旅遊天數'
                }],
                validDecimal: [],
                validEmail: [],
                validDate: [],
                validMobile: [],
                errorDel: [],
                customizeFun: function(customizeValidResult) {
                    var travelDestInd = target.find('[name="travelDestInd"]:checked');
                    var issuedDays = target.find('[name="issuedDays"]');
					
					
                    if( issuedDays.val() < 0 ){
                        customizeValidResult.push({
                            obj: issuedDays,
                            msg: '旅遊天數不可小於 0 天'
                        });
                    } else if ( travelDestInd.val() == 1 && issuedDays.val() > 90 ) {
                        customizeValidResult.push({
                            obj: target.find('[name="issuedDays"]'),
                            msg: '國內旅遊保險天數上限 90 天'
                        });
                    } else if ( travelDestInd.val() == 2 && issuedDays.val() > 180 ) {
                        customizeValidResult.push({
                            obj: target.find('[name="issuedDays"]'),
                            msg: '國內旅遊保險天數上限 180 天'
                        });
                    }
					
					if(travelDestInd.val() == 2) {
						if(target.find('[name="faceAMT5"]').val() != '0' && target.find('[name="faceAMT2"]').val() == '0') {
							customizeValidResult.push({
	                            obj: target.find('[name="faceAMT5"]'),
	                            msg: '需投保旅平險主約及傷害醫療才可附加海外突發疾病'
	                        });
						}
					}
                }
            });
			
			if(res) {
				
				var form = target.find('form');
                var data = form.serialize();
			
				GardenUtils.ajax.loading({
			        type : 'post',
			        url : ajaxPrefix + 'jsp/funnycallWS.jsp',
					data : data,
			        datatype : 'json',
			        callback : function(json) {
			            json = $.parseJSON(json);
			              
						console.debug(json);
						
						
						
						if(json.isSuccess == 'Y') {
							GardenUtils.display.popup({
								title:'試算結果',			 
					            content : '<div class="TravelCallCalculateResults">保費試算結果\n新臺幣' + json.result + '元</div>',
					            closeCallBackFn : function(){},
								showCallBackFn : function(){},
					            isShowSubmit : false,
								isShowClose : true
							});
						}
						else {

							GardenUtils.display.popup({
								title:'試算結果',			 
					            content : json.errorMsg,
					            closeCallBackFn : function(){},
								showCallBackFn : function(){},
					            isShowSubmit : false,
								isShowClose : true
							});
						}
					}
				});
			}
	});
} // end funnycall function

function _insuranceMainContractCeiling(conf){
    var target = conf.target;

    var travelDestInd = target.find('[name="travelDestInd"]:checked');
    var relationInd = target.find('[name="relationIndAge"] option:selected');
    var mainContract = target.find('[name="faceAMT1"]').empty()
        .append('<option value="">主約保額</option>');
    var mainContract_upper = 0;

    switch( relationInd.attr('age') ){
        case '14':
            mainContract_upper = 200;
            break;
        case '15':
            if( travelDestInd.val() == 1 ) mainContract_upper = 1000;
            else if( travelDestInd.val() == 2 ) mainContract_upper = 1500;
            break;
        case '21':
            if( travelDestInd.val() == 1 ) mainContract_upper = 1500;
            else if( travelDestInd.val() == 2 ) mainContract_upper = 2000;
            break;
        case '66':
            if( travelDestInd.val() == 1 ) mainContract_upper = 1000;
            else if( travelDestInd.val() == 2 ) mainContract_upper = 1500;
            break;
        case '71':
            mainContract_upper = 500;
            break;
        case '76':
            mainContract_upper = 300;
            break;
        case '81':
            mainContract_upper = 100;
            break;
        case '86':
            mainContract_upper = 60;
            break;
    };

    target.find('.main-contract-select > option').each(function(){
        var val = $(this).val();
        if( val <= mainContract_upper ){
            mainContract.append($(this).clone());
        }
    });

    mainContract.change(function(){
        _insuranceCeiling({
            target: target
        });
    });
    mainContract.trigger('change');
} // end _insuranceMainContractCeiling function

function _insuranceCeiling(conf){
    var target = conf.target;

    var relationInd = target.find('[name="relationIndAge"] option:selected');
    var mainContract = target.find('[name="faceAMT1"]');
    var injuryMedical = target.find('[name="faceAMT2"]').empty()
        .append('<option value="">傷害醫療保額</option>');
    var overseas = target.find('[name="faceAMT5"]').empty()
        .append('<option value="">海外突發疾病保額</option>');
    var injury_upper = parseFloat(mainContract.val())*0.2,
        overseas_upper = parseFloat(mainContract.val())*0.2;

    switch( relationInd.attr('age') ){
        case '14':
			injury_upper = 150;
            overseas_upper = 100;
            
            break;
        case '15': case '21':
            if( injury_upper > 200){
                injury_upper = 200;
            }
            if( overseas_upper > 200){
                overseas_upper = 200;
            }
            break;
        case '66':
            if( injury_upper > 150){
                injury_upper = 150;
            }
            if( overseas_upper > 100){
                overseas_upper = 100;
            }
            break;
        case '71': case '76':
            break;
        case '81': case '86':
            overseas_upper = 0;
            break;
    };

    target.find('.injury-medical-select > option').each(function(){
        var val = $(this).val();
        if( val <= injury_upper ){
            injuryMedical.append($(this).clone());
        }
    });

    target.find('.overseas-select > option').each(function(){
        var val = $(this).val();
        if( val <= overseas_upper ){
            overseas.append($(this).clone());
        }
    });
} // end _insuranceCeiling function

function Housingloans(conf) {
	var target = conf.target;
	
	//綁重新產生驗證碼
	target.find('a.restart').off('click').on('click',function(e){
		e.preventDefault();
		
		target.find('#validNumber').attr('src','/sklife_web/auth?action=createValidNumber&v=' + new Date().getTime());
	});
	
	//綁清除
	target.find('a.clear').off('click').on('click',function(e){
		e.preventDefault();
				
		target.find('form')[0].reset();
	});

	//綁送出
	target.find('a.confirm').off('click').on('click',function(e){
		e.preventDefault();
		
		var res = GardenUtils.valid.validForm({
                type: "alert",
                showAllErr: false,
                formId: ["mainForm"],
                validEmpty: [
				{
                    name: 'address',
                    msg: '房屋所在地'
                }
				,{
                    name: 'applicantName',
                    msg: '姓名'
                }
				,{
                    name: 'houseYear',
                    msg: '屋齡'
                },
				{
                    name: 'area',
                    msg: '坪數'
                },
				{
                    name: 'email',
                    msg: 'Email'
                },
				{
                    name: 'ven',
                    msg: '圖形驗證碼'
                }
				],
                validNumber: [
					{
	                    name: 'houseYear',
	                    msg: '屋齡'
	                }
				],
                validDecimal: [],
                validEmail: [
					{
	                    name: 'email',
	                    msg: 'Email'
	                }
				],
                validDate: [],
                validMobile: [],
                errorDel: [],
                customizeFun: function(customizeValidResult) {
					//公司電話或住家電話或手機擇一
	                if (target.find('[name="tel"]').val() == '' && target.find('[name="hometel"]').val() == '' && target.find('[name="mobile"]').val() == '') {
	                    customizeValidResult.push({
	                        obj: target.find('[name="tel"]'),
	                        msg: '請輸入公司電話或住家電話或手機'
	                    });
	                }
					
					
                }
            });
			
		if(res) {
			var form = target.find('form');
			GardenUtils.ajax.loading({
		            type : 'post',
		            url : ajaxPrefix + 'jsp/housingloans.jsp',
		            data : form.serialize(),
		            datatype : 'json',
		            callback : function(json) {
		                json = $.parseJSON(json);
		                
						console.debug(json);
						
						if(json.isValid != undefined && json.isValid == 'N') {
							alert(json.errorMsg);
						}
						else if(json.isSuccess == 'N') {
							alert(json.errorMsg);
						}
						else if(json.isSuccess == 'Y') {
							alert('申請送出成功');
						}
						else {
							alert('系統異常，請稍候再試!');
						}
		            }
		        });
		}
	});
}

function buildRentInfo(conf) {
	var target = conf.target;
	
	var tbody = target.find('table.skinsurance-019-immovablesTable tbody');

	//綁查詢條件
	target.find('[name="Type"],[name="AreaKind"]').off('click').on('click',function(){
		var type = target.find('[name="Type"]:checked').val();
		var areakind = target.find('[name="AreaKind"]:checked').val();
		
		var data = '';
		if(type != undefined) {
			data += '&Type=' + type;
		}
		
		if(areakind != undefined) {
			data += '&AreaKind=' + areakind;
		}
		
		_createBuildRentInfo(tbody,data);
	});
	
		
	target.find('[name="Type"]:checked').trigger('click');
	
	//_createBuildRentInfo(tbody,'');
}

function _createBuildRentInfo(tbody,data) {

	if(data == '') data = '';

	GardenUtils.ajax.loading({
        type: 'post',
        url : ajaxPrefix + 'jsp/BuildRentInfo.jsp?v=' + new Date().getTime(),
        async : false,
		data : data,
        dataType: 'json',
        callback : function (json) {
			console.debug(json);
			
			json = $.parseJSON(json);
			var trArray = [];
		
           $.each(json.content[0].datas,function(i,data){
				var row = data.row;
				
				var tdArray = [];
				$.each(row,function(j,col){
					tdArray.push('<td>'+col.value+'</td>');
				});
				
				trArray.push('<tr>'+tdArray.join('')+'</tr>');
		   }); 
		   
		   
		   tbody.empty().append(trArray.join(''));
        }
    });
}

function getCustomizeHTML(url){
    var resp;
    $.ajax({
        type: 'post',
        url : ajaxPrefix + 'customize_layout/' +  url+'?v=' + new Date().getTime(),
        async : false,
        dataType: 'html',
        success : function (html) {
            resp = html;
        },
        error : function (jqXHR, textStatus, errorThrown) {
            alert('getCustomizeHTML [ERROR]: ' + textStatus);
            console.log(textStatus, errorThrown);
        },
        beforeSend : function () {
            console.log('beforeSend');
        },
        complete : function () {
            console.log('complete');
        }
    });
    return resp;
}; // end getCustomizeHTML function

// 取得選單資訊
function _getInsuranceFAQ(config){

    $.ajax({
        //url: ajaxPrefix + '/mock/getInsuranceFAQ.json?v=' + new Date().getTime(),
        url: ajaxPrefix + 'jsp/getInsuranceFAQ.jsp?v=' + new Date().getTime(), 
        dataType: 'json',
        success:function(json) {
            if( typeof json == 'string' ) json = $.parseJSON(json);
            config['datas'] = json;
            config.callback( config );
        }
    });
} // end _getInsuranceFAQ function

function _createInsuranceSelect(config){
    var target = config.target,
        datas = config.datas;

    // 建立服務清單
    var service_select = target.find('select#service'),
        serviceArr = [{
            key :"001"  ,val : "保戶留言版"
        },{
            key :"002"  ,val : "線上投保諮詢服務"
        },{
            key :"004"  ,val : "函索銀行轉帳申請"
        },{
            key :"005"  ,val : "申請道路救援卡"
        },{
            key :"007"  ,val : "申請歐盟申根國家簽證投保證明(須購買旅行平安險)"
        },{
            key :"008"  ,val : "商品服務"
        }];

    if( datas.hasOwnProperty('isLogin') && datas.isLogin ){
        serviceArr.push({
            key :"003"  ,val : "申請英文投保證明"
        });
		
		//2016-12-30 added by titan 帶入會員資料
		target.find('[name="applicantName"]').val(datas.custInfo.CustName);
		target.find('[name="idNumber"]').val(datas.custInfo.CustIDN);
		target.find('[name="email"]').val(datas.custInfo.CusteMail);
		target.find('[name="tel"]').val(datas.custInfo.CustePhone);
    } // end if: isLogin exist

    serviceArr = serviceArr.sort(function(a, b){
        var aName = a.key;
        var bName = b.key;
        return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
    });

    $.each(serviceArr, function(i, serviceObj){
        service_select.append('<option value="'+serviceObj.key+'">'+serviceObj.val+'</option>');
    });

    // bind select of service action
    var subService = target.find('#subService'),
        content_h = target.find('.containerTable').outerHeight();
    service_select.on('change', function(){
        var serviceId = $(this).find(':selected').val();

        subService.empty().show();

        switch(serviceId){
            case '002':
                subService.append('<div class="block col-sm-12 col-xs-12 required">'
                    +'<span class="col-sm-3 col-xs-12">專人服務時間</span>'
                    +'<select class="col-sm-9 col-xs-12" name="serviceTime" id="serviceTime">'
                    +'<option value="">請選擇</option>'
                    +'<option value="1">10~12時</option>'
                    +'<option value="2">13~15時</option>'
                    +'<option value="3">15~17時</option></select></div>'
                    +'<div class="block col-sm-12 col-xs-12">'
                    +'<span class="col-sm-3 col-xs-12">行動電話</span>'
                    +'<input class="col-sm-9 col-xs-12" type="text" name="cellphone" value="" maxlength="10" /></div>'
                    +'<div class="block col-sm-12 col-xs-12">'
                    +'<span class="notice-msg col-sm-12 col-xs-12">※本公司收到您的意見後，將儘速於次一工作日派員與您聯繫。</span></div>');
                
                target.find('.containerTable').css('minHeight', content_h+subService.outerHeight());
                break;
            case '003':
                subService.append('<div class="block col-sm-12 col-xs-12 required">'
                    +'<span class="col-sm-3 col-xs-12">被保險人英文姓名</span>'
                    +'<input class="col-sm-9 col-xs-12" type="text" name="engName" value="" /></div>'
                    +'<div class="block col-sm-12 col-xs-12 required">'
                    +'<span class="col-sm-3 col-xs-12">保單號碼</span>'
                    +'<input class="col-sm-9 col-xs-12" type="text" name="insuranceNum" value="" /></div>'
                    +'<div class="block col-sm-12 col-xs-12 required">'
                    +'<span class="col-sm-3 col-xs-12">要保人姓名</span>'
                    +'<input class="col-sm-9 col-xs-12" type="text" name="insuranceName" value="" /></div>'
                    +'<div class="block col-sm-12 col-xs-12 required">'
                    +'<span class="col-sm-3 col-xs-12">被保險人身分證字號</span>'
                    +'<input class="col-sm-9 col-xs-12" type="text" name="insuranceId" value="" maxlength="10" /></div>'
                    +'<div class="block col-sm-12 col-xs-12">'
                    +'<span class="notice-msg col-sm-12 col-xs-12">※備註：被保險人英文名應為護照上的英文姓名。</span></div>');
                
                target.find('.containerTable').css('minHeight', content_h+subService.outerHeight());
                break;
            case '007':
                subService.append('<div class="block col-sm-12 col-xs-12 required">'
                    +'<span class="col-sm-3 col-xs-12">被保險人英文姓名</span>'
                    +'<input class="col-sm-9 col-xs-12" type="text" name="engName" value="" /></div>'
                    +'<div class="block col-sm-12 col-xs-12 required">'
                    +'<span class="col-sm-3 col-xs-12">保單號碼</span>'
                    +'<input class="col-sm-9 col-xs-12" type="text" name="insuranceNum" value="" /></div>'
                    +'<div class="block col-sm-12 col-xs-12 required">'
                    +'<span class="col-sm-3 col-xs-12">被保險人身分證字號</span>'
                    +'<input class="col-sm-9 col-xs-12" type="text" name="insuranceId" value="" maxlength="10" /></div>'
                    +'<div class="block col-sm-12 col-xs-12 required">'
                    +'<span class="col-sm-3 col-xs-12">被保險人出生日期</span>'
                    +'<input class="col-sm-9 col-xs-12" type="text" name="insurancebd" value="" /></div>'
                    +'<div class="block col-sm-12 col-xs-12 required">'
                    +'<span class="col-sm-3 col-xs-12">被保險人護照號碼</span>'
                    +'<input class="col-sm-9 col-xs-12" type="text" name="passport" value="" /></div>'
                    +'<div class="block col-sm-12 col-xs-12">'
                    +'<span class="notice-msg col-sm-12 col-xs-12">※備註：</span>'
					+'<span class="notice-msg col-sm-12 col-xs-12">1.被保險人英文名應為護照上的英文姓名。</span>'
					+'<span class="notice-msg col-sm-12 col-xs-12">2.投保證明需1-3個工作天，待完成後掛號郵寄或是E-MAIL提供。</span>'
					+'</div>');
                
                target.find('.containerTable').css('minHeight', content_h+subService.outerHeight());
                break;
            default:
                target.find('.containerTable').css('minHeight', content_h);
                subService.hide();
        };
    }); // end change: service select

    // 建立縣市清單
    var city_select = target.find('select#city');
    if( datas.hasOwnProperty('data') ){
        $.each(datas.data, function(i, cityObj){
            city_select.append('<option value="'+cityObj.cityId+'">'+cityObj.cityName+'</option>');
        });
    } // end if: city data exist

    city_select.on('change', function(){
        var city_selected = $(this).val(),
            area_select = target.find('select#area');
        if( city_selected == '' ){
            area_select.empty();
        } else {
            _getCityData({
                target: area_select,
                city: city_selected,
                ctype: 1,
                atype: 1,
                callback: function(config){
                    var target = config.target,
                        datas = config.datas;

                    target.empty();

                    if(datas.hasOwnProperty('data')){
                        $.each(datas.data, function(i, areaObj){
                            target.append('<option value="'+areaObj.cityId+'">'+areaObj.cityName+'</option>');
                        });
                    } // end if: city data exist
                }
            }); // end call: _getCityData
        }
    });

    var url = window.location.href;
    var params_str = url.indexOf('?')!=-1 && url.split('?').length > 1? url.split('?')[1]:'';
    var params = params_str.indexOf('&')!=-1? params_str.split('&'):[params_str];
    $.each(params, function(i, param_str){
        if( param_str.indexOf('=') != -1 ){
            var key = param_str.split('=')[0];
            var value = param_str.split('=').length > 1? param_str.split('=')[1]:'';
            if(key == 'serviceId' && value != ''){
                service_select.val(value).trigger('change');
            }
        }
    });
} // end _createInsuranceSelect function

var _isAjaxUploadSupported = function() {
    var input = document.createElement('input');
    input.type = 'file';

    return (
        'multiple' in input &&
            typeof File != 'undefined' &&
            typeof FormData != 'undefined' &&
            typeof (new XMLHttpRequest()).upload != 'undefined' );
}; // end _isAjaxUploadSupported function

var _getIframeContentJSON = function(iframe){
    //IE may throw an "access is denied" error when attempting to access contentDocument on the iframe in some cases
    try {
        var doc = iframe.contentWindow.document, response;

        var innerHTML = doc.body.innerHTML;
        //plain text response may be wrapped in <pre> tag
        if (innerHTML.slice(0, 5).toLowerCase() == "<pre>" && innerHTML.slice(-6).toLowerCase() == "</pre>") {
            innerHTML = doc.body.firstChild.firstChild.nodeValue;
        }

        //log.apply(console, ["innerHTML", "：", innerHTML]);
        //response = eval('(' + innerHTML + ')');
        response = innerHTML;
    } catch(err){
        alert('IE getIframeContentJSON Error:'+err);
        response = {isSuccess: 'N'};
    }

    return response;
}; // end _getIframeContentJSON function

function _submitMindForm_callback( target, data ) {

    var formId = 'customizerMindForm',
        form = target.find('form#'+formId);

    if(typeof data == 'string') data = $.parseJSON(data);

    if( data.isSuccess == 'N' ){
        if( data.hasOwnProperty('errorMsg') ){
            alert(data.errorMsg);
        } else {
            alert('送出失敗，請稍後再試！');
        }
    } else {
        if( data.isValid == 'N' ){
            alert(data.errorMsg);
        } else {

            alert('已聯絡服務人員！');

            form.find('input, textarea').val('');
            form.find('select').prop('selectedIndex',0);
            form.find('#subService').hide();
            form.find('[name="agree"]').removeAttr('checked');

            target.find('[name="validnumber"]').val('');
            _getValidNumber({
                target: target.find('#validnumberImg')
            });
        }
    }
} // end _submitMindForm_callback function

function _submitMindForm(config){
    var target = config.target,
        formId = 'customizerMindForm',
        form = target.find('form#'+formId);

    var validObj = {
            type: "alert",
            showAllErr: false,
            formId: [formId],
            validEmpty: [],
            validIdentity: [],
            validEmail: [],
            validMobile: []
        };

    form.find('.required').each(function(){
        $(this).find('input[type="text"]').each(function(){
            var emptyObj = {
                name: $(this).attr('name'),
                msg: $(this).prev().text(),
                notRemoveSpace: true
            };

            validObj.validEmpty.push(emptyObj);
        });

        $(this).find('textarea').each(function(){
            var emptyObj = {
                name: $(this).attr('name'),
                msg: $(this).prev().text(),
                notRemoveSpace: true
            };

            validObj.validEmpty.push(emptyObj);
        });

        $(this).find('select').each(function(){
            var emptyObj = {
                name: $(this).attr('name'),
                msg: $(this).prev().text()
            };

            validObj.validEmpty.push(emptyObj);
        });
    }); // end each: required

    // validIdentity
    form.find('[name="idNumber"], [name="insuranceId"]').each(function(){
        var name = $(this).attr('name'),
            msg = $(this).prev().text(),
            idObj = {
                name: name,
                msg: msg
            };

        if( name == 'idNumber' ){
            idObj['allowEmpty'] = true;
        } else {
            idObj['allowEmpty'] = false;
        }

        validObj.validIdentity.push(idObj);
    }); // end validIdentity

    // validEmail
    form.find('[name="email"]').each(function(){
        var name = $(this).attr('name'),
            msg = $(this).prev().text(),
            emailObj = {
                name: name,
                msg: msg
            };

        validObj.validEmail.push(emailObj);
    }); // end validEmail

    // validMobile
    form.find('[name="cellphone"]').each(function(){
        var name = $(this).attr('name'),
            msg = $(this).prev().text(),
            mobileObj = {
                name: name,
                msg: msg
            };

        if( name == 'cellphone' ){
            mobileObj['allowEmpty'] = true;
        } else {
            mobileObj['allowEmpty'] = false;
        }

        validObj.validMobile.push(mobileObj);
    }); // end validMobile

    // customizeFun
    validObj['customizeFun'] = function(customizeValidResult) {

        // 地址
        /*var city = form.find('[name="city"]'),
            area = form.find('[name="area"]'),
            addr = form.find('[name="address"]');

        if( !(city.val()!='' && area.val()!='' && addr.val()!=''
            || city.val()=='' && area.children().length==0 && addr.val()=='') ){
            customizeValidResult.push({
                obj: city,
                msg: '請輸入'+city.prev().text()
            });
        }*/

        // 個資條款
        var agree = form.find('[name="agree"]:checked');
        if( agree.length == 0 ){
            customizeValidResult.push({
                obj: agree,
                msg: '請勾選同意個人資料保護法應告知事項'
            });
        }

        // 驗證碼
        var validnumber = target.find('[name="validnumber"]');
        if( validnumber.val() == '' ){
            customizeValidResult.push({
                obj: validnumber,
                msg: '請輸入驗證碼'
            });
        }
		
		//申請歐盟要加上護照號碼不含空白長度5以上
		var serviceVal = target.find('[name="service"]').val();
		if(serviceVal == '007') {
			var passport = target.find('[name="passport"]');
			if(passport.val().replace(/\s+/g, '').length < 5) {
				customizeValidResult.push({
	                obj: passport,
	                msg: '護照號碼需不含空白且長度5碼以上'
	            });
			}
		}
    }; // end customizeFun

    console.log('valid', validObj);

    var res = GardenUtils.valid.validForm( validObj );
    //alert(res);
    if( res ){
        if( !_isAjaxUploadSupported() ) {

            /*if( !_isAjaxUploadSupported() ){
                // Add event...
                var response;
                function eventHandlermyFile() {
                    response = _getIframeContentJSON(iframeIdmyFile);

                    if(response != undefined && response != 'undefined') {
                        //fn.apply(this,[response]);
                        _submitMindForm_callback(target, response);
                    }
                }

                if( $('body iframe#upload_iframe_myFile').length != 0 ){
                    $('body iframe#upload_iframe_myFile').remove();
                }
                var iframe = $('<iframe name="upload_iframe_myFile" id="upload_iframe_myFile">').prependTo($('body'));
                iframe.attr('width', '0');
                iframe.attr('height', '0');
                iframe.attr('border', '0');
                iframe.attr('src', 'javascript:false;');
                iframe.hide();

                iframe.on('load', function(){
                    eventHandlermyFile();
                });

                var iframeIdmyFile = document.getElementById("upload_iframe_myFile");
        
                // create form
                if ($('body form#upload_form').length != 0) {
                    $('body form#upload_form').remove();
                }

                form.find('input[name="ven"]').remove();
                form.append('<input class="hidden" name="ven" type="text" value="'+target.find('[name="validnumber"]').val()+'" />');
                form.append('<button type="submit" class="hidden"></button>');
                form.attr('action', ajaxPrefix+'jsp/InsuranceFAQ.jsp?v='+new Date().getTime());
                form.attr('target', 'upload_iframe_myFile');
                form.attr('enctype', 'multipart/form-data');
                form.attr('encoding', 'multipart/form-data');
                form.attr('method', 'post');
                form.addClass('hidden');

                form.submit();
            }*/

            if( $('#form_ie').length > 0 ){
                $('#form_ie').remove();
            }

            var form_ie = $('<form id="form_ie">').prependTo( $('body') ),
                url_ie = ajaxPrefix+'jsp/InsuranceFAQ.jsp?v='+new Date().getTime();

            form.find('input').each(function(){

                if( $(this).attr('type') == 'text' ) {
                    $('<input name="'+$(this).attr('name')+'" value="'+$(this).val()+'" type="text"/>').appendTo(form_ie);
                }
            });

            form.find('select').each(function(){
                if( $(this).children().length > 0 ){
                    $('<input name="'+$(this).attr('name')+'" value="'+$(this).find('option:selected').val()+'" type="text"/>').appendTo(form_ie);
                }
            });

            form.find('textarea').each(function(){
                if( $(this).val() != '' ){
                    $('<input name="'+$(this).attr('name')+'" value="'+$(this).val()+'" type="text"/>').appendTo(form_ie);
                }
            });

            if(form_ie.find('[name="ven"]').length == 0) {
                $('<input name="ven" value="" type="hidden"/>').appendTo(form_ie);
            }
            form_ie.find('[name="ven"]').val(target.find('[name="validnumber"]').val());

            GardenUtils.ajax.uploadFile(form_ie, url_ie, function(response){
                console.log('uploadFile res: ');
                console.log(response);
                _submitMindForm_callback(target, response);
            });

        } // end if: ie
        else {
            var data = new FormData(form[0]);
    
            if(form.find('[name="ven"]').length == 0) {
                $('<input name="ven" value="" type="hidden"/>').appendTo(form);
            }
            form.find('[name="ven"]').val(target.find('[name="validnumber"]').val());
        
            GardenUtils.ajax.loading({
                async: false,
                //url: ajaxPrefix+'mock/InsuranceFAQ.json?v='+new Date().getTime(),
                url: ajaxPrefix+'jsp/InsuranceFAQ.jsp?v='+new Date().getTime(),
                data: form.serialize(),
                //processData: false,
                //cache : false,
                //contentType : false,
                type: 'POST',
                callback : function(data){
                    _submitMindForm_callback(target, data);
                }
            });
        } // end else: not ie
    }
} // end _submitMindForm function

function _getValidNumber(config){
    config.target.attr('src', ajaxPrefix+'auth?action=createValidNumber&v='+new Date().getTime());
} // end _getValidNumber function

function _createRecursiveTab(conf){
    var target = conf.target,
        datas = conf.datas,
        pageSize = conf.hasOwnProperty('pageSize')? conf.pageSize : 10,
        isPagination = conf.hasOwnProperty('isPagination')? conf.isPagination : true,
        gaTab_obj = {
            target: target,
            options: {
                tabTitleContainerClass: 'tab_red'
            },
            datas: []
        }; // end gaTab_obj

    if($(datas).find('Type').length != 0){
        $(datas).find('Type[name="ROOT"] > Type').each(function(){
            gaTab_obj.datas.push({
                id: $(this).attr('id'),
                name: $(this).attr('name')
            });
        });


        gaTab_obj['callback'] = function(config){
            var target = config.target,
                typeId = target.attr('id');

            var data_level2 = $(datas).find('Type[id="'+typeId+'"] > Type');

            if( data_level2.length > 0 ){

                var gaTab_obj = {
                        target: target,
                        options: {
                            tabTitleContainerClass: 'tab_level2_red'
                        },
                        datas: []
                    };
                
                data_level2.each(function(i){
                    gaTab_obj.datas.push({
                        id: $(this).attr('id'),
                        name: $(this).attr('name')
                    });
                });

                gaTab_obj['callback'] =  function(config){

                    var target = config.target,
                        typeId = target.attr('id');

                    conf.createTabContent({
                        target: target,
                        typeId: typeId,
                        pageSize: pageSize,
                        isPagination: isPagination
                    });
                }; // end callback: level2 tab

                _createGATab(gaTab_obj);

            } else {

                conf.createTabContent({
                    target: target,
                    typeId: typeId,
                    pageSize: pageSize,
                    isPagination: isPagination
                });
            }
        }; // end callback: tab

        _createGATab(gaTab_obj);
    } // end if: has Type
} // end _createRecursiveTab function

function _bindTabIdAction(conf){
    var target = conf.target;

    var location = window.location+'';
    var param_str = (location.indexOf('?') != -1? location.split('?')[1] :'');
    var param_arr = (param_str.indexOf('&') != -1? param_str.split('&') :[param_str]);
    var tabId = '';
    $.each(param_arr, function(i, paramVal){
        if(paramVal.indexOf('tabId') != -1){
            tabId = paramVal.split('=')[1];
        }
    });

    if( target.find('.ga-tab-title-container').length > 0 ){
        target.find('.ga-tab-title-container').each(function(){
            conf['target'] = $(this).parent();
            if( $(this).find('[href="#'+tabId+'"]').length > 0 ){
                conf['tabId'] = tabId;
            } else {
                conf['tabId'] = '';
            }
            
            _GATabActions(conf);
        });
    } else {
        target.find('.ga-tab-content-container').each(function(){
            conf['target'] = $(this).parent();
            if( $(this).find('[href="#'+tabId+'"]').length > 0 ){
                conf['tabId'] = tabId;
            } else {
                conf['tabId'] = '';
            }
            _GATabActions(conf);
        });
    }
} // end _bindTabIdAction function

function _getNewsTypeData(config){

    $.ajax({ //去撈xml動態長畫面
        url: ajaxPrefix + 'jsp/NewsType.jsp?typeId='+config.typeId+'&v=' + new Date().getTime(),
        datatype: 'xml',
        success: function (xml) {
            console.log('_getNewsTypeData', xml);
            config['datas'] = xml;
            config.callback(config);
        }
    });

}; // end _getNewsTypeData function

function _createNewsContent(config){
    var target = config.target.empty(),
        pageSize = config.pageSize,
        datas = config.datas;

    if( target.find('.news-list').length == 0 ){
        var content_ul = $('<ul class="news-list"></ul>').appendTo( target );
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
                    _createNewsContentList(config);
                };

                _getNewsContentData(config);
            }
        });
    }
} // end _createNewsContent function

function _getNewsContentData(config){

    config = $.extend({page:1}, config);

    $.ajax({
        //url: ajaxPrefix + 'mock/news.json?v='+new Date().getTime(),
        url: ajaxPrefix + 'jsp/NewsInfo.jsp?typeId='+config.typeId+'&pageSize='+config.pageSize+'&page='+config.page+'&v=' + new Date().getTime(),
        dataType: 'json',
        success:function(json) {
            if( typeof json == 'string' ) json = $.parseJSON(json);
            config['datas'] = json;
            config.callback( config );
        }
    });
} // end _getNewsContentData function

function _createNewsContentList(conf){
    var target = conf.target.empty(),
        datas = conf.datas.hasOwnProperty('news')?conf.datas.news:[];

    $.each(datas, function(i, data){
        $('<li class="news-ele">'
            +'<h5>'+data.date+'</h5>'
            +'<a href="'+data.url+'"><p>'+data.title+'</p></a>'
        +'</li>').appendTo( target );
    });
} // end _createNewsContentList function

function _getGroupInsTypeData(config){

    $.ajax({ //去撈xml動態長畫面
        //url: ajaxPrefix + 'mock/qaType.xml?v='+new Date().getTime(),
        url: ajaxPrefix + 'jsp/QAType.jsp?typeId='+config.typeId+'&v=' + new Date().getTime(),
        datatype: 'xml',
        success: function (xml) {
            console.log('_getQATypeData', xml);
            config['datas'] = xml;
            config.callback(config);
        }
    });

}; // end _getGroupInsTypeData function

function _createGroupInsContent(config){
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

                _getGroupInsContentData(config);
            }
        });
    }
} // end _createQAContent function

function _getGroupInsContentData(config){

    config = $.extend({page:1}, config);

    $.ajax({
        //url: ajaxPrefix + 'mock/qa.json?v='+new Date().getTime(),
        url: ajaxPrefix + 'jsp/QA.jsp?typeId='+config.typeId+'&pageSize='+config.pageSize+'&page='+config.page+'&v=' + new Date().getTime(),
        dataType: 'json',
        success:function(json) {
            if( typeof json == 'string' ) json = $.parseJSON(json);
            config['datas'] = json;
            config.callback( config );
        }
    });
} // end _getGroupInsContentData function

function _getQATypeData(config){

    $.ajax({ //去撈xml動態長畫面
        //url: ajaxPrefix + 'mock/qaType.xml?v='+new Date().getTime(),
        url: ajaxPrefix + 'jsp/SklifeFAQType.jsp?typeId='+config.typeId+'&v=' + new Date().getTime(),
        datatype: 'xml',
        success: function (xml) {
            console.log('_getQATypeData', xml);
            config['datas'] = xml;
            config.callback(config);
        }
    });

}; // end _getQATypeData function

function _createQAContent(config){
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

                _getQAContentData(config);
            }
        });
    }
} // end _createQAContent function

function _getQAContentData(config){

    config = $.extend({page:1}, config);

    $.ajax({
        //url: ajaxPrefix + 'mock/qa.json?v='+new Date().getTime(),
        url: ajaxPrefix + 'jsp/SklifeFAQ.jsp?typeId='+config.typeId+'&pageSize='+config.pageSize+'&page='+config.page+'&v=' + new Date().getTime(),
        dataType: 'json',
        success:function(json) {
            if( typeof json == 'string' ) json = $.parseJSON(json);
            config['datas'] = json;
            config.callback( config );
        }
    });
} // end _getQAContentData function

function _createQAContentList(conf){
    var target = conf.target.empty(),
        datas = conf.datas.hasOwnProperty('qa')?conf.datas.qa:[];

    $.each(datas, function(i, data){
        $('<li class="ga-qa-item">'
            +'<a class="ga-qa-title" href="#">'+data.question+'</a>'
            +'<div class="ga-qa-content">'+data.answer+'</div>'
            +'</li>').appendTo( target );
    });

    _GAQAActions({
        target: target,
        callback: function(qa_conf){
            var target = qa_conf.target;
            editorTableScroll();
            GardenUtils.plugin.screenMoveToEle({
                moveToObj: target,
                minHeight: $('.headerArea').height()
            });
        }
    });
} // end _createQAContentList function

function _GAQAActions(conf){

    var target = conf.target;

    target.find('.ga-qa-title').each(function(i){
        $(this).attr('href', '#qa_'+i);
        $(this).next().attr('id', 'qa_'+i);
    });

    target.find('.ga-qa-title').off('click').on('click', function(ev){
        ev.preventDefault();

        var qaId = $(this).attr('href'),
            content_ele = target.find('div'+qaId);

        if( !$(this).hasClass('active') ){
            target.find('.ga-qa-title').removeClass('active');
            target.find('.ga-qa-content').removeClass('active');
        }
        
        $(this).toggleClass('active');
        content_ele.toggleClass('active');

        if( $(this).hasClass('active') && conf.hasOwnProperty('callback') ){
            conf.callback(conf);
        }
    });
} // end _GAQAActions function

function _GAQANewActions(conf){

    var target = conf.target;

    target.find('.ga-qa-title-newqa1').each(function(i){
        $(this).attr('href', '#qa_new_'+i);
        $(this).next().attr('id', 'qa_new_'+i);
    });

    target.find('.ga-qa-title-newqa1').off('click').on('click', function(ev){
        ev.preventDefault();

        var qaId = $(this).attr('href'),
            active_ele = $(this).parents('.item-top-newqa1').first();

        if( !active_ele.hasClass('active') ){
            target.find('.item-top-newqa1').removeClass('active');

            if(conf.hasOwnProperty('callback')){
                conf.callback(conf);
            }
        }
        
        active_ele.toggleClass('active');
    });
} // end _GAQANewActions function

function _getDownloadTypeData(config){

    $.ajax({ //去撈xml動態長畫面
        //url: ajaxPrefix + 'mock/downloadType.xml?v='+new Date().getTime(),
        url: ajaxPrefix + 'jsp/DownloadType.jsp?typeId='+config.typeId+'&v=' + new Date().getTime(),
        datatype: 'xml',
        success: function (xml) {
            console.log('_getDownloadTypeData', xml);
            config['datas'] = xml;
            config.callback(config);
        }
    });

}; // end _getDownloadTypeData function

function _createDownloadContent(config){
    var target = config.target.empty(),
        pageSize = config.pageSize,
        datas = config.datas;

    if( target.find('.dowloadList').length == 0 ){
        var content_ul = $('<ul class="dowloadList longer"></ul>').appendTo( target );
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
                    _createDownloadContentList(config);
                };

                _getDownloadContentData(config);
            }
        });
    }
} // end _createDownloadContent function

function _getDownloadContentData(config){

    config = $.extend({page:1}, config);

    $.ajax({
        //url: ajaxPrefix + 'mock/download.json?v='+new Date().getTime(),
        url: ajaxPrefix + 'jsp/downloadInfo.jsp?typeId='+config.typeId+'&pageSize='+config.pageSize+'&page='+config.page+'&v=' + new Date().getTime(),
        dataType: 'json',
        success:function(json) {
            if( typeof json == 'string' ) json = $.parseJSON(json);
            config['datas'] = json;
            config.callback( config );
        }
    });
} // end _getDownloadContentData function

function _createDownloadContentList(conf){
    var target = conf.target.empty(),
        datas = conf.datas.hasOwnProperty('download')?conf.datas.download:[];

    $.each(datas, function(i, data){

        var icon = '';

        switch(data.type){
            case 'pdf': icon = 'image/pdf.png'; break;
            case 'doc': case 'docx': icon = 'image/doc.png'; break;
            case 'xls': case 'xlsx': icon = 'image/excel.png'; break;
        }

        $('<li><a href="'+data.url+'" target="_blank">'+data.title
            +'<span class="download" style="background-image:url('+icon+')"></span>'
            +'</a></li>').appendTo( target );
    });
} // end _createDownloadContentList function

function _createSliderContent(config){

    var target = config.target,
        datas = config.datas.hasOwnProperty('datas')? config.datas.datas : [];

    var container = $('<div class="ga-silder" style="display: none;"></div>').appendTo( target );

    $.each(datas, function(i, data){
        container.append('<div class="ga-item"><div class="acti-slider-item">'
            +'<div class="acti-slider-item-top-img" style="background-image:url('+data.img_url+')"></div>'
            +'<div class="acti-slider-item-down-list">'
            +'<p class="acti-slider-item-down-list-title">'+data.title+'</p>'
            +'<div class="acti-slider-item-down-list-btn"><a href="'+data.url+'">瞭解更多</a></div>'
            +'<img src="image/triangle.png"></div></div></div>');
    });

    if( datas.length > 0 ){
        GardenUtils.plugin.slider({
            target: target,
            options: {
                isFull: false,
                items: 1,
                carouselClass: 'acti-slider-block',
                navigation: {
                    isDisable: false
                }
            },
            callback: function( target ){
                target.find('.ga-silder').hide();
            }
        });
    }
} // end _createSliderContent function

function _getSliderContentData(config){

    $.ajax({
        async: false, 
        //url: ajaxPrefix + 'mock/slider.json?v=' + new Date().getTime(), 
        url: ajaxPrefix + 'jsp/slider.jsp?typeId='+config.typeId+'&v=' + new Date().getTime(), 
        dataType: 'json',
        success:function(json) {
            if( typeof json == 'string' ) json = $.parseJSON(json);
            config['datas'] = json;
            config.callback( config );
        }
    });
} // end _getSliderContentData function

function newsDetail(view) {
	//alert(_newsType);

 //    view.parents('.eva_content').first().children('.dulcie').remove();
	
	var search = location.search;
	
	if(search.indexOf('page') != -1 && search.indexOf('html') != -1) {
		search = search.substring(1,search.length);

		var pageNo = '0';
		var html = '';
		var typeId = '';
		var params = search.split('&');
		$.each(params,function(i,param){
			if(param.indexOf('=') != -1) {
				var paramName = param.split('=')[0];
				var paramValue = param.split('=')[1];
				
				if(paramName == 'page') {
					pageNo = paramValue;
				}
				else if(paramName == 'html') {
					html = paramValue;
				}
				else if(paramName == 'typeId') {
					typeId = paramValue;
				}
			}
		});
		
		
		var back = $('<div class="publication-back-btn"><a href="'+html+'.html?page='+pageNo+'&typeId='+typeId+'">回列表</a></div>');
		back.appendTo(view);
	}
	
	var leftTitle = _newsType == 'important' ? '投資理財' : '關於我們';	
	var view = _newsType == 'important' ? $('#menu_left_investment') : $('#menu_left_aboutus');	
	view.appendTo($('#menu_left'));
	view.show();
	if(_newsType != 'important') menu_left(view, leftTitle);
	
	
}

function blockEqualHeight(target){
    $(target).find('.heighteq_parent').each(function(){
        var maxHeight = 0;
        $(this).find('.heighteq_child').each(function(){
            if( $(this).outerHeight() > maxHeight ) maxHeight = $(this).outerHeight();
        });

        var window_w = $(window).width();
        if(window_w > 768) $(this).find('.heighteq_child').css( 'min-height', maxHeight );
        else $(this).find('.heighteq_child').css( 'min-height', 0 );
    });
} // end blockEqualHeight function

function customerService(conf){
    var target = conf.target;

    // 問題選單
    _getCustomerQuestionData({
        target: target.find('.customerQuestion'),
        callback: function(config){
            var target = config.target,
                datas = config.datas;

            if(datas.hasOwnProperty('datas')){
                $.each(datas.datas, function(i, data){
                    target.append('<option value="'+data.key+'">'+data.value+'</option>');
                });
            }
        }
    });

    // 疑難排解檔案
    target.find('#troubleshoot').attr({
        href: ajaxPrefix+'pdf/新壽官多媒體疑難排除.pdf',
        target: '_blank'
    });

    // 客服
    target.find('#voiceService, #textService').off('click').on('click', function(ev){
        ev.preventDefault();

        var service_id = $(this).attr('id'),
            customerName = target.find('[name="customerName"]').val(),
            customerGender = target.find('.customerGender').children(':selected').val(),
            customerQuestion = target.find('.customerQuestion').children(':selected').val();

        if(customerName == '' && service_id == 'voiceService'){
            alert('請輸入您的姓名');
        } else {
            //alert(customerName+', '+customerGender+', '+customerQuestion);
            var logType = 0;
            switch(service_id){
                case 'voiceService':
                    logType = 1;
                     window.open('https://cti.skl.com.tw/mmccmedia//res/flashAudio.jsp?customerName='+customerName
                            +'&customerGender='+customerGender+'&customerQuestion='+customerQuestion,
                            "_blank",
                            "width=500,height=600");
                    break;
                case 'textService':
                    logType = 0;
                     window.open('https://sklrobot.skl.com.tw/index.php?ch=web&eservice=sklweb',
                            "_blank");
                    break;
            };

            _onlineCustomerServiceLog({
                target: $(this),
                logType: logType
            });
        }
    });
} // end customerService function

function _onlineCustomerServiceLog(conf){
    var target = conf.target;
    var logType = conf.logType;

    var form = target.parents('.online-service-container').first().find('.online-service-form');
    var logType_ele = form.find('[name="logType"]');
    if( logType_ele.length > 0 ){
        logType_ele.remove();
    }
    form.append('<input type="hidden" name="logType" value="'+logType+'">');
    
    GardenUtils.ajax.uploadFile(form, 
        ajaxPrefix + 'jsp/onlineCustomerService.jsp?action=log&v=' + new Date().getTime(), 
        function(response){
            console.debug(response);
    });
} // end _onlineCustomerServiceLog function

function _getCustomerQuestionData(config){
    $.ajax({
        async: false, 
        url: ajaxPrefix + 'mock/customerQuestion.json?v=' + new Date().getTime(),
        dataType: 'json',
        success:function(json) {
            if( typeof json == 'string' ) json = $.parseJSON(json);
            config['datas'] = json;
            config.callback( config );
        }
    });
} // end _getCustomerQuestionData function

function _gaScrollTo(){
    $('a[ga-scrollto]').off('click').on('click', function(ev){
        var href = $(this).attr('href');
        if( href.indexOf('target-') != -1 ){
            ev.preventDefault();

            var target = $('[ga-scrollto-target="'+href+'"]').first();
            GardenUtils.plugin.screenMoveToEle({
                moveToObj: target,
                minHeight: target.height()
            });
        }
    }); // end click: anchor
} // end _gaScrollTo function

function removeEmptyTab(){
    var count = 0;
    //console('There are'+$('a[ga-tab-href]').length+'mobile tab');
    $('a[ga-tab-href]').each(function(index,value){ 
        var tempId = $(value).attr('ga-tab-href').split('#')[1];
        //console.log(tempId);
        if($('#'+tempId).length==0){
            //console.log('tab content not found');
            count++;
            $(value).remove();
        }
        else if($('#'+tempId).length==1){
            //console.log('tab content found');
        }
        else{}
    });
    //console.log(count+' empty mobile tab removed');

    $('a.ga-tab-title-mobile:not([ga-tab-href])').each(function(){
        if( $(this).attr('href') == '' || $(this).attr('href') == '#' ) $(this).remove();
    });
}

function bindTabMobileActive(){
    $('a[ga-tab="collapse"]').each(function(){
        if( $(this).parents('li').first().hasClass('active') ){
            $('a[ga-tab-href="'+$(this).attr('href')+'"]').addClass('active');
        }
    });
} // end bindTabMobileActive function

function _displayOnlineWaiting(){
    $.ajax({
        url : ajaxPrefix + 'jsp/onlineWaiting.jsp',
        datatype:'json',
        success:function(json){
            json = $.parseJSON(json);
            var onlineWaitingNumber = json.onlineWaitingNumber;
            GardenUtils.display.popup({
                title: '客服專線線上等候人數',            
                content : '<h2>等候人數：'+onlineWaitingNumber+' 人</h2>',
                closeCallBackFn : function(){},
                showCallBackFn : function(){},
                isShowSubmit : false,
                isShowClose : true,
            });

        }
    });
   
}