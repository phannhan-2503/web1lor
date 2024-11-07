const addressbtn = document.querySelector('#address-form')
const addressclose = document.querySelector('#address-close')
const addressxacnhan = document.querySelector('#xacnhan')


// console.log(addressbtn)
addressbtn.addEventListener("click",function(){
    document.querySelector('.address-form').style.display = "flex"
})

addressclose.addEventListener("click",function(){
    document.querySelector('.address-form').style.display = "none"
})

addressxacnhan.addEventListener("click",function(){
    document.querySelector('.address-form').style.display = "none"
})

// Silder
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
const imgNumber = document.querySelectorAll('.slider-content-left-top img')
let index=0
rightbtn.addEventListener("click", function(){
    index= index+1
    if(index>imgNumber.length-1){
        index = 0
    }
    document.querySelector(".slider-content-left-top").style.right = index*100+"%"
})
leftbtn.addEventListener("click", function(){
    index= index-1
    if(index<=-1){
        index = imgNumber.length-1
    }
    document.querySelector(".slider-content-left-top").style.right = index*100+"%"
})

// Slider 1
const imgNumberLi = document.querySelectorAll('.slider-content-left-bottom li')
let imgactive = document.querySelector('.active')
imgNumberLi.forEach(function(image,index){
    image.addEventListener("click",function(){
        removeactive()
        document.querySelector(".slider-content-left-top").style.right = index*100+"%"
        image.classList.add("active")
    })
})
function removeactive(){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}

// slider 2
function imgAuto(){
    index = index + 1
    if(index>imgNumber.length-1){
        index = 0
    }
    removeactive()
    document.querySelector(".slider-content-left-top").style.right = index*100+"%"
    imgNumberLi[index].classList.add("active")
}
setInterval(imgAuto,4000)

// Product
// const rightbtnproduct = document.querySelector('.fa-chevron-right-2')
// const leftbtnproduct = document.querySelector('.fa-chevron-left-2')
// const imgNumberproduct = document.querySelectorAll('.slider-product-one-content-items')

// rightbtnproduct.addEventListener("click", function(){
//     index= index+1
//     if(index>imgNumberproduct.length-1){
//         index = 0
//     }
//     document.querySelector(".slider-product-one-content-items-content").style.right = index*100+"%"
// })
// leftbtnproduct.addEventListener("click", function(){
//     index= index-1
//     if(index<=-1){
//         index = imgNumberproduct.length-1
//     }
//     document.querySelector(".slider-product-one-content-items-content").style.right = index*100+"%"
// })

// Cart
const btn = document.querySelectorAll('.js-button')
// console.log(btn)
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("li").innerText
        var productPrice = product.querySelector("span").innerText
        // console.log(productPrice)
        addcart(productPrice,productImg,productName)
    })
})

// function addcart(productPrice,productImg,productName){
//     var addtr = document.createElement("tr")
//     var cartItem = document.querySelectorAll("tbody tr")
//     for (var i=0;i<cartItem.length; i++){
//         var productT = document.querySelectorAll(".title")
//         if(productT[i].innerHTML == productName){
//             alert("Sản phẩm của bạn đã có trong giỏ hàng")
//             return
//         }
//     }
//     var trcontent = '<tr><td class="td-cart"><img src="'+productImg+'" alt="" class="img-cart"><span class="title">'+productName+'</span></td><td><p><span class="prices">'+productPrice+'</span><sup>đ</sup></p></td><td><input class="input-cart" type="number" value="1" min="1"></td><td class="delete-cart">Xóa</td></tr>'
//     addtr.innerHTML = trcontent
//     var cartTable = document.querySelector("tbody")
//     cartTable.append(addtr)

//     cartTotal()
// }

// total
// function cartTotal(){
//     var cartItem = document.querySelectorAll("tbody tr")
//     var totalC = 0
//     for (var i=0;i<cartItem.length; i++){
//         var inputValue = cartItem[i].querySelector("input").value
//         var productPrice = cartItem[i].querySelector(".prices").innerHTML
//         var newsProductPrice = productPrice.split('.').join('');
//         totalA = newsProductPrice*inputValue*1000
//         totalC = totalC + totalA
//         totalD = totalC.toLocaleString('de-DE')
//     }
//     var cartTotalA = document.querySelector(".price-total span")
//     cartTotalA.innerHTML = totalD

// }





// -----------FIX------------

function addcart(productPrice, productImg, productName) {
    // Xử lý thêm <Tr> cho <Tbody>
    var addtr = document.createElement("tr");
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
      var itemName = cartItem[i].querySelector(".item_name").innerHTML;
      if (itemName == productName) {
        alert("Sản phẩm " + productName + " bạn chọn đã có trong giỏ hàng !");
        return;
      }
    }
    var trContent ="<tr>" +'<td style="display: flex; align-items: center;"><img style="width:100px;" src="' +productImg+'" alt="Iphone thumb"><span class="item_name">' +productName+"</span>"+"</td>" +"<td>" +"<p>" +'<span class="prices">' +productPrice +"</span>" +"<sup>đ</sup>" +"</p>" +"</td>" +"<td>" +'<input class="item_quantity" style="width:30px; outline:none;" type="number" value="1" min="1">' +"</td>" +'<td style="cursor: pointer"><span class="item_delete">Xóa</span></td>' +"</tr>";
    addtr.innerHTML = trContent;
    var cartTable = document.querySelector("tbody");
    cartTable.append(addtr);
    cartTotal();

    // Total 
    function cartTotal(){
        var cartItem = document.querySelectorAll("tbody tr")
        var totalC = 0
        for (var i=0;i<cartItem.length; i++){
            var inputValue = cartItem[i].querySelector("input").value
            var productPrice = cartItem[i].querySelector(".prices").innerHTML
            var newsProductPrice = productPrice.split('.').join('');
            totalA = newsProductPrice*inputValue*1000
            totalC = totalC + totalA
        }
        var cartTotalA = document.querySelector(".price-total span")
        cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
    }

  
    // move đến thẻ <tr> mới tạo ra
  
    var lastTr = cartTable.lastElementChild;
  
    // Xử lý event cho button 'xóa' 
    var itemDelete = lastTr.querySelector(".item_delete");
    itemDelete.addEventListener("click", function (event) {
      var target = event.target;
      var targetTr = target.parentElement.parentElement;
      targetTr.remove();
     // Reset lại giá tổng
      cartTotal();
    });
  
    // Xử lý event update số lượng sản phẩm
    var quantityChange = lastTr.querySelector(".item_quantity");
    quantityChange.addEventListener("change", function (event) {
     // Reset lại giá tổng
      cartTotal();
    });
  
    // Tính tổng giá tiền
    cartTotal();
}

const cartbtn = document.querySelector(".fa-xmark")
const cartShow = document.querySelector(".cart-shopping")
cartShow.addEventListener("click",function(){
    document.querySelector(".cart").style.right="0"
})
cartbtn.addEventListener("click",function(){
    document.querySelector(".cart").style.right="-100%"
})
