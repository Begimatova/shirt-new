import { useEffect, useState } from 'react'
import { Categories } from '../components/categories/categories'
import { ProductItems } from '../components/product-items/product-items'
import { Sort } from '../components/sort/sort'
import { Skeleton } from '../components/product-items/skeleton'

const URL = 'https://635fd2b7ca0fe3c21aa582a0.mockapi.io/products?'
const sortList = ['popularity', 'price', 'alphabetically']

const SORT_NAMES = {
	popularity: 'rating',
	price: 'price',
	alphabetically: 'name',
}
const SORT_DIRECTION = {
	popularity: 'desc',
	price: 'asc',
	alphabetically: 'asc',
}

export const Products = () => {
	const [loading, setLoading] = useState(true)
	const [items, setItems] = useState([])
	const [activeCategory, setActiveCategory] = useState(0)
	const [activeSort, setActiveSort] = useState(sortList[0])

	useEffect(() => {
		setLoading(true)

		const queryParams = new URLSearchParams()
		queryParams.append('sortBy', SORT_NAMES[activeSort])
		queryParams.append('order', SORT_DIRECTION[activeSort])
		if (activeCategory > 0) {
			queryParams.append('category', activeCategory)
		}

		fetch(URL + queryParams)
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
