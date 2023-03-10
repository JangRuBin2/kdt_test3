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

// pageHandler.elementMaker("div", "", "", "root");
// this안써서 애들이 위치를 못찾았던 것 같다
const pageMaker = {
  maker: function (tagName, innerContent, Value, valueName) {
    let element = document.createElement(tagName);
    element.textContent = innerContent;
    element.setAttribute(Value, valueName);
    root.appendChild(element);
  },
};
// 헤더
pageMaker.maker("header", "1", "id", "");
// 메인
pageMaker.maker("main", "", "id", "");
// 푸터
pageMaker.maker("footer", "", "id", "");

// 헤더 스타일링
const header = document.getElementsByTagName("hedaer");
console.log(header);
