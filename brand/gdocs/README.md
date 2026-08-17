# Bina Labs - Google Docs template kit

The assets and setup steps for building a branded document template in Google Docs
(proposals, scopes of work, one-pagers).

## What's in here

| File | What it is | Size |
|---|---|---|
| `bina-header-rtl.png` | Header band - navy panel on the **right**, for Hebrew documents | 2480×354 px (8.27 × 1.18 in) |
| `bina-header-ltr.png` | Same band, panel on the **left**, for English documents | 2480×354 px (8.27 × 1.18 in) |
| `bina-footer-rtl.png` | **Footer band** - email left, site right (Hebrew) | 2480×165 px (8.27 × 0.55 in) |
| `bina-footer-ltr.png` | **Footer band** - site left, email right (English) | 2480×165 px (8.27 × 0.55 in) |
| `bina-footer-*-bleed.png` | Taller variants, navy continues below the text - see the note in Step 2 | 2480×285 px (8.27 × 0.95 in) |
| `_source-bands.html` | Source file the bands were rendered from - edit and re-export | - |

**Why PNG:** Google Docs can't draw gradients, rounded corners, or edge-to-edge bands -
styled headers and footers there are **always** an image, and Docs doesn't support SVG.
PNG with transparency is the format that works. The files are 300 DPI at full A4 width,
so they stay sharp in print and in PDF export. The header has a transparent background,
so the navy panel floats on the page on its own.

---

## Step 0 - Page setup

1. New document → **File → Page setup** → paper size **A4**.
2. Margins: top `1.26"` · **bottom `0`** · left and right `0.7"`.

   The bottom margin really is `0`, and it has to be: it's the line Docs clips footer images
   against, so any positive value stops the band short of the paper edge. Text is held off the
   band by an empty paragraph inside the footer instead - see Step 2.

> All measurements below are in **inches**, matching the Docs fields. If your Docs is set to
> centimetres, the cm equivalents are in the conversion table at the bottom of this file.
3. For Hebrew documents, make sure the RTL direction buttons appear in the toolbar.
   If not: **Tools → Preferences → Languages** and add Hebrew.

## Step 1 - Header

1. **Insert → Headers & footers → Header**.
2. Inside the header: **Insert → Image → Upload from computer** → `bina-header-rtl.png`.
3. Click the image → three dots → **All image options**. In the sidebar:
   - **Text wrapping**: `Behind text` · **Margin**: `0`
   - **Position**: `Fix position on page`
   - **Size**: width `8.27"`, height `1.18"`
   - **Position X/Y** (measured from the page's top-left corner): X = `0` · Y = `0`

   `Behind text` matters here: with `Wrap text` the image still reserves its full height inside
   the header and shoves the body text down the page. `Behind text` takes it out of the flow
   entirely, so the header collapses to a single text line.
4. **Format → Headers & footers → More options**: `Header from top` = `0`.
5. **Collapse the header's leftover paragraph.** Docs keeps one text line in the header, and at
   the default 11pt it costs about a quarter inch. To shrink it:
   - click into the header and **press space once** - you need a real character, because
     formatting applied to an empty paragraph is discarded the moment you click away
     (this is why setting the size to `1` on an empty header "doesn't stick")
   - **select that space** (Shift + ←) and set the font size to `1`
   - **Format → Line & paragraph spacing → Custom spacing** → `Space before` = `0`,
     `Space after` = `0`, line spacing `1`

   Leave the space character in place. Deleting it takes the formatting with it.

> Want a different first page? Tick **"Different first page"** in that same dialog,
> and paste the image into the header for the remaining pages too.

> **Check that the header repeats.** Add enough text to reach page 2. If the band is missing
> there, `Fix position on page` is anchoring it to page 1 - switch the header image to
> `Wrap text` + `Move with text` and position it by dragging, exactly as in Step 2 below.
> `Behind text` keeps the header from reserving vertical space, but only content in the
> header's own flow repeats across pages, so repetition wins if you have to choose.

## Step 2 - Footer

Identical to the header, with two differences - the image is `bina-footer-rtl.png`,
and Y is measured down from the top:

**The image must be pasted inside the footer itself.** Double-click the very bottom of the
page first and make sure the cursor is blinking *in the footer* before you insert. An image
dropped into the body and dragged down to look like a footer will only ever appear on page 1.

Use **`bina-footer-rtl.png`** (or the `-ltr-` version) - the plain `0.55"` band.

**This exact combination is what makes the band reach the paper edge on every page.** Three of
these four settings are counter-intuitive, and getting any one of them wrong leaves a white
strip that no amount of nudging will close:

| Setting | Value | Why |
|---|---|---|
| **File → Page setup → Bottom margin** | `0` | The bottom margin is the line Docs clips footer images against. While it's `0.7"`, the image physically cannot cross it. |
| **Format → Headers & footers → Footer (inches from bottom)** | `0` | Puts the footer's anchor paragraph at the page bottom. |
| **Text wrapping** | `Behind text` | With `Wrap text` the image *reserves height inside the footer* - push it down and the footer grows with it, so the image and the edge never converge. `Behind text` takes it out of the flow so it moves against the page instead. |
| **Position options** | `Move with text` | `Fix position on page` renders on page 1 only. |

Then:

- **Margin**: `0` - the dropdown in the floating image toolbar, which Docs defaults to `1/8"`.
  Left at the default it puts a white gap on all four sides.
- **Size**: width `8.27"`, height `0.55"`
- **X** = `-0.7"` - pulls the image left out of the text column, onto the page edge.
- **Y** - don't calculate it. Select the image and hold the **↓ arrow key** until the band is
  flush with the bottom edge. With the settings above it will travel all the way.

**Keeping body text off the band.** With the bottom margin at `0` there's no margin left to hold
text back, and `Behind text` means the image no longer reserves any height. So the spacing comes
from the footer instead: **add an empty paragraph above the image's line inside the footer** and
set its font size to about `14-18pt`. The footer's height is what pushes body text up, so that
empty line becomes the spacing dial. Raise or lower its size to taste.

> The `-bleed` variants (`bina-footer-*-bleed.png`) are a fallback from before this combination
> was found - they carry the navy `0.4"` past the text so a clipped band still looks solid.
> With the settings above you don't need them.

> **Sanity check on Y.** The anchor paragraph is the footer's own line, already at the bottom
> of the page, so Y is a small number. A large positive Y like `7.6"` means the image is
> anchored to a body paragraph near the top of the page - cut it (Ctrl+X), open the footer,
> and paste it there.

> **Why not `Fix position on page`.** It anchors an image to one specific page, so it appears
> on that page only. Repeating content has to sit in the footer's own flow, which means
> `Move with text`.

> If a white strip remains at the edge, the image margin isn't `0`, or the image needs another
> nudge outward. Full-bleed footers are fussier than headers in Docs - a known quirk, not a
> problem with the file.

## Step 3 - Bullets

Google Docs can't use an image as a bullet - a bullet is a **text character**, and it gets
colored separately. These are the brand characters (copy them from `bullets.txt`):

| Level | Character | Type this in the picker | Color |
|---|---|---|---|
| 1 | `▪` | `25aa` | lime `#9dff4d` |
| 2 | `◦` | `25e6` | slate `#5a6b7d` |
| 3 | `–` | `2013` | slate `#5a6b7d` |

**How to set them up:**

1. Select the list → **Format → Bullets & numbering → List options → More bullets**.
2. In the search box on the right, type the **hex code** from the table above - `25aa`,
   without the `U+` prefix - and the picker jumps straight to that one character.

   Don't search by keyword. `square` returns hundreds of results spread across categories,
   which is why the character seems missing. If the code doesn't work either, use the
   drawing box next to the search field - sketch a filled square and the results narrow
   to a handful of shapes.
3. **Coloring only the bullet:** click any one bullet - Docs automatically selects **every**
   bullet at that level, without the text. Now pick **Text color** → Custom → `9dff4d`.
   This is the only way to color bullets without recoloring the lines themselves.
4. Repeat 1-3 for levels 2 and 3 (Tab demotes a line to the next level).

### Important - why this isn't fully "automatic"

**Google Docs cannot save custom bullets as a default style.** The
*Format → Paragraph styles → Options → Save as my default styles* menu stores headings and
normal text only - **not** lists. That's a Docs limitation, not something a setting can work around.

What actually works:

- **Keep a formatted example list inside the template itself.** Pressing Enter at the end of an
  item makes the new line inherit the bullet and its color, so every document opened from the
  template arrives with the bullets ready.
- For a new list elsewhere in the document: select an existing item → **Paint format** →
  brush it over the new list.

## Troubleshooting

**The body text starts way below the header band.** Four things stack up here, in order of
how much space they cost:

1. The header image is set to `Wrap text` - it reserves its full 1.18" inside the header.
   Switch it to `Behind text` (Step 1.3). This is usually most of the gap.
2. The header's leftover paragraph at 11pt - collapse it (Step 1.5).
3. `Header from top` isn't `0` (**Format → Headers & footers → More options**).
4. The Title / Heading style has space above it. Select the first line →
   **Format → Line & paragraph spacing → Custom spacing** → `Space before` = `0`.

**The band shows on page 1 only.** Two possible causes, in order of likelihood:

1. **The image is in the body, not in the header/footer.** Body content lives on one page and
   can't repeat. Open the image's Position panel - if it's `Move with text` and Y is a large
   number like `7.6"`, it's anchored to a body paragraph. Cut it (Ctrl+X), double-click into
   the header or footer so the cursor is blinking there, and paste. To confirm which region
   an image belongs to, click it and see which area becomes the active editing region.
2. **`Fix position on page`** pins an image to a single page and can never repeat. Switch to
   `Move with text`.

**The text sits too close to, or too far from, the footer band.** With the bottom margin at `0`
this is no longer a margin setting - it's the empty paragraph above the image inside the footer.
Change that paragraph's font size: bigger pushes body text further up, smaller lets it come
closer. See Step 2.

**Font size `1` in the header won't stick.** You're formatting an empty paragraph, and Docs
throws that away when focus leaves - the size was never applied to anything. Type a space
first, select it, then set the size. See Step 1.5.

Don't fix it by shrinking the top page margin below `1.26"` - the band is `1.18"` tall,
so text would start running into it.

**Pasted body text all came in as Heading 6 (or any other style).** A paste adopts the
paragraph style at the insertion point. You pasted while the cursor was on a Heading 6 line -
likely the date line or an empty paragraph left behind by one. Undo, click into a paragraph
whose style dropdown reads `Normal text`, and paste again. To fix it after the fact: select the
pasted block and set the style dropdown to `Normal text`, then re-apply the headings.

**The footer band won't reach the bottom edge - a white strip survives even in the PDF.**
Don't chase it with the Y value; Y is not the problem. Check the four settings in the Step 2
table, in this order:

1. **Bottom page margin is `0`.** Any positive value is a line the image cannot cross. This is
   the single most common cause.
2. **Text wrapping is `Behind text`.** On `Wrap text` the image reserves height inside the
   footer, so nudging it down makes the footer grow downward too - the image and the edge chase
   each other and never meet. The tell is that nudging seems to move the footer rather than the
   image.
3. **`Footer from bottom` = `0`.**
4. **Image margin = `0`** in the floating toolbar (Docs defaults it to `1/8"`). This one also
   causes a white strip on the left and right edges.

**A white strip on the left or right edge.** The image margin isn't `0`, or X isn't `-0.7"`.
Recheck both.

## Step 4 - Text styles (recommended)

The brand's original fonts (Helvetica Neue / JetBrains Mono) don't exist in Docs.
The closest equivalents available there:

| Docs style slot | Used for | Font | Size | Weight | Color | Space before / after |
|---|---|---|---|---|---|---|
| Title | document title | Arial | 22 | Bold | ink `#0a1628` | `0` / `6` |
| Subtitle | subtitle line | Roboto Mono | 10 | Regular | slate `#5a6b7d` | `0` / `18` |
| Heading 1 | section | Arial | 14 | Bold | ink `#0a1628` + lime rule | `18` / `6` |
| Heading 2 | sub-section | Arial | 12 | Bold | teal `#17506b` | `14` / `4` |
| Heading 3 | minor heading | Arial | 11 | Bold | slate `#5a6b7d` | `10` / `2` |
| Normal text | body | Arial | 11 | Regular | ink `#0a1628` | `0` / `8` |
| **Heading 6** | **secondary text / date** | Roboto Mono | 9 | Regular | slate `#5a6b7d` | `0` / `0` |

### Making the levels distinguishable

Three near-black headings at 14 / 12 / 11pt read as one grey mass. The palette above pulls them
apart by **color** rather than by size, using colors already in the brand:

- **ink `#0a1628`** - Title, Heading 1, body
- **teal `#17506b`** - Heading 2 (this is the light end of the footer gradient)
- **slate `#5a6b7d`** - Heading 3, subtitle, secondary text

Both teal and slate clear 5:1 contrast on white, so nothing gets hard to read.

**The lime rule under Heading 1** is what gives the biggest visual break, and it costs nothing
to maintain: with the heading selected, **Format → Paragraph styles → Borders and shading** →
bottom border only, width `1pt`, color `#9dff4d` → Apply. Then run "Update to match" so every
Heading 1 gets it. This mirrors the rule under section headings in the HTML template.

> **Never set lime as text color.** `#9dff4d` on white is about 1.5:1 contrast - effectively
> invisible. Lime belongs on rules, bullets, and table accents, or as text on the navy panel.

### Secondary text - and why to think twice about the Heading 6 slot

Docs only offers Normal text, Title, Subtitle and Heading 1-6. There's no "secondary" or
"caption" style, and the list can't be extended - so the only way to get a *defined* secondary
style is to repurpose an unused heading level, normally Heading 6.

**The catch, and it bites hard in a paste-driven workflow:** a paste inherits the paragraph
style at the cursor. Paste markdown while the insertion point sits on a Heading 6 line - the
date line, or an empty paragraph left over from one - and the entire pasted body arrives as
Heading 6, in 9pt slate mono. It looks like the paste ignored your styles; it didn't, it
obeyed the wrong one.

Two workable positions - pick one and stick to it:

- **Paste-heavy work (recommended):** leave Heading 6 alone as a real heading. Format secondary
  text by hand or with Paint format. Nothing to inherit wrongly, and one less trap.
- **Style purity:** keep Heading 6 as secondary text, but always click into a **Normal text**
  paragraph before pasting. Check the style dropdown reads "Normal text" first.

If you keep the slot: format the line Roboto Mono 9 / `#5a6b7d` with `0`/`0` spacing, select it,
then **Format → Paragraph styles → Heading 6 → Update to match**. Heading 6 lines then appear
in the document outline - right-click a line to remove it from the outline, per line.

Heading 3 is the same size as body text - it separates itself by being bold and slate rather
than by getting bigger, so three heading levels still fit in a short document without the
page turning into a size ladder.

Roboto Mono is added via **More fonts** in the font menu (it isn't in the default list).
If JetBrains Mono shows up there for you, use it - that's the brand's actual font.

**Use the built-in styles - don't hand-format headings.** Markdown paste maps `#`, `##` and
`###` onto Docs' own Heading 1 / 2 / 3, so anything you define on those styles is what pasted
content gets. Format a manual look instead and every paste will arrive plain.

**To save:** format one paragraph → select it → **Format → Paragraph styles → [style] → Update to match**.
Repeat per style, then **Paragraph styles → Options → Save as my default styles**.
(Unlike bullets, paragraph styles **do** persist.)

Set space before/after per style in **Format → Line & paragraph spacing → Custom spacing**
before you run "Update to match" - the spacing is saved along with the style.

## Step 5 - Pasting from Markdown

The intended workflow: write in markdown, then **Edit → Paste from Markdown** (or right-click →
Paste from Markdown) into a document made from the template. Turn on
**Tools → Preferences → Enable Markdown** so the option is available and so markdown
autoformats as you type.

**What carries over automatically:**

| Markdown | Becomes | Picks up your template styling? |
|---|---|---|
| `#` / `##` / `###` | Heading 1 / 2 / 3 | **Yes** - inherits whatever you defined in Step 4 |
| body paragraphs | Normal text | **Yes** |
| `**bold**`, `*italic*`, `[link](url)` | bold / italic / link | Yes |
| `- item` | Bulleted list | **No** - lands on the default `•` |
| `1. item` | Numbered list | Yes |
| `######` | Heading 6 = secondary text | Yes - handy for a date or caption line |

**Never start a heading with `1. `.** Docs reads the digit-plus-period as an ordered-list
marker, so `## 1. Section name` arrives as a *numbered list item that happens to be a heading*.
The number becomes a list glyph with its own formatting, outside the heading's color - which
means recoloring every one by hand.

Write the number without the period instead, and it stays ordinary heading text:

```
## 1. Section name     ← becomes a numbered list, glyph styled separately
## 1 · Section name    ← plain heading text, inherits the heading color
```

The same applies to a line starting `1)` or `-` when you didn't intend a list.

**Bullets are the one manual step.** Custom bullets aren't part of any paragraph style
(see Step 3), so a pasted list always comes in with Docs' default `•`. After pasting:

1. Select the pasted lists.
2. **Format → Bullets & numbering → List options → More bullets** → `25aa` → apply.
3. Click one bullet to select them all → **Text color** → `#9dff4d`.

Faster on repeat: keep one correctly-styled list item in the template, select it, hit
**Paint format**, and brush across the pasted lists. Two clicks instead of the dialog.

If a paste ever comes in wrong all round, it's usually a plain `Ctrl+V` of rendered text rather
than **Paste from Markdown** - that carries the source's own formatting instead of mapping to
your styles.

## Numbered lists - and why lists look different in different places

Same mechanics as bullets: the number is a character, colored separately from the text. Click
any number and Docs selects **every** number at that level without the text, then
**Text color** → teal `#17506b`.

**Why your lists don't match each other.** A bullet or number has no style of its own - it
inherits the text formatting of its own list item. A list item that is Normal text gets an
11pt ink bullet; one sitting under a Heading style gets a bullet in that heading's size and
color. That's the whole reason lists look inconsistent across the document, and it's why there
is nothing to "define" centrally.

**The rule that fixes it: every list item must be Normal text.** After a paste, select the
pasted lists and set the style dropdown to `Normal text` before doing anything else. Once all
items share one style, one recolor pass covers them and they stay consistent.

## Post-paste cleanup routine

Because bullets and glyph colors can't live in a style, every markdown paste needs the same
short pass. In order - it takes under a minute once it's muscle memory:

1. **Before pasting:** click into a `Normal text` paragraph. Confirm it in the style dropdown.
   This alone prevents the "everything came in as Heading 6" problem.
2. **Paste** with `Edit → Paste from Markdown`.
3. **Select the pasted lists** → set the style dropdown to `Normal text`, so every item shares
   one text style and the glyphs stop varying.
4. **Bullets:** select an example list item from the template → **Paint format** → brush across
   the pasted lists. This carries the glyph *and* the color in one go, and beats reopening the
   More bullets dialog every time.
5. **Numbers:** click any number → **Text color** → `#17506b`.
6. **Tables:** copy a styled table from the template and move the content in, or restyle in
   place (see below).

Keep a small **specimen block** at the bottom of the template - one Heading 1/2/3, a
three-level bulleted list, a numbered list, and a styled table - as the source you Paint format
from. Mark it with a Heading 6 line saying "specimen - delete before sending" and delete the
block when the document is finished.

> If this routine gets tedious, it can be collapsed into a one-click **Apps Script macro**
> (Extensions → Apps Script) that walks the document and applies list glyphs, colors, and table
> formatting. Worth doing if you paste often. Note that Apps Script exposes a fixed set of
> bullet glyph types rather than arbitrary characters, so the square bullet is available but
> the exact glyph color may still need the click-a-bullet pass.

## Page numbers

Worth knowing before you add them: the page number would normally live in the footer paragraph -
the one collapsed to 1pt in Step 2 - so it would be invisible, and un-collapsing it pushes your
body text up off the band.

Put them in the **header** instead, in the empty transparent area beside the logo panel:

1. **Insert → Page numbers** → choose a top-of-page option.
2. Style the number as Roboto Mono `9`, slate `#5a6b7d`.
3. Align it away from the logo - left for the RTL band (panel is on the right), right for the LTR band.

The header paragraph now holds real content, so skip the 1pt collapse from Step 1.5 for that
line and control the spacing with the top margin instead.

## Tables

Docs has no saved table styles - nothing to define once and reuse, exactly like bullets.
Style one table, keep it in the specimen block, and copy it when you need another.

### The design

The brand is a navy panel with a lime accent and a lot of white space, so the table follows the
same logic: **one solid navy band, hairline separators, no vertical lines.** Boxed-in grids
fight the rest of the page.

```
┌─────────────────────────────────────────────────┐
│  DELIVERABLE          TIMELINE        PRICE     │  ← navy #0a1628, bone text, bold 10
├═════════════════════════════════════════════════┤  ← lime #9dff4d 2pt rule
│  Discovery workshop   Week 1          ₪0,000    │  ← 10pt ink, hairline below
│  Architecture spec    Weeks 2-3       ₪0,000    │
│  Build                Weeks 4-8       ₪0,000    │
├─────────────────────────────────────────────────┤
│  TOTAL                                ₪0,000    │  ← bold, slate top rule
└─────────────────────────────────────────────────┘
      no vertical borders anywhere
```

| Part | Setting |
|---|---|
| Header row | background ink `#0a1628` · text bone `#e8f1f7` · Arial **Bold 10** · uppercase |
| Header accent | lime `#9dff4d` bottom border, `2pt` |
| Body cells | Arial `10`, ink `#0a1628` · row height comfortable, cell padding `0.06"` |
| Row separators | bottom border only, `1pt`, `#d7dee5` |
| Vertical borders | **none** - set to `0pt` / white |
| Total row | Arial Bold `10`, top border `1pt` `#5a6b7d` |
| Optional zebra | alternate row background `#f4f7f9` - use only on tables over ~8 rows |
| Numeric columns | right-aligned (left-aligned in an RTL document) |

### Building it

1. **Insert → Table**, pick the size. Add one row more than your data for the header.
2. Select the whole table → in the toolbar set **border width `0pt`** to clear the default grid.
3. Select the header row → **Table → Table properties → Cell background color** = `#0a1628`.
   Set its text to bone `#e8f1f7`, Arial Bold 10.
4. With the header row still selected, set border width `2pt`, color `#9dff4d`, and use the
   border-position control to apply **bottom border only**.
5. Select the body rows → border `1pt` `#d7dee5`, **bottom border only**.
6. **Table properties → Pin header row** so the header repeats when a table crosses a page.
7. Copy the finished table into the specimen block at the bottom of the template.

To reuse: copy the specimen table, paste, then adjust the row count. Adding rows with Tab from
the last cell inherits the row formatting, so the table stays consistent as it grows.

**On pasting markdown tables:** sources disagree on whether `Paste from Markdown` converts pipe
tables into real Docs tables, and it's changed between releases. Test it once with a small
two-row table before you rely on it. What is certain: plain `Ctrl+V` never converts them, and
`Tools → Preferences → Automatically detect Markdown` doesn't handle tables at all. If a pasted
table arrives unstyled, the fastest route is to paste a copy of the specimen table next to it
and move the cell contents across.

## Step 6 - Turning it into a template

### The `/copy` link (works on every account - use this one)

Save the document as `[TEMPLATE] Bina Labs`, then take its URL and replace everything from
`/edit` onwards with `/copy`:

```
https://docs.google.com/document/d/FILE_ID/edit     ← your working original
https://docs.google.com/document/d/FILE_ID/copy     ← the link you actually use
```

Anyone opening the `/copy` link gets a "Make a copy" prompt and lands in their own duplicate;
the original is never touched. Bookmark it and starting a new proposal is one click. For
yourself, **File → Make a copy** does the same job.

Keep the original in a Drive folder such as `Templates/` and share it view-only, so the master
can't be edited by accident.

> **Copies are snapshots.** Editing the master changes nothing in documents already created
> from it - a copy is frozen at the moment it was made. New copies pick up your edits
> automatically, with nothing to re-submit or re-assign. So fix layout problems in the master
> as soon as you find them: every document made before the fix keeps the flaw and has to be
> corrected by hand.

### The org template gallery (often simply unavailable)

If **Template gallery → your organization's tab → Submit template** isn't there, it's one of
three things - none of them something you're doing wrong:

1. **Your plan doesn't include it.** Custom templates require Business **Standard** or above.
   Business **Starter** and Workspace Individual don't have the feature at all, and no personal
   `@gmail.com` account does either. This is the most common reason by far.
2. **An admin turned it off.** Admin console → Apps → Google Workspace → Drive and Docs →
   Templates → Template Gallery settings → "Enable custom templates for your organization".
3. **You don't have submit permission.** The same settings page controls who may submit.

Given how often it's blocked, the `/copy` link is the more dependable approach regardless -
no plan requirement, no admin, no approval step.

---

## If your Docs is set to centimetres

Same values, converted. Switch units in **File → Page setup** (the unit there drives the
image size and position fields too).

| Field | Inches | Centimetres |
|---|---|---|
| Page margin - top | `1.26"` | `3.2` cm |
| Page margin - bottom | `0` | `0` cm |
| Page margin - left / right | `0.7"` | `1.8` cm |
| Header image - width | `8.27"` | `21` cm |
| Header image - height | `1.18"` | `3` cm |
| Header image - X / Y | `0` / `0` | `0` / `0` |
| Footer image - width | `8.27"` | `21` cm |
| Footer image - height | `0.55"` | `1.4` cm |
| Footer image - X / Y | `0` / `11.14"` | `0` / `28.3` cm |
| A4 page | 8.27 × 11.69" | 21 × 29.7 cm |

---

## Re-rendering the bands

If the text or colors in a band change, edit `_source-bands.html` and export fresh PNGs:

```bash
# from the repo root
python3 -m http.server 8788 &
# then in a browser/Playwright: screenshot the #header, #header-ltr, #footer and #footer-rtl
# elements at 1:1 CSS pixels with a transparent background (omitBackground)
```

The scale in the source file: 1 mm = 11.811 px (that's 300 DPI), A4 width = 2480 px.
