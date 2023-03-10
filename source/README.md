23.03.10
팀 소개하는 페이지를 제작하려 합니다.

조건

1. 다양한 카피라이트(대표문구)들이 유동적으로 첨삭될 예정이다. -> elementMaker
2. 스토리텔링 전략에 의해 텍스트의 변동 가능성이 매우 높다. -> css핸들링
3. 사용자의 클릭을 유도하는 스토리텔링 시놉시스가 완성되었다.
   -> 이벤트? 나중에 해야할듯
4. id 값이 root인 element 한 개를 제외한 모든 HTML body 요소는 자바스크립트로 제어 할 것 -> 동적 제어, 생성

진행 상황
issue-1
동적으로 페이지의 요소를 생성하는 함수들의 모음 -> pageMaker(객체)
필요할 때 호출하여 필요한 기능을 쓸 수 있다.
스타일링 핸들러를 만들면 될 거같다

issue-2
뭔가 손해같긴 한데 함수를 호출하면 내가원하는 요소가 생성된다 ㅠㅠ 근데 차라리 전에꺼가 나은듯 ㅋㅋㅋ 지금꺼는 함수가 아니라 하드코딩이 자낰ㅋㅋㅜㅜㅠ 객체안의 함수 이용해 뭔갈 하고싶은데 내 머리로는 못만들겠다

issue-3
예준씨의 도움으로 내가 원하던 것을 만들 수 있었다 ㅜㅜ 매개변수, 객체를 활용하는 법을 좀 더 연습해야 할 것 같다
-> \_EXAMDATA의 데이터를 html 문서내에 모두 출력하는데 원하는 section에 넣고 싶다
->설계 안하고 전체제어 함수부터 만들다가 머리 폭발

issue-4
현재 원하는 위치에 스타일을 적용하고 싶은데 for문돌려서 하는게 맞나..?
디비전 부터 생성하고 작업해야함
아니 뭔가만 손대면 스타일도 여기저기 다 적용가능한데 해답을 몰그ㅔㅆ다...

onst \_EXAMDATA = {
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
