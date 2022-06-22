import { Alert } from "./alert.js";
export class EasyHTTP{
    //  HTTP GET Request
async get(url){
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch(error){
        const alert = new Alert('Error: '+error.message,'red','#alert-container')
        alert.showAlert()
    }
}
    // HTTP POST Request
async post(url,data){
    try{
        const response = await fetch(url,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(data)
        });
        const content = await response.json();
        return content;
    }
    catch(error){
        const alert = new Alert('Error: '+error.message,'red','#alert-container')
        alert.showAlert()
    }
}
    // HTTP PUT Request
async put(url,data){
    try{
        const response = await fetch(url,{
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(data)
        });
        const content = await response.json();
        return content;
    }
    catch(error){
        const alert = new Alert('Error: '+error.message,'red','#alert-container')
        alert.showAlert()
    }
}
    // HTTP PATCH Request
async patch(url,data){
    try{
        const response = await fetch(url,{
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(data)
        });
        const content = await response.json();
        return content;
    }
    catch(error){
        const alert = new Alert('Error: '+error.message,'red','#alert-container')
        alert.showAlert()
    }
}
    // HTTP DELETE Request
async delete(url){
    try{
        const response = await fetch(url,{
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                }
        });
        const content = await response.json();
        return content;
    }
    catch(error){
        const alert = new Alert('Error: '+error.message,'red','#alert-container')
        alert.showAlert()
    }
}
}