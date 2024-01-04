import classes from "./FilterBar.module.css";

const FilterBar: React.FC = () => {
  return (
    <div className={classes.filter__bar}>
      <label htmlFor="filter-bar">Orders</label>
      <select name="filter" id="filter-bar" className={classes.select__filter}>
        <option value="Last 6 months">Last 6 months</option>
        <option value="2024">2025</option>
      </select>
    </div>
  );
};

export default FilterBar;
