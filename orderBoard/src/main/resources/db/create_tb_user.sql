CREATE TABLE tbl_user (
      userId VARCHAR(50) NOT NULL
    , userName VARCHAR(50) NOT NULL
    , enName VARCHAR(20) NULL
    , compPhone VARCHAR(20) NULL
    , phone VARCHAR(20) NULL
    , cellPhone VARCHAR(20) NULL
    , company VARCHAR(50) NULL
    , jobPosition VARCHAR(20) NULL
    , assignment VARCHAR(20) NULL
    , officerYn VARCHAR(20) NULL
    , fax VARCHAR(20) NULL
    , zipCode VARCHAR(20) NULL
    , address VARCHAR(20) NULL
    , compZipCode VARCHAR(20) NULL
    , compAddress VARCHAR(20) NULL
    , email VARCHAR(20) NULL
    , deptId VARCHAR(20) NULL
    , password VARCHAR(20) NOT NULL
    , PRIMARY KEY (userId)
);