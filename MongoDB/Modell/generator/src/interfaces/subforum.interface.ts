import { ITopicInSubforum } from "./topicInSubforum.interface";

export interface ISubforum{
  title: string;
  topics: ITopicInSubforum[];
}