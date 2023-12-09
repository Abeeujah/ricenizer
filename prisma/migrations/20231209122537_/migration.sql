-- CreateEnum
CREATE TYPE "Status" AS ENUM ('VALID', 'INVALID');

-- CreateTable
CREATE TABLE "Token" (
    "id" TEXT NOT NULL,
    "referenceId" VARCHAR(255) NOT NULL,
    "amount" INTEGER NOT NULL,
    "token" VARCHAR(255) NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'VALID',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Token_referenceId_key" ON "Token"("referenceId");

-- CreateIndex
CREATE UNIQUE INDEX "Token_token_key" ON "Token"("token");
