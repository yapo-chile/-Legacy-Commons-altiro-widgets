import { IAdParams } from "./IAdParams";
import { html, TemplateResult } from '@nutmeg/seed';

export class AdParams implements IAdParams{
    rooms?: string;
    surface?: string;
    bathrooms?: string;

    constructor (stringParams: string) {
        const parsedParams:IAdParams = JSON.parse(stringParams);
        this.rooms = parsedParams.rooms;
        this.surface = parsedParams.surface;
        this.bathrooms = parsedParams.bathrooms;
    }

    /** Styling for the component. */
    public styles(): TemplateResult {
        return html`
            <style>
                .listingItem-infoAdParam {
                    font-size: 12px;
                    display: flex;
                    margin-right: 10px;
                }

                .listingItem-infoAdParam span {
                    margin-left: 5px;
                    display: inline-block;
                }

                .listingItem-infoAdParam:last-child {
                    margin-right: 0;
                }
            </style>
        `;
    }

    public template (): TemplateResult {
        return html`
            <li class="listingItem-infoAdParam">
                <i class="fal fa-bed"></i> 
                <span> ${ this.rooms } </span>
            </li>
            <li class="listingItem-infoAdParam">
                <i class="fal fa-bath"></i>
                <span> ${ this.bathrooms } </span>
            </li>
            <li class="listingItem-infoAdParam">
                <i class="fal fa-expand"></i> 
                <span> ${ this.surface } </span>
            </li>
        `
    }
}