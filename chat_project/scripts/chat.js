class Chatroom{
    constructor(room,username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');     //from firebase
    }
    //chat functionalities
    async addChat(message){
        const now = new Date();                 //used in Timestamp
        const chat = {                          //format a chat object
            message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        }
        //adding to the database
        const addToDatabase = await this.chats.add(chat);
        return addToDatabase;
    }
    getchats(callback){
        this.chats
        .where('room','==',this.room)                   //to set a condition
        .orderBy('created_at') 
        .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                const changeDoc = change.doc;
                if(change.type === 'added'){
                    //update ui
                    callback(change.doc.data())
                }
            })
        })
    }
}

const chatroom = new Chatroom('gaming','salman');

// chatroom.addChat('are you there!')
//     .then(() => console.log('chat added'))
//     .catch(err => console.log(err))

chatroom.getchats(data => console.log(data))