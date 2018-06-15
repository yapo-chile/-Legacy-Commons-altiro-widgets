import { GalleryAd } from './GalleryAd';

export class GalleryService {
    data: GalleryAd[];

    constructor() {
        this.data = [
            {
                "id": 51813715,
                "title": "Patente de Botillería Santiago Centro",
                "image": "https://www.yapo.cl/img/empleos-224.png",
                "link": "https://www.yapo.cl/region_metropolitana/negocios_maquinaria_construccion/patente_de_botilleria_santiago_centro_51813715.htm?ca=15_s",
                "price": "$ 10.990.000"
            },
            {
                "id": 54070776,
                "title": "Sillón de cuero Natuzzi. 3 Cuerpos",
                "image": "https://img.yapo.cl/images/93/9341101030.jpg",
                "link": "https://www.yapo.cl/region_metropolitana/muebles/sillon_de_cuero_natuzzi__3_cuerpos_54070776.htm?ca=15_s",
                "price": "$ 290.000"
            },
            {
                "id": 52821719,
                "title": "Volkswagen gol 2012",
                "image": "https://img.yapo.cl/images/48/4841438079.jpg",
                "link": "https://www.yapo.cl/region_metropolitana/autos/volkswagen_gol_2012_52821719.htm?ca=15_s",
                "price": "$ 4.300.000"
            },
            {
                "id": 49134079,
                "title": "Residencial estudiante 1 cupo pieza",
                "image": "https://img.yapo.cl/images/94/9410194605.jpg",
                "link": "https://www.yapo.cl/region_metropolitana/arrendar/residencial_estudiante_1_cupo_pieza_49134079.htm?ca=15_s",
                "price": "$ 170.000"
            },
            {
                "id": 53549317,
                "title": "Departamento 3 dormitorios metro Mirador",
                "image": "https://img.yapo.cl/images/74/7432224199.jpg",
                "link": "https://www.yapo.cl/region_metropolitana/comprar/departamento_3_dormitorios_metro_mirador_53549317.htm?ca=15_s",
                "price": "$ 63.000.000"
            }
        ];
    }
    public requestData(): Promise<GalleryAd[]> {
        return new Promise((resolve) => resolve(this.data));
    }
}