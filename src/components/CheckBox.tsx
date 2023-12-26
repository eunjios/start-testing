import classes from './CheckBox.module.css';

function CheckBox() {
  return (
    <div className={classes.container}>
      <input type="checkbox" className={classes.checkbox} />
      <p className={classes.text}>disabled button</p>
    </div>
  );
}

export default CheckBox;
