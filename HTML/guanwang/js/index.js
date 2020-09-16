var jq = $.noConflict();

jq(function(){
    jq("div.img").hover(function(){
        jq("div.img").css("-webkit-box-shadow", "-1px 0px 20px 2px rgba(0,0,0,0.75)",
        "-moz-box-shadow","-1px 0px 20px 2px rgba(0,0,0,0.75)",
        "box-shadow","-1px 0px 20px 2px rgba(0,0,0,0.75)",)
    })
})