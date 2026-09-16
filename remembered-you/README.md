# 언니의 기억

익숙한 집을 탐색하며 단서를 연결하는 한국어 서사 미스터리 게임.
현재 공개된 완성본의 PC 화면과 전체 챕터, 두 선택의 결말을 포함합니다.
PC에서는 기존 화면으로 실행되며 모바일 대응도 함께 포함되어 있습니다.

## PC에서 실행
압축을 모두 푼 다음 index.html을 Chrome 또는 Edge로 엽니다.
HTML과 이미지, CSS, JavaScript 파일을 같은 폴더에 유지하세요.
별도 설치, API 키, 서버 프로그램 또는 빌드 과정은 필요하지 않습니다.
물건 위에 마우스를 올려 이름을 확인하고 클릭해 조사합니다.
Tab과 Enter로도 물건을 선택하고 조사할 수 있습니다.

## GitHub에 올리기 / 플레이 링크 만들기
1. GitHub에서 새 저장소를 만듭니다.
2. 압축파일 자체가 아니라 압축을 푼 모든 파일을 저장소에 업로드합니다.
3. index.html이 저장소의 가장 바깥쪽에 있도록 배치합니다.
4. 저장소 Settings → Pages에서 Source를 Deploy from a branch로 설정합니다.
5. 업로드한 브랜치(보통 main)와 / (root)를 선택하고 Save를 누릅니다.
6. 게시 완료 후 Pages에 표시되는 주소를 공유합니다.

공식 안내: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 수정할 파일
- index.html: 화면 구조
- style.css: PC 및 모바일 화면 스타일
- story.js: 챕터별 대사와 장면
- game.js: 조사, 단서 연결, 선택, 저장 기능
- mobile.js: 모바일 그림 크기와 스크롤 조정
- PNG / WebP: 실제 게임에서 사용하는 배경과 캐릭터

## 저장 및 외부 연결
진행 상황은 이용자 각자의 브라우저에 저장됩니다.
기존 게임 주소의 저장 데이터는 새 GitHub Pages 주소로 자동 이전되지 않습니다.
로컬 파일 실행에서는 브라우저 설정에 따라 저장 동작이 달라질 수 있습니다.
글꼴은 Google Fonts에서 불러옵니다. 연결되지 않으면 기본 글꼴로 표시됩니다.
이미지는 전부 포함되어 있으며 게임 진행에 외부 API는 필요하지 않습니다.

## 구성
게임 실행에 쓰이지 않는 이전 일러스트, 배포 전용 설정, 인증 정보와 Git 이력은 포함하지 않았습니다.
