import PropTypes from 'prop-types';
import style from 'components/Feedback/Feedback.module.css';


const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button key={option} onClick={() => onLeaveFeedback(option)} className={style.btn}>
            {option}
          </button>
        );
      })}
    </div>
  );
}

Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;