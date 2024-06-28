const Topbar = (props) => {
    console.log("topbar",props.categories)

    const handleCategorySelection = (e) =>{
      props.setSelectedCategory(e.target.value)
    }
    

    return(
     <>
       <div className="topbar">
            <select onChange={handleCategorySelection}>
              <option value="">Select</option>
               {props.categories.map((c) => <option value={c} key={c}>{c}</option>)}
            </select>  
            
            
       </div>
     </>
    )
}

export default Topbar