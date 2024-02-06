import classes from './Main.module.scss';

interface IOfferMain {
  title: string,
}

const Item2 = (props: IOfferMain) => {
  const {title} = props;

  return (
    <>
      <div className={ classes.main }>
        <div className={classes.title}>{title}</div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Aliquam dolor mauris, pulvinar sed molestie id,
        tristique id nunc. Sed sodales nulla metus,
        sit amet laoreet purus ultrices sit amet. Morbi ac faucibus enim,
        non bibendum quam. Donec accumsan dui leo,
        ac sollicitudin ipsum sodales vitae.
        Curabitur vehicula accumsan tempor. Vestibulum erat arcu,
        porta eu aliquet sed, suscipit eu purus. Nulla quam libero,
        fermentum eu erat vestibulum, luctus lacinia quam.
      </div>
    </>
  );
};

export default Item2;