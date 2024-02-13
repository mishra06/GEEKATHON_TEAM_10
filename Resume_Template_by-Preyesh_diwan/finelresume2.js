let expcount = 1;
let expcount1 = 1;
let eduCount = 1;
let eduCount1 = 1;
let skilCount = 1;
downlodebut()
document.querySelector('#addMoreEdu').addEventListener('click' , () =>{
    sampleEdu()
    educationfun()
})
    
document.querySelector('#addMoreExp').addEventListener('click' , () =>{
    jobExp();
    sampleExp();
})

document.querySelector('#addMoreSkil').addEventListener('click' , skill)

document.querySelector('#addMoreLang').addEventListener('click' , language)


document.querySelector("#sub").addEventListener("click" , () =>{


var fullName = document.querySelector("#fullName").value;
let city = document.querySelector("#city").value;
let state = document.querySelector("#state").value;
let add  = document.querySelector("#addrish").value;
let phoneNumber = document.querySelector("#phoneNumber").value;
let email = document.querySelector("#email").value;
let CARRER = document.querySelector("#CARRER").value;




let prName = document.querySelector('#prfullName')
prName.innerText = fullName;
let showName = document.querySelector('#showName')
showName.innerText = fullName;

let praddresh = document.querySelector('#praddresh')
praddresh.innerHTML = `${state} , ${city} , ${add}`;
let showAdd = document.querySelector('#showAdd');
showAdd.innerText = `${state} , ${city} , ${add}`;

let prphone = document.querySelector('#prphone');
prphone.innerHTML = phoneNumber;
let showphone = document.querySelector('#showphone');
showphone.innerText = phoneNumber;

let premail = document.querySelector('#premail');
premail.innerHTML = email;
let showemail = document.querySelector('#showemail');
showemail.innerText = email;


console.log("kuch",fullName,city,state,add,phoneNumber,email,
    CARRER,exp);
    

    
    let file = document.querySelector("#secondPart")

    let hr = document.createElement('hr');
    let hr2 = document.createElement('hr');


    let firstDiv = document.createElement('div');
    let div1 = document.createElement("div")
    div1.style.textAlign = "center"
    let div2 = document.createElement('div')
    div2.className = 'contact'
    div2.style.display = 'flex'
    div2.style.justifyContent = "space-between"
    let name = document.createElement("h3")
    let cit = document.createElement("span")
    let stat = document.createElement("span")
    let ad = document.createElement('span')
    let phone = document.createElement('span')
    let emai = document.createElement('span')



    // ad.innerText = add;
    // cit.innerText = city;
    // name.innerText = Name;
    // stat.innerText = state;
    // phone.innerText = phoneNumber;
    // emai.innerText = email;


    // div1.append(name , cit , stat , ad);
    // div2.append(phone , emai);
    // firstDiv.append(div1,div2,hr,hr2);
    // file.innerHTML = "";
    // file.append(firstDiv) ;


    let secondDiv = document.createElement('div')
    secondDiv.style.textAlign ='center';
    let profile = document.createElement('h4')
    let cer = document.createElement('span')
    let hr3 = document.createElement('hr')
    cer.innerText = CARRER;
    profile.innerText = "PROFILE"
    
    if(CARRER != ""){
        secondDiv.append(profile,cer,hr3);
        file.append(secondDiv) ;
    }


    jobExp()
    sampleExp()

    educationfun()
    sampleEdu()

    skill()
    
    language()
    


})



async function getpdf(){
    var copyfile = document.body.innerHTML;
    var printfile = document.querySelector('#twoParts1').innerHTML;
    document.body.innerHTML = printfile;
    window.print();
    document.body.innerHTML = copyfile;
}


function language(){

    let file = document.querySelector("#prlang")
    let sixDiv = document.createElement("div");
    sixDiv.style.textAlign = "center"
    let lang = document.createElement('span');
    // let langLogo = document.createElement('h3')
    let hr11 = document.createElement('hr');
    // langLogo.innerText = "LANGUAGES"
    


    let Languages = document.querySelector('#lang').value;
    let Languages2 = document.querySelector('#lang2').value;
    let Languages3 = document.querySelector('#lang3').value;
    let Languages4 = document.querySelector('#lang4').value;

    lang.innerText = Languages+" , "+Languages2+" , "+Languages3+" + "+Languages4;

    if(Languages != ""){
        sixDiv.append(hr11,lang);
        file.append(sixDiv);
        
    }
    
}


function skill(){


    let file = document.querySelector("#prskil")

    let fifthDiv = document.createElement("div");
    fifthDiv.style.textAlign = "center"
    let skil = document.createElement('span');
    // let skilLOgo = document.createElement('h3');
    let hr10 = document.createElement('hr');


    let skils = document.querySelector('#skil').value;
    let skils2 = document.querySelector('#skil2').value;
    let skils3 = document.querySelector('#skil3').value;
    let skils4 = document.querySelector('#skil4').value;

    skil.innerHTML = skils+" , "+skils2+" , "+skils3+" , "+skils4;
    // skilLOgo.innerHTML = "SKILS"

    if(skilCount == 1){
        fifthDiv.append(hr10);
        skilCount++;
    }
    if(skils != ""){
        fifthDiv.append(skil);
        file.append(fifthDiv);
    }
    
}

function downlodebut(){

    let button = document.querySelector('#but');
    let but = document.createElement('button');
    but.id = 'butn'
    button.innerHTML = "";
    but.innerHTML = "Downlode";
    button.append(but)
    
    but.addEventListener('click' , getpdf);

}


function jobExp(){

    
    let file = document.querySelector("#secondPart")

    var exp = document.querySelector("#exp").value;
    var exp2 = document.querySelector("#exp2").value;
    var exp3 = document.querySelector("#exp3").value;
    var exp4 = document.querySelector("#exp4").value;
    var exp5 = document.querySelector("#exp5").value;
    let exp6 = document.querySelector('#exp6').value;

    let experinse = document.createElement('span')
    
    
    let experinse3 = document.createElement('span')
    
    let experinse6 = document.createElement('span')

    let thirdDiv = document.createElement('div');
    thirdDiv.style.textAlign = "center"
    
    let history = document.createElement("h3");
    history.style.textAlign = "center"
    let hr4 = document.createElement('hr');


    experinse.innerHTML = ` :- ${exp} , ${exp2} , ${exp5}`;
    experinse3.innerText = " "+exp3+" "+exp4;
    experinse6.innerText = " "+exp6;
    history.innerHTML = "EMPLOYMENT HISTORY"
    let flg = 1;
    
    
    if(expcount == 1){
        thirdDiv.append(hr4,history);
        expcount++;

    }
    if(exp != ""){
        thirdDiv.append(experinse);
        flg = 2
    }
    if(exp3 != ""){
        thirdDiv.append(experinse3);
    }
    if(exp6 != ""){
        thirdDiv.append(experinse6);
    }
    if(exp != ""){
        file.append(thirdDiv)
    }
}
function sampleExp(){

    let file = document.querySelector("#side2")

    var exp = document.querySelector("#exp").value;
    var exp2 = document.querySelector("#exp2").value;
    var exp3 = document.querySelector("#exp3").value;
    var exp4 = document.querySelector("#exp4").value;
    var exp5 = document.querySelector("#exp5").value;
    let exp6 = document.querySelector('#exp6').value;

    let experinse = document.createElement('span')
    
    
    let experinse3 = document.createElement('span')
    
    let experinse6 = document.createElement('span')

    let thirdDiv = document.createElement('div');
    thirdDiv.style.textAlign = "center"
    
    let history = document.createElement("h3");
    history.style.textAlign = "center"
    let hr4 = document.createElement('hr');


    experinse.innerHTML = ` :- ${exp} , ${exp2} , ${exp5}`;
    experinse3.innerText = " "+exp3+" "+exp4;
    experinse6.innerText = " "+exp6;
    history.innerHTML = "EMPLOYMENT HISTORY"
    let flg = 1;
    
    
    if(expcount1 == 1){
        thirdDiv.append(hr4,history);
        expcount1++;

    }
    if(exp != ""){
        thirdDiv.append(experinse);
        flg = 2
    }
    if(exp3 != ""){
        thirdDiv.append(experinse3);
    }
    if(exp6 != ""){
        thirdDiv.append(experinse6);
    }
    if(exp != ""){
        file.append(thirdDiv)
    }
}




function educationfun(){

    let file = document.querySelector("#secondPart")


    let edu = document.querySelector("#education").value;
    let edu2 = document.querySelector("#education2").value;
    let edu3 = document.querySelector("#education3").value;
    let edu4 = document.querySelector("#education4").value;
    let edu5 = document.querySelector("#education5").value;


    let education = document.createElement('span')
    let education2 = document.createElement('span')
    let education3 = document.createElement('span')
    let education4 = document.createElement('span')
    let education5 = document.createElement('span')
    let forthDiv = document.createElement('div');
    forthDiv.style.display = 'flex'
    forthDiv.style.flexDirection = 'column'
    forthDiv.style.textAlign = "center"
    let eduh4 = document.createElement("h4");
    eduh4.style.textAlign = "center"
    let hr6 = document.createElement('hr');


    education.innerText = ":- "+"  "+edu+" "+edu5+" "+edu2
    
    education3.innerText = edu3+" / "+ edu4;

    eduh4.innerText = "EDUCATION"

    let educhr = 1;



    if(eduCount == 1){
        forthDiv.append(hr6,eduh4)
        eduCount++;
    }
    if(edu != ""){
        forthDiv.append(education);
    }
    if(edu3 != ""){
        forthDiv.append(education3);
    }
        
        if(edu != ""){
            file.append(forthDiv)
        }
}
function sampleEdu(){

    let file = document.querySelector("#side2")


    let edu = document.querySelector("#education").value;
    let edu2 = document.querySelector("#education2").value;
    let edu3 = document.querySelector("#education3").value;
    let edu4 = document.querySelector("#education4").value;
    let edu5 = document.querySelector("#education5").value;


    let education = document.createElement('span')
    let education2 = document.createElement('span')
    let education3 = document.createElement('span')
    let education4 = document.createElement('span')
    let education5 = document.createElement('span')
    let forthDiv = document.createElement('div');
    forthDiv.style.display = 'flex'
    forthDiv.style.flexDirection = 'column'
    forthDiv.style.textAlign = "center"
    let eduh4 = document.createElement("h4");
    eduh4.style.textAlign = "center"
    let hr6 = document.createElement('hr');


    education.innerText = ":- "+"  "+edu+" "+edu5+" "+edu2
    
    education3.innerText = edu3+" / "+ edu4;

    eduh4.innerText = "EDUCATION"

    let educhr = 1;



    if(eduCount1 == 1){
        forthDiv.append(hr6,eduh4)
        eduCount1++;
    }
    if(edu != ""){
        forthDiv.append(education);
    }
    if(edu3 != ""){
        forthDiv.append(education3);
    }
        
        if(edu != ""){
            file.append(forthDiv)
        }
}