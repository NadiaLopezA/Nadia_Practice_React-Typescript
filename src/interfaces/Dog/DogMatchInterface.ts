import LocationInterface from "../Location/LocationInterface";
import DogInterface from "./DogInterface";

export default interface DogMatchInterface {
    dog: DogInterface,
    location: LocationInterface
}