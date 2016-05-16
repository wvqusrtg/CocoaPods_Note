$(function(){
    //头像打签
    var icon_uids = [];
    $("span[name^='icon_']").each(function(i){
        icon_uids[i] = $(this).attr('uid');
    });
    var method = '/api/getIcons/';
    
    $.ajax({
        type: 'POST',
        url: method,
        async: true,
        dataType:"json", 
        cache:false,
        data: {icon_uids:icon_uids},
        success: function(data, status, xhr) {
            console.log(data);
            if(data.errcode==0){
                for(var i in data.data){
                    if(data.data[i].isexpert==1){//专家签
                        $("span[name='icon_"+i+"']").each(function(){
                            var size = $(this).attr("size") || 'big';
                            var width;
//                            size=='big' ? width = '32px;' :'';
                            size == 'big' ? size='middle':'';
                            size=='middle' ? width = '16px;' :'';
                            size=='small' ? width = '12px;' :'';
                            $(this).html('<img src="/img/icon_expert_'+size+'.png" style="width: '+width+'height: '+width+'margin-right: 10px;" title="专家认证"/>');
                        });
                    }
                }
            }
        },
        error: function(xhr, type, error) {
            console.log(error.toString());
        }
    });
});