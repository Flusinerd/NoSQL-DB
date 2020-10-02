import * as faker from 'faker/locale/de';
import { IUser } from './interfaces/user.interface'
import { ITopic } from './interfaces/topic.interface'
import { ISubforum } from './interfaces/subforum.interface'
import { ITopicInSubforum } from './interfaces/topicInSubforum.interface';
import { IPost } from './interfaces/post.interface';
import * as fs from 'fs'

const subForums: ISubforum[] = [];
const users: IUser[] = [];
const topics: ITopic[] = [];
/**
 * Generiert x Nutzer
 * @param {number} amount Anzahl der Nutzer
 */
function generateUsers(amount: number){
  for (let i = 0; i < amount; i++) { 
    const user:IUser = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      password: faker.internet.password(),
      username: faker.internet.userName(),
      posts: []
    }
    users.push(user);
  }
}

/**
 * Generiert x Subforen
 * @param {number} amount Anzahl der Subforen
 */
function generateSubforums(amount: number){
  const titles: string[] = [
    'Java Basics - Anfänger-Themen',
    'Allgemeine Java-Themen',
    'AWT, Swing, JavaFX & SWT',
    'Netzwerkprogrammierung',
    'Datenbankprogrammierung',
    'Spiele- und Multimedia-Programmierung',
    'XML und Co.',
    'Plattformprogrammierung',
    'Mobile Geräte',
    'IDEs und Tools',
    'Deployment',
    'Bücher, Tutorials und Links',
    'Allgemeines EE',
    'Web Tier',
    'Application Tier',
    'Data Tier',
    'SOA',
  ]
  for(let i = 0; i < amount; i++){
    const subForum: ISubforum = {
      title: getRandomElement(titles),
      topics: []
    }
    subForums.push(subForum);
  }
}

/**
 * Generiert x Topics
 * @param {number} amount Anzahl der Topics
 */
function generateTopics(amount: number){
  const titles: string[] = [
    'Tutorials',
    'Spielesammelthread',
    'Vor dem ersten Posten bitte lesen!',
    'Java3D API',
    'Deepmind Poker Bot für PokerStars konfigurieren?',
    'noch eine Runde spielen?',
    'EXCEPTION_ACCESS_VIOLATION',
    'Wie man einfache Spiele programmieren kann',
    'Kollisionserkennung und -behandlung',
    'JOGL kein zugriff auf manche methoden',
    'Spider game, Ist es verloren?',
    'Discord JDA Programmierung',
    'Vector Feld erzeugen',
    'Hangman/ Galgenmännchen',
    'Spiel abzugeben',
    'Fehler bei MinecraftPlugin',
    'wo sehe ich die Range und die Hitbox im Minecraft Sourcecode?',
    'Bei MusikStream Lautstärke anpassen',
    'Hilfe beim Platzieren der Schiffe',
    'Nur ein anderes RPG',
    'Wie kann ich die Kreise nach jeweils 1s spawnen lassen? Processing',
    'VST-Plugins in Java verwenden',
    'Musikplayer in Minecraft'
  ]
  for(let i = 0; i < amount; i++){
    const topic: ITopic = {
      creationDate: faker.date.past(5),
      title: getRandomElement(titles),
      _id: faker.random.uuid(),
      posts: []
    }
    const topicInSubforum: ITopicInSubforum = {
      creationDate: topic.creationDate,
      title: topic.title,
      topicID: topic._id
    }
    topics.push(topic);
    // Add Topic to a Subforum
    getRandomElement(subForums).topics.push(topicInSubforum);
  }
}

/**
 * Generiert x Posts
 * @param {number} amount Anzahl der Posts
 */
function generatePosts(amount: number){
  for (let i = 0; i < amount; i++){
    // Add to random author
    const author = getRandomElement(users)
    const post: IPost = {
      authorUsername: author.username,
      body: faker.lorem.sentences(),
      creationDate: faker.date.recent(200),
      header: faker.lorem.sentence()
    }
    author.posts.push(post);
    // Add to random Topic
    getRandomElement(topics).posts.push(post);
  }
}

function getRandomElement<T>(array: T[]): T {
  const length = array.length;
  const randomNum = Math.floor(Math.random() * length);
  const elem = array[randomNum];
  return elem; 
}

function exportEverythingAsJson(): void {
  if (!fs.existsSync('../generated')){
    fs.mkdirSync('../generated')
  }
  const filesInDir = fs.readdirSync('../generated');
  if (filesInDir.length > 0){
    for (const file of filesInDir) {
      fs.unlinkSync('../generated/' + file);
    }
  }

  fs.writeFileSync('../generated/Subforums.pretty.json', JSON.stringify(subForums, null, 2));
  fs.writeFileSync('../generated/Users.pretty.json', JSON.stringify(users, null, 2));
  fs.writeFileSync('../generated/Topics.pretty.json', JSON.stringify(topics, null, 2));
  const subforumStream = fs.createWriteStream('../generated/Subforums.json');
  for (const subForum of subForums) {
    subforumStream.write(JSON.stringify(subForum) + "\n");
  }
  subforumStream.end();

  const userStream = fs.createWriteStream('../generated/Users.json');
  for (const user of users) {
    userStream.write(JSON.stringify(user) + "\n");
  }
  userStream.end();
  
  const topicStream = fs.createWriteStream('../generated/Topics.json');
  for (const topic of topics) {
    topicStream.write(JSON.stringify(topic) + "\n");
  }
  topicStream.end();
}

// Entry point
generateSubforums(30);
generateUsers(30);
generateTopics(30);
generatePosts(100);

exportEverythingAsJson();

