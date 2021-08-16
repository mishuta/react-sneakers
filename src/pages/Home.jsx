import Card from '../components/Card';

function Home({items,cartItems,
  searchValue,
  setSearchValue,
  searchChange,
  addToCart,
  onAddToFavorite,
  isLoading}) { 



  const renderItems = () => {
    const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));
   
    return (isLoading ? [...Array(8)] : filteredItems).map((item, i) => (
      <Card
        key={i}                
        onAddToCart={addToCart}
        onClickFavorite={onAddToFavorite}        
        loading={isLoading}      
        {...item}
      />
    ))
  }  
  return (
    <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Search result for: "${searchValue}"` : 'All sneakers'}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue('')}
                className="clear cu-p"
                src="/img/btn-remove.svg"
                alt="Clear search"
              />
            )}
            <input
              onChange={searchChange}
              value={searchValue}
              placeholder="Search..."
              type="text"
            />
          </div>
        </div>        
        <div className="d-flex flex-wrap">
          {renderItems()}
        </div>
      </div>
  );
}

export default Home;