
export enum PsoriasisType {
  Plaque = "Plaque Psoriasis",
  Guttate = "Guttate Psoriasis",
  Inverse = "Inverse Psoriasis",
  Pustular = "Pustular Psoriasis",
  Erythrodermic = "Erythrodermic Psoriasis",
  RareVariant = "Rare Psoriasis Variant",
}

export interface PredictionResult {
  psoriasisType: PsoriasisType;
  confidenceScore: number;
  heatmapUrl: string;
  explanation: string;
}

export interface PsoriasisInfo {
  name: PsoriasisType;
  image: string;
  symptoms: string[];
  treatment: string;
}
