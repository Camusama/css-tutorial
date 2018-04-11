    var $num = $("#inputnum");
    console.log($num.val());
    function addp() {
        var text1 = "杀手" + killer + "人";
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
        } else if(parseInt($num.val()!="")) {
            alert("请输入4-18")
            if (parseInt($num.val()) < 4) {
                $num.val("4");
            } else if (parseInt($num.val()) > 18) {
                $num.val("18");
            }
            removeallchild();
            addp();
        }
    }
    function shuffled(){
        if(!$num.val()){
            alert("请输入玩家数")
            return false;
        }
        var array=new Array();
        for (var i = 1; i <=killer; i++) {
            array.push("杀手");
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
        //存入本地存储
        window.localStorage.clear();
        for (var i = 0; i < array.length; i++) {
            localStorage.setItem(i,array[i]);
            console.log(localStorage.getItem(i));
        };
        var playersum;
        localStorage.setItem(playersum,array.length);
        console.log(localStorage.getItem(playersum));
        //跳转
        location.href="check.html";
        //document.getElementById("pop").setAttribute("href","check.html")
    }
