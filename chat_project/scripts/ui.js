class ChatUI{
    constructor(list){
        this.list = list
    }
    render(data){
        const submitTime = dateFns.distanceInWordsToNow(
            data.created_at.toDate(),
            {addSuffix:true}
        )
        const html = `
        <li class="list-group-item">
            <span class="username">${data.username}:</span>
            <span class="message">${data.message}</span>
            <div class="time">${submitTime}</div>
        </li>
        `;

        this.list.innerHTML += html;
    }
    clear (){
        this.list.innerHTML = "";
    }
}