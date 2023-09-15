import DogMatchInterface from "../../interfaces/Dog/DogMatchInterface"

export const MatchDoggieCard = (payload: DogMatchInterface) => {
    return (
        <a href="#" className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src={payload.dog.img} className="h-96 w-full object-cover object-center group-hover:opacity-75" />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{payload.dog.breed} </h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{payload.dog.name}</p>
            <p className="mt-1 text-lg font-medium text-gray-900">Age: {payload.dog.age}</p>
            <p className="mt-1 text-lg font-medium text-gray-900">City: {payload.location.city}</p>
            <p className="mt-1 text-lg font-medium text-gray-900">County: {payload.location.county}</p>
            <p className="mt-1 text-lg font-medium text-gray-900">State: {payload.location.state}</p>
            <p className="mt-1 text-lg font-medium text-gray-900">Zip Code: {payload.location.zip_code}</p>
        </a>
    )
}
