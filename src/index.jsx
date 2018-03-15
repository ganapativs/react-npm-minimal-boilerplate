/**
 * Awesome component to say 🤘
 * */
import React from "react";
import PropTypes from "prop-types";

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
      <div>
        {"I'm Awesome 😎"}
        <button type="button" onClick={this.sayYo}>
          Yo!
        </button>
      </div>
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
