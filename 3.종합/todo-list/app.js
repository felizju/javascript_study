
// 일정 데이터가 들어있는 배열 선언
const todos = [
    {
        id: 1,
        text: '할 일 1',
        done: true
    },
    {
        id: 2,
        text: '할 일 2',
        done: false,
    },
    {
        id: 3,
        text: '할 일 3',
        done: false
    }
];

// 추가될 할 일 객체의 id를 생성해주는 함수 정의
function makeNewId(){

    if(todos.length > 0){
        const lastIndex = todos.length - 1;
        // console.log(todos[lastIndex].id+1);
        return todos[lastIndex].id + 1;
        // return todos[todos.length-1].id+1;
    }else{
        return 1;
    }
}

// 화면에 렌더링할 .todo-list-item노드를 생성하는 함수 정의
function makeNewToDoNode(newToDo){
    const $li = document.createElement('li');
    const $label = document.createElement('label');
    const $divMod = document.createElement('div');
    const $divRem = document.createElement('div');

    // label 태그 작업
    $label.classList.add('checkbox');
    $label.innerHTML = `<input type="checkbox">
    <span class="text">${newToDo.text}</span>`;

    // 수정 div 태그 작업
    $divMod.classList.add('modify');
    $divMod.innerHTML = `<span class="lnr lnr-undo"></span>`;

    // 삭제 div 태그 작업
    $divRem.classList.add('remove');
    $divRem.innerHTML = `<span class="lnr lnr-cross-circle"></span>`;

    // li 태그 작업
    $li.dataset.id = newToDo.id;
    $li.classList.add('todo-list-item');
    
    for(let $ele of [$label, $divMod, $divRem]){
        $li.appendChild($ele);
    }
    // console.log($li);

    document.querySelector('.todo-list').appendChild($li);
}




// 할 일 추가 처리 함수 정의
function insertToDoData(){
    
    const $todoText = document.getElementById('todo-text');

    // 1. todos 배열에 객체 생성한 후 push
    const newToDo = {
        id: makeNewId(),
        text: $todoText.value,
        done: false
    };
    todos.push(newToDo);
    // console.log(todos);

    // 2. 추가된 데이터를 화면에 렌더링
    makeNewToDoNode(newToDo);

    // 3. 입력 완료 후 잔존 문자열 제거
    $todoText.value = '';
}


// 메인 즉시 실행 함수
(function(){
    
    // 할 일 추가 이벤트
    const $addBtn = document.getElementById('add');

    $addBtn.addEventListener('click', e => {
        e.preventDefault(); // submit버튼의 서버 전송 기능 중지 시킴
        // console.log('추가 버튼 클릭됨!');
        
        insertToDoData();
    });
}());