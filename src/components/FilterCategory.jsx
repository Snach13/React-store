import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function FilterCategory(props) {
  const { filterByCategory } = useContext(AppContext);

  const handleClick = (categoryID) => {
    filterByCategory(categoryID);
  };
  return (
    <>
      <li
        className="category-item"
        style={{}}
        onClick={() => handleClick(props.categoryID)}
      >
        <a className={"filter" + props.categoryName}> {props.categoryName}</a>
      </li>
    </>
  );
}

export { FilterCategory };
