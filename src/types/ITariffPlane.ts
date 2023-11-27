export interface ITariffPlane {
  tariffPlaneTitle: string;
  tariffPlanePrice: string;
  tariffFeatures: string[];
  cardType: "simple" | "premium";
}
