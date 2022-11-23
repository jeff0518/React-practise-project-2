import classes from './Input.module.css'

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label className={props.label}>{props.label}</label>
      {/* 他會確實把props.input裡面的屬性都放進來，是一種快速且方便的寫法 */}
      <input {...props.input} />
    </div>
  );
}

export default Input