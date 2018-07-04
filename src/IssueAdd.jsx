import React from 'react';

export default class IssueAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.issueAdd;
    this.props.createIssue({
      owner: form.owner.value,
      title: form.title.value,
      status: 'New',
      created: new Date(),
    });
    // clear the form for the next input
    form.owner.value = ''; form.title.value = '';
  }

  render() {
    return (
      <div>
        <form name="issueAdd" onSubmit={this.handleSubmit}>
          <input type="text" name="owner" placeholder="Owner" />&nbsp;&nbsp;
          <input type="text" name="title" placeholder="Title" />&nbsp;&nbsp;
          <button className="btn btn-warning">Add</button>
        </form>
      </div>
    );
  }
}

IssueAdd.propTypes = {
  createIssue: React.PropTypes.func.isRequired,
};
