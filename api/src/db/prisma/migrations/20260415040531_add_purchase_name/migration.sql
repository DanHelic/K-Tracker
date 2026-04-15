-- AlterTable
ALTER TABLE "purchase" ADD COLUMN     "purchase_name" VARCHAR;

-- AlterTable
ALTER TABLE "store" ALTER COLUMN "location" DROP NOT NULL;
