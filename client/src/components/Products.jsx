import "./products.css";
const Products = () => {
  const cartpro = () => {
    console.log("cart products");
  };
  const viewpro = () => {
    console.log("view products");
  };
  return (
    <div className="product-demo" onClick={() => viewpro()}>
      <img
        src="https://imgs.search.brave.com/Gga2rIkY3a14N9wY3pfPJQA3m1NAwsJZamUpgFjbLBs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jb3NtaWMtY29s/b3JmdWwtbGV0dGVy/LXMtaWxsdXN0cmF0/aW9uXzk0MTQ5My00/ODcuanBnP3NlbXQ9/YWlzX2luY29taW5n/Jnc9NzQwJnE9ODA"
        alt=""
      />
      <div className="info">
        <div className="category">
          <span>category</span>
          <div className="price">₹ 3000</div>
        </div>
        <div className="name">lenovo</div>
      </div>
      <div className="btns">
        <button onClick={() => cartpro()}>
          <i className="fa-solid fa-bag-shopping"></i>
        </button>
        <button onClick={() => viewpro()}>
          <i className="fa-solid fa-eye"></i>
        </button>
      </div>
    </div>
  );
};

export default Products;
