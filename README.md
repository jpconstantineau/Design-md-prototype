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

## Composio pages and extended gallery

Open [Composio Light](composio-light.html) or [Composio Dark](composio-dark.html),
or use the two new links in the theme selector. The original eight themes also support
direct links such as `index.html?theme=hmi-dark`. Reloading preserves that URL's theme.

The new gallery is appended below the original examples on every page. It adds feature
and toolkit cards, testimonial and spotlight layouts, a four-pane terminal, a code block
with copy feedback, email validation, password reveal, workspace filtering, read-only and
disabled fields, a notification switch, reset/save feedback, disclosure panels, navigation,
spacing/radius/elevation samples, and a live viewport indicator. All data is illustrative;
the form sends nothing and its values are not persisted beyond the page session.

`gallery.css` scopes the additions to `x-` classes. Existing components retain their styling
in the original themes. Composio overrides are scoped to those two themes only. Gallery
toolkit columns change from one to two at 640px, then four at 1024px. Terminal panes use
two columns from 640px, and the gallery menu switches to inline links at 768px. Existing
layout breakpoints remain unchanged, including a pre-existing narrow-width table overflow.

The implementation references the independent
[Composio design analysis](https://getdesign.md/composio/design-md) and its
[DESIGN.md source](https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/composio/DESIGN.md).
The dark theme follows its blue CTA and neutral surface palette; the light theme is our
adaptation. Links and focus outlines use a brighter blue in dark mode for legibility.
Muted and error colors are adjusted for readable examples. Font stacks use Inter/system
sans and JetBrains Mono/Consolas/monospace fallbacks; no licensed font files are bundled.
The guide's prose and preview disagree on some mobile boundaries; this implementation
uses explicit 640/768/1024px boundaries shown in the gallery's table.

`index.html` is the shared source. After changing shared markup, run:

```bash
node build-pages.cjs
```

This regenerates the two standalone Composio HTML pages with their default theme and title.
They share `styles.css`, `gallery.css`, `script.js`, and `gallery.js` and need no server build.
## HMI themes

Four additional options retain the original four presets: **HMI Light**, **HMI Dark**,
**HMI Light (color-blind)**, and **HMI Dark (color-blind)**.

The HMI presets use neutral gray surfaces, neutral normal/running states and controls,
and a general-purpose extension with colored Success, Warning, and Danger cards and pills.
Their backgrounds use a 14% semantic-color tint, with matching borders and headings.
Success is green in conventional themes and purple in color-blind themes; Warning and
Danger retain the theme's ochre/red or blue/orange colors. Primary pills use blue or teal,
while Neutral pills remain gray. Colors are deliberately reused beyond alarms in this
playground. High, medium, and low priorities have persistent P1/P2/P3
labels and octagon/triangle/square symbols in every HMI preset. Priority colors do not
encode acknowledgment state. These are static examples, not an operating alarm system.

| Role | Light | Dark | Color-blind light | Color-blind dark |
| --- | --- | --- | --- | --- |
| Canvas | `#d4d6d8` | `#202428` | `#d4d6d8` | `#202428` |
| Surface | `#eceeef` | `#2b3035` | `#eceeef` | `#2b3035` |
| P1 high | `#b22222` | `#ff9696` | `#9b4300` | `#ffba75` |
| P2 medium | `#775600` | `#f0ca62` | `#005f90` | `#78caff` |
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
