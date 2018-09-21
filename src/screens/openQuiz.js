import React, { Component } from 'react';

class OpenQuiz extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { openQuizPage, back, startFunc } = this.props;

        return (
            <div class="container">

                <ul class="list-group mt-5">
                    <li class="list-group-item active">{openQuizPage.name}</li>
                    {
                        openQuizPage.list.map((value, index) => {
                            return <h3 class="mt-2" style={{cursor:'pointer'}} onClick={() => startFunc(index)}>QUIZ {index + 1}</h3>
                        })
                    }
                </ul>
                <button class="btn btn-success mt-3 float-right" onClick={back}>Back</button>
            </div>

        );
    }

    start(index) {
        const { startFunc } = this.props;
        startFunc(index);
    }
}

export default OpenQuiz;