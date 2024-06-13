import { Component, ElementRef, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { LoadingController, ModalController } from '@ionic/angular';
import { recognize } from 'tesseract.js';
import { VerInformacionPdfComponent } from '../components/ver-informacion-pdf/ver-informacion-pdf.component';

declare var cv: any;
declare const Buffer: any;

@Component({
  selector: 'app-cam-view',
  templateUrl: './cam-view.component.html',
  styleUrls: ['./cam-view.component.scss'],
})
export class CamViewComponent implements OnInit, OnDestroy {

  loadingCtrl = inject(LoadingController); 
  modalController = inject(ModalController); 

  photo!: Photo;
  @ViewChild('videoElement', { static: false }) videoElement!: ElementRef<HTMLVideoElement>;
  videoStream!: MediaStream;
  extractedText!: string;

  constructor() { }

  ngOnInit() {
    this.startCamera();
  }

  async startCamera() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      this.videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
      this.videoElement.nativeElement.srcObject = this.videoStream;
    } else {
      console.error('Media devices not supported');
    }
  }

  ngOnDestroy() {
    if (this.videoStream) {
      this.videoStream.getTracks().forEach(track => track.stop());
    }
  }
  

  async takePhoto() {
    const image: any = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });

    this.photo = image;
    this.processImage(image.webPath);
  }

  async processImage(imagePath: string) {
    const imgElement = new Image();
    imgElement.src = imagePath;
    imgElement.onload = () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = imgElement.width;
      canvas.height = imgElement.height;
      context?.drawImage(imgElement, 0, 0);

      const src = cv.imread(canvas);  // 'src' guarda la imagen en formato OpenCV
      const dst = new cv.Mat();
      cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY, 0);  // 'dst' guarda la imagen en escala de grises

      const edges = new cv.Mat();
      cv.Canny(dst, edges, 50, 100);  // 'edges' guarda los bordes detectados

      cv.imshow('outputCanvas', edges);

      // Extraer texto usando Tesseract.js
      this.extractText(canvas);

      // Liberar recursos
      src.delete();
      dst.delete();
      edges.delete();
    };
  }

  async extractText(canvas: HTMLCanvasElement) {
    recognize(canvas, 'eng', {
      logger: m => console.log(m)
    }).then(({ data: { text } }) => {
      this.extractedText = text;
      console.log('Extracted Text:', text);
    });
  }

  async verInfoPdf(){
    const modal = await this.modalController.create({
      component: VerInformacionPdfComponent,
      cssClass: 'modals',
      componentProps: {
        'informacion': this.extractedText,
      }
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();

    if (data.cerrar) {
      this.cerrarModal();
    }
  }

  cerrarModal(){
    this.modalController.dismiss({cerrar:true});
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'obteniendo datos, Este proceso puede tardar...',
      duration: 3000,
    });

    loading.present();
  }

}
