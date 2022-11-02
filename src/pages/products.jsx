import { Categories } from '../components/categories/categories'
import { ProductItems } from '../components/product-items/product-items'
import { Sort } from '../components/sort/sort'
import { data } from '../t.js'

export const Products = () => {
	const URL = 'https://635fd2b7ca0fe3c21aa582a0.mockapi.io/products'
	return (
		<>
			<div className='content__top'>
				<Categories />
				<Sort />
			</div>
			<h2
				className='content__title'
				style={{ marginBottom: '50px', marginTop: '50px' }}
			>
				Choose
			</h2>
			<div className='content__items'>
				{data.map(obj => (
					<ProductItems {...obj} key={obj.id} />
				))}
			</div>
		</>
	)
}
