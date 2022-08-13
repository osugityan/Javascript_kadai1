$(document).ready(function(){
  var m_sec = 0;
  var sec = 0;
  var tens_sec = 0;
  var min = 0;
  var timer
  
  $(".start").click(function(){
    timer = setInterval(countUp, 100);
    
    $(this).attr('disabled', true);
    $(".stop").removeAttr('disabled');
    $(".reset").removeAttr('disabled');
  });
  
  $(".stop").click(function(){
    clearInterval(timer);
    
    $(this).attr('disabled', true);
    $(".start").attr("disabled", false);
    $(".reset").attr("disabled", false);
  })
  
  $(".reset").click(function(){
    m_sec = 0;
    sec = 0;
    tens_sec = 0;
    min = 0;
    
    $(".m_sec").html(m_sec);
    $(".sec").html(sec);
    $(".tens_sec").html(tens_sec);
    $(".min").html(min);
    
    clearInterval(timer);
    
    $(this).attr('disabled', true);
    $(".stop").attr('disabled', true);
    $(".start").attr("disabled", false);
  })
  
  function countUp (){
    $(".m_sec").html(m_sec);
    $(".sec").html(sec);
    $(".tens_sec").html(tens_sec);
    $(".min").html(min);
    
    m_sec += 1;
    
    if(m_sec > 9) {
      m_sec = 0;
      sec += 1;
    }
    
    if(sec > 9) {
      sec = 0;
      tens_sec += 1;
    }
    
    if(tens_sec > 5){
      tens_sec = 0;
      min += 1;
    }
  }
  });