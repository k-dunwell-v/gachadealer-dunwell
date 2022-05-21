import { useState } from "react"

const ItemCount = ({title, img, price, stock, quantity, onAdd}) => {

	const [count, setCount] = useState(quantity)

	function restar() {
		count > 0 && setCount(currentState => currentState - 1)
	}

	function sumar() {
		count < stock && setCount(currentState => currentState + 1)
		console.log(stock)
	}


	return (
		<div data-theme="acid">
			<label for="my-modal-6" className="mt-10 w-full bg-orange-500 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-2xl font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">{"$" + price}</label>

			<input type="checkbox" id="my-modal-6" class="modal-toggle" />

			<div class="modal modal-bottom sm:modal-middle">
				<div class="modal-box">
					<h3 class="font-bold text-lg">{"You're adding '" + title + "' to the cart..."} </h3>
					<img src={img} className="w-full h-full object-center object-cover"/>

					<div class="modal-action place-content-center">

						<button class="btn btn-circle btn-secondary text-lg text-white" onClick={() => restar()}>-</button>
						<input type="text" value={count} class="input input-bordered input-secondary text-center"/>
						<button class="btn btn-circle btn-secondary text-lg text-white" onClick={() => sumar()}>+</button>

					</div>

					<div class="modal-action">
						<label for="my-modal-6" class="btn" onClick={() => onAdd(count)}>Add to cart</label>
					</div>

				</div>
			</div>
			
		</div>
	)

}

export default ItemCount