import "./Scientist.css";
const user={
    name:"Hedy Lamarr",
    imgurl:"https://react.dev/images/docs/scientists/yXOvdOSs.jpg",
    imgsize:90,
};

export default function Scientist(){
    return(<div className="container">
    <h1>{user.name}</h1>
    <img src={user.imgurl} alt="photo" className="ima"
    style={{height:user.imgsize,width:user.imgsize}}
    />
    </div>)
}