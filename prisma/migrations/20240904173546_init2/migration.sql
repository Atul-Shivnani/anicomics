/*
  Warnings:

  - Added the required column `size` to the `Bag` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bag" ADD COLUMN     "size" TEXT NOT NULL;
