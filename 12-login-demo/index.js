function loadUserData() {

    // (데모데이터) 로컬스토리지에 사용자 정보가 없으면 테스트 데이터로 저장
    localStorage.setItem('currentUsers', JSON.stringify([
        {
            userId: 'test',
            password: '1234',
            passwordCheck: '1234',
            name: '장길산',
            birthDate: '1990-01-01',
            email: 'abc@gmail.com',
            phone: '010-1234-5678',
            gender: '남자',
            job: 1

        }
    ]));

    console.log('loadUserData 실행');
    // 로컬스토리지에서 'users' 값 가져오기
    const storedUsers = localStorage.getItem('currentUsers');
    console.log('storedUsers:', storedUsers);
    if (storedUsers) {
        // JSON 파싱해서 객체로 변환
        const userData = JSON.parse(storedUsers);

        // 각 필드에 값 채워 넣기
        document.getElementById('userId').value = userData[0].userId;
        document.getElementById('password').value = userData[0].password;
        document.getElementById('passwordCheck').value = userData[0].passwordCheck;
        document.getElementById('name').value = userData[0].name;
        document.getElementById('birthDate').value = userData[0].birthDate;
        document.getElementById('email').value = userData[0].email;
        document.getElementById('phone').value = userData[0].phone;
        document.getElementById('gender').value = userData[0].gender;
        document.getElementById('job').value = userData[0].job;
    } else {
        console.log('로컬스토리지에 저장된 사용자 정보가 없습니다.');
    }
}

// 페이지 로드 시 loadUserData 실행
window.onload = loadUserData;

document.getElementById('edit_form').addEventListener('submit', function (e) {
    e.preventDefault(); // 폼 제출 방지

    // 비밀번호와 비밀번호 확인이 같은지 확인
    if (document.getElementById('password').value !== document.getElementById('passwordCheck').value) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
    }

    // 수정된 데이터 객체 생성
    const updatedUser = {
        userId: document.getElementById('userId').value,
        password: document.getElementById('password').value,
        passwordCheck: document.getElementById('passwordCheck').value,
        name: document.getElementById('name').value,
        birthDate: document.getElementById('birthDate').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        gender: document.getElementById('gender').value,
        job: document.getElementById('job').value
    };

    // JSON 문자열로 변환하여 로컬스토리지에 저장
    localStorage.setItem('users', JSON.stringify(updatedUser));

    alert('수정이 완료되었습니다!');
});

// 로그인 상태
const currentUsers = JSON.parse(localStorage.getItem("currentUsers")) || [];
if (currentUsers.length > 0) {
    const currentUser = currentUsers[0]; // 첫 번째 사용자를 현재 로그인 사용자로 간주

    $("#signupLink, #loginLink").hide(); // 회원가입, 로그인 버튼 감추기
    $("#logoutLink").show(); // 로그아웃 버튼 보이기
    $("#mypage").show(); // 마이페이지 버튼 보이기
    $("#welcomeMessage").html(`${currentUser.userId}님`).show(); // 사용자 아이디 표시

    // roleId가 2 이상인 경우 관리자 메뉴 보이기
    if (currentUser.roleId >= 2) {
        $("#adminLink").show();
    }
}

// 로그아웃 버튼 클릭 시 로그아웃 처리
$("#logoutLink").on("click", function () {
    localStorage.removeItem("currentUsers"); // 로그아웃 시 currentUsers 제거
    alert("로그아웃 되었습니다.");
    location.reload(); // 페이지 새로고침
});
