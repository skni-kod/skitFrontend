import classes from "./DetailsView.module.scss";
import OfferTitle from "@pages/browser/components/DetailsView/OfferTitle/OfferTitle.tsx";
import Main from "@pages/browser/components/DetailsView/Main/Main.tsx";
import Description from "@pages/browser/components/DetailsView/Description/Description.tsx";
import { TOffer } from "@api/types/offer/offer.ts";
const DetailsView = (props: TOffer) => {
  const {title, company, workLocation, salaryRange, technologies} = props;

  return (
    <div className={ classes.details }>
      <OfferTitle title={title} company={company}/>
      <Main workLocation={workLocation} salaryRange={salaryRange}/>
      <Description technologies={technologies}/>
    </div>
  );
};

export default DetailsView;