var oversea_shopping = {
    initFun: function () {
        this.newprodFun();//新品上架hover效果
        this.tabFun();//全球盛宴选项卡切换
        this.slideFun();//轮播
    },


    newprodFun:function(){
        var $list_li = $(".prod-list li");
        $list_li.hover(function(){
            $(this).addClass("current").siblings().removeClass("current");
        },function(){
            $(this).removeClass("current");
        })
    },


    tabFun:function(){
        $(".tab-tit ul li").click(function(){
            $(this).addClass("tit-cur").siblings().removeClass("tit-cur");
            var $index = $(".tab-tit ul li").index(this);
            $(".tab-cont .tab-item").eq($index).show().siblings().hide();
        })
    },


    slideFun:function(){
        var $focus = $(".focus");
        var $focus_li =$(".focus ul li");
        var $len = $focus_li.length;
        var Index = 0;
        var picTimer;
        $(".focus .prev-btn").click(function() {
            Index -= 1;
            if(Index == -1) {Index = $len - 1;}
            showPics(Index);
        });
        $(".focus .next-btn").click(function() {
            Index += 1;
           if(Index == $len){Index = 0}
            showPics(Index);
        });
        function showPics(Index){
            $focus_li.eq(Index).fadeIn(600).siblings().fadeOut(300);
        }

        $focus.hover(function(){//鼠标轮播上停止自动播放
            $(".click-btn").show();
            clearInterval(picTimer);
        },function(){
            $(".click-btn").hide();
            picTimer = setInterval(function() {//开始自动播放
                Index++;
                if(Index == $len) {Index = 0;}
                showPics(Index);
            },3000);
            }).trigger("mouseleave");
    }


};
oversea_shopping.initFun();