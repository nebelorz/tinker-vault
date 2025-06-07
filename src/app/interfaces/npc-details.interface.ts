export interface NpcDetails {
    id: string;
    name: string;
    image: string;
    biomes: string[];
    roles: string[];
    howToObtain: string;
    trades: {
        isMerchant: boolean;
        itemsSold: string[];
    };
    requirements: string[];
    loot: string[];
    notes: string;
}
