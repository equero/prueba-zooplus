import PetType from './petType';
import PetBreed from './petBreed';

export interface Pet {
    id: number,
    name: string,
    petType: PetType,
    breed: PetBreed
}
