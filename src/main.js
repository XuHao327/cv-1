let html = document.querySelector('#html');
let style = document.querySelector('#style');
let string = `/* 你好，我叫小徐
 * 接下来我演示以下我的前端功底
 * 首先我要准备一个div*/
#div1{
    border: 2px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把 div 变成一个八卦图
 * 首先，把 div 变成一个圆
 */
#div1{
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(2,0,36,1) 50%, rgba(0,0,0,1) 50%);
}
/* 加两个神秘的小球*/
#div1::before{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background:radial-gradient(circle, rgba(2,0,29,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(1,0,11,1) 25%, rgba(1,0,11,1) 25%, rgba(0,0,0,1) 25%, rgba(2,0,36,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #FFF;
    background: radial-gradient(circle, rgba(2,0,29,1) 0%, rgba(1,0,11,1) 0%, rgba(1,0,11,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(2,0,36,1) 100%, rgba(0,0,0,1) 100%);
}
#div1{
    animation-duration: 3s;
    animation-name: spin;
    animation-iteration-count :infinite;
    animation-timing-function: linear;
}
@keyframes spin{
    from{
        transform: rotate(0deg)
    }
    to{
        transform: rotate(360deg)
    }
}
 `;
let string2 = '';
let n = 0;

let step = () => {
    setTimeout(() => {
        if(string[n] === "\n"){
            string2 += "<br>"
        }else if(string[n] === " "){
            string2 += "&nbsp"
        }else{
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        window.scrollTo(0,99999);
        html.scrollTo(0,9999);
        if(n < string.length - 1){
            n += 1;
            step();
        }
    },1);
};
step();













