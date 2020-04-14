import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(
    private geolocationP: Geolocation
  ) { const myThis = this; }

  get_current_latitude_longitude( cb_p ) {
    this.geolocationP.getCurrentPosition().then(( result_p ) => {
        cb_p(null, {
          latitude: result_p.coords.latitude,
          longitude: result_p.coords.longitude,
        });
    }).catch(( error_p ) => {
      cb_p(error_p, null);
    });
  }
}
