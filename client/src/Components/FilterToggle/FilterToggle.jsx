const FilterToggle = ({ option, catId }) => {
  return (
    <div>
      {option.map((item) => (
        <div className="flex items-center">
          <input
            value={item.value}
            key={item.id}
            id="filter-category-0"
            name="category"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
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
  );
};

export default FilterToggle;
