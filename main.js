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
// check 버튼을 누르면 할일이 끝나면서 밑줄이 간다
// 진행중 끝남 탭을 누르면 언더바가 이동한다.
// 끝남탭은, 끝난 아이템만, 진행중인 탬은 진행중인 아이템만
// 전체탭은 다시 전테아이템으로 돌아옴

let taskinput = document.getElementById("task-input") // 1
console.log(taskinput) // 중간중간 콘솔로 확인할 것
let addbutton = document.getElementById("add-button") // 2
let tasklist = []




addbutton.addEventListener("click",addtask) // 2





function addtask(){ // 2
    let taskContent = taskinput.value; 
    tasklist.push(taskContent);
    console.log(tasklist);
    render()
}

function render(){ // 2
    let resultHTML = ''
    for(let i=0; i<tasklist.length; i++){
        resultHTML += `<div class="task">
        <div>${tasklist[i]}</div>
        <div>
        <button>Check</button>
        <button>Delete</button>
        </div>
        </div>`;
    
    }

    document.getElementById("task-board").innerHTML = resultHTML// 2
}

// innerHTML > 붙여넣다
// for(let i=0; i<tasklist.length; i++) > 배열 안에 있는 것들을 하나하나 꺼낸다