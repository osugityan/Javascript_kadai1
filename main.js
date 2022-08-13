$(document).ready(function(){
  var m_sec = 0;
  var sec = 0;
  var min = 0;
  var hour = 0;
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
    min = 0;
    hour = 0;
    
    $(".m_sec").html(m_sec);
    $(".sec").html(sec);
    $(".min").html(min);
    $(".hour").html(hour);
    
    clearInterval(timer);
    
    $(this).attr('disabled', true);
    $(".stop").attr('disabled', true);
    $(".start").attr("disabled", false);
  })
  
  function countUp (){
    $(".m_sec").html(m_sec);
    $(".sec").html(sec);
    $(".min").html(min);
    $(".hour").html(hour);
    
    m_sec += 1;
    
    if(m_sec > 9) {
      m_sec = 0;
      sec += 1;
    }
    
    if(sec > 59) {
      sec = 0;
      min += 1;
    }
    
    if(min > 59){
      min = 0;
      hour += 1;
    }
  }
  });