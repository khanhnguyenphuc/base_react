var React = require('react');
var ReactDOM = require('react-dom');

let Hello = React.createClass({
render: function() {
  return <h1>Hello, world!</h1>;
}
});
let FormLogin = React.createClass({
getInitialState: function() {
  return {email: '', pwd: '', isShowError: false};
},
handleSubmit: function(e) {
  e.preventDefault();
  let email = this.state.email.trim();
  let pwd = this.state.pwd.trim();
  if (!email) {
    this.setState({
      isShowErrorEmail: true
    });
  }
  if (!pwd) {
    this.setState({
      isShowErrorPwd: true
    });
  }
},
onChangeEmail: function(e) {
  this.setState({
    email: e.target.value,
    isShowErrorEmail: false
  });
},
onChangePwd: function(e) {
  this.setState({
    pwd: e.target.value,
    isShowErrorPwd: false
  });
},
render: function() {
  return (
    <form onSubmit={this.handleSubmit}>
    <div className={this.state.isShowErrorEmail ? "form-group has-error" : "form-group"}>
      <label htmlFor="email">Email address:</label>
      <input 
        onChange={this.onChangeEmail}
        placeholder={!this.state.isShowErrorEmail ? "Input Your Email" : "Email is incorrect"} 
        type="email" className="form-control" id="email"/>
    </div>
    <div className={this.state.isShowErrorPwd ? "form-group has-error" : "form-group"}>
      <label htmlFor="pwd">Password:</label>
      <input 
        onChange={this.onChangePwd}
        placeholder={!this.state.isShowErrorPwd ? "Input Your Password" : "Password is not empty"} 
        type="password" className="form-control" id="pwd"/>
    </div>
    <button type="submit" className="btn btn-default">Submit</button>
  </form>
  );
}
});
ReactDOM.render(
<div className="container">
  <Hello />
  <FormLogin />
</div>,
document.getElementById('example')
);