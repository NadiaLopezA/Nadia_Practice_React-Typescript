export const DoggieCard = (payload: { name: string, age: number, breed: string, img: string, zip_code: string }) => {
    return (
        <a href="#" className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src={payload.img} className="h-96 w-full object-cover object-center group-hover:opacity-75" />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{payload.breed} </h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{payload.name}</p>
            <p className="mt-1 text-lg font-medium text-gray-900">Age: {payload.age}</p>
            <p className="mt-1 text-lg font-medium text-gray-900">Zip code: {payload.zip_code}</p>
        </a>
    )
}
