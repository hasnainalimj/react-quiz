import React, { Component } from 'react';
class StartQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
        }
        this.continue = this.continue.bind(this);
        this.updateKey = this.updateKey.bind(this);
        this.localStorageItems = this.localStorageItems.bind(this);
        this.chk = this.chk.bind(this);
        this.chk();
    }

    chk() {
        const { startedQuiz, resTwo } = this.props;
        var user = JSON.parse(localStorage.getItem('currentUser'));
        var name = user.name;
        var arr = JSON.parse(localStorage.getItem('resultArray'));
        if (localStorage.getItem('resultArray')) {
            arr.map(res => {
                var st = JSON.stringify(res.quiz);
                var usr = JSON.stringify(res.user);
                if (JSON.stringify(res.quiz) == JSON.stringify(startedQuiz) && JSON.stringify(res.user) == JSON.stringify(name)) {
                    localStorage.setItem('resultTwo', JSON.stringify(res));
                    resTwo();
                }
            })
        }
    }

    render() {
        const { openQuizPage, startedQuiz, startPageBack } = this.props;
        return (
            <div class="container">
                <h1 class="mt-5">{openQuizPage.name} Quiz</h1>
                <p>Time : {startedQuiz.time}</p>
                <input type="number" class="form-control" onChange={this.updateKey} value={this.state.key} placeholder="Enter Proctoring Key" />
                <button class="btn btn-success mt-2" onClick={() => this.continue()}>Start</button>
                <button class="btn btn-warning mt-5 float-right" style={{ color: "blue" }} onClick={startPageBack}>BACK</button>
            </div>
        );
    }

    continue() {
        this.localStorageItems();
        const { startedQuiz, keyCheckedFunc } = this.props;
        const { key } = this.state;
        if (key == startedQuiz.key) {
            keyCheckedFunc();
        }
    }

    localStorageItems() {
        const { openQuizPage, startedQuiz, msqNum, nextNum, thisjs } = this.props;
        localStorage.setItem('quizStarted', 'yes');
        localStorage.setItem('thisjs', JSON.stringify(thisjs));
    }

    updateKey(e) {
        this.setState({ key: e.target.value });
    }
}

export default StartQuiz;