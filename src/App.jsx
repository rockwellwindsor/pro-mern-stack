const contentNode = document.getElementById('contents');

class IssueAdd extends React.Component {
  render() {
    return (
      <div>This is a placeholder for the issue add form.</div>
    )
  }
}

class IssueFilter extends React.Component {
  render() {
    return (
      <div>This is a placeholder for the issue filter.</div>
    )
  }
}

class IssueTable extends React.Component {
  render() {
    return (
      <div>This is a placeholder for the issue table.</div>
    )
  }
}

class IssueList extends React.Component {
  render() {
    return (
      <div>
        <h1>Issue Tracker</h1>
        <hr />
        <IssueFilter />
        <hr />
        <IssueTable />
        <hr />
        <IssueAdd />
      </div>
    )
  }
}

ReactDOM.render(<IssueList />, contentNode);
