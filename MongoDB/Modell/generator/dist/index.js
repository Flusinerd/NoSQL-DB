"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker = require("faker/locale/de");
var fs = require("fs");
var subForums = [];
var users = [];
var topics = [];
/**
 * Generiert x Nutzer
 * @param {number} amount Anzahl der Nutzer
 */
function generateUsers(amount) {
    for (var i = 0; i < amount; i++) {
        var user = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            password: faker.internet.password(),
            username: faker.internet.userName(),
            posts: []
        };
        users.push(user);
    }
}
/**
 * Generiert x Subforen
 * @param {number} amount Anzahl der Subforen
 */
function generateSubforums(amount) {
    var titles = [
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
    ];
    for (var i = 0; i < amount; i++) {
        var subForum = {
            title: getRandomElement(titles),
            topics: []
        };
        subForums.push(subForum);
    }
}
/**
 * Generiert x Topics
 * @param {number} amount Anzahl der Topics
 */
function generateTopics(amount) {
    var titles = [
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
    ];
    for (var i = 0; i < amount; i++) {
        var topic = {
            creationDate: faker.date.past(5),
            title: getRandomElement(titles),
            topicID: faker.random.uuid(),
            posts: []
        };
        var topicInSubforum = {
            creationDate: topic.creationDate,
            title: topic.title,
            topicID: topic.topicID
        };
        topics.push(topic);
        // Add Topic to a Subforum
        var subForum = getRandomElement(subForums).topics.push(topicInSubforum);
    }
}
/**
 * Generiert x Posts
 * @param {number} amount Anzahl der Posts
 */
function generatePosts(amount) {
    for (var i = 0; i < amount; i++) {
        // Add to random author
        var author = getRandomElement(users);
        var post = {
            authorUsername: author.username,
            body: faker.lorem.sentences(),
            creationDate: faker.date.recent(200),
            header: faker.lorem.sentence()
        };
        author.posts.push(post);
        // Add to random Topic
        getRandomElement(topics).posts.push(post);
    }
}
function getRandomElement(array) {
    var length = array.length;
    var randomNum = Math.round(Math.random() * length);
    return array[randomNum];
}
function exportEverythingAsJson() {
    if (!fs.existsSync('./generated')) {
        fs.mkdirSync('./generated');
    }
    if (fs.readdirSync('./generated').length > 0) {
        fs.rmdirSync('./generated');
        fs.mkdirSync('./generated');
    }
    fs.writeFileSync('./genrated/Subforums.json', JSON.stringify(subForums));
    fs.writeFileSync('./genrated/Users.json', JSON.stringify(users));
    fs.writeFileSync('./genrated/Topics.json', JSON.stringify(topics));
}
// Entry point
generateSubforums(30);
generateUsers(30);
generateTopics(30);
generatePosts(100);
exportEverythingAsJson();
//# sourceMappingURL=index.js.map