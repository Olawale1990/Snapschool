$(document).ready(function(){

    $(".boy").click(function(){
        
        $(this).css("backgroundColor",'Red');
    });
   // multiple program
    $("button").on({
        mouseenter: function (){
        $(this).css("background-color","red");
        },
        mouseleave: function (){
        $(this).css("background-color","blue");
        },
        click: function (){
            $(this).css("background-color","yellow");
        }
    });
});

