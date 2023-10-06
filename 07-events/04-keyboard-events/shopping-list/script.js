const itemInput = document.getElementById('item-input');

// (1) 누르고 있을때 지속 작동
const onKeyDown = (e) => {
    // key
    // if (e.key === 'Enter') {
    //     alert('You pressed enter');
    // }
    // keyCode
    // https://www.toptal.com/developers/keycode/table
    // console.log(e.keyCode);
    // if (e.keyCode === 13) {
    //     alert('You pressed enter');
    // }

    // code
    // console.log(e.code);
    // if (e.code === 'Digit1') {
    //     console.log('first');
    // }

    // if (e.repeat) {
    //     console.log('You are holding down ' + e.key);
    // }

    // 어떤 키가 눌렸는지 확인
    // console.log('Shift: ' + e.shiftKey);
    // console.log('Control: ' + e.ctrlKey);
    // console.log('Alt: ' + e.altKey);

    if (e.shiftKey && e.key === 'K') {
        console.log('You are keydown Shift + K');
    }
};

// (2)
const onKeyPress = (e) => {
    console.log('keypress');
};

// (3)
const onKeyUp = (e) => {
    console.log('keyup');
};

itemInput.addEventListener('keydown', onKeyDown);

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
