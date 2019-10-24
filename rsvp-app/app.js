const form = document.querySelector('#registrar');
const input = form.querySelector('input');
const mainDiv = document.querySelector('.main');
const invitedList = document.querySelector('#invitedList');

const div = document.createElement('div');
const filterLabel = document.createElement('label');
const filterCheckBox = document.createElement('input');
filterCheckBox.type = 'checkbox';
filterLabel.textContent = "已回復邀請的人";

div.appendChild(filterLabel);
div.appendChild(filterCheckBox);
mainDiv.insertBefore(div, invitedList);

function createLi(text) {
    function createElement(elName, prop, value) {
        const element = document.createElement(elName);
        element[prop] = value;
        return element;
    }

    function appendToLI(elName, prop, value) {
        const element = createElement(elName, prop, value);
        li.appendChild(element);
        return element;
    }
    const li = document.createElement('li');

    appendToLI('span', 'textContent', text);
    appendToLI('label', 'textContent', 'Confirmed')
        .appendChild(createElement('input', 'type', 'checkbox'));

    appendToLI('button', 'textContent', 'EDIT');
    appendToLI('button', 'textContent', 'REMOVE');
    return li;
}
function createLi(text) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = text;
    li.appendChild(span);
    // label && checkbox
    const label = document.createElement('label');
    label.textContent = 'Confirmed';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    li.appendChild(label);
    //edit button
    const EditBtn = document.createElement('button');
    EditBtn.textContent = 'EDIT';
    li.appendChild(EditBtn);
    //remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'REMOVE';
    li.appendChild(removeBtn);
    return li;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    var invitees = input.value;
    input.value = '';
    const li = createLi(invitees);
    invitedList.appendChild(li);

})

filterCheckBox.addEventListener('change', (e) => {
    const checked = e.target.checked;
    const lis = invitedList.children;
    console.log(lis[0].children[1].children)
    if(checked) {
        for(let i=0; i<lis.length; i++) {
            let li = lis[i];
            if(li.className === 'responded') {
                li.style.display = '';
            } else {
                li.style.display = 'none';
            }
        }
    } else {
        for(let i=0; i<lis.length; i++) {
            let li = lis[i];
            li.style.display = '';
        }
    }
})

invitedList.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') {
        const button = e.target;
        const li = button.parentNode;
        const action = button.textContent;
        if(action === 'REMOVE') {
            button.parentNode.remove();
        }
        else if(action === 'EDIT') {
            const span = li.firstElementChild;
            const text = span.textContent;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = text;
            li.insertBefore(input, span);
            span.remove();
            button.textContent = 'SAVE';
        }
        else if(action === 'SAVE') {
            const input = li.firstElementChild;
            const text = input.value;
            const span = document.createElement('span');
            span.textContent = text;
            li.insertBefore(span, input);
            input.remove();
            button.textContent = 'EDIT';
        }

    }

})

invitedList.addEventListener('change', (e) => {
    const checkbox = e.target;
    const checked = checkbox.checked;
    const invitedItem = checkbox.parentNode.parentNode;
    if(checked) {
        invitedItem.className = 'responded';
    } else {
        invitedItem.className = '';
    }
})
