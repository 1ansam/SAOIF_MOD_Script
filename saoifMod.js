"auto";
var width=device.width, height=device.height;
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

// var img = captureScreen();
sleep(500);
click(810,1010);

while(true){
    if(findOKColor!= null){
        sleep(1000);
        click (1086,642);
        break;
    }
    
}

while(true){
    if(findHealthColor!= null){
        sleep(2000);
        click (2284,525);
        break;
    }
    
}

// 
function findHealthColor(img){
    return findColor(img,"#7CDE45",{
        region: [300, 90, 10, 1],
        threshold : 25
    });

}

function findOKColor(img){
    return findColor(img,"#757575",{
        region: [1086, 642, 10, 1],
        threshold : 4
    });

}

   



