import TextWithIcon from "@components/UI/molecules/TextWithIcon.tsx";
import ChipWithIcon from "@components/UI/molecules/ChipWithIcon.tsx";
import { WORK_LOCATION_ENUM } from "@api/enums/work-location.ts";

import classes from "./DescriptionAndTechnologiesSection.module.scss";
import { TTechnology } from "@api/types/technology.ts";

interface ITechnologiesProps {
  technologies: TTechnology[];
  companyName: string;
  workLocations: WORK_LOCATION_ENUM[];
  cities: string[];
}

const DescriptionAndTechnologiesSection = (props: ITechnologiesProps) => {
  return (
    <div className={classes.description}>
      <div className={classes.info}>
        <TextWithIcon iconBefore="apartment" text={props.companyName} />
        <TextWithIcon iconBefore="place" text={props.workLocations} />
        <TextWithIcon iconBefore="work" text={props.employmentType} />
      </div>

      <div className={classes.technologies}>
        {props.technologies?.map((technology: TTechnology) => (
          <ChipWithIcon key={technology.name} text={technology.name} icon={technology.thumUrl} />
        ))}
        <span className="material-icons">code</span>
      </div>
    </div>
  );
};

export default DescriptionAndTechnologiesSection;