import { Component, OnInit } from '@angular/core';
import{jsPDF} from 'jspdf';
@Component({
  selector: 'app-pdfs',
  templateUrl: './pdfs.page.html',
  styleUrls: ['./pdfs.page.scss'],
})
export class PDFsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  generatePDF(){
    const doc = new jsPDF();


    doc.text("Hello World!",10,10);
    doc.save('helloWorld.pdf');
  }

}
