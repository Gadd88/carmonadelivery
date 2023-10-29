
const Card = ({producto}) => {
    
    const {PRODUCTO, PRECIO, URL_IMG, DESCRIPCION, CATEGORIA_ID, UUID} = producto
    const img = `${URL_IMG}`

    return (
    <div className="1fm-product snap-center flex flex-col cursor-pointer  bg-black flex-shrink-0 shadow w-72 rounded-2xl">
        <figure className="h-52 w-full image-bg image-bg-2 shrink-0 rounded-t-xl">
            <img src={`${URL_IMG}`} alt={`${PRODUCTO}`} className="image-bg h-full w-full rounded-t-xl"/>
        </figure>
        <div className="p-4 flex flex-col flex-grow text-white h-48 justify-start gap-0">
            <h2 className="font-bold">{PRODUCTO}</h2>
            <div className="flex flex-col items-end justify-between h-full">
                <div className="opacity-60 leading-tight line-clamp-2 w-full mt-1 text-sm">{DESCRIPCION}</div>
                <div className="pt-4">
                    <div className="flex justify-between border-t first:border-t-0 border-dashed border-gray-300 py-0 items-end">
                        <div className="text-gray-100 text-sm"></div>
                        <div className="flex">
                            <div className="text-gray-300 font-medium text-lg">{PRECIO}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card