import classes from "./TitleAndSalarySection.module.scss";
import Salary from "@pages/browser/components/OfferList/OfferItem/Salary/Salary.tsx";
import { TSalary } from "@api/types/offer.ts";

interface ITitleAndSalarySection {
  title: string;
  salaries: TSalary;
}

const TitleAndSalarySection = (props: ITitleAndSalarySection) => {
  return (
    <div className={classes["title-and-salary"]}>
      <h2>{props.title}</h2>
      {props.salaries && <Salary salaryRange={props.salaries} />}
    </div>
  );
};

export default TitleAndSalarySection;