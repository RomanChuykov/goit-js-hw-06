const form=document.querySelector('.login-form')
form.addEventListener('submit',subFunction);


function subFunction(event){ 
    event.preventDefault();



    if (form.elements.email.value === "" || form.elements.password.value === "") {
        return alert("Всі поля повинні бути заповнені");
      }
      const result={
        email:form.elements.email.value,
        password:form.elements.password.value,
      }
      console.log(result)
      form.elements.email.value = "" ;
      form.elements.password.value = "";
}




