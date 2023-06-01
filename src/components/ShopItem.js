import '../assets/css/ShopItem.css'

const ShopItem = ({item}) => {
	return (
		<div className='item'>
			<img src={item.img} alt={item.name} width='100px'/>
			<h4 className='name'>{item.name}</h4>
			<span className='color'>{item.color}</span>
			<span className='price'>${item.price}</span>
			<button className='add-to-cart'>Добавить в корзину</button>
		</div>
	)
}

export default ShopItem
