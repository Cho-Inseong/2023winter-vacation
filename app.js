// input에 숫자를 입력하고 + 버튼을 클릭하면 결과값에 입력한 숫자 만큼 더해지고 input의 값은 없어진다.

// input에 숫자를 입력하고 - 버튼을 클릭하면 결과값에 입력한 숫자 만큼 빼지고 input의 값은 없어진다.
// input에 유효하지 않은 숫자를 입력하고 +, - 버튼을 클릭하면 동작은 무되되고 input의 값은 없어진다.
// undo를 클릭하면 이전 값으로 돌아간다.
// redo를 클릭하면 이후 값으로 되돌린다.
// undo와 redo는 동작이 가능할때만 활성화 상태가 된다.
//let value = document.getElementById('value');
let value = 3;
let total = 0;
let resultArray = [0];
let currentindex = 0

let undoButton = document.getElementById('undoButton'),
  addButton = document.getElementById('addButton'),
  subButton = document.getElementById('subButton'),
  redoButton = document.getElementById('redoButton'),
  inputValue = document.getElementById('inputbox');

// =====  ===== //
function onload() {
  undoButton.onclick = handleClick;
  addButton.onclick = handleClick;
  subButton.onclick = handleClick;
  redoButton.onclick = handleClick;
}

// ===== handlClick ===== //
function handleClick(event) {
  //alert(event.target.id);
  //console.log(event.target.id);

  let clickType = 'add'; // 값: add || min
  let lastValue = resultArray[resultArray.length-1]

  if(clickType === 'add'){
    if(currentindex  >= resultArray.length-1){
      alert('더 이상 더할 수 없습니다잉')
      return
    }
    currentindex = currentindex + 1;
    resultArray.push(lastValue + value)
  }
  else if(clickType === 'min'){
    alert('빼기 버튼입니다.');
  }
} // func
