const result=document.querySelector('#textarea-output')
const textarea=document.querySelector('#textarea')
import { EasyHTTP } from "./EasyHTTP-class.js";
// const url='https://ajarek-database-default-rtdb.europe-west1.firebasedatabase.app/.json';
const http = new EasyHTTP();

const getData=()=>{
    const url=document.querySelector('#url').value
    http.get(url)
    .then(data => renderGet(data))    
}

const postData=()=>{
    const url=document.querySelector('#url').value
    const json =textarea.value
    const data=JSON.parse(json)
    http.post(url,data)
    .then(data => renderGet(data))
}

const putData=()=>{
    const url=document.querySelector('#url').value
    const json =textarea.value
    const data=JSON.parse(json)
    http.put(url,data,)
    .then(data => renderGet(data))  
}

const patchData=()=>{
    const url=document.querySelector('#url').value
    const json =textarea.value
    const data=JSON.parse(json)
    http.patch(url,data)
    .then(data => renderGet(data))
}

const deleteData=()=>{
    const url=document.querySelector('#url').value
    http.delete(url)
    .then(data => renderGet(data))
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


