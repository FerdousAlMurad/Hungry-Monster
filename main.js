document.getElementById('search-btn').addEventListener('click', () => {
    const inputValue = document.getElementById('input-values').value;
    if (inputValue == "") {
        document.getElementById('input-validation').innerText = 'Search food items';
    }
    else {
        url(inputValue);
    }

})