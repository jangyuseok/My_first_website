// 사람들은 웹 페이지도 게임처럼 동적으로 상호작용하기를 원함 => JavaScript의 탄생
// HTML로 웹을 만들어 JavaScript를 적용 ex)사용자와 상호작용하면서도 검색 엔진의 활용
// HTML 정보 / JS는 영화처럼 움직이게 한다.
// 검사에서 엘리먼트 = 태그를 의미한다.
// 인풋 태그의 속성으로 type = "XX" / value(무엇을 입력할 것 인지) = "XX"

// 1. JS는 사용자와 상호작용하는 언어이다.
// 2. 웹 브라우저는 한번 화면에 출력되면 자기 자신을 바꿀수 없다.
// 3. JS를 이용해 버튼등을 추가해서 버튼을 누르면 바디 태그에 스타일이라는 속성을 추가하면서 디자인을 바꿔준다.
// => JS가 HTML을 제어하는 언어이다.(이러한 특성이 웹 페이지를 동적으로 작동시킨다.)

// 기본적으로JS는 HTML위에 있는 언어이므로 HTML에 JS를 넣는 방법은 웹 브라우저에 <script>태그를 넣어 주어야함
// JS와 HTML의 차이점이 무엇이냐 ex)HTML에 "1+1"을 작성했을때 계산기와 같은 기능을 사용할 수 없으나 JS는 가능

// HTML, JS 모두 컴퓨터 언어라 하지만 JS는컴퓨터 언어이면서 컴퓨터 프로그래밍 언어라고도 불리고
// HTML은 프로그래밍 언어라고는 불리지 않는다.
// 프로그램(순서) => 프로그램을 만드는과정 : 프로그래밍
// 프로그래밍 언어란?시간의 순서의 따라서 실행되어야할 기능을 프로그램 언어에 맞게 글로 적어두는방식 컴퓨터에 내밀면서
// 컴퓨터가 실행하는 것
// JS는 시간의 순서, 조건에 따라서 웹 브라우저의 여러 기능이 실행되는 프로그래밍 형태를 띄고 있다.


// 만약 우리가 1억개의 웹 페이지를 가지고 있다면 1억개의 html파일에서 스크립트 태그를 바꿔줘야 한다면??
// => 웹 페이지에서 검사 탭으로 들어가서 Network탭을 확인해보면 웹에서 Organizing.js파일을 다운받은것을 볼 수 있다
// => 웹 페이지에서 매번 기능을 다운받는것이 아닌 캐시(cache)에 js파일을 저장해놓고 다음번엔 그냥 불러와서 서버에 나가는 비용을 줄여 줄 수 있다
let Links = {
    setColor: function (color) {
        // let alist = document.querySelectorAll('a');
        // let i = 0;
        // while (i < alist.length) {
        //     alist[i].style.color = color;
        //     i = i + 1;
        //     // ?? : 어떻게 파우더 블루라는 값이 없는데 매개변수에 powderblue값이 저장이되지?
        // } jQuery를 사용하면 JS에서 사용한 반복문은 jQuery가 대신해준다.
        // $라는 함수의 이름(모든 a태그들 jQuery로 제어 하겠다)
        $('a').css('color', color);
    }
}
//함수에 이름으로 중복되지 않게 해놓은걸 변수를 사용하여 바꿀 수 있다.
let Body = {
    setColor : function (color) {
        document.querySelector('body').style.color = color;
        // $('body').css('color',color);
    },
    setBackgroundColor : function (color) {
        document.querySelector('body').style.backgroundColor = color;
        // $('body').css('backgroundcolor', color);
    }
}


function toggleController(self) {
    //변수로 선언함으로써 코드의 양을 줄임
    let target = document.querySelector('body');
    // if(document.querySelector('#toggle').value === 'DarkMode'){ : 리펙토링
    if (self.value === 'DarkMode') {
        // target.style.backgroundColor = 'black';
        // target.style.color = 'white';
        // => 객체화
        Body.setBackgroundColor('black');
        Body.setColor('white');
        // document.querySelector('#toggle').value = 'day'; : 리펙토링
        // self.value = 'Day';
        // => 객체화
        //위에 있는 바디태그의 폰트 컬러를 흰색으로 한다 => 별 의미가없어보여도 함수를 통해 로직의 이름을 부여하는것으로 나중에 한눈에 알아볼 수가 있다.
        self.value = 'day';
        Links.setColor('powderblue');

        // 토글을 클릭하면 day의 문자열이 대입연산자를 통해 day로 바뀐다
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        // document.querySelector('#toggle').value = 'DarkMode';
        self.value = 'DarkMode';
        // this는 이 코드내에서만 조건문이 발동할 수 있게 해준다
        Links.setColor('blue');

    }
}
