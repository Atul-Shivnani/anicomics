-- AlterTable
ALTER TABLE "Collection" ADD COLUMN     "parentCollectionId" TEXT;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_parentCollectionId_fkey" FOREIGN KEY ("parentCollectionId") REFERENCES "Collection"("id") ON DELETE SET NULL ON UPDATE CASCADE;
