export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  active: boolean;
  onClick?: (user: User) => void;
}