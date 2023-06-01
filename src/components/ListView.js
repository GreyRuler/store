import ShopItem from './ShopItem';
import '../assets/css/ListView.css'

const ListView = ({items}) => {
	return (
		<ul className='list'>
			{items.map((item) => <li><ShopItem item={item}/></li>)}
		</ul>
	)
}

export default ListView
