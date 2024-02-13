const content = document.querySelector(".content");

function displayProducts(product = products) {
  product.forEach((el) => {
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

function selectProductThrouhRating() {
  const aboveRating = document.querySelector("#aboveRating");
  let initialValue = true;
  aboveRating.addEventListener("change", (e) => {
    console.log("acrivet");
    content.innerHTML = "";
    if (initialValue == true) {
      initialValue = false;

      if (e.target.id == "rating4") {
        const filterdArr = products.filter((el) => {
          if (el.rating >= 4) {
            console.log(el.rating);
            return el;
          }
        });
        // console.log(filterdArr1);
        displayProducts(filterdArr);
      } else if (e.target.id == "rating3") {
        const filterdArr = products.filter((el) => {
          if (el.rating >= 3 && el.rating < 4) {
            console.log(el.rating);
            return el;
          }
        });
        displayProducts(filterdArr);
      } else if (e.target.id == "rating2") {
        const filterdArr = products.filter((el) => {
          if (el.rating >= 2 && el.rating < 3) {
            console.log(el.rating);
            return el;
          }
        });
        displayProducts(filterdArr);
      } else if (e.target.id == "rating1") {
        const filterdArr = products.filter((el) => {
          if (el.rating >= 1 && el.rating < 2) {
            console.log(el.rating);
            return el;
          }
        });
        displayProducts(filterdArr);
      }
    } else {
      displayProducts();
      initialValue = true;
    }
  });
}

selectProductThrouhRating();

function sorting() {
  let sortingBtn = [...document.querySelectorAll(".sort-item")];

  sortingBtn.forEach((e) => {
    e.addEventListener("click", (ele) => {
      content.innerHTML = "";
      sortingBtn.forEach((btn) => {
        btn.removeAttribute("id");
      });
      ele.target.id = "selected";
      let copiedData = JSON.parse(JSON.stringify(products));
      if (ele.target.innerText == "Price -- Low to High") {
        copiedData = copiedData.sort((a, b) => {
          return a.specialPrice - b.specialPrice;
        });
        displayProducts(copiedData);
      } else if (ele.target.innerText == "Price -- High to Low") {
        copiedData = copiedData.sort((a, b) => {
          return b.specialPrice - a.specialPrice;
        });
        displayProducts(copiedData);
      } else if (ele.target.innerText == "Popularity") {
        copiedData = copiedData.sort((a, b) => {
          return b.popularity - a.popularity;
        });
        displayProducts(copiedData);
      }
    });
  });
}

sorting();
