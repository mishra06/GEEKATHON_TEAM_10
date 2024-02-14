function productDetails(){
    const productList = document.getElementById("donate-programs");
    productList.innerHTML = "";

    fetch("./data.json")
    .then((res)=>res.json())
    .then((parsedData)=>{
        for(let i=0;i<parsedData.products.length;i++){
            // console.log(parsedData.products[i].image);
            let data = parsedData.products[i];
            let title = data.title;
            let desc = data.description;
            let imageURL = data.image;
            let id = data.id;

            // Creates image div here
            let proDiv = document.createElement("div");
            proDiv.classList.add("donate");
            
            proDiv.innerHTML = `
            <img src="${imageURL}" alt="" id="donate-icon">
            <div id="title">${title}</div>
            <div class="desc">
                ${desc}
            </div>
            <div class="btn-donate-now" onClick="donateNow(${id})">
                Donate Now
            </div>
            `
            productList.appendChild(proDiv);

            // document.querySelectorAll(".btn-donate-now").forEach((record)=>{
            //     record.addEventListener("click",(e)=>{
            //         let textContext = e.target.textContext;
            //         console.log(textContext);
            //     })
            // })
        }
    })
}
function donateNow(id){
    // console.log(id);
    // Callback function has been used here
    var options = {
        "key": "rzp_test_jrCov5EqE0IEXh", // Enter the Key ID generated from the Dashboard
        "amount": "100000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Full Moon Foundation", //your business name
        "description": "Test Transaction",
        "image": "./images/logo.svg",
        // "order_id": "order_NaQOVJUuX8qZU8", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
        "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
            "name": "Jignesh Mahadik", //your customer's name
            "email": "jigneshmahadik2898@gmail.com",
            "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            // "color": "#246b8f"
        }
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
    // e.preventDefault();
}