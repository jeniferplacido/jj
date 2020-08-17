function login(form){
form.nome.value= form.nome.value.toLowerCase()
form.senha.value= form.senha.value.toLowerCase()

if(form.nome.value=="Jenifer" && form.senha.value=="1234" ||form.nome.value=="Jonathan" && form.senha.value=="12345"){
    location="login.html"
}else{
    form.nome.value=""
    form.senha.value=""
    alert("Os dados estão incorretos!")
}
}