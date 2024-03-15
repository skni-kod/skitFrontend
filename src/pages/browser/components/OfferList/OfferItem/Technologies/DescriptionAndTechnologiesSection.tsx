import TextWithIcon from "@components/UI/molecules/TextWithIcon.tsx";
import ChipWithIcon from "@components/UI/molecules/ChipWithIcon.tsx";

import { TTechnology } from "@shared/types/domain/technologies/technology.ts";
import { WORK_LOCATION_MAP } from "@shared/maps/work-location.map.ts";

import classes from "./DescriptionAndTechnologiesSection.module.scss";
import { TWorkLocation } from "@shared/types/domain/work-location/work-location.ts";
import Icon from "@components/UI/atoms/Icon.tsx";

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
        <TextWithIcon iconBefore="Building2" text={props.companyName} />
        {citiesString && (
          <TextWithIcon iconBefore="MapPin" text={citiesString} />
        )}
        {workLocationsString && (
          <TextWithIcon iconBefore="Banana" text={workLocationsString} />
        )}
      </div>

      <div className={classes.technologies}>
        {props.technologies && (
          <>
            {props.technologies.map((technology: TTechnology) => (
              <ChipWithIcon
                key={technology.name}
                text={technology.name}
                icon={"Bolt"}
              />
            ))}
            <Icon iconName="Code" />
          </>
        )}
      </div>
    </div>
  );
};

export default DescriptionAndTechnologiesSection;
