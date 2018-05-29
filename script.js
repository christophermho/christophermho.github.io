const $about = $("#about");
const $work = $("#work");
const $container = $(".container");
const $header = $(".header");
const $navBtn = $(".nav-btn");

let firstTime = true;

function displayContent(content){
    const $content = $("#" + content);
    const $contentBtn = $("." + content + "-btn");
    let $prevContent = $(".prev");
    if (firstTime === true){
            $header.animate({
                top: $header.outerHeight()/2-58.2
            }, 'slow', function(){
                $container.css({
                "position": "static", 
                });
                $header.css({
                        "position": "static",
                        "top": "0",
                        "transform": "translateY(0)"
                });
             });
             $prevContent = $content;
    } else { 
        $prevContent.slideUp();
        $prevContent.removeClass("prev");
    } 
    
    $about.css("order", "3");
    $work.css("order", "3");
    $navBtn.css({
        color: ""
    });
    $navBtn.attr("disabled", false);
    
    $content.addClass("prev");
    $content.css("order", "2");
    $contentBtn.css({
        color: "#345279"
    });
    
    $contentBtn.attr("disabled", true);
    
    if (firstTime === true){
        firstTime = false;
        setTimeout(function(){
            $content.slideDown();
        }, 600);
    } else {
        $content.slideDown();
    }
}
                            

