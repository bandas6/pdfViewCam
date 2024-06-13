import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrcService {

  private apiUrl = 'https://vision.googleapis.com/v1/images:annotate?key=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';

  constructor(private http: HttpClient) { }

  performOcr(imageBase64: string): Observable<any> {
    const requestData = {
      "requests": [
        {
          "image": {
            "content": imageBase64
          },
          "features": [
            {
              "type": "TEXT_DETECTION"
            }
          ]
        }
      ]
    };

    return this.http.post(this.apiUrl, requestData);
  }

}
