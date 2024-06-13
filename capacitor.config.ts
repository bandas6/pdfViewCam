import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'PdfViewCam',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    Camera: {
      // Aquí puedes configurar permisos específicos de la cámara si es necesario
    }
  }
};

export default config;
