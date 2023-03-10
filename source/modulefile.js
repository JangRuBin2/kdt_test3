const root = document.getElementById("root");

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

// pageHandler.elementMaker("div", "", "", "root");
// tagName header로 하면 object형태로 나와서 style 찾기가 난해함
const pageMaker = {
  tagName: ["div"],
  innerContent: ["하"],
  Value: ["id"],
  valueName: ["header", "main", "footer"],
  // 헤더
  header: function () {
    let element = document.createElement(this.tagName[0]);
    element.textContent = this.innerContent[0];
    element.setAttribute(this.Value[0], this.valueName[0]);
    root.appendChild(element);
  },
  // 메인
  main: function () {
    let element = document.createElement(this.tagName[0]);
    element.textContent = this.innerContent[0];
    element.setAttribute(this.Value[0], this.valueName[1]);
    root.appendChild(element);
  },
  // 푸터
  footer: function () {
    let element = document.createElement(this.tagName[0]);
    element.textContent = this.innerContent[0];
    element.setAttribute(this.Value[0], this.valueName[2]);
    root.appendChild(element);
  },
  // styler: function (StyleObject) {
  //   for (let i = 0; i < styleBox.length; i++) {
  //     this.StyleObject.style[styleBox[i]] = styleSelect[i];
  //   }
  // },
};
pageMaker.header();
pageMaker.main();
pageMaker.footer();
// pageMaker.styler("root");

// root.style[styleBox[0]] = styleSelect[0];
// root.style[styleBox[1]] = styleSelect[1];
// root.style[styleBox[2]] = styleSelect[2];

// 함수로 스타일링은 이렇게 적용하면 될텐데.. 다른 것들한테도 넣고싶엉
// function headerStyling() {
//   for (let i = 0; i < styleBox.length; i++) {
//     header.style[styleBox[i]] = styleSelect[i];
//   }

// }

const header = document.getElementById("header");
// console.dir(header);
header.style.width = "100px";

const styleBox = ["width", "height", "backgroundColor"];
const styleSelect = ["100vw", "100vh", "green"];
// headerStyling();
function elementStyling(StyleObject) {
  for (let i = 0; i < styleBox.length; i++) {
    StyleObject.style[styleBox[i]] = styleSelect[i];
  }
}
elementStyling(root);
