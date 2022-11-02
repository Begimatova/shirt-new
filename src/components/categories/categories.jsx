import { useState } from 'react'

const category = ['All', 'Men"s', 'Female', 'Childish']

export const Categories = () => {
	const [activeCategory, setActiveCategory] = useState(0)
	const category = ['All', 'Men"s', 'Female', 'Childish']

	return (
		<div className='categories'>
			<ul>
				{category.map((c, i) => (
					<li
						key={c}
						className={activeCategory === i ? 'active' : ''}
						onClick={() => setActiveCategory(i)}
					>
						{c}
					</li>
				))}
			</ul>
		</div>
	)
}
