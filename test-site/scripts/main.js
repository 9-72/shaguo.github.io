let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/丹药.png")
    {
        myImage.setAttribute("src", "images/点赞.png");
    }
    else
    {
        myImage.setAttribute("src", "images/丹药.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("code");



function setUserName() {
    let myName = prompt("请输入你的用户名。");
    if (!myName)
    {
        setUserName();
    }
    else
    {
        localStorage.setItem("name", myName);
        myHeading.textContent = "你好，" + myName + "! 这里是吃丹游戏重制版官网";
        if (myName === "何易航")
        {
            myHeading.textContent = myName + ",非常高兴您能来";
        }
        if (myName === "熊朕")
        {
            myHeading.textContent = myName + ",见到你太棒了";
        }
    }
}

if (!localStorage.getItem("name"))
{
    setUserName();
}
else
{
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "你好，" + storedName + "! 这里是吃丹游戏重制版官网";
}

myButton.onclick = function ()
{
    setUserName();
};