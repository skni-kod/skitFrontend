import FilterCategory, { IFilterCategoryProps } from "@components/UI/molecules/FilterCategory.tsx";
import classes from "./Filter.module.scss";
import { useState } from "react";

const FILTER_CATEGORIES_MOCK: IFilterCategoryProps[] = [
  {
    name: "Technologie i narzędzia",
    icon: "build"
  },
  {
    name: "Rodzaje umowy",
    icon: "library_books"
  },
  {
    name: "Zarobki",
    icon: "attach_money"
  },
  {
    name: "Poziom stanowiska",
    icon: "badge"
  },
  {
    name: "Tryb pracy i lokalizacja",
    icon: "location_on"
  }
] satisfies IFilterCategoryProps[];

const Filter = () => {
  const [filters, setFilters] = useState(FILTER_CATEGORIES_MOCK);

  const handleReset = () => {
    //TODO: fix reset category filters activity
    setFilters((prevState) => {
      for (const filterCategory of prevState) {
        filterCategory.isActive = false;
      }
      const newState = JSON.parse(JSON.stringify(prevState));

      return newState;
    });
  };

  return (
    <div className={classes.filters}>
      {filters.map((category: IFilterCategoryProps) => (
        <FilterCategory
          key={category.name}
          name={category.name}
          icon={category.icon}
          isActive={category.isActive}
        />
      ))}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Filter;