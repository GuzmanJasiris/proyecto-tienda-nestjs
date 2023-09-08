import { Module } from "@nestjs/common";
import { PdfFilesController } from "../controller/pdfFiles.controller";
import { PdfFilesService } from "./pdfFiles.service";

@Module({
    controllers: [PdfFilesController],
    providers:[PdfFilesService]
})
export class PdfFilesModule {}