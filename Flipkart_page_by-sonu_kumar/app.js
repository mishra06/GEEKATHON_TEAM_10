const content = document.querySelector(".content");

function displayProducts() {
  products.forEach((el) => {
    let fAssured = "";
    let freeDelivery = "";
    let BankOffer = "";
    if (el.flipkartAssured) {
      fAssured = "./Assets/assured.png";
    }
    if (el.deliveryIn1Day == true) {
      freeDelivery = "Delivery in 1 Day";
    }
    if (el.noCostEMI == true) {
      BankOffer = "Bank Offer";
    }

    const div = document.createElement("div");
    div.classList.add("productCard");
    div.innerHTML = `<img class="productImage" src="${el.image}" alt="img">
        <span class="productName" title = "${el.title}">${el.title}</span>
        <div class="rating">
            <div class="ratingContainer">
                <span class="rating-value">${el.rating}</span>
            </div>
            <span class="ratingCount">(${el.rating})</span>
            <img class="f-assured" src="${fAssured}" alt="">
        </div>
        <div class="price">
            <span class="newPrice">₹${el.specialPrice}</span>
            <del class="oldPrice">₹${el.price}</del>
            <div class="discountContainer">
                <span class="discount">₹${el.discountPrice}</span><span> off</span>
            </div>
        </div>
        <span class="delivery" name="Free">${freeDelivery}</span>
        <span class="bankOffer" name="Free">${BankOffer}</span>`;

    // append all div in content **********************
    content.append(div);
    // console.log(el.rating,el.image);
  });
}

displayProducts();
