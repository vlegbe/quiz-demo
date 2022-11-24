// Questions for the quiz from Questions.JS 

import React, { useState } from 'react';

export default function App() {
    const questions = [{
            questionText: "How long is an Olympic swimming pool (in meters)",

            answerOptions: [
                { answerText: '50', isCorrect: true },
                { answerText: '60', isCorrect: false },
                { answerText: '75', isCorrect: false },
                { answerText: '100', isCorrect: false },
            ],
        },
        {
            questionText: "Which country do cities of Perth, Adelade & Brisbane belong to?",
            answerOptions: [
                { answerText: 'France', isCorrect: false },
                { answerText: 'Portugal', isCorrect: false },
                { answerText: 'Germany', isCorrect: false },
                { answerText: 'Australia', isCorrect: true },
            ],
        },
        {
            questionText: "What geometric shape is generally used for stop signs?",
            answerOptions: [
                { answerText: 'Square', isCorrect: false },
                { answerText: 'Octagon', isCorrect: true },
                { answerText: 'Rectangle', isCorrect: false },
                { answerText: 'Triangle', isCorrect: false },
            ],
        },
        {
            questionText: "What is cynophobia?",
            answerOptions: [
                { answerText: 'Fear of spiders', isCorrect: false },
                { answerText: 'Fear of darkness', isCorrect: false },
                { answerText: 'Fear of dogs', isCorrect: true },
                { answerText: 'Fear of heights', isCorrect: false },
            ],
        },
        {
            questionText: "How many languages are written from right to left?",
            answerOptions: [
                { answerText: "12", isCorrect: true },
                { answerText: "10", isCorrect: false },
                { answerText: "15", isCorrect: false },
                { answerText: "1", isCorrect: false },
            ],
        },
        {
            questionText: "Which animal can be seen on the Porsche logo?",
            answers: [
                { answerText: "Fox", isCorrect: false },
                { answerText: "Wolf", isCorrect: false },
                { answerText: "Horse", isCorrect: true },
                { answerText: "Bull", isCorrect: false },
            ],
        },
        {
            questionText: "What is the name of the largest ocean on earth?",
            answers: [
                { answerText: "Pacific Ocean", isCorrect: true },
                { answerText: "Atlantic Ocean", isCorrect: false },
                { answerText: "Indian Ocean", isCorrect: false },
                { answerText: "Artic Ocean", isCorrect: false },
            ],
        },
        {
            questionText: "Demolition of the Berlin wall separating East and West Germany began in what year?",
            answers: [
                { answerText: "1980", isCorrect: false },
                { answerText: "1989", isCorrect: true },
                { answerText: "1992", isCorrect: false },
                { answerText: "1990", isCorrect: false },
            ],
        },
        {
            questionText: "What is the rarest M&M color?",
            answers: [
                { answerText: "Brown", isCorrect: true },
                { answerText: "Green", isCorrect: false },
                { answerText: "Red", isCorrect: false },
                { answerText: "Blue", isCorrect: false },
            ],
        },
        {
            questionText: "Which country invented ice cream?",
            answers: [
                { answerText: "India", isCorrect: false },
                { answerText: "China", isCorrect: true },
                { answerText: "England", isCorrect: false },
                { answerText: "Brazil", isCorrect: false },
            ],
        },
    ];


    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    //Increase score by 1 and tells user it is correct

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect === true) {
            alert("Correct!")
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };


    return ( <
        div className = 'app' > {
            showScore ? ( <
                div className = 'score-section' >
                You scored { score }
                out of { questions.length } <
                /div>
            ) : ( <
                >
                <
                div className = 'question-section' >
                <
                div className = 'question-count' >
                <
                span > Question { currentQuestion + 1 } < /span>/ { questions.length } <
                /div> <
                div className = 'question-text' > { questions[currentQuestion].questionText } < /div> <
                /div> <
                div className = 'answer-section' > {
                    questions[currentQuestion].answerOptions.map((answerOption) => ( <
                        button onClick = {
                            () => handleAnswerOptionClick(answerOption.isCorrect) } > { answerOption.answerText } < /button>
                    ))
                } <
                /div> <
                />
            )
        } <
        /div>
    );
}