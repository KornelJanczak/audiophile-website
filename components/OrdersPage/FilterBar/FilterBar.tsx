"use client";
import { useRouter } from "next/navigation";
import classes from "./FilterBar.module.css";
import { useRef } from "react";

const FilterBar: React.FC = () => {
  const router = useRouter();
  const selectRef = useRef<HTMLSelectElement | null>(null);

  return (
    <form className={classes.filter__bar}>
      <label htmlFor="filter-bar">Orders</label>
      <select
        name="filter"
        id="filter-bar"
        className={classes.select__filter}
        ref={selectRef}
        onChange={() => {
          const option = selectRef.current?.value as string;
          router.push(option);
        }}
      >
        <option value="last">Last 6 months</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
      </select>
    </form>
  );
};

export default FilterBar;
