/*
  Warnings:

  - A unique constraint covering the columns `[razorpayRefundId]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "RefundStatus" AS ENUM ('PENDING', 'PROCESSED', 'FAILED');

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "razorpayRefundId" TEXT,
ADD COLUMN     "refundAmountPaise" INTEGER,
ADD COLUMN     "refundProcessedAt" TIMESTAMP(3),
ADD COLUMN     "refundStatus" "RefundStatus";

-- CreateIndex
CREATE UNIQUE INDEX "Booking_razorpayRefundId_key" ON "Booking"("razorpayRefundId");
