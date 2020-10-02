import { IPost } from "./post.interface";

export interface ITopic{
  _id: string;
  creationDate: Date;
  title: string;
  posts: IPost[];
}