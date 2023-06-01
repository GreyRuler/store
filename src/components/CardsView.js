import ShopCard from './ShopCard';
import '../assets/css/CardsView.css'

const CardsView = ({cards}) => {
	return (
		<ul className='cards'>
			{cards.map((card) => <li><ShopCard card={card}/></li>)}
		</ul>
	)
}

export default CardsView
