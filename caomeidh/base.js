$(function () {
	// 导航tab
    $("#tabs").each(function(){
        var iobj = $(this);
        var otop = iobj.offset().top;
        $(window).scroll(function (e) {
            var stop = $(document).scrollTop();
            if (stop > otop) {
                iobj.addClass("fixed");
            } else {
                iobj.removeClass("fixed");
            }
        });
    });
        
	// 点击判断是否有下载按钮	
	$(".urlgroup > li > a").on('click', function(event){
		var obj = $(this).next(".urltype");
		var itit =  $(this).find(".title").html();	
		var ilen = obj.length;	
		var itxt = obj.html();		
		if(ilen){
			event.preventDefault();
			$("#modalTitle").html(itit);
			$("#modalUrl").html(itxt);
			$("#myurl").addClass("blur");
			$("#modal").addClass("in");
			$("#backdrop").addClass("in");
			$("body").css("overflow","hidden");
			
			$(".modal-url .btn-url").click(function(){
				var url = $(this).attr("href");
				var newWeb=window.open('_blank');
					newWeb.location= url;
				$("body").css("overflow","");
				$("#myurl").removeClass("blur");
				$("#modal").removeClass("in");
				$("#backdrop").removeClass("in");
				return false;
			});	
		}
	});
	
	// 关闭下载弹出
	$("#backdrop,#modalClose").on('click', function (event) {
		event.preventDefault();
		$("body").css("overflow","");
		$("#myurl").removeClass("blur");
		$("#modal").removeClass("in");
		$("#backdrop").removeClass("in");
		return false;
	});	
	
	/* matte */
    $('[data-toggle="matte"]').on('click', function (event) {
        event.preventDefault();
		if ($(this).is('.disabled, :disabled')) return;
        var selector = $(this).attr('data-target'),
			mask = $(this).attr('data-backdrop');
			
        if (!selector){
            selector = $(this).attr('href');
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '');
        }	
		if(mask == "false"){
            if (!$(this).hasClass('owl')) {
				$('[data-toggle="matte"]').removeClass('owl');
                $('.matte').removeClass('in');
                $(this).addClass('owl');
                $(selector).addClass('in');
            } else {
                $(this).removeClass('owl');
                $(selector).removeClass('in');
            }
        } else {
			if(mask == "content"){
				var backdrop = $('.content').find('#backdrop');	
				if (!backdrop.length) {
					$('#backdrop').remove();
					$('.content').append('<div class="backdrop in" id="backdrop"></div>');
				}   		
			} else {
				var backdrop = $('body > #backdrop');	
				if (!backdrop.length) {
					$('#backdrop').remove();
					$(document.body).append('<div class="backdrop in" id="backdrop"></div>');
				}  
			}     
            if (!$(this).hasClass('owl')) {
                $('[data-toggle="matte"]').removeClass('owl');
                $('.matte').removeClass('in');
                $(this).addClass('owl');
                $(selector).addClass('in');
                backdrop.addClass('in');
				if(mask != "content"){
					$("body").addClass('owl');		
				}				
            } else {
                $(this).removeClass('owl');
                $(selector).removeClass('in');
                backdrop.removeClass('in');
				$("body").removeClass('owl');
            }
            $('#backdrop').on('click', function (event) {
                event.preventDefault();
                $('[data-toggle="matte"]').removeClass('owl');
                $(selector).removeClass('in');
                $(this).removeClass('in');
				$("body").removeClass('owl');
            });
        }
    });

    /* data-dismiss="matte" */
    $('[data-dismiss="matte"]').on('click', function (event) {
        event.preventDefault();
        var $this = $(this),
			selector = $this.attr('data-target'),
			backdrop = $('#backdrop');
        if (!selector) {
            selector = $this.attr('href');
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '');
        }
        var $parent = $(selector);
        if (!$parent.length) $parent = $this.closest('.matte');
        $('[data-toggle="matte"]').removeClass('owl');
        $parent.removeClass('in');
        if (backdrop.length) {
            backdrop.removeClass('in');
        }
		if ($("body").hasClass('owl')) {
            $("body").removeClass('owl');
        }
        return false;
    });	
});

// Javacsript Tab Change
function setTab(name,cursel,n){
	for(i=1;i<=n;i++){
		var menu=document.getElementById(name+i);
		var con=document.getElementById("con_"+name+"_"+i);
		menu.className=i==cursel?"active":"";
		con.style.display=i==cursel?"block":"none";
	}
}