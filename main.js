// 유저는 할일을 추가할 수 있다.
// 각 할일에 삭제와 체크버튼이 있다.
// 삭제버튼을 클릭하면 할일이 리스트에서 삭제된다.
// 체크버튼을 누르면 할일이 끝난것으로 간주하고 밑줄이간다.
// 끝난 할일은 되돌리기 버튼을 클릭하면 다시 되돌릴 수 있다.
// 탭을 이용해 아이템들을 상태별로 나누어서 볼 수 있다.
// 모바일 버전에서도 확인할 수 있는 반응형 웹이다

// 유저가 값을 입력한다.
// + 버튼을 클릭하면, 할일이 추가된다
// delete 버튼을 누르면 할일이 삭제된다.
// check 버튼을 누르면 할일이 끝나면서 밑줄이 간다 < 객체
// 1. check 클릭하는 순간 false > true
// 2. true이면 끝난걸로 간주하고 밑줄 보여주기
// 3. false이면 안 끝난걸로 간주하고 그대로
// 진행중 끝남 탭을 누르면 언더바가 이동한다.
// 끝남탭은, 끝난 아이템만, 진행중인 탬은 진행중인 아이템만
// 전체탭은 다시 전테아이템으로 돌아옴

let taskinput = document.getElementById("task-input"); // 1
console.log(taskinput); // 중간중간 콘솔로 확인할 것
let addbutton = document.getElementById("add-button"); // 2
let tasklist = [];

addbutton.addEventListener("click", addtask); // 2

function addtask() {
  // 2

  let task = {
    //2 >
    id: randomIDGenerate(), // 4
    taskContent: taskinput.value, // 4객체
    isComplete: false, // 4객체
  };
  tasklist.push(task);
  console.log(tasklist);
  render();
}

function render() {
  // 2
  let resultHTML = " ";

  for (let i = 0; i < tasklist.length; i++) {
    if (tasklist[i].isComplete == true) {
      resultHTML += `<div class="task">
            <div class="task-done ">${tasklist[i].taskContent}</div> 
            <div>
            <button onclick="togglecomplete('${tasklist[i].id}')">
            <i class="fa-solid fa-check"></i>
            </button>
            <button onclick="deletetask('${tasklist[i].id}')" >Delete</button>
            </div>
            </div>`;
    } else {
      resultHTML += `<div class="task">
        <div>${tasklist[i].taskContent}</div> 
        <div>
        <button onclick="togglecomplete('${tasklist[i].id}')">
        <i class="fa-solid fa-check"></i>
        </button>
        <button onclick="deletetask('${tasklist[i].id}')">Delete</button>
        </div>
        </div>`;
    }

  }

  document.getElementById("task-board").innerHTML = resultHTML; // 2
}
// tasklist 배열 중에 taskContent를 프린트 해줘(지정해줌)
// innerHTML > 붙여넣다
// for(let i=0; i<tasklist.length; i++) > 배열 안에 있는 것들을 하나하나 꺼낸다
// 버튼=클릭이벤트 1 addEventListener 2. onclick 바로 버튼에 줌(함수 넣을 것)

function togglecomplete(id) {
  // 4
  console.log("id:", id);
  for (let i = 0; i < tasklist.length; i++) {
    if (tasklist[i].id == id) {
      tasklist[i].isComplete = !tasklist[i].isComplete;
      break;
    }
  }
  render()
  console.log(tasklist);
}

function deletetask(id) {
    // 5
  
    for (let i = 0; i < tasklist.length; i++) {
      if (tasklist[i].id == id) {
        tasklist.splice(i,1) 
        break;
      }
    }
    render()
    
  }

function randomIDGenerate() {
  // 4
  return "_" + Math.random().toString(36).substr(2, 9);
}
