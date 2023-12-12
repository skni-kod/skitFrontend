import Chip, { TChipProps } from "@components/UI/atoms/Chip.tsx";
import classes from "./SortCategories.module.scss";
import { useState } from "react";

type TSortCategory = TChipProps & { value: string };
const SORT_CATEGORIES: TSortCategory[] = [
  {
    label: "Najlepiej płatne",
    value: "best-salary",
    isSelected: false
  },
  {
    label: "Najnowsze",
    value: "the-newest",
    isSelected: false
  }
];

interface ISortCategoriesProps {
  onClick: (category: string) => void;
}

const SortCategories = (props: ISortCategoriesProps) => {
  const [sortCategories, setSortCategories] =
    useState<TSortCategory[]>(SORT_CATEGORIES);

  const handleSortCategoryClick = (selectedSortCategory: TSortCategory) => {
    setSortCategories((prevState) => {
      const newState = prevState.map((sortCategory) => {
        sortCategory.isSelected = sortCategory === selectedSortCategory;
        console.log(sortCategory === selectedSortCategory, sortCategory.value);

        return sortCategory;
      });

      return newState;
    });
    props.onClick(selectedSortCategory.value);
  };

  return (
    <div className={classes["sort-categories"]}>
      {sortCategories.map((category: TSortCategory) => (
        <Chip
          key={category.value}
          {...category}
          size={"medium"}
          onClick={() => handleSortCategoryClick(category)}
        />
      ))}
    </div>
  );
};

export default SortCategories;
