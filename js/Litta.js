//页面跳转的代码
$(window).load(function(){
	
	setTimeout(function(){
		$('.loading').toggleClass('loadingActive');
	},4500)
	
})

//点击导航条第一个标签的事件
  $('.headerNav1 a').eq(0).click(function(){
  	var customTop=$('.cutstom').offset().top;
  	 $('body,html').animate({scrollTop:customTop},800);
  })



$('.btn-menu').click(function(){
$('.menu').toggle(400)
})
$('.sanjiaoxing').click(function(){
	$('.sanjiaoxing').toggleClass('sanjiaoxingActive');
    $('.sub-menu').toggle(400)
	
})

$('.headerNav-Second').hover(function(){
	$('.sub-menu').slideToggle(100);
},function(){
	$('.sub-menu').slideToggle(100);
})


$(window).scroll(function(){
	
	if($(window).scrollTop()>80){
		$('.header').addClass('headerActive');
	}else{
		$('.header').removeClass('headerActive');
	}
	
})
//中间轮播图的代码

     $('.slide-inner1').css('left','50%');
      setTimeout(function(){
			$('.slide-inner1').fadeOut(500);
			$('.slide-inner2').css('display','block');
			$('.slide-inner2').css('left','150%')
	        $('.slide-inner2').animate({'left':'50%'},1000);
     	},3500)
     	
          setTimeout(function(){
          	$('.slide-inner2').fadeOut(500);
			$('.slide-inner1').css('display','block');
			 $('.slide-inner1').css('left','150%')
	        $('.slide-inner1').animate({'left':'50%'},1000); 
          },7000)
     
     setInterval(function(){
     	setTimeout(function(){
			$('.slide-inner1').fadeOut(500);
			$('.slide-inner2').css('display','block');
			$('.slide-inner2').css('left','150%')
	        $('.slide-inner2').animate({'left':'50%'},1000);

     	},3500)
     	
          setTimeout(function(){
          	$('.slide-inner2').fadeOut(500);
			$('.slide-inner1').css('display','block');
		    $('.slide-inner1').css('left','150%')
	        $('.slide-inner1').animate({'left':'50%'},1000); 
	
          },7000)
     },7000)
     
    	var numCount=0;  
   $('.success').mouseenter(function(){
       numCount++;
   
   	if(numCount==1){
   		var i=0;j=0;m=0
   	    var timer1=null;
   		timer1=setInterval(function(){
   		i+=1567;
   		j+=0.398;
   		m+=0.103;
   		var i1=Math.round(i);
   		var j1=Math.round(j);
   		var m1=Math.round(m);
   		 $('.successNav-Num1').html(i1);
   		 $('.successNav-Num2').html(j1);
   		 $('.successNav-Num3').html(m1);
   		 if(i>=367075){
   		 	$('.successNav-Num1').html('367075');
   		 	clearInterval(timer1);
   		 }
   		 if(j>=93){
   		 	$('.successNav-Num2').html('93');
   		 	clearInterval(timer1);
   		 }
   		  if(m>=24){
   		 	$('.successNav-Num3').html('24 ');
   		 	clearInterval(timer1);
   		 }
   	},9)
   	}
   	
   })
   
   
   $('.go-top').click(function(){
   	  $('body,html').animate({scrollTop:0},800);
   })
    
   $(window).scroll(function(){
     if($(window).scrollTop()>200){
		$('.go-top').removeClass('show');
	}else{
		$('.go-top').addClass('show');
	}
     })
   

//faq页面的代码 faqBox-nav1-block1 faqBox-nav1-block1Active faqBox-nav1-content1
   
$('.faqBox-nav1-content1 h3').click(function(){
	 var m=$(this).parent().children('.faqBox-nav1-block1').hasClass('faqBox-nav1-block1Active');
	if(m==false){
		$(this).parent().children('.faqBox-nav1-block1').slideDown(300);
		$(this).parent().children('.faqBox-nav1-block1').addClass('faqBox-nav1-block1Active');
		
	}else{
			$(this).parent().children('.faqBox-nav1-block1').slideToggle(300)
         	$(this).parent().children('.faqBox-nav1-block1').slideToggle(300)
	}
	

})
