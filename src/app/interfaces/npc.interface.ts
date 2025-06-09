export interface Npc {
    id: string;
    name: string;
    description: string;
    role: string[];
    biome: string[];
    image: string;
    details: {
        unlocks: string[];
        howToObtain: string;
        trades: {
            isMerchant: boolean;
            offer: string[];
        };
        homeRequirements: string[];
        notes: string;
    };
}
