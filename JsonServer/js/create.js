
const form = document.querySelector('form');

const createPost = async (e) => {
    // 기본 동작을 막음
    e.preventDefault();

    // form 데이터를 가져오는 방법 (1)
    // const doc = {
    //     title: form.title.value,
    //     body: form.body.value,
    //     likes: 0
    // }
    // await fetch('http://localhost:3000/posts', {
    //     method: 'POST',
    //     body: JSON.stringify(doc),
    // });
    // window.location.replace('/index.html');

    // form 데이터를 가져오는 방법 (2)
    const formData = new FormData(form);
    const title = formData.get('title');
    const body = formData.get('body');
    const likes = 0;
    const post = { title, body, likes };
    await fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: { 'Content-Type': 'application/json' }
    });

    window.location.replace('/index.html');
}
form.addEventListener('submit', createPost);

