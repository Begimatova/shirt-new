import { useState } from 'react'

const category = ['All', 'Men"s', 'Female', 'Childish']

export const Categories = () => {
	const [activeCategory, setActiveCategory] = useState('All')

	return (
		<div className='categories'>
			<ul>
				{category.map(c => (
					<li
						key={c}
						className={activeCategory === c ? 'active' : ''}
						onClick={() => setActiveCategory(c)}
					>
						{c}
					</li>
				))}
			</ul>
		</div>
	)
}
