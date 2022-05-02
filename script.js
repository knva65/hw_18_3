

document.addEventListener("DOMContentLoaded", function(event) {
    let name = localStorage.getItem('name');
    if(name!=null)
    {document.getElementById("author").value = name;
    }
    let img = JSON.parse(localStorage.getItem('avatar'));
    if(img!=null)
    {
        {document.getElementById("avatar").value = img;
    } 
    }
})

let card = document.getElementById('card');


window.onload = function() {
    card.src = document.getElementById('avatar').value;
  };



function sendMessage(author, comment) {
    let tasks = [];
    let name_1 = document.querySelector('#comment').value;
    reg = /viagra|xxx|идиот/i;
    let newname = name_1.replace(reg, "***");
    tasks.push(newname);
    card.src = document.getElementById('avatar').value;
    document.getElementById('NewMessage').innerHTML += `<img id="card_1" src="${card.src}" alt="card"> <span class='author'>${author}:</span><span>${newname}</span><br>`;
    document.querySelector('#comment').value = '';
}


function checkMessage() {
    let author = document.getElementById("author").value;
    let comment = document.getElementById("comment").value;
    let avatar = document.getElementById('avatar').value;
    

    if(localStorage.getItem('name')===null)
    {
        localStorage.setItem('name',author);
    }

    if(localStorage.getItem('avatar')===null)
    {
    localStorage.setItem('avatar',JSON.stringify(avatar));
    }
    sendMessage(author, comment);
}

function Clear() {
    localStorage.removeItem('avatar');
    localStorage.removeItem('name');

}

document.getElementById('forma').onsubmit = function(){return false};