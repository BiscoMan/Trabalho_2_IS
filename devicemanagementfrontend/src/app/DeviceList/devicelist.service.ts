import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers} from '@angular/http';
import {Customer} from 'app/Datamodel/Customer';
import 'rxjs/add/operator/map';
import {log} from 'util';
import {HttpClientJsonpModule} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DeviceListService {
    // Instantiate the URL to the createDB endpoint in the backend server.
    private APIEndpoint_GetDeviceHistory = 'http://localhost:8182/device/{serialNumber}';
    // Inject the http client into the service
    constructor(private http: Http) {}
    // Implement the createDB() method. This method should send an HTTP GET
    // request to the corresponding API endpoint on the backend server.
    getDeviceHistory(serialNumber) {
        const aux = this.http.get(this.APIEndpoint_GetDeviceHistory.replace('{serialNumber}', serialNumber))
            .map(this.parseData);
        return aux;
    }

    // This method parses the result data to JSON
    private parseData(res: Response)  {
        return res.json();
    }
}
