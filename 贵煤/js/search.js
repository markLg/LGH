var data = [
	    " <font>山东能源集团贵州矿业有限公司</font>",
	    " <font>山西能源集团贵州矿业有限公司</font>",
	    " <font>贵州能源集团贵州矿业有限公司",
	    " <font>贵州能源集团贵州矿业有限公司</font>",
	    " <font>贵州煜腾矿业有限公司</font>",
	    " <font>贵州煜腾</font>",
	    " <font>煤矿</font>",
	    " <font>银行</font>",
	    " <font>企业</font>",
	    " <font>公司</font>",
	];
$(document).ready(function(){
    $(document).keyup(function(e){
        e = e || window.event;
        var keycode = e.which ? e.which : e.keyCode;
        if(keycode == 38){
            if(jQuery.trim($("#append").html())==""){
                return;
            }
            movePrev();
        }else if(keycode == 40){
            if(jQuery.trim($("#append").html())==""){
                return;
            }
            $("#kw").blur();
            if($(".item").hasClass("addbg")){
                moveNext();
            }else{
                $(".item").removeClass('addbg').eq(0).addClass('addbg');
            }

        }else if(keycode == 13){
            dojob();
        }
    });
    var movePrev = function(){
        $("#kw").blur();
        var index = $(".addbg").prevAll().length;
        if(index == 0){
            $(".item").removeClass('addbg').eq($(".item").length-1).addClass('addbg');
        }else{
            $(".item").removeClass('addbg').eq(index-1).addClass('addbg');
        }
    }
    var moveNext = function(){
        var index = $(".addbg").prevAll().length;
        if(index == $(".item").length-1){
            $(".item").removeClass('addbg').eq(0).addClass('addbg');
        }else{
            $(".item").removeClass('addbg').eq(index+1).addClass('addbg');
        }

    }
    var dojob = function(){
        $("#kw").blur();
        var value = $(".addbg").text();
        $("#kw").val(value);
        $("#append").hide().html("");
    }
});
function getContent(obj){
    var kw = jQuery.trim($(obj).val());
    if(kw == ""){
        $("#append").hide().html("");
        return false;
    }
    var html = "";
    for (var i = 0; i < data.length; i++) {
        if (data[i].indexOf(kw) >= 0) {
            html = html + "<div class='item' onmouseenter='getFocus(this)' onClick='getCon(this);'>" + data[i] + "</div>"
        }
    }
    if(html != ""){
        $("#append").show().html(html);
    }else{
        $("#append").hide().html("");
    }
}
function getFocus(obj){
    $(".item").removeClass("addbg");
    $(obj).addClass("addbg");
}
function getCon(obj){
    var value = $(obj).text();
    $("#kw").val(value);
    $("#append").hide().html("");
}
	$(function(){
		$('#select').change(function(){
			$("#kw").val("");
	});
		})	