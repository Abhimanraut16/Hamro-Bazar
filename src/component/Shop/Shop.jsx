import React, { useState } from 'react'
import Pageheader from '../PageHeader/Pageheader'

const showResults = "Showing 01 - 12 of results"
// import { useSearchParams } from 'react-router-dom'
import Data from "../products.json"
import ProductCards from './ProductCards';
import Pagination from './Pagination';
import Search from './Search';
import ShopCategory from './ShopCategory';

function Shop() {
  const [GridList, SetGridList] = useState(true);
  const [products, Setproducts] = useState(Data);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indeOfLastProduct = currentPage * productsPerPage;
  const indeOfFirstProduct = indeOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indeOfFirstProduct, indeOfLastProduct);
  

  const paginate = (pageNumer) => {
    setCurrentPage(pageNumer)
  };


  const [selectedCategory, setSelectedCategory] = useState("All");
  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === currentPage;
    })
    selectedCategory();
    Setproducts(newItem);
  }


  return (
    <div>
      <Pageheader title="Our shop page" curPage="Shop" />
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="shop-title d-flex flex-warp justify-content-between">
                  <p>{showResults}</p>
                  <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
                    <a className='grid' onClick={() => SetGridList(!GridList)}>
                      <i class="icofont-listine-dots"></i>
                    </a>

                    <a className='list' onClick={() => SetGridList(!GridList)}>
                      <i class="icofont-ghost"></i>
                    </a>

                  </div>

                </div>
                <div>
                  <ProductCards GridList={GridList} products={currentProducts} />
                </div>
                <Pagination productsPerPage={productsPerPage}
                  totalproducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>

            </div>

            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} GridList={GridList} />
                <ShopCategory
                  filterItem={filterItem}
                  setItem={Setproducts}
                  menuItems={menuItems}
                  Setproducts={Setproducts}
                  selectedCategory={selectedCategory}
                  se
                />
              </aside>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Shop