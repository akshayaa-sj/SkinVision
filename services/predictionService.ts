
import { PsoriasisType, PredictionResult } from '../types';

const psoriasisTypes = Object.values(PsoriasisType);

const explanations: Record<PsoriasisType, string> = {
  [PsoriasisType.Plaque]: "The analysis indicates features consistent with Plaque Psoriasis, characterized by well-defined, raised red patches with silvery scales. The highlighted areas on the heatmap show the most prominent characteristics.",
  [PsoriasisType.Guttate]: "The model identified multiple small, red, drop-like lesions, which are hallmarks of Guttate Psoriasis. This condition often follows a bacterial infection.",
  [PsoriasisType.Inverse]: "The prediction points towards Inverse Psoriasis, typically found in skin folds. The affected skin appears smooth and red, without the scaling seen in plaque psoriasis.",
  [PsoriasisType.Pustular]: "The presence of non-infectious pus-filled blisters suggests Pustular Psoriasis. The heatmap indicates the areas with the most significant pustular activity.",
  [PsoriasisType.Erythrodermic]: "The widespread inflammatory redness across the skin sample is indicative of Erythrodermic Psoriasis, a severe form that requires immediate medical attention.",
  [PsoriasisType.RareVariant]: "The features detected do not align perfectly with common psoriasis types, suggesting a possible rare variant. A consultation with a dermatologist is highly recommended for an accurate diagnosis.",
};

// This function mocks the backend API call.
export const getPsoriasisPrediction = async (imageFile: File): Promise<PredictionResult> => {
  console.log('Simulating prediction for:', imageFile.name);
  
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomType = psoriasisTypes[Math.floor(Math.random() * psoriasisTypes.length)];
      const randomConfidence = Math.random() * (0.98 - 0.75) + 0.75;
      
      const result: PredictionResult = {
        psoriasisType: randomType,
        confidenceScore: parseFloat(randomConfidence.toFixed(2)),
        heatmapUrl: `https://picsum.photos/seed/${Date.now()}/400/300`, // A unique image for the heatmap
        explanation: explanations[randomType],
      };
      
      console.log('Simulated result:', result);
      resolve(result);
    }, 2500); // Simulate a 2.5 second network delay
  });
};
