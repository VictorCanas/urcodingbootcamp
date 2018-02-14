CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (

  id int NOT NULL AUTO_INCREMENT,
  author varchar(20) NOT NULL,
  chirp varchar(255) NOT NULL,
  time_created datetime,
  PRIMARY KEY (id)


);

