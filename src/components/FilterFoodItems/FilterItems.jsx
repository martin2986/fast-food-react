import Button from "../Button/Button";
import { CiBurger } from "react-icons/ci";
import { CiPizza } from "react-icons/ci";
import { PiBowlFoodLight } from "react-icons/pi";
import { CiIceCream } from "react-icons/ci";
const FilterItems = ({ handleClick }) => {
  return (
    <>
      <Button
        value=""
        handleClick={handleClick}
        title="All"
        icon={<CiIceCream />}
      />
      <Button
        handleClick={handleClick}
        value="pasta"
        title="Pasta"
        icon={<PiBowlFoodLight />}
      />
      <Button
        handleClick={handleClick}
        value="pizza"
        title="Pizza"
        icon={<CiPizza />}
      />
      <Button
        handleClick={handleClick}
        value="burger"
        title="Burger"
        icon={<CiBurger />}
      />
    </>
  );
};

export default FilterItems;
