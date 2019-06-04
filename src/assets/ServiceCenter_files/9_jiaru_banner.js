// 內頁滿版 slide
function fullSlide(config){

    var view_target = config.target,
        datas = config.datas;
    
    var target = $('<div class="slider-container"></div>').appendTo(view_target);

    var owlContainer = $('<div class="owl-carousel"></div>').appendTo(target);
    if( datas.length > 1 ){
        $('<div class="slider-prev"></div>').appendTo( target );
        $('<div class="slider-next"></div>').appendTo( target );
    }

    $.each( datas, function(i, data){
        owlContainer.append('<div class="item">' + data + '</div>');
    });

    var options = {
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        items: 1
    };

    owlContainer.owlCarousel(options);

    setTimeout(function(){
        owlContainer.trigger('destroy.owl.carousel');
        owlContainer.html(owlContainer.find('.owl-stage-outer').html()).removeClass('owl-loaded');
        if( datas.length == options.items ){
            options.touchDrag = false;
            options.mouseDrag = false;
        }
        owlContainer.owlCarousel(options);

        target.find('.slider-next').click(function() {
            owlContainer.trigger('next.owl.carousel');
        });

        target.find('.slider-prev').click(function() {
            owlContainer.trigger('prev.owl.carousel');
        });
    },500);
} // end fullSlide function

function content_slider(view){

    var siteMap = _ga.site.func_map;
    var apPageObj = window._ga.el.data('ap.page');
            
    if(apPageObj != undefined){
        var pageId = apPageObj['id'],
            currentPage = siteMap.find('[page="'+pageId+'"]'),
            funcId = currentPage.attr('id'),
            funcIdArr = [],
            typeId = '';

        $.each(contentSlider_conf, function(funcId, typeId){
            funcIdArr.push( funcId );
        });

        $.each(funcIdArr, function(i,funcId){
            console.debug('funcId = ' + funcId);
        
            if(pageId == funcId) {
                typeId = contentSlider_conf[funcId];
            }
            else {
                
                if(currentPage.parents('[id="'+funcId+'"]').length != 0) {
                    typeId = contentSlider_conf[funcId];
                }
            }
        });

        var res = _getContentSliderData({
                typeId: typeId != ''? typeId : 'b5b7959b279948aba901668d8f3db759'
            }),
            datas = [];

        if( res.hasOwnProperty('datas') ){

            $.each(res.datas, function(i, data){
                datas.push('<img class="bannerMaxhigh" src="'+data.img_url+'" />');
            });

            if( datas.length > 0 ){
                fullSlide({
                    target: view,
                    datas: datas
                });
            }
        }

    } // end if: pageId exist    
} // end content_slider function

function _getContentSliderData(conf){

    var resp = {};
    $.ajax({
        async: false, 
        url: ajaxPrefix + 'jsp/slider.jsp?typeId='+conf.typeId+'&v=' + new Date().getTime(), 
        dataType: 'json',
        success:function(json) {
            resp = json;
        }
    });
    return resp;
} // end _getContentSliderData function