import React, { useEffect, useState } from "react";
import "../../Style/global.css";
import { Link, useParams } from "react-router-dom";
import ProductList from "./ProductList";
import MobileSideFilter from "./MobileSideFilter";
import { BrandList, catergoryList, ColorCategory } from "../../Data/Category";

import FilterBrand from "./FilterRange.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProduct } from "../../Redux/GetAllProductReducer/GetAllProductLSlice";
const Products = () => {
  const catId = useParams().id;
  const { AllProduct } = useSelector((state) => state.GetALLProduct);

  const [filters, setFilter] = useState([]);
  const [filterColor, setFilterCOlor] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProduct({ catId, filters }));
  }, [dispatch]);

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    const value = e.target.value;
    setFilter(
      isChecked ? [...filters, value] : filters.filter((item) => item !== value)
    );
  };
  const handleChangeCOlor = (e) => {
    const isChecked = e.target.checked;
    const value = e.target.value;
    setFilterCOlor(
      isChecked
        ? [...filterColor, value]
        : filterColor.filter((item) => item !== value)
    );
  };

  return (
    <div>
      <div className=" h-52 bg-black w-full relative  overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h1 className=" shop-text text-[140px]     font-extrabold absolute bottom-[-50px] ">
            Shop
          </h1>
        </div>
      </div>
      <div className="bg-white">
        <div>
          <MobileSideFilter></MobileSideFilter>

          <main className="mx-auto max-w-[1380px]  px-4 sm:px-6 lg:px-8">
            <FilterBrand></FilterBrand>

            <section className="pt-6 pb-24 ">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                <form className=" hidden lg:block">
                  <h3 className="sr-only">Brand</h3>
                  <ul className="space-y-4 border-b border-gray-200 pb-6   text-sm font-medium text-gray-900">
                    {BrandList.map((item) => (
                      <li key={item.id} onClick={() => console.log(item.lable)}>
                        {item.lable}{" "}
                      </li>
                    ))}
                  </ul>

                  <div className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <span className="font-medium text-gray-900">Color</span>
                    </h3>

                    <div className="pt-6" id="filter-section-0">
                      <div className="space-y-4">
                        {ColorCategory.map((item) => (
                          <div className="flex items-center" key={item.id}>
                            <input
                              id="filter-color-0"
                              name="color"
                              value={item.value}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              onChange={handleChangeCOlor}
                            />
                            <label
                              htmlFor="filter-color-0"
                              className="ml-3 text-sm text-gray-600"
                            >
                              {item.lable}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <span className="font-medium text-gray-900">
                        Category
                      </span>
                    </h3>

                    <div className="pt-6" id="filter-section-1">
                      <div className="space-y-4">
                        {catergoryList.map((item) => (
                          <div className="flex items-center" key={item.id}>
                            <input
                              id="filter-category-0"
                              name="category"
                              value={item.value}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500v"
                              onChange={handleChange}
                            />
                            <label
                              htmlFor="filter-category-0"
                              className="ml-3 text-sm text-gray-600"
                            >
                              {item.lable}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </form>

                <div className="lg:col-span-3 ">
                  <div className="  rounded-lg   lg:h-full">
                    <ProductList
                      product={AllProduct}
                      catId={catId}
                    ></ProductList>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
