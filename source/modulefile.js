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
        githubAddress: "https://www.github.com/",
      },
      {
        memberNumber: 1,
        name: "윤호",
        teamPosition: "에이스",
        githubAddress: "https://www.github.com/",
      },
      {
        memberNumber: 2,
        name: "예준",
        teamPosition: "연구원",
        githubAddress: "https://www.github.com/",
      },
      {
        memberNumber: 3,
        name: "해경",
        teamPosition: "홍일점",
        githubAddress: "https://www.github.com/",
      },
      {
        memberNumber: 4,
        name: "루빈",
        teamPosition: "졸개",
        githubAddress: "https://www.github.com/",
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
  Value: ["id"],
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
  div: function (where, a) {
    for (let i = 0; i < a; i++) {
      let ele = document.createElement("div");
      ele.textContent = this.innerContent[0];
      where.appendChild(ele);
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
// header에 디비전 생성
pageMaker.div(root.children[0], 1);
// pageMaker.styler("root");
// 헤더 자식으로 div 1개 생성
// pageMaker.teamInfo(1);
// 메인
pageMaker.div(root.children[1], 3);

// 푸터

function teamIntro() {
  for (let i = 0; i < a; i++) {}
}
const teamIntroduce = document.createElement("div");
teamIntroduce.textContent = _EXAMDATA["teamInformation"].teamName;
root.children[0].appendChild(teamIntroduce);
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
  // 각 스타일별로 나누기엔 너무 어려움 ㅠ
  StyleSelect: [
    // size
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
  headerStyleValue: ["100vw", "10vh", "green", "yellow"],
  mainStyleValue: ["100vw", "70vh", "yellow"],
  footerStyleValue: [,],
  styler: function (styleWhere) {
    for (let i = 0; i < this.StyleSelect.length; i++) {
      styleWhere.style[this.StyleSelect[i]] = this.headerStyleValue[i];
    }
  },
};
// console.log(root.children[0].style["width"]);
styleBox.styler(root.children[0]);
