//讓ajax的url位置更有彈性
var ajaxPrefix = '/sklife_web/';
var fb_appId = '782279701875103';
var lineURL = 'http://line.me/R/msg/text/?新光人壽Line分享';

//MegaMenu
var hasMegaMenu = ['852849ed14', 'fcc4f3e114', '21cd6d6a14', '087b46cc14'];

//content_slider array { funcId: typeId }
var contentSlider_conf = {
	"852849ed14": "a6f09a9c216b41c9a66382b6c7ef6c2d",
	"fcc4f3e114": "b6696a4d11ff48ca9b3fec2f1597a8c0",
	"21cd6d6a14": "94fbb97360da42bbb06dc1339044cdfd",
	"087b46cc14": "bc1f6b9a40c44c88bf77a307c03df2af",

	"3bc378c714": "cd6ef192ac124c63a4dbd98face3d647",
	"01ff178314": "712f8e22148d463a822be61392bbafd3",
	"5ca8ef0d14": "ed0fbfb2489442038f7cae300f4e8368",
	"0158796f14": "d07a88a2de0842e587e820f51d7756e3",
	"add4987714": "21ca2d67decd4bb2a6c9c757b40dbd6f"
};

// insurance
var insurance_conf = {
	aged_areaId: '2',
	inKind_areaId: '6'
};

// 快捷選單
var quicklink_conf = [
	{
		id: 'skmain-search',
		icon: 'image/quicklink-icon-search.png',
		name: '搜尋關鍵字',
		link: 'fullsearch.html'
	},{
		id: 'skmain-sitemap',
		icon: 'image/quicklink-icon-sitemap.png',
		name: '網頁地圖'
	},{
		id: 'skmain-member',
		icon: 'image/people.png',
		name: '會員登入',
		link: 'https://einsurance.skl.com.tw/',
		link_target : '_blank'
	},{
		id: 'skmain-download',
		icon: 'image/quicklink-icon-download.png',
		name: '表單下載',
		link: 'dff8aa4e14.html'
	},{
		id: 'skmain-partner',
		icon: 'image/quicklink-icon-partner.png',
		name: '業務夥伴'
	},{
		id: 'skmain-area',
		icon: 'image/quicklink-icon-area.png',
		name: '新光專區'
	}
];