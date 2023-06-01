import '../assets/css/ShopCard.css'
import '../assets/css/Shop.css'

const ShopCard = ({card}) => {
	return (
		<div className='card'>
			<div className='card-header'>
				<span className='name'>{card.name}</span>
				<span className='color'>{card.color}</span>
			</div>
			<div className='card-body'>
				<img src={card.img} alt={card.name} width='300px'/>
			</div>
			<div className='card-footer'>
				<span className='price'>${card.price}</span>
				<button className='add-to-cart'>Добавить в корзину</button>
			</div>
		</div>
	)
}

export default ShopCard
