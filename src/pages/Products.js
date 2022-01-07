import {useNavigate} from "react-router-dom";
import {useState} from "react";

const Products = ({getPosts, setId}) => {
const navigation = useNavigate()
    const [getId2, setId2] = useState('')
    function nav (x) {
        setId2(x)
        setId(x)
    navigation(`/product/byid`)
    }
    return (
        <div className="container2">
            {getPosts.map((x, index) => {
                return (
                    <div onClick={() => nav(x.id)} className="postCard" key={index}>
                     <img src={x.image} alt=""/>
                     <h4>{x.title}</h4>
                     <h4>EUR: {x.price}</h4>
                    </div>
                )})}
        </div>
    );
};

export default Products;
