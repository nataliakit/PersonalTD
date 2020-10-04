document.getElementById('form').addEventListener('submit', addItem);
document.querySelector('.add-form__submit-button').addEventListener('click', addItem);
document.querySelector('.function__delete').addEventListener('click', deleteItems);
document.querySelector('.function__edit').addEventListener('click', editItems);

function addItem(e) {
    e.preventDefault();
    let inputText = document.querySelector('.add-form__text-input');
    let inputTextValue = inputText.value;

    let items = document.querySelector('.items');
    let oldHtmlText = items.innerHTML;
    items.innerHTML = `<div class="item"><label class="checkbox"><input type="checkbox"><div class="checkbox__text"></div></label><p>${inputTextValue}</p></div>${oldHtmlText}`;

    inputText.value = '';
}

function deleteItems(e) {
    e.preventDefault();
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < checkboxes.length; ++ i) {
        if(checkboxes[i].checked) {
            let closestElement = checkboxes[i].closest('.item')
            closestElement.parentNode.removeChild(closestElement);
        }
    }
}

function editItems(e) {

}
