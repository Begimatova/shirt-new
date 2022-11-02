import { useEffect, useState } from 'react'
import { Categories } from '../components/categories/categories'
import { ProductItems } from '../components/product-items/product-items'
import { Sort } from '../components/sort/sort'
import { Skeleton } from '../components/product-items/skeleton'

const URL = 'https://635fd285ca0fe3c21aa57c91.mockapi.io/products?category='

export const Products = () => {
	const [loading, setLoading] = useState(true)
	const [items, setItems] = useState([])
	const [activeCategory, setActiveCategory] = useState(0)
	const [activeSort, setActiveSort] = useState(0)

	useEffect(() => {
		setLoading(true)
		fetch((URL + activeCategory) & activeSort)
			.then(arr => arr.json())
			.then(data => {
				setItems(data)
				setLoading(false)
			})
	}, [activeCategory, activeSort])

	return (
		<>
			<div className='content__top'>
				<Categories
					value={activeCategory}
					onChangeCategory={i => setActiveCategory(i)}
				/>
				<Sort sortValue={activeSort} onChangeSort={i => setActiveSort(i)} />
			</div>
			<h2
				className='content__title'
				style={{ marginBottom: '50px', marginTop: '50px' }}
			>
				Choose
			</h2>
			<div className='content__items'>
				{loading
					? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
					: items.map(obj => <ProductItems key={obj.id} {...obj} />)}
			</div>
		</>
	)
}

/* <ProductItems {...obj} key={obj.id} /> */
