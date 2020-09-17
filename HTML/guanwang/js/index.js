var jq = $.noConflict();

jq(function(){
    jq("div#1").mouseenter(function(){
        jq("div#1").css("box-shadow","10px 10px 6px #ccc")
    });
    jq("div#1").mouseleave(function(){
        jq("div#1").css("box-shadow","0px 0px 6px #ccc")
    });

    jq("div#2").mouseenter(function(){
        jq("div#2").css("box-shadow","10px 10px 6px #ccc")
    });
    jq("div#2").mouseleave(function(){
        jq("div#2").css("box-shadow","0px 0px 6px #ccc")
    });

    jq("div#3").mouseenter(function(){
        jq("div#3").css("box-shadow","10px 10px 6px #ccc")
    });
    jq("div#3").mouseleave(function(){
        jq("div#3").css("box-shadow","0px 0px 6px #ccc")
    });

    jq("div#4").mouseenter(function(){
        jq("div#4").css("box-shadow","10px 10px 6px #ccc")
    });
    jq("div#4").mouseleave(function(){
        jq("div#4").css("box-shadow","0px 0px 6px #ccc")
    });

    jq("div#5").mouseenter(function(){
        jq("div#5").css("box-shadow","10px 10px 6px #ccc")
    });
    jq("div#5").mouseleave(function(){
        jq("div#5").css("box-shadow","0px 0px 6px #ccc")
    });
});

jq(function(){
    jq("a").mouseenter(function(){
        jq(a).css("text-decoration","underline")
    })
})