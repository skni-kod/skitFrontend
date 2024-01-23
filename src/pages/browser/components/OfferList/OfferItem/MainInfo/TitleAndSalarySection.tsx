import classes from "./TitleAndSalarySection.module.scss";
import Salary from "@pages/browser/components/OfferList/OfferItem/Salary/Salary.tsx";
import { TSalary } from "@api/types/salary.ts";

interface ITitleAndSalarySection {
  title: string;
  salaries: TSalary[];
}

const TitleAndSalarySection = (props: ITitleAndSalarySection) => {
  return (
    <div className={classes["title-and-salary"]}>
      <h2>{props.title}</h2>
      <div className={classes.salaries}>
        {props.salaries.map((salary) => (
          <Salary key={salary.employmentType} salaryRange={salary} />
        ))}
      </div>
    </div>
  );
};

export default TitleAndSalarySection;
