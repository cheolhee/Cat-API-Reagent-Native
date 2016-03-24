# Cat API + React/Reagent Native
### Web Development with Clojure, Second Edition Chapter 6. Cat API 를 이용하는 React Native, Reagent Native 예제

Cheolhee Han, MIT License

---
Reagent JS는 사례가 종종 보이나 Reagent Native는 예제 프로젝트가 "아직은" 잘 없습니다.

작년 가을 [ReactNativeDuckie](https://github.com/cheolhee/ReactNativeDuckie) 앱을 하나 만들어 보고 한동안 관심을 끊었었습니다.
최근 [re-natal](https://github.com/drapanjanas/re-natal) 이란 bootstrap 을 돌려 봤는데, 이제는 많이 편해졌더군요.

[Web Development with Clojure, 2nd Edition](https://pragprog.com/book/dswdcloj2/web-development-with-clojure-second-edition)의 6장에  [Compojure-api](https://github.com/metosin/compojure-api) 를 이용한 Cat API를 만들기가 나옵니다. (고양이 사진을 퍼오는 API입니다.)

책에서는 Web으로 고양이 그림을 띄워주는 Web을 간략하게 만드는데, 이것을 Reagent Native를 이용하여 iOS앱으로 만들었습니다.

# Usage
---
[6장 Cat API](https://github.com/cheolhee/clojure-web-programming-chapter6-restful-web) 를 받아서, jar를 만듭니다.
```
$ lein uberjar
```
`target/uberjar` 폴더에 jar가 만들어졌을 겁니다. 실행합니다.
```
$ java jar swagger-service.jar
```

브라우저를 열어 아래 URL을 입력합니다. JSON 배열에 URL이 3겨 나오면 정상입니다.
```
http://localhost:3000/api/cat-links?link-count=3
```
준비는 끝났고,
이제 [re-natal](https://github.com/drapanjanas/re-natal)을 설치합니다.

프로젝트를 생성합니다. 시간이 좀 걸리므로 기다립니다..
```
$ re-natal init CatApiCljsRn
```
프로젝트 폴더로 들어가서,
```
$ cd cat-api-cljs-rn
```
리액트 네이비브를 실행합니다.
```
$ react-native run-ios
```
iOS시뮬레이터가 뜹니다. 빨간 에러 화면이 뜨나요?
당황하지 마시고, figwheel을 실행합니다. **맥 성능 따라 은근 시간이 걸립니다.**
```
$ re-natal use-figwheel
$ lein figwheel ios
```
![Hello ClojureScript in iOS and Android](https://github.com/cheolhee/Cat-API-Reagent-Native/raw/master/hello_reagent.jpg )

"Hello Clojure in iOS and Android!" 화면이 보이나요? 자 이제 마지막 단계입니다.


`cat-api-cljs-rn/src/cat_api_cljs_rn/ios/` 폴더를 열면 `core.cljs` 가 있습니다.

이 ClojureScript 파일을 리포지토리의 `re-natal/ios/core.cljs` 로 교체합니다.

figwheel 이 알아서 재빌드합니다.

"Call Cat API" 버튼을 누르면 고양이 사진이 뜹니다.

![Cat API Result](https://github.com/cheolhee/Cat-API-Reagent-Native/raw/master/reagent_native.jpg)


# TO DOs
---
* `componentDidMount` 미구현. Reagent 에서는 어디에 붙여야 하는지 잘 모르겠습니다.
* 자세한 소스 설명 : 시간이 필요합니다.

## 그밖에..
---
* ListView 구현은 https://github.com/mfikes/reagent-react-native 를 참고로 했습니다.
* `react-native` 폴더의 소스는 React Native ( JSX ) 용으로 만든 것입니다. 비교보셔도 좋습니다.
