/**
 * Awesome component to say 🤘
 * */
import React from "react";
import PropTypes from "prop-types";
import { css } from "react-emotion";

const background = "#3f51b5";
const backgroundHover = "#673ab7";
const textColor = "#ffffff";

const buttonClass = css`
  background-color: ${background};
  border: 0;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  color: ${textColor};
  line-height: 1.4;
  transition: background 0.15s ease-out;
  &:hover {
    cursor: pointer;
    background-color: ${backgroundHover};
    transition: background 0.25s ease-in;
  }
`;

class AwesomeComponent extends React.Component {
  state = {
    yoCount: false
  };

  sayYo = () => {
    const { sayYo } = this.props;

    this.setState(
      ({ yoCount }) => ({ yoCount: yoCount + 1 }),
      () => {
        const { yoCount } = this.state;
        sayYo("".padStart(yoCount * "🤘".length, "🤘")); // emoji's have different byte sizes 🤓
      }
    );
  };

  render() {
    return (
      <button type="button" onClick={this.sayYo} className={buttonClass}>
        Yo
        <span role="img" aria-label="yo">
          🤘
        </span>
      </button>
    );
  }
}

AwesomeComponent.propTypes = {
  sayYo: PropTypes.func
};

AwesomeComponent.defaultProps = {
  sayYo: yoMessage => alert(yoMessage) // eslint-disable-line no-alert
};

export default AwesomeComponent;
