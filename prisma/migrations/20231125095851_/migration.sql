/*
  Warnings:

  - You are about to drop the column `provider` on the `account` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[providerId,providerAccountId]` on the table `Account` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `providerId` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Account_provider_providerAccountId_key` ON `account`;

-- AlterTable
ALTER TABLE `account` DROP COLUMN `provider`,
    ADD COLUMN `providerId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Account_providerId_providerAccountId_key` ON `Account`(`providerId`, `providerAccountId`);
