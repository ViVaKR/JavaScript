const form = document.getElementById('item-form');

// 방법 1
function onSubmit(e) {
    e.preventDefault();
    const item = document.getElementById('item-input').value;
    const priority = document.getElementById('priority-input').value;

    if (item === '' || priority === '0') {
        alert('Please fill in all fields');
        return;
    }
    console.log(item, priority);
}

// 방법 2
function onSubmit2(e) {
    e.preventDefault();
    const formData = new FormData(form);

    const item = formData.get('item'); // item => name
    const priority = formData.get('priority');

    const entries = formData.entries();
    console.log(entries);

    for (const entry of entries) {
        console.log(entry[0], entries[1]);
    }

    console.log(item, priority);
}

form.addEventListener('submit', onSubmit2);
