document.addEventListener("DOMContentLoaded", () => {
  ///--------------------------------------------------------
  //=== Cart Toggle Functionality ===//
  ///--------------------------------------------------------
  const cartButton = document.querySelector(".header-icon__carrito-button");
  const cart = document.querySelector(".cart");

  cartButton.addEventListener("click", () => {
    // Toggle the visibility of the cart
    if (cart.style.display === "none" || cart.style.display === "") {
      cart.style.display = "block";
      cart.style.opacity = "1"; // Optional: Make it fully visible
      cartButton.classList.add("active");
    } else {
      cart.style.display = "none";
      cart.style.opacity = "0"; // Optional: Hide it
      cartButton.classList.remove("active");
    }
  });
  ///--------------------------------------------------------
  //=== Product Button Toggle Functionality ===//
  ///--------------------------------------------------------

  let numberOfProducts = 0;
  const productsSelected = [];
  const productButtons = document.querySelectorAll(".cart-product_add");

  productButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const span = button.querySelector(".cart-product__add-text");
      const id = `id-${button.parentElement
        .querySelector(".cart-product__name")
        .textContent.trim()
        .toLowerCase()
        .replace(/\s+/g, "-")}`;

      ///--------------------------------------------------------
      // Delete Product from Counter, List and Cart.
      ///--------------------------------------------------------
      if (button.classList.contains("active")) {
        button.classList.remove("active");
        numberOfProducts--;
        span.textContent = "+";

        // Delete from cart content
        productsSelected.splice(
          productsSelected.findIndex(
            (product) =>
              product.name ===
                button.parentElement.querySelector(".cart-product__name")
                  .textContent &&
              product.price ===
                button.parentElement.querySelector(".cart-product__price")
                  .textContent &&
              product.image ===
                button.parentElement.querySelector(".cart-product__image")
                  .src &&
              product.id === id
          )
        );
        // Remove from cart UI
        const productToRemove = cart.querySelector(`[data-id="${id}"]`);
        if (productToRemove) {
          console.log("product found");

          productToRemove.remove();
        }
        //
      } else {
        button.classList.add("active");
        numberOfProducts++;
        span.textContent = "✓";
        // Update cart content
        const product = {
          name: button.parentElement.querySelector(".cart-product__name")
            .textContent,
          price: button.parentElement.querySelector(".cart-product__price")
            .textContent,
          image: button.parentElement.querySelector(".cart-product__image").src,
          id: `${id}`,
        };
        if (!productsSelected.some((product) => product.id === id)) {
          productsSelected.push({
            product,
          });
          console.log(
            "products AFTER check on id",
            JSON.stringify(productsSelected)
          );
          // Add cart UI content
          const div = document.createElement("div");
          div.classList.add(`cart-product`);
          div.dataset.id = product.id;
          div.innerHTML = `
          <img src="${product.image}" alt="${product.name}" />
          <div class="cart-product__info">
            <p>${product.name}</p>
            <p>${product.price}</p>
          </div>
          <button class="cart-product__delete-button"
            ><img
              class="delete-icon"
              src="assets/delete-gray-color.png"
              alt="Icono Quitar"
          /></button>
        `;
          cart.appendChild(div);
        }
      }
      document.getElementById("cartCount").textContent = numberOfProducts;
    });
  });
  ///--------------------------------------------------------
  //=== Delete from cart functionality ===//
  // As Script will run when there is no items in the cart,
  // we need to use event delegation to capture the delete button clicks.
  ///--------------------------------------------------------
  cart.addEventListener("click", (e) => {
    //Delete from cart UI
    //obtain the id of the element in the cart to delete
    const trashButton = e.target.closest(".cart-product__delete-button");
    if (!trashButton) return;
    const productToRemove = trashButton.parentElement;
    const id = productToRemove.dataset.id;
    productToRemove.remove();
    //
    //Remove from product list
    productsSelected.splice(
      productsSelected.findIndex((productToRemove) => productToRemove.id === id)
    );
    //
    //----------
    // Remove the active class from the list of products.
    //----------

    // Transform id back to product name format
    const newId = id
      .replace(/^id-/, "")
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    console.log("newId", newId);

    productButtons.forEach((button) => {
      const span = button.querySelector(".cart-product__add-text");
      // console.log(
      //   ".cart-product__name",
      //   button.parentElement.querySelector(".cart-product__name")
      //     .textContent === newId
      // );
      // console.log("span.textContent", span.textContent);

      if (
        span.textContent === "✓" &&
        button.parentElement.querySelector(".cart-product__name")
          .textContent === newId
      ) {
        // console.log("removing active");

        button.classList.remove("active");
        numberOfProducts--;
        span.textContent = "+";
      }
      document.getElementById("cartCount").textContent = numberOfProducts;
      //   //}
    });
  });
});
