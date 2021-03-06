# Vuex
![#](https://vuex.vuejs.org/vuex.png)

## states
상태, 어플리케이션에서 공통으로 관리할 상태 (= 모델, 스토어)
 - 컴포넌트에서 상태를 가져올 때는 `computed` 내부에 작성해야한다.

**mapState**
컴포넌트에서 여러 상태를 가져올때를 위해 도와주는 함수

## getters
스토어 내에서 computed와의 같은 역할
 * 스토어의 상태를 바로가져오는 것이 아니라 가공해서 가져와야 할 때
 * 자바에서 getter로 데이터의 리턴형식을 바꿀 수 있는 것과 같은 느낌
 
**mapGetter**
컴포넌트에서 여러 게터가필요할 때 도와주는 함수

## mutation
변이, 스토어의 상태를 변경하는 방법 ( = 디스패치)
 * 변이 함수의 내용은 액션의 타입과 동일
 * 함수의 내용은 실제 상태를 수정하는 로직
 * 반드시 동기적으로 작동해야함
 
**mapMutation**
컴포넌트에서 여러 변이가 필요할때 도와주는 함수
 
## action
 * 변이에 대한 커밋
 * 비동기 작업 가능

**mapMutation**
컴포넌트에서 여러 액션이 필요할때 도와주는 함수
