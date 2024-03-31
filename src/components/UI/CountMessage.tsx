const CountMessage = ({ count }: { count: number }) => {
	return <span>{`you have ${count} image${count > 1 ? "s" : ""}`}</span>
}

export default CountMessage
