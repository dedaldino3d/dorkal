import React, { useState } from 'react'


export const Increment = () => {

	const [ count, setCount ] = useState(0);


	return (
		<div >
			<p> You clicked {count} times </p>

			<button onClick={() => setCount(count + 1)}>
				Increment
			</button>
			<button onClick={() => setCount(count - 1)}>
				Decrement
			</button>
		</div>
	)
}

export default Increment