import React, { Component } from 'react';
class QuizListScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { quizList, listDisa } = this.props;
        console.log(listDisa);
        return (

            <div class="container">
                <button class="btn btn-danger mt-3 mb-3 float-right" onClick={this.clear}>LOGOUT</button>            
                {quizList.map((res, index) => {
                    return (
                        <div class=" mt-3" style={{ width: '50%', minWidth: 320 }}>
                            <div class="card-body">
                                <h2 class="card-title">{res.name}</h2>
                                <button class="btn btn-primary" onClick={() => listDisa(index)}>OPEN</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }

    clear() {
        localStorage.removeItem('quizAppLogin');
        window.location.reload();
    }
}

export default QuizListScreen;