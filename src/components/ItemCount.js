import { useState } from "react"

const ItemCount = ({price, stock, quantity, onAdd}) => {

	const [count, setCount] = useState(quantity)

	function restar() {
		setCount(currentState => currentState - 1)
	}

	function sumar() {
		setCount(currentState => currentState + 1)

	}


	return (
		<div data-theme="acid">
			<label for="my-modal-6" className="mt-10 w-full bg-orange-500 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-2xl font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">{"$" + price}</label>

			<input type="checkbox" id="my-modal-6" class="modal-toggle" />

			<div class="modal modal-bottom sm:modal-middle">
				<div class="modal-box">
					<h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
					<p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>

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