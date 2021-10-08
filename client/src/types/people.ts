export interface IPersonItem {
  name: string;
  height: string;
  mass: string;
  gender: string;
  homeworld: string;
}

export interface IPeople {
  getPeople: IPersonItem[];
}

export interface IPerson {
  getPerson: IPersonItem[];
}
