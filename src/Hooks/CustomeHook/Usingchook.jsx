import useFetch from "./useFetch"


export default function Usingchook(){

    const data=useFetch("https://jsonplaceholder.typicode.com/users");

    const res=data.map((da)=>{
       return <p key={da.id}>{da.id}{da.name}</p>
    })
    return(
        <>
        <div>
            {res}
        </div>
        </>
    )
}