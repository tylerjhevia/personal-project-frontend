import {Info} from '../actions/index';

export namespace Store {
  export type User = { type: Info };

  export  User = {
    name: 'name',
    email: 'email'
  };
}
