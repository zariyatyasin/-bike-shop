import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../Redux/GetAllProductReducer/GetAllProductLSlice";
const UploadProduct = () => {
  const navigate = useNavigate();
  const [images, setProductImage] = useState("");
  const [name, setName] = useState("");

  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];
    TransformFileData(file);
  };
  const TransformFileData = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImage(reader.result);
      };
    } else {
      setProductImage("");
    }
  };

  const handleSubmit = () => {
    dispatch(createProduct({ name, images, countInStock, description, price }));
  };

  return (
    <div className=" max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-5">
        <div className=" text-2xl font-bold">Edit Product</div>
        <button
          type="button"
          className=" text-white right-2.5 bottom-2.5 bg-[#ffa23c] font-medium  text-sm px-4 py-2 cursor-pointer"
          onClick={handleSubmit}
        >
          Import Product
        </button>
      </div>
      <div className="flex flex-col lg:flex-row md:items-start  gap-5">
        <div className=" flex-[2]">
          <div className="bg-white p-4 rounded">
            <div className="mb-4 font-medium">Basic information</div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Description
              </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Type your message"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Short description
              </label>
              <textarea
                rows="2"
                name="message"
                id="message"
                placeholder="Type your message"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Images
              </label>
              <input
                type="file"
                accept="/image"
                onChange={handleProductImageUpload}
              ></input>
              {images ? (
                <img src={images} className=" h-32 mt-3 w-32" alt="product" />
              ) : (
                <div>Preview</div>
              )}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-white p-4 rounded mt-5 lg:mt-0">
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Price
              </label>
              <input
                type="number"
                name="Price"
                id="name"
                placeholder="Price"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Stock quantity
              </label>
              <input
                type="number"
                name="Price"
                id="name"
                placeholder="Price"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                onChange={(e) => setCountInStock(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Categories
              </label>
              <input
                type="text"
                name="cat"
                id="name"
                placeholder="Categories"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadProduct;
