
const AllPosts = ({getArray}) => {
    return (
        <div className='allPostsContainer'>
            {getArray.map((x, index) => <div id={index} key={index} className='card'>
                <h1>{x.title}</h1>
                <img src={x.image} alt=""/>
                <p>{x.text}</p>
            </div>)}
        </div>
    );
};

export default AllPosts;
