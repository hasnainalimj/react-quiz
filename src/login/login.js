import React, { Component } from 'react';
import './../bootstrap.min.css';

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
		this.updateEmail = this.updateEmail.bind(this);
		this.updatePass = this.updatePass.bind(this);
		this.login = this.login.bind(this);
	}

	updateEmail(e) {
		this.setState({ email: e.target.value });
	}
	updatePass(e) {
		this.setState({ pass: e.target.value });
	}

	login() {
		const { email, pass, } = this.state;
		const { login } = this.props;
		var a = JSON.parse(localStorage.getItem('accounts'));
		a.map(res => {
			if (email == res.email && pass == res.password) {
				var user = res;
				localStorage.setItem('currentUser', JSON.stringify(user));
				localStorage.setItem("quizAppLogin", "yes");
				login();
			}
			else {
				console.log('Invalid Email or Password!');
			}
		})
	}
	render() {
		return (
			<div class="container">
				<h1 className="mt-5">Login</h1>
				<input type="text" name="email" placeholder="Email" onChange={this.updateEmail} value={this.state.email} className="form-control" />
				<input type="password" name="pass" placeholder="Password" onChange={this.updatePass} value={this.state.pass} className="form-control mt-1" />
				<button className="btn btn-primary mt-2" onClick={this.login}>Login</button>
			</div>
		);
	}
}

export default LoginPage;