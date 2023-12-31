import './App.css';
import { useState } from "react";
import titleData from './Titles.json';
import questionData from './Questions.json';
import answerData from './Answers.json';

function App(){
    const [title, setTitle] = useState(0);
    const [question, setQuestion] = useState(0);
    const [answer, setAnswer] = useState(0);

    const renderTitle = () => { return titleData.find(item => item.id === title).title }; 
    const renderQuestion = () => { return questionData.find(item => item.id === question).question };
    const renderAnswer = () => { 
        if (answer === 4){ return <img className="Image" src={answerData.find(item => item.id === answer).answer} alt="Virtual DOM"/> }
        else { return answerData.find(item => item.id === answer).answer }
        };

    const handleRestart = () => {setTitle(0); setQuestion(0); setAnswer(0)};
    const handlePrev = () => {if (title > 0) {setTitle(title-1); setQuestion(question-1); setAnswer(answer-1)}};
    const handleNext = () => {if (title < 4) {setTitle(title+1); setQuestion(question+1); setAnswer(answer+1)}};

    return(
        <div>
            <div name="Botones" className="Buttons">
                <button type="button" className="Button" onClick={handleRestart}> Restart </button>
                <button type="button" className="Button" onClick={handlePrev}> Prev </button>
                <button type="button" className="Button" onClick={handleNext}> Next </button>
            </div>   
            <hr></hr>
            <div name="Titulo&Pregunta">
                <div className="Title">{renderTitle()}</div>
                <div className="Question">{renderQuestion()}</div>
            </div>
            <hr></hr>
            <div name="Respuesta">
                <div className="Answer">{renderAnswer()}</div>
            </div>
        </div> 
    );
}

export default App;
