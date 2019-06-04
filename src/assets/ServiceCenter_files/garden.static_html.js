//for browser setting
var isCloseDebug = false;
if(window.console == undefined) {
	isCloseDebug = true;
}
else {
	if(window.location.href.indexOf('DEBUG=Y') == -1) {
		isCloseDebug = true;
	}
}

if(isCloseDebug) {
	var em = function(){};
    console = {log: em, debug: em, info: em, warn: em};
}


//for fix ie8 no Object.keys function
if (!Object.keys) {
    Object.keys = (function () {
        'use strict';
        var hasOwnProperty = Object.prototype.hasOwnProperty,
            hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
            dontEnums = [
                'toString',
                'toLocaleString',
                'valueOf',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'constructor'
            ],
            dontEnumsLength = dontEnums.length;

        return function (obj) {
            if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
                throw new TypeError('Object.keys called on non-object');
            }

            var result = [], prop, i;

            for (prop in obj) {
                if (hasOwnProperty.call(obj, prop)) {
                    result.push(prop);
                }
            }

            if (hasDontEnumBug) {
                for (i = 0; i < dontEnumsLength; i++) {
                    if (hasOwnProperty.call(obj, dontEnums[i])) {
                        result.push(dontEnums[i]);
                    }
                }
            }
            return result;
        };
    }());
}


if (typeof(Array.prototype.indexOf) === 'undefined') {
    Array.prototype.indexOf = function(obj, start) {
        for (var i = (start || 0), j = this.length; i < j; i++) {
            if (this[i] === obj) { return i; }
        }
        return -1;
    }
}

if(typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, '');
    }
}

//start init
var func_links = {};
var Util = window.utils;
var isAddressInit = false;
var urlPrefix = '/sklife_web/';
function _init_garden_static(callbackFn) {

    //get tpl
    tpl.init();


    //get sitemap
    $.ajax({
        async : false,
        url : 'sitemap.xml?v=' + new Date().getMilliseconds(),
        datatype : 'xml',
        success : function(xml) {

            var $xml = $(xml);

            window._ga.site.func_map = $xml;

            //merge link(func link & page link)
            $xml.find('func').each(function(i){
                var _elem = $(this),
                    id = _elem.attr('id'),
                    page = _elem.attr('page') || '';


                func_links['_' + id] = {"type": "page", "param": page};
            });

            //find list-view add change page event
//            $('.ga-view-list,.ga-view-table').each(function(){
//
//                _ga.page.links['_' + $(this).attr('view-id') + '_changePage'] = {
//                    param: $(this).attr('view-id'),
//                    type: 'view'
//                };
//            });


            func_links = $.extend(func_links, _ga.page.links);


            //binding event
            $('body').on('click','[data-ga-link]',_static_action);

            //2016-05-13 added by titan for ga-popup event

            $('[ga-popup]').click(function(ev){
                ev.preventDefault();

                console.debug('garden.controller:popup');

                var img = $(this);

                var popupView = $('<div class="modal fade" id="_popup"><div class="modal-dialog"><div class="modal-content"><img src="'+img.attr('src')+'"/></div></div></div>').appendTo($('body'));
                popupView.modal('toggle');
                popupView.find('.modal-dialog').css('z-index',9999);
                popupView.on('hidden.bs.modal', function (e) {
                    console.debug('====close modal=====');
                    popupView.remove();
                })
            });

            $.address.change(function(event) {

                var pageId = event.path.length < 3 ? 'home' : event.path.substr(2),
                    queryString = event.queryString,
                    dataId = [],
                    split;

                console.debug(isAddressInit);
                console.debug(event);


                if(pageId.indexOf('/') != -1) {
                    pageId = pageId.substr(0,pageId.indexOf('/'));
                }

                console.debug(pageId);

//                alert(pageId);
//                alert(isAddressInit);
                if(isAddressInit) {

                    if(pageId == 'index' || pageId == 'home') {
                        window.location = 'index.html';
                    }
                    else {

                        window.location = pageId + '.html?' + queryString;

                    }


                }
                else {

                    isAddressInit = true;


                }

            });

            //2016-09-06 added by titan 先把所有view抓回來
            var href = window.location.href;


            var param = href;
            if(param.indexOf('?') != -1) {
                param = param.substring(param.indexOf('?')+1);
            }

            //find detail-view,use ajax query data

            $('.ga-view-detail,.ga-view-embedded').each(function() {
                var $view = $(this);
                var viewId = $view.attr('view-id');


                if($view.hasClass('ga-view-detail')) {
                    $.ajax({
                        url : urlPrefix + 'garden?action=getView&viewId=' + viewId,
                        async : false,
                        data : param,
                        datatype : 'json',
                        success : function(json) {
                            json = $.parseJSON(json);

                            console.debug(json);

                            var content = json.views[0].data[0].content;
                            $view.append(content);

                            $view.find('[contenteditable]').removeAttr('contenteditable');

                            if(json.views[0].customize != '') {
                                try{
//                                            alert('1111');
                                    eval('_ga._customizeTemp = ' + json.views[0].customize + ';');
                                    var fn = _ga._customizeTemp;
                                    _ga._customizeTemp = undefined;
                                    // 執行客製script函式
                                    if (fn) {
                                        fn.apply(window, [$view, json.views[0]]);
                                    }
                                }catch(e) {
                                    console.debug('execute customize script error->' + e);
                                }
                            }
                        }
                    });
                }
                else {
                    var embadded = $view.find('p');
                    var embaddedURL = embadded.attr('data');
                    var embaddedMode = embadded.attr('mode');
                    var customize = embadded.text();

                    console.debug(customize);

                    //alert(embaddedMode);
                    if(embaddedMode == 'iframe') {

                        $view.append('<iframe frameBorder="0" allowtransparency="true" scrolling="no" style="overflow:hidden; border: #ffffff 1px solid;" src="'+embaddedURL+'?'+param+'"></iframe>');

                        if(customize != '') {
                            try{
//                                        alert('3333');
                                eval('_ga._customizeTemp = ' + customize + ';');
                                var fn = _ga._customizeTemp;
                                _ga._customizeTemp = undefined;
                                // 執行客製script函式
                                if (fn) {
                                    fn.apply(window, [$view]);
                                }
                            }catch(e) {
                                console.debug('execute customize script error->' + e);
                            }
                        }
                    }
                    else {
                        $.ajax({
                            url : urlPrefix + embaddedURL,
                            async : false,
                            data : param,
                            datatype : 'html',
                            success : function(html) {

                                $view.append('<div class="ga-body">'+html+'</div>');

                                if(customize != '') {
                                    try{
//                                                alert('4444');
                                        eval('_ga._customizeTemp = ' + customize + ';');
                                        var fn = _ga._customizeTemp;
                                        _ga._customizeTemp = undefined;
                                        // 執行客製script函式
                                        if (fn) {
                                            fn.apply(window, [$view]);
                                        }
                                    }catch(e) {
                                        console.debug('execute customize script error->' + e);
                                    }
                                }
                            }
                        });
                    }

                }

            });

            if(callbackFn != undefined) {

                callbackFn.apply(window,[]);

                replaceAllHyperlink();
                replaceDataGaLink();

                $('#ga-starting').hide();

            }


        }
    });


}

function replaceDataGaLink() {
    //2016-03-22 added by titan for replace data-ga-link to href
    $('a[data-ga-link]').each(function() {
        var a = $(this);
        var linkId = a.attr('data-ga-link');
        var queryString = a.attr('data-ga-query');
        var dataGaPage = a.attr('data-ga-page');

        //過濾掉分頁
        if(dataGaPage == undefined && linkId != 'search') {
            if(queryString == undefined) {
                queryString = '';
            }
//            console.debug('garden.static_html.js linkId = ' + linkId + ',queryString = ' + queryString);
//            console.debug('garden.static_html.js linkId = [' + linkId.substr(0,1) + ']');
            if(linkId.substr(0,1) == '_') {
//                console.debug('bingo');
                linkId = linkId.substr(1,linkId.length-1);
//                console.debug('garden.static_html.js after linkId = ' + linkId);
            }

//                    a.attr('href',linkId + '.html');
            var links = window._ga.page.links;
            var hyperlink = linkId;
            if(links[linkId] != undefined) {
                var type = links[linkId].type;
                var param = links[linkId].param;
                if(type == 'page') {
                    hyperlink = param;
                }
            }



            a.removeAttr('data-ga-link').attr('href',hyperlink + '.html?' + queryString).attr('data-ga-db','');
        }
    });
}

function replaceAllHyperlink() {
    //2016-03-24 added by titan
    $('a[href]').each(function() {
        var a = $(this);
        var href = a.attr('href');

        if(href.substr(0,2) == '#!') {

            console.debug(href);
            href = href.substr(2,href.length-2);

            var url = '';
            if(href.indexOf('.jsp') != -1) {
                url = href;
            }
            else if(href.indexOf('?') != -1) {
                var urlName = href.substring(0,href.indexOf('?'));
                if(urlName.indexOf('/') != -1) {
                    urlName = urlName.substring(0,urlName.indexOf('/'));
                }
                url = urlName + '.html' + href.substring(href.indexOf('?'),href.length);
            }
            else {
                url = href + '.html';
            }

            console.debug(url);

            a.attr('href',url);
        }

    });


    //2016-09-06 added by titan
    $('form[action]').each(function() {
        var form = $(this);
        var href = form.attr('action');

        if(href.substr(0,2) == '#!') {

            console.debug(href);
            href = href.substr(2,href.length-2);

            var url = '';
            if(href.indexOf('.jsp') != -1) {
                url = href;
            }
            else if(href.indexOf('?') != -1) {
                var urlName = href.substring(0,href.indexOf('?'));
                if(urlName.indexOf('/') != -1) {
                    urlName = urlName.substring(0,urlName.indexOf('/'));
                }
                url = urlName + '.html' + href.substring(href.indexOf('?'),href.length);
            }
            else {
                url = href + '.html';
            }

            console.debug(url);

            form.attr('action',url);
        }

    });
}

var _static_action = function(event) {

    event.preventDefault();

    var $this = $(this);
    console.debug($this);

    var page = $this.attr('data-ga-link');
    var linkId = $this.attr('data-ga-link');

    var _link = query(linkId, func_links);

    console.debug(_link);

    if (_link) {

        var type = _link.type,
            ids = _link.param,
            searchParam = _link.searchParam,
            displayType = _link.displayType,
            queryStr = $this.attr('data-ga-query');

        if(queryStr == undefined || queryStr == 'undefined') {
            queryStr = '';
        }

        if(searchParam != undefined) {
            queryStr += searchParam;
        }

        //2014-12-17 added-by query
        var queryArrays = $this.parents('.ga-view').find('[data-ga-query][data-ga-querymode]');
        var queryOrderArrays = $this.parents('.ga-view').find('[data-ga-orderby]');
        var linkQuery = $this.parents('.ga-view').find('[data-ga-link-query]');

        if(queryArrays.length != 0) {
            $.each(queryArrays,function(i,q){
                q = $(q);

                var searchValue = q.val();
                searchValue = encodeURI(searchValue);
                queryStr += '&search_index=' + q.attr('data-ga-query') + '&search_mode=' + q.attr('data-ga-querymode') + '&search_value=' + searchValue;
            });
        }

        if(queryOrderArrays.length != 0) {
            var orderBy = queryOrderArrays.val();
            if(orderBy != '') {
                queryStr += '&search_orderBy=' + orderBy;
            }
        }

        if(linkQuery.length != 0) {
            $.each(linkQuery,function(i,g){
                g = $(g);
                queryStr += '&' + g.attr('data-ga-link-query') + '=' + g.val();
            });
        }

        if(displayType == undefined) {
            displayType = 'default';
        }

        console.debug('type = ' + type);

        if(type == 'page') {
            window.location = _link.param + '.html?' + queryStr;
        }
        else if(type == 'view') {

            $this.parents('ul').find('li').removeClass('active');
            $this.parents('li:first').addClass('active');

            $.each(ids.split(','),function(i,viewId) {

                var view = _ga.el.find('#' + viewId);

                //ajax get view data
                var tempParam = [];
                tempParam.push(queryStr);

                _ga['viewData'] = {
                    paramMap : {}
                };

                queryStr = tempParam.join('&');

                var queryArray = queryStr.split("&");
                $.each(queryArray,function(i,queryString){

                    var key = queryString.split("=")[0];
                    var value = queryString.split("=")[1];

                    _ga.viewData.paramMap[key] = value;
                });

                console.debug('====>');
                console.debug(_ga.viewData.paramMap);

                var page = 1;
                if($this.attr('data-ga-page') != undefined) {
                    page = $this.attr('data-ga-page');
                }

                var _param = {
                        viewId: undefined,
                        page: 1
                    },
                    _resp,
                    i,
                    vLen,
                    pLen;
                // 處理viewId
                _param.viewId = $.makeArray(viewId);
                _param.page = $.makeArray(page);

                vLen = _param.viewId.length;
                pLen = _param.page.length;

                if (vLen < pLen) {  // 如果viewId比較少，要補足
                    var val = _param.viewId[vLen - 1];  // 拿最後一筆補
                    for (i=vLen; i<pLen; i++) {
                        _param.viewId.push(val);
                    }
                } else if(vLen > pLen) {
                    for (i=pLen; i<vLen; i++) {
                        _param.page.push(1);
                    }
                }

                $.ajax({
                    cache : false,
                    url: urlPrefix + 'garden?action=getView',
                    data: $.param(_param, true) +
                        (queryStr && queryStr.length > 0 ? '&' + queryStr : ''),
                    datatype : 'json',
                    success : function(json) {

                        json = $.parseJSON(json);
                        console.debug(json);

                        var views = json.views;

                        for (var i in views) {

                            var view = views[i];
                            // 綁換頁事件
                            if (view.page) {

//                                alert('_' + view.viewId + '_changePage');
//                                alert(queryStr);

                                func_links['_' + view.viewId + '_changePage'] = {
                                    param: view.viewId,
                                    type: 'view',
                                    searchParam : queryStr
                                };
//                                _ga.page.links['_' + view.viewId + '_changePage'] = {
//                                    param: view.viewId,
//                                    type: 'view',
//                                    searchParam : queryStr
//                                };


                            }

                            var viewType = view.type;
                            var coms = view.component;

                            if(viewType == undefined) {
                                continue;
                            }

                            // 長結構
                            var $view = $('#' + viewId);

                            // 清空內容
                            $view.empty();

                            $view.data('view.data', view);

                            // 建立結構
                            _garden_view[viewType].apply(window, [$view, view]);

                            $view.find('[contenteditable]').removeAttr('contenteditable');

                            $view.addClass('data-ga-view').addClass('data-ga-view-' + viewType).attr('view-id',viewId);

                            // 建立元件
                            buildComponent(coms, $view,view);

                            if(view.customize != '') {
                                try{
//                                    alert('222222');
                                    eval('_ga._customizeTemp = ' + view.customize + ';');
                                    var fn = _ga._customizeTemp;
                                    _ga._customizeTemp = undefined;
                                    // 執行客製script函式
                                    if (fn) {
                                        fn.apply(window, [$view, view]);
                                    }
                                }catch(e) {
                                    console.debug('execute customize script error->' + e);
                                }

                            }

                        }
                    }
                });

            });
        }
    }

};

var _garden_view = {
    'list': view_list,
    'table' :view_table,
    'embedded': view_embedded
};

window._ga.view = _garden_view;

var buildComponent = function(coms, view,viewData) {

    for (var name in coms) {
        if(name == 'splitPage') {
            var splitPage = new SplitPage();
            splitPage.execute(view,coms[name],viewData);
        }
    }



};

function SplitPage() {
    var attr_link = 'data-ga-link',
        attr_page = 'data-ga-page',
        attr_query = 'data-ga-query',
        html_option = '<li class="[class]"><a href="#" ' + attr_link + '="[link]" ' + attr_query + '="[queryString]" ' + attr_page + '="[page]">[text]</a></li>';

    var viewId;

    var $component,
        $el;

    function _buildPageInfo(el, totalData, totalPage,language) {

        var before = '';
        var after = '';

        if(language == 'zh_TW') {
            before = '共';
            after = '筆資料';
        }
        else if(language == 'en') {
            before = 'Total ';
            after = ' items';
        }

        el.append('<div class="info">' +
            '<p>' + before + totalData + after +'</p>' +
            '</div>');
    }

    function _getPageOptionHtml(klass, page, text,queryString) {
        return html_option.replace('[class]', klass).replace('[link]', '_' + viewId + '_changePage')
            .replace('[queryString]', queryString).replace('[page]', page).replace('[text]', text);
    }

    function _buildPageOption(el, pageNo, totalPage, maxShowOption,conf) {
        var html = [],
            start,
            end,
            i;

        //2014-10-13 added-by titan
        var prevClass = '',
            nextClass = '';

        if(conf.prevClass != undefined) {
            prevClass = conf.prevClass;
        }

        if(conf.nextClass != undefined) {
            nextClass = conf.nextClass;
        }

        // 若沒有設定預設一次最多10筆
        maxShowOption = maxShowOption || 10;
        // 計算開始結束區間
        start = pageNo;
        end = pageNo + maxShowOption - 1;
        // 如果end超過totalPage，則需要另外處理
        if (end > totalPage) {
            end = totalPage;
            start = totalPage - maxShowOption  -1;
            if (start < 1) {
                start = 1;
            }
        }

//            var tempParam = [];
        var apPageData = $('#wrapper').data('ap.page');
        var queryString = apPageData != undefined ? apPageData['query'] : '';
        console.debug('com.js queryString = ' + queryString);
//            if(_ga.viewData.paramMap != undefined) {
//                var keys = Object.keys(_ga.viewData.paramMap);
//                $.each(keys,function(i,key){
//                    var value = _ga.viewData.paramMap[key][0];
//
////                    console.debug('_ga.view');
////                    console.debug(key + '=' + value);
//
//                    tempParam.push(key + "=" + value);
//                });
//            }
//
//            if(_ga.page.paramMap != undefined) {
//                var keys = Object.keys(_ga.page.paramMap);
//                $.each(keys,function(i,key){
//                    var value = _ga.page.paramMap[key][0];
//
////                    console.debug('_ga.page');
////                    console.debug(key + '=' + value);
//                    tempParam.push(key + "=" + value);
//                });
//            }

//            var queryString = tempParam.join('&');
//            console.debug('queryString=' + queryString);

        // 判斷是否需要提供上一頁按鈕
        if (start > 1) {
            html.push(_getPageOptionHtml(prevClass, (pageNo - 1), '«',queryString));
        }
        // 頁面操作
        for (i = start; i <= end; i++) {
            html.push(_getPageOptionHtml('page' + (i == pageNo ? ' active' : ''), i, i,queryString));
        }
        // 判斷是否需要提供下一頁按鈕
        if (end + 1 <= totalPage) {
            html.push(_getPageOptionHtml(nextClass, (pageNo + 1), '»',queryString));
        }
        el.append('<ul class="pageList">' + html.join('') + '</ul>');
    }

    this.execute = function(view, conf, viewData) {

        console.debug(view);
        var data = viewData,
            page = data.page;

        viewId = view.attr('id');

        $component = view.find('.ga-footer .ga-component');
        $el = $('<div class="ga-com ga-com-splitPage"></div>').appendTo($component);

        console.debug('====== splitPage ======');
        console.debug(conf);
        console.debug(data);
//            console.debug(_ga.page.links);

        var language = conf['language'] == undefined ? 'zh_TW' : conf['language'];

        _buildPageInfo($el, page.totalData, page.totalPage,language);
        _buildPageOption($el, page.pageNo, page.totalPage, conf.maxShowOption,conf);
    };
}

var _loadJS = function(url, async) {
    var urls = $.makeArray(url);
    $.each(urls, function(i, url){
        var _URL = url,
            update = _ga ? _ga.update : undefined;
        // 增加更新代碼
        if (update) {
            _URL += (_URL.indexOf('?') == -1 ? '?' : '&') + 'v=' + update;
        }
        $.ajax({
            url: urlPrefix + _URL,
            cache: true,
            dataType: 'script',
            async: (async ? async : false),
            success: function() {
                _history[_URL] = true;
                console.log('load js file ' + _URL + ' success.');
            },
            error: function(){
                console.error('load js file ' + _URL + ' fail!');
            }
        });
    });
};

var _loadCSS = function(url) {
    var urls = $.makeArray(url);
    $.each(urls, function(i, url){
        var _URL = url,
            update = _ga ? _ga.update : undefined;
        // 增加更新代碼
        if (update) {
            _URL += (_URL.indexOf('?') == -1 ? '?' : '&') + 'v=' + update;
        }

        console.debug('library load css :' + _URL);
        Util.loadCSS(_URL);
    });

};

function view_list(el, conf) {

    var tplId = conf.tplId || 'list',
        title = conf.title || '',
        datas = $.makeArray(conf.data),
        tag = conf.tag || {},
        html = [],
        li = [],
        attrColumn = ' data-ga-column="content"',
        attr_column = 'data-ga-column',
        attr_id = 'data-ga-id',
        dataQuery = 'data-ga-query',
        $pane = $('<ul></ul>').addClass(tag.ulClass || '');
    // 因為後面使用餘數(%)來取資料, 因此必須先放偶數再放奇數
    li.push('<li' + (tag.evenClass ? ' class="' + tag.evenClass + '"' : '') + attrColumn + ' >');  // 偶數列
    li.push('<li' + (tag.oddClass ? ' class="' + tag.oddClass + '"' : '') + attrColumn + ' >');    // 基數列

    $.each(datas, function(i, data){

        var content = _filterLink(data.linkDisable,data.content);

        html.push(li[i%2]);
        html.push(Util.dom.createHidden('id', data.id));
        html.push(Util.dom.createHidden('param', data.parameter));
        html.push(content);
        html.push('</li>');
    });

    // 在樣板上長上內容,並處理系統連結
    $pane.append(html.join('')).find('li[' + attr_column + ']').each(function(i){
        var $li = $(this),
            $in = $li.find(':input[name="id"]'),
            $param = $li.find(':input[name="param"]'),
            id = $in.val(),
            query = $param.length ? $param.val() : id;
//            $li.find('[' + Config.attrName('link') + ']').attr(dataQuery, $li.find(':input[name="id"]').val());
        $li.attr(attr_id, id).find('[data-ga-link]').attr(dataQuery, query);
        $in.remove();
        $param.remove();
    });

    var template = $('<div>' + tpl.get(tplId) + '</div>').find('[' + attr_column + '="content"]')
        .addClass('ga-view-content').removeAttr(attr_column).end().html();

    // 轉換並長上內容結構
    el.append(tpl.compile(template, {title: title,content: Util.dom.getSelfHtml($pane)}));
}

function view_table(el, conf) {

//        console.debug('into view_table');
//        console.debug(el.html());

    var tplId = conf.tplId || 'table',
        title = conf.title || '',
        head = conf.head || '',
        datas = $.makeArray(conf.data),
        tag = conf.tag || {},
        html = [],
        li = [],
        attrColumn = ' data-ga-column="content"',
        attr_column = 'data-ga-column',
        attr_id = 'data-ga-id',
        dataQuery = 'data-ga-query',
        $table = $('<table></table>').addClass(tag.tableClass || ''),
        $thead = $('<thead></thead>'),
        $tbody = $('<tbody></tbody>');

    // head
    $thead.append(head);
    // data
    $.each(datas, function(i, data){
        var content = $(data.content);


        content
            .addClass((i%2 == 0 ? (tag.evenClass || '') : (tag.oddClass || '')))
            .attr(attr_id, data.id)
            .find('[data-ga-link]').attr(dataQuery, data.parameter);



        $('<tr />').append(content).appendTo($tbody);
//            $('<tr />').append(content).appendTo($tbody);

    });

    $table.append($thead).append($tbody);

    var template = $('<div>' + tpl.get(tplId) + '</div>').find('[' + attr_column + '="content"]')
        .addClass('ga-view-content').removeAttr(attr_column).end().html();

    // 轉換並長上內容結構
    var finalHTML = tpl.compile(template, {title: title,content: Util.dom.getSelfHtml($table)});

//        console.debug(finalHTML);
    el.append(finalHTML);
//        console.debug(el.html());

}

function view_embedded(el, conf) {
//        console.debug(conf.data);

    var tplId = conf.tplId || 'embedded',
        title = conf.title || '',
        content = conf.data,
        url = content.url,
        mode = content.mode,
        html = '',
        param = ''
        ;
//        console.debug('view.embedded');

    // 處理param
    //2014-09-29 added-for auto bring param to customize url
    var paramArray = [];


    if(_ga.viewData.paramMap != undefined) {

        var keys2 = Object.keys(_ga.viewData.paramMap);
        $.each(keys2,function(i,key) {


            var value = _ga.viewData.paramMap[key];
//            var value = _ga.viewData.paramMap[key][0];
//            alert(key);
//            alert(_ga.viewData.paramMap[key]);
//            alert(_ga.viewData.paramMap[key].length);
//            alert(value);

            if(key != '') {
                paramArray.push(key + "=" + value);
            }


        });
    }

    paramArray.push('_v='+ new Date().getMilliseconds());

    param = paramArray.join("&");

    console.debug('view_embedded param=>' + param);


//        param = (param.indexOf('?') == 0 ? param.substr(1) : param);

    var html = '';

    // 處理內容
    switch(mode) {
        case 'manual':
            $.ajax({
                url: urlPrefix + url,
                data: param,
                dataType: 'html',
                async: false,
                success : function(resp) {
                    html = resp;
                }
            });
            break;
        case 'iframe':
            if (param.length > 0) {
                url += (url.indexOf('?') > -1 ? '&' : '?') + param;
            }
            html = '<iframe src="' + url + '"></iframe>';
            break;
        default:
            console.warn('view.embedded undefined mode [' + mode + ']');
            break;
    }

    // 轉換並長上內容結構
    el.append(tpl.compile(tpl.get(tplId), {title: title, content: html}));


};

var tpl = {
    _keyword: ['init', 'load', 'get', 'compile'],
    _reg: /\{\{([\s\S]+?)\}\}/,
    _reg_g: undefined,
    _reg_mark: /<([0-9a-zA-Z]+)(\s*[^>]*)>\{\{([\w]+?)\}\}<\/(\1)>/g, //
    init: function() {
        tpl.load('gtpl/garden.gtpl?' + _ga.update);
    },
    load: function(url) {   // 初始化載入
        var url = url;

        $.ajax({url: url, dataType: 'html',success : function(resp) {

            var text = resp;


            $('<div>' + text + '</div>').children('div[id]').each(function(i) {

                var $tpl = $(this),
                    id = $tpl.attr('id');

                var html = Util.multiLineTrim($tpl.html());

                console.debug('init gptl id = ' + id);

                if ($.inArray(id, tpl._keyword) > -1 || id.indexOf('_') == 0) {
                    console.warn('(template compile) error!! [' + id + '] is illegal, please change it!');
                } else {
//                        tpl[id] = html;
                    var result = html,
                        matches = result.match(tpl._reg_mark),
                        i,
                        len;
                    if (matches) {
                        tpl._reg_mark.lastIndex = 0;    // 重置,否則會出錯
                        len = matches.length;
                        for (i = 0; i < len; i++) {
                            var match = tpl._reg_mark.exec(html),
                                src = match[0],
                                elem = match[1].toLowerCase(),
                                attr = match[2],
                                key = match[3],
                                res = '<' + elem + attr + ' data-ga-column="' + key + '">' +
                                    '{{' + key + '}}</' + elem + '>';
                            result = result.replace(src, res);
                        }
                    }

                    tpl[id] = result;

                    console.debug('init gptl ['+id+'] result = ' + tpl[id]);
                }
            });

        }});

    },
    get: function(id) {
        return tpl[id];
    },
    compile: function(template, data) {

//                console.debug('template->' + template);
//                console.debug('data->' + data.content);

        var html = '';
        if (typeof template !== 'string') {
            alert('(template compile) error!! template is not string');
        } else if(typeof data !== 'object') {
            alert('(template compile) error!! data is not a object');
        } else {
            html = template;
//                    console.debug(template);
//                    console.debug(data);
            if (!html) {
                console.warn('template compiler error! template is undefined');
                return '';
            }
            // 建立_reg_g
            tpl._reg_g = tpl._reg_g || new RegExp(tpl._reg.source, 'g');
            // 確認是否有需更換
            var matches = html.match(tpl._reg_g);

//                    console.debug(html);
//                    console.debug(matches);

            if(matches != undefined && matches != null) {
                $.each(matches, function(i){
                    var match = matches[i],
                        result = tpl._reg.exec(match),
                        text = data[result[1]] || '';
//                        console.debug('replace');
//                        console.debug(result[1] + ':' + text);
                    html = html.replace(result[0], text);
                });


            }
//                    console.debug(matches);

        }
//                console.debug(html);
        return html;
    }
};

function _filterLink(linkDisable,selfHtml) {
    if(linkDisable != undefined) {

        var $selfHtml = $(Util.dom.getSelfHtml($(selfHtml)));
        $selfHtml.find('[data-ga-link]').each(function(){
            var link = $(this).attr('data-ga-link');

            if(linkDisable[link] != undefined && linkDisable[link] == 'true') {
                $(this).remove();

            }
        });
    }


    return Util.dom.getSelfHtml($selfHtml);
}

function query(id, obj) {
    if (typeof obj === 'object') {
        return obj[id];
    } else if (typeof obj === 'array') {
        var r;
        for (var o in obj) {
            if (o.id == id) {
                r = o;
                break;
            }
        }
        return r;
    }
    return undefined;
}