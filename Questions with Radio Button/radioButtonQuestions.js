const correctAnswers = ['B','B','A','B','A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.score');

/**Event Listeners */
form.addEventListener('submit',collectAnswers);

/**Functions */
function collectAnswers(e){
    e.preventDefault();
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,]
    let score = 0;

    userAnswers.forEach((answer,index) =>{
        if(answer ===correctAnswers[index]){
            score += 20;
        }
        result.querySelector('span').textContent = score + '%';
        result.classList.remove('d-none');
        scrollTo(0,0)
    });
}