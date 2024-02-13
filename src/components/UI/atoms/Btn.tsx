import classes from "@components/UI/atoms/Btn.module.scss";

const Btn = ({text, icon}: {text: string, icon: string}) => {
  return (
    <div>
      <button className={classes.btn}>
        {text}
        <span className="material-symbols-outlined">
          {icon}
        </span>
      </button>
    </div>
  );
};

export default Btn;