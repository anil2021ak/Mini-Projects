//Global variable.
var row = null;

function Submit() {
    var dataEntered = retrieveData();
    var readData = readDataFromLocalStorage(dataEntered);
    if(dataEntered == false){
        msg.textContent = "Please Enter Data!"
    }
    else{
        if(row == null){
            insert(readData);
            msg.textContent = "Data Inserted"
        }
        else{
            update();
            msg.textContent = "Data Updated"
        }    
    }
    document.getElementById("form").reset();
   
}

//Create
//Retrieving data from form.

function retrieveData(){
    var name1 = document.getElementById("name").value;
    var job = document.getElementById("job").value;
    var exp = document.getElementById("exp").value;
    var gender = "";
    var genderEle = document.getElementsByName('gender');
    for(var radio of genderEle){
        if(radio.checked){
            gender=(radio.value)
        }
    }
    var role = "";
    var roleEle = document.getElementsByName("role");
    for(var option of roleEle){
        if(option.selected){
            role = option.value;
        }
    }
    var languages="";
    var languagesEle = document.getElementsByName("lang");

    for(var check of languagesEle){
        if(check.checked){
            languages=(check.value)+","+languages;
        }    
    }  
    if(languages.indexOf(",")){
     var languages= languages.substring(0,languages.length-1);
    }

     var arr = [name1,job,exp,gender,role,languages];
    if(arr.includes("")){
        return false;
    }
    else{
        return arr;
    }
}

//Read Data
//Data in Local Storage.
function readDataFromLocalStorage(dataEntered){
    //Storing data in LocalStorage.
    var n = localStorage.setItem("Name",dataEntered[0]);
    var j = localStorage.setItem("Job",dataEntered[1]);
    var e = localStorage.setItem("Experience",dataEntered[2]); 
    var g = localStorage.setItem("Gender",dataEntered[3]);
    var r = localStorage.setItem("Role",dataEntered[4]);
    var l = localStorage.setItem("Languages",dataEntered[5]);

    //getting values from localstorage to table.
    var n1 = localStorage.getItem("Name",n);
    var j1 = localStorage.getItem("Job",j);
    var e1 = localStorage.getItem("Experience",e);
    var g1 = localStorage.getItem("Gender",g);
    var r1 = localStorage.getItem("Role",r)
    var l1 = localStorage.getItem("Languages",l)
    var arr = [n1,j1,e1,g1,r1,l1];
    return arr;

}     

//Insert
function insert(readData){
   var row = table.insertRow();
    row.insertCell(0).innerHTML=readData[0];
    row.insertCell(1).innerHTML=readData[1];
    row.insertCell(2).innerHTML=readData[2];
    row.insertCell(3).innerHTML=readData[3];
    row.insertCell(4).innerHTML=readData[4];
    row.insertCell(5).innerHTML=readData[5];
    row.insertCell(6).innerHTML= `<button class="editbtn" onclick=edit(this)>Edit</button><button class="delbtn" onclick=remove(this)>Delete</button>`
   
}

//Edit
var genderEditb = '';
function edit(td){
    document.getElementById("subBtn").textContent="Update"
    row =td.parentElement.parentElement;
    document.getElementById("name").value = row.cells[0].innerHTML;
    document.getElementById("job").value = row.cells[1].innerHTML;
    document.getElementById("exp").value = row.cells[2].innerHTML;
    var genderEdita = document.getElementsByName("gender").value = row.cells[3].innerHTML;

    if(genderEdita === "Male"){
        //console.log("message")
       genderEditb = document.getElementById("male").checked=true;
    }
    else if(genderEdita === "Female"){
        genderEditb = document.getElementById("female").checked = true;
    }
    else{
        genderEditb = document.getElementById('others').checked=true;
    }

    var roleEdit = document.getElementsByName("role").value = row.cells[4].innerHTML;
    if(roleEdit === "Developer"){
        document.getElementById("developer").selected=true;
    }
    else if(roleEdit === "Tester"){
        document.getElementById("tester").selected=true;
    }
    else{
        document.getElementById('qa').selected=true;
    }
    
    var langEditb="";
    var langEdita = document.getElementsByName("lang").value = row.cells[5].innerHTML;
    var arr= langEdita.split(",");
    for(var i of arr){
        if(i == "Telugu")
        langEditb = document.getElementById("tel").checked=true;
        else if(i == "English")
        langEditb =  document.getElementById("eng").checked=true;
        else if(i == "Hindi") 
        langEditb = document.getElementById("hin").checked=true;                    

    }

}

//Update
function update(){
    document.getElementById("subBtn").textContent="Submit";
    row.cells[0].innerHTML = document.getElementById("name").value;
    row.cells[1].innerHTML = document.getElementById("job").value;
    row.cells[2].innerHTML = document.getElementById("exp").value;
    var checkedEle=document.getElementsByName("gender");
    var checkUpdate="";

    // checkedEle.forEach(elem=> {
    //      if(elem.checked){
    //         checkUpdate=(elem.value)
    //         row.cells[3].innerHTML=checkUpdate;
    //         console.log(checkUpdate);
    //      }
    // })

    for(var i=0; i<checkedEle.length; i++){
        var check = checkedEle[i];
        if(check.checked){
                     checkUpdate=(check.value)
                     row.cells[3].innerHTML=checkUpdate;
                 }
    }
    var roleEle = document.getElementsByName("role"); 
    var roleUpdate = "";
    roleEle.forEach(ele =>{
        if(ele.selected){
            roleUpdate = (ele.value);
            row.cells[4].innerHTML = roleUpdate;
        }
    });

    var langEle =document.getElementsByName("lang");
    var langUpdate_a = ""; 
    langEle.forEach(elem=> {
           if(elem.checked){
            langUpdate_a+=(elem.value)+",";
            var langUpdate_b =  langUpdate_a.slice(0,-1);                          
               row.cells[5].innerHTML=langUpdate_b;
            }
         })        
    row = null; 
 }

//Delete
function remove(td){
    var del_ans = confirm("Are You Sure You Want To Delete This Record?");
    if(del_ans == true){
        row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
        document.getElementById("msg").textContent="Data Deleted."
    }
    
}