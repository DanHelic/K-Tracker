/*
  Warnings:

  - You are about to drop the column `name` on the `country` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nameEN]` on the table `country` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nameDE]` on the table `country` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nameDE` to the `country` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameEN` to the `country` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "country_name_key";

-- AlterTable
ALTER TABLE "country" DROP COLUMN "name",
ADD COLUMN     "nameDE" VARCHAR NOT NULL,
ADD COLUMN     "nameEN" VARCHAR NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "country_nameEN_key" ON "country"("nameEN");

-- CreateIndex
CREATE UNIQUE INDEX "country_nameDE_key" ON "country"("nameDE");
