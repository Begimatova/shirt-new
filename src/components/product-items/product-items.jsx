import { useState } from 'react'

export const ProductItems = ({
	imageUrl,
	name,
	types,
	sizes,
	price,
	category,
	rating,
}) => {
	const typeNames = ['cotton', 'synthetics']
	const [activeType, setActiveType] = useState('')
	const [activeSize, setActiveSize] = useState('')

	return (
		<div className='tshirt-block'>
			<img className='tshirt-block__image' src={imageUrl} alt='T-shirt' />
			<h4 className='tshirt-block__title'>{name}</h4>
			<div className='tshirt-block__selector'>
				<ul>
					{types.map(typeId => (
						<li
							className={activeType === typeId ? 'active' : ''}
							key={typeId}
							onClick={() => setActiveType(typeId)}
						>
							{typeNames[typeId]}
						</li>
					))}
				</ul>
				<ul>
					{sizes.map(s => (
						<li
							key={s}
							className={activeSize === s ? 'active' : ''}
							onClick={() => setActiveSize(s)}
						>
							{s}
						</li>
					))}
				</ul>
			</div>
			<div className='tshirt-block__bottom'>
				<div className='tshirt-block__price'>from {price} $</div>
				<div className='button button--outline button--add'>
					<svg
						width='12'
						height='12'
						viewBox='0 0 12 12'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
							fill='white'
						/>
					</svg>
					<span>Add to cart</span>
					<i>2</i>
				</div>
			</div>
		</div>
	)
}
