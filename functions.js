
const usuario = {userEmail:'tambor.xamanico@gmail.com',userPass:'123456'}

let btn = document.getElementById('submit')
let form = document.getElementById('form-login')

//verifica se ja tem elementos no local storage
function verifica(){
   if(  localStorage.getItem('email') && localStorage.getItem('pass') ){
      console.log("ja logado")
      window.location='logado.html'
   }else{
      console.log("precisa logar")
   }
}
verifica()
//grava login e senha no local storage e avança para pagina logado
form.addEventListener('submit', event => {
   
let user = document.getElementById('email').value;
let pass = document.getElementById('password').value
const stringJson = JSON.stringify(usuario)
        event.preventDefault()
    if (user == '' || pass == ''){
            alert(' Todos os campos são obrigatórios')
     }else if(user == usuario.userEmail && pass == usuario.userPass){
        console.log('logado')
        localStorage.setItem('email',user)
        localStorage.setItem('pass',pass)
        window.location="./logado.html"
             }else{
        console.log('credenciais incorretas')       
     }
    }
)