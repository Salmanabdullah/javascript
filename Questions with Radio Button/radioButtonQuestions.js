const correctAnswers = ['B','B','A','B','A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.score');

let score = 0;

/**Event Listeners */
form.addEventListener('submit',collectAnswers);

/**Functions */
function collectAnswers(e){
    e.preventDefault();
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,]
    
    userAnswers.forEach((answer,index) =>{
        if(answer ===correctAnswers[index]){
            score += 20;
        }
        scrollTo(0,0)
        result.classList.remove('d-none');
        displayAnimation();
    });
}
// result animation with setInterval method
function displayAnimation(){
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent =`${output}%`;
        if(output === score){
            clearInterval(timer);
        } else{
            output++;
        }
    },20)
}