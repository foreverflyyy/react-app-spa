export interface IUser {
   id: number,
   name: string,
   username: string,
   email: string,
   adress: {
      street: string,
      city: string,
   }
}