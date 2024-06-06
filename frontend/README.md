# PlaceAR
AR 기반의 주변 장소 검색 앱

<img src="https://github.com/green-21/PlaceAR/assets/75987694/bc7d00a9-3330-4718-9330-59a221a23f5d"  width="200" height="400">
<img src="https://github.com/green-21/PlaceAR/assets/75987694/3af39476-fb6c-4bde-a036-5a4a67a1e1a9"  width="200" height="400">
<img src="https://github.com/green-21/PlaceAR/assets/75987694/d5d1c607-8185-43da-9ae3-067a6bcdb15c"  width="200" height="400">

   

# Setting
## 기본 환경 설정
react-native-cli를 이용한다. 따라서 Android SDK(30 버전 이상), node.js를 설치해야 한다. 설치는 공식 문서를 따른다. (
https://reactnative.dev/docs/environment-setup?guide=native)
## Vscode 빌드 세팅 방법
1. 확장으로 React Native 툴을 설치한다.
2. 아무것도 키지 않은 상태로 디버그 탭을 클릭한다.
3. launch.json 만들기를 클릭한다.
4. React Native를 선택하고, 원하는 빌드환경을 체크한 다음 확인을 누른다.


## npm install 도중 문제 발생시 해결 방법
1. `npm cache clean --force`로 캐시를 비운다.
2. npm_module을 지우고 다시 설치한다.
3. `npm install`을 반복적으로 시도한다.
4. 좋은 네트워크 환경에서 설치를 진행한다.