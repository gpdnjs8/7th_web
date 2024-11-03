import * as S from './card_skeleton_style.js'

const Card_skeleton =() => {
    return(
        <S.Container>
            <S.CardMain/>
            <S.TextWrapper>
                <S.TitleBox/>
                <S.DescriptionBox/>
            </S.TextWrapper>
        </S.Container>
    )
}

export default Card_skeleton;