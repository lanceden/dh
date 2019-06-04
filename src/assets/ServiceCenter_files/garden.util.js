/** © 2014 neux Date: 2014/1/7 by Vincent **/
(function( window , $ , undefined) {

    var Util = function($) {

        var util = {

            /**
             * 轉換XML跳脫字元
             * @param text
             * @return {String}
             */
            escapeXml: function escapeXml(text) {
                var ret = text + '';
                ret = ret.replace(/&/g, '&amp;');
                ret = ret.replace(/</g, '&lt;');
                ret = ret.replace(/>/g, '&gt;');
                return ret;
            },
            /**
             * 跳脫XML->HTML跳脫字元
             * @param text
             * @return {String}
             */
            escapeXmlHtml: function escapeXmlHtml(text) {
                var ret = text + '';
                ret = util.escapeXml(ret);
                ret = ret.replace(/&/g, '%26');
                ret = ret.replace(/;/g, '%3B');
                return ret;
            },
            /**
             * 還原XML跳脫字元
             * @param text
             * @return {String}
             */
            unEscapeXml: function(text) {
                var ret = text + '';
                ret = ret.replace(/&amp;/g, '&');
                ret = ret.replace(/&lt;/g, '<');
                ret = ret.replace(/&gt;/g, '>');
                return ret;
            },
            /**
             * 還原XML->HTML跳脫字元
             * @param text
             * @return {String}
             */
            unEscapeXmlHtml: function(text) {
                var ret = text + '';
                ret = ret.replace(/%26/g, '&');
                ret = ret.replace(/%3B/g, ';');
                ret = util.unEscapeXml(ret);
                return ret;
            },
            /**
             *
             * @param htmlString
             * @return {String}
             */
            multiLineTrim: function(htmlString) {
                var split = htmlString.split('\n'),
                    i = 0,
                    len = split.length;
                for (;i<len; i++) {
                    split[i] = $.trim(split[i]);
                }
                return split.join('');
//                return htmlString.split("\n").map($.trim).filter(function(line) { return line != "" }).join("");
            },
            /**
             * 轉換DOM成String
             * @param dom
             * @return {String}
             */
            parseDOM2String: function parseDOM2String(dom) {
                dom = $(dom);
                var text;
                if (window.XMLSerializer) {
                    text = new XMLSerializer().serializeToString(dom[0]);
                }
                //Internet Explorer
                else {
                    text = dom[0].xml;
                }
                return text;
            },
            /**
             * 轉換String成DOM
             * @param text
             * @return {jQuery|HTMLElement}
             */
            parseString2DOM: function parseString2DOM(text) {
                var xmlDoc = (typeof text == 'object' ? text : $(util._parseString2DOM(text)));
                return xmlDoc;
            },
            /**
             *
             * @param text
             * @return {jQuery|HTMLElement}
             * @private
             */
            _parseString2DOM: function _parseString2DOM(text, error) {
                error = (error || 'xml parse error');
                if ((!text || text == '') || text.indexOf('<') == -1) {
                    text = '<parserError>' + error + '</parserError>';
                }
                var xmlDoc;
                if (window.DOMParser) {
                    xmlDoc = new DOMParser().parseFromString(text, 'text/xml');
                }
                //Internet Explorer
                else {
                    xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
                    xmlDoc.async = 'false';
                    xmlDoc.loadXML(text);
                }
                try {
                    if ($.isXMLDoc(xmlDoc)) {
                        if ($('parsererror', xmlDoc).length != 0) {
                            xmlDoc = util._parseString2DOM('<parserError>' + error + '</parserError>');
                        }
                    }
                } catch(e) {
                    xmlDoc = util._parseString2DOM('<parserError>' + error + '</parserError>');
                }
                return xmlDoc;
            },
            /**
             *
             * @param parameterName
             * @return {Array}
             */
            getParameter: function getParameter(parameterName) {
                var queryString = window.top.location.search.substring(1),
                    values = [];
                if (queryString.length > 0 && parameterName) {
                    var params = queryString.split('&');
                    for (var i = 0; i < params.length; i++) {
                        var param = params[i].split('=');
                        if (param[0] == parameterName) {
                            values.push(param[1]);
                        }
                    }
                }
                return values;
            },
            getParameterNames: function getParameterNames() {
                var queryString = window.top.location.search.substring(1),
                    parameterNames = [];
                if (queryString.length > 0) {
                    var params = queryString.split('&');
                    for (var i = 0; i < params.length; i++) {
                        var param = params[i].split('=');
                        if ($.inArray(param[0], parameterNames) == -1) {
                            parameterNames.push(param[0]);
                        }
                    }
                }
                return parameterNames;
            },
            loadJS: function(url, async) {
                $.each($.makeArray(url), function(i, url){
                    var _URL = url,
                        update = _ga ? _ga.update : undefined;
                    // 增加更新代碼
                    if (update) {
                        _URL += (_URL.indexOf('?') == -1 ? '?' : '&') + 'v=' + update;
                    }
                    $.ajax({
                        url: _URL,
                        cache: true,
                        dataType: 'script',
                        async: (async ? async : false),
                        success: function() {
                            console.log('load js file ' + _URL + ' success.');
                        },
                        error: function(){
                            console.error('load js file ' + _URL + ' fail!');
                        }
                    });
                });
            },
            loadCSS: function(url) {
                var $root = $('head link:last');
                $root = $root.length ? $root : $('head');

                $.each($.makeArray(url), function(i, u) {
                    var $css;
                    var _URL = u,
                        update = _ga ? _ga.update : undefined;
                    // 增加更新代碼
                    if (update) {
                        _URL += (_URL.indexOf('?') == -1 ? '?' : '&') + 'v=' + update;
                    }

                    console.debug('utils load css:' + _URL);
                    $css = $('<link type="text/css" rel="stylesheet" href="' + _URL + '">').insertAfter($root);
                    $root = $css;
//                    var $style = $('<link type="text/css" rel="stylesheet" href="' + url + '">').insertAfter($root);
                });
            },

            dom: {
                createElement: function(tag, attr,text) {

//                    if(text == undefined) {
//                        text = '';
//                    }

                    return ('<' + tag + (attr ? ' ' + attr : '') + ' ></'+tag+'>');
                },
                input: {
                    hidden: 'hidden',
                    text: 'text',
                    radio: 'radio',
                    check: 'check'
                },
                createInput: function(type, name, value) {
                    return '<input type="' + type +'" name="' + name + '" value="' + value + '">';
                },
                createHidden: function(name, value) {
                    return util.dom.createInput(util.dom.input.hidden, name, value);
                },
                getSelfHtml: function(el) {
                    return $('<div></div>').append(el.clone()).html();
                },
                getAttributes: function(attrs) {
                    var obj = {},
                        len = attrs.length,
                        i = 0;
                    for (i; i<len; i++) {
                        var attr = attrs[i];
                        obj[attr.name] = attr.value;
                    }
                    return obj;
                },
                getAttributeString: function(attrs, filter) {
                    var ary = [],
                        i = 0;
                    for (var name in attrs) {
                        var value = attrs[name];
                        if (typeof filter == 'undefined' || filter.indexOf(name) < 0) {
                            ary.push(name + '="' + value + '"');
                        }
                    }
                    return ary.join(' ');
                }
            },

            event: {
                bind: function(el, type, target, handle, isOnly) {
                    util.event.unbind(el, type, target, (isOnly ? undefined : handle));

                    console.debug('garde.utils.js bind:' + el + ',' + type + ',' + target);

                    if (target) {
                        el.on(type, target, handle);
                    } else {
                        el.on(type, handle);
                    }
                },
                unbind: function(el, type, target, handle) {
                    if (target) {
                        el.off(type, target, handle);
                    } else {
                        el.off(type, handle);
                    }
                },
                on: function(el, type, target, handle, isOnly) {
                    if (typeof type == 'object') {
                        var events = type;
                        for (var k in events) {
                            var ev = events[k];
                            util.event.on(el, ev.type, ev.target, ev.handle, ev.isOnly);
                        }
                    } else {
//                        console.debug('on ' + type + ',' + target + ',' + handle);
                        util.event.bind(el, type, target, handle, isOnly);
                    }
                },
                off: function(el, type, target, handle) {
                    if (typeof type == 'object') {
                        var events = type;
                        for (var k in events) {
                            var ev = events[k];
                            util.event.off(el, ev.type, ev.target, ev.handle)
                        }
                    } else {
                        util.event.unbind(el, type, target, handle);
                    }
                },
                execute: function(event, el) {
                    if(event != undefined) {
                        var ev = $.makeArray(event),
                            i = 0,
                            len = ev.length;
                        for (; i<len; i++) {
//                            console.debug('utils execute event function->' + ev[i]);

                            var start = $.now();
                            ev[i].apply(el || window, []);
                            console.log('execute event total = ' + ($.now() - start));
                        }
                    }

                },
                imgLoaded: function(el, fn) {
                    var $img = el.find('img'),
                        $notLoaded = $img.filter(function(index){
                            return !this.complete;
                        }),
                        total = $notLoaded.length;
                    if (total > 0) {
                        $img.on('load', function(ev){
                            if (--total == 0) {
                                fn.apply(window, [el, $img]);
                            }
                        });
                    } else {
                        fn.apply(window, [el, $img]);
                    }
                }
            },

            ui: {
                posCenter: function(elem, w_zoom, h_zoom, isFixed) {
                    var $win = $(window),
                        _ww = $win.width(),
                        _wh = $win.height(),
                        _sw = elem.width(),
                        _sh = elem.height(),
                        _sow = elem.outerWidth() > elem.outerWidth(true) ? elem.outerWidth() : elem.outerWidth(true),
                        _soh = elem.outerHeight() > elem.outerHeight(true) ? elem.outerHeight() : elem.outerHeight(true),
                        _zw, _zh, _zow, _zoh,
                        _top, _left;
                    // 取得container內外差(margin+border+padding+content)
                    _zow = _sow - _sw;
                    _zoh = _soh - _sh;
                    // 取得縮放比例
                    w_zoom = w_zoom || (_ww >= 1024 ? 0.85 : 0.95);
                    h_zoom = h_zoom || (_wh >= 768 ? 0.85 : 0.9);
                    // window縮放比例後的大小
                    _zw = _ww * w_zoom;
                    _zh = _wh * h_zoom;
                    // 判斷用本體大小還是要用縮放大小
                    _sw = (_sw + _zow > _zw || isFixed ? _zw - _zow : _sw);
                    _sh = (_sh + _zoh > _zh || isFixed ? _zh - _zoh : _sh);
                    // 定位的左方與上方位置
                    _left = ((_ww - _sw  - _zow) / 2);
                    _top = (_sh + _zoh > _zh || isFixed ? ((_wh - _sh  - _zoh) / 2) : ((_wh - _sh  - _zoh) / 4));
                    // 處理css
                    elem.css({
                        left : _left,
                        top: _top,
                        width: _sw,
                        height: _sh
                    });

                    return {
                        window: {
                            width: _ww,
                            height: _wh
                        },
                        elem: {
                            width: _sw,
                            height: _sh,
                            outerWidth: _sow,
                            outerHeight: _soh
                        },
                        zoom: {
                            width: w_zoom,
                            height: h_zoom
                        }
                    };
                }
            },

            social: {

                FB: {
                    init: function(appId, fn) {
                        if (typeof(FB) === 'undefined') {
                            // create element
                            $('.ga-space').prepend('<div id="fb-root"></div>');
                            // script
                            window.fbAsyncInit = function() {
                                FB.init({
                                    appId      : appId,
                                    status     : true,
                                    xfbml      : true
                                });
                                if (fn) {
                                    fn.apply(window, []);
                                }
                            };
                            (function(d, s, id){
                                var js, fjs = d.getElementsByTagName(s)[0];
                                if (d.getElementById(id)) {return;}
                                js = d.createElement(s); js.id = id;
                                js.src = "//connect.facebook.net/en_US/all.js";
                                fjs.parentNode.insertBefore(js, fjs);
                            }(document, 'script', 'facebook-jssdk'));
                        } else {
                            if (fn) {
                                fn.apply(window, []);
                            }
                        }
                    },
                    share: function(config) {
                        var _default = {
                                method: 'feed',
                                caption: ''
                            }, _config;

                        _config = $.extend(_default, config);

                        console.debug(_config);

                        FB.ui(_config, function(response) {

                        });
                    }
                },

                GP: {
                    init: function() {

                        if (typeof(gapi) === 'undefined') {

//                            window.___gcfg = {
//                                parsetags: 'explicit'
//                            };

                            (function() {
                                var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
                                po.src = 'https://apis.google.com/js/plusone.js';
                                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
                            })();
                        }
                    },
                    share: function(url) {
                        window.open('https://plus.google.com/share?url=' + encodeURIComponent(url),
                            '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
                    }
                }
            }
        };

        window.utils = util;

        return util;
    };

    if ( typeof module === "object" && module && typeof module.exports === "object" ) {
        alert('not support commonJS');
    } else {
        if ( typeof define === "function" && define.amd ) {
            define( "garden.util", ['jquery'], function ($) { return Util($); } );
        } else {
            $.util = Util($);
        }
    }

})( window , (typeof jQuery == 'undefined' ? {} : jQuery) );