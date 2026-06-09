import { useState } from "react";
import "./details.css";
import useCustom from "./useCustom";

const Details = () => {
  const { addProduct } = useCustom();
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    category: "",
    brand: "",
    description: "",
    image: [],
    stock: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
      quantity: Number(formData.quantity),
    };
    setFormData({
      name: "",
      price: "",
      category: "",
      brand: "",
      description: "",
      image: [],
      stock: "",
      quantity: 1,
    });
    addProduct(payload);
  };
  return (
    <div className="details">
      <div className="session">
        <h1>Add product</h1>
      </div>
      <form className="ipts" onSubmit={handleSubmit}>
        <label>
          Enter product name:
          <input
            type="text"
            placeholder="Product Name"
            value={formData.name}
            required
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>

        <label htmlFor="">
          Enter description:
          <textarea
            placeholder="Description"
            value={formData.description}
            required
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </label>

        <label htmlFor="">
          Enter price:
          <input
            type="number"
            placeholder="Price"
            value={formData.price}
            required
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
          />
        </label>

        <label htmlFor="">
          Enter product category
          <input
            type="text"
            placeholder="Category"
            value={formData.category}
            required
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          />
        </label>

        <label htmlFor="">
          Enter brand
          <input
            type="text"
            placeholder="Brand"
            value={formData.brand}
            required
            onChange={(e) =>
              setFormData({ ...formData, brand: e.target.value })
            }
          />
        </label>

        <label htmlFor="">
          Enter no stock:
          <input
            type="number"
            placeholder="Stock"
            value={formData.stock}
            required
            onChange={(e) =>
              setFormData({ ...formData, stock: e.target.value })
            }
          />
        </label>

        <label htmlFor="">
          Enter image url:
          <input
            type="text"
            placeholder="Enter url image"
            required
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.value })
            }
          />
        </label>

        <div className="btn">
          <button type="submit">Create Product</button>
        </div>
      </form>
    </div>
  );
};

export default Details;
