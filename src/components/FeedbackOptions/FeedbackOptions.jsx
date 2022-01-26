import React from 'react';
import PropTypes from 'prop-types';
import { WrapperBtn, Button } from './FeedbackOption.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <WrapperBtn>
      {options.map(option => (
        <Button key={option} type="button" onClick={() => onLeaveFeedback(option)}>
          {option}
        </Button>
      ))}
    </WrapperBtn>
  );
};

FeedbackOptions.propType = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
