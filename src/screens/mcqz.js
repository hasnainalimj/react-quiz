import React, { Component } from "react";
class McqsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: this.props.startedQuiz.questions.length,
      time: null
    };
    this.next = this.next.bind(this);
    this.finish = this.finish.bind(this);
    this.localStorageItems = this.localStorageItems.bind(this);
    this.countDown = this.countDown.bind(this);
    this.countDown();
  }

  render() {
    const { length, time } = this.state;
    const { openQuizPage, startedQuiz, msqNum, nextNum } = this.props;

    return (
      <div class="container">
        <h1 class="mt-3" style={{ color: 'black' }}>{openQuizPage.name} Quiz</h1>
        <h6 className="text-danger float-right" style={{ marginTop: 10, }}>Remaining Time : {time}</h6>
        <br />
        <br/>
        
          <div class="card-header">Question : {msqNum + 1}</div>
          <div class="card-body">
            <h3 class="card-title">{startedQuiz.questions[msqNum].question}</h3>

            {startedQuiz.questions[msqNum].options.map((value, index) => {
              return (
                <p class="card-text">
                  <div class="radio">
                    <label>
                      <input type="radio" name="quest" value={value} />
                      <h5 className="float-right">{value}</h5>
                    </label>
                  </div>
                </p>
              );
            })}

            {msqNum + 1 < length && (
              <button class="btn btn-success mt-2" onClick={this.next}>
                NEXT
              </button>
            )}
            {length == msqNum + 1 && (
              <button class="btn btn-primary mt-2" onClick={this.finish}>
                Finish
              </button>

            )}
            {/* <button class="btn btn-primary btn-lg mt-2" onClick={this.localStorageItems}>
               updateLocalStorage
             </button> */}
          </div>
        </div>

    );
  }

  next() {
    this.localStorageItems();
    const { openQuizPage, startedQuiz, msqNum, nextNum, tr, fl } = this.props;
    var radios = document.getElementsByName("quest");

    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        //   alert(radios[i].value);
        var chkd = radios[i].value;
        //   console.log(chkd);
        //   console.log(startedQuiz.questions[msqNum].ans);
        if (chkd == startedQuiz.questions[msqNum].ans) {
          console.log(startedQuiz.questions[msqNum].ans);
          tr();
        } else {
          console.log("miss");
          fl();
        }
      }
    }
    nextNum();
  }

  finish() {
    this.localStorageItems;
    const { openQuizPage, startedQuiz, msqNum, finishMsq, tr, fl } = this.props;
    var radios = document.getElementsByName("quest");

    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        //   alert(radios[i].value);
        var chkd = radios[i].value;
        //   console.log(chkd);
        //   console.log(startedQuiz.questions[msqNum].ans);
        if (chkd == startedQuiz.questions[msqNum].ans) {
          console.log(startedQuiz.questions[msqNum].ans);
          tr();
        } else {
          console.log("miss");
          fl();
        }
      }
    }

    clearInterval();
    localStorage.removeItem('countDownDate');
    finishMsq();
  }
  countDown() {
    const { openQuizPage, startedQuiz, finishMsq } = this.props;
    const { time } = this.state;
    var lastTime = parseInt(startedQuiz.time) * 60000;
    // console.log("aaaaa"+lastTime);
    var now = new Date().getTime();
    var countDownDate;
    if (localStorage.getItem('countDownDate')) {
      countDownDate = JSON.parse(localStorage.getItem('countDownDate'));
    }
    else {
      countDownDate = new Date().setTime(now + lastTime);
      localStorage.setItem('countDownDate', JSON.stringify(countDownDate));
    }
    // var countDownDate = new Date().setTime(now + lastTime);
    // localStorage.setItem('countDownDate',JSON.stringify(countDownDate));
    console.log(this.countDown);
    var th = this;
    var x = setInterval(function () {

      var now = new Date().getTime();
      var distance = countDownDate - now;
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // console.log(minutes + ":" + seconds + "s "); 
      th.setState({
        time: minutes + ":" + seconds + "s "
      })
      if (distance < 0) {
        clearInterval(x);
        localStorage.removeItem('countDownDate');

        finishMsq();
        alert("EXPIRED");
      }
    }, 1000);




    // setInterval(() => { console.log("Hello");
    // var time = new Date().toLocaleTimeString();

    // this.setState({
    //     // time
    // })

    // }, 1000);

  }

  localStorageItems() {
    const { openQuizPage, startedQuiz, msqNum, nextNum, thisjs } = this.props;
    // console.log(openQuizPage);
    // console.log(startedQuiz);
    // console.log(msqNum);
    console.log(thisjs);

    localStorage.setItem('quizStarted', 'yes');
    localStorage.setItem('thisjs', JSON.stringify(thisjs));
    // localStorage.setItem('startedQuiz',JSON.stringify(startedQuiz));
    // localStorage.setItem('msqNum',JSON.stringify(msqNum+1));

  }
}

export default McqsPage;
