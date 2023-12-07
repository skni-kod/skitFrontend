import logo from 'assets/logo.svg';
import classes from './Navigation.module.scss';
import Input from "@components/UI/molecules/Input.tsx";
import Button from "@components/UI/molecules/Button.tsx";
import { NavLink } from "react-router-dom";

const Navigation = () => {

  return (
    <nav className={classes.navigation} >
      <div className={classes['left-side']}>
        <NavLink to={"browser"} style={{display: "flex"}}>
          <img className={classes.logo} src={logo} alt="logo" />
        </NavLink>
        <Input iconBefore={"search"} label={"Szukaj pracy w IT"} type={"text"} name={"search"} />
      </div>
      <div className={classes['right-side']}>
        <Button iconBefore={"add"}>Dodaj ogłoszenie</Button>
      </div>
    </nav>
  );
};

export default Navigation;