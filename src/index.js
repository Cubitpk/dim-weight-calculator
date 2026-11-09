/**
 * CubitPack Dimensional (DIM) Weight & Box Size Calculator Utilities
 * Interactive web tools:
 * - https://cubitpack.com/tools/dimensional-weight-calculator
 * - https://cubitpack.com/tools/box-size-calculator
 * - https://cubitpack.com/tools/dieline-templates
 */

function calcDimWeightLb(lengthIn, widthIn, heightIn, divisor = 139) {
  const cubicInches = Number(lengthIn) * Number(widthIn) * Number(heightIn);
  return Math.ceil(cubicInches / Number(divisor));
}

function calcBillableWeightLb(actualWeightLb, lengthIn, widthIn, heightIn, divisor = 139) {
  const dimWeight = calcDimWeightLb(lengthIn, widthIn, heightIn, divisor);
  return Math.max(Math.ceil(Number(actualWeightLb)), dimWeight);
}

module.exports = { calcDimWeightLb, calcBillableWeightLb };
