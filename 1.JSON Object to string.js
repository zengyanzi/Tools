// JSON字符串：
//
// var jsonStr = '{"name":"nikita", "password":"1111"}';
//
// JSON对象：
//
// var jsonObj = {"name":"nikita", "password":"1111"};

function json2str(o){
    var arr = [];
    var fmt = function(s) {
        if (typeof s == 'object' && s != null) {
            return json2str(s); //递归
        }
        //如果是数字或string
        return /^(string|number)$/.test(typeof s) ? "'" + s + "'" : s;
    }


    if (o.constructor === Array){//数组
        for (var i in o){
            arr.push(fmt(o[i]));
        }
        return '['+arr.join(',')+']';
    }else {//普通JSON对象
        for (var i in o){
            arr.push("'"+i+":"+fmt(o[i]));
        }
        return'{'+arr.join(',')+'}';
    }
}

