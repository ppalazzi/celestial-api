export interface MessierObject {
    messierNumber: number;
    name: string;
    alternateNames: string[];
    NGC: string;
    type: string;
    constellation: string;
    rightAscension: string;
    declination: string;
    magnitude: number;
    size: string;
    distance: number;
    viewingSeason: string;
    viewingDifficulty: string;
    image: string;
}

export interface Info {
    description: string;
    credit: string;
    license: string;
    notice: string;
}
