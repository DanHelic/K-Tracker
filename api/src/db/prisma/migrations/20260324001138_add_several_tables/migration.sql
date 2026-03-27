/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "user" (
    "user_id" SERIAL NOT NULL,
    "user_name" VARCHAR NOT NULL,
    "password_hash" VARCHAR NOT NULL,
    "email" VARCHAR,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_login" TIMESTAMP(3),
    "first_name" VARCHAR,
    "last_name" VARCHAR,
    "is_admin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "user_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "purchase" (
    "purchase_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "purchased_at" TIMESTAMP(3) NOT NULL,
    "store_id" INTEGER,
    "total_price" DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    "item_count" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "purchase_pkey" PRIMARY KEY ("purchase_id")
);

-- CreateTable
CREATE TABLE "purchase_item" (
    "purchase_item_id" SERIAL NOT NULL,
    "purchase_id" INTEGER NOT NULL,
    "item_id" INTEGER,
    "item_total_price" DECIMAL(10,2) NOT NULL,
    "amount" INTEGER NOT NULL,
    "item_name" VARCHAR,

    CONSTRAINT "purchase_item_pkey" PRIMARY KEY ("purchase_item_id")
);

-- CreateTable
CREATE TABLE "item" (
    "item_id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "item_type_id" INTEGER,
    "country_id" INTEGER,
    "value" DECIMAL(10,3) NOT NULL,
    "unit" VARCHAR NOT NULL,
    "item_producer_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "item_pkey" PRIMARY KEY ("item_id")
);

-- CreateTable
CREATE TABLE "item_producer" (
    "item_producer_id" SERIAL NOT NULL,
    "item_producer_name" VARCHAR NOT NULL,
    "country_id" INTEGER,

    CONSTRAINT "item_producer_pkey" PRIMARY KEY ("item_producer_id")
);

-- CreateTable
CREATE TABLE "item_type" (
    "item_type_id" SERIAL NOT NULL,
    "item_type_name" VARCHAR NOT NULL,

    CONSTRAINT "item_type_pkey" PRIMARY KEY ("item_type_id")
);

-- CreateTable
CREATE TABLE "country" (
    "country_id" SERIAL NOT NULL,
    "country_code" VARCHAR NOT NULL,
    "name" VARCHAR NOT NULL,

    CONSTRAINT "country_pkey" PRIMARY KEY ("country_id")
);

-- CreateTable
CREATE TABLE "store" (
    "store_id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "user_id" INTEGER NOT NULL,
    "location" VARCHAR NOT NULL,

    CONSTRAINT "store_pkey" PRIMARY KEY ("store_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_user_name_key" ON "user"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "item_producer_item_producer_name_key" ON "item_producer"("item_producer_name");

-- CreateIndex
CREATE UNIQUE INDEX "country_country_code_key" ON "country"("country_code");

-- CreateIndex
CREATE UNIQUE INDEX "country_name_key" ON "country"("name");

-- AddForeignKey
ALTER TABLE "purchase" ADD CONSTRAINT "purchase_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase" ADD CONSTRAINT "purchase_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "store"("store_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase_item" ADD CONSTRAINT "purchase_item_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "item"("item_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "item_item_type_id_fkey" FOREIGN KEY ("item_type_id") REFERENCES "item_type"("item_type_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "item_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "country"("country_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "item_item_producer_id_fkey" FOREIGN KEY ("item_producer_id") REFERENCES "item_producer"("item_producer_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_producer" ADD CONSTRAINT "item_producer_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "country"("country_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store" ADD CONSTRAINT "store_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
