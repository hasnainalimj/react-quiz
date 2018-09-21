import React, { Component } from 'react';
class ResultPage extends Component {
    constructor(props) {
        super(props);
        this.props.resulted();

        if (localStorage.getItem('resultArray')) {
            console.log('making result array****');
        }
        else {
            localStorage.setItem('resultArray', JSON.stringify([]));
        }

        var user = JSON.parse(localStorage.getItem('currentUser'));

        const forLocal = {
            quiz: this.props.thisjs.startedQuiz,
            date: new Date().toLocaleDateString(),
            score: this.props.trues.length + "/" + this.props.length,
            percentage: this.props.percentage + "%",
            user: user.name
        };

        var arr = JSON.parse(localStorage.getItem('resultArray'));
        arr.push(forLocal);
        localStorage.setItem('resultArray', JSON.stringify(arr));
    }
    render() {

        const { length, percentage, trues } = this.props;
        return (
            <div class="container">

                <h1 class="mt-3" style={{ color: 'black' }}>RESULT</h1>

                <table class="table mt-3">
                    <tbody>
                        <tr>
                            <td>Correct Answers : </td>
                            <td>{trues.length} / {length}</td>
                        </tr>
                        <tr>
                            <td>Percentage : </td>
                            <td>{percentage}%</td>
                        </tr>
                        <tr>
                            <td>Date : </td>
                            <td>{new Date().toLocaleDateString()}</td>
                        </tr>
                    </tbody>
                </table>
                
                <button class="btn btn-primary float-right mt-3" onClick={this.load}>Done</button>
            </div>
        );
    }

    load() {
        window.location.reload();
    }
}

export default ResultPage;