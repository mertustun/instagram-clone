const formDOM = document.querySelector('form')
const usernameInput = document.querySelector('.username')
const passwordInput = document.querySelector('.password')

let username = "admin"
let password = "admin123"
const succesfullURL = "/Instagram Clone/index.html"
/* formDOM.addEventListener('submit', userLogin) */

// use onsubmit method in form tag in html
function userLogin(){
    if(usernameInput.value.trim() === username && passwordInput.value.trim() === password){
        // console.log('You have succesfully login.')
        return formDOM.action = succesfullURL
    }else{
        alert('please enter a valid username or password')
    }
    // console.log('is submit event working ?')
}

