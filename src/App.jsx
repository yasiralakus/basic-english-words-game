import { useState } from "react"
import { words } from "./Data"

export default function App() {

    const [answer, setAnswer] = useState(null);
    const [question, setQuestion] = useState(null);
    const [choise1, setChoise1] = useState(null);
    const [choise2, setChoise2] = useState(null);
    const [choise3, setChoise3] = useState(null);
    const [choise4, setChoise4] = useState(null);
    const [isTrue, setIsTrue] = useState(null);
    const [isClick, setIsClick] = useState(false);

    function randomNumber() {
        return Math.floor(Math.random() * 1000)
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

    function newQuestion(e) {
        const sayi1 = randomNumber();
        const sayi2 = randomNumber();
        const sayi3 = randomNumber();
        const sayi4 = randomNumber();

        const random = Math.floor(Math.random() * 4) + 1

        setQuestion(words[sayi1].eng)
        setAnswer(words[sayi1].tr)
        const choises = [words[sayi1].tr,words[sayi2].tr,words[sayi3].tr,words[sayi4].tr,]
        const shuffledChoices = shuffleArray(choises);
        setChoise1(shuffledChoices[0]);
        setChoise2(shuffledChoices[1]);
        setChoise3(shuffledChoices[2]);
        setChoise4(shuffledChoices[3]);
    }

    function control(e) {
        setIsClick(true);
        if(e.target.value === answer) {
            alert('doğru')
            newQuestion();
        } else {
            alert('yanlış')
        }
    }

    function showAnswer(e) {
        e.preventDefault();
        alert(answer)
    }

    return (

        <div className="full-page">

            <div className="choises-other">
                <button onClick={newQuestion}>Yeni soru</button>
                <button onClick={showAnswer}>Cevabı Öğren</button>
            </div>

            <div className="container">

                <div className="question">

                    <h1>{question === null ? 'Soru' : question}</h1>

                </div>

                <div className="choises">

                    <button value={choise1} disabled={choise1 === null} onClick={control}>{choise1 === null ? 'A' : choise1}</button>
                    <button value={choise2} disabled={choise2 === null} onClick={control}>{choise2 === null ? 'B' : choise2}</button>
                    <button value={choise3} disabled={choise3 === null} onClick={control}>{choise3 === null ? 'C' : choise3}</button>
                    <button value={choise4} disabled={choise4 === null} onClick={control}>{choise4 === null ? 'D' : choise4}</button>

                </div>

            </div>

        </div>

    )
}