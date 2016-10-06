$(function() {
	$("#panel").on("click", function() {
		$("#valueAct").dialog({
			modal : true,
			width : "auto"
		});
	});

	$(".langID_button_1").click(function() {
		console.info("ccc");

		var js_source = $('#showValue').val().replace(/^\s+/, '');
		if (js_source.length == 0) {
			$("#valueAct").dialog("close");
			return;
		}

		var tabsize = 1;
		tabchar = '\t';
		var fjs = js_beautify(js_source, tabsize, tabchar);
		$("#pretty").text( fjs );

		$('#showValue').val("");
		// console.info(fjs);
		$("#valueAct").dialog("close");
	});
});