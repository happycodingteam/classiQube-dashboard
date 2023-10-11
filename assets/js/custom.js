$(document).ready(function(){
    $("#right-arrow").click(function(){

        $(this).parent(".select-collection-box").addClass("active-s-c-box");
    });

    $("#down-arrow").click(function(){
       
        $(".select-collection-box").removeClass("active-s-c-box");
    });



});




$(document).ready(function(){
   
    $(".user-arrow").click(function(event){
      
        event.stopPropagation();
        $(".profile-pop-up").toggle();
    });

  
    $(document).click(function(event){
       
        if (!$(event.target).closest('.profile-pop-up').length) {
           
            $(".profile-pop-up").hide();
        }
    });
});

