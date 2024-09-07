/*
  Warnings:

  - Made the column `count` on table `Photos` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Photos" ALTER COLUMN "count" SET NOT NULL,
ALTER COLUMN "count" SET DEFAULT 0;
