import TextWithIcon from "@components/UI/molecules/TextWithIcon.tsx";
import ChipWithIcon from "@components/UI/molecules/ChipWithIcon.tsx";

import { WORK_LOCATION_ENUM } from "@api/enums/work-location.ts";
import { TTechnology } from "@api/types/technology.ts";
import { WORK_LOCATION_MAP } from "@api/maps/work-location.ts";

import classes from "./DescriptionAndTechnologiesSection.module.scss";

interface ITechnologiesProps {
  technologies: TTechnology[];
  companyName: string;
  workLocations: WORK_LOCATION_ENUM[];
  cities: string[];
}

const DescriptionAndTechnologiesSection = (props: ITechnologiesProps) => {
  let workLocationsString = "";
  let citiesString = "";

  if (props.workLocations?.length > 0) {
    const workLocations: string[] = props.workLocations.map(
      (location: WORK_LOCATION_ENUM) => WORK_LOCATION_MAP.get(location)
    );

    workLocationsString = workLocations.join(", ");
  }

  if (props.cities?.length > 0) citiesString = props.cities.join(", ");

  return (
    <div className={classes.description}>
      <div className={classes.info}>
        <TextWithIcon iconBefore="apartment" text={props.companyName} />
        {citiesString && (
          <TextWithIcon iconBefore="place" text={citiesString} />
        )}
        {workLocationsString && (
          <TextWithIcon iconBefore="work" text={workLocationsString} />
        )}
      </div>

      <div className={classes.technologies}>
        {props.technologies && (
          <>
            {props.technologies.map((technology: TTechnology) => (
              <ChipWithIcon
                key={technology.name}
                text={technology.name}
                icon={technology.thumUrl}
              />
            ))}
            <span className="material-icons">code</span>
          </>
        )}
      </div>
    </div>
  );
};

export default DescriptionAndTechnologiesSection;
