export interface NpcTradeOffer {
    id: string;
    category: string;
}

export interface NpcTrades {
    isMerchant: boolean;
    offer: NpcTradeOffer[];
}

export interface Npc {
    id: string;
    name: string;
    category: string;
    description: string;
    biome: string[];
    role: string[];
    details: {
        howToObtain: string;
        unlocks: string[];
        trades: NpcTrades;
        homeRequirements: string[];
        notes: string;
    };
}
