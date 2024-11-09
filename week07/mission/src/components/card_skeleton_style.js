import styled, {keyframes} from 'styled-components';

const skeleton = keyframes`
    0%{
        opacity: 1;
    }
    30%{
        opacity: 0.2;
    }
    50%{
        opacity: 0.4;
    }
    80%{
        opacity: 0.8;
    }
    100%{
        opacity: 1;
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: calc((100% / 9) - 20px);
    margin: 10px;
    aspect-ratio: 2 / 3;
`

const CardMain = styled.div`
    width: 100%;
    height: 210px;
    background: rgb(230, 230, 230);
    border-radius: 7px;
    overflow: hidden;
    animation: ${skeleton} 3s 1s infinite linear alternate;
    position: relative;
`

const TextWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-top: 5px;
    left: 0;
    padding: 5px 0;
    gap: 2px;
`

const TitleBox = styled.div`
    background: rgb(230, 230, 230);
    height: 25px;
    border-radius: 5px;
    margin-bottom: 5px;
    animation: ${skeleton} 3s 1s infinite linear alternate;
`

const DescriptionBox = styled.div`;
    background: rgb(230, 230, 230);
    height: 25px;
    border-radius: 5px;
    animation: ${skeleton} 3s 1s infinite linear alternate;
`

export {Container, CardMain, TextWrapper, TitleBox, DescriptionBox}