-- Created the DB "seinfeld_db" (only works on local connections)
CREATE DATABASE seinfeld_db;
USE seinfeld_db;

-- Created the table "actors" 
CREATE TABLE actors (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  coolness_points int,
  attitude varchar(30) NOT NULL,
  PRIMARY KEY(id)
);

-- Inserted a set of records into the table
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Millie Bobby Brown", 100, "Beast");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Gaten Matarazzo", 30, "Scare");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Caleb McLaughlin", 23, "Cool");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Natalia Dyer", 40, "Scared");

SELECT * FROM actors;
