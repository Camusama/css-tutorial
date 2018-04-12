/*
* @Author: Marte
* @Date:   2018-04-12 16:06:09
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-12 18:00:05
*/
$(document).ready(function(){
    var i=0;
    var playersum=localStorage.getItem("playersum");
    var folkword=localStorage.getItem("folkword");
    var gostword=localStorage.getItem("gostword");
    $("#btn2").click(function() {
        location.href="vote.html";
    });
    $("#rollback").click(function() {
        location.href="check.html";
    });
    $("#btn").click(function() {
            if(i < playersum){
                if($("#show-id").hasClass("hide")){
                    var id =localStorage.getItem(i);
                    console.log(id);
                    $("#show-id").removeClass("hide");
                    $(".flop").addClass("hide");
                    $("#titnum").html(i+1);
                    $("#id").html(id);
                    if (id=="平民") {
                       $("#word").html("词组:"+folkword);
                    }else if (id=="幽灵") {
                        $("#word").html("词组:"+gostword);
                    };

                    $("#checkbtn").html("隐藏并传递给"+(i+2)+"号"   );
                    if (i==playersum-1) {
                        $("#btn").addClass('hide');
                        $("#btn2").removeClass("hide");
                    };
                }else if($(".flop").hasClass("hide")){
                    i++;
                    console.log(i);
                    $("#titnum").html(i+1);
                    $("#show-id").addClass("hide");
                    $(".flop").removeClass("hide");
                };
            }
    });
})
