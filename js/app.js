$('#burger').click(function(){
  $(this).toggleClass('close');
})

$('#menu-listing a').click(function(){
  $('#burger').addClass('close');
})

$(document).ready(function(){
  let btn = $('#toTop');
  $(window).scroll(function(){
    if($(window).scrollTop() > 800){
      btn.css('display','block');
    }
  });
  btn.click(function(e){
    e.preventDefault();
    $(document).scrollTop(0);
  })
})

$('#slide .content > *:not(:first-child)').css('display', 'none');
$('#slide .content > *:first-child').addClass('visible');

$('#slide > #previous').click(function(){
  let active = $(this).parent().find('.visible');
  let prev = active.prev();
  active.css('display', 'none').removeClass('visible');
  if(prev.length){
    prev.css('display', 'block').addClass('visible');
  }else{
    $(this).parent().find('.content > *:last-child').css('display','block').addClass('visible');
  }
})

$('#slide > #next').click(function(){
  let active = $(this).parent().find('.visible');
  let prev = active.next();
  active.css('display', 'none').removeClass('visible');
  if(prev.length){
    prev.css('display', 'block').addClass('visible');
  }else{
    $(this).parent().find('.content > *:first-child').css('display','block').addClass('visible');
  }
})