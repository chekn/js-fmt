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
		
		var arr = $("<div/>").text(fjs).html().split("\n");
		var text = "";
		$.each(arr,function(i,item){
		    if(item.trim()!=""){
		        text += "<span class='rn' style='color:#cadcad; display:inline-block; width:50px;'>"+ (i+1) +"</span>"+ item + "\n";
		    }
		});
		$("#pretty").html(text);

		$('#showValue').val("");
		// console.info(fjs);
		$("#valueAct").dialog("close");
	});
});