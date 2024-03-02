CREATE TABLE tbl_board (
      postId INTEGER NOT NULL IDENTITY
    , title VARCHAR(150) NOT NULL
    , contents LONGVARCHAR NULL
    , regId VARCHAR(20) NULL
    , regDate DATE NULL
    , communityId VARCHAR(16) NULL
    , hitCount INTEGER NULL
    , PRIMARY KEY (postId)
);