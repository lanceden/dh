// 小版區塊收合
function _GATitleCollapse(){
    $('[ga-collapse="title"]').off('click').on('click', function(ev){
        ev.preventDefault();

        var id = $(this).attr('href');

        if( !$(this).hasClass('active') ){
            $('[ga-collapse="title"]').removeClass('active');
            $('.ga-title-collapse-content').removeClass('active');
        } 
        $(this).toggleClass('active');
        $(id+'.ga-title-collapse-content').toggleClass('active');
    });
} //end _GATitleCollapse function
