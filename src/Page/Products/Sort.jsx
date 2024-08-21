import { useState } from "react";
import { IoLogOutSharp } from "react-icons/io5";

function Sort({ query, setQuery }) {
  const [showFilters, setShowFilters] = useState(false)

  // update query onChange sort
  const handleChangeSort = e => {
    setQuery( {...query, sort: e.target.value} )
  }

  // update query onSubmit new price
  const handlePriceRange = e => {
    e.preventDefault()

    const priceMin = e.target.priceMin.value
    const priceMax = e.target.priceMax.value

    setQuery( {...query, priceMin, priceMax} )
  }
  
  // update query onChange brand
  const handleChangeBrand = e => {
    const {name, checked} = e.target    

    setQuery(prevQuery => {
      const {brands} = prevQuery
      let updatedBrands;

      // create or update brands array
      if (checked) {
        updatedBrands = brands ? [...brands, name] : [name]
      } else {
        updatedBrands = brands ? brands.filter(brand => brand !== name) : []
      }

      return {...prevQuery, brands: updatedBrands}
    })
  }

  // update query onChange category
  const handleChangeCategory = e => {
    setQuery( {...query, category: e.target.value} )
  }
  

  return (  
    <aside>
      <button onClick={() => setShowFilters(!showFilters)} 
      className="flex items-center justify-center gap-1 lg:hidden w-full px-3 py-2 
      mb-2 rounded-md text-white bg-primary hover:opacity-90">Filter & Sort <IoLogOutSharp /> </button>

      <div className={`${showFilters ? '' : 'hidden'} lg:block`}>
        {/* bybrand name */}
        <div className="bg-gray-100 shadow p-3 rounded mb-3">
          <h3 className="text-lg font-semibold mb-1.5 text-primary">Select Brand Name</h3>
          <label className="flex gap-2 mb-1">
            <input type="checkbox" name="samsung" checked={query.brands?.includes('samsung') || false} onChange={handleChangeBrand} />
            <span>Samsung</span>
          </label>
          <label className="flex gap-2 mb-1">
            <input type="checkbox" name="xiaomi" checked={query.brands?.includes('xiaomi') || false} onChange={handleChangeBrand} />
            <span>Xiaomi</span>
          </label>
          <label className="flex gap-2 mb-1">
            <input type="checkbox" name="apple" checked={query.brands?.includes('apple') || false} onChange={handleChangeBrand} />
            <span>Apple</span>
          </label>
          <label className="flex gap-2 mb-1">
            <input type="checkbox" name="oppo" checked={query.brands?.includes('oppo') || false} onChange={handleChangeBrand} />
            <span>Oppo</span>
          </label>
          <label className="flex gap-2 mb-1">
            <input type="checkbox" name="sony" checked={query.brands?.includes('sony') || false} onChange={handleChangeBrand} />
            <span>Sony</span>
          </label>
          <label className="flex gap-2 mb-1">
            <input type="checkbox" name="hp" checked={query.brands?.includes('hp') || false} onChange={handleChangeBrand} />
            <span>Hp</span>
          </label>
        </div>

        {/* by category name */}
        <div className="bg-gray-100 shadow p-3 rounded mb-3">
          <h3 className="text-lg font-semibold mb-1.5 text-primary">Select Category Name</h3>
          <label className="flex gap-2 mb-1">
            <input type="radio" name="category" value="laptop" checked={query.category==="laptop"} onChange={handleChangeCategory} />
            <span>Laptop</span>
          </label>
          <label className="flex gap-2 mb-1">
            <input type="radio" name="category" value="phone" checked={query.category==="phone"} onChange={handleChangeCategory} />
            <span>Phone</span>
          </label>
          <label className="flex gap-2 mb-1">
            <input type="radio" name="category" value="airPods" checked={query.category==="airPods"} onChange={handleChangeCategory} />
            <span>AirPods</span>
          </label>
          <label className="flex gap-2 mb-1">
            <input type="radio" name="category" value="headphone" checked={query.category==="headphone"} onChange={handleChangeCategory} />
            <span>Headphone</span>
          </label>
          <label className="flex gap-2 mb-1">
            <input type="radio" name="category" value="gadget" checked={query.category==="gadget"} onChange={handleChangeCategory} />
            <span>Gadget</span>
          </label>
          <label className="flex gap-2 mb-1">
            <input type="radio" name="category" value="monitor" checked={query.category==="monitor"} onChange={handleChangeCategory} />
            <span>Monitor</span>
          </label>
        </div>
    {/* bysort */}
    <div className="bg-gray-100 shadow p-3 rounded mb-3">
          <h3 className="text-lg font-semibold mb-1.5 text-primary">Sort By Price</h3>
          <label className="flex gap-2 mb-1">
            <input type="radio" name="sort" value="price-asc" checked={query.sort==="price-asc"} onChange={handleChangeSort} />
            <span>Low to high</span>
          </label>
          <label className="flex gap-2 mb-1">
            <input type="radio" name="sort" value="price-desc" checked={query.sort==="price-desc"} onChange={handleChangeSort} />
            <span>high to low</span>
          </label>
          <label className="flex gap-2 mb-1">
            <input type="radio" name="sort" value="date" checked={query.sort==="date"} onChange={handleChangeSort} />
            <span>Newest Arival</span>
          </label>
        </div>
        {/* byprice range */}
        <div className="bg-gray-100 shadow p-3 rounded mb-3">
          <h3 className="text-lg font-semibold mb-1.5 text-primary">Select Price range</h3>
          <form onSubmit={handlePriceRange} className="flex gap-2">
            <div>
              <input type="number" name="priceMin" className="w-full px-2 py-1 border rounded" placeholder="min" /> 
            </div>
            <span> - </span>
            <div>
              <input type="number" name="priceMax" className="w-full px-2 py-1 border rounded" placeholder="max" />
            </div>
            <button className="inline-block px-3 py-1 rounded-md text-white bg-primary hover:opacity-90">
            <IoLogOutSharp /> </button>
          </form>
        </div>
      </div>
    </aside>
  );
}

export default Sort