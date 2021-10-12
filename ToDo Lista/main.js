let counter = 1;
let toDoInput = document.querySelector('.todoInput');
let ul = document.querySelector("ul");
let addBtn = document.querySelector('.addBtn')
let button1, button2, button3, i1, i2, divTools;
let alertInfo = document.querySelector(".alertInfo");


let popUp = document.querySelector('.popup');
let popupBtnAccept = document.querySelector('.accept');
let popupBtnCancel = document.querySelector('.cancel');
let popupInput = document.querySelector('.popupInput');

let countEvents = () => {
    let events = ul.childElementCount;
    alertInfo.textContent = `Liczba zadań na liście: ${events}`;
    if(events == 0)
    alertInfo.textContent = `Brak zadań na liście.`;
};

let createButtons = () => {
    button1 = document.createElement('button');
    button2 = document.createElement('button'); 
    button3 = document.createElement('button');
    i1 = document.createElement('i');
    i2 = document.createElement('i');
    
    button1.classList.add('complete');
    button2.classList.add('edit');
    button2.innerText = 'EDIT';
    button3.classList.add(`delete`);
    i1.classList.add('fas');
    i2.classList.add('fas');
    i1.classList.add('fa-check');
    i2.classList.add('fa-times');
    button1.appendChild(i1);
    button3.appendChild(i2);

    divTools = document.createElement('div');
    divTools.classList.add('tools')
    divTools.appendChild(button1);
    divTools.appendChild(button2);
    divTools.appendChild(button3);
    
}

let Add = () => {

    if(toDoInput.value != ""){
        
    let task = document.createElement('li');
    let span = document.createElement('span');
    task.appendChild(span);
    span.innerText = toDoInput.value;
    task.id = `test${counter}`;
    span.classList.add(`span${counter}`)
    createButtons();
    task.appendChild(divTools);
    counter++;
    ul.appendChild(task);
    toDoInput.value = "";
    
    let removeTask = () => {
        ul.removeChild(task);
        popUp.style.display = 'none';
        countEvents();
    };
    let confirmTask = () => {
        task.classList.add('completed');
        popUp.style.display = 'none';
    }; 

    let editTask = () => {
        popUp.style.display = 'flex';
        let acceptNewName = () =>
    {
        span.innerText = popupInput.value;
        popUp.style.display = 'none';     
    }
    popupBtnAccept.addEventListener('click', acceptNewName);
    
    };
    let cancelPopup = () =>{
        popUp.style.display = 'none';
    };

    button1.addEventListener('click', confirmTask);
    button3.addEventListener('click', removeTask);
    button2.addEventListener('click', editTask); 
    popupBtnCancel.addEventListener("click", cancelPopup);
    countEvents();
}
else
alertInfo.textContent = `Puste zadanie, dodaj ponownie`;

};
addBtn.addEventListener('click', Add);
document.addEventListener('keypress', function(e){
    if (e.key === 'Enter')
    Add();
})





