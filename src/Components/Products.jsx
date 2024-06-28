
import { useEffect, useState } from "react"
import ProductCart from "./ProductCart"
import Topbar from "./Topbar"

const Products = () => {
    const [apiRes,setApiRes] = useState([])
    const [list, setList] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategory,setSelectedCategory] = useState('')
    const [searchInput, setSearchInput] = useState('');

console.log(selectedCategory)

    useEffect(() => {
        fetch('https://mocki.io/v1/72f8d1e9-055c-4e6b-bd6a-630de0dad7f4')
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                setApiRes(json);
                setList(json)
                const c = json.map((obj) => obj.category)
                setCategories([...new Set(c)])
            })
            .catch()
    }, [])

    useEffect(()=>{
        if(selectedCategory==='')
        {
            setList(apiRes)
        }
        else{
            const res = apiRes.filter(obj => obj.category === selectedCategory)
            setList(res)
        }
     
    },[selectedCategory])

    const handleSearch = () => {
        const filteredList = apiRes.filter(product =>
            product.title.toLowerCase().includes(searchInput.toLowerCase())
        );
        setList(filteredList);
    }

console.log(categories)
    return (
        <>
            
            <Topbar categories={categories} setSelectedCategory={setSelectedCategory}/>
            <div className="search-title">
               <input type="text" placeholder="Product Name" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
               <button onClick={handleSearch}>Search</button>
            </div>
            <div className="product-list">     
                {list.map((product) =>
                    <ProductCart key={product.id} product={product} />)}
            </div>
                
           
        </>
    )
}
export default Products