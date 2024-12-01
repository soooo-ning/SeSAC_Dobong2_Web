CREATE DATABASE practice DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE practice;

-- DDL
CREATE TABLE member (
  id VARCHAR(20) NOT NULL PRIMARY KEY,
  name VARCHAR(5) NOT NULL,
  age INT,
  gender VARCHAR(2) NOT NULL,
  email VARCHAR(50),
  promotion VARCHAR(2) DEFAULT 'x'
);

-- id : 값 형식 변경
-- age : 삭제
-- interest : 추가
ALTER TABLE member MODIFY id VARCHAR(10);
ALTER TABLE member DROP age;
ALTER TABLE member ADD interest VARCHAR(100);

-- user 테이블 생성
CREATE TABLE user (
  id VARCHAR(10) NOT NULL PRIMARY KEY,
  pw VARCHAR(20) NOT NULL,
  name VARCHAR(5) NOT NULL,
  gender ENUM('F', 'M', '') DEFAULT '',
  birthday DATE NOT NULL,
  age INT(3) NOT NULL DEFAULT 0
);

-- 데이터 추가
INSERT INTO user
VALUES ('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33);
INSERT INTO user
VALUES ('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
INSERT INTO user
VALUES ('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53);
INSERT INTO user
VALUES ('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39);
INSERT INTO user
VALUES ('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47);
INSERT INTO user
VALUES ('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22);
INSERT INTO user
VALUES ('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);

SELECT * FROM user;

-- 1. 모든 회원 조회 birthday 기준 오름차순
SELECT * FROM user ORDER BY birthday ASC;

-- 2. gender 값이 M인 회원 조회 name 기준 내림차순
SELECT * FROM user WHERE gender = 'M' ORDER BY name DESC;

-- 3. 1990년대 출생 회원의 id, name 값 조회
SELECT id, name from user WHERE birthday BETWEEN '1990-01-01' and '1999-12-31';

-- 4. 6월생 회원 조회 birthday 기준 오름차순
SELECT * from user WHERE birthday LIKE '_____06' ORDER BY birthday ASC;

-- 5. gender 값이 M이고 1970년대 출생 회원 조회
SELECT * from user WHERE gender = 'M' AND birthday BETWEEN '1970-01-01' AND '1979-12-31';

-- 6. age 기준 내림차순 상위 3명 조회  
SELECT * from user ORDER BY age DESC LIMIT 3;

-- 7. 나이 25이상 50이하인 회원 조회
SELECT * from user WHERE age BETWEEN 25 AND 50;

-- 8. id 값이 hong1234인 레코드의 pw값 12345678로변경
UPDATE user SET pw = '12345678' WHERE id = 'hong1234';

-- 9. id 값이 jungkrat인 레코드 삭제
DELETE FROM user WHERE id = 'jungkrat';