import { useState } from 'react'

const category = ['All', 'Men"s', 'Female', 'Childish']

export const Categories = ({ value, onChangeCategory }) => {
	const category = ['All', 'Men"s', 'Female', 'Childish']

	return (
		<div className='categories'>
			<ul>
				{category.map((c, i) => (
					<li
						key={c}
						className={value === i ? 'active' : ''}
						onClick={() => onChangeCategory(i)}
					>
						{c}
					</li>
				))}
			</ul>
		</div>
	)
}
