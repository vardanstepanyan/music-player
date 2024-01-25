import { FaPlus } from "react-icons/fa";

const AddAllButton = () => {
  const addAllHandler = () => {
    console.log("Add All button is pressed!");
  };

  return (
    <div>
      <button onClick={addAllHandler}>
        <FaPlus style={{ color: "grey", fontSize: "12px" }} /> Add all
      </button>
    </div>
  );
};

export default AddAllButton;
