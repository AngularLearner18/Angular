import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test';
  xmlForm = new FormGroup({
    XmlData: new FormControl(''),
  });
  constructor(private http: HttpClient) { }

  onSubmit() {

    const httpOptions = {
      headers: new HttpHeaders({
        'responseType': 'text'
      })
    };
    this.http.post('http://localhost:5000/api/xml/xml', this.xmlForm.controls['XmlData'].value, httpOptions)
    .subscribe(res => {
      alert('SUCCESS !!');
    })}
}
