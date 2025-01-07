

let aHtml = [];


// 데이터가 포함된 객체
const data = {
    link: {
        link_board_detail: "https://www.google.com/",
        param_read: "param_value"
    }
};

// aHtml 배열에 동적으로 HTML을 추가
aHtml.push(`
    <div class="iframe-popup"
         data-link="${data.link.link_board_detail}"
         data-width="600"
         data-height="400">
         이미지
    </div>
`);
