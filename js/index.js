// JavaScript Document
$(document).ready(function(e) {
        //탭 쿼리
		$('.tab-header>div>div').click(function() {
			index = $(this).parent().index() + 1;
			$('.tab-header>div>div').removeClass('active');
			$('.checkpage').css('display','none');
			$('.t' + index).css('display','block');
			$(this).addClass('active');
		});
});