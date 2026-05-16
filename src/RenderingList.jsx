
export default function RenderingList(){

const list=[
    {id:1,name:"apple",cal:60},
    {id:2,name:"banana",cal:300},
    {id:3,name:"grapes",cal:20},
    {id:4,name:"papaya",cal:500}
]

const li=list.map((prod)=>{
    return <li key={prod.id}>{prod.name}</li>
});
    return (
        <>
        <ul>{li}</ul>
        </>
    )
}