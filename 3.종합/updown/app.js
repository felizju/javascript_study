// 게임에서 사용할 데이터 객체
const gameDatas = {
    secret: Math.floor(Math.random() * 100) + 1,
    answer: null, // 사용자가 클릭한 숫자
    min: 1,
    max: 100
};



// 숫자 아이콘 생성 함수
function makeNumberIcons() {

    const $numbers = document.getElementById('numbers');
    const $frag = document.createDocumentFragment(); // 성능을 위한 가상 DOM

    for (let i = gameDatas.min; i <= gameDatas.max; i++) {
        const $icon = document.createElement('div');
        $icon.classList.add('icon');
        $icon.textContent = i;
        $frag.appendChild($icon);
    }
    $numbers.appendChild($frag);
    return $numbers;
}




// Up&Down 애니메이션을 작동시킬 클래스 추가/제거 함수 정의
function executeUpDownAnimation(isUp) {
    const ANI_CLASS_NAME = 'selected';
    document.getElementById('up').classList.toggle('ANI_CLASS_NAME', isUp);
    document.getElementById('down').classList.toggle('ANI_CLASS_NAME', !isUp);
}


// 정답을 맞췄을 때 처리를 수행할 함수 정의
function prcessCorrect($target) {
    // 축하 메시지 박스 나타나게 하는 코드
    const $finish = document.getElementById('finish');
    $finish.classList.add('show');

    // 정답 아이콘 움직이게 하는 코드
    $target.setAttribute('id', 'move');
}




function clearNumberIcons($numbers) {
    for (let $icon of [...$numbers.children]) {
        $numbers.removeChild($icon);
    }
}



// 정답을 판별해주는 함수 정의
function checkAnwser($numbers, $target) {

    // 객체 디스트럭처링
    const {
        secret,
        answer
    } = gameDatas;

    const $begin = document.getElementById('begin');
    const $end = document.getElementById('end');

    // const $up = document.getElementById('up');
    // const $down = document.getElementById('down');

    if (secret === answer) {
        // 정답처리 수행 함수
        prcessCorrect($target);
        return;

    } else if (secret < answer) {
        // down인 경우
        gameDatas.max = answer - 1;
        $end.textContent = answer - 1;
        // $up.classList.remove('selected');
        // $down.classList.add('selected');
        executeUpDownAnimation(false);

    } else {
        // up인 경우
        gameDatas.min = answer + 1;
        $begin.textContent = answer + 1;
        // $up.classList.add('selected');
        // $down.classList.remove('selected');
        executeUpDownAnimation(true);
    }
    // console.log(gameDatas);

    //정답 판별 이후 아이콘 재배치
    clearNumberIcons($numbers); //현재 렌더링 되어 있는 아이콘들 전체 삭제

    //min, max 변화대로 재배치
    makeNumberIcons();
}



// 핵심 실행 로직 즉시 실행 함수
(function () {
    const $numbers = makeNumberIcons();

    // 숫자 아이콘 클릭 이벤트
    $numbers.addEventListener('click', e => {
        if (!e.target.matches('#numbers > .icon')) {
            return;
        }
        // console.log(e.target.textContent);
        gameDatas.answer = +e.target.textContent;
        // console.log(gameDatas);

        // 정답 체크 함수 호출
        checkAnwser($numbers, e.target);
    });
}());