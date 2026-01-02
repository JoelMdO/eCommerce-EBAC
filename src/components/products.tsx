import { productsList } from "../data/products_list";

const Products = () => {
  return (
    <>
      <section className="products">
        {productsList.map((product) => (
          <article>
            <img
              className="cart-product__image"
              src={product.image}
              alt={product.alt}
            />
            <button type="button" className="cart-product_add">
              <span className="cart-product__add-text">+</span>
            </button>
            <h3 className="cart-product__name">{product.name}</h3>
            <p className="cart-product__price">{product.price}</p>
          </article>
        ))}
      </section>
    </>
  );
};

export default Products;
