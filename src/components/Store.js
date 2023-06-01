import IconSwitch from './IconSwitch';
import ListView from './ListView';
import CardsView from './CardsView';
import { useState } from 'react';
import '../assets/css/Store.css'

const Store = ({products}) => {
	const [isList, setIsList] = useState(true)
	const onSwitch = () => {
		setIsList(isList => !isList)
	}
	return (
		<div className='store'>
			<IconSwitch icon={isList ? 'view_list' : 'view_module'}
						onSwitch={onSwitch}/>
			{isList ? <ListView items={products}/> : <CardsView cards={products}/>}
		</div>
	)
}

export default Store
