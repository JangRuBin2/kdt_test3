const root = document.getElementById("root");
const header = root.children["header"];
// const main = root.children["main"];
// const footer = root.children["footer"];
const _EXAMDATA = {
  teamInformation: {
    teamNumber: 5,
    teamName: "newDevs",
    teamNameStory: "뉴진스의 하입보이요.",
    teamManager: "박준형",
    // 프로젝트에 참가한 팀원 명단입니다.
    teamAllMember: [
      {
        memberNumber: 0,
        name: "준형",
        teamPosition: "팀장",
        githubAddress: "https://www.github.com/joon",
      },
      {
        memberNumber: 1,
        name: "윤호",
        teamPosition: "에이스",
        githubAddress: "https://www.github.com/yoon",
      },
      {
        memberNumber: 2,
        name: "예준",
        teamPosition: "연구원",
        githubAddress: "https://www.github.com/yeah",
      },
      {
        memberNumber: 3,
        name: "해경",
        teamPosition: "홍일점",
        githubAddress: "https://www.github.com/hye",
      },
      {
        memberNumber: 4,
        name: "루빈",
        teamPosition: "졸개",
        githubAddress: "https://www.github.com/roo",
      },
    ],
  },
  trainingInformation: {
    subject: [
      "웹프로그래밍기본(HTML5&CSS3)",
      "Git&GitHub",
      "Babel Javascript",
      "프레임워크 기초",
      "Project C(선택)",
      "백엔드프레임워크런타임",
      "프레임워크활용",
      "Project A(데이터 기반 주식 추천 서비스)",
      "Project B(교통정보제공서비스)",
    ],
  },
  designInformation: {
    colorSet: ["cadetblue", "salmon", "#ccc", "#333"],
    breakPoint: ["768px", "1280px", "1920px"],
  },
};

// const pageMaker = {
//   elMaker: function (tagName, Value, valueName, content, parent) {
//     let element = document.createElement(tagName);
//     element.setAttribute(Value, valueName );
//     element.textContent = content;
//     parent.appendChild(element);
//   },
// };
// 헤더 스타일링
// innerContent = [];
// pageHandler.elementMaker("div", "", "", "root");
// tagName header로 하면 object형태로 나와서 style 찾기가 난해함

const pageMaker = {
  tagName: ["div"],
  innerContent: ["생성"],
  Value: ["id", "class"],
  valueName: ["header", "main", "footer"],
  parent: [root],

  // 헤더, 메인, 푸터
  bodyWrap: function () {
    for (let i = 0; i < pageMaker.valueName.length; i++) {
      let element = document.createElement(this.valueName[i]);
      // element.textContent = this.innerContent[0];
      // element.setAttribute(this.Value[0], this.valueName[0]);
      this.parent[0].appendChild(element);
    }
  },
  // teamInfo: function () {
  //   for (
  //     let i = 0;
  //     i < _EXAMDATA["teamInformation"].teamAllMember.length;
  //     i++
  //   ) {
  //     let element = document.createElement("div");
  //     // element.textContent = this.innerContent[0];
  //     // element.setAttribute(this.Value[0], this.valueName[0]);
  //     root.children[1].appendChild(element);
  //   }
  //   // console.log("hi");
  // },
  // 디비전 생성 -> where에 어디의 자식으로 할건지 경로지정, a에 몇개 만들건지 씀
  div: function (where, a, textWhat) {
    for (let i = 0; i < a; i++) {
      let ele = document.createElement("div");
      // 사진이나 텍스트
      // ele.setAttribute(this.Value[1], className);
      ele.innerHTML = textWhat;
      // 원하는 위치에 요소 생성
      where.appendChild(ele);
    }
  },
  // 클래스 적용하고 내용 설정 가능

  // 출력해야 할 개인 내용이 깃허브주소, 넘버, 이름, 포지션,
  innerDiv: function (innerWhere, s, setText) {
    for (let i = 0; i < s; i++) {
      let innerEle = document.createElement("div");
      innerEle.setAttribute("class", [i] + "class");
      innerEle.innerHTML = setText;
      innerWhere.appendChild(innerEle);
    }
  },
};

// styler: function (StyleObject) {
//   for (let i = 0; i < styleBox.length; i++) {
//     this.StyleObject.style[styleBox[i]] = styleSelect[i];
//   }
// },

// 태그 생성 영역
// pageMaker.createDiv(5);

// 헤더 메인 푸터 생성
pageMaker.bodyWrap();
// header에 팀 네임>로고 생성
pageMaker.div(root.children[0], 1, _EXAMDATA["teamInformation"].teamName);

// pageMaker.div()
// pageMaker.styler("root");
// 헤더 자식으로 div 1개 생성
// pageMaker.teamInfo(1);

// 메인
pageMaker.div(
  // 위치
  root.children[1],
  // 몇개 만들지
  _EXAMDATA.teamInformation.teamAllMember.length,
  // 들어갈 텍스트 요소
  "팀 인원수만큼 디비전 생성"
);
// const teamInfoHeader = root.children[1].querySelector();
console.log(root.children[1]);
// pageMaker.div(roo)
// n번째 main div 접근

// 팀원의 개인정보
console.log(_EXAMDATA.teamInformation.teamAllMember[0]);

for (let i = 0; i < _EXAMDATA.teamInformation.teamAllMember.length; i++) {
  pageMaker.innerDiv(
    root.children[1].children[i],
    4,
    // 팀원 개인의 깃허브 주소
    _EXAMDATA.teamInformation.teamAllMember[i].githubAddress
  );
}

// 푸터
pageMaker.div(root.children[2], 1);

function teamIntro() {
  for (let i = 0; i < a; i++) {}
}
// const teamIntroduce = document.createElement("div");
// teamIntroduce.textContent = _EXAMDATA["teamInformation"].teamName;
// root.children[0].appendChild(teamIntroduce);
// 랜덤 팀원 이름
// console.dir(_EXAMDATA["teamInformation"].teamAllMember[i].name);
console.dir(_EXAMDATA["teamInformation"].teamAllMember[0].teamPosition);

// root.style[styleBox[0]] = styleSelect[0];
// root.style[styleBox[1]] = styleSelect[1];
// root.style[styleBox[2]] = styleSelect[2];

// 함수로 스타일링은 이렇게 적용하면 될텐데.. 다른 것들한테도 넣고싶엉
// function headerStyling() {
//   for (let i = 0; i < styleBox.length; i++) {
//     header.style[styleBox[i]] = styleSelect[i];
//   }

// }

// console.dir(header);
// header.style.width = "100px";

// 헤더 스타일링
// function elementStyling(StyleObject) {
//   for (let i = 0; i < styleSelect.length; i++) {
//     StyleObject.style[styleSelect[i]] = styleValue[i];
//   }
// }
// const styleSelect = ["width", "height", "backgroundColor"];

// const styleValue = ["100vw", "100vh", "green", "red"];
// elementStyling(root);

// function styleMaker(style) {
//   Object.keys(style).forEach(function(key) {
//     root[key] = style[key];
//   })
// }
// console.log(root.style);

// const styleWorld = {
//   Size: ["width"],
//   Font: ["fontSize"],
//   Display: ["display"],
//   Color: ["color"],
// };

// // console.dir(styleWorld.Color[0]);
// // root.style[styleWorld.Color[0]] = styleValue[3];

const styleBox = {
  // 각 스타일 적용할 위치
  styleWhere: [root, root.children[0]],
  // 스타일 요소들
  StyleSelect: [
    // size
    "margin",
    "width",
    "height",
    // color
    "backgroundColor",
    "color",
    "fontSize",
    "fontFamilly",
    // display
    "display",
    "flexDirection",
    "justifyContent",
    "alignItems",
  ],
  // 스타일 적용할 변수 선언하고 데이터 넣어주면 됨
  rootStyleValue: ["0", "100vw", "100vh", "green", "yellow"],
  headerStyleValue: ["0", "100vw", "10vh", "pink"],
  mainStyleValue: ["0", "100vw", "70vh", "yellow"],
  footerStyleValue: ["0", "100vw", "20vh", "black"],
  InfoBoxStyleValue: [
    "0",
    "300px",
    "500px",
    "white",
    "black",
    "20px",
    "",
    "flex",
    "column",
    "center",
    "center",
  ],
  // #root 스타일

  rootStyler: function () {
    for (let i = 0; i < this.StyleSelect.length; i++) {
      this.styleWhere[0].style[this.StyleSelect[i]] = this.rootStyleValue[i];
    }
  },
  // 헤더 스타일
  headerStyler: function () {
    for (let i = 0; i < this.StyleSelect.length; i++) {
      this.styleWhere[1].style[this.StyleSelect[i]] = [
        this.headerStyleValue[i],
      ];
    }
  },
  // 외부에서 핸들링해야하는 -> 값이 자주 바뀌는 친구들은 매개변수로 써주는게 좋고 , 우리가 계속 사용할 -> 바뀌지 않을 애들을 함수로 쓰는게 맞다 ㅜㅠㅜ
  commonStyler: function (comsty, choiceStyle) {
    for (let i = 0; i < this.StyleSelect.length; i++) {
      comsty.style[this.StyleSelect[i]] = choiceStyle[i];
    }
  },
};

// console.log(root.children[0].style["width"]);
styleBox.rootStyler();
console.log(root.children[0]);
styleBox.headerStyler();
// 팀 개인 소개 창
console.log(root.children[1].children);
styleBox.commonStyler(root.children[1], styleBox.InfoBoxStyleValue);
