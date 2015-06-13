
 
 $(document).ready(function(){
     $('.ingeklaptbutton').click(function(){
  
    $('.ingeklaptbutton').toggleClass('uitgeklaptbutton');
    $('.navigatieingeklapt').toggleClass('navigatieuitgeklapt');
    $('.menuIn').toggleClass('menuUit');
    $('.menuitemIn').toggleClass('menuitemUit');
    $('.testIn').toggleClass('testUit');
    $('.fluidHeightIn').toggleClass('fluidHeightUit');
});
 });
//$('.wrapper2').toggle(100);$('.wrapper2').hide();