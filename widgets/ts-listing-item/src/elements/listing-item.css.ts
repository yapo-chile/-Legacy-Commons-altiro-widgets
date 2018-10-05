import {html} from '@polymer/lit-element';
const css = (url:string):any => { return html` 
<style>
.listingItem-box {
    background-color: var(--listing-item-background-color, #FFFFFF);
    border-bottom: 2px solid #F8F8F8;
    border-top: 2px solid #F8F8F8;
    border-radius: 5px;
    color: #000000;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    height: 140px;
    width: 100%;
}

.listingItem-box .__mainColumn{
    display: flex;
    flex-direction: column;
}

.listingItem-box .__hidden{
    display: none;
}

.listingItem-image {
    min-width: 122px;
    max-width: 122px;
    position: relative;
}

.listingItem-image::after {
    background: -moz-linear-gradient(270deg, rgba(153,218,255,0) 0%, rgba(0,0,0,1) 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(153,218,255,0)), color-stop(100%, rgba(0,0,0,1)));
    background: -webkit-linear-gradient(270deg, rgba(153,218,255,0) 0%, rgba(0,0,0,1) 100%);
    background: -o-linear-gradient(270deg, rgba(153,218,255,0) 0%, rgba(0,0,0,1) 100%);
    background: -ms-linear-gradient(270deg, rgba(153,218,255,0) 0%, rgba(0,0,0,1) 100%);
    background: linear-gradient(180deg, rgba(153,218,255,0) 0%, rgba(0,0,0,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#99DAFF', endColorstr='#000000',GradientType=0 );
    bottom: 0;
    content: '';
    height: 70px;
    opacity: 0.1;
    position: absolute;
    width: 100%;
}

.listingItem-image img {
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
}

.listingItem-imageLabel {
    background-color: #5f259f;
    border-radius: 5px;
    color: #FFFFFF;
    font-size: 10px;
    left: 5%;
    padding: 5px;
    position: absolute;
    top: 5%;
}

.listingItem-info {
    flex-grow: 1;
    justify-content: space-between;
    padding: 10px;
    padding-top: 19px;
    padding-right: 0;
    max-width: 85%;
}

.listingItem-infoTitle {
    font-size: 14px;
    font-weight: 500;
    height: 31px;
    line-height: 15px;
    margin: 0;
    overflow: hidden;
}

.listingItem-infoPrice {
    font-size: 18px;
    font-weight: bold;
}

.listingItem-infoPrice .fa-arrow-to-bottom {
    color: #52c300;
    margin-right: 5px;
}

.listingItem-infoAdParams {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.listingItem-infoBottom {
    font-size: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.listingItem-infoBottomDate {
    align-self: flex-end;
    color: #666666;
    font-size: 10px;
    font-weight: normal;
    margin-right: 10px;
}

.listingItem-infoBottomType {
    align-self: flex-end;
    color: #4376b0;
    font-size: 9px;
    text-transform: uppercase;
    justify-content: center;
}

.listingItem-infoIcons {
    font-size: 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 3px;
    min-width: 20px;
    max-width: 20px;
}

.listingItem-infoLocation {
    flex-grow: 1;
    font-size: 13px;
    font-weight: 100;
    display: none;
    flex-direction: column;
    padding-left: 30px;
    justify-content: center;
    width: 35%;
}

.listingItem-infoLocation .__locationRow {
    margin-bottom: 10px;
}

.listingItem-infoLocation .__locationRow:last-child {
    margin-bottom: 0;
}

.listingItem-infoLastBottom {
    color: #4376b0;
}

@media (min-width: 700px) {
    .listingItem-info {
        min-width: 45%;
        max-width: 45%;
    }

    .listingItem-infoBottom {
        justify-content: flex-start;
    }

    .listingItem-infoLocation {
        display: flex;
    }
}
/* This rule only applies for Safari*/
@media not all and (min-resolution:.001dpcm) {
    @supports (-webkit-appearance:none) {
        .listingItem-image img {
            display:none;
        }
        .listingItem-image {
            background-image: url("${url}");
            background-size: cover;
            background-position: center center;
        }
    }
}
</style>
`

};

export default css;
