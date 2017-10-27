$(function pic(){
    var items = [
        {'dt':'订单管理',
         'dd':[
                {'dtit':'我的购买记录','dlink':'index.html'},
                {'dtit':'返修/退换货申请','dlink':'index.html'},
                {'dtit':'返修/退换货查询','dlink':'index.html'}
            ]
        },
        {'dt':'个人信息管理',
         'dd':[
                {'dtit':'编辑个人信息','dlink':'index.html'},
                {'dtit':'会籍管理','dlink':'index.html'},
                {'dtit':'修改密码','dlink':'index.html'},
                {'dtit':'返修/地址管理','dlink':'index.html'}
            ]
        },
        {'dt':'我的专区',
         'dd':[
                {'dtit':'我的优惠券','dlink':'index.html'},
                {'dtit':'常购清单','dlink':'index.html'},
                {'dtit':'商品点评','dlink':'index.html'},
                {'dtit':'购物咨询','dlink':'index.html'}
            ]
        },
        {'dt':'服务中心',
         'dd':[
                {'dtit':'到货通知','dlink':'index.html'},
                {'dtit':'降价通知','dlink':'index.html'},
                {'dtit':'推广订阅','dlink':'index.html'},
                {'dtit':'我的购物卡','dlink':'index.html'},
                {'dtit':'好友推荐','dlink':'index.html'},
                {'dtit':'山姆实体店','dlink':'index.html'}
            ]
        }
    ];


    var path = '../';
    for(var i= 0,len=items.length;i<len;i++){
        var list = items[i];
        var listHtml = ''+
            '<dl>'+
            ' <dt><i></i>'+list.dt+'</dt>';
        for(var j= 0,l=list.dd.length;j<l;j++){
            listHtml+='<dd><a href="'+path+''+''+list.dd[j].dlink+'">'+list.dd[j].dtit+'</a></dd>'
        }
        listHtml+='</dl>';
        $(".sidenav").append(listHtml);
    }


    $('.sidenav dl:first dd:first').addClass("curr");


});


