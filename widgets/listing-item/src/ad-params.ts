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
        let icon = document.createElement('I');

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
                <span>${data}</span>
            </li>
        `;
    }

    public static template (params:string): TemplateResult {
        const paramsParsed:any = this.init(params);

        return html`
            ${Object.keys(paramsParsed).map(element => this.renderParam(element, paramsParsed[element]))}
        `
    }
}