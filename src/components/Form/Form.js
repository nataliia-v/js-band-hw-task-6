import * as React from 'react';
import './Form.css';

export class Form extends React.Component{

  constructor (props) {
    super(props);

    this.state = {
      title: "",
      description: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target);
    this.setState({ title: event.target.value});
  }

  handleSubmit(event) {
    const { value } = this.state;
    console.log(`A name was submitted: ${value}`);
    event.preventDefault();
  }

  render() {
    const { title, description } = this.state;

    return (
      <form className="form" onSubmit={this.handleSubmit}>

        <label>
          <span>Title:</span>
          <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={this.handleChange}
          />
        </label>

        <label>
          <span>Description:</span>
          <textarea

            value={description}
            placeholder="Description"
            onChange={this.handleChange}
          />
        </label>

        <label>
          <span>Priority:</span>
          <select className="selectpicker" data-style="btn-primary">
            <option value="High">High</option>
            <option value="Normal">Normal</option>
            <option value="Low">Low</option>
          </select>
        </label>

        <div>
          <button type="button" className="btn-outline-secondary">Cancel</button>
          <button type="submit" className="btn-outline-secondary">Save</button>
        </div>

      </form>
    );
  };
}

