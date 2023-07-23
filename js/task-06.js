const formInput=document.querySelector("#validation-input")

formInput.addEventListener("blur", () => {
 formInput.classList.add('valid')
    if (formInput.value.length>Number(formInput.getAttribute("data-length"))) {
        formInput.classList.replace('valid','invalid');
    } else {
        formInput.classList.replace('invalid','valid');
    }
});

