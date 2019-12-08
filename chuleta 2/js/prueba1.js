$(document).ready(function(){
	$('.datapicker').datapicker();
});

$(document).ready(function(){
	$('select').formselect();
});

$('#iniciar').click(function(){
	$('#p1').slideDown();
	$('#iniciar').hide();
});

$('#siguiente').click(function(){
	if ($('#p1').show()){
	$('#p1').hide();
    }
    if ($('.select').val()!=""){
          $("#p2").show();
}
});