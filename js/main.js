$(function() {
	$(".nav[data-active]").each(function() {
		var me = $(this);
		var active = me.data("active");
		$("a:contains("+active+")").parent().addClass("active");
	});
});