import classes from "./Card.module.scss";

const Card = ({ icon, title, amount }) => {
  return (
    <div className={classes.card}>
      <span className={classes.icon}>{icon}</span>
      <div>
        <h4>{title}</h4>
        <p>{amount}</p>
      </div>
    </div>
  );
};

export default Card;
