import TextWithIcon from "@components/UI/molecules/TextWithIcon.tsx";
import classes from "./MainInfo.module.scss";

interface IOfferMainInfo {
  title: string;
  workLocation: string;
  companyName: string;
}

const MainInfo = (props: IOfferMainInfo) => {
  return (
    <div className={classes["main-info"]}>
      <h2>{props.title}</h2>
      <div className={classes.description}>
        <TextWithIcon iconBefore="corporate_fare" text={props.companyName} />
        <TextWithIcon iconBefore="place" text={props.workLocation} />
      </div>
    </div>
  );
};

export default MainInfo;