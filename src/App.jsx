import { useState } from "react"
import { words } from "./Data"

export default function App() {

    const [answer, setAnswer] = useState(null);
    const [question, setQuestion] = useState(null);
    const [choise1, setChoise1] = useState(null);
    const [choise2, setChoise2] = useState(null);
    const [choise3, setChoise3] = useState(null);
    const [choise4, setChoise4] = useState(null);
    const [clicked1, setClicked1] = useState(null);
    const [clicked2, setClicked2] = useState(null);
    const [clicked3, setClicked3] = useState(null);
    const [clicked4, setClicked4] = useState(null);
    const [darkMode, setDarkMode] = useState(false);


    function randomNumber(){
        return Math.floor(Math.random() * 998)
    }

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      }

    function newQuestion() {
        setClicked1(null);
        setClicked2(null);
        setClicked3(null);
        setClicked4(null);
        const randomNumber1 = randomNumber();
        const randomNumber2 = randomNumber();
        const randomNumber3 = randomNumber();
        const randomNumber4 = randomNumber();

        const choices = [words[randomNumber1].eng, words[randomNumber2].eng, words[randomNumber3].eng, words[randomNumber4].eng];
        var shuffledChoices = shuffleArray(choices);

        setQuestion(words[randomNumber1].tr)
        setAnswer(words[randomNumber1].eng)
        setChoise1(shuffledChoices[0]);
        setChoise2(shuffledChoices[1]);
        setChoise3(shuffledChoices[2]);
        setChoise4(shuffledChoices[3]);
    }

    function clickButton1(e) {
        e.preventDefault();
        if(e.target.value === answer) {
            setClicked1(true)
        } else {
            setClicked1(false)
        }
    }

    function clickButton2(e) {
        e.preventDefault();
        if(e.target.value === answer) {
            setClicked2(true)
        } else {
            setClicked2(false)
        }
    }

    function clickButton3(e) {
        e.preventDefault();
        if(e.target.value === answer) {
            setClicked3(true)
        } else {
            setClicked3(false)
        }
    }

    function clickButton4(e) {
        e.preventDefault();
        if(e.target.value === answer) {
            setClicked4(true)
        } else {
            setClicked4(false)
        }
    }

    return (

        <div className="full-page" style={darkMode === true ? {backgroundColor: '#000'} : {}}>

                <button style={darkMode === true ? {backgroundColor: '#f5f5f5', color: '#000'} : {}} id="new-question" onClick={() => (darkMode === true ? setDarkMode(false) : setDarkMode(true))}>Karanlık Mod</button>
                <button style={darkMode === true ? {backgroundColor: '#f5f5f5', color: '#000'} : {}} id="new-question" onClick={newQuestion}>Yeni Soru</button>

            <div className="container" style={darkMode === true ? {backgroundColor: '#f5f5f5', color: '#000'} : {}}>

                <div className="question">
                    <h1>{question === null ? 'Yeni soru iste' : question}</h1>
                </div>

                <div className="choices">
                    <button onClick={clickButton1} disabled={choise1 === null} style={{ backgroundColor: clicked1 ? '#008000' : clicked1 === false ? '#b22222' : ''}} value={choise1}>{choise1 === null ? 'A' : choise1}</button>
                    <button onClick={clickButton2} disabled={choise2 === null} style={{ backgroundColor: clicked2 ? '#008000' : clicked2 === false ? '#b22222' : ''}} value={choise2}>{choise2 === null ? 'B' : choise2}</button>
                    <button onClick={clickButton3} disabled={choise3 === null} style={{ backgroundColor: clicked3 ? '#008000' : clicked3 === false ? '#b22222' : ''}} value={choise3}>{choise3 === null ? 'C' : choise3}</button>
                    <button onClick={clickButton4} disabled={choise4 === null} style={{ backgroundColor: clicked4 ? '#008000' : clicked4 === false ? '#b22222' : ''}} value={choise4}>{choise4 === null ? 'D' : choise4}</button>
                </div>

            </div>


        </div>
       
    )
}