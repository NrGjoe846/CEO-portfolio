export interface LeadershipPrinciple {
  title: string;
  description: string;
}

export interface CeoPrinciple {
  title: string;
  description: string;
}

export interface IndustryImpact {
  title: string;
  description: string;
}

export interface EcosystemStage {
  step: string;
  title: string;
  description: string;
}

export interface ApproachStep {
  step: string;
  title: string;
  description: string;
}

export interface RoadmapMilestone {
  year: string;
  title: string;
  points: string[];
}

export interface FlagshipProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  points?: string[];
  opportunityOrVisionLabel?: string;
  opportunityOrVisionText: string;
  accent: string;
  status: string;
}

export interface OrgPillar {
  title: string;
  tags: string[];
}
