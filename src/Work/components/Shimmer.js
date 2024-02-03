import restaurantList from '../utils/restaurantList.json';

const Shimmer = () => {
    return (restaurantList.map((item, index) => (<div className='rest-card' key={`shimmer_cardItem_${index}_${item.id}`}>
                    <div className='card-content skeleton'>
                        <div className='rest-details'>
                            <div className='rest-name skeleton'></div>
                            <div className='rest-subdetails skeleton-parent'>
                                <div className='skeleton'></div>
                                <p className='skeleton'></p>
                                <p className='skeleton'></p>
                            </div>
                        </div>
                    </div>
                </div>)))
}

export default Shimmer;