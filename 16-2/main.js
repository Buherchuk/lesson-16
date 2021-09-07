document.querySelector("#setTask").onclick = function () {
    if(document.querySelector('#nameTask').value == ""){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.error-description').innerText = "Пусте поле не можна добавити";
    }else{
        document.querySelector(".tasks-list").innerHTML += `<div class="tasks-list-elemens">
        <label><input type="checkbox"> ${document.querySelector('#nameTask').value}</label>  
        </div>`;
        document.querySelector('#nameTask').value = "";
    }
}

document.querySelector(".tasks-list").onclick = function(event){
    let lengthOfList = document.querySelectorAll(".tasks-list-elemens").length;
    if(event.target.tagName == "LABEL" || event.target.tagName == "INPUT"){
        if(lengthOfList > 1){
            event.target.closest('div').remove();
            console.log(lengthOfList);
            console.log(event.target.tagName);
        }else{
            document.querySelector('.error').style.display = "block";
            document.querySelector('.error-description').innerText = "Ви не можете видалити останній пункт";
        }
     
    }
    
}


document.querySelector(".fas").onclick = function(event){
    document.querySelector('.error').style.display = "none";
}