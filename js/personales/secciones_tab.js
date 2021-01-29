$(document).ready(()=>{
	$('.tab-link').click( function() {
		var tabID = $(this).attr('data-tab');
		$(this).addClass('active').siblings().removeClass('active');
		$('#tab-'+tabID).addClass('active').siblings().removeClass('active');
	});

	$(window).resize(function () {
		if($(window).width() < 700){
			$(".btnSecciones").css("display","block");
		}else{
			$(".btnSecciones").css("display","none");
		}
	});
	if($(window).width() < 700){
			$(".btnSecciones").css("display","block");
		}else{
			$(".btnSecciones").css("display","none");
		}
	$("#collapseExample").collapse('show');
	$('.btn').on("click",function() { this.blur() })
})

