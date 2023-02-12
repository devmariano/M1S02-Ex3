
const usuario = {userEmail:'tambor.xamanico@gmail.com',userPass:'123456'}

let btn = document.getElementById('submit')
let form = document.getElementById('form-login')


form.addEventListener('submit', event => {
let user = document.getElementById('email').value;
let pass = document.getElementById('password').value


        event.preventDefault()
    if (user == '' || pass == ''){
            alert(' Todos os campos são obrigatórios')
       
     }else if(user == usuario.userEmail && pass == usuario.userPass){
        console.log('logado')
     }else{
        console.log('credenciais incorretas')       
     }
    }
)