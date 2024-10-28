- useRef 🍠
    
    리액트에 의해 관리되는 특정 DOM 요소에 접근하는 방법이다. 리액트가 제공하지 않는 브라우저 API를 사용해야 할 때 DOM 요소에 직접 접근해야 한다. 
    
    ```jsx
    import { useRef } from 'react';
    
    const myRef = useRef(null);
    
    <div ref={myRef}/> // DOM node에 myRef를 ref 속성으로 전달
    ```
    
- input의 주요 프로퍼티 🍠
    - 아래 내용 이외에, 자주 사용하는 프로퍼티가 있으면 추가로 더 정리해주세요! 🍠
    
    ### 1. `type`
    
    - **설명**: 입력 필드의 종류를 설정합니다.
    - **값 예시**: `"text"`, `"password"`, `"email"`, `"number"`, `"checkbox"`, `"radio"` 등
    - **예시**: `<input type="text" />`
    
    ### 2. `value`
    
    - **설명**: 입력 필드의 값을 설정하고 제어할 때 사용됩니다. **Controlled Component**에서 자주 사용됩니다.
    - **값 예시**: 문자열 또는 숫자
    - **예시**: `<input type="text" value={value} />`
    
    ### 3. `defaultValue`
    
    - **설명**: 초기값을 설정하는 데 사용됩니다.
    - **값 예시**: 문자열 또는 숫자
    - **예시**: `<input type="text" defaultValue="초기값" />`
    
    ### 4. `onChange`
    
    - **설명**: 사용자가 입력 필드에 값을 입력하거나 변경할 때 호출되는 이벤트 핸들러입니다.
    - **값 예시**: 함수
    - **예시**: `<input type="text" onChange={(e) => setValue(e.target.value)} />`
    
    ### 5. `placeholder`
    
    - **설명**: 입력 필드가 비어 있을 때 표시되는 힌트 텍스트입니다.
    - **값 예시**: 문자열
    - **예시**: `<input type="text" placeholder="여기에 입력하세요" />`
    
    ### 6. `checked`
    
    - **설명**: 체크박스나 라디오 버튼이 선택되었는지 여부를 제어합니다.
    - **값 예시**: `true` 또는 `false`
    - **예시**: `<input type="checkbox" checked={isChecked} />`
    
    ### 7. `defaultChecked`
    
    - **설명**: 체크박스나 라디오 버튼의 초기 상태를 설정합니다.
    - **값 예시**: `true` 또는 `false`
    - **예시**: `<input type="checkbox" defaultChecked />`
    
    ### 8. `disabled`
    
    - **설명**: 입력 필드를 비활성화하여 사용자 입력을 막습니다.
    - **값 예시**: `true` 또는 `false`
    - **예시**: `<input type="text" disabled />`
    
    ### 9. `readOnly`
    
    - **설명**: 입력 필드의 값을 읽기 전용으로 설정합니다. 사용자는 값을 변경할 수 없습니다.
    - **값 예시**: `true` 또는 `false`
    - **예시**: `<input type="text" readOnly />`
    
    ### 10. `name`
    
    - **설명**: 폼 데이터를 제출할 때 서버로 전송되는 데이터의 이름을 지정합니다.
    - **값 예시**: 문자열
    - **예시**: `<input type="text" name="username" />`
    
    ### 11. `maxLength`
    
    - **설명**: 입력할 수 있는 최대 글자 수를 지정합니다.
    - **값 예시**: 숫자
    - **예시**: `<input type="text" maxLength={10} />`
    
    ### 12. `min` / `max`
    
    - **설명**: 숫자 또는 날짜 입력에서 사용할 수 있는 최소/최대 값을 지정합니다.
    - **값 예시**: 숫자 또는 날짜
    - **예시**: `<input type="number" min={1} max={10} />`
    
    ### 13. `autoFocus`
    
    - **설명**: 페이지가 로드될 때 자동으로 입력 필드에 포커스를 줍니다.
    - **값 예시**: `true` 또는 `false`
    - **예시**: `<input type="text" autoFocus />`
    
    ### 14. `required`
    
    - **설명**: 입력 필드를 필수 입력으로 설정합니다. 폼을 제출할 때 이 필드가 비어 있으면 제출이 거부됩니다.
    - **값 예시**: `true` 또는 `false`
    - **예시**: `<input type="text" required />`
    
    ### 15. `autocomplete`
    
    - **설명**: 사용자가 양식을 기입하는 동안 브라우저가 예전에 입력한 값에 기반한 자동 완성 기능을 제공할 것인지 여부를 정의한다.
    - **값 예시**: `on` 또는 `off`
    - **예시**: `<input type="text" name="username" autocomplete="on" />`
    
    ### 16. `size`
    
    - **설명**: input 요소의 너비를 문자수 단위로 명시한다. 기본값 20
    - **예시**: `<input size="숫자" />`
    
    ### 17. `pattern`
    
    - **설명**: 폼 제출 시 input 요소의 값을 검사할 때 사용될 정규 표현식을 명시한다.
    - **예시**: `<input pattern="정규 표현식" />`