import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "./css/util.css";
import "./css/main.css";
import LoginPage from './login/login';
import SignupPage from './login/signup';
import QuizListScreen from './screens/quizListScreen';
import OpenQuiz from './screens/openQuiz';
import StartQuiz from './screens/start';
import McqsPage from './screens/mcqz';
import ResultPage from './screens/result';
import ResultPage2 from './screens/result2';

class App extends Component {

  constructor() {
    super();

    this.upDateLocalStorage();

    this.state = {
      quizList: [
        {
          name: "HTML5", list: [
            
            
            //QUIZ 1
            {
              key: 12345,
              time: '5 min',
              questions:
                [
                  {
                    question: "What does HTML stand for?",
                    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "All of the Above"],
                    ans: "Hyper Text Markup Language"
                  },

                  {
                    question: "Who is making the Web standards?",
                    options: ["Microsoft", "The World Wide Web Consortium", "Mozilla", "Google"],
                    ans: "The World Wide Web Consortium"
                  },

                  {
                    question: 'Choose the correct HTML element for the largest heading?',
                    options: ['<h6>', '<head>', '<heading>', '<h1>'],
                    ans: '<h1>'
                  }
                ]
            },


            //QUIZ 2
            {
              key: 12345,
              time: '5 min',
              questions:
                [
                  {
                    question: "Which of the following browser supports HTML5 in its latest version?",
                    options: ["Apple Safari", "Internet Explorer", "Opera", "All of the Above"],
                    ans: "Apple Safari"
                  },

                  {
                    question: "Can you use MathML tags directly in HTML5 without any plugin?",
                    options: ["True", "False"],
                    ans: "True"
                  },

                  {
                    question: 'Which of the following attribute is used to group elements?',
                    options: ['item', 'itemprop', 'itemcheck', 'itemgroup'],
                    ans: 'item'
                  }
                ]
            },


            //QUIZ 3
            {
              key: 12345,
              time: '5 min',
              questions:
                [
                  {
                    question: "What is the correct HTML element for inserting a line break?",
                    options: ["<lb>", "<br>", "<break>", "All of the Above"],
                    ans: "<br>"
                  },

                  {
                    question: "Choose the correct HTML element to define important text?",
                    options: ["<important>", "<strong>", "<b>", "<i>"],
                    ans: "<b>"
                  },

                  {
                    question: 'Choose the correct HTML element to define emphasized text?',
                    options: ['<em>', '<i>', '<italic>', 'All of the Above'],
                    ans: '<i>'
                  }
                ]
            },
          ]
        },


        {
          name: "CSS3", list: [
            
            
            //QUIZ 1
            {
              key: 12345,
              time: '5 min',
              questions:
                [
                  {
                    question: "What does CSS stand for?",
                    options: ["Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
                    ans: "Cascading Style Sheets"
                  },

                  {
                    question: "Where in an HTML document is the correct place to refer to an external style sheet?",
                    options: ["In the <body> section", "In the <head> section", "At the end of the document"],
                    ans: "In the <head> section"
                  },

                  {
                    question: 'Which HTML tag is used to define an internal style sheet?',
                    options: ['<script>', '<css>', '<style>', '<h1>'],
                    ans: '<style>'
                  }
                ]
            },


            //QUIZ 2
            {
              key: 12345,
              time: '5 min',
              questions:
                [
                  {
                    question: "Which HTML attribute is used to define inline styles?",
                    options: ["style", "font", "class", "styles"],
                    ans: "style"
                  },

                  {
                    question: "Which is the correct CSS syntax?",
                    options: ["{body:color=black;}", "{body;color:black;}", "body {color: black;}", "body:color=black;"],
                    ans: "body {color: black;}"
                  },

                  {
                    question: 'How do you insert a comment in a CSS file?',
                    options: ['// this is a comment', '// this is a comment //', '"this is a comment', '/* this is a comment */'],
                    ans: '// this is a comment'
                  }
                ]
            },


            //QUIZ 3
            {
              key: 12345,
              time: '5 min',
              questions:
                [
                  {
                    question: "Which property is used to change the background color?",
                    options: ["color", "background-color", "bgcolor", "All of the Above"],
                    ans: "background-color"
                  },

                  {
                    question: "Which CSS property is used to change the text color of an element?",
                    options: ["fgcolor", "color", "text-color"],
                    ans: "color"
                  },

                  {
                    question: 'Which CSS property controls the text size?',
                    options: ['text-style', 'text-size', 'font-style', 'font-size'],
                    ans: 'font-size'
                  }
                ]
            },
          ]
        },




        {
          name: "JavaScript", list: [
            
            
            //QUIZ 1
            {
              key: 12345,
              time: '5 min',
              questions:
                [
                  {
                    question: "Inside which HTML element do we put the JavaScript?",
                    options: ["<script>", "<javascript>", "<js>", "<scripting>"],
                    ans: "<script>"
                  },

                  {
                    question: "Where is the correct place to insert a JavaScript?",
                    options: ["In the <body> section", "In the <head> section", "Both the <head> section and the <body> section are correct"],
                    ans: "In the <body> section"
                  },

                  {
                    question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
                    options: ['<script name="xxx.js">', '<script href="xxx.js">', '<script src="xxx.js">'],
                    ans: '<script src="xxx.js">'
                  }
                ]
            },


            //QUIZ 2
            {
              key: 12345,
              time: '5 min',
              questions:
                [
                  {
                    question: "The external JavaScript file must contain the <script> tag?",
                    options: ["True", "False"],
                    ans: "False"
                  },

                  {
                    question: "How to write an IF statement in JavaScript?",
                    options: ["if i == 5 then", "if i = 5 so", "if (i == 5)", "if i = 5 then"],
                    ans: "if (i == 5)"
                  },

                  {
                    question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
                    options: ['if i <> 5', 'if (i != 5)', 'if (i <> 5)', 'if i =! 5 then'],
                    ans: 'if (i != 5)'
                  }
                ]
            },


            //QUIZ 3
            {
              key: 12345,
              time: '5 min',
              questions:
                [
                  {
                    question: "How does a WHILE loop start?",
                    options: ["while i = 1 to 10", "while (i <= 10)", "while (i <= 10; i++)", "All of the Above"],
                    ans: "while (i <= 10)"
                  },

                  {
                    question: "How does a FOR loop start?",
                    options: ["for (i <= 5; i++)", "for i = 1 to 5", "for (i = 0; i <= 5)", "for (i = 0; i <= 5; i++)"],
                    ans: "for (i = 0; i <= 5; i++)"
                  },

                  {
                    question: 'JavaScript is the same as Java?',
                    options: ['True', 'False'],
                    ans: 'False'
                  }
                ]
            },
          ]
        },


      ],
      listDis: true,
      openQuizPage: {},
      startPage: false,
      startedQuiz: {},
      keyChecked: false,
      msqNum: 0,
      length: 0,
      chks: [],
      trues: [],
      result: false,
      rightMcqs: 0,
      percentage: 0,
      user: false,
      result2: false
    }

    this.disableList = this.disableList.bind(this);
    this.back = this.back.bind(this);
    this.startFunc = this.startFunc.bind(this);
    this.keyChecked = this.keyChecked.bind(this);
    this.nextNum = this.nextNum.bind(this);
    this.tr = this.tr.bind(this);
    this.fl = this.fl.bind(this);
    this.finishMsq = this.finishMsq.bind(this);
    this.resulted = this.resulted.bind(this);
    this.resTwo = this.resTwo.bind(this);
    this.startPageBack = this.startPageBack.bind(this);

    var chk = localStorage.getItem('quizAppLogin');
    if (chk == "yes") {
      this.state.user = true;
      if (localStorage.getItem('quizStarted') == 'yes') {
        var thisjs = JSON.parse(localStorage.getItem('thisjs'));
        this.state = thisjs;
      }
    }
  }

  render() {
    const { quizList, listDis, openQuizPage, result2, user, startedQuiz, startPage, keyChecked, msqNum, chks, result, length, percentage, trues } = this.state;
    return (
      <div>
        {!user && <LoginPage login={this.onLogin} />}
        {!user && <SignupPage />}
        {user && listDis && <QuizListScreen quizList={quizList} listDisa={this.disableList} />}
        {user && !listDis && !startPage && <OpenQuiz openQuizPage={openQuizPage} back={this.back} startFunc={this.startFunc} />}
        {user && !listDis && startPage && !keyChecked && !result2 && <StartQuiz openQuizPage={openQuizPage} startedQuiz={startedQuiz} keyCheckedFunc={this.keyChecked} thisjs={this.state} startPageBack={this.startPageBack} resTwo={this.resTwo} />}
        {user && !listDis && startPage && keyChecked && !result && !result2 && <McqsPage openQuizPage={openQuizPage} startedQuiz={startedQuiz} msqNum={msqNum} nextNum={this.nextNum} finishMsq={this.finishMsq} tr={this.tr} fl={this.fl} thisjs={this.state} resTwo={this.resTwo} />}
        {user && !listDis && startPage && keyChecked && result && !result2 && <ResultPage length={length} percentage={percentage} trues={trues} resulted={this.resulted} thisjs={this.state} />}
        {result2 && <ResultPage2 />}
      </div>
    );
  }

  resTwo() {
    this.setState({
      result2: true,

    })
  }

  startPageBack() {
    this.setState({
      startPage: false
    })
  }

  nextNum() {
    const { msqNum } = this.state;
    this.setState({
      msqNum: (msqNum + 1)
    })
  }

  resulted() {
    localStorage.removeItem('quizStarted');
    localStorage.removeItem('startedQuiz');
    localStorage.removeItem('openQuizPage');
    localStorage.removeItem('msqNum');
  }

  finishMsq() {
    const { chks, startedQuiz, length, result, rightMcqs, trues, percentage } = this.state;
    var len = startedQuiz.questions.length;

    var perc = (trues.length / len * 100);
    this.setState({
      result: true,
      length: len,
      percentage: perc
    })
  }

  tr() {
    const { chks, rightMcqs, trues } = this.state;
    var tr = chks;
    var tr2 = trues;
    tr.push(true);
    tr2.push(true);
    this.setState({ chks: tr, trues: trues })
  }

  fl() {
    const { chks, rightMcqs } = this.state;
    var tr = chks;
    tr.push(false);
    this.setState({ chks: tr })
  }

  upDateLocalStorage() {
    console.log('chlgya1');
    var acounts = [
      { name: "Hasnain Ali", email: "mjhasnain15@gmail.com", password: "123456" }
    ]
    if (localStorage.getItem("accounts")) {
      console.log('Account Available');
    }
    else {
      localStorage.setItem("accounts", JSON.stringify(acounts));
    }
  }

  chkLogin() {
    var chk = localStorage.getItem('quizAppLogin');
    if (chk == "yes") {
      this.setState({
        user: true
      })
    }
  }

  startFunc(index) {
    const { startPage, openQuizPage, startedQuiz } = this.state;
    var obj = (openQuizPage.list[index]);
    this.setState({
      startPage: true,
      startedQuiz: obj
    });
  }

  keyChecked() {
    const { keyChecked } = this.state;
    this.setState({ keyChecked: true })
  }

  onLogin = () => {
    this.setState({
      user: true
    })
  }

  disableList(res) {
    const { listDis, openQuizPage, quizList } = this.state;
    this.setState({
      listDis: false,
      openQuizPage: quizList[res]
    })
  }
  back() {
    const { listDis } = this.state;
    this.setState({
      listDis: true,
    })
  }
}

export default App;
