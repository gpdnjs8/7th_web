🎯 핵심 키워드
- State
    - State란 무엇인가요?
        
        React Component의 상태로 변경 가능한 데이터를 의미한다. 
        
    - State를 정의할 때 중요한 점은 무엇이고, 그 이유는 무엇인가요?
        
        렌더링이나 데이터 흐름에 사용되는 것만 state에 사용해야 한다. state가 변경될 경우, component가 재렌더링되기 때문에 렌더링과 데이터 흐름에 관련 없는 값을 포함하면 불필요한 경우에 component가 재렌더링되어 성능을 저하시킬 수 있다. 
        
    - React Component 생명주기에 대해 설명해주세요.
        
        `Mounting`
        
        component가 생성되는 시점이다. 생성자에서는 component의 state를 정한다. component가 렌더링되며 이후 componentDidMount 함수가 호출된다. 
        
        `Updating`
        
        component가 여러 번 렌더링된다. component의 props가 변경되거나 setState 함수 호출에 의해 state가 변경되는 경우, falseUpdate라는 강제 업데이트 함수 호출로 인해 발생한다.
        
        `Unmounting`
        
        상위 component를 더 이상 화면에 표시하지 않게 될 때 unmount된다.
        
- Hooks
    - Hooks가 개발된 이유는 무엇인가요?
        
        함수형 컴포넌트에서도 state와 lifecycle 메서드 관리 기능을 사용하기 위해 개발되었다. 
        
    - useState에 대한 간단한 설명과 사용법을 설명해 주세요.
        
        useState는 상태를 추가하고 관리할 수 있게 해주는 hook이다. 
        
        ```jsx
        import { useState } from 'react';
        
        const [상태 변수, 상태 변경 함수] = useState(초기값);
        ```
        
        useState는 두 개의 값을 가진 배열을 반환한다. 하나는 현재 state로, 첫 번째 렌더링 중에는 전달한 initialState와 일치한다. 다른 하나는 state를 다른 값으로 업데이트하고 리렌더링을 촉발할 수 있는 set 함수이다. 
        
    - SideEffect의 사전적 의미와, React에서 사용되는 의미와 함께 React에서는 왜 해당 의미를 갖는지, 그 이유를 함께 설명해 주세요.
        
        SideEffect는 부수효과로 함수 내에서 동일한 입력에 대해 같은 결과를 보장할 수 없도록 하는 것이다. 즉, 함수 실행 과정에서 외부의 값을 변경하는 것이다. 서버에서 API 호출, 함수 외부 값 변경, 쿠키 및 브라우저 스토리지 이용, 브라우저 직접 변경, 시간 관련 함수 사용은 반드시 필요한 존재이다. 하지만 일관되지 않은 결과를 반환하기 때문에 복잡도를 줄여 최대한 예측 가능한 코드를 작성해야 한다. 
        
    - useEffect에 대한 간단한 설명과 사용법, 그리고 useEffect 함수가 실행되는 시점을 설명해 주세요.
        
        SideEffect를 처리하기 위해 useEffect hook을 사용한다. 
        
        ```jsx
        import React, { useEffect } from 'react';
        
        const func = () => {
        	useEffect(() => {
        	// SideEffect 수행
        	}, [/*종속성 배열*/]);
        	
        	return(
        		
        	);
        }
        ```
        
        useEffect는 SideEffect를 렌더링 이후에 발생시킨다. (예외: useLayoutEffect) useEffect가 수행되는 시점에 이미 DOM이 업데이트되었음을 보장한다. 
        
    - effect 함수가 mount, unmount가 각각 한 번만 실행되게 하려면 어떻게 해야 하나요?
        
        deps[]를 빈 배열로 둔다.
        
    - Hooks의 규칙들에 대해 설명해 주세요.
        1. 최상위에서만 hook 호출
        2. React 함수 내에서 hook 호출
- Props-Drilling
    - Props-Drilling은 무엇인가요?
        
        props를 오로지 하위 컴포넌트로 전달하는 용도로만 쓰이는 컴포넌트를 거치면서 React 컴포넌트 트리의 한 부분에서 다른 부분으로 데이터를 전달하는 과정이다.
        
    - 이를 어떻게 해결할 수 있을까요?
        1. 전역 상태관리 라이브러리 사용
        2. children을 적극적으로 사용
- Context-Api
    
    React version 16부터 사용 가능한 리액트의 내장 API이다. 앱의 모든 컴포넌트에서 사용할 수 있는 데이터를 전달할 때 유용하다. 
    
- Redux
    - 상태관리는 왜 필요한가요?
        
        props drillling이 많아질 경우 prop의 출처를 찾기 어렵다. 복잡한 시스템을 다룰 때 필수적으로 필요하다. 
        
    - 상태 관리 툴은 어떤 문제를 해결해 주나요?
        
        중복 코드를 방지하고 불필요한 렌더링, 네트워크 요청을 최소화한다. 
        
    - Redux의 기본 개념 세 가지에 대해 설명해 주세요.
        1. 하나의 애플리케이션 안엔 하나의 스토어가 있어야 한다.
        2. 상태는 읽기 전용이다.
        3. 리듀서는 순수함수여야 한다. 
    - Store, Action, Reducer의 의미와 특징에 대해 설명해 주세요.
        
        `Store`
        
        한 애플리케이션 당 하나의 스토어를 생성한다. 애플리케이션의 상태를 저장한다. getState()를 통해 상태에 접근할 수 있게 해주며 dispatch(action)을 통해 상태를 수정할 수 있게 해준다. 또한 subscribe(listener)를 통해 리스너를 등록한다. 
        
        `Action`
        
        어떤 동작을 줄지 알려주는 역할을 한다. type 프로퍼티를 필수적으로 가지고 있어야 한다. 
        
        `Reducer`
        
        변화를 일으키는 함수다. state와 action 파라미터를 가진다. 기존 상태를 전달 받은 action을 참고해서 새로운 상태를 반환한다. 
        
    - Redux의 장점을 설명해 주세요.
        
        크고 복잡한 앱에서 확장성이 높다. 액션에 따른 모든 변경을 추적 가능하다. 
        
- Redux Toolkit

    - redux-toolkit과 redux의 차이
        
        
        | 분류 | redux | redux toolkit |
        | --- | --- | --- |
        | 코드량 | 많다 | 적다 |
        | immutable 추가 | 업데이트 미지원 | 업데이트 지원 |
        | createSlice 함수 추가 | 상태, 액션, 리듀서를 개별적으로 작성` | createSlice 함수로 상태, 액션, 리듀서 한 번에 생성 |
        | configureStore 함수 추가 | 스토어 생성 코드를 따로 작성 | configureStore 함수로 스토어 생성 |
        | 기본적인 미들웨어 | 미포함 | 몇 가지 포함 |
    - redux-toolkit 사용법 (자세하게)
        - Provider
            
            Redux toolkit를 사용하기 위해서 루트 컴포넌트를 provider로 감싸야 한다. 
            
            ```jsx
            //index.tsx
            
            import ReactDOM from "react-dom/client";
            import App from "./App";
            import { store } from "./app/store";
            import { Provider } from "react-redux";
            
            const root = ReactDOM.createRoot(
              document.getElementById("root") as HTMLElement
            );
            root.render(
              <Provider store={store}>
                <App />
              </Provider>
            );
            ```
            
        - configureStore
            
            Redux store를 구성하는 메서드로 리듀서, 미들웨어를 설정하고 store를 반환한다. 
            
        - createSlice
            
            리듀서를 작성하는 유틸리티 메서드로, 초기 상태 및 리듀서 함수를 정의하고 액션 생성 함수를 자동으로 생성한다. 
            
        - useSelector
            
            Redux store에서 store를 가져오는 hook이다. 
            
        - useDispatch
            
            Redux store에서 액션을 dispatch하는 hook이다. 컴포넌트에서 redux store의 state를 변경할 수 있다. 
            
        - 기타 사용 방법을 상세하게 정리해 보세요
            
            createAsyncThunk: 비동기 작업을 수행하는 action creator를 생성하는 유틸리티 메서드
            
            createEntityAdapter: 비정규화된 엔티티 데이터를 쉽게 관리할 수 있는 메서드
            
- Zustand
    
    작고 빠르며 확장 가능한 React 프로젝트에서 사용하는 상태 관리 라이브러리다. 상태를 관리하기 위해 상태 컨테이너를 제공하며, 이 상태 컨테이너는 React 컴포넌트 트리 내에서 사용될 수 있다. 이러한 상태 컨테이너는 useState와 useReducer를 사용하여 상태를 관리하지만, 더 간단한 API를 제공하여 상태를 업데이트하고 구독하는 방법을 단순화한다.