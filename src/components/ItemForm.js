import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [inputValue, setInputValue] = useState('');
  const [optionValue, setOptionValue] = useState('Produce');

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleOptionChange(e) {
    setOptionValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: inputValue,
      category: optionValue,
    };

    onItemFormSubmit(newItem);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={inputValue} onChange={handleInputChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={optionValue} onChange={handleOptionChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
