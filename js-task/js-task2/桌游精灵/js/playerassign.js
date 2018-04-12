    var $num = $("#inputnum");
    var killer,peoplenumber;
    console.log($num.val());
    function addp() {
        var text1 = "幽灵" + killer + "人";
        $("#knum").append(text1);
        var text2 = "平民" + peoplenumber + "人";
        $("#fnum").append(text2);
    }

    function removeallchild() {
        $("#knum").empty();
        $("#fnum").empty();
    }

    function obtain() {
        console.log($num.val());
        if (parseInt($num.val()) >= 4 && parseInt($num.val()) <= 18) {
            killer = Math.floor($num.val() / 4);
            peoplenumber = Math.floor($num.val() - killer);
            removeallchild();
            addp();
        } else if(parseInt($num.val())!="") {
            alert("请输入4-18")
            if (parseInt($num.val()) < 4) {
                $num.val("4");
            } else if (parseInt($num.val()) > 18) {
                $num.val("18");
            }
            removeallchild();
        }
    }
    function check(){
        if($("#folkword").val()==""){
            alert("请输入水民词组");
            return false;
        }
        if($("#gostword").val()==""){
            alert("请输入幽灵词组");
            return false;
        }
        if($("#folkword").val()==$("#gostword").val()){
            alert("词组必须不同");
            $("#gostword").val("");
            return false;
        }


    }
    function shuffled(){
        if(!$num.val()){
            alert("请输入玩家数")
            return false;
        }
        var array=new Array();
        for (var i = 1; i <=killer; i++) {
            array.push("幽灵");
        };
        for (var i = 1; i <=peoplenumber; i++) {
            array.push("平民");
        };//职业入数组
        console.log(array);
        for (var i = 0; i <array.length; i++) {
            var t=Math.floor(Math.random()*(array.length-1))
            temp=array[t];
            array[t]=array[i];
            array[i]=temp;
        };//乱序职业数组
        console.log(array);
        check();
        //检查词组
        //身份存入本地存储
        window.localStorage.clear();
        for (var i = 0; i < array.length; i++) {
            localStorage.setItem(i,array[i]);
            console.log(localStorage.getItem(i));
        };
        //词组存入本地存储
        var folkword=$("#folkword").val();
        var gostword=$("#gostword").val();
        localStorage.setItem("folkword",folkword);
        localStorage.setItem("gostword",gostword);
        localStorage.setItem("playersum",array.length);
        console.log(localStorage.getItem("playersum"));
        console.log(localStorage.getItem("folkword"));
        console.log(localStorage.getItem("gostword"));
        //跳转
        location.href="check.html";
        //document.getElementById("pop").setAttribute("href","check.html")
    }
