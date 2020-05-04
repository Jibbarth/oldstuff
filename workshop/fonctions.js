
function afficheRond(){
$("#rond").addClass('bounceIn');	
$("#rond").show();
	

}

function toggleSon(){
	if($("#son").hasClass('icon-volume-off')){
		$('#video_background').prop('muted', true);	
		$("#son").removeClass('icon-volume-off');		
		$("#son").addClass('icon-play');
	}
	else {
		$('#video_background').prop('muted', false);
		$("#son").removeClass('icon-play');		
		$("#son").addClass('icon-volume-off');
	}

}
function redimensionnement(){  
  	
    var image_width = $('#backgroundphoto').width();  
    var image_height = $('#backgroundphoto').height();      
      
    var over = image_width / image_height;  
    var under = image_height / image_width;  
      
    var body_width = $(window).width();  
    var body_height = $(window).height();  
      
    if (body_width / body_height >= over) {  
      $('#backgroundphoto').css({  
        'width': body_width + 'px',  
        'height': Math.ceil(under * body_width) + 'px',  
        'left': '0px',  
        'top': Math.abs((under * body_width) - body_height) / -2 + 'px'  
      });  
    }   
      
    else {  
      $('#backgroundphoto').css({  
        'width': Math.ceil(over * body_height) + 'px',  
        'height': body_height + 'px',  
        'top': '0px',  
        'left': Math.abs((over * body_height) - body_width) / -2 + 'px'  
      });  
    }  
} 
function redimvid(){  
  	
    var image_width = 960;
    var image_height = 540; 
      
    var over = image_width / image_height;  
    var under = image_height / image_width;  
      
    var body_width = $(window).width();  
    var body_height = $(window).height();  
      
    if (body_width / body_height >= over) {  
      $('#video_background').css({  
        'width': body_width + 'px',  
        'height': Math.ceil(under * body_width) + 'px',  
        'left': '0px',  
        'top': Math.abs((under * body_width) - body_height) / -2 + 'px'  
      });  
    }   
      
    else {  
      $('#video_background').css({  
        'width': Math.ceil(over * body_height) + 'px',  
        'height': body_height + 'px',  
        'top': '0px',  
        'left': Math.abs((over * body_height) - body_width) / -2 + 'px'  
      });  
    }  
}    
