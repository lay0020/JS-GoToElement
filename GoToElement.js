window.onload = () => {
    //console.log("頁面載入完成~");

    // 取得元素
    var test = document.getElementById("test");

    // 元素.點擊事件
    test.onclick = () => {
        var target = test.getAttribute("data-gte-target");   //目標屬性
        var offset = test.getAttribute("data-gte-offset");   //位移屬性

        var element = document.getElementById(target);       //目標元素

        // console.log(target);
        // console.log(offset);

        //視窗.捲動至({上方,行為})
        window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth"
        })
    }
}