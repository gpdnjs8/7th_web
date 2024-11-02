- Tanstack-Query 🍠
    - Tanstack-Query 초기 세팅 방법
        1. install
            
            ```jsx
            $ npm i @tanstack/react-query
            # or
            $ yarn add @tanstack/react-query
            ```
            
        2. provider
            
            ```jsx
            import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
            
            const queryClient = new QueryClient()
            
            function App() {
              return (
                // Provide the client to your App
                <QueryClientProvider client={queryClient}>
                  <Todos />
                </QueryClientProvider>
              )
            }
            ```
            
        3. useQueryClient
            
            ```jsx
            import {useQueryClient} from '@tanstack/react-query'
            
            function Todos() {
              // Access the client
              const queryClient = useQueryClient()
            ```
            
    - Query-DevTools?
        1. 설치
            
            ```jsx
            yarn add @tanstack/react-query-devtools
            ```
            
        2. 상위 파일에서 import(App.js)
            
            ```jsx
            import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
            ```
            
        3. 실행
            
            ```jsx
            import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
            
            function App() {
              return (
                <QueryClientProvider client={queryClient}>
                  {/* 가장 하위에 해당 코드 추가 */}
                  <ReactQueryDevtools initialIsOpen={true} />
                </QueryClientProvider>
              )
            ```
            
    - useQuery
        
        ```jsx
        import { useQuery } from "react-query";
        
        // 주로 사용되는 3가지 return 값
        const { data, isLoading, error } = useQuery(queryKey, queryFn, options)
        ```
        
    - useInfiniteQuery
        
        파라미터 값만 변경하여 동일한 useQuery를 무한정 호출할 때 사용된다. 무한스크롤이 가능하게 한다. 
        
        ```jsx
        const {
          isFetching,
          fetchNextPage,
          data,
          refetch
        } = useInfinteQuery(
          queryKey,
          queryFn: ({ pageParam = 1 }) => fetchPage(pageParam),
          {
            getNextPageParam: (lastPage, allPages) => lastPage.nextCursor
          }
        )
        ```
        
    - queryKey
        
        ```jsx
        // 문자열
        useQuery('todos', ...)
        // 배열
        useQuery(['todos'], ...)
        ```
        
        QueryKey를 기반으로 데이터 캐싱을 관리한다. 문자열 또는 배열로 지정할 수 있다. 
        
        ```jsx
        const { data, isLoading, error } = useQuery(['todos', id], () => axios.get(`http://.../${id}`));
        ```
        
        쿼리가 변수에 의존하는 경우에는 QueryKey에도 해당 변수를 추가해야 한다. 
        
- Pagination 🍠
    - Pagination은 무엇인가요?
        
        검색 결과를 가져올 때 데이터를 쪼개 번호를 매겨 일부만 가져오는 기법이다. 보여줄 데이터는 많으나, 한 번에 다 보여줄 수 없을 때 사용할 수 있는 기능이다. 
        
    - Pagination을 어떠한 방식으로 구현할 수 있을까요?
        
        ```jsx
        export default class Pagination {
        	constructor(data, itemsPerPage) {
        		this.data = data;
        		this.itemsPerPage = itemsPerPage;
        		this.totalPages = Math.ceil(this.data.length / this.itemsPerPage);
        		this.currentPage = 1;
        		this.queryString = new URLSearchParams(window.location.search);
        		if (this.queryString.has('page')) {
        			this.currentPage = parseInt(this.queryString.get('page'));
        		}
        	}
        
        	createPagination() {
        		const paginationContainer = document.createElement('div');
        		paginationContainer.classList.add('pagination');
        		let startPage = 1;
        		if (this.currentPage > 5) {
        			startPage = this.currentPage - 5;
        		}
        		let endPage = startPage + 9;
        		if (endPage > this.totalPages) {
        			endPage = this.totalPages;
        			startPage = this.totalPages - 9;
        		}
        		if (startPage < 1) {
        			startPage = 1;
        		}
        
        		const goFirstButton = document.createElement('button');
        		goFirstButton.innerText = '<<';
        		goFirstButton.classList.add('page-btn');
        		goFirstButton.disabled = this.currentPage === 1;
        		goFirstButton.addEventListener('click', () => {
        			let url = new URL(window.location.href);
        			url.searchParams.set('page', 1);
        			window.location.href = url.toString();
        		});
        		paginationContainer.appendChild(goFirstButton);
        
        		for (let i = startPage; i <= endPage; i++) {
        			const paginationButton = document.createElement('button');
        			paginationButton.innerText = i;
        			paginationButton.classList.add('page-btn');
        			paginationButton.addEventListener('click', () => {
        				let url = new URL(window.location.href);
        				let pageValue = i;
        				let pageParam = 'page';
        				if (!url.searchParams.has(pageParam)) {
        					url.searchParams.append(pageParam, pageValue);
        				} else {
        					url.searchParams.set(pageParam, pageValue);
        				}
        				window.location.href = url.toString();
        			});
        			if (i === this.currentPage) {
        				paginationButton.disabled = true;
        			}
        			paginationContainer.appendChild(paginationButton);
        		}
        
        		const goLastButton = document.createElement('button');
        		goLastButton.innerText = '>>';
        		goLastButton.classList.add('page-btn');
        		goLastButton.disabled = this.currentPage === this.totalPages;
        		goLastButton.addEventListener('click', () => {
        			let url = new URL(window.location.href);
        			url.searchParams.set('page', this.totalPages);
        			window.location.href = url.toString();
        		});
        		paginationContainer.appendChild(goLastButton);
        
        		return paginationContainer;
        	}
        }
        ```
        
        ```jsx
        import Pagination from '/pagination.js';
        
        let dataArray = [a,b,c,d,e,f,g,h....]; // 데이터
        let itemsPerPage = 10;
        let paging = new Pagination(dataArray, itemsPerPage);
        let pagination = paging.createPagination();
        document.querySelector('.box').append(pagination);
        ```
        
    - Pagination의 장점과 단점에 대해 정리해주세요.
        
        장점: 쿼리가 복잡하지 않다. 다양한 정렬 방식을 쉽게 구현 가능하다.
        
        단점: 페이지의 뒤로 갈수록 쿼리의 속도가 매우 느려진다. 데이터의 잦은 추가와 삭제가 이루어졌을 때 누락과 중복이 발생할 수 있다. 
        
- Infinite Scroll 🍠
    - Intersection Observer는 무엇인가요?
        
        브라우저 뷰포트(Viewport)와 원하는 요소(Element)의 교차점을 관찰하며, 요소가 뷰포트에 포함되는지 아닌지 구별하는 기능을 제공한다.
        
    - Infinite Scroll은 무엇일까요?
        
        Scroll End지점까지 가면 다시 추가정보 fetch를 계속해나가는 방식이다. 정보를 일부분만 가져와서 보여주고 이후 결과는 사용자의 움직임에 Interaction하게 반응해서 추가로 정보를 가져온다. 
        
    - Inifinite Scroll은 어떻게 구현할까요?
        
        scroll event 또는 IntersectionObserver 방법으로 구현한다. 
        
        scroll event를 이용해 useInfiniteScroll Custion Hook 생성
        
        ```jsx
        import { useState, useEffect } from "react";
        
        export default function useInfiniteScroll(fetchCallback) {
            const [isFetching, setIsFetching] = useState(false);
            
            const handleScroll = () => {
                if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
                    setIsFetching(true);
                }
            }
            
            useEffect(() => {
                window.addEventListener('scroll', handleScrollThrottle);
                
                return () => {
                    window.removeEventListener('scroll', handleScrollThrottle);
                };
            }, []);
            
            useEffect(() => {
                if (!isFetching) {
                	return;   
                }
                fetchCallback();
            }, [isFetching]);
            
            return [isFetching, setIsFetching];
        }
        ```
        
        ```jsx
        const [isFetching, setIsFetching] = useInfiniteScroll(updateFunctionOnScroll);
        
        async function updateFunctionOnScroll() {
          try {
            const result = await fetchFunction();
            setState(result);
          } catch(error) {
            setErrorState(error.message);
          } finally {
            setIsFetching(false);
          }
        }
        
        useEffect(() => {
          updateFunctionOnScroll();
        }, []);
        ```
        
        IntersectionObserver를 이용해 useInfiniteScroll Custion Hook 생성
        
        ```jsx
        import { useState, useEffect } from "react";
        
        const defaultOptions = {
          root: null,
          rootMargin: '1px',
          threshold: '0.1',
        }
        
        export default function useInfiniteScroll(fetchCallback, targetElement, options = defaultOptions) {
          const [isFetching, setIsFetching] = useState(false);
          
          const intersectionCallbackFunc = entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setIsFetching(true);
              }
            });
            setIsFetching(false);
          }
        
          useEffect(() => {
            let observer;
        
            if (targetElement) {
              observer = new IntersectionObserver(intersectionCallbackFunc, options);
              observer.observe(targetElement);
            }
        
            return () => observer?.disconnect(targetElement);
        
          }, []);
        
          useEffect(() => {
            if (!isFetching) {
              return;   
            }
            fetchCallback();
          }, [isFetching]);
        
          return [isFetching, setIsFetching];
        }
        ```
        
    - Infinite Scroll의 장점과 단점에 대해 정리해주세요.
        
        장점: 모바일 기기에 적합하다. 사용자의 추가적인 액션이 필요하지 않다.
        
        단점: 페이지 성능이 느려진다. 특정 위치로 이동하기 어렵다.