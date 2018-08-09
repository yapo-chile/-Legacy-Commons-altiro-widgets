import { IAdParams } from "./IAdParams";
import { html, TemplateResult } from '@nutmeg/seed';

export class AdParams implements IAdParams{
    rooms?: string;
    surface?: string;
    bathrooms?: string;
    capacity?: string;

    private static init(stringParams: string) {
        let params = {
            rooms: '',
            bathrooms: '',
            surface: '',
            capacity: '',
        };

        if (stringParams) {
            const parsedParams:IAdParams = JSON.parse(stringParams);
            params.rooms = parsedParams.rooms ? parsedParams.rooms : '';
            params.surface = parsedParams.surface ? parsedParams.surface : '';
            params.bathrooms = parsedParams.bathrooms ? parsedParams.bathrooms : '';
            params.capacity = parsedParams.capacity ? parsedParams.capacity : '';
        }

        return params;
    }

    /** Styling for the component. */
    public static styles(): TemplateResult {
        return html`
            <style>
                .listingItem-infoAdParam {
                    font-size: 10px;
                    font-weight: 500; 
                    display: flex;
                    margin-right: 5px;
                }

                .listingItem-infoAdParam i {
                    font-size: 11px;
                    align-self: center;
                }

                .listingItem-infoAdParam span {
                    align-self: center;
                    margin-left: 3px;
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
        let icon = document.createElement('I');
        let span = document.createElement('SPAN');
        let text = data.replace(/m2/g, 'm' + '<sup>2</sup>');
        span.innerHTML = text;

        switch(type) {
            case 'rooms': {
                icon.className = 'fal fa-bed';
                break;
            }
            case 'bathrooms': {
                icon.className = 'fal fa-bath';
                break;
            }

            case 'capacity': {
                icon.className = 'fal fa-users';
                break;
            }

            case 'surface': {
                icon.className = 'fal fa-expand';
                break;
            }
        }

        return html`
            <li class="listingItem-infoAdParam">
                ${icon}
                ${span}
            </li>
        `;
    }

    public static template (params:string): TemplateResult {
        const paramsParsed:any = this.init(params);

        return html`
            ${Object.keys(paramsParsed).map(element => {
                if (paramsParsed[element] != '') {
                    return this.renderParam(element, paramsParsed[element])
                }

                return ''
            })}
        `
    }
}