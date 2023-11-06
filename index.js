//엔터 누르면 읽기모드
function pressEnter(e) {
  if (e.keyCode === 13) {
    console.log(e.target);
    e.target.readOnly = true;
  }
}
//수정 이미지 클릭 시 읽기 모드 해제
function clickImg1(e) {
  console.log(e.target);
  textInput.readOnly = false;
}
//체크 박스 누를 시 줄긋기
function clickCkBox(e) {
  console.log(e.target);
  if (e.target.checked) {
    textInput.style.textDecoration = 'line-through';
  } else {
    textInput.style.textDecoration = 'none';
  }
}
//삭제 이미지 누를 시 메모내용 삭제
function removeList() {
  console.log(e.target);
  main.remove();
}
//새로운 todo추가하기 누를 시 리스트 증가
function addtodolist() {
  const addsection = document.createElement('section');
  addsection.className = 'main';
  const addckinput = document.createElement('input');
  addckinput.className = 'ck-input';
  addckinput.type = 'checkbox';
  const addtextinput = document.createElement('input');
  addtextinput.className = 'text-input';
  const addimg1 = document.createElement('img');
  addimg1.className = 'img1';
  addimg1.src = 'img/img1.png';
  const addimg2 = document.createElement('img');
  addimg2.className = 'img2';
  addimg2.src = 'img/img2.png';

  addsection.append(addckinput, addtextinput, addimg1, addimg2);
  todo.append(addsection);
}
