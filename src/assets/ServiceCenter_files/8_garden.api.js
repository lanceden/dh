var GardenAPI = function() {

    var _self = this;

    this.EVENT_PAGE_BEFORE = 'event.page.before';
    this.EVENT_PAGE_AFTER = 'event.page.after';
    this.EVENT_VIEW_BEFORE = 'event.view.before';
    this.EVENT_VIEW_AFTER = 'event.view.after';

    this.on = function(pageId,event, fn) {
        if (typeof event == 'string' && $.isFunction(fn)) {
            switch(event) {
                case _self.EVENT_PAGE_BEFORE:
                    Config.event.page.before.push(fn);
                    break;
                case _self.EVENT_PAGE_AFTER:
                    Config.event.page.after.push(fn);
                    break;
                case _self.EVENT_VIEW_BEFORE:
                    Config.event.view.before.push(fn);
                    break;
                case _self.EVENT_VIEW_AFTER:
                    Config.event.view.after.push(fn);
                    break;
                default:
                    console.warn('Garden API on undefined event ' + event);
                    break;
            }
        }
    };

    this.off = function(event, fn) {
        if (typeof event == 'string') {
            var ary = [],
                evs,
                ev,
                i,
                len;
            switch(event) {
                case _self.EVENT_PAGE_BEFORE:
                    evs = Config.page.before;
                    break;
                case _self.EVENT_PAGE_AFTER:
                    evs = Config.page.after;
                    break;
                case _self.EVENT_VIEW_BEFORE:
                    evs = Config.view.before;
                    break;
                case _self.EVENT_VIEW_AFTER:
                    evs = Config.event.view.after;
                    break;
                default:
                    console.warn('Garden API off undefined event ' + event);
                    break;
            }

            if (evs) {
                if (fn) {
                    len = evs.length;
                    for (i = 0; i < len; i++) {
                        ev = evs[i];
                        if (ev != fn) {
                            ary.push(ev);
                        }
                    }
                    evs = ary;
                } else {
                    evs.length = 0;
                }
            }
        }
    };

    this.getCurrentNavigator = function(rootId) {

        if(rootId == undefined) {
            rootId = 'base';
        }

        var siteMap = _ga.site.func_map;
        var apPageObj = window._ga.el.data('ap.page');

        if(apPageObj != undefined){
            var pageId = apPageObj['id'];

            var result = {
				currentPageId: pageId,
                currentPageName: '',
                navigator : []				
            };

            var currentFunc = siteMap.find('[page="'+pageId+'"]');

            if(currentFunc != undefined && currentFunc != '' && currentFunc.length != 0) {
                result['currentPageName'] = currentFunc.attr('name');

                this.putParentFunc(rootId,currentFunc,result.navigator,'Y');
                result.navigator.reverse();
            }


            return result;
        }
    };

    this.putParentFunc = function(rootId,currentFunc,array,isCurrent) {

		var funcId = currentFunc.attr('id');
        var id = currentFunc.attr('id');
        var page = currentFunc.attr('page');

        //find first have page
        if(page == '') {
            id = currentFunc.find('func[page!=""]:first').attr('id');
        }

        array.push({
            id : funcId,
			name : currentFunc.attr('name'),
            link : '_' + id,
            url : currentFunc.attr('url'),
            isCurrent : isCurrent
        });

        var parent = currentFunc.parent('func:first');
        if(parent != undefined && parent.attr('id') != rootId) {
            this.putParentFunc(rootId,parent,array,'N');
        }
    };
};