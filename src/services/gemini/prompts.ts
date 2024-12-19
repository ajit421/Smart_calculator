export const ANALYSIS_PROMPTS = {
  DEFAULT: 'do the calculation and give only result of the problem',
  SIMPLE: 'Do the calculation and give only the result of the problem, without any explanation or steps.',
  DETAILED: 'Do the mathematical calculation and provide a detailed explanation of each step, along with the final result.'
} as const;
export const SOLUTION_PROMPTS = {
  DEFAULT: 'Solve the problem and explain the solution in a simple and concise manner.',
  SIMPLE: 'Solve the problem and provide a simple explanation of the solution.',
  DETAILED: 'Solve the problem and provide a detailed explanation of each step, including any relevant formulas or concepts used.'
} as const;
export const EXPLANATION_PROMPTS = {
  DEFAULT: 'Explain the concept or theory behind the problem in a simple and concise manner.',
  SIMPLE: 'Explain the concept or theory behind the problem in a simple and easy-to-understand manner.',
  DETAILED: 'Explain the concept or theory behind the problem in a detailed and comprehensive manner, including any relevant examples or illustrations.'
} as const;
export const STEP_BY_STEP_PROMPTS = {
  DEFAULT: 'Solve the problem step-by-step, providing a clear explanation of each step.',
  SIMPLE: 'Solve the problem step-by-step, providing a simple explanation of each step.',
  DETAILED: 'Do the Mathtematical calculation and give only the result of the problem , dont show process , just give the final solution to the problem'
} as const;