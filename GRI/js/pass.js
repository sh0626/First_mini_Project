
const inputElem = document.querySelector('.pw'); // 입력란 엘리먼트 가져오기
const lowercaseElem = document.querySelector('.lowercase'); // 소문자 요소 가져오기
const uppercaseElem = document.querySelector('.uppercase'); // 대문자 요소 가져오기
const numberElem = document.querySelector('.number'); // 숫자 요소 가져오기
const specialElem = document.querySelector('.special'); // 특수문자 요소 가져오기
const characterLengthElem = document.querySelector('.character-length'); // 길이 요소 가져오기

//정규 표현식 
//값을 뭘로 출력할 것? true와 false가 나온다 
const isValidLowercase = (pw) => {
return pw.search(/[a-z]/g) >= 0; // 소문자 포함 여부 확인
}
const isValidUppercase = (pw) => {
return pw.search(/[A-Z]/g) >= 0; // 대문자 포함 여부 확인
}
//g는 특수문자 구분하라는 것
const isValidNumber = (pw) => {
return pw.search(/[0-9]/g) >= 0; // 숫자 포함 여부 확인
}

//gi는 특수문자 구분하지 말라는 것(전역변수)
const isValidSpecial = (pw) => {
return pw.search(/[~!@#$%^&*()_+|<>?:{}`]/gi) >= 0; // 특수문자 포함 여부 확인
}
const isValidCaracterLength = (pw) => {
return pw.length >= 8 // 최소 8자 이상 여부 확인
}

inputElem.addEventListener('input', (e) => {
const pw = e.target.value;

isValidLowercase(pw) ? lowercaseElem.classList.add('active') : lowercaseElem.classList.remove('active'); // 소문자 유효성 표시 여부 업데이트
isValidUppercase(pw) ? uppercaseElem.classList.add('active') : uppercaseElem.classList.remove('active'); // 대문자 유효성 표시 여부 업데이트
isValidNumber(pw) ? numberElem.classList.add('active') : numberElem.classList.remove('active'); // 숫자 유효성 표시 여부 업데이트
isValidSpecial(pw) ? specialElem.classList.add('active') : specialElem.classList.remove('active'); // 특수문자 유효성 표시 여부 업데이트
isValidCaracterLength(pw) ? characterLengthElem.classList.add('active') : characterLengthElem.classList.remove('active'); // 길이 유효성 표시 여부 업데이트

const ok = document.querySelector('.passok'); //문구 비밀번호 조건에 부합합니다! 
const no = document.querySelector('.passno'); //문구 비밀번호 조건에 맞게 다시 입력해 주세요.비밀번호는 영문(대문자, 소문자), 숫자, 특수문자를 모두 포함하여 8~20자로 작성해야 합니다.
if (isValidLowercase(pw) && isValidUppercase(pw) && isValidNumber(pw) && isValidSpecial(pw) && isValidCaracterLength(pw)) {      
	ok.style.display = "block" // 비밀번호 조건에 부합합니다! 문구 보여주기
	no.style.display = "none"  //비밀번호 조건에 맞게 다시 입력해 주세요.비밀번호는 영문(대문자, 소문자), 숫자, 특수문자를 모두 포함하여 8~20자로 작성해야 합니다. 문구 사라지기
}
else {
	ok.style.display = "none" //비밀번호 조건에 부합합니다! 문구 사라지기
	no.style.display = "block"//보여주기 비밀번호 조건에 맞게 다시 입력해 주세요.비밀번호는 영문(대문자, 소문자), 숫자, 특수문자를 모두 포함하여 8~20자로 작성해야 합니다. 문구 보여주기
}

})

// // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// // ---------------------------비번 동일한지 봐줘-----------------------------------------------------------


const passwordElem = document.querySelector('.pw');
const confirmElem = document.querySelector('.confirm');
const matchMessageElem = document.querySelector('.match-message');
const noMatchMessageElem = document.querySelector('.no-match-message');

const checkPasswordMatch = () => {
const password = passwordElem.value; //선언 비밀번호 값;
const confirm = confirmElem.value; //선언  비밀번호 확인 값

if (password === confirm) { // 비밀번호 비밀번호 확인값이 같으면 
	matchMessageElem.style.display = 'block'; //비밀번호가 일치합니다. 문구 보여주기
	noMatchMessageElem.style.display = 'none';//비밀번호가 일치하지 않습니다. 다시 확인해주세요. 문구 사라지기
} else {
	matchMessageElem.style.display = 'none'; //비밀번호가 일치합니다. 문구 사라지기
	noMatchMessageElem.style.display = 'block'; //비밀번호가 일치하지 않습니다. 다시 확인해주세요. 문구 보여주기
}
};

passwordElem.addEventListener('input', checkPasswordMatch); //pw 이벤가 일어날때 cherckPasswordMatch 명령어 실행 
confirmElem.addEventListener('input', checkPasswordMatch);// cinfirm 이벤트가 일어날때 cherckPasswordMatch 명령어 실행 

	function createAcc() { // 함수 선언
		alert("변경완료"); // alert 문구 보여주기
		window.location.href="login.html"; // 로그인 html 이동 
}


//비번 바꾸기
       document.getElementById('registerForm').addEventListener('submit', function (e) { // registerForm에 submit 이벤트 발생시
					e.preventDefault(); // 폼 제출 기본동작 막기

					
					var memberPw = document.getElementById('memberPw').value; // memverPw에 비밀번호변경값 설정



					+
					6
					 localStorage.setItem('pw', memberPw); //로컬스토리지에 비밀번호 저장 
					createAcc();} // createAcc 명령어 실행
				);


// 회원 탈퇴
function withdraw() { //함수 지정
    localStorage.removeItem('id'); // 로컬스토리지에 있는 id 삭제 
    localStorage.removeItem('pw'); // 로컬스토리지에 있는 pw 삭제 
    alert('회원 탈퇴가 완료되었습니다.'); //alert 문구 보여주기
	window.location.href = "index.html"; // 인덱스로 화면 이동 
}
      
	

