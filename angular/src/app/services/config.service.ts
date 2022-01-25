import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Config } from "../interfaces/config";
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    appConfig?: Config;

    constructor(private httpClient: HttpClient) { }

    /**
     * Retreive config.json ans store into appConfig attribute
     * Loaded on starts of application
     */
    getConfig() {
        return this.httpClient.get<Config>(environment.CONFIG_URL)
            .toPromise()
            .then((config) => {
                this.appConfig = config;
            }, (error) => {
                console.error("ConfigService, error", error)
            })
    }
}
