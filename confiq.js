const addToDo = document.getElementById('addtodo');
const toDoList = document.querySelector('.todolist');
//main 이벤트 추가

//새로운 todo 추가하기
addToDo.addEventListener('click', () => {
  const adddiv1 = document.createElement('div');
  adddiv1.className = 'main';
  const adddiv2 = document.createElement('div');
  const adddiv3 = document.createElement('div');
  const addtextinput = document.createElement('input');
  addtextinput.className = 'text-input';
  const addckinput = document.createElement('input');
  addckinput.className = 'ck-input';
  addckinput.type = 'checkbox';
  const addimg1 = document.createElement('img');
  addimg1.src = 'img/img1.png';
  const addimg2 = document.createElement('img');
  addimg2.src = 'img/img2.png';
  adddiv2.appendChild(addckinput);
  adddiv2.appendChild(addtextinput);
  adddiv3.appendChild(addimg1);
  adddiv3.appendChild(addimg2);
  adddiv1.appendChild(adddiv2);
  adddiv1.appendChild(adddiv3);
  //체크박스  through line 이벤트 추가
  adddiv1.addEventListener('click', (e) => {
    if (e.target === addckinput && e.target.checked === true) {
      e.target.nextElementSibling.style.textDecoration = 'line-through';
    }
    if (e.target === addckinput && e.target.checked === false) {
      e.target.nextElementSibling.style.textDecoration = 'none';
    }
  });
  //엔터 누를시 읽기 모드 변경
  addtextinput.addEventListener('keypress', (e) => {
    if ((e.keyCode = 13)) {
      if (e.target.value) {
        e.target.readOnly = true;
      } else alert('좋은말할때 뭐라도 입력해라');
    }
  });
  //수정이미지 누를시 읽기모드 해제
  addimg1.addEventListener('click', (e) => {
    e.target.parentNode.previousSibling.lastChild.readOnly = false;
  });
  //삭제 이미지 누를시 메모 삭제
  addimg2.addEventListener('click', (e) => {
    e.target.parentNode.parentNode.remove();
  });
  toDoList.appendChild(adddiv1);
});
const local = {};
