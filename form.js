$(Document).ready(function(){
 $(window).scroll(function(){
  if (this.scroll>20) {
     $('.logo').addClass("sticky"); 
  }else{
    $('.logo').removeClass("sticky");
  }

})
});