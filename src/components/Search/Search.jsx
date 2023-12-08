import { CiSearch } from "react-icons/ci";
import classes from "./Search.module.scss";
const Search = ({ onSearch }) => {
  return (
    <form className="align-items-start">
      <input type="search" required placeholder="Search" onChange={onSearch} />
      <CiSearch className={classes.searchIcon} />
    </form>
  );
};

export default Search;
