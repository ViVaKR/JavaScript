
function onBtoa(data) {

    // btoa() is used to encode a string in base-64
    let encodedData = window.btoa(data);
    console.log('Encoded data: ', encodedData);

    // atob() is used to decode a base-64 encoded string

    let decodedData = window.atob(encodedData);
    console.log('Decoded data: ', decodedData);
}

function timer() {
    const date = new Date();
    document.getElementById('timer').innerHTML = date.toLocaleTimeString();
}

function onInterval() {
    console.log('Interval started');
    const myInterval = setInterval(timer, 1000);
    setTimeout(function () {
        clearInterval(myInterval);
        console.log('Interval cleared');
    }, 5000);
}
function onBlur() {
    const win = window.open('', '', 'width=800, height=600');
    win.focus();
}
window.onmousedown = function () {
    // console.log('Mouse button pressed');
}

window.onload = function () {

    // console.log('The page has loaded');

    // const element = document.getElementById('watchme');

    // element.addEventListener('animationstart', listener, false);
    // element.addEventListener('animationend', listener, false);
    // element.addEventListener('animationiteration', listener, false);

    // switch (document.readyState) {
    //     case 'loading':
    //         console.log('==> The document is still loading');
    //         break;
    //     case 'interactive':
    //         console.log('The document has finished loading, but subresources such as images, stylesheets and frames are still loading');
    //         break;
    //     case 'DOMContentLoaded':
    //         console.log('The document has finished loading, and all subresources are finished loading');
    //         break;
    //     case 'complete':
    //         console.log('==> The document and all subresources have finished loading');
    //         break;
    // }
}

document.addEventListener('readystatechange', function () {
    console.log('The document is in the ' + document.readyState + ' state');
    switch (document.readyState) {
        case 'loading':
            {
                console.log('--> (loading) The document is still loading');
            }
            break;
        case 'interactive':
            {
                console.log('--> (interactive) The document has finished loading, but subresources such as images, stylesheets and frames are still loading');
            }
            break;
        case 'DOMContentLoaded':
            {
                console.log('--> (DOMContentLoaded) The document has finished loading, and all subresources are finished loading');
            }
            break;
        case 'complete':
            {
                console.log('--> (complete) The document and all subresources have finished loading');
                const emp = new Employee(1, 'John Doe', 1000);
                console.log(emp);

                console.log('history length: ', window.history.length);
                console.log('location: ', window.location);
                window.console.log('navigator: ', window.navigator);
                // document.write('screen: ', window.screen.width, ' x ', window.screen.height);
                console.log('innerHeight: ', window.innerHeight);
                window.localStorage.setItem('name', 'Kim Bum Jun');
                window.localStorage.setItem('age', 25);
                console.log('length: ', window.localStorage.length);
                console.log('name: ', window.localStorage.getItem('name'));
                console.log('age: ', window.localStorage.getItem('age'));
                window.localStorage.removeItem('name');
                window.localStorage.removeItem('age');
                window.name = 'MyWindow';
                console.log('name', window.name);
            }

            break;
    }

    document.addEventListener('scroll', function () {
        // console.log('scrolling: ', window.scrollY);
    });
});

// window.onbeforeunload = function () {
//     console.log('There are unsaved changes. Leave now?');
// }


// function listener(e) {
//     const l = document.createElement('li');
//     switch (e.type) {
//         case 'animationstart':
//             l.innerHTML = 'Started: elapsed time is ' + e.elapsedTime;
//             break;
//         case 'animationend':
//             l.innerHTML = 'Ended: elapsed time is ' + e.elapsedTime;
//             break;
//         case 'animationiteration':
//             l.innerHTML = 'New loop started at time ' + e.elapsedTime;
//             break;
//     }

//     document.getElementById('output').appendChild(l);
// }

