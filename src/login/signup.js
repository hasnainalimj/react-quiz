import React, { Component } from 'react';
import './../bootstrap.min.css';

class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePass = this.updatePass.bind(this);
        this.updateName = this.updateName.bind(this);
        this.login = this.login.bind(this);
    }

    updateEmail(e) {
        this.setState({ email: e.target.value });
    }
    updateName(e) {
        this.setState({ name: e.target.value });
    }
    updatePass(e) {
        this.setState({ pass: e.target.value });
    }

    login() {
        const { email, pass, name } = this.state;
        var a = JSON.parse(localStorage.getItem('accounts'));
        var newUs = {
            name: name,
            email: email,
            password: pass
        }
        a.push(newUs);
        localStorage.setItem('accounts', JSON.stringify(a));
        alert("Registerd Successfully");
    }
    render() {
        return (
            <div class="container">
                <h1 className="mt-5">Create Account</h1>
                <input type="text" name="text" placeholder="UserName" onChange={this.updateName} value={this.state.name} className="form-control"/>              
                <input type="text" name="email" placeholder="Email" onChange={this.updateEmail} value={this.state.email} className="form-control mt-1"/>                
                <input type="password" name="pass" placeholder="Password" onChange={this.updatePass} value={this.state.pass} className="form-control mt-1"/>
                <button className="btn btn-primary mt-2" onClick={this.login}>Signup</button>
            </div>
        );
    }
}

export default SignupPage;