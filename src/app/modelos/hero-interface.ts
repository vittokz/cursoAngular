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