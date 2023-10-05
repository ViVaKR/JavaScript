const logo = document.querySelector('img');

const onClick = () => console.log('logo click event');
const onDoubleClick = () => {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'purple' ? 'white' : 'purple';
};

const onRightClick = () => console.log('right click event');
const onMouseDown = () => console.log('Mouse Down');
const onMouseUp = () => console.log('Mouse Up');
const onMouseWheel = () => console.log('Mouse Wheel');
const onMouseOver = () => console.log('Mouse Over');
const onMouseOut = () => console.log('Mouse Out');
const onDragStart = () => console.log('Drag start');
const onDragLeave = () => console.log('Drag Leave');
const onDragEnd = () => console.log('Drag End');
const onDrag = () => console.log('Drag');

// Event Listeners
logo.addEventListener('click', onClick); // 마우스 다운 -> 마우스 업 이벤트 후에 발생
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown); // 마우스 다운시 발생 (즉, 먼저 발생)
logo.addEventListener('mouseup', onMouseUp); // 마우스 업 할 때 발생, 클릭이벤트 보다 먼저 발생
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver); // Mouse Hover
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('dragleave', onDragLeave);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);
