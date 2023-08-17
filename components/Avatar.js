export default function Avatar({size, url}) {
    let width = 'w-16'
    if (size === 'lg') {
      width = 'w-24 md:w-36';
    }

    return (
        <div className={`${width} rounded-full overflow-hidden`}>
            <img src={url}></img>
        </div>
    )
}

// https://th.bing.com/th?id=OIP.OHfTPBkK3858SJXODp_1AQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2
// https://media.istockphoto.com/id/1399395748/photo/cheerful-business-woman-with-glasses-posing-with-her-hands-under-her-face-showing-her-smile.webp?b=1&s=170667a&w=0&k=20&c=HdGlQ9BzmRtM015ck_F3PCIlB-_7id0Lp4h2rKLIj-0=