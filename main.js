var a=0;
var ammop;
var big;
var enemy01=document.getElementById("enemy01");
function enemymove(){
    var moveto = 10*Math.random();//使用math.random来产生一个随机数，让他移动
    if(moveto>=5)
    enemy01.style.left=enemy01.offsetLeft + 20+'px';
    else
    enemy01.style.left=enemy01.offsetLeft - 20+'px';
}
function enemyc(){
    if(hit!=1)
    {
        var emove = setInterval( enemymove,200);//setInterval随时间调用函数
    }
}//该函数调用随机移动函数控制敌机移动
function leftmove(){
    if(blockS.offsetLeft>=0)
        blockS.style.left=blockS.offsetLeft-30+'px';
}
function rightmove(){
     if(blockS.offsetLeft<=750)
        blockS.style.left=blockS.offsetLeft+30+'px';
}
function topmove(){
     if(blockS.offsetTop>=0)
        blockS.style.top=blockS.offsetTop-30+'px';
}
function buttommove(){
     if(blockS.offsetTop<=730)
        blockS.style.top=blockS.offsetTop+30+'px';
}
function hit(){
    if(ammop.offsetTop<=enemy01.offsetTop+50&&ammop.offsetLeft<=enemy01.offsetLeft+50&&ammop.offsetLeft>=enemy01.offsetLeft+0){
        a=0;
        big.removeChild(ammop);
        big.removeChild(enemy01);
        return 1;
    }//使用if语句判断是否击中
}
function shoot(){
    a=1;
    big = document.getElementById('borde');
    ammop = document.createElement('p'); //创建一个P标签
    ammop.id='ammo'; //给P设置CSS属性
    big.appendChild(ammop); //在DIV中生成P
    ammop.style.top=blockS.offsetTop - 30+'px';
    ammop.style.left=blockS.offsetLeft + 15+'px';
    var int = setInterval(function(){
        if(hit()==1){
            clearInterval(int);
            alert("你赢了");
            window.location.reload();
        }
        if(ammop.offsetTop>=10)
            ammop.style.top = ammop.offsetTop - 25 + 'px';
        else{
            a=0;
            big.removeChild(ammop);
            clearInterval(int);
        }
    },20);
    //if(ammop.offsetTop<200)
    //big.removeChild(ammop);
    //var ammo = document.getElementById("ammo");
    //ammo.style.top=blockS.offsetTop - 30+'px';
    //ammo.style.left=blockS.offsetLeft + 15+'px';
};
window.onload = function(){
    var blockS = document.getElementById('blockS');
    enemyc();
    document.onkeydown=function(event){
        console.log(event.keyCode);//键盘事件
                switch(event.keyCode){
                    case 65:leftmove();break;
                    case 68:rightmove();break;
                    case 83:buttommove();break;
                    case 87:topmove();break;
                    case 32:if(a==0)shoot();break;
                }//65 A;68 D;83 S;87 W;32 空格;
    };
};