hide = true;
const originalHTML = document.body.innerHTML;
function stripAttributes() {
    // Body 내부의 모든 돔 요소를 배열로 가져오기
    let elements = Array.from(document.body.querySelectorAll('*'));
    // 비어있는 모든 태그 제거
    const emptyElements = elements.filter(element => element.children.length === 0 && element.textContent.trim() === '');
    emptyElements.forEach(emptyElement => emptyElement.remove());
    // 모든 태그 사이의 공백(화이트 스패이스) 제거, 필요하지 않으면? 아래 라인 주석 처리
    document.body.innerHTML = document.body.innerHTML.replace(/>\s+</g, '><');
    // 갱신 하기
    elements = Array.from(document.body.querySelectorAll('*'));
    // 각 요소에 대해 모든 속성 제거
    elements.forEach(element => {
        if (element.tagName !== 'BODY' && element.tagName !== 'SCRIPT') { // BODY, SCRIPT 태그는 제외하고 모든 태그에 대해 속성 제거
            const attributes = Array.from(element.attributes);
            attributes.forEach(attribute => element.removeAttribute(attribute.name));
        }
    });
    console.log('(누드)\n', document.body.innerHTML); // 제거된 상태
}

// 트리거
// stripAttributes();

function domParser() {

    const elements = Array.from(document.body.querySelectorAll('*'));

    // 정규식을 사용하여 모든 속성, 클래스, 사용자 정의 속성 제거
    elements.forEach(element => {
        let outerHTML = element.outerHTML;
        outerHTML = outerHTML.replace(/<(\w+)([^>]*)>/g, (match, tagName) => {
            return `<${tagName}>`;
        });
        const newElement = document.createRange().createContextualFragment(outerHTML).firstChild;
        element.replaceWith(newElement);
    });

    // 갱신
    document.body.innerHTML = document.body.innerHTML;
    console.log('(파서)\n', document.body.innerHTML); // 파싱된 상태
    // const parser = new DOMParser();
    // const doc = parser.parseFromString(originalHTML, 'text/html');
    // console.log('(파서)\n', doc.body.innerHTML); // 파싱된 상태

    // const elements = Array.from(doc.body.querySelectorAll('*'));
    // // 파싱된 상태에서 regex, 정규식을 이용하여 모든 속성 제거

    // // 정규식을 사용하여 모든 클래스 및 사용자가 만든 모든 속성 제거
    // // elements.forEach(element => {
    // //     const attributes = Array.from(element.attributes);
    // //     attributes.forEach(attribute => {
    // //         if (attribute.name !== 'class') {
    // //             element.removeAttribute(attribute.name);
    // //         }
    // //     });
    // // });

    // elements.forEach(element => {
    //     let outerHTML = element.outerHTML;
    //     outerHTML = outerHTML.replace(/<(\w+)([^>]*)>/g, (match, tagName) => {
    //         return `<${tagName}>`;
    //     });
    //     const newElement = document.createRange().createContextualFragment(outerHTML).firstChild;
    //     element.replaceWith(newElement);

    // });
    // // 갱신
    // document.body.innerHTML = doc.body.innerHTML;
}

// domParser();

function sanitizeHTML(html) {
    const tempDiv = document.createElement('div');
    tempDiv.textContent = html;
    return tempDiv.innerHTML;
}

const unsafeHTML = '<script>alert("XSS Attack!")</script>';
const safeHTML = sanitizeHTML(unsafeHTML);
console.log(safeHTML); // &lt;script&gt;alert("XSS Attack!")&lt;/script&gt;

function removeAllAttributes() {
    const elements = Array.from(document.body.querySelectorAll('*'));

    // 정규식을 사용하여 모든 속성, 클래스, 사용자 정의 속성 제거
    elements.forEach(element => {
        let outerHTML = element.outerHTML;
        outerHTML = outerHTML.replace(/<(\w+)([^>]*)>/g, (match, tagName) => {
            return `<${tagName}>`;
        });
        const newElement = document.createRange().createContextualFragment(outerHTML).firstChild;
        element.replaceWith(newElement);
    });
    // 갱신
    document.body.innerHTML = document.body.innerHTML;
    // 빈 태그와 화이트 스페이스 제거
    document.body.innerHTML = document.body.innerHTML.replace(/>\s+</g, '><').replace(/<(\w+)\s*><\/\1>/g, '');
    console.log('(파서)\n', document.body.innerHTML); // 파싱된 상태
}

removeAllAttributes();
