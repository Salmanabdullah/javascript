/********how http request works 
 * there are 5 readystate. 0 when a request is created and 4 when its done.
*/
function getTodos(){
    const request = new XMLHttpRequest();
    
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200 ){
            console.log(request.responseText);
        } else if (request.readyState === 4){
            console.log('Could not fetch any data');
        }
    })
    
    request.open('GET','https://jsonplaceholder.typicode.com/todos/');
    request.send();
}

getTodos();



/**to make request function reusable */

function getTodos(callback){
    const request = new XMLHttpRequest();
    
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200 ){
            const newData = JSON.parse(request.responseText)
            callback(undefined, newData);
        } else if (request.readyState === 4){
            callback('Could not fetch any data', undefined);
        }
    })
    
    request.open('GET','https://jsonplaceholder.typicode.com/todos/');
    request.send();
}

getTodos((err,data) =>{
    console.log('callback is fired');
    // console.log(err,data);
    if(err){
        console.log(err);
    }else {
        console.log(data);}
    });
    






/***********example of callback HEll. makeRequest() is called inside another
 * makeRequest. so many nested callback spoils code readability.
 */

function makeRequest(resource, callback){
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange',() => {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if(request.readyState === 4){
            callback('could not fetch any data', undefined);
        }
    });

    request.open('GET', resource);
    request.send();
}
   
/**callback inside callback, inside callback, inside callback */
makeRequest('nantu.json',(err,data)=> {
    console.log(data);
    makeRequest('pintu.json',(err,data)=> {
        console.log(data);
        makeRequest('chintu.json',(err, data)=> {
            console.log(data);
        });
    });
});



/*****TO get rid of nested callback we use Promise */

function makeRequest(resource){
    return new Promise((resolve, reject)=>{
        const request = new XMLHttpRequest();
    
        request.addEventListener('readystatechange',() => {
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if(request.readyState === 4){
                reject('error while fetching resources');
            }
        });
    
        request.open('GET', resource);
        request.send();

    });
}

makeRequest('nantu.json').then((data)=>{
    console.log('promise 1 resolved:', data);
    return makeRequest('pintu.json')
}).then((data)=> {
    console.log('promise 2 resolved',data);
    return makeRequest('chintu.json')
}).then((data)=>{
    console.log('promise 3 resolved',data);
}).catch((err)=>{
    console.log('promise rejected:',err);
})