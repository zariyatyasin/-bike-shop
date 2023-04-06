const [filterColor, SetfilterColor] = useState([]);
const [filterBrand, SetfilterBrand] = useState([]);
const [filterCat, SetfilterCat] = useState([]);

const [sort, setSort] = useState(null);

const handleFilterColor = (e) => {
  const value = e.target.value;
  const isChecked = e.target.checked;
  SetfilterColor(
    isChecked
      ? [...filterColor, value]
      : filterColor.filter((item) => item !== value)
  );
};
const handleFilterCat = (e) => {
  const value = e.target.value;
  const isChecked = e.target.checked;
  SetfilterBrand(
    isChecked
      ? [...filterBrand, value]
      : filterBrand.filter((item) => item !== value)
  );
};
