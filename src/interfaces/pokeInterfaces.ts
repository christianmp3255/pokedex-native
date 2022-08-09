export interface Request {
  status: number;
  data: Pokemon;
}

export interface Result {
  name: string;
  url: string;
}

export interface Pokemon {
  count: number;
  next?: string | any;
  previous?: string | any;
  results: Result[];
}
