import { TSalary } from "@api/types/salary.ts";
import TextWithIcon from "@components/UI/molecules/TextWithIcon.tsx";
import classes from "./Salary.module.scss";
import { SALARY_EMPLOYMENT_MAP } from "@api/maps/salary-employment.ts";

interface ISalaryProps {
  salaryRange: TSalary;
}

const Salary = (props: ISalaryProps) => {
  const salary = props.salaryRange.salaryTo
    ? `${props.salaryRange.salaryFrom} - ${props.salaryRange.salaryTo}`
    : `${props.salaryRange.salaryFrom}`;

  const employmentType = SALARY_EMPLOYMENT_MAP.get(props.salaryRange.employmentType);

  return (
    <TextWithIcon iconBefore="attach_money">
      <span>
        <span className={classes.salary}>{salary}</span> zł ({employmentType})
      </span>
    </TextWithIcon>
  );
};

export default Salary;