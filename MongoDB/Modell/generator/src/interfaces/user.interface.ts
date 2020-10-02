import { IPost } from "./post.interface";

export interface IUser{
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  posts: IPost[];
}