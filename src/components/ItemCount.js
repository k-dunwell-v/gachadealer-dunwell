
const ItemCount = ({price, onAdd}) => {

	return (

		<button type="submit" className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-2xl font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onAdd()}>{"$" + price}</button>

	)

}

export default ItemCount