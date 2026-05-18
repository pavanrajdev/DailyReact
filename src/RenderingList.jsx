
export default function RenderingList(){

const list=[
    {id:1,name:"apple",isFruit:true,cal:60},
    {id:2,name:"banana",isFruit:true,cal:300},
    {id:3,name:"grapes",isFruit:true,cal:20},
    {id:4,name:"papaya",isFruit:false,cal:500}
]

const li=list.map((item)=>{
    return <li key={item.id} 
    style={{listStyle:"none",color:item.isFruit?'blue':'red'}}>
        {item.name} 
        {item.cal}
        </li>
})
    return (
        <>
        <ul>{li}</ul>
        </>
    )
}