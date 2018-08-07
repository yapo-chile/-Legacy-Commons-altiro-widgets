import { IAdParams } from "./IAdParams";
import { html, TemplateResult } from '@nutmeg/seed';

export class AdParams implements IAdParams{
    rooms?: string;
    surface?: string;
    surfaceUtil?: string;
    bathrooms?: string;
    capacity?: string;
    estateType?: string;

    constructor (stringParams: string) {
        if (stringParams) {
            const parsedParams:IAdParams = JSON.parse(stringParams);
            this.rooms = parsedParams.rooms ? parsedParams.rooms : '';
            this.surface = parsedParams.surface ? parsedParams.surface : '';
            this.surfaceUtil = parsedParams.surfaceUtil ? parsedParams.surfaceUtil : '';
            this.bathrooms = parsedParams.bathrooms ? parsedParams.bathrooms : '';
            this.capacity = parsedParams.capacity ? parsedParams.capacity : '';
            this.estateType = parsedParams.estateType ? parsedParams.estateType : '';
        }
    }

    private renderParams(param:string) {
        let li = document.createElement('LI');
        let icon = document.createElement('I');
        let span = document.createElement('SPAN');
        li.className = 'listingItem-infoAdParam';
        
        if (param == 'bathrooms' && this.bathrooms) {
            if (parseInt(this.bathrooms) >= 4) {
                this.bathrooms += '+';
            }

            icon.className = 'fal fa-bath';
            span.innerHTML = this.bathrooms;
        } else if (param == 'rooms' && this.rooms) {
            if (parseInt(this.rooms) >= 4) {
                this.rooms += '+';
            }

            icon.className = 'fal fa-bed';
            span.innerHTML = this.rooms;
        } else if (param == 'capacity' && this.capacity) {    
                icon.className = 'fal fa-users';
                span.innerHTML = this.capacity;
        } else if (param == 'surface' && (this.surface || this.surfaceUtil)) {
            let totalSurface = '';

            if (this.surfaceUtil && this.surfaceUtil != '') {
                totalSurface += this.isHectare(this.surfaceUtil);

                if (this.surfaceUtil && this.surfaceUtil != '') {
                    totalSurface += '&nbsp/&nbsp';
                }
            }

            if (this.surface && this.surface != '') {
                totalSurface += this.isHectare(this.surface);
            }

            icon.className = 'fal fa-expand';
            span.className = "__surface"
            span.innerHTML = totalSurface;
        }

        li.appendChild(icon);
        li.appendChild(span);

        if (li.innerHTML != '') {
            return html`${li}`;
        }
            
        return html``;
    }

    private isHectare (value:string) {
        let span
        let sup = document.createElement('SUP');

        if (parseInt(value) > 9999 && this.estateType && parseInt(this.estateType) == 5) {
            value = '' + parseInt(value) / 10000 + ' ha';
        } else {
            value = value + ' m<sup>2</sup>';
        }

        return value;
    }

    /** Styling for the component. */
    public styles(): TemplateResult {
        return html`
            <style>
                .listingItem-infoAdParam {
                    font-size: 10px;
                    display: flex;
                    margin-right: 7px;
                }

                .listingItem-infoAdParam i {
                    align-self: center;
                }

                .listingItem-infoAdParam span {
                    align-self: center;
                    margin-left: 5px;
                    display: inline-block;
                }

                .listingItem-infoAdParam span.__surface {
                    margin-top: -2px;
                }

                .listingItem-infoAdParam:last-child {
                    margin-right: 0;
                }
            </style>
        `;
    }

    public template (): TemplateResult {
        return html`
            ${this.renderParams('rooms')}

            ${this.renderParams('bathrooms')}

            ${this.renderParams('surface')}

            ${this.renderParams('capacity')}
        `
    }
}