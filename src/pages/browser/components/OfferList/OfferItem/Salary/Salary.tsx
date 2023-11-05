import { TSalaryRange } from "@api/types/offer/offer.ts";
import TextWithIcon from "@components/UI/molecules/TextWithIcon.tsx";
import classes from "./Salary.module.scss";

interface ISalaryProps {
  salaryRange: TSalaryRange;
}

const Salary = (props: ISalaryProps) => {
  const salary = props.salaryRange.to
    ? `${props.salaryRange.from} - ${props.salaryRange.to}`
    : `${props.salaryRange.from}`;

  return (
    <TextWithIcon iconBefore="attach_money">
      <span>
        <span className={classes.salary}>{salary}</span> zł
      </span>
    </TextWithIcon>
  );
};

export default Salary;