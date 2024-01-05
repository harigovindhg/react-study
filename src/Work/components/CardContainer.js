import restaurantList from '../utils/restaurantList.json';
import Card from './Card';

const CardContainer = () => {
    return (
        <div className='rest-card-container'>
            {restaurantList.map((item) => (
                <Card {...item} key={item.info.id} id={`userCard_${item.info.id}`} />
            ))}
        </div>
    )
}

export default CardContainer;