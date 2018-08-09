import { IAdParams } from "./IAdParams";
import { html, TemplateResult } from '@nutmeg/seed';

export class AdParams implements IAdParams{
    rooms?: string;
    surface?: string;
    surfaceUtil?: string;
    bathrooms?: string;
    capacity?: string;
    estateType?: string;

    private static init(stringParams: string) {
        let params = {
            rooms: '',
            bathrooms: '',
            surface: '',
            surfaceUtil: '',
            capacity: '',
            estateType: ''
        };

        if (stringParams) {
            const parsedParams:IAdParams = JSON.parse(stringParams);
            params.rooms = parsedParams.rooms ? parsedParams.rooms : '';
            params.surface = parsedParams.surface ? parsedParams.surface : '';
            params.surfaceUtil = parsedParams.surfaceUtil ? parsedParams.surfaceUtil : '';
            params.bathrooms = parsedParams.bathrooms ? parsedParams.bathrooms : '';
            params.capacity = parsedParams.capacity ? parsedParams.capacity : '';
            params.estateType = parsedParams.estateType ? parsedParams.estateType : '';
        }

        return params;
    }

    /* private static renderParams(param:string, paramOb:IAdParams) {
        let li = document.createElement('LI');
        let icon = document.createElement('I');
        let span = document.createElement('SPAN');
        li.className = 'listingItem-infoAdParam';
        
        if (param == 'bathrooms' && paramOb.bathrooms) {
            if (parseInt(paramOb.bathrooms) >= 4) {
                paramOb.bathrooms += '+';
            }

            icon.className = 'fal fa-bath';
            span.innerHTML = paramOb.bathrooms;
        } else if (param == 'rooms' && paramOb.rooms) {
            if (parseInt(paramOb.rooms) >= 4) {
                paramOb.rooms += '-';
            }

            icon.className = 'fal fa-bed';
            span.innerHTML = paramOb.rooms;
        } else if (param == 'capacity' && paramOb.capacity) {    
                icon.className = 'fal fa-users';
                span.innerHTML = paramOb.capacity;
        } else if (param == 'surface' && (paramOb.surface || paramOb.surfaceUtil)) {
            let totalSurface = '';

            if (paramOb.surfaceUtil && paramOb.surfaceUtil != '') {
                totalSurface += this.isHectare(paramOb.surfaceUtil, paramOb.estateType);

                if (paramOb.surfaceUtil && paramOb.surfaceUtil != '') {
                    totalSurface += '&nbsp/&nbsp';
                }
            }

            if (paramOb.surface && paramOb.surface != '') {
                totalSurface += this.isHectare(paramOb.surface);
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
    }*/

    private static isHectare (value:string, estate:string) {
        let sup = document.createElement('SUP');

        if (parseInt(value) > 9999 && estate && parseInt(estate) == 5) {
            value = '' + parseInt(value) / 10000 + ' ha';
        } else {
            value = value + ' m<sup>2</sup>';
        }

        return value;
    }

    /** Styling for the component. */
    public static styles(): TemplateResult {
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

    private static renderParam(type:string, data:string): TemplateResult {
        return html`
            <li>
                <i class=""></i>
                <span>${type} ${data}</span>
            </li>
        `;
    }

    private static renderParamSurface(type:string, data:string): TemplateResult {
        return html`
            <li><span></li>
        `;
    }

    public static template (params:string): TemplateResult {
        const paramsParsed:any = this.init(params);

        /*
        ${this.renderParams('rooms', paramsParsed)}

            ${this.renderParams('bathrooms')}

            ${this.renderParams('surface')}

            ${this.renderParams('capacity')}*/

        return html`
            ${Object.keys(paramsParsed).map(element => this.renderParam(element, paramsParsed[element]))}
        `
    }
}