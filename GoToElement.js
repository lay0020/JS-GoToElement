window.onload = () => {
    //console.log("頁面載入完成~");

    // 取得單一元素
    // var test = document.getElementById("test");

    // 取得所有元素 -"*" 表抓取所有標籤
    var element = document.getElementsByTagName("*");

    //利用迴圈來抓取
    for (let index = 0; index < element.length; index++) {
        const e = element[index];

        // 元素.點擊事件
        e.onclick = () => {
            var target = e.getAttribute("data-gte-target");   //目標屬性
            var offset = e.getAttribute("data-gte-offset");   //位移屬性

            // 不要抓取h1、section等標籤
            if (target){

                var element = document.getElementById(target);    //目標元素
    
                // console.log(target);
                // console.log(offset);
    
                //視窗.捲動至({上方,行為})
                window.scrollTo({
                    top: element.offsetTop,
                    behavior: "smooth"
                })
            }

        }

    }
}