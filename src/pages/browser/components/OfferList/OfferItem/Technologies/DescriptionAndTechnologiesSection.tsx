import TextWithIcon from "@components/UI/molecules/TextWithIcon.tsx";
import ChipWithIcon from "@components/UI/molecules/ChipWithIcon.tsx";

import { TTechnology } from "@shared/types/domain/technologies/technology.ts";
import { WORK_LOCATION_MAP } from "@shared/maps/work-location.map.ts";

import classes from "./DescriptionAndTechnologiesSection.module.scss";
import { TWorkLocation } from "@shared/types/domain/work-location/work-location.ts";

interface ITechnologiesProps {
  technologies: TTechnology[];
  companyName: string;
  workLocations: TWorkLocation[];
  cities: string[];
}

const DescriptionAndTechnologiesSection = (props: ITechnologiesProps) => {
  let workLocationsString = "";
  let citiesString = "";

  if (props.workLocations?.length > 0) {
    const workLocations: string[] = props.workLocations.map(
      (location: TWorkLocation) => WORK_LOCATION_MAP.get(location.id)
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
