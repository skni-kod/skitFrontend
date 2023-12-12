import logo from "assets/logo.svg";
import classes from "./Navigation.module.scss";
import Input from "@components/UI/molecules/Input.tsx";
import Button from "@components/UI/molecules/Button.tsx";
import { NavLink, useSearchParams } from "react-router-dom";
import React from "react";

const Navigation = () => {
  const [params, setParams] = useSearchParams({search: ""});
  const search = params.get("search");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParams({ search: e.target.value });
  };

  return (
    <nav className={classes.navigation}>
      <div className={classes["left-side"]}>
        <NavLink to={"browser"} style={{ display: "flex" }}>
          <img className={classes.logo} src={logo} alt="logo" />
        </NavLink>
        <Input
          iconBefore={"search"}
          label={"Szukaj pracy w IT"}
          type={"text"}
          name={"search"}
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div className={classes["right-side"]}>
        <Button iconBefore={"add"}>Dodaj ogłoszenie</Button>
      </div>
    </nav>
  );
};

export default Navigation;
