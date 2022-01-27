const correctAnswers = ['B','B','A','B','A'];
const form = document.querySelector('.quiz-form');

form.addEventListener('submit',collectAnswers);

function collectAnswers(e){
    e.preventDefault();
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,]
    let score = 0;

    userAnswers.forEach((answer,index) =>{
        if(answer ===correctAnswers[index]){
            score += 20;
        }
        
    });
    console.log(score);
}