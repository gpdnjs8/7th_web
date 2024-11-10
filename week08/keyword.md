### 키워드 정리 🍠

- useMutation 🍠
    - useMutation이 무엇인가요?
        
        ```jsx
        const {data, isLoading, mutate} = useMutation(mutationFn, options);
        ```
        
        원격 데이터 소스로 변형 요청(생성, 업데이트, 삭제)을 보내고 결과 데이터 및 상태 변경을 관리하는 데 사용된다. queryKey 값이 존재하지 않는다. 
        
    - onMutate
        
        변이 작업이 시작되기 전에 실행된다. 미리 렌더링 하고자 할 때 유용하다. 
        
    - onSuccess
        
        변이 작업이 성공했을 때 실행된다.
        
    - onError
        
        변이 작업이 실패했을 때 실행된다. 에러를 전달한다. 
        
    - onSettled
        
        변이 작업의 성공, 실패 여부와 상관없이 항상 실행된다. 후속 작업을 처리하는 용도이다. 
        
    - invalidateQueries
        
        특정 쿼리를 무효화해서 해당 쿼리가 다시 데이터를 가져오도록 하는 트리거 함수. 변이 작업 후에 사용하여 서버의 최신 데이터를 가져온다. 
        
- 낙관적 업데이트 (Optimistic Update) 🍠
    - 낙관적 업데이트란?
        
        서버로 보낸 요청이 정상적일 것이라고 예상하고 클라이언트의 요청에 대한 응답이 오기 전에 클라이언트의 데이터를 미리 변경시키는 작업이다. 
        
    - 낙관적 업데이트를 `useMutation`을 활용하여 구현할 수 있는 방법?
        
        `useMuation` hook에서 `onSuccess`가 아니라 `onMutate` 메서드와 `onError` 메서드를 조합하여 구현할 수 있다. 
        
          
        
        ```jsx
        useMutation({
          mutationFn: updateTodo,
          
          onMutate: async (newTodo) => {
            await queryClient.cancelQueries({ queryKey: ['todos', newTodo.id] })
            const previousTodo = queryClient.getQueryData(['todos', newTodo.id])
            queryClient.setQueryData(['todos', newTodo.id], newTodo)
        
            return { previousTodo, newTodo }
          },
          onError: (err, newTodo, context) => {
            queryClient.setQueryData(
              ['todos', context.newTodo.id],
              context.previousTodo,
            )
          },
          onSettled: (newTodo) => {
            queryClient.invalidateQueries({ queryKey: ['todos', newTodo.id] })
          },
        })
        ```
        