/**
 * Created with IntelliJ IDEA.
 * User: Titan
 * Date: 2016/3/7
 * Time: 下午 2:28
 * To change this template use File | Settings | File Templates.
 */

var GardenUtils = {
    plugin: {
        showGoogleMap: function(obj) {
            // var obj = {
            //     keyId: '',
            //     divId : 'googlemap',
            //     zoom : 15,
            //     address : '',
            //     location: [{lat: xxx, lng: ooo}],
            //     dialog : '',
            //     icon : 'img/marker_bank.png',
            //     scrollwheel : false,
            //     showDialog : true,
            //     streetPosition: RIGHT_BOTTOM,
            //     zoomPosition: RIGHT_BOTTOM,
            //     mapColorStyle: '', // default, lightGray
            //     callback: function(){}
            // };

            console.debug('before', obj);

            var keyId = obj.hasOwnProperty('keyId')? obj.keyId:'';

            //sklife
            keyId = 'AIzaSyAj0HOhx4p5_GNB1FlQLB6zS5pX1aVsxLg';

            if( keyId == '' ){
                alert('請輸入 Google Map API 金鑰！');
                return false;
            }

            obj = $.extend({
                scrollwheel: false,
                zoomPosition: 'RIGHT_BOTTOM',
                streetPosition: 'RIGHT_BOTTOM'
            }, obj);

            console.debug('after', obj);
            var zoom = obj.zoom;
            if (zoom == undefined) zoom = 15;

            var icon = obj.icon;
            if (icon == undefined) icon = '';

            var googleAddr = [];
            var googleAddrDialog = [];

            if ($.isArray(obj.address)) {
                googleAddr = obj.address;
            } else {
                googleAddr.push(obj.address);
            }

            if (obj.dialog != undefined) {
                if ($.isArray(obj.dialog)) {
                    googleAddrDialog = obj.dialog;
                } else {
                    googleAddrDialog.push(obj.dialog);
                }
            } else {
                googleAddrDialog.push('');
            }

            var googleLocation = [];
            if( obj.hasOwnProperty('location') ){
                if ($.isArray(obj.location)) {
                    googleLocation = obj.location;
                } else {
                    googleLocation.push(obj.location);
                }
            }

            if (obj.hasOwnProperty('mapColorStyle')) {
                var mapColorStyles = 'default';
                switch (obj.mapColorStyle) {
                    case 'lightGray':
                        mapColorStyles = [{ "featureType": "administrative", "elementType": "all", "stylers": [{ "saturation": "-100" }] }, { "featureType": "administrative.province", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 65 }, { "visibility": "on" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": "50" }, { "visibility": "simplified" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": "-100" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "all", "stylers": [{ "lightness": "30" }] }, { "featureType": "road.local", "elementType": "all", "stylers": [{ "lightness": "40" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "hue": "#ffff00" }, { "lightness": -25 }, { "saturation": -97 }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "lightness": -25 }, { "saturation": -100 }] }];
                        break;
                    default:
                        mapColorStyles = 'default';
                }
            }

            var isLoadGoogle = false;
            try {
                var geocoder = new google.maps.Geocoder();
                isLoadGoogle = true;
            } catch (e) {;
            }

            if (isLoadGoogle) {
                drawAddress({
                    googleAddr: googleAddr,
                    googleLocation: googleLocation
                });
            } else {
                try {
                    console.debug('try');
                    $.getScript('//maps.googleapis.com/maps/api/js?key='+keyId).done(function() {
                        drawAddress({
                            googleAddr: googleAddr,
                            googleLocation: googleLocation
                        });
                    });
                } catch (err) {
                    console.debug(err.message);
                }
            }

            function drawAddress(addressConf) {
                var googleAddr = addressConf.hasOwnProperty('googleAddr')? addressConf.googleAddr:[];
                var googleLocation = addressConf.hasOwnProperty('googleLocation')? addressConf.googleLocation:[];

                var geocoder = new google.maps.Geocoder();

                obj['zoomPosition'] = google_postion(obj.zoomPosition);
                obj['streetPosition'] = google_postion(obj.streetPosition);

                function google_postion(posStr) {
                    switch (posStr) {
                        case 'BOTTOM_CENTER':
                            return google.maps.ControlPosition.BOTTOM_CENTER;
                            break;
                        case 'BOTTOM_LEFT':
                            return google.maps.ControlPosition.BOTTOM_LEFT;
                            break;
                        case 'BOTTOM_RIGHT':
                            return google.maps.ControlPosition.BOTTOM_RIGHT;
                            break;
                        case 'LEFT_BOTTOM':
                            return google.maps.ControlPosition.LEFT_BOTTOM;
                            break;
                        case 'LEFT_CENTER':
                            return google.maps.ControlPosition.LEFT_CENTER;
                            break;
                        case 'LEFT_TOP':
                            return google.maps.ControlPosition.LEFT_TOP;
                            break;
                        case 'RIGHT_BOTTOM':
                            return google.maps.ControlPosition.RIGHT_BOTTOM;
                            break;
                        case 'RIGHT_CENTER':
                            return google.maps.ControlPosition.RIGHT_CENTER;
                            break;
                        case 'RIGHT_TOP':
                            return google.maps.ControlPosition.RIGHT_TOP;
                            break;
                        case 'TOP_CENTER':
                            return google.maps.ControlPosition.TOP_CENTER;
                            break;
                        case 'TOP_LEFT':
                            return google.maps.ControlPosition.TOP_LEFT;
                            break;
                        case 'TOP_RIGHT':
                            return google.maps.ControlPosition.TOP_RIGHT;
                            break;
                    }
                } // end google_postion function

                var mapOptions = {
                    zoom: zoom,
                    scrollwheel: obj.scrollwheel,
                    // mapTypeId: google.maps.MapTypeId.ROADMAP
                    zoomControlOptions: {
                        position: obj.zoomPosition
                    },
                    streetViewControlOptions: {
                        position: obj.streetPosition //google.maps.ControlPosition.LEFT_BOTTOM
                    }
                };

                console.debug(mapOptions);
                console.debug('map div length = ' + $('#'+obj.divId).length);

                //$('#mapDiv').css("height","500px");
                var map = new google.maps.Map(document.getElementById(obj.divId), mapOptions);

                if (mapColorStyles != 'default') {
                    map.setOptions({ styles: mapColorStyles });
                }

                function createMarker(markerConf){
                    var markerObj = markerConf.hasOwnProperty('markerObj')? markerConf.markerObj:{};
                    var i = markerConf.index;

                    var marker = new google.maps.Marker( markerObj );

                    //當有Dialog時才綁事件

                    if (googleAddrDialog.length != 0 && googleAddrDialog[0] != '') {

                        var infowindow = new google.maps.InfoWindow({
                            content: googleAddrDialog[i],
                            maxWidth: 350
                            /*,
                                                                     pixelOffset: new google.maps.Size(0, 170)*/
                        });

                        google.maps.event.addListener(marker, 'click', function() {
                            infowindow.open(map, marker);
                        });

                        if (obj.showDialog) {
                            google.maps.event.trigger(marker, 'click');
                        }

                        google.maps.event.addListener(infowindow, 'domready', function() {

                            // Reference to the DIV that wraps the bottom of infowindow
                            var iwOuter = $('.gm-style-iw');

                            // content overflow hidden
                            iwOuter.each(function(){
                                $(this).children().first().children().css('overflow', 'hidden');
                            });

                            /* Since this div is in a position prior to .gm-div style-iw.
                             * We use jQuery and create a iwBackground variable,
                             * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
                             */
                            var iwBackground = iwOuter.prev();

                            // Removes background shadow DIV
                            // iwBackground.children(':nth-child(2)').css({
                            //     'display': 'none'
                            // });
                            iwBackground.children(':nth-child(2)').addClass('ga-iw-bg-shadow');

                            // Removes white background DIV
                            // iwBackground.children(':nth-child(4)').css({
                            //     'display': 'none'
                            // });
                            iwBackground.children(':nth-child(4)').addClass('ga-iw-bg');

                            // Reference to the div that groups the close button elements.
                            var iwCloseBtn = iwOuter.next().addClass('ga-iw-close');

                        }); // end domready: infowindow
                    }

                    if (obj.hasOwnProperty('callback')) {
                        setTimeout(function(){
                            obj.callback();
                        }, 500);
                    }
                } // end createMarker function

                function addMarker(markerConf){
                    var pos = markerConf.pos;
                    var i = markerConf.index;

                    var markerObj = {
                        map: map,
                        position: pos
                    };

                    map.setCenter(pos);

                    if( icon != '' ){
                        var tmpImg = $('<img src="' + icon + '"></img>');
                        tmpImg.appendTo($('body'));

                        tmpImg.on('load', function() {
                            var imgWidth = $(this).width();
                            var imgHeight = $(this).height();

                            tmpImg.remove();

                            markerObj['icon'] = {
                                size: new google.maps.Size(imgWidth, imgHeight),
                                url: icon
                            };

                            createMarker({
                                markerObj: markerObj,
                                index: i
                            });
                        });
                    } else {
                        createMarker({
                            markerObj: markerObj,
                            index: i
                        });
                    }
                } // end addMarker function

                function _okHandler(results, i, address) {
                    addMarker({
                        pos: results[0].geometry.location,
                        index: i
                    });
                }

                function addMarker_addr(i, address) {
                    console.debug('address = ' + address);
                    geocoder.geocode({
                        'address': address
                    }, function(results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            _okHandler(results, i, address);

                        } //if
                        else {
                            console.debug('GoogleMap geocode status = ' + status);

                            if (status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
                                setTimeout(function() { addMarker_addr(i, address); }, (1000 * 1));
                            }
                        } //else
                    });
                } // end addMarker_addr function

                if( googleLocation.length > 0 ){
                    $.each(googleLocation, function(i, pos) {
                        addMarker({
                            pos: pos,
                            index: i
                        });
                    });
                } else {
                    $.each(googleAddr, function(i, address) {
                        addMarker_addr(i, address);
                    });
                }

                

                //試看看能不能處理掉IE第一次灰色問題
                $(window).resize();
            } // end drawAddress function
        }, // end showGoogleMap function

        screenMoveToDiv: function(obj) {

            //            var obj = {
            //                moveToDivObj : 'divId',
            //                minHeight : 30
            //            };

            obj = $.extend({
                minHeight: 0
            }, obj);

            /*console.debug(obj);
            console.debug('top = ' + $('#' + obj.moveToDivObj).offset().top);
            $('html, body').animate({
                'scrollTop': ($('#' + obj.moveToDivObj).offset().top - obj.minHeight)
            }, 1000);*/

            obj['moveToObj'] = $('#' + obj.moveToDivObj);

            screenMoveToEle(obj);
        },

        screenMoveToEle: function(obj) {

            //            var obj = {
            //                moveToObj : jquery obj,
            //                minHeight : 30
            //            };

            obj = $.extend({
                minHeight: 0
            }, obj);

            console.debug(obj);
            console.debug('top = ' + $(obj.moveToObj).offset().top);
            $('html, body').animate({
                'scrollTop': ($(obj.moveToObj).offset().top - obj.minHeight)
            }, 1000);
        },

        //開始倒數固定時間，若時間內無任何動作，在倒數幾秒內可以呼叫callback function，當畫面點擊任何動作則會倒數計時
        useCountDown: function(obj) {

            //            var obj = {
            //                totalTime : 600, //總時間(秒)
            //                countDownTime : 60, //倒數多少時間後呼叫countDownFn(秒)
            //                countDownFn : function(){}, //倒數多少時間後呼叫的function
            //                countDownIntervalFn : function(){}, //開始倒數每一秒會呼叫callback function
            //                overTimeFn : function(){} //時間到了的function
            //            };

            var totalTime = obj.totalTime;
            var countDownTime = obj.countDownTime;
            var isFinish = false;

            //每秒減1
            setInterval(function() {
                totalTime--;

                //console.debug('totalTime = ' + totalTime);

                //如果時間到了最後倒數，則呼叫callback function
                if (totalTime == countDownTime) {
                    if (obj.countDownFn != undefined) {
                        obj.countDownFn.apply(window, [totalTime]);
                    }
                }

                //如果已經在最後時限，每一秒可以呼叫callback function
                if (totalTime != 0 && countDownTime > totalTime) {
                    if (obj.countDownIntervalFn != undefined) {
                        obj.countDownIntervalFn.apply(window, [totalTime]);
                    }
                }

                //如果時間已經倒數完了，則呼叫callback function
                if (totalTime == 0) {
                    if (obj.overTimeFn != undefined) {
                        obj.overTimeFn.apply(window, []);
                    }

                    isFinish = true;
                }
            }, 1000);

            //綁在body上，點擊畫面任何動作都會重新計算
            $('body').on('click', function() {
                console.debug('on body click');

                if (!isFinish) {
                    totalTime = obj.totalTime;
                }
            });

        },
        print : function(obj) {
        
            var html = obj.html;

            $.ajax({
				type : 'post',
				url : ajaxPrefix + 'jsp/print.jsp?action=save',
				data : {
					html : html
				},
				success : function(){
					window.open(ajaxPrefix+'jsp/print.jsp?action=print');
				}
			});
            
        },

        slider: function(conf) {

            ///////////////////////////////////
            // var conf = {
            //     target: ,                    // jQuery Obj
            //     options: {
            //         isFull: true,            // Boolean, 
            //         loop: true,              // Boolean, Infinity loop.
            //         autoplay: true,          // Boolean, Autoplay.
            //         margin: 10,              // Number, margin-right(px) on item.
            //         items: 1,                // Number, The number of items you want to see on the screen.
            //         itemsClass: '',          // String, owl-item class.
            //         carouselClass: '',       // String, owl-carousel class.
            //         page: {
            //             isDisable: false,    // Boolean.
            //             type: 'dot',         // String, Pagination type. 'text' or 'dot'.
            //             textMaxLength: 9,    // Number, the max length of pagination's text.
            //             pageClass: '',       // String, Pagination class.
            //             containerClass: '',  // String, Pagination container class.
            //             pageSpeed: 2000      // Number, Pagination speed.
            //         },
            //         navigation :{
            //             isDisable: true,     // Boolean.
            //             prevClass: '',       // String, prev button class.
            //             nextClass: ''        // String, next button class.
            //         },
            //         event: {
            //             touchDrag  : true,   // Boolean, Touch drag enabled.
            //             mouseDrag  : true    // Boolean, Mouse drag enabled.
            //         }   
            //     },
            //     datas: [{                    // Array.
            //         title: ''                // String, If page.type is 'text'.
            //         content: ''              // String, HTML allowed.
            //     }]
            // };
            ///////////////////////////////////

            var target = conf.target,
                options = $.extend({
                    isFull: true,
                    loop: true,
                    autoplay: true,
                    margin: 10,
                    items: 1,
                    itemsClass: '',
                    carouselClass: '',
                    page: {},
                    navigation: {},
                    event: {}
                }, conf.options),
                datas = [];//conf.datas;

                options.page = $.extend({
                    isDisable: false,
                    type: 'dot',
                    textMaxLength: 9,
                    pageClass: '',
                    containerClass: '',
                    pageSpeed: 2000
                }, options.page);

                options.navigation = $.extend({
                    isDisable: true,
                    prevClass: '',
                    nextClass: ''
                }, options.navigation);

                options.event = $.extend({
                    touchDrag  : true,
                    mouseDrag  : true
                }, options.event);

            //console.log('options', options);

            // create datas
            target.find('.ga-silder').each(function(i){

                $(this).find('.ga-item').each(function(){
                    var pageTitle = $(this).attr('ga-page-title');
                    if (typeof pageTitle === typeof undefined || pageTitle === false) {
                        pageTitle = '';
                    }

                    var dataObj = {};
                    dataObj['title'] = pageTitle;
                    dataObj['content'] = $(this).html();
                    datas.push( dataObj );
                });
            });
            conf['datas'] = datas;

            // create slider
            var isFull = (options.isFull ? options.isFull : (datas.length == options.items ? true:false));
            if(datas.length == options.items) options.autoplay = false;
            target = $('<div class="ga-slider-container" isFull="'+isFull+'"></div>').appendTo(target);
            var carousel = $('<div class="owl-carousel '+options.carouselClass+'"></div>').appendTo( $(target) );
            $.each(datas, function(i, data){
                carousel.append('<div class="item '+options.itemsClass+'">'+data.content+'</div>');
            });

            // bind slider action
            options['autoplaySpeed'] = options.pageSpeed;
            if(options.items > 1){
                options = $.extend({responsive: {}}, options);
                var responsive_tmp = {
                    0: {
                        items: 1
                    },
                    320: {
                        items: 1
                    },
                    768: {
                        items: (options.items>2? 2 : 1)
                    },
                    1024: {
                        items: (options.items>2? 2 : 1)
                    },
                    1025: {
                        items: options.items
                    }};
                $.extend(true, responsive_tmp, options.responsive);
                options.responsive = responsive_tmp;
            }

            if ($(window).width() < 1024) {
                options['dots'] = false;
            }

            var $owl = $(target).children('.owl-carousel').owlCarousel(options);

            function _createPage(options){

                if(options.items > 1){
                    options = $.extend({responsive: {}}, options);
                    var responsive_tmp = {
                        0: {
                            items: 1
                        },
                        320: {
                            items: 1
                        },
                        768: {
                            items: (options.items>2? 2 : 1)
                        },
                        1024: {
                            items: (options.items>2? 2 : 1)
                        },
                        1025: {
                            items: options.items
                        }};
                    $.extend(true, responsive_tmp, options.responsive);
                    options.responsive = responsive_tmp;
                }

                options.touchDrag = options.event.touchDrag;
                options.mouseDrag = options.event.mouseDrag;

                // page
                if( datas.length <= options.items ){
                    $(target).find('.owl-dots').addClass('disabled');
                    options.touchDrag = false;
                    options.mouseDrag = false;
                    options.autoplay = false;
                } else {

                    if( !options.navigation.isDisable ){

                        $(target).find('.owl-nav').addClass('disabled');
                        $(target).find('.owl-dots').addClass('disabled');

                        if( target.find('.ga-slider-prev').length > 0 ){
                            target.find('.ga-slider-prev').remove();
                            target.find('.ga-slider-next').remove();
                        }

                        $('<div class="ga-slider-prev '+options.navigation.prevClass+'"></div>').appendTo( target );
                        $('<div class="ga-slider-next '+options.navigation.nextClass+'"></div>').appendTo( target );

                        target.find('.ga-slider-next').click(function() {
                            carousel.trigger('next.owl.carousel');
                        });

                        target.find('.ga-slider-prev').click(function() {
                            carousel.trigger('prev.owl.carousel');
                        });

                    } else {
                        $(target).find('.owl-dots').addClass( options.page.containerClass );
                    
                        $(target).find('.owl-dot').each(function(i){
                            $(this).attr('type', options.page.type);

                            if(options.page.type == 'text'){
                                var tmp_title = datas[i].title;

                                tmp_title = (tmp_title.length<=options.page.textMaxLength?tmp_title:tmp_title.substr(0, options.page.textMaxLength)+'...');
                                $(this).children('span').text(tmp_title);
                            }

                            if(options.page.hasOwnProperty('pageClass')){
                                $(this).addClass( options.page.pageClass );
                            }
                        });
                    }
                } // end else: datas.length > 1

                if( conf.hasOwnProperty('callback') ){
                    $owl.on('initialized.owl.carousel', function(){
                        conf.callback(target.parent());
                    });
                }

                $owl.on('changed.owl.carousel resized.owl.carousel', function(){

                    if( !options.navigation.isDisable ){
                        $(target).find('.owl-nav').addClass('disabled');
                        $(target).find('.owl-dots').addClass('disabled');
                    } else if ($(window).width() < 1024) {
                        $(".owl-controls").hide();
                        $(target).find('.owl-nav').addClass('disabled');
                        $(target).find('.owl-dots').addClass('disabled');
                    }
                });
            }; // end  _createPage function

            
            _createPage(options);
            
            setTimeout(function(){
                //console.debug('options', options);
                $owl.trigger('destroy.owl.carousel');
                $owl.html($owl.find('.owl-stage-outer').html()).removeClass('owl-loaded');
                if( datas.length <= options.items ){
                    options.touchDrag = false;
                    options.mouseDrag = false;
                    options.autoplay = false;
                }
                $owl.owlCarousel(options);
                _createPage(options);
            },500);
            
        }, //end slider function
        listTab: function(conf) {

            ///////////////////////////////////
            // var conf = {
            //     target: ,                // jQuery Obj
            //     recsOfPage: 10,          // Number, the number of records of a page.
            //     maxLevel: 1              // Number.
            //     isPagination: true,      // Boolean, has pagination or not.
            //     knowMoreUrl: '#',        // String, the url of know more link.
            //     type: 'news',            // String, news or download.
            //     downloadTitleBefore: '', // String, the class can change the color of tab:before
            //                              // border-color: transparent transparent #fff transparent;
            //                              // _border-color: #000000 #000000 #fff #000000;
            //     activeId: ''             // href of <a>, string behind of #
            // };
            ///////////////////////////////////

            conf = $.extend({
                recsOfPage: 10,
                maxLevel: 1,
                isPagination: true,
                knowMoreUrl: '#',
                type: 'news',
                downloadTitleBefore: '',
				displayStyle : 'tab'
            }, conf);
            var target = conf.target,
                rootId = (conf.hasOwnProperty('rootId')? conf.rootId:''),
                recsOfPage = conf.recsOfPage,
                isPagination = conf.isPagination,
                knowMoreUrl = conf.knowMoreUrl,
                maxLevel = conf.maxLevel,
                listType = conf.type,
				displayStyle = conf.displayStyle;

            var _getNewsTabTitleData = function(config){

                $.ajax({ //去撈xml動態長畫面
                    //url: ajaxPrefix + 'mock/TypeTree.xml',
                    async: false, 
                    url: ajaxPrefix + 'jsp/NewsType.jsp?typeId='+config.rootId+'&v=' + new Date().getTime(),
                    datatype: 'xml',
                    success: function (xml) {
                        console.log('_getNewsTabTitleData', xml);
                        config.callBack(xml);
                    }
                });

                 // var datas = $.parseXML('<garden><Types><Type id="3" name="ROOT"><Type id="4" name="本行公告"></Type><Type id="5" name="優惠訊息"><Type id="9" name="信用卡"></Type><Type id="10" name="貸款"></Type></Type><Type id="6" name="新聞稿"></Type><Type id="7" name="系統公告"><Type id="11" name="信用卡"></Type><Type id="12" name="貸款"></Type><Type id="13" name="測試1"></Type><Type id="14" name="測試2"></Type><Type id="15" name="測試3"></Type><Type id="16" name="測試4"></Type><Type id="17" name="測試5"></Type></Type></Type></Types></garden>');
                 // config.callBack(datas);

                
            }; // end _getNewsTabTitleData function

            var _getDownloadTabTitleData = function(config){
                $.ajax({ //去撈xml動態長畫面
                    async: false, 
                    url: ajaxPrefix + 'jsp/DownloadType.jsp?typeId='+config.rootId+'&v=' + new Date().getTime(),
                    datatype: 'xml',
                    success: function (xml) {
                        console.log('_getDownloadTabTitleData', xml);
                        config.callBack(xml);
                    }
                });

                // var datas = $.parseXML('<garden><types><type id="13" name="ROOT" imgsrc="/skbank_resource/leap_do/Download_type_picture/1471748206649_0.png"><type id="33" name="開戶業務" imgsrc="img/uv-11.png"/><type id="22" name="網路銀行業務" imgsrc="img/uv-12.png"/></type></types></garden>');
                // config.callBack(datas);
            }; // end _getDownloadTabTitleData function

            var _getDownloadTabContentData = function(config){

                config = $.extend({page:1}, config);

                $.ajax({
                    url: ajaxPrefix + 'jsp/downloadInfo.jsp?typeId='+config.typeId+'&pageSize='+config.recsOfPage+'&page='+config.page+'&v=' + new Date().getTime(),
                    datatype: 'json',
                    success: function (json) {
                        console.log('_getDownloadTabContentData', json);
                        config['datas'] = json;
                        config.callBack(config);
                    }
                });

                 // var datas = $.parseJSON('{"pageInfo":{"totalPage":1,"currentPage":1,"totalRec":1},"download":[{"title":"1.新帳戶申請書 – 有限公司開戶申請書","url":"/skbank_resource/leap_do/gallery/1472107990151_c5f45.pdf","type":"pdf"},{"title":"2.新帳戶申請書 – 有限公司開戶申請書","url":"/skbank_resource/leap_do/gallery/1472107990151_c5f45.pdf","type":"pdf"},{"title":"3.新帳戶申請書 – 有限公司開戶申請書","url":"/skbank_resource/leap_do/gallery/1472107990151_c5f45.pdf","type":"pdf"}]}');
                 // config['datas'] = datas;
                 // config.callBack(config);
            }; //end _getDownloadTabContentData function

            var _createDownloadContentData = function(config){
                var target = config.target.empty(),
                    recsOfPage = config.recsOfPage,
                    datas = config.datas;
                //console.log('_createDownloadContentData', config.datas);

                if( target.find('ul.list-ul').length == 0 ){
                    var content_ul = $('<ul class="list-ul"></ul>').appendTo( target );
                    config.target = content_ul;
                    _createDownloadContentList(config);
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
                            config.callBack = function(config){
                                _createDownloadContentList(config);
                            };

                            _getDownloadTabContentData(config);
                        }
                    });
                }
            }; // end _createDownloadContentData function

            var _createDownloadContentList = function(config){
                var target = config.target.empty(),
                    datas = config.datas.hasOwnProperty('download')?config.datas.download:[];
                //console.log('_createDownloadContentList', datas);

                $.each(datas, function(i, data){
                    $('<li><a href="'+data.url+'" target="_blank" fileType="'+data.type+'">'+data.title+'</a></li>').appendTo( target );
                });
            }; // end _createDownloadContentList function

            if( rootId == '' ){
                console.debug('listTab: rootId is undefined!');
            } else if( listType == 'news' ) {

			/**2016-09-30 added by titan 加上displayStyle來決定如何顯示**/
			/**
                //create list tab
                var titleEle = $('<ul class="list-tab-title" listType="'+listType+'" maxLevel="'+conf.maxLevel+'"></ul>').appendTo( target ),
                    contentEle = $('<div class="list-tab-content" listType="'+listType+'" ></div>').appendTo( target );
**/
                // create tab title
                _getNewsTabTitleData({
                    rootId: rootId,
                    callBack: function(datas) {
                        //console.log(datas, maxLevel);
                        // create level 1
						
						/**2016-09-30 added by titan 先建好兩種不同的顯示方式(tab/select)**/
						//create list tab
						var titleEle,contentEle;
						
						//create select
						var selectEle,selectContentEle;
						
						if(displayStyle == 'tab') {
							titleEle = $('<ul class="list-tab-title" listType="'+listType+'" maxLevel="'+conf.maxLevel+'"></ul>').appendTo( target ),
							contentEle = $('<div class="list-tab-content" listType="'+listType+'" ></div>').appendTo( target );
						
						}
						else if(displayStyle == 'select'){
							 selectEle = $('<select class="tabSelect"></select>').appendTo(target);
							 selectContentEle = $('<div class="select-tab-content"></div>').appendTo( target );						
						}
						
                        if($(datas).find('Type').length != 0){
                            $(datas).find('Type[name="ROOT"] > Type').each(function(){
                                //console.log($(this).attr('id'), $(this).attr('name'));
								if(displayStyle == 'tab') {
	                                $('<li><a href="#'+$(this).attr('id')+'" typeId="'+$(this).attr('id')+'" ga-tab="collapse">'+$(this).attr('name')+'</a></li>').appendTo( titleEle );
	                                $('<div id="'+$(this).attr('id')+'" class="list-tab-pane"></div>').appendTo( contentEle );
								}
								else if(displayStyle == 'select'){
									 /**2016-09-30 added by add option**/
									$('<option value="'+$(this).attr('id')+'">'+$(this).attr('name')+'</option>').prependTo(selectEle);
								}
								
                            });
                        } else if($(datas).find('type').length != 0){
                            $(datas).find('type[name="ROOT"] > type').each(function(){
                                //console.log($(this).attr('id'), $(this).attr('name'));
                                if(displayStyle == 'tab') {
	                                $('<li><a href="#'+$(this).attr('id')+'" typeId="'+$(this).attr('id')+'" ga-tab="collapse">'+$(this).attr('name')+'</a></li>').appendTo( titleEle );
	                                $('<div id="'+$(this).attr('id')+'" class="list-tab-pane"></div>').appendTo( contentEle );
								}
								else if(displayStyle == 'select'){
									 /**2016-09-30 added by add option**/
									$('<option value="'+$(this).attr('id')+'">'+$(this).attr('name')+'</option>').prependTo(selectEle);
								}
                            });
                        } 
                        

                        // bind level 1 action
                        target.find('.list-tab-title[listType="news"] li').off('click').on('click', function(ev){

                            ev.preventDefault();

                            var typeId = $(this).children().attr('typeId'),
                                content_ele = $('div#'+typeId);//target.find('div#'+typeId);

                            target.find('.list-tab-title[listType="news"] li').removeClass('active');
                            $(this).toggleClass('active');
                            target.find('.list-tab-content[listType="news"] div.list-tab-pane').removeClass('active');
                            content_ele.toggleClass('active');

                            // create only level 1 data
                            if(content_ele.children().length == 0 && maxLevel == 1){
                                // create data
                                GardenUtils.plugin.listNews({
                                    target: content_ele,
                                    typeId: typeId,
                                    recsOfPage: recsOfPage,
                                    isPagination: isPagination,
                                    knowMoreUrl: knowMoreUrl
                                });
                            }

                            // create level 2
                            var filer = content_ele.find('.list-filter');
                            var data_level2 = $(datas).find('Type[id="'+typeId+'"] > Type');
                            if( maxLevel == 2 && data_level2.length > 1 && filer.length == 0 ){
                                var filter_div = $('<div class="list-filter">'
                                                    +'<div class="type">'
                                                        +'<p class="typeTitle">類別(可複選)</p>'
                                                        +'<div class="typeAll"><label for="all" class="">所有類別</label></div>'
                                                    +'</div><ul></ul></div>').appendTo( content_ele ),
                                    content_data = $('<div class="data"></div>').appendTo( content_ele );

                                var li_ele;
                                data_level2.each(function(i){
                                    //console.log($(this).attr('id'), $(this).attr('name'));
                                    /*if(i%2 == 0) li_ele = $('<li class="sub"></li>').appendTo( filter_div.find('ul') );

                                    li_ele.append('<label for="'+$(this).attr('id')+'" class="filterCheckbox">'+$(this).attr('name')+'</label>');
                                    */
                                    filter_div.find('ul').append('<li class="sub skbank-newssfilterlistitem"><label for="'+$(this).attr('id')+'" class="filterCheckbox">'+$(this).attr('name')+'</label></li>');
                                });

                                // bind level 2 action
                                filter_div.find('label').off('click').on('click', function(ev){

                                    ev.preventDefault();

                                    var forVal = $(this).attr('for');
                                    if( forVal == 'all' ){
                                        if( $(this).hasClass('active') ){
                                            filter_div.find('label').removeClass('active');
                                        } else {
                                            filter_div.find('label').addClass('active');
                                        }
                                    } else {
                                        $(this).toggleClass('active');

                                        if( filter_div.find('label.filterCheckbox.active').length == filter_div.find('label.filterCheckbox').length ){
                                            filter_div.find('label[for="all"]').addClass('active');
                                        } else {
                                            filter_div.find('label[for="all"]').removeClass('active');
                                        }
                                    } // end if else: active checkbox

                                    var typeId_level2 = '';
                                    filter_div.find('label.filterCheckbox.active').each(function(j){
                                        if(j>0) typeId_level2 += ',';

                                        typeId_level2 += $(this).attr('for');
                                    });

                                    console.log('typeId_level2', typeId_level2);

                                    // create data
                                    GardenUtils.plugin.listNews({
                                        target: $('#'+typeId+' .data'),
                                        typeId: typeId_level2,
                                        recsOfPage: recsOfPage,
                                        isPagination: isPagination,
                                        knowMoreUrl: knowMoreUrl
                                    });
                                }); // end click: level 2

                                // trigger first
                                filter_div.find('label[for="all"]').trigger('click');
                            } // end if: create level 2
                            else if( content_ele.children().length == 0 && data_level2.length == 1 ){
                                var typeId_level2 = '';
                                data_level2.each(function(i){
                                    typeId_level2 = $(this).attr('id');
                                });
                                GardenUtils.plugin.listNews({
                                    target: content_ele,
                                    typeId: typeId_level2,
                                    recsOfPage: recsOfPage,
                                    isPagination: isPagination,
                                    knowMoreUrl: knowMoreUrl
                                });
                            } // end else if: only a chlid
                            else if( content_ele.children().length == 0 && data_level2.length == 0 ){
                                GardenUtils.plugin.listNews({
                                    target: content_ele,
                                    typeId: typeId,
                                    recsOfPage: recsOfPage,
                                    isPagination: isPagination,
                                    knowMoreUrl: knowMoreUrl
                                });
                            } // end else if: hasn't chlidren
                        }); // end click: level 1

						target.find('.tabSelect').off('change').on('change',function(ev){
							// create data
                                GardenUtils.plugin.listNews({
                                    target: selectContentEle,
                                    typeId: $(this).val(),
                                    recsOfPage: recsOfPage,
                                    isPagination: isPagination,
                                    knowMoreUrl: knowMoreUrl
                                });
						});
						
                        if(conf.hasOwnProperty('activeId')){
                            target.find('.list-tab-title[listType="news"] li a[href="#'+conf.activeId+'"]').parent().trigger('click');
                        } else {
                            // trigger first
                            target.find('.list-tab-title[listType="news"] li').first().trigger('click');
                        }       

						target.find('.tabSelect').trigger('change');
                    }
                }); // end call _getNewsTabTitleData
            } // end else if: news
            else if( listType == 'download' ){
                //create list tab
                var titleEle = $('<ul class="list-tab-title" listType="'+listType+'"></ul>').appendTo( target ),
                    contentEle = $('<div class="list-tab-content" listType="'+listType+'" ></div>').appendTo( target );

                // create tab title
                _getDownloadTabTitleData({
                    rootId: rootId,
                    callBack: function(datas){
                        // create title
                        $(datas).find('type[name="ROOT"] > type').each(function(){
                            //console.log($(this).attr('id'), $(this).attr('name'));
                            $('<li><a href="#'+$(this).attr('id')+'" typeId="'+$(this).attr('id')+'" class="'+conf.downloadTitleBefore+'">'
                                +'<span class="img"><img alt="" src="'+$(this).attr('imgsrc')+'"></span>'
                                +'<p>'+$(this).attr('name')+'</p></a></li>').appendTo( titleEle );
                            $('<div id="'+$(this).attr('id')+'" class="list-tab-pane"></div>').appendTo( contentEle );
                        });

                        // bind title action
                        target.find('.list-tab-title[listType="download"] li').off('click').on('click', function(ev){

                            ev.preventDefault();

                            var typeId = $(this).children().attr('typeId'),
                                content_ele = target.find('div#'+typeId);

                            target.find('.list-tab-title[listType="download"] li').removeClass('active');
                            $(this).toggleClass('active');
                            target.find('.list-tab-content[listType="download"] div.list-tab-pane').removeClass('active');
                            content_ele.toggleClass('active');

                            if( content_ele.children().length == 0 ){
                                // create content
                                _getDownloadTabContentData({
                                    target: content_ele,
                                    typeId: typeId,
                                    recsOfPage: recsOfPage,
                                    isPagination: isPagination,
                                    callBack: function(config){
                                        _createDownloadContentData(config);
                                    }
                                });
                            }

                        }); // end click: title
                    
                        // trigger first
                        target.find('.list-tab-title[listType="download"] li').first().trigger('click');
                    }
                }); // end call _getDownloadTabTitleData
            } // end else if: download

        }, // end listTab function
        listNews: function(conf){

            ///////////////////////////////////
            // var conf = {
            //     target: ,                // Required, jQuery Obj.
            //     typeId: ,                // Required, String.
            //     recsOfPage: 10,          // Optional, Number, the number of records of a page.
            //     isPagination: true,      // Optional, Boolean, has pagination or not.
            //     hasGoToPage: false,      // Optional, Boolean, display go to page or not.
            //     knowMoreUrl: '#'         // Optional, String, the url of know more link.
            // };
            ///////////////////////////////////

            conf = $.extend({
                ajaxUrl: '',
                recsOfPage: 10,
                isPagination: true,
                hasGoToPage: false,
                knowMoreUrl: '#',
                knowMoreTxt: '瞭解更多',
                knowMoreClass: 'knowMore',
				page:1
            }, conf);
			
            var target = conf.target,
                typeId = conf.typeId,
                recsOfPage = conf.recsOfPage,
                isPagination = conf.isPagination,
                hasGoToPage = conf.hasGoToPage,
                knowMoreUrl = conf.knowMoreUrl,
                knowMoreTxt = conf.knowMoreTxt,
                knowMoreClass = conf.knowMoreClass,
				page = conf.page,
                ajaxUrl = (conf.ajaxUrl != ''? conf.ajaxUrl: 'jsp/NewsInfo.jsp');

            var _getNewsTabContentData = function(config){

                config = $.extend({page:1}, config);

                $.ajax({
                    url: ajaxPrefix + config.ajaxUrl+'?typeId='+config.typeId+'&pageSize='+config.recsOfPage+'&page='+config.page+'&v=' + new Date().getTime(),
                    datatype: 'json',
                    success: function (json) {
                        console.log('_getNewsTabContentData', json);
                        config['datas'] = json;
                        config.callBack(config);
                    }
                });

                // var datas = $.parseJSON('{"pageInfo":{"totalPage":"15","currentPage":"1","totalRec":"3"},"news":[{"date":"2016-09-12","typeName":"貸款","title":"全球金融網約定收款人帳戶申請書","url":"aaaaaaaaaaaaaaa"},{"date":"2016-10-12","typeName":"測試","title":"GEB約定書（主用戶）","url":"bbbbbbbbbbbbbbb"},{"date":"2016-11-12","typeName":"信用卡","title":"FEDI服務申請書","url":"cccccccccccccc"},{"date":"2016-09-12","typeName":"貸款","title":"全球金融網約定收款人帳戶申請書","url":"aaaaaaaaaaaaaaa"},{"date":"2016-10-12","typeName":"測試","title":"GEB約定書（主用戶）","url":"bbbbbbbbbbbbbbb"},{"date":"2016-11-12","typeName":"信用卡","title":"FEDI服務申請書","url":"cccccccccccccc"}]}');
                // config['datas'] = datas;
                // config.callBack(config);
                
            }; //end _getNewsTabContentData function

            var _createNewsContentData = function(config){
                var target = config.target.empty(),
                    typeId = config.typeId,
                    recsOfPage = config.recsOfPage,
                    isPagination = config.isPagination,
                    hasGoToPage = config.hasGoToPage,
                    datas = config.datas;
                //console.log('_createNewsContentData', config.datas, target);

                if( target.find('ul.list-ul').length == 0 ){
                    var content_ul = $('<ul class="list-ul"></ul>').appendTo( target );
                    config.target = content_ul;
                    _createNewsContentList(config);
                }

                if( isPagination && target.find('.bottom_pagination').length == 0 ){
                    var paginationEle = $('<div class="bottom_pagination"></div>').appendTo( target );

                    console.log('paginationEle', datas.pageInfo);

                    GardenUtils.display.pagination({
                        pageInfo: datas.pageInfo,
                        hasGoToPage: hasGoToPage,
                        target: target.find('.bottom_pagination').empty(),
                        getPageInfoCallBackFn: function(pageNum){
                            config.page = pageNum;
                            config.target = content_ul;
                            config.callBack = function(config){
                                _createNewsContentList(config);
                            };

                            _getNewsTabContentData(config);
                        }
                    });
                } else if( !config.isPagination && target.find('.knowMore').length == 0 && datas.news.length >= config.recsOfPage ){
                    var paginationEle = $('<div class="'+config.knowMoreClass+'"><a href="'+config.knowMoreUrl+'?activeId='+typeId+'" class="index-new-btn-k">'+config.knowMoreTxt+'</a></div>').appendTo( target );
                }
            }; // end _createNewsContentData function

            var _createNewsContentList = function(config){
                var target = config.target.empty(),
                    datas = config.datas.hasOwnProperty('news')?config.datas.news:[];
                //console.log('_createNewsContentList', datas);

                $.each(datas, function(i, data){
                    var newPage = (data.hasOwnProperty('newPage')? data.newPage: false),
                        link_target = (newPage? '_blank':'_self');

                    $('<li><a href="'+data.url+'" class="list-ele" target="'+link_target+'">'
                        +'<h5>'+data.date+'</h5>'
                        +(data.hasOwnProperty('typeName')&&data.typeName !=''?'<span class="list-type">'+data.typeName+'</span>':'')
                        +'<p>'+data.title+'</p>'
                    +'</a></li>').appendTo( target );
                });

                fixFooter();
            }; // end _createNewsContentList function

            _getNewsTabContentData({
                ajaxUrl: ajaxUrl,
                target: target,
                typeId: typeId,
                recsOfPage: recsOfPage,
                isPagination: isPagination,
                hasGoToPage: hasGoToPage,
                knowMoreUrl: knowMoreUrl,
                knowMoreTxt: knowMoreTxt,
                knowMoreClass: knowMoreClass,
				page : page,
                callBack: function(config){
                    _createNewsContentData(config);
                }
            });
        },
        FBPost: function(conf){
            ///////////////////////////////////
            // var conf = {
            //     appId: '',      // String，必填
            //     title: '',      // String，顯示主標
            //     url: '',        // String，連結
            //     picture: '',    // String，圖片（絕對路徑）
            //     description: '' // String，詳細說明
            // };
            ///////////////////////////////////

            conf = $.extend({
                title:'',
                url: '',
                picture: '',
                description: ''
            }, conf);

            var appId = conf.appId,
                title = conf.title,
                url = conf.url,
                picture = conf.picture,
                description = conf.description;

            if($('#fb-root').length == 0) {

                $('body').append('<div id="fb-root"></div>');

                $.getScript('//connect.facebook.net/en_US/all.js' , function(){
                    try {
                        FB.init({
                            appId: appId, //'293189257699769', // 參數
                            status: true,
                            cookie: true
                        });

                        FB.ui(
                            {
                                method: 'feed',
                                name: title, // 參數，顯示主標
                                link: url, // 參數，連結
                                picture: picture, // 參數，圖片（絕對路徑）
                                description: description // 參數，詳細說明
                            }, function(response) {
                                console.debug(response);
                        });
                    } catch(e) {
                        console.warn(e);
                    }
                });
            } // end if: check fb-root exist
			else {
				try {
                        FB.init({
                            appId: appId, //'293189257699769', // 參數
                            status: true,
                            cookie: true
                        });

                        FB.ui(
                            {
                                method: 'feed',
                                name: title, // 參數，顯示主標
                                link: url, // 參數，連結
                                picture: picture, // 參數，圖片（絕對路徑）
                                description: description // 參數，詳細說明
                            }, function(response) {
                                console.debug(response);
                        });
                    } catch(e) {
                        console.warn(e);
                    }
			}
        }, // end FBPost function
        fontSize : function(conf) {
            ///////////////////////////////////
            // var conf = {
            //     target: '',      // Dom Object，目標空間(必填)
            //     size : ''
			//     language:'TW | EN'
            // };
            ///////////////////////////////////
            
			conf = $.extend({
                language: 'TW'
            }, conf);
			
            var target = conf.target;
			var language = conf.language;
            
			var sWord = '小';
			var mWord = '中';
			var lWord = '大';
			
			if(language == 'EN') {
				sWord = 'S';
				mWord = 'M';
				lWord = 'L';
			}
			
            if(target != undefined && target.find('.textlv-area').length == 0) {
                var textlvArea = $('<div class="textlv-area"><ul><li><button type="button" class="btn btn-default btn-font-small">'+sWord+'</button></li><li><button type="button" class="btn btn-default btn-font-mid">'+mWord+'</button></li><li><button type="button" class="btn btn-default btn-font-big">'+lWord+'</button></li></ul></div>');
                
                textlvArea.find('button.btn-font-big').click(function(ev){
                    ev.preventDefault();
                    _fontSize(target,'22','30');
                });
                
                textlvArea.find('button.btn-font-mid').click(function(ev){
                    ev.preventDefault();
                    _fontSize(target,'18','30');
                });
                
                textlvArea.find('button.btn-font-small').click(function(ev){
                    ev.preventDefault();
                    _fontSize(target,'16','30');
                });
                
                textlvArea.prependTo(target);
            }
            
            function _fontSize(space,size,lineHeight) {

                /*
                    space.find('div.editor_td,div.editor_pure_text,.editor_section.haha_highlight,th,td,span,p,h4,h5,h6,span,ul li,ol li,ul li div,ul ul li div,ol li div,ol ol li div,a').animate({
                        'font-size' : size + 'px',
                        'line-height' : lineHeight + 'px'
                    });
                */

                var fontSize_ele = space.find('div.editor_td,div.editor_pure_text,.editor_section.haha_highlight,th,td,span,p,h4,h5,h6,span,ul li,ol li,ul li div,ul ul li div,ol li div,ol ol li div,a');
                fontSize_ele.each(function(){
                    var styleText = $(this).attr('style');
                    var cssText = (typeof styleText !== typeof undefined && styleText !== false)?styleText:'';

                    var attr = $(this).attr('name');

                    $(this).css('cssText', cssText+'font-size: '+size + 'px!important;'
                        +'line-height:'+ lineHeight + 'px;'
                        +'background-color: inherit;'
                        +'text-align: inherit;');
                });
            
            }
        }
    },
    browser: {

        getLanguage: function() {
            var lang = window.navigator.userLanguage || window.navigator.language;
            var lang = lang.toLowerCase();

            return lang;
        },
        setCookie: function(obj) {
            /**
             var obj = {
                name : 'cookieName',
                value : 'cookieValue',
                expiresDay : 1,
                isRemeberMe : true
            };
             **/


            var exdays = obj.expiresDay;
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = 'expires=' + d.toUTCString();

            if (obj.isRemeberMe) {
                document.cookie = obj.name + '=' + obj.value + '; ' + expires;
            } else {
                document.cookie = obj.name + '=' + obj.value + ';';
            }
        },
        getCookie: function(obj) {
            /**
             var obj = {
                name : 'cookieName'
            };
             **/

            var name = obj.name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];

                while (c.charAt(0) == ' ') c = c.substring(1);
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return '';
        },
        delCookie: function(obj) {
            /**
             var obj = {
                name : 'cookieName'
            };
             **/

            var exdays = -1;
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = 'expires=' + d.toUTCString();
            var cvalue = getCookie(obj);

            document.cookie = obj.name + '=' + cvalue + '; ' + expires;
        },
		ieAlert: function(obj) {
		
			/**
			var obj = {
				version : 8,
				title : '瀏覽器建議',
				content : '內容內容內容內容內容內容內容'
			};
			**/
			
			var conf = {
                version : 8
			};
            
			obj = $.extend(conf, obj);
			
			if(_isIEVersion(obj.version)) {
				GardenUtils.display.popup({
					title:obj.title,			 
		            content : obj.content,
		            closeCallBackFn : function(){},
					showCallBackFn : function(){},
		            isShowSubmit : false,
					isShowClose : true
				});
			}
			
			function _isIEVersion(ver){
			    var b = document.createElement('b')
			    b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->'
			    return b.getElementsByTagName('i').length === 1;
			}
		},
		leaveWeb: function(obj){
		
			/**
			var obj = {
				title : '瀏覽器建議',
				matchURL : ['skbank.com.tw']
			};
			**/
			
			
			$('body').on('click','a[href]', function(ev) {
				var target = $(this);
		        var href = $(target).attr('href');			
				var host = window.location.host;
				
				if(href != '' && (href.indexOf('http') != -1 || href.indexOf('https') != -1) && href.indexOf(host) == -1) {
					console.debug(href);
					console.debug(host);
					
					var isAlert = true;
					
					if(obj.matchURL != undefined && obj.matchURL.length != 0) {

						$.each(obj.matchURL,function(i,url){
							console.debug(url);
							if(href.indexOf(url) != -1) {
								isAlert = false;
							}
						});
						
						
					}
					
					if(isAlert) {
						if(!confirm(obj.title)) {
							ev.preventDefault();
						}
					}
					
				}
			});
		}
		

    },
    valid: {
        //格式： 
        //var res = GardenUtils.valid.validForm({
        //     type:"alert | show",
        //     formId:["purchaserForm"],
        //     validEmpty : ["addresseeName","addresseeTel","addresseeCity","addresseeDistrict","addresseeAddress"],
        //     validNumber : ["addresseeTel"],
        //     validDecimal : [],
        //     validEmail:[],
        //     validDate:["receiveDate"],
        //     customizeFun:function(){}
        // });
        validForm: function(config) {
            console.debug(config);
            var noPass = [];
            var customizeValidResult = [];
            //var message = [];
            var hasErrName = [];

            if (!config.hasOwnProperty('showAllErr')) {
                config['showAllErr'] = true;
            }

            if (config.formId != undefined && config.formId != "") {

                $(config.formId).each(function(i, n) {

                    // verify empty
                    var empty_groupArr = [];
                    $(config.validEmpty).each(function(j, number) {

                        var errName = number.hasOwnProperty('group') ? number.group : number.name;
                        if (config.showAllErr || hasErrName.indexOf(errName) == -1) {
                            var $this = $('#' + n).find('[name="' + number.name + '"]');

                            //2016-10-02 added by titan,check input type is radio re get jquery obj
                            if($this.attr('type') == 'radio') {
                                $this = $('#' + n).find('[name="' + number.name + '"]:checked');
                            }
                            
                            if ($this.length != 0 && $this.parents(":hidden").length == 0) {
                                var val = (number.hasOwnProperty('notRemoveSpace') && number.notRemoveSpace ? $this.val() : GardenUtils.valid.removeSpace($this.val()));
                                //2016-10-02 added by titan add html editor type check
                                if($this.attr('type') != undefined && $this.attr('type') == 'editor') {
                                    if($this.parent().find('.htmlData.hidden').length != 0) {
                                        val = $this.parent().find('.htmlData.hidden').html();
                                    }
                                    else if($this.parent().find('.highlightData.hidden').length != 0) {
                                        val = $this.parent().find('.highlightData.hidden').html();
                                    }
                                }                               
                                
                                if( $this.attr('type')!='radio' && $this.attr('type')!='checkbox' && $this.attr('type') != 'file' && $this.attr('type') != 'editor' ){
                                    $this.val(val);
                                }
                                
                                var test = number.name;
                                console.debug('n:' + n + '/name:' + number.name + '/val:' + val + '_' + number.msg, val === "");

                                if( $this.attr('type')=='radio' || $this.attr('type')=='checkbox' ){
                                    val = $('input[name="'+number.name+'"]:checked', '#'+config.formId).val();
                                }

                                if( $this.attr('type') == 'file'){

                                    $this.children('[data-provides="fileupload"]').each(function(){
                                        if( $(this).hasClass('fileupload-exists') ){
                                            val = 'fileupload-exists';
                                        }
                                    });
                                }

                                if(val === undefined){
                                    val = '';
                                }

                                if (val === "" || val === "請選擇") { // || val === "00") {
                                    //message.push('請輸入'+number.msg);
                                    if (!number.hasOwnProperty('group')) {
                                        hasErrName.push(errName);

                                        noPass.push({
                                            name: number.name,
                                            type: 'empty',
                                            msg: number.msg,
                                            obj: $this,
                                            val: val
                                        });

                                    } else if (empty_groupArr.indexOf(number.group) == -1) {
                                        hasErrName.push(errName);
                                        empty_groupArr.push(number.group);

                                        noPass.push({
                                            name: number.name,
                                            type: 'empty',
                                            msg: number.msg,
                                            obj: $this,
                                            val: val
                                        });
                                    }

                                }
                            }
                        }
                    }); // end each: valid empty
                    /*$(config.validEmpty).each(function(j, number) {

                        var errName = number.hasOwnProperty('group') ? number.group : number.name;
                        if (config.showAllErr || hasErrName.indexOf(errName) == -1) {
                            var $this = $('#' + n).find('[name="' + number.name + '"]');

                            if ($this.length != 0 && $this.parents(":hidden").length == 0) {
                                var val = (number.hasOwnProperty('notRemoveSpace') && number.notRemoveSpace ? $this.val() : GardenUtils.valid.removeSpace($this.val()));
                                $this.val(val);
                                var test = number.name;
                                console.debug('n:' + n + '/name:' + number.name + '/val:' + val + '_' + number.msg, val === "");

                                if (val === "" || val === undefined || val === "請選擇") { // || val === "00") {
                                    //message.push('請輸入'+number.msg);
                                    if (!number.hasOwnProperty('group')) {
                                        hasErrName.push(errName);

                                        noPass.push({
                                            name: number.name,
                                            type: 'empty',
                                            msg: number.msg,
                                            obj: $this,
                                            val: val
                                        });

                                    } else if (empty_groupArr.indexOf(number.group) == -1) {
                                        hasErrName.push(errName);
                                        empty_groupArr.push(number.group);

                                        noPass.push({
                                            name: number.name,
                                            type: 'empty',
                                            msg: number.msg,
                                            obj: $this,
                                            val: val
                                        });
                                    }

                                }
                            }
                        }
                    }); // end each: valid empty*/

                    //verify number
                    var number_groupArr = [];
                    $(config.validNumber).each(function(j, number) {
                        var errName = number.hasOwnProperty('group') ? number.group : number.name;
                        if (config.showAllErr || hasErrName.indexOf(errName) == -1) {
                            var $this = $('#' + n).find('[name="' + number.name + '"]');

                            console.debug($this);
                            console.debug($this.length);

                            if ($this.length != 0 && $this.parents(":hidden").length == 0) {
                                var val = (number.hasOwnProperty('notRemoveSpace') && number.notRemoveSpace ? $this.val() : GardenUtils.valid.removeSpace(RemoveComma($this.val())));
                                $this.val(val);

                                console.debug('validNumber', val);
                                console.debug('validNumber', number.allowEmpty);

                                if (!number.allowEmpty && val == '' && (!number.hasOwnProperty('group') || number_groupArr.indexOf(number.group) == -1)) {
                                    number_groupArr.push(number.group);
                                    hasErrName.push(errName);

                                    noPass.push({
                                        name: number.name,
                                        type: 'number',
                                        msg: number.msg,
                                        obj: $this,
                                        val: val
                                    });
                                } else {
                                    if (!number.hasOwnProperty('hasHiddenCode')) {
                                        number['hasHiddenCode'] = false;
                                    }
                                    var hiddenConf = {
                                        hasHiddenCode: number.hasHiddenCode,
                                        src: val,
                                        target: number.hiddenTarget,
                                        checkFun: function(conf) {
                                            return isNumeric(conf.num);
                                        },
                                        checkFunParam: {
                                            num: val
                                        }
                                    };

                                    if (!checkHiddenCode(hiddenConf) && val != "" && (!number.hasOwnProperty('group') || number_groupArr.indexOf(number.group) == -1)) {
                                        //message.push(number.msg + ":請輸入正確的數字形式");
                                        number_groupArr.push(number.group);
                                        hasErrName.push(errName);

                                        noPass.push({
                                            name: number.name,
                                            type: 'number',
                                            msg: number.msg,
                                            obj: $this,
                                            val: val
                                        });
                                    }
                                }
                            }
                        }
                    }); // end if: valid number


                    //verify decimal
                    $(config.validDecimal).each(function(j, number) {
                        var errName = number.hasOwnProperty('group') ? number.group : number.name;
                        if (config.showAllErr || hasErrName.indexOf(errName) == -1) {
                            var $this = $('#' + n).find('[name="' + number.name + '"]');

                            if ($this.length != 0 && $this.parents(":hidden").length == 0) {
                                var val = (number.hasOwnProperty('notRemoveSpace') && number.notRemoveSpace ? $this.val() : GardenUtils.valid.removeSpace($this.val()));
                                $this.val(val);

                                if (!number.allowEmpty && val == '') {
                                    hasErrName.push(errName);

                                    noPass.push({
                                        name: number.name,
                                        type: 'decimal',
                                        msg: number.msg,
                                        obj: $this,
                                        val: val
                                    });
                                } else {
                                    if (!isNumeric(val) && val != "") {
                                        //message.push(number.msg + ":請輸入正確的數字形式");
                                        hasErrName.push(errName);

                                        noPass.push({
                                            name: number.name,
                                            type: 'decimal',
                                            msg: number.msg,
                                            obj: $this,
                                            val: val
                                        });
                                    }
                                }

                            }
                        }
                    }); // end if: valid decimal

                    //verify date
                    $(config.validDate).each(function(j, number) {
                        var errName = number.hasOwnProperty('group') ? number.group : number.name;
                        if (config.showAllErr || hasErrName.indexOf(errName) == -1) {
                            var $this;
                            if (number.name.length == 1) {
                                $this = $('#' + n).find('[name="' + number.name + '"]');
                            } else if (number.name.length == 3) {

                                $this = [];

                                $.each(number.name, function(k, nameEle) {
                                    if ($.isNumeric(nameEle)) {
                                        $this.push(nameEle);
                                    } else {
                                        $this.push($('#' + n).find('[name="' + nameEle + '"]'));
                                    }
                                });

                                //$this = [$('#' + n).find('[name="' + number.name[0] + '"]'), $('#' + n).find('[name="' + number.name[1] + '"]'), $('#' + n).find('[name="' + number.name[2] + '"]')];
                            }


                            console.debug('validDate', number);

                            if ($this.length != 0 && (($this.length == 1 && $this.parents(":hidden").length == 0) || ($this.length == 3 && $this[0].parents(":hidden").length == 0))) {
                                var val = '';
                                if (number.name.length == 1) {
                                    val = (number.hasOwnProperty('notRemoveSpace') && number.notRemoveSpace ? $this.val() : GardenUtils.valid.removeSpace($this.val()));
                                    $this.val(val);
                                } else if (number.name.length == 3) {
                                    var val_tmp = '';
                                    $.each($this, function(i, dateName) {

                                        if (i != 0) {
                                            val += number.splitEle;
                                        }

                                        if ($.isNumeric(dateName)) {
                                            val_tmp = dateName;
                                        } else {
                                            val_tmp = (number.hasOwnProperty('notRemoveSpace') && number.notRemoveSpace ? dateName.val() : GardenUtils.valid.removeSpace(dateName.val()));
                                            dateName.val(val_tmp);
                                        }

                                        val += val_tmp;
                                    });
                                    /*var val_y = (number.hasOwnProperty('notRemoveSpace')&&number.notRemoveSpace? $this[0].val() : GardenUtils.valid.removeSpace( $this[0].val() ));
                                     $this[0].val( val_y );
                                     var val_m = (number.hasOwnProperty('notRemoveSpace')&&number.notRemoveSpace? $this[1].val() : GardenUtils.valid.removeSpace( $this[1].val() ));
                                     $this[1].val( val_m );
                                     var val_d = (number.hasOwnProperty('notRemoveSpace')&&number.notRemoveSpace? $this[2].val() : GardenUtils.valid.removeSpace( $this[2].val() ));
                                     $this[2].val( val_d );

                                     val = val_y+number.splitEle+val_m+number.splitEle+val_d;*/

                                }
                                number['val'] = val;

                                if (!number.hasOwnProperty('hiddenEle')) {
                                    number['hiddenEle'] = '*';
                                }


                                var hiddenVal = '',
                                    hiddenIndex = 0;
                                //因為可能會是空字串, 所以加一個判斷 by Foi 0803
                                console.debug(number.hiddenTarget);
                                if (number.hiddenTarget != '' && number.hiddenTarget != undefined) {
                                    var splitDate = number.hiddenTarget.split(number.splitEle);
                                    for (var i = 0; i < splitDate.length; ++i) {
                                        console.log('splitDate', splitDate[i], splitDate[i].indexOf(number.hiddenEle));
                                        if (splitDate[i].indexOf(number.hiddenEle) != -1) {
                                            hiddenVal = splitDate[i];
                                            hiddenIndex = i;
                                        }
                                    }
                                }
                                //var val = number.val;
                                if (!number.hasOwnProperty('hasHiddenCode')) {
                                    number['hasHiddenCode'] = false;
                                }

                                var hiddenConf = {
                                    hasHiddenCode: number.hasHiddenCode,
                                    src: val.split(number.splitEle)[hiddenIndex],
                                    target: hiddenVal,
                                    checkFun: function(conf) {
                                        return IsDate(conf);
                                    },
                                    checkFunParam: number
                                };

                                console.debug(hiddenConf);

                                if (number.allowEmpty) {
                                    //日期可為空
                                    if (!checkHiddenCode(hiddenConf) && val != "") {
                                        /**
                                         message.push("請輸入正確的時間格式");
                                         var currentDate = new Date();
                                         var day = currentDate.getDate();
                                         var month = currentDate.getMonth() + 1;
                                         var year = currentDate.getFullYear();
                                         if (month.toString().length == 1) month = "0" + month;
                                         if (day.toString().length == 1) day = "0" + day;
                                         $this.val(year + '/' + month + '/' + day);
                                         **/
                                        hasErrName.push(errName);

                                        noPass.push({
                                            name: number.name,
                                            type: 'date',
                                            msg: number.msg,
                                            obj: $this.length == 1 ? $this : $this[0],
                                            val: val
                                        });
                                    }
                                } else {
                                    //日期不可為空
                                    if (!checkHiddenCode(hiddenConf) && val != "") {
                                        /**
                                         message.push("請輸入正確的時間格式");
                                         var currentDate = new Date();
                                         var day = currentDate.getDate();
                                         var month = currentDate.getMonth() + 1;
                                         var year = currentDate.getFullYear();
                                         if (month.toString().length == 1) month = "0" + month;
                                         if (day.toString().length == 1) day = "0" + day;
                                         $this.val(year + '/' + month + '/' + day);
                                         **/
                                        hasErrName.push(errName);

                                        noPass.push({
                                            name: number.name,
                                            type: 'date',
                                            msg: number.msg,
                                            obj: $this.length == 1 ? $this : $this[0],
                                            val: val
                                        });
                                    }
                                }
                            }
                        }
                    }); // end if: valid date

                    //verify email
                    $(config.validEmail).each(function(i, number) {
                        var errName = number.hasOwnProperty('group') ? number.group : number.name;
                        if (config.showAllErr || hasErrName.indexOf(errName) == -1) {
                            var $this = $('#' + n).find('[name="' + number.name + '"]');

                            if ($this.length != 0 && $this.parents(":hidden").length == 0) {
                                var val = (number.hasOwnProperty('notRemoveSpace') && number.notRemoveSpace ? $this.val() : GardenUtils.valid.removeSpace($this.val()));
                                $this.val(val);

                                if (!number.hasOwnProperty('hasHiddenCode')) {
                                    number['hasHiddenCode'] = false;
                                }
                                var hiddenConf = {
                                    hasHiddenCode: number.hasHiddenCode,
                                    src: val,
                                    target: number.hiddenTarget,
                                    checkFun: function(conf) {
                                        return checkEmail(conf.email);
                                    },
                                    checkFunParam: {
                                        email: val
                                    }
                                };

                                if (!number.allowEmpty && val == "") {
                                    hasErrName.push(errName);

                                    noPass.push({
                                        name: number.name,
                                        type: 'email',
                                        msg: number.msg,
                                        obj: $this,
                                        val: val
                                    });
                                } else {
                                    if (val != "" && !checkHiddenCode(hiddenConf)) {
                                        hasErrName.push(errName);

                                        noPass.push({
                                            name: number.name,
                                            type: 'email',
                                            msg: number.msg,
                                            obj: $this,
                                            val: val
                                        });
                                    }
                                }
                            }
                        }
                    }); // end if: valid email

                    //verify identity
                    $(config.validIdentity).each(function(i, number) {

                        var errName = number.hasOwnProperty('group') ? number.group : number.name;
                        if (config.showAllErr || hasErrName.indexOf(errName) == -1) {
                            var $this = $('#' + n).find('[name="' + number.name + '"]');

                            if ($this.length != 0 && $this.parents(":hidden").length == 0) {
                                var val = (number.hasOwnProperty('notRemoveSpace') && number.notRemoveSpace ? $this.val() : GardenUtils.valid.removeSpace($this.val()));
                                $this.val(val);

                                if (!number.hasOwnProperty('hasHiddenCode')) {
                                    number['hasHiddenCode'] = false;
                                }
                                var hiddenConf = {
                                    hasHiddenCode: number.hasHiddenCode,
                                    src: val,
                                    target: number.hiddenTarget,
                                    checkFun: function(conf) {
                                        console.log('isForeigner', checkID(conf.id), isValidFrgnID(conf.id));
                                        return (!conf.isForeigner ? checkID(conf.id) : ((checkID(conf.id) || isValidFrgnID(conf.id)) ? true : false));
                                    },
                                    checkFunParam: {
                                        id: val,
                                        isForeigner: number.hasOwnProperty('isForeigner')? number.isForeigner: false
                                    }
                                };

                                if (number.allowEmpty) {

                                    //可為空
                                    if (!checkHiddenCode(hiddenConf) && val != "") {
                                        hasErrName.push(errName);

                                        noPass.push({
                                            name: number.name,
                                            type: 'identity',
                                            msg: number.msg,
                                            obj: $this,
                                            val: val
                                        });
                                        //message.push("請輸入正確的身分證字號");
                                    }
                                } else {
                                    //不可為空
                                    if (val == "") {
                                        hasErrName.push(errName);

                                        noPass.push({
                                            name: number.name,
                                            type: 'identity',
                                            msg: number.msg,
                                            obj: $this,
                                            val: val
                                        });
                                        //message.push("身分證字號不得為空");
                                    } else if (!checkHiddenCode(hiddenConf)) {
                                        hasErrName.push(errName);

                                        noPass.push({
                                            name: number.name,
                                            type: 'identity',
                                            msg: number.msg,
                                            obj: $this,
                                            val: val
                                        });
                                        //message.push("請輸入正確的身分證字號");
                                    }
                                }
                            }
                        }
                    }); // end if: valid identity

                    //verify mobile
                    $(config.validMobile).each(function(i, number) {
                        var errName = number.hasOwnProperty('group') ? number.group : number.name;
                        if (config.showAllErr || hasErrName.indexOf(errName) == -1) {
                            var $this = $('#' + n).find('[name="' + number.name + '"]');

                            if ($this.length != 0 && $this.parents(":hidden").length == 0) {
                                var val = (number.hasOwnProperty('notRemoveSpace') && number.notRemoveSpace ? $this.val() : GardenUtils.valid.removeSpace($this.val()));
                                $this.val(val);

                                if (!number.hasOwnProperty('hasHiddenCode')) {
                                    number['hasHiddenCode'] = false;
                                }
                                var hiddenConf = {
                                    hasHiddenCode: number.hasHiddenCode,
                                    src: val,
                                    target: number.hiddenTarget,
                                    checkFun: function(conf) {
                                        return isMobileNumber(conf.mobile);
                                    },
                                    checkFunParam: {
                                        mobile: val
                                    }
                                };

                                if (!number.allowEmpty && val == "") {
                                    hasErrName.push(errName);

                                    noPass.push({
                                        name: number.name,
                                        type: 'mobile',
                                        msg: number.msg,
                                        obj: $this,
                                        val: val
                                    });
                                } else {
                                    if (!checkHiddenCode(hiddenConf) && val != "") {
                                        hasErrName.push(errName);

                                        noPass.push({
                                            name: number.name,
                                            type: 'mobile',
                                            msg: number.msg,
                                            obj: $this,
                                            val: val
                                        });
                                    }
                                }
                            }
                        }
                    }); // end if: valid mobile

                    //verify Chinese
                    $(config.validChinese).each(function(i, number) {
                        var errName = number.hasOwnProperty('group') ? number.group : number.name;
                        if (config.showAllErr || hasErrName.indexOf(errName) == -1) {
                            var $this = $('#' + n).find('[name="' + number.name + '"]');

                            if ($this.length != 0 && $this.parents(":hidden").length == 0) {
                                var val = (number.hasOwnProperty('notRemoveSpace') && number.notRemoveSpace ? $this.val() : GardenUtils.valid.removeSpace($this.val()));
                                $this.val(val);

                                if (!number.hasOwnProperty('hasHiddenCode')) {
                                    number['hasHiddenCode'] = false;
                                }
                                var hiddenConf = {
                                    hasHiddenCode: number.hasHiddenCode,
                                    src: val,
                                    target: number.hiddenTarget,
                                    checkFun: function(conf) {
                                        return (conf.chinese.match(/^[\u4E00-\u9FA5]+$/) != null);
                                    },
                                    checkFunParam: {
                                        chinese: val
                                    }
                                };

                                if (!number.allowEmpty && val == "") {
                                    hasErrName.push(errName);

                                    noPass.push({
                                        name: number.name,
                                        type: 'chinese',
                                        msg: number.msg,
                                        obj: $this,
                                        val: val
                                    });
                                } else {
                                    if (!checkHiddenCode(hiddenConf) && val != "") {
                                        hasErrName.push(errName);

                                        noPass.push({
                                            name: number.name,
                                            type: 'chinese',
                                            msg: number.msg,
                                            obj: $this,
                                            val: val
                                        });
                                    }
                                }
                            }
                        }
                    }); // end if: valid chinese

                });

                if( config.hasOwnProperty('customizeFun') ){
                    config.customizeFun(customizeValidResult);
                }

                console.debug(noPass);
            } else {
                alert('請輸入驗證範圍');
            }

            // console.debug(message);

            if (noPass.length != 0 || customizeValidResult.length != 0) {

                var displayType = config.type;
                if (displayType == 'alert') {
                    var message = [];

                    //先跑基本的
                    $.each(noPass, function(i, obj) {
                        var name = obj.name;
                        var type = obj.type;
                        var msg = obj.msg;
                        var validObj = obj.obj;
                        var val = obj.val;

                        if (val.indexOf('*') != -1) {
                            msg = msg + '勿輸入遮掩字元，請重新輸入';
                        } else {
                            if (type == 'empty') {
                                /*if(validObj[0].tagName.toLowerCase() == 'input') {
                                        msg = '請輸入' + msg;
                                    }
                                    else {
                                        msg = '請選擇' + msg;
                                    }*/
                                //富邦一律要顯示請輸入,不論是下拉式選單還是輸入框 by Foi 2016/07/12
                                msg = '請輸入' + msg;
                            } else if (type == 'number') {
                                msg = msg + '限輸入數字';
                            } else if (type == 'decimal') {
                                msg = msg + '限輸入數字';
                            } else if (type == 'chinese') {
                                msg = msg + '限輸入中文字';
                            } else if (type == 'date' || type == 'email' || type == 'identity' || type == 'mobile') {
                                if (val.indexOf('*') != -1) {
                                    msg = msg + '勿輸入遮掩字元，請重新輸入';
                                } else {
                                    msg = msg + '格式錯誤';
                                }
                            }
                        }



                        message.push(msg);
                    });

                    //再跑客製的
                    $.each(customizeValidResult, function(i, obj) {
                        console.debug(customizeValidResult);
                        var errName = obj.hasOwnProperty('group') ? obj.group : obj.obj.attr('name');
                        if (config.showAllErr || hasErrName.indexOf(errName) == -1) {
                            var validObj = obj.obj;
                            console.debug(validObj);
                            var msg = obj.msg;

                            var validObjectParent = validObj.parents('div:first');
                            message.push(msg);
                        }
                    }); // end if: customize valid

                    var alertMsg = message.join('\n');
                    alert(alertMsg);
                } else if (displayType == 'show') {
                    //先清空error-msg
                    $('.error-msg').text('');

                    //先跑基本的
                    $.each(noPass, function(i, obj) {
                        console.debug(obj);

                        var name = obj.name;
                        var type = obj.type;
                        var msg = obj.msg;
                        var validObj = obj.obj;
                        var val = obj.val;

                        if (val.indexOf('*') != -1) {
                            msg = msg + '勿輸入遮掩字元，請重新輸入';
                        } else {
                            if (type == 'empty') {
                                //富邦一律要顯示請輸入,不論是下拉式選單還是輸入框 by Foi 2016/07/12
                                msg = '請輸入' + msg;
                            } else if (type == 'number') {
                                msg = msg + '限輸入數字';
                            } else if (type == 'decimal') {
                                msg = msg + '限輸入數字';
                            } else if (type == 'chinese') {
                                msg = msg + '限輸入中文字';
                            } else if (type == 'date' || type == 'email' || type == 'identity' || type == 'mobile') {

                                /** --start 0629  忠毅 register的錯誤訊息是: 身分證字號驗證錯誤  **/
                                if (type == 'identity') {

                                    /**  0716 忠毅  輸入非英數字,規定要顯示: 限輸入英數字  **/
                                    if (/^[a-zA-Z0-9- ]*$/.test(obj.val) == false) {
                                        //alert('string contains non english characters');
                                        msg = '限輸入英數字';
                                    }
                                    /**  0716 忠毅  長度不符,規定要顯示: 輸入長度不符  **/
                                    else if (obj.val.length < 10)
                                        msg = '輸入長度不符';

                                    else
                                        msg = msg + '驗證錯誤';


                                } else {
                                    /** --end 0629  忠毅 register的錯誤訊息是: 身分證字號驗證錯誤  **/

                                    if (val.indexOf('*') != -1) {
                                        msg = msg + '勿輸入遮掩字元，請重新輸入';
                                    } else {
                                        msg = msg + '格式錯誤';
                                    }
                                }

                            }
                        }



                        var validObjParent = validObj.parents('div.right:first');

                        if (validObjParent.length == 0) {
                            validObjParent = validObj.parent();
                        }

                        var oriMsg = validObjParent.find('.error-msg').text();
                        if (oriMsg != '') msg = ',' + msg;
                        validObjParent.find('.error-msg').text(oriMsg + msg);
                    });

                    //再跑客製的
                    $.each(customizeValidResult, function(i, obj) {
                        var errName = obj.hasOwnProperty('group') ? obj.group : obj.obj.attr('name');
                        if (config.showAllErr || hasErrName.indexOf(errName) == -1) {
                            var validObj = obj.obj;
                            console.debug(validObj);
                            var msg = obj.msg;

                            var validObjParent = validObj.parents('div.right:first');
                            console.debug(validObjParent.length);

                            if (validObjParent.length != 0) { //輸入框之parent之class名為right時
                                var oriMsg = validObjParent.find('.error-msg').text();
                                if (oriMsg != '') msg = ',' + msg;
                                validObjParent.find('.error-msg').text(oriMsg + msg);
                            } else { //輸入框之parent之class名不一定時
                                var validObjectParent = validObj.parents('div:first');
                                var oriMsg = validObjectParent.find('.error-msg').text();
                                if (oriMsg != '') msg = ',' + msg;
                                validObjectParent.find('.error-msg').text(oriMsg + msg);
                            }
                        }
                    }); // end if: customize valid
                }



                return false;
            } else {
                return true;
            }

            ////////////////////////////
            // 確認隱碼
            function checkHiddenCode(conf) {

                console.log('checkHiddenCode conf:', conf);

                if (conf.hasHiddenCode && conf.src === conf.target) {
                    return true;
                } else {
                    if (conf.src.indexOf('*') != -1) return false
                    else return conf.checkFun(conf.checkFunParam);
                }
            }
            //身分證字號
            function isValidChar() {

                var test = isValidChar.arguments[0];
                var range = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

                if (isValidChar.arguments.length == 2) {
                    range = isValidChar.arguments[1];
                }

                for (var i = 0; i < test.length; i++) {
                    if (range.indexOf(test.charAt(i)) < 0) {
                        return false;
                    }
                }
                return true;
            }

            function checkID(s) {

                var sum = 0;
                s = s.toUpperCase();

                /*if ((isValidChar(s.substring(0, 2), "ABCDEFGHIJKLMNOPQRSTUVWXYZ")) || (isValidChar(s.substring(s.length-2), "ABCDEFGHIJKLMNOPQRSTUVWXYZ")) ) {

                    return true;

                }

                // 檢核ID正確性

                var chk = "";

                if ((s.length == 10) && (isValidChar(s.substring(8, 10), "0123456789"))) {

                        chk = s.substring(6, 10);

                } else {

                    if (s.length == 7) {

                            chk = s.substring(3, 7);

                    } else {

                            chk = s.substring(4, 8);

                    }

                }

                if (!isValidChar(chk, "0123456789")) {

                        // 檢核ID不正確

                        return false;

                }*/

                if ((s.length != 10)) { //&& (s.length != 8)) {

                        // 身份證字號錯誤

                        return false;

                } else if (s.length == 10) {

                        // 本國國民身份證字號

                        var s1 = "";

                        switch (s.charAt(0)) {

                                case 'A' : s1 = "10"; break;

                                case 'B' : s1 = "11"; break;

                                case 'C' : s1 = "12"; break;

                                case 'D' : s1 = "13"; break;

                                case 'E' : s1 = "14"; break;

                                case 'F' : s1 = "15"; break;

                                case 'G' : s1 = "16"; break;

                                case 'H' : s1 = "17"; break;

                                case 'I' : s1 = "34"; break;

                                case 'J' : s1 = "18"; break;

                                case 'K' : s1 = "19"; break;

                                case 'L' : s1 = "20"; break;

                                case 'M' : s1 = "21"; break;

                                case 'N' : s1 = "22"; break;

                                case 'O' : s1 = "35"; break;

                                case 'P' : s1 = "23"; break;

                                case 'Q' : s1 = "24"; break;

                                case 'R' : s1 = "25"; break;

                                case 'S' : s1 = "26"; break;

                                case 'T' : s1 = "27"; break;

                                case 'U' : s1 = "28"; break;

                                case 'V' : s1 = "29"; break;

                                case 'W' : s1 = "32"; break;

                                case 'X' : s1 = "30"; break;

                                case 'Y' : s1 = "31"; break;

                                case 'Z' : s1 = "33"; break;

                                default  : return false;

                        }

                        if (!isValidChar(s.substring(1), "0123456789")) {

                                // 身份證後九碼不為數字

                                return false;

                        }

                        s1 += s.substring(1);

         

                        var xArray = new Array(1,9,8,7,6,5,4,3,2,1,1);

                        for (var i = 0; i < s1.length; i++) {

                                sum += parseInt(s1.charAt(i)) * xArray[i];

                        }

                        return (sum % 10 == 0) ? true : false;

         

                } /*else if (s.length == 8) {

                        // 法人戶統一編號

                        //Yumi Update-為配合外國人虛擬統編,故如長度為8,不檢核。

                        return true;

                       

                        if (!isValidChar(s, "0123456789")) {

                                // 法人戶統一編號不為數字

                                return false;

                        }

         

                        var d = new Array();

                        for (var i = 0; i < s.length; i++) {

                                d[i] = parseInt(s.charAt(i));

                        }

         

                        var tmpS = 0;

                        tmpS = d[1] * 2;

                        var s11 = Math.floor(tmpS / 10);

                        var s12 = tmpS % 10;

         

                        tmpS = d[3] * 2;

                        var s21 = Math.floor(tmpS / 10);

                        var s22 = tmpS % 10;

         

                        tmpS = d[5] * 2;

                        var s31 = Math.floor(tmpS / 10);

                        var s32 = tmpS % 10;

         

                        tmpS = d[6] * 4;

                        var s41 = Math.floor(tmpS / 10);

                        var s42 = tmpS % 10;

         

                        var sum = d[0] + d[2] + d[4] + d[7] + s11 + s12 + s21 + s22 + s31 + s32 + s41 + s42;

                        if (sum % 10 == 0) {

                                return true;

                        } else if (d[6] != 7) {

                                return false;

                        } else {

                                tmpS = s41 + s42;

                                var s51 = Math.floor(tmpS / 10);

                                var s52 = tmpS % 10;

                                sum = d[0] + d[2] + d[4] + d[7] + s11 + s12 + s21 + s22 + s31 + s32 + s51 + s52;

                                if (sum % 10 == 0) {

                                        return true;

                                } else {

                                        return false;

                                }

                        }

                }*/

            }
            // 檢核外國人統一證號(AA12345675)
            // 第一碼：縣市別代碼；第二碼：性別；第三～九碼：流水號；第十碼：檢核碼
            function isValidFrgnID(s) {

                s = s.toUpperCase();
                if (!s.match(/^[A-Z]{1}[A-D]{1}[0-9]{8}$/)) return false;

                var s1 = getIdCharMap(s.charAt(0)) + getIdCharMap(s.charAt(1)).charAt(1) + s.substring(2);
                var sum = 0;
                var xArray = new Array(1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1);

                console.log('s1', s1);

                for (var i = 0; i < s1.length; i++) {

                    sum += parseInt(s1.charAt(i)) * xArray[i];

                    //console.log('sum', sum);

                }

                return (sum % 10 == 0) ? true : false;
            }

            function getIdCharMap(c) {

                var r = "";

                switch (c) {

                    case 'A':
                        r = "10";
                        break;

                    case 'B':
                        r = "11";
                        break;

                    case 'C':
                        r = "12";
                        break;

                    case 'D':
                        r = "13";
                        break;

                    case 'E':
                        r = "14";
                        break;

                    case 'F':
                        r = "15";
                        break;

                    case 'G':
                        r = "16";
                        break;

                    case 'H':
                        r = "17";
                        break;

                    case 'I':
                        r = "34";
                        break;

                    case 'J':
                        r = "18";
                        break;

                    case 'K':
                        r = "19";
                        break;

                    case 'L':
                        r = "20";
                        break;

                    case 'M':
                        r = "21";
                        break;

                    case 'N':
                        r = "22";
                        break;

                    case 'O':
                        r = "35";
                        break;

                    case 'P':
                        r = "23";
                        break;

                    case 'Q':
                        r = "24";
                        break;

                    case 'R':
                        r = "25";
                        break;

                    case 'S':
                        r = "26";
                        break;

                    case 'T':
                        r = "27";
                        break;

                    case 'U':
                        r = "28";
                        break;

                    case 'V':
                        r = "29";
                        break;

                    case 'W':
                        r = "32";
                        break;

                    case 'X':
                        r = "30";
                        break;

                    case 'Y':
                        r = "31";
                        break;

                    case 'Z':
                        r = "33";
                        break;

                    default:
                        r = "";
                }
                return r;
            }
            //信箱
            function checkEmail(id) {
                /*var pattern = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
                return id.match(pattern);*/

                return (id.indexOf("@") != -1);

                //return (checkLength(id, 5) && id.indexOf("@") != -1);
            }

            function checkLength(dat, len) {
                return (dat.length >= len);
            }
            //整數
            function isInt(value) {
                if (isNaN(value)) {
                    return false;
                }
                var x = parseFloat(value);
                return (x | 0) === x;
            }
            //數字
            function isNumeric(n) {
                return !isNaN(parseFloat(n)) && isFinite(n);
            }
            //移除逗號
            function RemoveComma(n) {
                return n.replace(/[,]+/g, '');
            }
            //檢查日期格式
            function IsDate(config) {
                var conf = {
                    format: 'ac'
                };
                $.extend(conf, config);

                //console.error('d:', conf);

                var d = parseInt(conf.val.split(conf.splitEle)[2]);
                var m = parseInt(conf.val.split(conf.splitEle)[1]);
                var y = parseInt(conf.val.split(conf.splitEle)[0]);

                /*var validatePattern = /^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/;
                var validatePattern_ch = /^(\d{2,3})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/;
                var dateValues = conf.val.match(( conf.format == 'ch'? validatePattern_ch : validatePattern ));
                */

                var validatePattern = (y.toString().length == 4 ? ((m.toString().length == 1 || m.toString().length == 2) ? ((d.toString().length == 1 || d.toString().length == 2) ? true : null) : null) : null);
                var validatePattern_ch = ((y.toString().length == 2 || y.toString().length == 3) ? ((m.toString().length == 1 || m.toString().length == 2) ? ((d.toString().length == 1 || d.toString().length == 2) ? true : null) : null) : null);
                console.debug('validatePattern:', validatePattern, validatePattern_ch);
                var dateValues = (conf.format == 'ch' ? validatePattern_ch : validatePattern);

                if (dateValues == null) return false;
                else {

                    if (conf.format == 'ch') {
                        y += 1911;
                    }

                    console.debug('d:', y, m, d);

                    var date = new Date(y, m - 1, d);
                    if (date.getFullYear() == y && date.getMonth() + 1 == m && date.getDate() == d) {
                        return true;
                    } else {
                        return false;
                    }
                };
            }
            //檢查手機格式
            function isMobileNumber(txtMob) {
                var mob = /^[0]{1}[9]{1}[0-9]{8}$/;
                if (mob.test(txtMob) == false) {
                    return false;
                }
                return true;
            }
        },
        removeSpace: function(str) {
            while (str.indexOf(" ") != -1) {
                str = str.replace(" ", "");
            }
            return str;
        }
    },
    format: {
        inputTrimSpace: function(obj) {
            //var obj = {
            //    name : ['name','id']
            //};

            $.each(obj.name, function(i, name) {
                var input = $('input[name="' + name + '"][type="text"]');

                console.debug(name + ':' + input.length);
                input.on('blur', function() {
                    var val = input.val();
                    console.debug('val = ' + val);
                    input.val(GardenUtils.valid.removeSpace(val));
                });
            });
        },
        inputConvertFullWidth: function(obj) {
            //var obj = {
            //    name : ['name','id']
            //};


            $.each(obj.name, function(i, name) {
                var input = $('input[name="' + name + '"][type="text"]');

                console.debug(name + ':' + input.length);
                input.on('blur', function() {
                    var val = input.val();
                    console.debug('val = ' + val);

                    var after = '';
                    for (i = 0; i < val.length; i++) {
                        if (val.charCodeAt(i) >= 33 && val.charCodeAt(i) <= 270) {
                            after += String.fromCharCode(val.charCodeAt(i) + 65248);
                        } else if (val.charCodeAt(i) == 32) {
                            after += String.fromCharCode(12288);
                        } else {
                            after += val.substring(i, i + 1);
                        }
                    }

                    input.val(after);
                });
            });

        },
        inputFocusBlurEventHandler: function(obj) {

            console.debug(obj);

            /*
            var obj = {
                inputs : [
                                {
                                    inputName : 'inputName1', //輸入框name
                                    trimSpace : true, //是否離開輸入框過濾空白
                                    convertFullWidth : true, //是否離開輸入框後半形轉全形
                                    focusClearVal : true //是否點擊時清空值，離開後若沒改過則還原
                                },
                                {
                                    inputName : 'inputName1',
                                    trimSpace : true,
                                    convertFullWidth : true,
                                    focusClearVal : true
                                }
                        ]
            };
            */

            $.each(obj.inputs, function(i, obj) {

                obj = $.extend({
                    trimSpace: false,
                    convertFullWidth: false,
                    focusClearVal: false
                }, obj);

                console.debug(obj);

                var name = obj.inputName;
                var trimSpace = obj.trimSpace;
                var convertFullWidth = obj.convertFullWidth;
                var focusClearVal = obj.focusClearVal;

                var input = $('input[name="' + name + '"][type="text"]');

                //去掉disabled
                if (!input.is(':disabled')) {

                    console.debug(name + ':' + input.length);


                    //如果有需要點擊空白，離開後判斷是否有修改過，就要綁onFocus事件
                    if (focusClearVal) {
                        input.on('focus', function() {
                            var val = input.val();
                            console.debug('val = ' + val);

                            //先把值存下來
                            input.attr('original', val);

                            //清空值
                            input.val('');
                        });
                    }

                    input.on('blur', function() {
                        var val = input.val();
                        console.debug('val = ' + val);

                        //如果有需要點擊空白，離開後判斷是否有修改過，就要綁onFocus事件
                        var valIsChange = false;
                        if (focusClearVal) {
                            var original = input.attr('original');
                            //如果空白，就帶回原本的值
                            if (val == '') {
                                val = original;
                            } else {
                                valIsChange = true;
                            }
                        }

                        if (valIsChange) {
                            //去掉空白
                            if (trimSpace) {
                                val = GardenUtils.valid.removeSpace(val);
                            }

                            //半形轉全形
                            if (convertFullWidth) {
                                var after = '';
                                for (i = 0; i < val.length; i++) {
                                    if (val.charCodeAt(i) >= 33 && val.charCodeAt(i) <= 270) {
                                        after += String.fromCharCode(val.charCodeAt(i) + 65248);
                                    } else if (val.charCodeAt(i) == 32) {
                                        after += String.fromCharCode(12288);
                                    } else {
                                        after += val.substring(i, i + 1);
                                    }
                                }

                                val = after;
                            }
                        }

                        input.val(val);
                    });
                }
            });
        },
        convertThousandComma: function(number) {


            console.debug('convertThousandComma number = ' + number);

            var num = number.toString();
            var pattern = /(-?\d+)(\d{3})/;

            while (pattern.test(num)) {
                num = num.replace(pattern, "$1,$2");

            }
            return num;
        }
    },
    display: {
        
        buildMobileSelect: function buildMobileSelect(obj){
        /**
            var obj = {
                rootId : '',//根節點id
                startLevel : 3,//選單從哪一層開始長,
                target : obj, //選單append在哪一塊div上
                activePageId: '' //客製化頁面的上層 id
            };
            **/
            var rootId = obj.rootId;
            var startLevel = obj.startLevel;
            var target = obj.target;
            var activePageId = obj.activePageId;
            
            var siteMap = _ga.site.func_map;
            var apPageObj = window._ga.el.data('ap.page');
            
            if(apPageObj != undefined) {
                
                //先找到自己是哪一頁
                var pageId = apPageObj['id'];
                var me = siteMap.find('[page="'+pageId+'"]');
                
                //如果找不到這一頁，就直接回去了
                if(me.length == 0 && activePageId == '' ) {
                    console.debug('cannot find current page from sitemap[pageId='+pageId+']');
                }
                else {

                    if(me.length == 0){
                        me = siteMap.find('[page="'+activePageId+'"]');
                        console.log('me: ', activePageId, me);
                    }

                    var id = me.attr('id');
                    var level = _pageLevel(id,1,rootId);
                    
                    //算距離差幾層
                    var range = level - startLevel;
                    
                    if( target.find('.mobile_menu').length > 0 ) target.find('.mobile_menu').remove();
                    var mobileMenu = $('<div class="mobile_menu" />');
                    
                    //用差幾層來往推幾層，並長出對應的下拉選單
                    console.debug('range = ' + range);
                    if(range >= 0) {
                        
                        //開始長父層選單
                        console.debug('start create parent select');
                        
                        var mainParent = me;
                        //for(var i=0;i<=range;i++) {
                        for(var i=range;i>=0;--i) {
                            var mainParentFuncId = mainParent.attr('id');
                            mainParent = mainParent.parent();
                            
                            //長選單
                            var select = $('<select class="selectpicker" level="'+(i)+'" ></select>');
                            var options = _getOptions(mainParent.children());
                            select.empty().append(options);
                            
                            //帶入預設值
                            select.find('[value="'+mainParentFuncId+'"]').prop('selected',true);
                            
                            select.off('change').on('change',_selectChangeHandler);
                            
                            select.prependTo(mobileMenu);
                        }
                    }
                    
                    //開始長子層選單
                    console.debug('start create children select');
                    if(me.children().length != 0) {
                        var childSelect = $('<select class="selectpicker" level="'+(range+1)+'"></select>');
                        var childOptions = _getOptions(me.children());
                        
                        childSelect.append('<option>請選擇</option>'+childOptions);
                        childSelect.off('change').on('change',_selectChangeHandler);
                        childSelect.appendTo(mobileMenu);
                    }
                    
                    //長在目標空間
                    mobileMenu.appendTo(target);
                    
                    //設定一開始的寬度
                    _setMobileSelectStyle();
                }

            }
            
            
            function _getOptions(nodeArray){
                var chi = '';
                if(nodeArray.length!=0){
                    nodeArray.each(function(){
                        var name = $(this).attr("name");
                        var id = $(this).attr("id");
                        var pageId = $(this).attr("page");

                        chi = chi + '<option value="'+id+'">'+name+'</option>';
                    });
                }
                return chi;
            }

            function _pageLevel(id,count,rootId){
                var parent = siteMap.find('#' + id).parent();
                // var child = siteMap.find("#"+pageId).children();
                if(parent.attr('id') != rootId){
                    count = _pageLevel(parent.attr("id"),count,rootId);
                    count++
                }

                return count;
            }
            
            function _selectChangeHandler(e) {
            

                var select = $(this);
                var id = select.val();
                var page = siteMap.find('#' + id).attr('page');
                var url = siteMap.find('#' + id).attr("url");
                var level = select.attr('level');
                
                console.debug('id = ' + id);
                console.debug('page = ' + page);
                console.debug('url = ' + url);
                console.debug('level = ' + level);
                
                //如果有設URL就直接連出去
                if(url != undefined && url != '') {
                    if(url.substr(0,2) == '#!') {
                        var href = url.substr(2,url.length-2);
                        if(href.indexOf('?') != -1) {
                            url = href.substr(0,href.indexOf('?')) + '.html' + href.substring(href.indexOf('?'),href.length);
                        }
                        else {
                            url = href + '.html';
                        }
                    }
                
					if(url.indexOf('http') != -1 || url.indexOf('_resource') != -1) {
						$('a[href="'+url+'"][target="_blank"]:first')[0].click();
					}
					else {
						location.href = url;
					}
				
                    
                }
                else {
                    //如果有頁面就連過去
                    if(page!=''&&page!=undefined){  
                        // location.href = "#!"+page;
                        location.href = page+'.html';
                    }
                    else{
                        //如果什麼都沒有就是長下一層
                        
                        //先把目前這層底下的清單清空
                        $('.mobile_menu select.selectpicker').each(function(){
                            var selectpicker = $(this);
                            var selectLevel = selectpicker.attr('level');
                            
                            if(parseInt(selectLevel) > parseInt(level)) {
                                selectpicker.remove();
                            }
                        });
                        
                        var childSelect = $('<select class="selectpicker" level="'+(parseInt(level)+1)+'"></select>');
                        var childOptions = _getOptions(siteMap.find('#' + id).children());
                        var option = '<option>請選擇</option>' + childOptions;
                        console.debug('option:'+option);

                        childSelect.off('change').on('change',_selectChangeHandler);
                        childSelect.append(option);
                        childSelect.appendTo($('.mobile_menu'));
                        
                        //重算寬度
                        _setMobileSelectStyle();
                    }
                }
                
                
                
            }
            
            function _setMobileSelectStyle(){
                
                var totalSelectSize = $('.mobile_menu select.selectpicker').length;
                var index = totalSelectSize-2;
                
                
                $.each($('.mobile_menu select.selectpicker'),function(i,selectpicker){
                    selectpicker = $(selectpicker);
                    
                    var classVal = 'col-xs-12';
                    if(index >= 0 && i >= index) {
                        classVal = 'col-xs-6';
                    }
                    
                    selectpicker.removeClass().addClass('selectpicker').addClass(classVal);
                });
            }
        },
        paging: function g_paging(obj) {
            // g_paging({
            //    pageInfo: obj.pageInfo                //分頁資料(包含總頁數totalPage, 當前頁碼currentPage, 總資料數totalRec)
            //    pageNumberDivClass: numberClass,       //分頁的數字及"上一頁"和"下一頁"所放的div之class
            //    getPageInfoCallBackFn : function(){}  //點分頁後要的function(會自動傳page參數)
            // });
            
            if(obj !== undefined ){
                var pageNumberDivClass = (obj.pageNumberDivClass == undefined)?'':obj.pageNumberDivClass;
                GardenUtils.display.pagination({
                    pageInfo: obj.pageInfo,
                    target: $('.' + pageNumberDivClass),
                    getPageInfoCallBackFn: function(pageNum){
                        obj.getPageInfoCallBackFn(pageNum);
                    }
                });
            /*  var totalPage = (obj.pageInfo.totalPage == undefined)?0:parseInt(obj.pageInfo.totalPage);
                var currentPage = (obj.pageInfo.currentPage == undefined)?0:parseInt(obj.pageInfo.currentPage);
                var totalRec = (obj.pageInfo.totalRec == undefined)?0:parseInt(obj.pageInfo.totalRec);
                var pageNumberDivClass = (obj.pageNumberDivClass == undefined)?'':obj.pageNumberDivClass;
                var getPageInfoCallBackFn = (obj.getPageInfoCallBackFn == undefined)?'':obj.getPageInfoCallBackFn;

                console.debug(getPageInfoCallBackFn);

                var pageNumberDiv = $('.' + pageNumberDivClass);
                var pageAreaArray = [];
                var pageNumberArray = [];
                
                //若分頁數超過10頁,則要長"上一頁"和"下一頁"
                if (totalPage > 10) {
                    pageAreaArray.push('<a href="#" rel="prev" class="prev">上一頁</a>' +
                        '<ul class="pageNumber"></ul>' +
                        '<a href="#" rel="next" class="next">下一頁</a>');

                }
                //否則就不用長"上一頁"和"下一頁"
                else {
                    pageAreaArray.push('<ul class="pageNumber"></ul>');

                }
                pageNumberDiv.empty();
                
                pageNumberDiv.append(pageAreaArray.join(''));
                var pageNumberUL = $('.pageNumber'); //放分頁數字的UL元素
                

                //長page的數字
                console.debug(totalPage);
                for (var n = 1; n <= totalPage; n++) {
                    //console.debug(n);
                    pageNumberArray.push('<li class="numberOfPage" id="number' + n + '"><a href="#">' + n + '</a></li>');
                }
                
                pageNumberUL.append(pageNumberArray.join(''));
                var numberOfPage = $('.numberOfPage'); //放分頁數字的LI元素
                
                showNumber(totalPage,currentPage,(currentPage-5),(totalPage-(currentPage + 4)),currentPage)
                $('#number' + currentPage).show();

                //按分頁數字時的事件
                numberOfPage.off('click').on('click', function(ev) {
                    ev.preventDefault();

                    var $this = $(this);
                    console.debug($this);
                    var index = $this.find('a').text(); //按的分頁數字
                    console.debug(index);
                    var dataArray = [];
                    var indexNumber = parseInt(index);
                    var preNumber = indexNumber - 5; //判斷當前頁面前面是否還有五頁以上
                    var nextNumber = totalPage - (indexNumber + 4); //判斷當前頁面後面是否還有4頁以上

                    getPageInfoCallBackFn(index);
                    
                    console.debug(index);
                    
                    showNumber(totalPage,index,preNumber,nextNumber,indexNumber)
                    
                    $('#number' + indexNumber).show();

                    //先將全部頁面的數字的active拿掉, 再將當下頁面的數字加上active
                    //numberOfPage.removeClass('active');
                    //$this.addClass('active');
                    
                });

                //按上一頁
                $('.prev').off('click').on('click', function(ev) {
                    ev.preventDefault();

                    var activePage = 0;

                    $.each(numberOfPage, function(index, ele) {
                        var ele = $(ele);
                        if (ele.hasClass('active')) {
                            console.debug(index);
                            activePage = index;
                        }
                    })

                    $('#number' + activePage).trigger('click');
                });

                //按下一頁
                $('.next').off('click').on('click', function(ev) {
                    ev.preventDefault();

                    var activePage = 0;

                    $.each(numberOfPage, function(index, ele) {
                        var ele = $(ele);
                        if (ele.hasClass('active')) {
                            console.debug(index);
                            activePage = index + 2;
                        }
                    })
                    $('#number' + activePage).trigger('click');
                });
            */
            }

            /*function showNumber(totalPage,index,preNumber,nextNumber,indexNumber){
                console.debug(index);
                
                //先隱藏全部的分頁數字
                    for (var k = 1; k <= totalPage; k++) {
                        $('#number' + k).hide();
                    }

                    //若分頁大於10, 則需要多判斷何時隱藏"上一頁"或"下一頁"
                    if (totalPage > 10) {
                        var totalPageString = '' + totalPage;
                        
                        if (index == '1') { //若當前頁是在第一頁, 則隱藏"上一頁"
                            $('.prev').hide();
                            $('.next').show();
                        } else if (index == totalPage) { //若當前頁是在最後一頁, 則隱藏"下一頁"
                            $('.next').hide();
                            $('.prev').show();
                        } else {
                            $('.prev').show();
                            $('.next').show();
                        }

                        //若當前頁面前面沒有五頁以上,則顯示1~10頁的數字
                        if (preNumber <= 0) {
                            for (var j = 1; j <= 10; j++) {
                                $('#number' + j).show();
                            }
                        }
                        //再檢查當前夜後面有沒有四頁以上
                        else {
                            //若
                            if (nextNumber < 0) {
                                for (var j = totalPage; j >= ((totalPage-10)+1); j--) {
                                    $('#number' + j).show();
                                }
                            }
                            //否則顯示當前頁的前五頁和後四頁的數字
                            else {
                                for (var i = 1; i <= 5; i++) {
                                    var preShowingNumber = indexNumber - i;
                                    var nextShowingNumber = indexNumber + i;

                                    $('#number' + preShowingNumber).show();
                                    if (i !== 5) {
                                        $('#number' + nextShowingNumber).show();
                                    }
                                }
                            }
                        }
                    }
                    //若分頁小於10, 則全部顯示
                    else {
                        for (var k = 1; k <= totalPage; k++) {
                            $('#number' + k).show();
                        }
                    }
                    
                    //先將全部頁面的數字的active拿掉, 再將當下頁面的數字加上active
                    $('.numberOfPage').removeClass('active');
                    $('#number'+index).addClass('active');
                    
            }*/


        },

        pagination: function(obj) {
            //    pageInfo: obj.pageInfo                //分頁資料(包含總頁數totalPage, 當前頁碼currentPage, 總資料數totalRec)
            //    target: jquery ele,                   //分頁的擺放位置
            //    getPageInfoCallBackFn : function(){}  //點分頁後要的function(會自動傳page參數)
            //    maxPage: 5                            //一次顯示幾頁
            //    hasGoToPage: false                    //是否顯示跳到第幾頁
            
            
            if(obj !== undefined ){
                var totalPage = (obj.pageInfo.hasOwnProperty('totalPage') == false)?0:parseInt(obj.pageInfo.totalPage);
                var currentPage = (obj.pageInfo.currentPage == undefined)?0:parseInt(obj.pageInfo.currentPage);
                var totalRec = (obj.pageInfo.totalRec == undefined)?0:parseInt(obj.pageInfo.totalRec);
                var getPageInfoCallBackFn = (obj.getPageInfoCallBackFn == undefined)?'':obj.getPageInfoCallBackFn;
                var maxPage = (obj.maxPage == undefined)? 5:obj.maxPage;
                var hasGoToPage = (obj.hasGoToPage == undefined)? false:obj.hasGoToPage;
				var autoTriggerFirst = (obj.autoTriggerFirst == undefined) ? true:obj.autoTriggerFirst;

                console.debug(getPageInfoCallBackFn);

                var target = $(obj.target);
                var pageNumberDiv = $('<div class="page_control col-xs-12 center"></div>').appendTo( target );
                if( totalPage > maxPage && hasGoToPage ){
                    pageNumberDiv.addClass('col-md-8');
                    var gotoPageDiv = $('<div class="page_jump_control col-xs-12 col-md-4">'
                        +'<div class="sharepage pull-right center">直接到第'
                        +'<select class="n-form-select w100 gotopage"></select>'
                        +'頁</div></div>').appendTo( target );
                } // end if: has go to page
                var pageAreaArray = [];
                var pageNumberArray = [];
                
                //若分頁數超過 maxPage 頁,則要長"上一頁"和"下一頁"
                if (totalPage > maxPage) {
                    pageAreaArray.push('<a href="#" rel="prev" class="prev">上一頁</a>' +
                        '<ul class="pageNumber"></ul>' +
                        '<a href="#" rel="next" class="next">下一頁</a>');

                }
                //否則就不用長"上一頁"和"下一頁"
                else {
                    pageAreaArray.push('<ul class="pageNumber"></ul>');

                }
                pageNumberDiv.empty();

                if( totalPage > 1 ){
                    pageNumberDiv.append(pageAreaArray.join(''));
                    var pageNumberUL = target.find('.pageNumber'); //放分頁數字的UL元素
                    var pageNumberSelect = target.find('.gotopage'); //放分頁數字的 select 元素                    

                    //長page的數字
                    console.debug(currentPage, totalPage);
                    // for (var n = parseInt(currentPage); n <= totalPage; n++) {
                    for (var n = 1; n <= totalPage; n++) {
                        //console.debug(n);
                        pageNumberArray.push('<li class="numberOfPage" id="number' + n + '"><a href="#">' + n + '</a></li>');
                        pageNumberSelect.append('<option value="'+n+'">'+n+'</option>');
                    }
                    
                    pageNumberUL.append(pageNumberArray.join(''));
                    var numberOfPage = target.find('.numberOfPage'); //放分頁數字的LI元素

                    showNumber(target, totalPage,currentPage,(currentPage-(maxPage/2)),(totalPage-(currentPage + (maxPage/2 - 1))),currentPage);
                    //pageNumberUL.find('#number' + currentPage).show();
                
                        
                    //按分頁數字時的事件
                    numberOfPage.off('click').on('click', function(ev) {
                        ev.preventDefault();

                        var $this = $(this);
                        console.debug($this);
                        var index = $this.find('a').text(); //按的分頁數字
                        console.debug(index);
                        var dataArray = [];
                        var indexNumber = parseInt(index);
                        var preNumber = indexNumber - (maxPage/2); //判斷當前頁面前面是否還有五頁以上
                        var nextNumber = totalPage - (indexNumber + (maxPage/2 -1)); //判斷當前頁面後面是否還有4頁以上

                        getPageInfoCallBackFn(index);
                        

                        if( totalPage > maxPage && indexNumber > (maxPage/2) ){

                            pageNumberUL.find('.numberOfPage').each(function(){
                                var num = parseInt($(this).text());
                                if( num < preNumber ){
                                    $(this).hide();
                                }
                            });
                        } else if( totalPage > maxPage && indexNumber <= (maxPage/2) ){
                            pageNumberUL.find('.numberOfPage').each(function(){
                                var num = parseInt($(this).text());
                                if( num > maxPage ){
                                    $(this).hide();
                                }
                            });
                        }

                        //pageNumberUL.find('.numberOfPage').hide();
                        
                        //console.log('yooo', totalPage,index,preNumber,nextNumber,indexNumber);

                        showNumber(target, totalPage,index,preNumber,nextNumber,indexNumber, maxPage);
                        
                        pageNumberUL.find('#number' + indexNumber).show();

                        //先將全部頁面的數字的active拿掉, 再將當下頁面的數字加上active
                        numberOfPage.removeClass('active');
                        $this.addClass('active');

                        var window_w = $(window).width();
                        //if( window_w < 769 ){
                            GardenUtils.plugin.screenMoveToEle({
                                moveToObj: $('.eva_content').first(),
                                minHeight: 70
                            });
                        //}
                        
                    });
                    
                    //pageNumberUL.find('#number1').trigger('click');
					//numberOfPage.first().addClass('active');
					if(autoTriggerFirst && currentPage == 1) {
						numberOfPage.first().trigger('click');
					} else if(currentPage != 1){
                        pageNumberUL.find('#number' + currentPage).trigger('click');
                    }
                    //按上一頁
                    target.find('.prev').off('click').on('click', function(ev) {
                        ev.preventDefault();
                        
                        var activePage = 0;

                        $.each(numberOfPage, function(index, ele) {
                            var ele = $(ele);
                            if (ele.hasClass('active')) {
                                console.debug(index);
                                activePage = parseInt(ele.children().text())-1; //index;
                            }
                        })

                        pageNumberUL.find('#number' + activePage).trigger('click');
                    });

                    //按下一頁
                    target.find('.next').off('click').on('click', function(ev) {
                        ev.preventDefault();
                        
                        var activePage = 0;

                        $.each(numberOfPage, function(index, ele) {
                            var ele = $(ele);
                            if (ele.hasClass('active')) {
                                console.debug(index, ele, ele.children().text());
                                activePage = parseInt(ele.children().text())+1; //index + 2;
                            }
                        })
                        pageNumberUL.find('#number' + activePage).trigger('click');
                    });

                    target.find('select.gotopage').on('change', function(){
                        target.find('#number'+$(this).val()).trigger('click');
                    });

                    var page_resize_trigger = function(){
                        var window_w = $(window).width();

                        if( window_w < 769 ){
                            target.find('.prev, .next').text('');
                        } else {
                            target.find('.prev').text('上一頁');
                            target.find('.next').text('下一頁');
                        }
                    };

                    var page_resize = function(){
                        $(window).resize(function(){
                            page_resize_trigger();
                        });
                    };

                    page_resize_trigger();

                    // $(window).resize();
                } else {
					if(autoTriggerFirst) {
						getPageInfoCallBackFn(1);
					}
                }
            }

            function showNumber(target, totalPage,index,preNumber,nextNumber,indexNumber, maxPage){
                console.debug(index);
                
                //先隱藏全部的分頁數字
                    for (var k = 1; k <= totalPage; k++) {
                        target.find('#number' + k).hide();
                    }

                    //若分頁大於 maxPage, 則需要多判斷何時隱藏"上一頁"或"下一頁"
                    if (totalPage > maxPage) {
                        var totalPageString = '' + totalPage;
                        
                        if (index == '1') { //若當前頁是在第一頁, 則隱藏"上一頁"
                            target.find('.prev').hide();
                            target.find('.next').show();
                        } else if (index == totalPage) { //若當前頁是在最後一頁, 則隱藏"下一頁"
                            target.find('.next').hide();
                            target.find('.prev').show();
                        } else {
                            target.find('.prev').show();
                            target.find('.next').show();
                        }

                        //若當前頁面前面沒有五頁以上,則顯示1~10頁的數字
                        if (preNumber <= 0) {
                            for (var j = 1; j <= maxPage; j++) {
                                target.find('#number' + j).show();
                            }
                        }
                        //再檢查當前夜後面有沒有四頁以上
                        else {
                            //若
                            if (nextNumber < 0) {
                                for (var j = totalPage; j >= ((totalPage-maxPage)+1); j--) {
                                    target.find('#number' + j).show();
                                }
                            }
                            //否則顯示當前頁的前五頁和後四頁的數字
                            else {
                                for (var i = 1; i <= (maxPage/2); i++) {
                                    var preShowingNumber = indexNumber - i;
                                    var nextShowingNumber = indexNumber + i;

                                    target.find('#number' + preShowingNumber).show();
                                    if (i !== (maxPage/2)) {
                                        target.find('#number' + nextShowingNumber).show();
                                    }
                                }
                            }
                        }
                    }
                    //若分頁小於10, 則全部顯示
                    else {
                        for (var k = 1; k <= totalPage; k++) {
                            target.find('#number' + k).show();
                        }
                    }
                    
                    //先將全部頁面的數字的active拿掉, 再將當下頁面的數字加上active
                    target.find('.numberOfPage').removeClass('active');
                    target.find('#number'+index).addClass('active');
            }
        },

        popup: function(obj) {
            /**
             var obj = {
                title : '我是標題',
                content : '我是內容',
                closeCallBackFn : function(){popupView},
                showCallBackFn : function(){popupView},
                isShowSubmit : true,
                isShowClose : true,
                closeText : true,
                submitText: true
                styleCSS:''
                popupSize:'' // or large, or small,
                headerClass: 'popup_header_red'
            };
             **/

            //default
            if (obj.isShowClose == undefined) {
                obj.isShowClose = true;
            }

            var closeText = '確定';
            if (obj.closeText !== undefined && obj.closeText !== false) { //如果沒有給obj.closeText 的值, 按鈕的文字就叫"確定", 否則叫"取消"
                closeText = '取消';
            }

            var submitText = '確認';
            if (obj.submitText !== undefined && obj.submitText !== false) { //如果沒有給obj.submitText 的值, 按鈕的文字就叫"確認", 否則叫"確定"
                submitText = '確定';
            }

            if (obj.styleCSS == undefined) {
                obj.styleCSS = '';
            }

            if( obj.headerClass == undefined ){
                obj.headerClass = 'popup_header_red';
            }

            var submitButton = obj.isShowSubmit ? '<button type="button" class="btn btn-primary">' + submitText + '</button>' : '';
            var closeButton = obj.isShowClose ? '<button type="button" class="btn btn-default" data-dismiss="modal">' + closeText + '</button>' : '';

            var popupSize = (obj.hasOwnProperty('popupSize')?(obj.popupSize=='large'?'modal-lg':'modal-sm'):'');
            var popupView = $('<div class="modal fade" id="_popup"><div class="modal-dialog '+popupSize+'" style="' + obj.styleCSS + '"><div class="modal-content"><div class="modal-header '+obj.headerClass+'"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">' + obj.title + '</h4></div><div class="modal-body">' + obj.content + '</div><div class="modal-footer">' + closeButton + submitButton + '</div></div></div></div>').appendTo($('body'));

            popupView.on('hidden.bs.modal', function(e) {
                console.debug('====close modal=====');
                popupView.remove();

                if (obj.closeCallBackFn != undefined) {
                    obj.closeCallBackFn.apply(window, [popupView]);
                }
            });

            popupView.on('shown.bs.modal', function(e) {
                console.debug('====init modal=====');
				
				//2018/11/07 added by titan 為了配合Bootstrap升級要把modal fade跟modal-backdrop fade加上in的class
				$('.modal.fade.show').addClass('in');
				$('.modal-backdrop.fade.show').addClass('in');
				
                if (obj.showCallBackFn != undefined) {
                    obj.showCallBackFn.apply(window, [popupView]);
                }
            });

            popupView.modal('toggle');
            popupView.find('.modal-dialog').css('z-index', 9999);

        },
        setContent: function(json, formplace) {

            var tableHtml = this.toHtml(json);
            $(formplace).html(tableHtml);

        },

        getRowHtml: function(rows, tag) {

            var cutomize = {
                inputbox: function(text, rowIndex) {
                    return '<input type="text" value="' + text + '"></input>';
                },
                textarea: function(text, rowIndex) {
                    return '<textarea type="text" rows="4" cols="50">' + text + '</textarea>';
                },
                select: function(text, rowIndex) {
                    return '<select type="text" value="' + text + '"></select>';
                },
                img: function(text, rowIndex) {
                    return '<img src="' + text + '">';
                },
                label: function(text, rowIndex) {
                    return '<label>' + text + '</label>';
                },
                hyperlink: function(text, rowIndex) {
                    return '<a href="#">' + text + '</a>';
                }

            };

            var rowArr = [];
            $.each(rows, function(idx, objArr) {
                var datas = [];
                // console.debug(objArr);
                $.each(objArr, function(i, obj) {
                    // console.debug(obj);
                    var text = obj.text;
                    var colspan = obj.colspan;
                    var rowspan = obj.rowspan;
                    var id = obj.id;
                    var type = obj.type;
                    var pushData = '';
                    if (tag != 'th') {
                        if (cutomize[type] != undefined) {
                            pushData += cutomize[type].apply(window, [text]);
                        } else {
                            pushData += text;
                        }
                    } else {
                        pushData += text;
                    }

                    datas.push('<' + tag + ' colspan="' + colspan + '" rowspan="' + rowspan + '" tagId="' + id + '">' + pushData + '</' + tag + '>');
                });
                // console.debug(datas.join(''));
                rowArr.push('<tr>' + datas.join('') + '</tr>');
            });
            return rowArr.join('');
        },
        toHtml: function(beanJson) {
            var fux = this;
            var ret;
            var navLiArr = [];
            var tableArr = [];

            var tableBean = beanJson.table;
            if (!(tableBean instanceof Array)) {
                tableBean = [tableBean];
            }

            $.each(tableBean, function(idx, tableObj) {
                var beanId = tableObj.beanId;
                var title = tableObj.title;
                var rows = tableObj.row;
                var titleRows = rows.title;
                var dataRows = rows.data;

                var navLi = '<li><a data-toggle="pill" href="#' + beanId + '">' + title + '</a></li>';
                var titleHtml = GardenUtils.display.getRowHtml(titleRows, 'th');
                var dataHtml = GardenUtils.display.getRowHtml(dataRows, 'td');
                var tableHtml = '<div id="' + beanId + '" class="tab-pane fade">' +
                    '<table class="table">' +
                    '<thead>' + titleHtml + '</thead>' +
                    '<tbody>' + dataHtml + '</tbody></table></div>';

                navLiArr.push(navLi);
                tableArr.push(tableHtml);
            });

            ret = '<div class="tab-content multiTable">' + tableArr.join('') + '</div>';
            if (tableArr.length > 1) {
                ret = '<div><ul class="nav nav-pills multiTableNav" role="tablist">' +
                    navLiArr.join('') + '</ul></div>' + ret;
            }
            ret = $('<div></div>').html(ret);
            ret.find('.multiTable > .tab-pane').eq(0).addClass('in active');
            ret.find('.multiTableNav > li').eq(0).addClass('active');
            return ret;
        }

    },
    ajax: {
        loading : function(config) {
		
			config = $.extend({
		        async: false,
				datatype : 'json',
				data : ''
		    }, config);
		
		    //顯示Ajax轉轉圖，另外讓主頁面hide	
		    $('#ga-starting').show();
			
			setTimeout(function() {
				$.ajax({
			        url: config.url,
		            data: config.data,
		            datatype: config.dataType,
		            async: config.async,
		            type: 'post',		        
			        success:function(json) {
			            //resp = json;
						try{
							config.callback(json);
						}catch(e) {
							console.debug(e);
						}
						$('#ga-starting').hide();
			        },
					error : function(){
						$('#ga-starting').hide();
					}
			    });
			},300);
			

		    
		},uploadFile: function(form, ajaxUrl, callbackFn) {
            var resp, data;

            //is Support AjaxUpload Function
            function isAjaxUploadSupported() {
                var input = document.createElement('input');
                input.type = 'file';

                return (
                    'multiple' in input &&
                    typeof File != 'undefined' &&
                    typeof FormData != 'undefined' &&
                    typeof(new XMLHttpRequest()).upload != 'undefined');
            }

            function getIframeContentJSON(iframe) {
                //IE may throw an "access is denied" error when attempting to access contentDocument on the iframe in some cases
                try {
                    var doc = iframe.contentWindow.document,
                        response;

                    var innerHTML = doc.body.innerHTML;
                    //plain text response may be wrapped in <pre> tag
                    if (innerHTML.slice(0, 5).toLowerCase() == "<pre>" && innerHTML.slice(-6).toLowerCase() == "</pre>") {
                        innerHTML = doc.body.firstChild.firstChild.nodeValue;
                    }

                    response = innerHTML;
                } catch (err) {
                    alert('IE getIframeContentJSON Error:' + err);
                    response = {
                        isSuccess: 'N'
                    };
                }

                return response;
            }

            if (!isAjaxUploadSupported()) {

                if (!isAjaxUploadSupported()) {
                    // Add event...
                    var response;

                    function eventHandlermyFile() {
                        response = getIframeContentJSON(iframeIdmyFile);

                        if (response != undefined && response != 'undefined') {
                            callbackFn.apply(this, [response]);
                        }
                    }

                    if ($('body iframe#upload_iframe_myFile').length != 0) {
                        $('body iframe#upload_iframe_myFile').remove();
                    }
                    var iframe = $('<iframe name="upload_iframe_myFile" id="upload_iframe_myFile">').prependTo($('body'));
                    iframe.attr('width', '0');
                    iframe.attr('height', '0');
                    iframe.attr('border', '0');
                    iframe.attr('src', 'javascript:false;');
                    iframe.hide();

                    iframe.on('load', function() {
                        eventHandlermyFile();
                    });

                    var iframeIdmyFile = document.getElementById("upload_iframe_myFile");

                    // create form
                    if ($('body form#upload_form').length != 0) {
                        $('body form#upload_form').remove();
                    }

                    form.append('<button type="submit" class="hidden"></button>');
                    form.attr('action', ajaxUrl);
                    form.attr('target', 'upload_iframe_myFile');
                    form.attr('enctype', 'multipart/form-data');
                    form.attr('encoding', 'multipart/form-data');
                    form.attr('method', 'post');
                    form.addClass('hidden');

                    form.submit();
                }

            } // end if: ie
            else {
                data = new FormData(form[0]);

                $.ajax({
                    async: false,
                    url: ajaxUrl,
                    data: data,
                    processData: false,
                    cache: false,
                    contentType: false,
                    type: 'POST',
                    success: function(data) {
                        //alert('success');
                        console.log('after post data = ', JSON.stringify(data));

                        callbackFn.apply(this, [data]);
                    },
                    error: function() {
                        alert('error');
                        callbackFn.apply(this, [$.parseJSON('{ "isSuccess": "N" }')]);
                    }
                });
            } // end else: not ie
        }

    }
};