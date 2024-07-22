import { redirect } from "react-router-dom"

export function isSignIn(){
    let token = localStorage.getItem('token')
    if(!token){
        return redirect('/signin')
    }
    else{
        return null;
    }
}