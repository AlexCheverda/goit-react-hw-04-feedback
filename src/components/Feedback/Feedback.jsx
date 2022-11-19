import PropTypes from 'prop-types';
import style from 'components/Feedback/Feedback.module.css';


function Feedback({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => (
        <button key={option} onClick={() => onLeaveFeedback(option)} className={style.btn}>
          {option}
        </button>
      ))}
    </div>
  );
}

Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;