import React, { useState } from "react";

const SearchFilter = () => {
  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
  ];
  const [filterList, setFilterList] = useState(list);

  const handleSearch = (event) => {
    if (event.target.value === "") {
      setFilterList(list);
      return;
    }
    const filteredValues = list.filter((item) =>
      // item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
      item.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilterList(filteredValues);
  };

  return (
    <div>
      Search: <input type="text" name="query" onChange={handleSearch} />
      {filterList.map((item) => (
      <ul>
        <li>{item}</li>
      </ul>
      ))}
    </div>
  );
};

export default SearchFilter;