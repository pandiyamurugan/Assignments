fetch("https://fakestoreapi.com/products")
  .then(res =>{
    console.log("res",res);
  return  res.json()
  }
    )
  .then(newitems => {
   
    const tot_accessories = document.getElementById("accessories");

    tot_accessories.innerHTML = newitems
      .map(item => {
        return `
        <div class="card">
          <img src="${item.image}" alt="${item.title}" />
          <h2>${item.title}</h2>
          <div class="price">₹${item.price}</div>
          <div class="category">Category: ${item.category}</div>
          <p>${item.description.substring(0, 100)}...</p>
          <div class="rating">
            ⭐ ${item.rating.rate} / 5  
            <br>
            (${item.rating.count} reviews)
          </div>
        </div>`;
      })
      .join("");
  })
  .catch(error => console.log("Error:", error));
