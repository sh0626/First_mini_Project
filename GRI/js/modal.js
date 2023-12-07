// -------------------------------------모달창--------------------------------------------

	const bodyElem = document.body //바디를 boduElem 할당
						
	const closeModal = (event) => { //모달을 닫을때 

		const modalWrapperElem = document.querySelector('.modal-wrapper'); // 클릭시 모달 닫기
		bodyElem.removeChild(modalWrapperElem); // 모달 열기전 창으로 다시 돌아가기 
		// window.location.href = "index.html";
	}

	const stopPropagation = (e) => {
		e.stopPropagation(); //상위 엘리먼트들로의 이벤트 전파를 중단  
	}



	const openModal = (message) => { // openModal에 메시지를 띄우는데 
		const modalWrapperElem = document.createElement('div'); // modalWrapperElem에 'div'를 생성할거야
		modalWrapperElem.addEventListener("click", closeModal); // modalWrapperElem에 event를 추가한다(click했을 때, closeModal함수 작동하도록)
		modalWrapperElem.classList.add('modal-wrapper'); //modalWrapperElem에 있는 classList에 'modal-wropper'라는 클래스를 추가한다


		const modalElem = document.createElement('div'); // modalElem에 'div' 생성할거야
		modalElem.classList.add('modal'); //'modal'이라는 클래스로 modalElem에 추가할거야
		modalElem.addEventListener('click', stopPropagation);  //modalElem에 이벤트 추가하는데 click했을 때 stopPropagation (상위 엘리먼트에 이벤트가 전파되지 않도록)

		const modalContentElem = document.createElement('div'); // modalContentElem에 'div'를 생성할거야
		modalContentElem.classList.add('modal-content'); //만든 modalContentElem라는 엘리먼트 안에 'modal-content'라는 클래스로 추가할거야
		modalContentElem.innerHTML = message; //modalContentElem를 메시지로 innerHTML으로 보여줄거야

		const closeBtn = document.createElement('div'); // closeBtn에 div 생성할거야
		closeBtn.classList.add('close-modal-btn'); // closeBtn의 close-modal-btn이라고 클래스를 지정할거야
		closeBtn.innerHTML = "확인"; // closeBtn 안에 '확인'이라고 보여줄거야

		closeBtn.addEventListener("click", closeModal); //closeBtn 이벤트를 추가하는데, 클릭하면 closeModal 함수 작동할거야

		modalElem.appendChild(modalContentElem); // modalElem(부모)안에 modalContentElem을 자식으로 넣을거야 (모달 메시지)
		modalElem.appendChild(closeBtn);// modalElem(부모)안에 closeBtn을 자식으로 넣을거야 (닫기버튼)

		modalWrapperElem.appendChild(modalElem);// modalWrapperElem(부모)안에 modalElem (모달창)자식으로 넣을거야 
		bodyElem.appendChild(modalWrapperElem);// bodyElem(부모)안에 modalWrapperElem(모달래퍼) 자식으로 넣을거야 
	}

	const idCheck = () => {
		openModal("사용 가능한 아이디입니다.") // openModal 함수 작동 ( ()안에 메시지 뜨는 모달창 띄우기)  idCheck
	}
	const sendCode = () => {
		openModal("입력하신 전화번호로 인증번호가 발송되었습니다.")
	}
	const codeCheck = () => {
		openModal("전화번호가 인증되었습니다.")
	}

	const sendEmail = () => {
		openModal("입력하신 이메일 주소로 계정 인증 URL이 발송되었습니다.")
	}

	const sendId = () => {
		openModal("입력하신 이메일 주소로 아이디가 발송되었습니다.")
	}

	const sendPassword = () => {
		openModal("비밀번호 초기화 URL 주소로 접속하여 비밀번호를 변경해 주세요.");
	
	}
// Redirect ~~~ 삭제완료. 필요없음

	const init = () => {
		const idCheckBtn = document.querySelector('.id-check-button');
		const sendCodeBtn = document.querySelector('.send-code-button');
		const codeCheckBtn = document.querySelector('.code-check-button');
		const sendEmailBtn = document.querySelector('.send-email-button');
		const createAccBtn = document.querySelector('.create-acc-button');
		// 여기까지 register 버튼
		const logInBtn = document.querySelector('.log-in-button');
		// 여기까지 로그인 버튼
		const sendIdBtn = document.querySelector('.send-id-button')
		const sendPasswordBtn = document.querySelector('.send-password-button')
		// 여기까지 아디비번찾기 버튼


		idCheckBtn.addEventListener('click', idCheck)
		sendCodeBtn.addEventListener('click', sendCode)
		codeCheckBtn.addEventListener('click', codeCheck)
		sendEmailBtn.addEventListener('click', sendEmail)
		createAccBtn.addEventListener('click', createAcc);

		logInBtn.addEventListener('click', logIn);
		sendIdBtn.addEventListener('click', sendId);
		sendPasswordBtn.addEventListener('click', sendPassword);

	}


	document.addEventListener('DOMContentLoaded', () => {
		init();
	});

// ------------------------------------- 모달창--------------------------------------------










// -------------------------------------------비밀번호 유효성검사---------------------------------------------------------------------------------
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

	const ok = document.querySelector('.passok');
	const no = document.querySelector('.passno');
	if (isValidLowercase(pw) && isValidUppercase(pw) && isValidNumber(pw) && isValidSpecial(pw) && isValidCaracterLength(pw)) {
		 
		ok.style.display = "block" // 일치하면 '일치' 문구 표시
		no.style.display = "none" //  불일치하면 '불일치' 문구 숨기기
	}
	else {
		
		ok.style.display = "none" // 일치하면 '일치' 문구 숨기기
		no.style.display = "block" // 불일치하면 '불일치' 문구 표시 
	}

})

// // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// // ---------------------------비번 동일한지 봐줘-----------------------------------------------------------


const passwordElem = document.querySelector('.pw');
const confirmElem = document.querySelector('.confirm');
const matchMessageElem = document.querySelector('.match-message');
const noMatchMessageElem = document.querySelector('.no-match-message');


const checkPasswordMatch = () => { //
	const password = passwordElem.value; 
	const confirm = confirmElem.value;

	if (password === confirm) {
		matchMessageElem.style.display = 'block';
		noMatchMessageElem.style.display = 'none';
	} else {
		matchMessageElem.style.display = 'none';
		noMatchMessageElem.style.display = 'block';
	}
};


passwordElem.addEventListener('input', checkPasswordMatch);
confirmElem.addEventListener('input', checkPasswordMatch);



// 가입완료 메시지

		function createAcc() {
			alert("가입완료");
			window.location.href="login.html";
	}




