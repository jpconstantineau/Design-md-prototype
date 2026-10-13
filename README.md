# Design-md-prototype

This repository contains a small static HTML/CSS/JavaScript site that showcases CSS color tokens and supports both light and dark themes for quick design testing.

## Local preview

Open `index.html` directly in a browser, or serve the folder with a static web server such as:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in a browser.

## GitHub Pages

The repository is configured to publish as a GitHub Pages site via the Pages deployment workflow in `.github/workflows/deploy-pages.yml`.

## Included

- Light/dark theme switching
- Multiple theme presets for visual comparison
- Semantic examples for buttons, fields, badges, alerts, tables, and typography
## HMI themes

Four additional options retain the original four presets: **HMI Light**, **HMI Dark**,
**HMI Light (color-blind)**, and **HMI Dark (color-blind)**.

The HMI presets use neutral gray surfaces, neutral normal/running states and controls,
and reserved alarm hues. The component gallery stays neutral except for token swatches
and the dedicated alarm examples. High, medium, and low priorities have persistent P1/P2/P3
labels and octagon/triangle/square symbols in every HMI preset. Priority colors do not
encode acknowledgment state. These are static examples, not an operating alarm system.

| Role | Light | Dark | Color-blind light | Color-blind dark |
| --- | --- | --- | --- | --- |
| Canvas | `#d4d6d8` | `#202428` | `#d4d6d8` | `#202428` |
| Surface | `#eceeef` | `#2b3035` | `#eceeef` | `#2b3035` |
| P1 high | `#b22222` | `#ff9696` | `#9b4300` | `#ffba75` |
| P2 medium | `#775600` | `#f0ca62` | `#00679a` | `#78caff` |
| P3 low | `#75409a` | `#d6aff5` | `#75409a` | `#d6aff5` |

The conventional palette uses red, ochre, and purple. The color-blind variants replace
red/ochre with orange/blue, avoiding red-green discrimination. Shapes and text remain
necessary for all color vision types, including monochromatic vision; no palette is
universally distinguishable by hue alone. Dark variants lift foreground luminance and
use dark text on light controls and symbols. Keyboard focus uses a visible solid outline.

### Research and interpretation

- [ISA's high-performance HMI discussion](https://www.isa.org/intech-home/2023/april-2023/features/how-dcs-migration-improves-operator-experience)
  describes gray backgrounds and sparse color to emphasize abnormal conditions in the
  context of ISA-101. This informs the neutral surfaces and normal states here.
- [EEMUA Publication 201, third edition](https://www.eemua.org/products/publications/digital/eemua-publication-201)
  covers control-room graphics and human factors. Its public
  [contents](https://www.eemua.org/getattachment/4c0caa84-0123-423f-b663-a680af961783/Contents-EEMUA-Publications-201-Edition3-July-2019.pdf)
  identify background color, graphic color schemes, and symbols in sections 4.4.1-4.4.4.
  The public material does not provide a complete normative palette; the light/dark
  pairing and symbol treatment are project design decisions in that context.
- [IEC 62682:2022](https://webstore.iec.ch/en/publication/65543) addresses alarm management
  and presentation of abnormal conditions to support operator response. This motivates
  the separate alarm examples and explicit priorities; the public overview does not
  prescribe these hex values or establish their compliance.

Research used public publisher material, not the complete paid standards. All hex values,
priority mappings, and accessibility variants are project adaptations, not certified or
standard-mandated palettes. Deployment in a real control room requires the site's alarm
philosophy, full standards review, and operator evaluation under actual lighting and displays.
