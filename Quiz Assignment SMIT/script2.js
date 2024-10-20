const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correctAnswer: "c"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "b"
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctAnswer: "d"
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Charles Dickens", "J.K. Rowling", "William Shakespeare", "Mark Twain"],
      correctAnswer: "c"
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["CO2", "O2", "H2O", "NaCl"],
      correctAnswer: "cO"
    },
    {
      question: "Which programming language is used for web development?",
      options: ["Python", "JavaScript", "C++", "Java"],
      correctAnswer: "b"
    },
    {
      question: "How many continents are there on Earth?",
      options: ["5", "6", "7", "8"],
      correctAnswer: "c"
    },
    {
      question: "Who was the first person to walk on the Moon?",
      options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
      correctAnswer: "c"
    },
    {
      question: "What is the largest mammal?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
      correctAnswer: "b"
    },
    {
      question: "What is the square root of 64?",
      options: ["6", "7", "8", "9"],
      correctAnswer: "c"
    }
  ];
  let btn = document.querySelector("button");
  let input = document.querySelectorAll("input")
  let p = document.querySelector(".p");
  let popup = document.querySelector(".popup")
  let total = quizQuestions.length;
  let right = 0;
  let wrong = 0;

 let index = 0
  const load = ()=>{
    if(index === total){
        return endQuiz();
    }
    reset()
    let h3 = document.querySelector("h3")
    let data = quizQuestions[index];
    h3.textContent = `${index+1}) ${data.question}`;

    //option 
    let input = document.querySelectorAll("input")
    input[0].nextElementSibling.textContent = data.options[0]
    input[1].nextElementSibling.textContent = data.options[1]
    input[2].nextElementSibling.textContent = data.options[2]
    input[3].nextElementSibling.textContent = data.options[3]

}
    btn.addEventListener("click", ()=>{
        let data = quizQuestions[index];
        let input = document.querySelectorAll("input")
       
        let inputValues = inputvalue()
        // console.log(inputValues.value);
        
        // console.log(inputValues);
        
        if(inputValues === data.correctAnswer){
          popup.innerHTML = "Correct!"
            right++;
            
        }else{
            wrong--;
             popup.innerHTML = "Wrong!"
        }


        popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 2000);
         
        index++;
        load();
       score()
          
    })

    function score(){
 let precentge = (right*100)/total
        p.innerHTML = `Your Score ${right}/${total} (${precentge.toFixed(2)}%)`
    }
           function inputvalue(){
            let select;
            input.forEach(inputs =>{
                if(inputs.checked){
                select = inputs.value;
                    
                }

            })
            return select;
           }

           function reset(){
            input.forEach(inputs =>{
              if(inputs.checked){
                inputs.checked = false;
                  
              }
           }
           )}
           function endQuiz(){
            document.querySelector(".main").innerHTML = `<h3>Thank You for participating! <br> Your engagement is greatly appreciated, and we hope you enjoyed the quiz!  <br></h3>`
           }



      
   
  load()