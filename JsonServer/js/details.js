
// window.location.search returns the query string part of the URL, including the question mark. (e.g. ?id=1)


const id = new URLSearchParams(window.location.search).get('id'); // URLSearchParams : URL의 query string을 다루는 객체
const container = document.querySelector('.details');
const delelteBtn = document.querySelector('.delete');

console.log(id);
const renderDetails = async () => {
    let uri = `http://localhost:3000/posts/${id}`;
    const res = await fetch(uri); // fetch : 가지고 오다, 불러오다. vs patch : 수정하다, 교체하다., 이어붙이다
    const post = await res.json();
    console.log(post);
    let template = `
    <h1>${post.title}</h1>
    <p><small>${post.likes} likes</small></p>
    <p>${post.body}</p>`
    document.querySelector('code').innerHTML = template;
}

delelteBtn.addEventListener('click', async (e) => {

    const res = await fetch(`http://localhost:3000/posts/${id}`, {
        method: 'DELETE'
    });

    if (res.status === 200) {
        window.location.replace('/');
    }
    else {
        console.log('Error');
    }
});
window.addEventListener('DOMContentLoaded', async () => renderDetails());



// import Prism from '../node_modules/prismjs/prism.js';
// import loadLanguages from '../node_modules/prismjs/components/';
// loadLanguages(['typescript', 'javascript', 'css', 'markup']);

// const code = document.querySelector('code');

// const codeContent = code.textContent;
// const html = Prism.highlight(codeContent, languages.typescripty, 'typescript');
// code.innerHTML = html;
// console.log(codeContent);
