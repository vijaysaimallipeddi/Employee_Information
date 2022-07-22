let firstnameEl = document.getElementById("firstname")
let nameErrmsgEl = document.getElementById("nameErrmsg")

let lastnameEl = document.getElementById("lastname")
let lasterrmsgEl = document.getElementById("lasterrmsg")

let contactEl = document.getElementById("contact")
let contacterrmsgEl = document.getElementById("contacterrmsg")

let emailEl = document.getElementById("email")
let emailerrmsgEl = document.getElementById("emailerrmsg")

let statusEl = document.getElementById("status")
let degreeEl = document.getElementById("degree")
let streamEl = document.getElementById("stream")
let genderMaleEl = document.getElementById("genderMale")
let genderFemaleEl = document.getElementById("genderFemale")

let myFormEl = document.getElementById("myForm")

let formData = {
    firstname:'',
    lastname:'',
    contact:'',
    email:'',
    status:'',
    degree:'',
    stream:'',
    genderMale:'',
    genderFemale:''
}

firstnameEl.addEventListener("change",function(event){
    if(event.target.value==="") {
        nameErrmsgEl.textContent="Required"
    }
    else{
        nameErrmsgEl.textContent=""
    }
    formData.firstname=event.target.value
    
})

lastnameEl.addEventListener("change",function(event){
    if(event.target.value === ""){
        emailerrmsgEl.textContent="Required"
    }
    else{
        emailerrmsgEl.textContent=""
    }
    formData.lastname=event.target.value
})

contactEl.addEventListener("change",function(event){
    formData.contact=event.target.value
})

emailEl.addEventListener("change",function(event){
    formData.email=event.target.value
})
statusEl.addEventListener("change",function(event){
    formData.status=event.target.value
})
degreeEl.addEventListener("change",function(event){
    formData.degree=event.target.value
})
streamEl.addEventListener("change",function(event){
    formData.stream=event.target.value
})
genderMaleEl.addEventListener("change",function(event){
    formData.genderMale=event.target.value
})
genderFemaleEl.addEventListener("change",function(event){
    formData.genderFemale=event.target.value
})
dkdh

function validateFormData(formData){
    let {firstname,lastname,email,contact}=formData
    if(firstname===""){
        nameErrmsgEl.textContent="Required"
    }
    if(lastname===""){
        lasterrmsgEl.textContent="Required"
    }
    if(email===""){
        emailerrmsgEl.textContent="Required"
    }
    if(contact===""){
        contacterrmsgEl.textContent="Required"
    }
}

// function submitFormData(formData){

// }


myFormEl.addEventListener("submit",function(event){
    event.preventDefault()
    validateFormData(formData)
    submitFormData(formData)
})



// // myFormEl.addEventListener("submit",function(event){
// //     event.preventDefault()
    
// // })

// function test(){
//     let firstnameEl = document.getElementById("firstname").value
//     let lastnameEl = document.getElementById("lastname").value
//     let contactEl = document.getElementById("contact").value
//     let emailEl = document.getElementById("email").value
//     let statusEl = document.getElementById("status").value
//     let degreeEl = document.getElementById("degree").value
//     let streamEl = document.getElementById("stream").value
//     let genderMaleEl = document.getElementById("genderMale").value
//     let genderFemaleEl = document.getElementById("genderFemale").value

//     localStorage.setItem("firstname",firstnameEl)
//     localStorage.setItem("lastname",lastnameEl)
//     localStorage.setItem("contact",contactEl)
//     localStorage.setItem("email",emailEl)
//     localStorage.setItem("status",statusEl)
//     localStorage.setItem("degree",degreeEl)
//     localStorage.setItem("stream",streamEl)
//     localStorage.setItem("genderMale",genderMaleEl)
//     localStorage.setItem("genderFemale",genderFemaleEl)

    
// }

// // let registerBtnEl = document.getElementById("registerBtn")

// // registerBtnEl.addEventListener('click',(event)=>{
// //     let firstnameEl = document.getElementById("firstname")
// //     let lastnameEl = document.getElementById("lastname")
// //     let contactEl = document.getElementById("contact")
// //     let emailEl = document.getElementById("email")
// //     let statusEl = document.getElementById("status")
// //     let degreeEl = document.getElementById("degree")
// //     let streamEl = document.getElementById("stream")
// //     let genderMaleEl = document.getElementById("genderMale")
// //     let genderFemaleEl = document.getElementById("genderFemale")

// //     firstnameEl=firstnameEl.value;
// //     localStorage.setItem("firstname",firstnameEl)

// //     lastnameEl=lastnameEl.value;
// //     localStorage.setItem("lastname",lastnameEl)

// //     contactEl=contactEl.value
// //     localStorage.setItem("contact",contactEl)
    



// // })



function saveData(){
    let firstnameEl,lastnameEl,contactEl,emailEl,statusEl,degreeEl,streamEl,genderMaleEl,genderFemaleEl

    firstnameEl = document.getElementById("firstname").value;
    lastnameEl = document.getElementById("lastname").value;
    contactEl = document.getElementById("contact").value;
    emailEl = document.getElementById("email").value;
    statusEl = document.getElementById("status").value;
    degreeEl = document.getElementById("degree").value;
    streamEl = document.getElementById("stream").value;
    genderMaleEl = document.getElementById("genderMale").value;
    genderFemaleEl = document.getElementById("genderFemale").value;


    localStorage.setItem("firstname",firstnameEl)
    localStorage.setItem("lastname",lastnameEl)
    localStorage.setItem("contact",contactEl)
    localStorage.setItem("email",emailEl)
    localStorage.setItem("status",statusEl)
    localStorage.setItem("degree",degreeEl)
    localStorage.setItem("stream",streamEl)
    localStorage.setItem("genderMale",genderMaleEl)
    localStorage.setItem("genderFemale",genderFemaleEl)

}