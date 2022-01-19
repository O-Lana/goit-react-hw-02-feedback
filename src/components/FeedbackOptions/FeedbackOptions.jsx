export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(options => (
          <button key={options} type="button" onClick={() => onLeaveFeedback(options)}>
            {options}
          </button>
    ))
}