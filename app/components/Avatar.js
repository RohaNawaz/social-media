export default function Avatar({size}) {
    let width = 'w-12'
    if (size === 'lg') {
      width = 'w-36';
    }

    return (
        <div className={`${width} rounded-full overflow-hidden`}>
            <img src="https://th.bing.com/th?id=OIP.OHfTPBkK3858SJXODp_1AQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2"></img>
        </div>
    )
}