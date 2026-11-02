// Phan Vu Design System — component props, one block per component (each also at components/<Comp>/<Comp>.d.ts).

// ---- Badge (components/Badge/Badge.d.ts)
/**
 * A short status or category marker. Pill-shaped, 12px semibold.
 */
export interface BadgeProps {
  children?: React.ReactNode;
  tone?: 'brand' | 'accent' | 'signal' | 'success' | 'warning' | 'danger' | 'neutral';
  /** soft = tinted ground (default) · solid = filled · outline = 1px line only. */
  variant?: 'soft' | 'solid' | 'outline';
  /** Lucide icon name shown before the label. */
  icon?: string;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;

// ---- Button (components/Button/Button.d.ts)
/**
 * The system's action control. One primary button per view.
 * @startingPoint section="Core" subtitle="Primary, secondary, outline, ghost and signal actions" viewport="700x160"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** primary = brand blue · secondary = indigo · signal = marker red (signal-600), for site warnings and key milestones only · outline / ghost = low emphasis · inverse = white, on indigo grounds. */
  variant?: 'primary' | 'secondary' | 'signal' | 'outline' | 'ghost' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  /** Lucide icon name placed before the label. */
  iconLeft?: string;
  /** Lucide icon name placed after the label. Use for forward navigation only. */
  iconRight?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;

// ---- Card (components/Card/Card.d.ts)
/**
 * A bordered container for one idea. Structure comes from the border, not a shadow.
 * @startingPoint section="Core" subtitle="Bordered container across the four approved grounds" viewport="700x260"
 */
export interface CardProps {
  children?: React.ReactNode;
  /** Card heading (H4). */
  title?: string;
  /** Uppercase kicker above the title. */
  eyebrow?: string;
  /** Muted line under a hairline rule at the base. */
  footer?: React.ReactNode;
  ground?: 'white' | 'paper' | 'tint' | 'inverse';
  pad?: 'sm' | 'md' | 'lg';
  /** Shadow is for cards that genuinely float. Default none. */
  elevation?: 'none' | 'sm' | 'md' | 'lg';
  /** 3px top rule in a brand colour, or any CSS colour. */
  accent?: 'brand' | 'accent' | 'signal' | 'indigo' | string;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;

// ---- IconButton (components/IconButton/IconButton.d.ts)
/**
 * A square action carrying only a glyph. Always labelled.
 */
export interface IconButtonProps {
  /** Lucide icon name. */
  icon: string;
  /** Accessible name — required; also used as the tooltip. */
  label: string;
  variant?: 'solid' | 'outline' | 'ghost' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;

// ---- Tag (components/Tag/Tag.d.ts)
/**
 * A square-cornered label for taxonomy: disciplines, formats, container codes.
 */
export interface TagProps {
  children?: React.ReactNode;
  tone?: 'neutral' | 'brand' | 'accent' | 'paper';
  /** Set for codes and identifiers so they set in IBM Plex Mono. */
  mono?: boolean;
  /** Supply to render a dismiss affordance. */
  onRemove?: () => void;
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;

// ---- Callout (components/Callout/Callout.d.ts)
/**
 * A marked aside: note, site activity, discussion prompt, standards reference (TCVN, JIS, ISO) or warning.
 * @startingPoint section="Content" subtitle="Note, activity, discussion and standards asides" viewport="700x300"
 */
export interface CalloutProps {
  children?: React.ReactNode;
  kind?: 'note' | 'activity' | 'discussion' | 'standard' | 'warning';
  /** Optional bold line above the body. */
  title?: string;
  /** Overrides the default uppercase kind label. */
  label?: string;
  style?: React.CSSProperties;
}
export declare function Callout(props: CalloutProps): JSX.Element;

// ---- Checklist (components/Checklist/Checklist.d.ts)
/**
 * A marked list for learning objectives, deliverables and conformity checks.
 */
export interface ChecklistItem {
  text: string;
  /** Muted second line. */
  note?: string;
}
export interface ChecklistProps {
  /** Plain strings, or objects with a text and an optional note. */
  items: (string | ChecklistItem)[];
  /** check = completed / true · objective = learning objective · deliverable = information deliverable · bullet = neutral. */
  mark?: 'check' | 'objective' | 'deliverable' | 'bullet';
  /** Set on indigo and blue grounds. */
  inverse?: boolean;
  columns?: 1 | 2 | 3;
  style?: React.CSSProperties;
}
export declare function Checklist(props: ChecklistProps): JSX.Element;

// ---- ClauseRef (components/ClauseRef/ClauseRef.d.ts)
/**
 * A citation chip for a standard and clause. Mono type, square corners.
 */
export interface ClauseRefProps {
  /** Standard designation, e.g. "ISO 19650-1:2018". */
  standard: string;
  /** Clause or section, e.g. "Clause 11.2". */
  clause?: string;
  /** Optional clause title in sans, after the reference. */
  title?: string;
  /** Makes the chip a link. */
  href?: string;
  tone?: 'accent' | 'brand' | 'inverse';
  style?: React.CSSProperties;
}
export declare function ClauseRef(props: ClauseRefProps): JSX.Element;

// ---- DataTable (components/DataTable/DataTable.d.ts)
/**
 * A dense reference table — status codes, roles, deliverable schedules.
 * @startingPoint section="Content" subtitle="Dense reference table with heavy header rule" viewport="700x300"
 */
export interface DataTableColumn {
  key: string;
  header: string;
  align?: 'left' | 'right' | 'center';
  /** Set for code columns so they set in IBM Plex Mono. */
  mono?: boolean;
  /** CSS width, e.g. "120px" or "20%". */
  width?: string;
}
export interface DataTableProps {
  columns: DataTableColumn[];
  /** Row objects keyed by column key. */
  rows: Record<string, React.ReactNode>[];
  /** Alternate rows on chart paper. Use above eight rows. */
  zebra?: boolean;
  dense?: boolean;
  /** Uppercase caption above the table. */
  caption?: string;
  style?: React.CSSProperties;
}
export declare function DataTable(props: DataTableProps): JSX.Element;

// ---- Definition (components/Definition/Definition.d.ts)
/**
 * A defined term with its source — the terminology unit of technical documents.
 * @startingPoint section="Content" subtitle="Defined term with standard source and note" viewport="700x230"
 */
export interface DefinitionProps {
  /** The term, sentence case: "common data environment". */
  term: string;
  /** The definition, quoted verbatim from the standard where possible. */
  children?: React.ReactNode;
  /** Mono source line, e.g. "ISO 19650-1:2018, 3.3.15". */
  source?: string;
  /** Muted note giving practical context. */
  note?: string;
  /** Set on indigo and blue grounds. */
  inverse?: boolean;
  style?: React.CSSProperties;
}
export declare function Definition(props: DefinitionProps): JSX.Element;

// ---- NumberTile (components/NumberTile/NumberTile.d.ts)
/**
 * A numbered item for agendas, learning objectives and process steps.
 * @startingPoint section="Content" subtitle="Numbered agenda and objective tiles" viewport="700x220"
 */
export interface NumberTileProps {
  /** Two-digit index as a string, e.g. "04". Always pad to two digits. */
  number: string;
  title: string;
  children?: React.ReactNode;
  ground?: 'white' | 'paper' | 'tint' | 'inverse';
  /** Override the numeral colour, e.g. "var(--action-signal)" for the current module. */
  numberTone?: string;
  style?: React.CSSProperties;
}
export declare function NumberTile(props: NumberTileProps): JSX.Element;

// ---- PullQuote (components/PullQuote/PullQuote.d.ts)
/**
 * A single statement given a whole slide.
 * @startingPoint section="Content" subtitle="Full-bleed statement or quotation slide" viewport="700x340"
 */
export interface PullQuoteProps {
  children?: React.ReactNode;
  /** Who said it, or the party the statement describes. */
  attribution?: string;
  /** Mono provenance line — standard and clause, or publication. */
  source?: string;
  ground?: 'blue' | 'indigo' | 'paper' | 'none';
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}
export declare function PullQuote(props: PullQuoteProps): JSX.Element;

// ---- StatBlock (components/StatBlock/StatBlock.d.ts)
/**
 * One figure, its label and its provenance.
 */
export interface StatBlockProps {
  /** The figure itself. Keep it short — four characters or fewer reads best. */
  value: string | number;
  /** Suffix set smaller, e.g. "%", "yrs". */
  unit?: string;
  /** Uppercase label under the figure. */
  label: string;
  /** Source or caveat. Never present a figure without one. */
  note?: string;
  tone?: 'brand' | 'accent' | 'signal' | 'indigo' | 'inverse';
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}
export declare function StatBlock(props: StatBlockProps): JSX.Element;

// ---- Icon (components/Icon/Icon.d.ts)
/**
 * Lucide glyph at a fixed box size, inheriting currentColor.
 * Loads the Lucide UMD build from CDN on first use.
 */
export interface IconProps {
  /** Lucide icon name, kebab-case (e.g. "file-check", "users", "layers"). */
  name: string;
  /** Box size in px. 16 inline, 20 default, 24 UI, 32+ for tiles. */
  size?: number;
  /** Lucide stroke width. 1.75 is the Phan Vũ default; 1.5 for 32px+. */
  strokeWidth?: number;
  /** Accessible name. Omit for decorative icons — the span is then aria-hidden. */
  label?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;

// ---- ImagePlaceholder (components/ImagePlaceholder/ImagePlaceholder.d.ts)
/**
 * A labelled reservation for real photography or a real diagram.
 * @startingPoint section="Media" subtitle="Labelled slot for photography or a diagram" viewport="700x260"
 */
export interface ImagePlaceholderProps {
  /** Short uppercase label, e.g. "SITE PHOTOGRAPH". */
  label?: string;
  /** One line saying exactly what asset belongs here. */
  note?: string;
  /** CSS aspect-ratio, e.g. "16 / 9", "4 / 3", "1 / 1". */
  ratio?: string;
  tone?: 'tint' | 'paper' | 'inverse';
  /** Lucide icon name. */
  icon?: string;
  style?: React.CSSProperties;
}
export declare function ImagePlaceholder(props: ImagePlaceholderProps): JSX.Element;

// ---- Logo (components/Logo/Logo.d.ts)
/**
 * The PHAN VŨ GROUP logo (mark + wordmark + tagline) at an approved size and tone.
 */
export interface LogoProps {
  /** Named width or explicit px. sm 96 (minimum) · md 160 · lg 240 · xl 320. */
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  /** brand = logo indigo #393C86 as supplied · inverse = white, for indigo and blue grounds · ink = solid black, for mono print. */
  tone?: 'brand' | 'inverse' | 'ink';
  /** Logo image URL. Defaults to the uploaded PNG (300×60, raster: do not use above 300 px wide). */
  src?: string;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;

// ---- NotesPanel (components/NotesPanel/NotesPanel.d.ts)
/**
 * The workbook note rail — dense guidance printed on the slide itself.
 */
export interface NotesPanelProps {
  children?: React.ReactNode;
  /** Uppercase label, e.g. "Tutor note", "Delegate note", "Worked example". */
  label?: string;
  /** Lucide icon name shown before the label. */
  icon?: string;
  /** CSS width. In a side rail, 300-360px. */
  width?: string | number;
  style?: React.CSSProperties;
}
export declare function NotesPanel(props: NotesPanelProps): JSX.Element;

// ---- SlideFooter (components/SlideFooter/SlideFooter.d.ts)
/**
 * The slide baseline: wordmark, course code and page number over a 2px rule.
 */
export interface SlideFooterProps {
  /** Slide number, as printed in the document. */
  page?: string | number;
  /** Course designation, e.g. "PC-BIM-101 v1.0". */
  courseCode?: string;
  /** Replaces courseCode in the centre when a different line is needed. */
  note?: string;
  ground?: 'white' | 'paper' | 'indigo' | 'blue';
  /** Path to logo.svg relative to the consuming page. */
  logoSrc?: string;
  style?: React.CSSProperties;
}
export declare function SlideFooter(props: SlideFooterProps): JSX.Element;

// ---- SlideFrame (components/SlideFrame/SlideFrame.d.ts)
/**
 * The 1280x720 slide canvas with the house margins and one of four approved grounds.
 */
export interface SlideFrameProps {
  children?: React.ReactNode;
  /** white = content · paper = workbook and activity · indigo = section divider and title · blue = statement. */
  ground?: 'white' | 'paper' | 'indigo' | 'blue';
  /** Apply the standard 72/56/44 margins. Turn off for full-bleed layouts. */
  pad?: boolean;
  /** Scale the frame down to the width of its container. */
  fit?: boolean;
  style?: React.CSSProperties;
}
export declare function SlideFrame(props: SlideFrameProps): JSX.Element;

// ---- SlideHeader (components/SlideHeader/SlideHeader.d.ts)
/**
 * The slide title block: module kicker, title, optional standfirst and the 88px sky rule.
 */
export interface SlideHeaderProps {
  title: string;
  /** One-line standfirst under the title. */
  subtitle?: string;
  /** Two-digit module number, e.g. "04". */
  module?: string;
  /** Module name, shown after the number. */
  moduleTitle?: string;
  /** Replaces the module kicker entirely. */
  eyebrow?: string;
  /** Right-aligned node on the kicker row — normally a ClauseRef or Badge. */
  right?: React.ReactNode;
  /** Must match the SlideFrame ground so contrast holds. */
  ground?: 'white' | 'paper' | 'indigo' | 'blue';
  /** The short sky rule. Off for section dividers. */
  rule?: boolean;
  style?: React.CSSProperties;
}
export declare function SlideHeader(props: SlideHeaderProps): JSX.Element;

// ---- SectionBand (brochure)
/**
 * The brochure section heading: a blue band from the left edge, Vietnamese title in caps, English line under it, and a cluster of three diamonds at its point.
 */
export interface SectionBandProps {
  /** Vietnamese title, written in sentence case in the source; the band sets it uppercase. "Dự án công nghiệp nặng". */
  title: string;
  /** The same title in English: "Heavy industry projects". */
  subtitle?: string;
  /** blue = action-primary band (default) · indigo = logo indigo band, for cover-adjacent pages. */
  tone?: 'blue' | 'indigo';
  /** Show the three-diamond cluster at the band's point. Default true. */
  diamonds?: boolean;
  /** Band width, CSS length. Default 62%. */
  width?: string;
  style?: React.CSSProperties;
}
export declare function SectionBand(props: SectionBandProps): JSX.Element;

// ---- ProjectSheet (brochure)
/**
 * One reference project as in the brochure: project name in caps, a ruled bilingual table (client, scope, quantity) and a photo with two opposite rounded corners.
 */
export interface ProjectSheetProps {
  /** Project name, set uppercase: "Duyen Hai 2 Thermal Power". */
  name: string;
  /** Rows: label (Vietnamese), labelEn (English), value. */
  rows: { label: string; labelEn?: string; value: React.ReactNode }[];
  /** Photo URL, or a node such as an ImagePlaceholder when the photo is not supplied. */
  image?: string | React.ReactNode;
  imageAlt?: string;
  /** Alternate left/right down a page, as the brochure does. Default right. */
  imageSide?: 'left' | 'right';
  style?: React.CSSProperties;
}
export declare function ProjectSheet(props: ProjectSheetProps): JSX.Element;

// ---- BrochureFooter (brochure)
/**
 * The steel-grey running footer of every brochure page: letter-spaced company name and the web address.
 */
export interface BrochureFooterProps {
  /** Default "Phan Vu Investment Corporation". */
  company?: string;
  /** Default "www.phanvu.vn"; pass null to hide. */
  url?: string | null;
  /** left = company on the left (even pages) · right = company on the right (odd pages). */
  align?: 'left' | 'right';
  style?: React.CSSProperties;
}
export declare function BrochureFooter(props: BrochureFooterProps): JSX.Element;
