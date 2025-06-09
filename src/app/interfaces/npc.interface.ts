export interface NpcTradeOffer {
    id: string;
    name: string;
    path: string;
}

export interface NpcTrades {
    isMerchant: boolean;
    offer: NpcTradeOffer[];
}

export interface Npc {
    id: string;
    name: string;
    description: string;
    biome: string[];
    role: string[];
    image: string;
    details: {
        howToObtain: string;
        unlocks: string[];
        trades: NpcTrades;
        homeRequirements: string[];
        notes: string;
    };
}
