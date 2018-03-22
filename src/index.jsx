/**
 * Awesome component to say 🤘
 * */
import React from "react";
import PropTypes from "prop-types";
import { css } from "react-emotion";

const defaultBackground = "#3f51b5";
const hoveredBackground = "#673ab7";
const textColor = "#ffffff";

class AwesomeComponent extends React.Component {
  state = {
    saidYo: false
  };

  sayYo = () => {
    const { saidYo } = this.state;
    const { sayYo } = this.props;

    if (!saidYo) {
      this.setState({ saidYo: true }, () => {
        sayYo();
      });
    }
  };

  render() {
    return (
      <button
        type="button"
        onClick={this.sayYo}
        className={css`
          background-color: ${defaultBackground};
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
            background-color: ${hoveredBackground};
            transition: background 0.25s ease-in;
          }
        `}
      >
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
  sayYo: () => console.info("🤘") // eslint-disable-line no-console
};

export default AwesomeComponent;
