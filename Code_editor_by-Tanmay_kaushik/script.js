const PopUp = document.querySelector(".popup")
const btn1 = document.querySelectorAll(".btn1");
const OKbtn = document.querySelector(".okbtn");
const WELCOME_PAGE = document.querySelector(".welcome_page");
const Outer_Page = document.querySelector(".outr");
const H_P = document.querySelector(".home_page");
const Inner_Page = document.querySelector(".inr");



function run(){
    let htmlcode = document.querySelector("#ht_code").value;
    let csscode = document.querySelector("#css_code").value;
    let jscode = document.querySelector("#js_code").value;
    let output = document.querySelector("#output");


    output.contentDocument.body.innerHTML = htmlcode + "<style>"+csscode +"</style>";
    
    output.contentWindow.eval(jscode);

}

function copyToClipboard() {
    var copyText = document.getElementById("ht_code");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    
    document.execCommand("copy");
}

function copyClipboard(){
    var cssText = document.getElementById("css_code");
    cssText.select();
    cssText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    // alert("Text copied to clipboard: " + cssText.value);
}

function Clipboard(){
    var jsText = document.getElementById("js_code");
    jsText.select();
    jsText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    // alert("Text copied to clipboard: " + jsText.value);
}

// btn1.addEventListener('click',(e)=>{
//     console.log(e);
//     PopUp.style.display = "block";
// })

btn1.forEach(e => {
    e.addEventListener('click', (e) => {
        console.log(e);
        PopUp.style.display = "block";
    });
});

OKbtn.addEventListener('click',()=>{
    PopUp.style.display="none";
})


const DN = document.querySelector(".togl");
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    DN.style.background="white";

}

// outer to inner page 

Outer_Page.addEventListener('click',()=>{
    WELCOME_PAGE.style.display="none";
    Inner_Page.style.display="flex";
})

// inner to outer 

H_P.addEventListener('click',()=>{
    Inner_Page.style.display="none";
    WELCOME_PAGE.style.display="flex";
})

