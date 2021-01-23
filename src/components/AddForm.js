import React from "react";
import { connect } from "react-redux";
import { addSmurfs } from "../actions";

class AddForm extends React.Component {
  constructor() {
    super();
    /* form values local state */
    this.state = {
      formValues: {
        name: "",
        position: "",
        nickname: "",
        description: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //formatting a nice object to add to the server
    const newSmurf = {
      name: this.state.formValues.name,
      nickname: this.state.formValues.nickname,
      position: this.state.formValues.position,
      description: this.state.formValues.description,
    };
    this.props.addSmurfs(newSmurf);
  };

  handleChange = (e) => {
    /* linking form inputs to the formValues state. keeping state local because it's not needed by other components. */
    this.setState({
      formValues: {
        ...this.state.formValues,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <section>
        <h2>Add Smurf</h2>
        <form onSubmit={this.handleSubmit}>
          {/* form takes in `name`, `position`, and `nickname`, `description`.*/}

          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <br />
            <input
              onChange={this.handleChange}
              name="name"
              id="name"
              value={this.state.formValues.name}
            />

            <label htmlFor="position">Position:</label>
            <br />
            <input
              onChange={this.handleChange}
              name="position"
              id="position"
              value={this.state.formValues.position}
            />

            <label htmlFor="nickname">Nickname:</label>
            <br />
            <input
              onChange={this.handleChange}
              name="nickname"
              id="nickname"
              value={this.state.formValues.nickname}
            />

            <label htmlFor="description">Description:</label>
            <br />
            <input
              onChange={this.handleChange}
              name="description"
              id="description"
              value={this.state.formValues.description}
            />
          </div>
          <div
            data-testid="errorAlert"
            className= { !this.props.error ? 'alert alert-danger hidden' : 'alert alert-danger'}
            role="alert"
          >
            Error:
            {
              /* conditional that posts error received from api */
              this.props.error ? ` ${this.props.error}` : ""
            }
          </div>
          <button>Submit Smurf</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return { error: state.error };
};

export default connect(mapStateToProps, { addSmurfs })(AddForm);
//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.
