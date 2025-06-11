export interface NpcTradeOffer {
    id: string;
    category: string;
}

export interface NpcHomeRequirement {
    id: string;
    category: string;
}

export interface NpcTrades {
    isMerchant: boolean;
    offer: NpcTradeOffer[];
}

export interface NpcDetails {
    howToObtain: string;
    unlocks: string[];
    trades: NpcTrades;
    homeRequirements: NpcHomeRequirement[];
    notes: string;
}

export interface Npc {
    id: string;
    name: string;
    category: string;
    description: string;
    biome: string[];
    role: string[];
    details: NpcDetails;
}
