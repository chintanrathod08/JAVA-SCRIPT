function FetchingData() {
    let data = new URLSearchParams(window.location.search)
    let id = data.get("id")


    fetch(`https://render-js-tix7.onrender.com/product?id=${id}`)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            document.querySelector("#single_product_sec_1").innerHTML = view(res)

            document.querySelector("#add").addEventListener("click", () => {
                addToCart(res)
            })
        })
        .catch((err) => {
            console.log(err)
        })
}

function addToCart(res) {
    fetch(`http://localhost:3000/addcart?id=${res[0].id}`)
       
    .then((res) => {
            return res.json()
        })
        .then((Res) => {

            console.log(Res);
            

            if (Res.length > 0) {


                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "This Item Is Already Present!",

                    html: `
                    Go to This Page
                     <a href="add_to_cart.html" autofocus   style="text-decoration: underline; color: blue;">Lets Check</a>,
                    
                   `,
                  });


            } else {
                fetch(`http://localhost:3000/addcart`, {
                    method: "POST",
                    headers: {
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify(res[0])
                })
                    .then((Res) => {
                        return Res.json()
                    })
                    .then((Res) => {
                        console.log(Res)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        })
        .catch((err) => {
            console.log(err)
        })

}


FetchingData()


function view(arr) {

    return arr.map((el) => {
        return `<div id="card">
            <div>
              <center>  <img src = "${el.imgURL}"/> </center>
            </div>
            <div>
                <p id="title">${el.title}</p>
                <p id="price">₹ ${el.price}</p>
                <p id="rating">${el.rating}</p>
            </div>
        </div>
    <center>  <a href="addtoCart.html">  <button id="add"><i class="ri-shopping-cart-2-line"></i> Add to Cart</button> </center> </a>`
    
    }).join("")

}
