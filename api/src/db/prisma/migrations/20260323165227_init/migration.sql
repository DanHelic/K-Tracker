-- CreateTable
CREATE TABLE "users" (
    "username" VARCHAR NOT NULL,
    "passwordhash" VARCHAR NOT NULL,
    "salt" VARCHAR NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("username")
);
