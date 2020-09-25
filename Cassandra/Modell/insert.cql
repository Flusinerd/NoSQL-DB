-- Insert Users
INSERT INTO users_by_username (username, password, firstName, name) VALUES ('username1', 'password1', 'User', 'One');
INSERT INTO users_by_username (username, password, firstName, name) VALUES ('username2', 'password2', 'User', 'Two');
INSERT INTO users_by_username (username, password, firstName, name) VALUES ('username3', 'password3', 'User', 'Three');
INSERT INTO users_by_username (username, password, firstName, name) VALUES ('username4', 'password4', 'User', 'Four');

-- Insert Subforums
INSERT INTO subforums_by_title (title) VALUES ('Subforum 1');
INSERT INTO subforums_by_title (title) VALUES ('Subforum 2');
INSERT INTO subforums_by_title (title) VALUES ('Subforum 3');
INSERT INTO subforums_by_title (title) VALUES ('Subforum 4');
INSERT INTO subforums_by_title (title) VALUES ('Subforum 5');
INSERT INTO subforums_by_title (title) VALUES ('Subforum 6');

-- Insert Topics by Subforum
INSERT INTO topics_by_subforum (SubforumTitle, CreationDate, TopicID, Title) VALUES ('Subforum 1', toTimestamp(now()), 1, 'Topic 1 Forum 1');
INSERT INTO topics_by_subforum (SubforumTitle, CreationDate, TopicID, Title) VALUES ('Subforum 1', toTimestamp(now()), 2, 'Topic 2 Forum 1');
INSERT INTO topics_by_subforum (SubforumTitle, CreationDate, TopicID, Title) VALUES ('Subforum 1', toTimestamp(now()), 3, 'Topic 3 Forum 1');
INSERT INTO topics_by_subforum (SubforumTitle, CreationDate, TopicID, Title) VALUES ('Subforum 1', toTimestamp(now()), 4, 'Topic 4 Forum 1');
INSERT INTO topics_by_subforum (SubforumTitle, CreationDate, TopicID, Title) VALUES ('Subforum 1', toTimestamp(now()), 5, 'Topic 5 Forum 1');
INSERT INTO topics_by_subforum (SubforumTitle, CreationDate, TopicID, Title) VALUES ('Subforum 2', toTimestamp(now()), 6, 'Topic 1 Forum 2');
INSERT INTO topics_by_subforum (SubforumTitle, CreationDate, TopicID, Title) VALUES ('Subforum 2', toTimestamp(now()), 7, 'Topic 2 Forum 2');
INSERT INTO topics_by_subforum (SubforumTitle, CreationDate, TopicID, Title) VALUES ('Subforum 2', toTimestamp(now()), 8, 'Topic 3 Forum 2');
INSERT INTO topics_by_subforum (SubforumTitle, CreationDate, TopicID, Title) VALUES ('Subforum 2', toTimestamp(now()), 9, 'Topic 4 Forum 2');
INSERT INTO topics_by_subforum (SubforumTitle, CreationDate, TopicID, Title) VALUES ('Subforum 2', toTimestamp(now()), 10, 'Topic 5 Forum 2');
INSERT INTO topics_by_subforum (SubforumTitle, CreationDate, TopicID, Title) VALUES ('Subforum 2', toTimestamp(now()), 11, 'Topic 1 Forum 2');
INSERT INTO topics_by_subforum (SubforumTitle, CreationDate, TopicID, Title) VALUES ('Subforum 3', toTimestamp(now()), 12, 'Topic 1 Forum 3');
INSERT INTO topics_by_subforum (SubforumTitle, CreationDate, TopicID, Title) VALUES ('Subforum 3', toTimestamp(now()), 13, 'Topic 2 Forum 3');
INSERT INTO topics_by_subforum (SubforumTitle, CreationDate, TopicID, Title) VALUES ('Subforum 3', toTimestamp(now()), 14, 'Topic 3 Forum 3');
INSERT INTO topics_by_subforum (SubforumTitle, CreationDate, TopicID, Title) VALUES ('Subforum 4', toTimestamp(now()), 15, 'Topic 1 Forum 4');
INSERT INTO topics_by_subforum (SubforumTitle, CreationDate, TopicID, Title) VALUES ('Subforum 4', toTimestamp(now()), 16, 'Topic 2 Forum 4');
INSERT INTO topics_by_subforum (SubforumTitle, CreationDate, TopicID, Title) VALUES ('Subforum 4', toTimestamp(now()), 17, 'Topic 3 Forum 4');
INSERT INTO topics_by_subforum (SubforumTitle, CreationDate, TopicID, Title) VALUES ('Subforum 4', toTimestamp(now()), 18, 'Topic 4 Forum 4');
INSERT INTO topics_by_subforum (SubforumTitle, CreationDate, TopicID, Title) VALUES ('Subforum 5', toTimestamp(now()), 19, 'Topic 1 Forum 5');
INSERT INTO topics_by_subforum (SubforumTitle, CreationDate, TopicID, Title) VALUES ('Subforum 5', toTimestamp(now()), 20, 'Topic 2 Forum 5');
INSERT INTO topics_by_subforum (SubforumTitle, CreationDate, TopicID, Title) VALUES ('Subforum 5', toTimestamp(now()), 21, 'Topic 3 Forum 5');
INSERT INTO topics_by_subforum (SubforumTitle, CreationDate, TopicID, Title) VALUES ('Subforum 5', toTimestamp(now()), 22, 'Topic 4 Forum 5');
INSERT INTO topics_by_subforum (SubforumTitle, CreationDate, TopicID, Title) VALUES ('Subforum 6', toTimestamp(now()), 23, 'Topic 1 Forum 6');
INSERT INTO topics_by_subforum (SubforumTitle, CreationDate, TopicID, Title) VALUES ('Subforum 6', toTimestamp(now()), 24, 'Topic 2 Forum 6');
INSERT INTO topics_by_subforum (SubforumTitle, CreationDate, TopicID, Title) VALUES ('Subforum 6', toTimestamp(now()), 25, 'Topic 3 Forum 6');

-- Insert Posts by Topic
INSERT INTO posts_by_topic (TopicID, CreationDate, PostID, AuthorUsername, Header, Body) VALUES (1, toTimestamp(now()), 1, 'username1', 'Post 1 Header', 'Post 1 Body');
INSERT INTO posts_by_topic (TopicID, CreationDate, PostID, AuthorUsername, Header, Body) VALUES (1, toTimestamp(now()), 2, 'username2', 'Post 2 Header', 'Post 2 Body');
INSERT INTO posts_by_topic (TopicID, CreationDate, PostID, AuthorUsername, Header, Body) VALUES (2, toTimestamp(now()), 3, 'username4', 'Post 3 Header', 'Post 3 Body');
INSERT INTO posts_by_topic (TopicID, CreationDate, PostID, AuthorUsername, Header, Body) VALUES (2, toTimestamp(now()), 4, 'username3', 'Post 4 Header', 'Post 4 Body');
INSERT INTO posts_by_topic (TopicID, CreationDate, PostID, AuthorUsername, Header, Body) VALUES (3, toTimestamp(now()), 5, 'username2', 'Post 5 Header', 'Post 5 Body');
INSERT INTO posts_by_topic (TopicID, CreationDate, PostID, AuthorUsername, Header, Body) VALUES (3, toTimestamp(now()), 6, 'username3', 'Post 6 Header', 'Post 6 Body');
INSERT INTO posts_by_topic (TopicID, CreationDate, PostID, AuthorUsername, Header, Body) VALUES (4, toTimestamp(now()), 7, 'username1', 'Post 7 Header', 'Post 7 Body');
INSERT INTO posts_by_topic (TopicID, CreationDate, PostID, AuthorUsername, Header, Body) VALUES (4, toTimestamp(now()), 8, 'username2', 'Post 8 Header', 'Post 8 Body');
INSERT INTO posts_by_topic (TopicID, CreationDate, PostID, AuthorUsername, Header, Body) VALUES (5, toTimestamp(now()), 9, 'username3', 'Post 9 Header', 'Post 9 Body');
INSERT INTO posts_by_topic (TopicID, CreationDate, PostID, AuthorUsername, Header, Body) VALUES (5, toTimestamp(now()), 10, 'username2', 'Post 10 Header', 'Post 10 Body');
INSERT INTO posts_by_topic (TopicID, CreationDate, PostID, AuthorUsername, Header, Body) VALUES (6, toTimestamp(now()), 11, 'username1', 'Post 11 Header', 'Post 11 Body');
INSERT INTO posts_by_topic (TopicID, CreationDate, PostID, AuthorUsername, Header, Body) VALUES (6, toTimestamp(now()), 12, 'username3', 'Post 112 Header', 'Post 12 Body');

-- Insert Posts by Author
INSERT INTO posts_by_author (TopicID, CreationDate, PostID, AuthorUsername, Header, Body) VALUES (1, toTimestamp(now()), 1, 'username1', 'Post 1 Header', 'Post 1 Body');
INSERT INTO posts_by_author (TopicID, CreationDate, PostID, AuthorUsername, Header, Body) VALUES (1, toTimestamp(now()), 2, 'username2', 'Post 2 Header', 'Post 2 Body');
INSERT INTO posts_by_author (TopicID, CreationDate, PostID, AuthorUsername, Header, Body) VALUES (2, toTimestamp(now()), 3, 'username4', 'Post 3 Header', 'Post 3 Body');
INSERT INTO posts_by_author (TopicID, CreationDate, PostID, AuthorUsername, Header, Body) VALUES (2, toTimestamp(now()), 4, 'username3', 'Post 4 Header', 'Post 4 Body');
INSERT INTO posts_by_author (TopicID, CreationDate, PostID, AuthorUsername, Header, Body) VALUES (3, toTimestamp(now()), 5, 'username2', 'Post 5 Header', 'Post 5 Body');
INSERT INTO posts_by_author (TopicID, CreationDate, PostID, AuthorUsername, Header, Body) VALUES (3, toTimestamp(now()), 6, 'username3', 'Post 6 Header', 'Post 6 Body');
INSERT INTO posts_by_author (TopicID, CreationDate, PostID, AuthorUsername, Header, Body) VALUES (4, toTimestamp(now()), 7, 'username1', 'Post 7 Header', 'Post 7 Body');
INSERT INTO posts_by_author (TopicID, CreationDate, PostID, AuthorUsername, Header, Body) VALUES (4, toTimestamp(now()), 8, 'username2', 'Post 8 Header', 'Post 8 Body');
INSERT INTO posts_by_author (TopicID, CreationDate, PostID, AuthorUsername, Header, Body) VALUES (5, toTimestamp(now()), 9, 'username3', 'Post 9 Header', 'Post 9 Body');
INSERT INTO posts_by_author (TopicID, CreationDate, PostID, AuthorUsername, Header, Body) VALUES (5, toTimestamp(now()), 10, 'username2', 'Post 10 Header', 'Post 10 Body');
INSERT INTO posts_by_author (TopicID, CreationDate, PostID, AuthorUsername, Header, Body) VALUES (6, toTimestamp(now()), 11, 'username1', 'Post 11 Header', 'Post 11 Body');
INSERT INTO posts_by_author (TopicID, CreationDate, PostID, AuthorUsername, Header, Body) VALUES (6, toTimestamp(now()), 12, 'username3', 'Post 112 Header', 'Post 12 Body');