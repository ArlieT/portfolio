-- CreateTable
CREATE TABLE "Photos" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "photosUrl" TEXT,
    "description" TEXT,
    "count" INTEGER,

    CONSTRAINT "Photos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Photos_photosUrl_key" ON "Photos"("photosUrl");
