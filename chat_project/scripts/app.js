//dom queries
const chatList = document.querySelector('.chat-list')
const newChat = document.querySelector('.new-chat')
const newName = document.querySelector('.new-name')
const alert = document.querySelector('.update-alert')
const btn = document.querySelector('.hasTagButtons')


//adding new chat
newChat.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChat.message.value.trim();
    chatroom.addChat(message)           // a promise
        .then(() => newChat.reset())
        .catch(err => console.log(err))
})

//update username
newName.addEventListener('submit', e => {
    e.preventDefault()
    const name = newName.name.value.trim();
    chatroom.updateName(name)
    newName.reset();
    alert.textContent =`Username updated to ${name}`;
    setTimeout(() => {alert.textContent = ''},3000)         //how long the alert will be visible
    
})

//selecting rooms
btn.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON'){
        chatUI.clear();                                  //clear the list
        chatroom.updateRoom(e.target.getAttribute('id'))    //then change rooms as user clicks
        chatroom.getchats(data => chatUI.render(data))      //get data of that room
    }
    
})

//check local storage
const initialName = localStorage.username ? localStorage.username : 'stranger';


//class instances
const chatroom = new Chatroom('general',initialName);
const chatUI = new ChatUI(chatList)

//get chats and render
chatroom.getchats(data => chatUI.render(data))

