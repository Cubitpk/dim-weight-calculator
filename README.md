# `@cubitpack/dim-weight-calculator`

Zero-dependency JavaScript/TypeScript utility for calculating **USPS, UPS, and FedEx Dimensional (DIM) Weight** and e-commerce parcel billable weight tiers, maintained by **[CubitPack](https://cubitpack.com)** (*Custom packaging, made simple.*).

## Try the Interactive Browser Calculators (Zero Login)

- **[Free Dimensional Weight Calculator](https://cubitpack.com/tools/dimensional-weight-calculator)**
- **[Inside Box Size Calculator (`L × W × D`)](https://cubitpack.com/tools/box-size-calculator)**
- **[Interactive SVG Box Dieline Templates](https://cubitpack.com/tools/dieline-templates)**
- **[Print Your AI Packaging Design (Free Vector & Dieline Rebuild)](https://cubitpack.com/print-your-ai-design)**
- **[Custom Mailer Boxes](https://cubitpack.com/custom-mailer-boxes)** · **[Custom Shipping Boxes](https://cubitpack.com/custom-shipping-boxes)** · **[56 Structural Box Styles](https://cubitpack.com/box-styles)**

## Formula

$$\text{DIM Weight (lb)} = \left\lceil \frac{L \times W \times H}{\text{Divisor}} \right\rceil$$

## Usage

```js
const { calcDimWeightLb, calcBillableWeightLb } = require('@cubitpack/dim-weight-calculator');

// 12" x 10" x 6" Custom Mailer Box (720 cu in) with commercial divisor 139:
console.log(calcDimWeightLb(12, 10, 6, 139)); // 6 lb
```

## License

MIT © [CubitPack LLC](https://cubitpack.com)
