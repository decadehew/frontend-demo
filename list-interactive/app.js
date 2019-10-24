/*
    在dom裏取html元素，放進變數，方便對DOM操作
*/


const hideBtn = document.querySelector('#button');
const listDiv = document.querySelector('.list');

const descriptionP = document.querySelectorAll('.description')[0];
const descriptionInp = document.querySelectorAll('.description')[1];
const descriptionBtn = document.querySelectorAll('.description')[2];

const itemInput = document.querySelector('.itemInput');
const addItemButton = document.querySelector('.itemButton');
const ulItem = document.querySelector('.list ul');
// const removeItemButton = document.querySelector('.removeItemButton');

/*
    attachListItemButtons function是用來避免Repeat your self;
    定義一個function，在其他地方可以使用，不要在重覆寫長長code
    只要發現在其他地方用一樣code，可以定義function！
*/
function attachListItemButtons(li) {
    var up = document.createElement('button');
    up.className = 'up';
    up.textContent = 'UP';
    li.appendChild(up);

    var down = document.createElement('button');
    down.className = 'down';
    down.textContent = 'DOWN';
    li.appendChild(down);

    var remove = document.createElement('button');
    remove.className = 'remove';
    remove.textContent = '刪除';
    li.appendChild(remove);
}

/*
    隱藏button事件
*/
hideBtn.addEventListener('click', function() {
    if(listDiv.style.display == 'none') {
        hideBtn.textContent = 'Hide List';
        listDiv.style.display = 'block';
    } else {
        hideBtn.textContent = 'Show List';
        listDiv.style.display = 'none';
    }
})

/*
    改變描述事件
*/
descriptionBtn.addEventListener('click', function() {
    var changeDescription = descriptionInp.value + ': ';
    descriptionP.textContent = changeDescription;
    descriptionInp.value = "";
})

/*
    新增項目事件
*/
addItemButton.addEventListener('click', function() {
    var li = document.createElement('li');

    if(itemInput.value !== '') {
        li.textContent = itemInput.value;
        ulItem.appendChild(li)
        itemInput.value = "";
        attachListItemButtons(li);

    } else {
        alert('【注意】不能空');
    }
})

/*
    對up／down／刪除事件做動作
*/
ulItem.addEventListener('click', function(event) {
    if(event.target.tagName == 'BUTTON') {
        if(event.target.className == 'remove') {
            var li = event.target.parentNode;
            var ul = li.parentNode;
            ul.removeChild(li)
        }
        if(event.target.className == 'up') {
            var li  = event.target.parentNode;
            var previousLi = li.previousElementSibling;
            var ul = li.parentNode;
            if(previousLi) {
                ul.insertBefore(li, previousLi);
            }
        }
        if(event.target.className == 'down') {
            var li = event.target.parentNode;
            var nextLi = li.nextElementSibling;
            var ul = li.parentNode;
            if(nextLi) {
                ul.insertBefore(nextLi, li);
            }
        }
    }
})
