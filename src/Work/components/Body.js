import CardContainer from './CardContainer';

const SearchBar = () => {
    return (
        <div className='search'>
            <input type='search' placeholder='Search for your favourite dishes' />
        </div>
    )
}


const Body = () => {
    return (
        <div className="body">
            <SearchBar />
            <CardContainer />
        </div>
    )
}

export default Body;