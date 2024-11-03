import Card_skeleton from "./card_skeleton";

const Card_list_sk = () => {
    return (
        <>
            {new Array(20).fill(0).map((_, index) => (
                <Card_skeleton key={index} /> // 고유한 key prop 추가
            ))}
        </>
    );
}

export default Card_list_sk;