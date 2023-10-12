
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

