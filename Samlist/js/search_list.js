var search_list = {
    initFun:function(){
        this.menuFun();//左侧菜单栏收起展开效果
        this.scollFun();//左侧菜单栏固定效果
        this.slideFun();//会员折上好礼轮播
        this.numFun();//购物车数量增加减少效果
        this.goodTitFun();//商品列表头部hover效果
        this.browsingFun();//浏览历史hover效果
        this.chooseFun();//筛选条件效果
        this.borderFun();//商品列表hover边框效果


    },

    //左侧菜单栏收起展开效果
    menuFun:function(){
        $(".menu-cont dl dt").click(function(){
            $(this).toggleClass("cur").siblings().stop(true,false).slideToggle();
        });
    },


   //左侧菜单栏固定效果
    scollFun:function(){
        var $sl_side = $(".sl-sidebar");
        $(window).scroll(function(){
            var $num = $(window).scrollTop();
            var $top = $sl_side.scrollTop();
            if($num>$top){
                $sl_side.addClass("fix")
            }else{
                $sl_side.removeClass("fix")
            }
        })
    },


    //顶部轮播效果
    slideFun:function(){
        var $li = $(".banner-box ul li");
        var $pic_list = $(".banner-box ul");
        var $li_width = $li.width();
        var $len =$li.length;
        var $index = 0;
        var $u_width = $li_width*$len;
        var i = 0;
        var wrap =$u_width-$li_width;
        var showTimer;

        $(".prev-btn").click(function(){
            if (!$pic_list.is(":animated")){
                $(".banner-box ul li:first").clone(true).insertAfter($(".banner-box ul li:last"));
                $pic_list.stop(true,false).animate({"margin-left":-$li_width+"px"},500,function(){
                    $(".banner-box ul li:first").remove();
                    $pic_list.css("margin-left",0)
                })
            }
        });

        $(".next-btn").click(function(){
            if(!$pic_list.is(":animated")){
                $(".banner-box ul li:last").clone(true).insertBefore($(".banner-box ul li:first"));
                $pic_list.css("margin-left",-$li_width+"px");
                $pic_list.stop(true,false).animate({"margin-left":0+"px"},500,function(){
                    $(".banner-box ul li:last").remove();
                })
            }
        });

        $pic_list.hover(function() {
            clearInterval(showTimer);
        },function() {
            showTimer = setInterval(function() {
                showPics($index);
                $index++;
                if($index == $len) {$index = 0;}
            },4000);
        }).trigger("mouseleave");

        function showPics($index){
            var nowLeft = -$index *$li_width;
            $(".banner-box ul").stop(true, false).animate({"left": nowLeft}, 300);
        }

    },


    //购物车数字增加减少效果
    numFun:function(){//加入购物车的数量
        $(".increase").click(function(){
            var $number =  parseInt($(this).prev().text());
            $number+=1;
           $(this).prev().text($number);
            $(this).prev().prev().removeClass("disable")
        });//加入购物车数量增加

        $(".decrease").click(function(){
            var $number =  parseInt($(this).next().text());
            if( $number>2){
                $number-=1;
                $(this).next().text($number)
            }else {
                $(this).addClass("disable");
                $(this).next().text(1);
            }//加入购物车数量减少
        });


    },


     //默认条件hover当前效果
    goodTitFun:function(){
        $(".goods-tit a").hover(function(){
            $(this).addClass("current").siblings().removeClass("current");
        },function(){
            $(this).removeClass("current");
        })
    },

     //浏览历史
    browsingFun:function(){
        var $mask_height = -parseInt($(".mask-cont").height());
        $(".browsing-cont ul li").hover(function(){
            $(this).find(".mask-cont").stop(true,false).animate({"bottom":0},200);
            $(this).find(".mask-cont").show()

        },function(){
            $(this).find(".mask-cont").stop(true,false).animate({"bottom":$mask_height},200)
        })
    },


    //筛选条件效果
    chooseFun:function(){
        var brand_height = $(".brand").height;
        $(".even").click(function(){
            $(".brand").stop(true,false).toggleClass("hidd");
            $(this).find("i").toggleClass("current")

        });

        $(".reset").click(function(){
            $(".add-li li").remove();
            $(".condition").show();
            $(".item-cont li").filter(':contains('+$p_txt+')').removeClass("selected").siblings().bind();
        });
          //点击品牌追加到已选条件上
        $(".item-cont li").on("click",function(){
            var $data_attr = $(this).attr("data-cont");
            $(this).parents(".condition").hide();
            var li_txt = $(this).find("span").text();
            var add = "<li data-cont="+$data_attr+"><span>";
            add+=li_txt;
            add+="</span>";
            add+="<em class='iconfont close'>&#xe606;</em>";
            add+="</li>";
            $(".add-li").append(add);
        });


          //已选条件点击叉时删除当前选中的li
        $(".add-li").on("click","em",function(){
            $(this).parent().detach();
            var p_data =  $(this).parent().attr("data-cont");
            $(".condition[data-cont= "+p_data+"]").show();
            var $p_txt = $(this).parent().children("span").text();
            $(".item-cont li").filter(':contains('+$p_txt+')').removeClass("selected").siblings().bind();
        });
    },



     //商品列表hover边框效果
    borderFun:function(){
        $(".goods-cont ul li").hover(function(){
            $(this).find(".hover-border").show();
        },function(){
            $(this).find(".hover-border").hide();
        })
    }






};
search_list.initFun();