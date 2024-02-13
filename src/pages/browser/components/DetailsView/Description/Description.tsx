import classes from './Description.module.scss';
import Btn from "@components/UI/atoms/Btn.tsx";

const Description = () => {
  return (
    <div className={ classes.description }>
      <div className={classes.title}>Opis pracy</div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Aliquam dolor mauris, pulvinar sed molestie id,
      tristique id nunc. Sed sodales nulla metus,
      sit amet laoreet purus ultrices sit amet. Morbi ac faucibus enim,
      non bibendum quam. Donec accumsan dui leo,
      ac sollicitudin ipsum sodales vitae.
      Curabitur vehicula accumsan tempor. Vestibulum erat arcu,
      porta eu aliquet sed, suscipit eu purus. Nulla quam libero,
      fermentum eu erat vestibulum, luctus lacinia quam.
      <Btn icon={"contract_edit"} text={"APLIKUJ"}/>
    </div>
  );
};

export default Description;

