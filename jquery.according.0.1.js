;(function () {
	$.fn.extend({
		"according":function (opt) {
			var DEFAULT = {"statr":0}
			var OP = $.extend({}, DEFAULT, opt);
			this.each(function () {
				var obj = $(this);
				init();
				function init() {
					obj.children("p").hide();
					obj.children("p").eq(OP.start).show();
					obj.children(":header").eq(OP.start).addClass("active");
				}
				obj.children(":header").each(function () {
					$(this).bind("click",showACC);
				})
				function showACC() {
					var ind = obj.children(":header").index($(this));
					obj.children(":header.active").removeClass("active");
					obj.children("p:visible").slideUp();
					obj.children("p").eq(ind).slideDown();
					obj.children(":header").eq(ind).addClass("active");
				}
				
			})//each 传过来的参数
		}
	})
})(jQuery)
