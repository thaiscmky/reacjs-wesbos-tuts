import React from "react";
import PropTypes from "prop-types";

class StorePicker extends React.Component {
  constructor() {
    super();
    //bind StorePicker class to goToStore method
    this.goToStore = this.goToStore.bind(this);
  }
  goToStore(e) {
    e.preventDefault();
    this.props.history.push(`/store/${this.storeInput.value}`);
  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          ref={input => {
            this.storeInput = input;
          }}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

//Surface router
StorePicker.contextTypes = {
  router: PropTypes.object
};

export default StorePicker;
