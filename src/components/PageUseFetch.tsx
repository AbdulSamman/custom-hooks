import { useFetch } from "../hooks/useFetch";
import { FaSpinner } from "react-icons/fa";
const productsUrl =
  "https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/products.json";
const ordersUrl =
  "https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/orders.json";

export const PageUseFetch = () => {
  const [products, loadingProducts, numOfProducts] = useFetch(productsUrl);
  const [orders, loadingOrders, numOfOrders] = useFetch(ordersUrl);

  return (
    <div className="pageUseFetch">
      <p>The useFetch Page</p>
      <hr />
      {!loadingProducts ? (
        <>
          <p>There are {numOfProducts} products.</p>
          <div>
            {products.map((product: any, i: number) => {
              return (
                <span key={product.productID}>
                  {product.productID}
                  {numOfProducts - 1 !== i ? "," : "."}{" "}
                </span>
              );
            })}
          </div>
        </>
      ) : (
        <div className="loading">
          <FaSpinner className="spinner" />
          <p>Loading products...</p>
        </div>
      )}
      {!loadingOrders ? (
        <>
          <p>There are {orders.length} products.</p>
          <div>
            {orders.map((order: any, i) => {
              return (
                <span key={order.orderID}>
                  {order.orderID}
                  {numOfOrders - 1 !== i ? "," : "."}{" "}
                </span>
              );
            })}
          </div>
        </>
      ) : (
        <div className="loading">
          <FaSpinner className="spinner" />
          <p>Loading orders...</p>
        </div>
      )}
    </div>
  );
};
