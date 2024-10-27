### React의 동작 원리
    
React는 User Interface Library이다. 리액트의 핵심적인 특징은 아래와 같다.
    
1. SPA (Single Page Application)
- `SPA`는 페이지 전체가 아닌 필요한 부분만 로딩한다. 즉, 필요한 데이터만 받아와서 부분을 업데이트하는 방식으로 동작한다.
        
- `장점`
        
    더 적은 자원 사용, 빠른 속도, 효율적인 캐싱, 향상된 유저 경험
        
2. User Interface Library 
- `User Interface Library`는 UI를 만들기 위한 기능 라이브러리다. MUI, React Bootstrap, Ant Design 등이 있다.
        
- `장점`
        
    반응형 디자인 지원, 컴포넌트를 기반으로 하여 코드의 유지보수 용이, 커스터마이징 가능 
        
3. Functional Component (함수형 컴포넌트)
- `함수형 컴포넌트`는 hook을 사용하여 라이프사이클 기능과 state 기능을 구현할 수 있다.
        
- `장점`
        
    메모리 관리, 빠른 속도, 가독성 용이
        
4. Virtual DOM (가상 DOM)
- `가상 돔`은 실제 돔에 접근하여 조작하는 대신, 이것을 추상화시킨 자바스크립트 객체를 이용해 사용하는 것이다. 즉, 실제 돔을 모방한 가상의 돔을 구성해 원래 돔과 비교하여 달라진 부분을 리벤더링 하는 방식으로 동작한다. 가상 돔은 변화를 감지하면 재조정 과정을 통하여 실제 돔과 동기화한다.
        
- `장점`
        
    렌더링 일관성 유지, 복잡한 UI 관리 가능, 성능 향상
        
5. 동시성 렌더링
- `동시성 렌더링`은 UI를 더욱 반응적으로 만들기 위한 렌더링 모델이다.
        
- `장점`
        
    대규모 애플리케이션 지원 가능, 반응성 향상

<br/>

### 얕은 복사, 깊은 복사
- 얕은 복사 🍠
    
    `얕은 복사`는 객체의 참조값(주소값)을 복사하는 것이다. 객체를 복사할 때 기존 값과 복사된 값이 같은 참조를 가리킨다. 원본이나 복사본 중 하나를 변경하면 다른 것도 변경된다. 
    
- 깊은 복사 🍠
    
    `깊은 복사`는 객체의 실제 값을 복사하는 것이다. 깊은 복사된 객체는 객체 안에 객체가 있을 경우에도 원본과의 참조가 완전히 끊어져 있다. 원본과 복사본은 서로 영향을 주지 않는다.