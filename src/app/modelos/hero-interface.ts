export interface IHero{
        response: string;
        id: number;
        name: string;
        powerstats: {
            intelligence: number;
            strength: number;
            speed: number;
            durability: number;
            power: number;
            combat: number;
        };
        images: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
        };
}

export interface IHeroDetalle{
            fullName: string;
            alterEgos: string;
            aliases: string [],
            placeofbirth: string;
            firstAppearance: string;
            publisher: string;
            alignment: string;
}