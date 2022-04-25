"auto";
var width=device.width, height=device.height;
var scaleWidth = width/2340;
toast("scaleWidth = " + scaleWidth)
var scaleHeight = height/1080;
toast("scaleHeight = "+scaleHeight)

if(width>height)
{
    var tmp1=width;
    width=height;
    height=tmp1;
}
setScreenMetrics(width, height);


// 请求截图
if(!requestScreenCapture()){
    toast("请求截图失败");
    exit();
}


sleep(500)
click(810*scaleWidth,1010*scaleHeight)


while(true){

    sleep(1000)
    while(true){
        if(findOKImage(captureScreen())!= null){
            sleep (500);
            click (1200*scaleWidth,655*scaleHeight);
            break;
        }
        
    }
    
    while(true){
        if(findHealthColor(captureScreen())!= null){
            sleep(500)
            click (2284*scaleWidth,525*scaleHeight)
            break
        }else{
            toast("aaaaa")
        }
    }
    
    while(true){
        if(findEndColor(captureScreen())!= null){
            sleep(500);
            click (2200*scaleWidth,970*scaleHeight);
            break;
        }else{
            toast("aaaaa");
        }
    }
    
    
    //再次挑战
    sleep(500)
    click(1450*scaleWidth,1000*scaleHeight)
    sleep(2000)
}



// 寻找血条
function findHealthColor(img){
    return images.findColor(img,"#7CDE45",{
        region: [300*scaleWidth, 90*scaleHeight, 10, 10],
        threshold : 25
    })

}

// 寻找OK图片
function findOKImage(img){
    var okImg = images.fromBase64("iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAYAAAA/xX6fAAAABHNCSVQICAgIfAhkiAAAA0BJREFUSIm9l99P21YUxz8OwQmqM5xf7KHBgUA7SktKaTdpU9WhSpu0l2lS/9hpGms7TXvbRslaSIAynECCCAkhsdPhkN09pLnE+VF4SHqkK51fPl+fe4/vOVbsfy8EH5G8baZarWJbFoL++KqqEg5HUBRF6vL5Q8lHIlFUVXU9U8jnZby23QuQzZpsrP+JZVkI0R/Q5/ORmJtn+cFDCfry+Zq0f/Ptd0SnpqRcqZzy8sUaQgi8Xi/f//DsMsPff/uVTHrryu3IZU1mE/Poug7AdiYtbY+frLp801ubbGfSCCG4GZtmfHz8EnDv7a50nJiYwOMZcz1cr9sIIahUKpRKRQk4iJrNJq//TsndureUZGxs7BKw0WhI5wcrjwiGQq4AP//0I47jANBwGlxFxeNjjgp5oHUUC3cWpc3b7byweBfDiLt0L35Zk4DXoTevU1xcXAAwbcTR9aC0ea4d5ZrkOA5bm2+knLy/7KrsoQMeHuQolU4A0DSNxNwtl33ogKmNdVksiblbaJo2OkDbttnd2QFAURSWkvd7fIYKuPd2l1qtCoCuBzHiMyMEFILUxroUI9EoPp9vdICnp6dkzX0p1227r9/QADPpTc7Pz6VcLB7z7l19dID7/+y5ZMdxOCoURgdYr/dm07nFErBfMxJda5C9H6kdhWKaZk+soX/4i3fvSf6okKfRdQcPFVDTAnz51WO873tfvW5zclLsAuzu8EL0LrfDAD3Mzc8zNfUpkUhU6rLmvivW8DJUFJaSywCu9pY1TZdbT9F0H/KH7J0UCoWIGXEEuK60w4MczWZz+EWzcGdRTm03Y9N4PK3Q1eoZlUpF+vV0fMuyqJ6duXRC/HcloBGflfwnk5PoepByuYQQgoNcllA43ALsPvtXf/3BznbapXManXOM0q9e8PsnOvQKMcOgXC4BrcJZSi6DorQy1AIBrFoNgJ3tzOA0FIUbN7TB9g4yjBlSr1rdI5e9LByPEIKVh5+jaYEPBlBVldufLRAKRxBC9AzMbV17xabj8H6WKZdLVGvV1lAMsPLoCzQtgGVZDLq0VNXHzGwCv98vdU9Wn0p+ctI9qwaDQb5efSpfrD1IKWe281F/Zv4HxJ5pk6slDmMAAAAASUVORK5CYII=");
    
    if(okImg == null){
        toast("okImg = null");
        return;
    }else{
        toast("找到okimg")
        return findImage(img,okImg,{
            region:[1150*scaleWidth, 600*scaleHeight, 200, 200]
        })
    }
    
    
}

//寻找结束图片
function findEndImage(img){
    var endImg = images.fromBase64("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");
    if(endImg == null){
        toast("endImg = null");
        return;
    }else{
        return findImage(img,endImg,{
            region : [2120*scaleWidth,945*scaleHeight,200,200]
        })
    }
}

//寻找结束颜色

function findEndColor(img){
    return findColor(img,"#757575",{
        region: [2151*scaleWidth, 972*scaleHeight, 10, 10]
    })
}

