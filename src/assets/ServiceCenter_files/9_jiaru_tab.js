
function _createGATab(conf){

    conf = $.extend({
        options: {},
        datas: []
    }, conf);

    var target = conf.target,
        datas = conf.datas,
        dataLength = datas.length,
        options = $.extend({
            tabTitleContainerClass: '',
            maxTabLength: 6,
            mobileActionType: 'collapse'
        }, conf.options);
        

    if( dataLength > 1 && dataLength <= options.maxTabLength ){
        var content_ul = $('<ul class="ga-tab-title-container '+options.tabTitleContainerClass+'" ga-tab-title-container="'+options.mobileActionType+'"></ul>').appendTo( target );
    }
    
    var content_div = $('<div class="ga-tab-content-container"></div>').appendTo( target );

    $.each(datas, function(i, data){

        data = $.extend({
            attr: ''
        }, data);

        if( dataLength > 1 && dataLength <= options.maxTabLength ){
            content_ul.append('<li><a href="#'+data.id+'" '+data.attr+' ga-tab="'+options.mobileActionType+'">'+data.name+'</a></li>');
        } else if( dataLength > 1 ){
            content_div.append('<a href="#" class="ga-tab-title-mobile ga-tab-collapse" '+data.attr+' ga-tab-href="#'+data.id+'">'+data.name+'</a>');
        }

        var needCallback = conf.hasOwnProperty('callback');
        content_div.append('<div id="'+data.id+'" '+data.attr+' class="ga-tab-content" isCallback="'+needCallback+'"></div>');
    });

    if( dataLength > 1 ){
        //_GATabActions(conf);
        _bindTabIdAction(conf);
    } else {
        var content_target = content_div.find('.ga-tab-content');
        content_target.addClass('active');
        conf.callback({
            target: content_target
        });
    }
    
} // end _createGATab function

var tabId = '';
function _GATabActions(conf){

    var target = conf.target;

    if( conf.hasOwnProperty('tabId') ){
        tabId = conf.tabId;
    } else {
        tabId = '';
    }

    $(target).find('[ga-tab="collapse"]:not([target="_blank"])').each(function(i){
        var href = $(this).attr('href');
        var content_div = $( href );
        if( content_div.prev().hasClass('ga-tab-title-mobile') ){
            content_div.prev().remove();
        }
        content_div.before('<a href="#" class="ga-tab-title-mobile" ga-tab-href="'+href+'">'+$(this).text()+'</a>');

        $(this).off('click').on('click', function(ev){
            ev.preventDefault();

            //console.log('tabclick', $(this).text(), $(target).find('.ga-tab-title-mobile').length);

            $('a[ga-tab-href="'+$(this).attr('href')+'"]').addClass('tab-click');

            $('a[ga-tab-href="'+$(this).attr('href')+'"]').trigger('click');
        });
    });

    $(target).find('.ga-tab-title-mobile:not([target="_blank"])').off('click').on('click', function(ev){
        ev.preventDefault();
        //console.log('mobile tab click', $(this).text());
        
        var content_container = $(this).parents('.ga-tab-content-container').first();
        var title_container = content_container.prev();
        var href = $(this).attr('ga-tab-href');

        if( !$(this).hasClass('active') || $(this).hasClass('tab-click') ){
            content_container.children('.ga-tab-content').removeClass('active');
            content_container.children('.ga-tab-title-mobile').removeClass('active');
            title_container.children('li').removeClass('active');

            $(this).removeClass('tab-click');
        }

        var active_div = content_container.children( href ),
            active_a = title_container.find('li > a[href="'+href+'"]');

        $(this).toggleClass('active');
        active_a.parent().toggleClass('active');
        active_div.toggleClass('active');

        //var isCallback = active_div.attr('isCallback');
        var needCallback = (conf.hasOwnProperty('callback')? true:false); //(typeof isCallback !== typeof undefined && isCallback !== false)? isCallback:false;
        var triggerCallback = conf.hasOwnProperty('triggerCallback')? conf.triggerCallback:false;
        if( needCallback ){
            // create content data
            if( active_div.children().length == 0 || triggerCallback ){
                conf.callback({
                    target: active_div
                });
            }
        }

        var window_w = $(window).width();
        if( window_w < 1025 ){
            GardenUtils.plugin.screenMoveToEle({
                moveToObj: $('.eva_content').first(),
                minHeight: 70
            });
        }
    });

    $(target).find('[ga-tab="tab"]').off('click').on('click', function(ev){
        ev.preventDefault();
        
        var href = $(this).attr('href');
        var content_container = $(href).parents('.ga-tab-content-container').first();
        var title_container = content_container.prev();

        //if( !$(this).parent().hasClass('active') || $(this).hasClass('tab-click') ){
            content_container.children('.ga-tab-content').removeClass('active');
            title_container.children('li').removeClass('active');

            $(this).removeClass('tab-click');
        //}

        var active_div = content_container.children( href ),
            active_a = title_container.find('li > a[href="'+href+'"]');

        active_a.parent().toggleClass('active');
        active_div.toggleClass('active');

        //var isCallback = active_div.attr('isCallback');
        var needCallback = conf.hasOwnProperty('callback')? true:false; //(typeof isCallback !== typeof undefined && isCallback !== false)? isCallback:false;
        var triggerCallback = conf.hasOwnProperty('triggerCallback')? conf.triggerCallback:false;
        if( needCallback ){
            // create content data
            if( active_div.children().length == 0 || triggerCallback ){
                conf.callback({
                    target: active_div
                });
            }
        }

        var window_w = $(window).width();
        if( window_w < 1025 ){
            GardenUtils.plugin.screenMoveToEle({
                moveToObj: $('.eva_content').first(),
                minHeight: 70
            });
        }
    });

    var tab_resize_trigger = function(){
        var window_w = $(window).width(),
            hasActive = false;

        $(target).children('.ga-tab-title-container').each(function(){
            $(this).find('li > [ga-tab]').parent().each(function(){
                if( $(this).hasClass('active') ){
                    hasActive = true;
                    return false;
                }
            });
        });

        if( window_w > 768 && !hasActive || tabId!='' ){
            if( tabId != '' ){
                if($(target).find('[ga-tab="collapse"]').length > 0){
                    $(target).find('[ga-tab="collapse"][href="#'+tabId+'"]').first().trigger('click');
                } else {
                    $(target).find('[ga-tab-href="#'+tabId+'"]').first().trigger('click');
                }
                
            } else {
                $(target).find('[ga-tab="collapse"]').first().trigger('click');
            }
        } else {
            fixFooter();
        }

        if(!hasActive && $(target).find('[ga-tab="tab"]').length > 0){
            $(target).find('[ga-tab="tab"]').first().trigger('click');
        }
    };

    var tab_resize = function(){
        $(window).resize(function(){
            tab_resize_trigger();
        });
    };
    tab_resize();
    tab_resize_trigger();
} // end _GATabActions function
