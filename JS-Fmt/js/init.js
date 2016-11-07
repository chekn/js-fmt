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
		        text += "<span class='rn' style='color:#cadcad; display:inline-block; width:50px; left: 0px; position: absolute;'>"+ (i+1) +"</span>"+ item + "\n";
		    }
		});
		$("#pretty").html(text);

		$('#showValue').val("");
		// console.info(fjs);
		$("#valueAct").dialog("close");
	});
});


var u = {
		  img: function (e) {
		    if (!e) return ;
		    var gbi = function (img) {
		      var canvas = document.createElement('canvas');
		      canvas.width = img.width;
		      canvas.height = img.height;
		      var ctx = canvas.getContext('2d');
		      ctx.drawImage(img, 0, 0, img.width, img.height);
		      var ext = img.src.substring(img.src.lastIndexOf('.') + 1) .toLowerCase();
		      var dataURL = canvas.toDataURL('image/' + ext);
		      return dataURL;
		    }
		    if (typeof (e) == 'string') {
		      console.info(e);
		      var image = new Image();
		      image.crossOrigin = '';
		      image.src = e;
		      var x;
		      image.onload=function() {x= gbi(image);console.info(x);}
		    } else if (e instanceof Image) {
		      var base64 = gbi(e);
		      console.log(base64);
		      return base64;
		    } else if (e instanceof File) {
		      var x;
		      var fr = new FileReader();
		      fr.onload = function () {x = this.result; console.info(x);}
		      fr.readAsDataUrl(e);
		    }
		  }
		}
