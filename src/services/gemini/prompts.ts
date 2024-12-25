export const ANALYSIS_PROMPTS = {
  DEFAULT: 'Perform the calculation and provide the solution value.',
  SIMPLE: 'Perform the calculation and give only the final result.,with 1-5 words',
  STEP_BY_STEP: 'Perform the calculation step-by-step, with 1-5 words for each step.',
  SOLUTION: 'formula only concept answer.'
} as const;
