const result=document.querySelector('#textarea-output')
const textarea=document.querySelector('#textarea')
import { EasyHTTP } from "./EasyHTTP-class.js";
import { Alert } from "./alert.js";

const http = new EasyHTTP();

const getData=()=>{
    const url=document.querySelector('#url').value
    http.get(url)
    .then(data => renderGet(data))    
}

const postData=()=>{
    try{
    const url=document.querySelector('#url').value
    const json =textarea.value
   
    const data=JSON.parse(json)
    http.post(url,data)
    .then(data => renderGet(data))
    }
    catch(error){
        const alert = new Alert('Error: '+error.message,'red','#alert-container')
        alert.showAlert()
    }
}

const putData=()=>{
    try{
    const url=document.querySelector('#url').value
    const json =textarea.value
    const data=JSON.parse(json)
    http.put(url,data,)
    .then(data => renderGet(data)) 
    }
    catch(error){
        const alert = new Alert('Error: '+error.message,'red','#alert-container')
        alert.showAlert()
    } 
}

const patchData=()=>{
    try{
    const url=document.querySelector('#url').value
    const json =textarea.value
    const data=JSON.parse(json)
    http.patch(url,data)
    .then(data => renderGet(data))
    }
    catch(error){
        const alert = new Alert('Error: '+error.message,'red','#alert-container')
        alert.showAlert()
    }
}

const deleteData=()=>{
    try{
    const url=document.querySelector('#url').value
    http.delete(url)
    .then(data => renderGet(data))
    }
    catch(error){
        const alert = new Alert('Error: '+error.message,'red','#alert-container')
        alert.showAlert()
    }
}

const renderGet=(data)=>{
    result.innerHTML=''
   result.innerHTML=JSON.stringify(data,undefined, 4)
}

document.querySelector('#get').addEventListener('click',getData);
document.querySelector('#post').addEventListener('click',postData);
document.querySelector('#put').addEventListener('click',putData);
document.querySelector('#patch').addEventListener('click',patchData);
document.querySelector('#delete').addEventListener('click',deleteData);


