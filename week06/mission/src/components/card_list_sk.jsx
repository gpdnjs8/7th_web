import Card_skeleton from "./card_skeleton";

const Card_list_sk = () => {
    return(
        new Array(20).fill(0).map(() => <Card_skeleton/>)
    )
}

export default Card_list_sk;