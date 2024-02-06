import classes from "./DetailsView.module.scss";
import Main from "@pages/browser/components/DetailsView/Main/Main.tsx";
import Description from "@pages/browser/components/DetailsView/Description/Description.tsx";
import TechnologyGrades from "@pages/browser/components/DetailsView/TechnologyGrades/TechnologyGrades.tsx";
import OfferItem from "@pages/browser/components/OfferList/OfferItem/OfferItem.tsx";
import { TOffer } from "@api/types/offer/offer.ts";
const DetailsView = (props: TOffer) => {
  const {title, id, technologies} = props;

  return (
    <div className={ classes.details }>
      <div className={classes.noPointerEvents}>
        <OfferItem
          key={id}
          offer={props}
        />
      </div>
      <Main title={title} />
      {technologies && <TechnologyGrades techs={technologies}/>}
      <Description/>
    </div>
  );
};

export default DetailsView;