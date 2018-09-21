import React, { Component } from "react";
class ResultPage2 extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);

    var res = JSON.parse(localStorage.getItem("resultTwo"));
    console.log(res);
    this.state = {
      score: res.score,
      percentage: res.percentage,
      date: res.date
    };

    localStorage.removeItem("resultTwo");
  }
  render() {
    const { score, percentage, date } = this.state;
    return (
      <div class="container">
        <h1 class="mt-3" style={{ color: "black" }}>RESULT</h1>

        <table class="table mt-3">
          <tbody>

            <tr class="success">
              <td>Correct Answers : </td>
              <td>{score}</td>
            </tr>

            <tr class="danger">
              <td>Percentage : </td>
              <td>{percentage}</td>
            </tr>

            <tr class="warning">
              <td>Date : </td>
              <td>{date}</td>
            </tr>

          </tbody>
        </table>

        <button class="btn btn-primary float-right mt-3" onClick={this.load}>Back</button>
      </div>
    );
  }
  
  load() {
    window.location.reload();
  }
}

export default ResultPage2;
