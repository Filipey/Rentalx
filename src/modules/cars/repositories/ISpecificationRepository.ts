import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpeficicationRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  findByName(name: string): Specification
}

export { ISpeficicationRepository, ICreateSpecificationDTO }