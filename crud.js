// validating form inputs before submitting data.
function validateForm(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
//Anil
    if(name == ""){
        alert("Name is Required");
        return false;
    }
    if(age == ""){
        alert("Age is Required");
        return false;
    }
    else if(age <= 0){
        alert("Age must be greater than Zero");
        return false;
    }
    
    if(address == ""){
        alert("address is Required");
        return false;
    }
    if(email == ""){
        alert("Email is Required");
        return false;
    }
    else if(!email.includes("@")){
        alert("Invalid Email Address");
        return false;
    }
    return true;
}

// functions to show data.
function showData(){
    var peopleList;
    if(localStorage.getItem("peopleList") == null){
        peopleList = [];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"))
    }

    var html = '';

    peopleList.forEach(function(element,index){
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.age + "</td>";
        html += "<td>" + element.address + "</td>";
        html += "<td>" + element.email + "</td>";
        html += '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Delete</button><button onclick="updateData(' + index + ')" class="btn btn-warning m-2">Edit</button></td>';
        html += "</tr>";
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}

// Load all data when document or page loaded.
document.onload = showData();


// function to add data to local storage.

function AddData(){
    // if form is validate.
    if(validateForm() == true){
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var address = document.getElementById("address").value;
        var email = document.getElementById("email").value;

        var peopleList;
        if(localStorage.getItem("peopleList") == null){
            peopleList = [];
        }
        else{
            peopleList = JSON.parse(localStorage.getItem("peopleList"))
        }

        peopleList.push({
            name:name,
            age:age,
            address:address,
            email:email,
        });

        localStorage.setItem("peopleList",JSON.stringify(peopleList));
        showData();
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("address").value = "";
        document.getElementById("email").value = "";

    }

}

// function to delete data from local storage.
function deleteData(index){
    var peopleList;
    if(localStorage.getItem("peopleList") == null){
        peopleList = [];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"))
    }

    peopleList.splice(index,1);
    localStorage.setItem("peopleList",JSON.stringify(peopleList));
    showData();
}

// function to update/edit data in local storage
function updateData(index){
    document.getElementById("submit").style.display = 'none';
    document.getElementById("Update").style.display = 'block';

    var peopleList;
    if(localStorage.getItem("peopleList") == null){
        peopleList = [];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    document.getElementById('name').value=peopleList[index].name;
    document.getElementById('age').value=peopleList[index].age;
    document.getElementById('address').value=peopleList[index].address;
    document.getElementById('email').value=peopleList[index].email;
  
    document.querySelector("#Update").onclick = function(){
        if(validateForm() == true){
            peopleList[index].name = getElementById("name").value; 
            peopleList[index].age = getElementById("age").value;       
            peopleList[index].address = getElementById("address").value;       
            peopleList[index].email = getElementById("email").value;       

            localStorage.setItem("peopleList",JSON.stringify(peopleList));

            showData();

            document.getElementById('name').value="";
            document.getElementById('age').value="";
            document.getElementById('address').value="";
            document.getElementById('email').value="";

            document.getElementById("submit").style.display = 'block';
            document.getElementById("Update").style.display = 'none';
        }
    }

}
