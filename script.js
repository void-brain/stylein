const ALIAS = {
  // Box Model - Margin
  m: "margin",
  mt: "marginTop", mb: "marginBottom", ml: "marginLeft", mr: "marginRight",
  mx: "marginInline", my: "marginBlock",
  mBlock: "marginBlock", mInline: "marginInline",

  // Box Model - Padding
  p: "padding",
  pt: "paddingTop", pb: "paddingBottom", pl: "paddingLeft", pr: "paddingRight",
  px: "paddingInline", py: "paddingBlock",
  pBlock: "paddingBlock", pInline: "paddingInline",

  // Box extras
  bs: "boxSizing",
  bsh: "boxShadow",
  oX: "overflowX", oY: "overflowY", oWrap: "overflowWrap",

  // Background
  bg: "background",
  bgColor: "backgroundColor",
  bgImage: "backgroundImage",
  bgPos: "backgroundPosition",
  bgSize: "backgroundSize",
  bgRepeat: "backgroundRepeat",
  bgClip: "backgroundClip",
  bgOrigin: "backgroundOrigin",
  bgAttach: "backgroundAttachment",
  bgBlend: "backgroundBlendMode",

  // Border
  bd: "border",
  bdr: "borderRadius",
  bdTop: "borderTop", bdBottom: "borderBottom",
  bdLeft: "borderLeft", bdRight: "borderRight",
  bdWidth: "borderWidth",
  bdStyle: "borderStyle",
  bdColor: "borderColor",
  bdBlock: "borderBlock",
  bdSpacing: "borderSpacing",
  bdCollapse: "borderCollapse",
  bdImage: "borderImage",

  // Outline
  out: "outline",
  outColor: "outlineColor",
  outStyle: "outlineStyle",
  outWidth: "outlineWidth",
  outOffset: "outlineOffset",

  // Flexbox
  fd: "flexDirection", fw: "flexWrap", fFlow: "flexFlow",
  fg: "flexGrow", fs: "flexShrink", fb: "flexBasis",
  ai: "alignItems", ac: "alignContent", as: "alignSelf",
  jc: "justifyContent", ji: "justifyItems", js: "justifySelf",

  // Grid
  gtc: "gridTemplateColumns", gtr: "gridTemplateRows",
  gtArea: "gridTemplateAreas", gt: "gridTemplate",
  gArea: "gridArea", gCol: "gridColumn", gRow: "gridRow",
  gGap: "gridGap",
  gAutoFlow: "gridAutoFlow", gAutoCol: "gridAutoColumns", gAutoRow: "gridAutoRows",
  rowGap: "rowGap",

  // Typography
  ff: "fontFamily",
  fs2: "fontSize",
  fst: "fontStyle",
  fw2: "fontWeight",
  fv: "fontVariant",
  lh: "lineHeight", ls: "letterSpacing",
  ta: "textAlign", td: "textDecoration", ti: "textIndent",
  tJust: "textJustify", tOver: "textOverflow", tShadow: "textShadow",
  tt: "textTransform",
  ws: "whiteSpace", wb: "wordBreak", wsp: "wordSpacing", ww: "wordWrap",
  wm: "writingMode",

  // Sizing
  mH: "maxHeight", mW: "maxWidth", nH: "minHeight", nW: "minWidth",
  bSize: "blockSize", iSize: "inlineSize",

  // Display / Position
  pos: "position",
  disp: "display",
  vis: "visibility",
  zI: "zIndex",
  dir: "direction",
  iso: "isolation",

  // Transform / 3D
  tr: "transform",
  trOrigin: "transformOrigin",
  trStyle: "transformStyle",
  persp: "perspective",
  perspOrigin: "perspectiveOrigin",
  bf: "backfaceVisibility",

  // Effects
  bdFilter: "backdropFilter",
  filter: "filter",
  blend: "mixBlendMode",
  op: "opacity",
  clipP: "clipPath", clipR: "clipRule",

  // Animation / Transition
  anim: "animation",
  animDelay: "animationDelay",
  animDir: "animationDirection",
  animDur: "animationDuration",
  animFill: "animationFillMode",
  animCount: "animationIterationCount",
  animName: "animationName",
  animState: "animationPlayState",
  animFn: "animationTimingFunction",
  trans: "transition",
  transDelay: "transitionDelay",
  transDur: "transitionDuration",
  transProp: "transitionProperty",
  transFn: "transitionTimingFunction",

  // Lists
  lStyle: "listStyle", lStyleImg: "listStyleImage",
  lStylePos: "listStylePosition", lStyleType: "listStyleType",

  // Scroll
  scrollB: "scrollBehavior", scrollM: "scrollMargin", scrollP: "scrollPadding",
  scrollSnapA: "scrollSnapAlign", scrollSnapT: "scrollSnapType",
  sbColor: "scrollbarColor", sbWidth: "scrollbarWidth",

  // Misc
  appear: "appearance",
  caretC: "caretColor",
  pointer: "pointerEvents",
  userSel: "userSelect",
  will: "willChange",
  objFit: "objectFit", objPos: "objectPosition",
  contain: "contain", containV: "contentVisibility",
  cont: "container",
  content: "content",
  counterInc: "counterIncrement", counterRes: "counterReset",

  // Layout extras
  ar: "aspectRatio",
  breakA: "breakAfter", breakB: "breakBefore", breakI: "breakInside",

  // Multicolumn
  cols: "columns", colCount: "columnCount", colFill: "columnFill",
  colGap: "columnGap", colRule: "columnRule", colSpan: "columnSpan", colWidth: "columnWidth",

  // Text alignment helpers
  va: "verticalAlign",
  hyphens: "hyphens",
};

class sss {
    constructor(element = "body", isAll = false) {
        if (isAll === true) {
            console.log(`"isAll" is Not Supported right now!`)
        }
        if (!this.element) {
            throw new Error(`element not found: ${element}`)
        }
        else {
            this.element = document.querySelector(element)
        }
    }
    set style(obj) {
        for (const [k, v] of Object.entries(obj)) {
            if (v == null) continue;
            this.element.style[ALIAS[k] ?? k] = v;
        }
    }
}

export default sss