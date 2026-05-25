

import React, { useState } from 'react'

const Food_Search = () => {

    const PRODUCTS=[
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]


    function  ProductCategory({category}) {

        return(
   <tr>
    <th colSpan={2}>{category}
            </th>
        </tr> 
        )
     
    }
 
    function  ProductRow({products}) {
        const name=products.stocked?products.name:
        <span style={{color:"red"}}>{products.name}</span>

        return(
        <tr>
            <td>{name}</td>
            <td>{products.price}</td>
        </tr>
        )
    }


    function  ProductTable({products, filtered , getOnlyStoked}) {
        let rows=[];
        let prevRow=null;

      
        products.forEach((product)=>{
          if(filtered.length===0){
             if(product.category!=prevRow){
            rows.push(<ProductCategory category={product.category}
            key={product.category}/>)
            
        }
        if(product.stocked&&getOnlyStoked){
            rows.push(
            <ProductRow products={product}
            key={product.name}/>
        )
        }
        else if(!getOnlyStoked){
             rows.push(
            <ProductRow products={product}
            key={product.name}/>
        )
        }
    }
    else{
        if(product.name.toLowerCase().indexOf(filtered.toLowerCase())===-1){
            return;
        }
             if(product.category!=prevRow){
            rows.push(<ProductCategory category={product.category}
            key={product.category}/>)
            
        }
        if(product.stocked&&getOnlyStoked){
            rows.push(
            <ProductRow products={product}
            key={product.name}/>
        )
        }
        else if(!getOnlyStoked){
             rows.push(
            <ProductRow products={product}
            key={product.name}/>
        )
        }
    }
        prevRow=product.category;

        })
       

        return(
            <>
            <table>
                <thead>
                     <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
               
                <tbody>
                    {rows}
                </tbody>
            </table>
            </>
        )
    }
    function  SearchBar({handleclick,handlefilter}) {
        return(
            <>
            <input type="text" placeholder='Search...' onChange={(e)=>handlefilter(e.target.value)}/>
            <label ><input type="checkbox" onClick={handleclick}/>Show only Products in stock</label>
            </>
        )
    }
  
  function  FilterableProducts({products}) {
    const [filtered,setFiltered]=useState("");
    const [getOnlyStoked,setGetOnlyStocked]=useState(false);

    function handlefilter(newfilter){
        setFiltered(newfilter);
    }
    function handleclick(){
        setGetOnlyStocked(!getOnlyStoked);
    }

    function login(){  
    }
    return(
        <>
        <SearchBar handleclick={handleclick} handlefilter={handlefilter}/>
        <ProductTable products={products} filtered={filtered} getOnlyStoked={getOnlyStoked}/>
        </>
    )
  }


  return (
    <div>
        <FilterableProducts products={PRODUCTS}/>
    </div>
  )
}
export default Food_Search