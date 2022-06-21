const result=document.querySelector('.result')
import { EasyHTTP } from "./EasyHTTP-class.js";

const url='https://ajarek-database-default-rtdb.europe-west1.firebasedatabase.app/.json';
const urlPut='https://ajarek-database-default-rtdb.europe-west1.firebasedatabase.app/-N57OuJ58sgd1lDY0vb9/.json';
const urlPatch='https://ajarek-database-default-rtdb.europe-west1.firebasedatabase.app/-N57OuJ58sgd1lDY0vb9/.json';

const urlDelete=`https://ajarek-database-default-rtdb.europe-west1.firebasedatabase.app/-N57Kb1MZMfozbuJK6UP/.json`;
const data={ "name": "Ajarek",
    "surname": "Jarecki",
    "age": "62"}
const dataPatch={
    "name": "Ajózek",
}


const http = new EasyHTTP();

const getData=()=>{
    http.get(url)
    .then(data => renderGet(data))
    
}

const postData=()=>{
    http.post(url,data)
    .then(data => {
        result.innerHTML=''
        result.innerHTML=`<li>id=${data.name}=> data posted </li>`
    })
}
const putData=()=>{
    http.put(urlPut,data,)
    .then(data => {
        result.innerHTML=''
        result.innerHTML=`<li>name=${data.name} surname=${data.surname} age=${data.age} => data put </li>`
    })
    
}

const patchData=()=>{
    http.patch(urlPatch,dataPatch)
    .then(data => {
        result.innerHTML=''
        result.innerHTML=`<li>name=${data.name}  => data patched </li>`
    })
}

const deleteData=()=>{
    http.delete(urlDelete)
    .then(data => {
        if(!data){
        result.innerHTML=`<li>data=${data}=> data deleted </li>`
        }
    })
}

document.querySelector('#get').addEventListener('click',getData);
document.querySelector('#post').addEventListener('click',postData);
document.querySelector('#put').addEventListener('click',putData);
document.querySelector('#patch').addEventListener('click',patchData);
document.querySelector('#delete').addEventListener('click',deleteData);

const renderGet=(data)=>{
    result.innerHTML=''
    for(let key in data){
        result.innerHTML+=`<li>
         id: ${key}
         name: ${data[key].name}
         surname: ${data[key].surname}
         age: ${data[key].age}</li>`
    }
}