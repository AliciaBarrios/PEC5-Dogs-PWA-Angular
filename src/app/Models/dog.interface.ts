export interface Dog {
    id: string;
    name: string;
    bred_for: string;
    temperament: string;
    life_span: string;
    weight: {
        imperial: string,
        metric: string
    };
    height: {
        imperial: string,
        metric: string
    };
    reference_image_id: string;
    image_url:string;
}