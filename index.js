const shortcodeMapping = {
  a: "aspectRatio",
  e: "elevation",
  p: {
    DEFAULT: "padding",
    t: "paddingTop",
    l: "paddingLeft",
    b: "paddingBottom",
    r: "paddingRight",
    s: "paddingStart",
    e: "paddingEnd",
    h: "paddingHorizontal",
    v: "paddingVertical",
    // pa could be used for absolute position, but then `pr` would be conflicting for relative
    o: {
      a: { key: "position", value: "absolute" },
      r: { key: "position", value: "relative" },
    },
  },
  m: {
    DEFAULT: "margin",
    t: "marginTop",
    l: "marginLeft",
    b: "marginBottom",
    r: "marginRight",
    s: "marginStart",
    e: "marginEnd",
    h: "marginHorizontal",
    v: "marginVertical",
  },
  get "-m"() {
    return this.m
  },
  b: {
    DEFAULT: "borderWidth",
    c: "borderColor",
    t: { DEFAULT: "borderTopWidth", c: "borderTopColor" },
    l: { DEFAULT: "borderLeftWidth", c: "borderLeftColor" },
    b: { DEFAULT: "borderBottomWidth", c: "borderBottomColor" },
    r: { DEFAULT: "borderRightWidth", c: "borderRightColor" },
    e: { DEFAULT: "borderEndWidth", c: "borderEndColor" },
    s: {
      DEFAULT: "borderStartWidth",
      c: "borderStartColor",
      s: { key: "borderStyle", value: "solid" },
      h: { key: "borderStyle", value: "dashed" },
      d: { key: "borderStyle", value: "dotted" },
    },
    g: "backgroundColor",
  },
  r: {
    DEFAULT: "borderRadius",
    t: {
      l: "borderTopLeftRadius",
      r: "borderTopRightRadius",
      s: "borderTopStartRadius",
      e: "borderTopEndRadius",
    },
    b: {
      l: "borderBottomLeftRadius",
      r: "borderBottomRightRadius",
      s: "borderBottomStartRadius",
      e: "borderBottomEndRadius",
    },
  },

  o: {
    DEFAULT: "opacity",
    t: "top",
    l: "left",
    r: "right",
    b: "bottom",
    s: "start",
    e: "end",
    c: { key: "overflow", value: "scroll" },
    h: { key: "overflow", value: "hidden" },
    v: { key: "overflow", value: "visible" },
  },

  h: {
    DEFAULT: "height",
    n: "minHeight",
    x: "maxHeight",
  },
  w: {
    DEFAULT: "width",
    n: "minWidth",
    x: "maxWidth",
  },

  c: {
    l: "color",
    a: { key: "alignContent", value: "space-around" },
    b: { key: "alignContent", value: "space-between" },
    c: { key: "alignContent", value: "center" },
    e: { key: "alignContent", value: "flex-end" },
    s: { key: "alignContent", value: "flex-start" },
    t: { key: "alignContent", value: "stretch" },
  },
  i: {
    b: { key: "alignItems", value: "baseline" },
    c: { key: "alignItems", value: "center" },
    e: { key: "alignItems", value: "flex-end" },
    s: { key: "alignItems", value: "flex-start" },
    t: { key: "alignItems", value: "stretch" },
  },
  s: {
    a: { key: "alignSelf", value: "auto" },
    b: { key: "alignSelf", value: "baseline" },
    c: { key: "alignSelf", value: "center" },
    e: { key: "alignSelf", value: "flex-end" },
    s: { key: "alignSelf", value: "flex-start" },
    t: { key: "alignSelf", value: "stretch" },
  },
  d: {
    i: { key: "direction", value: "inherit" },
    l: { key: "direction", value: "ltr" },
    r: { key: "direction", value: "rtl" },
    n: { key: "display", value: "none" },
    f: { key: "display", value: "flex" },
  },
  f: {
    DEFAULT: "flex",
    c: { key: "flexDirection", value: "column" },
    r: { key: "flexDirection", value: "row" },
    b: "flexBasis",
    g: "flexGrow",
    s: "flexShrink",
    n: { key: "flexWrap", value: "nowrap" },
    w: { key: "flexWrap", value: "wrap" },
  },
  "-f": {
    c: { key: "flexDirection", value: "column-reverse" },
    r: { key: "flexDirection", value: "row-reverse" },
    w: { key: "flexWrap", value: "wrap-reverse" },
  },
  j: {
    a: { key: "justifyContent", value: "space-around" },
    b: { key: "justifyContent", value: "space-between" },
    c: { key: "justifyContent", value: "center" },
    e: { key: "justifyContent", value: "flex-end" },
    s: { key: "justifyContent", value: "flex-start" },
  },

  t: {
    // f: { key: "fontFamily", value: "" },
    s: {
      DEFAULT: "fontSize",
      i: { key: "fontStyle", value: "italic" },
      n: { key: "fontStyle", value: "normal" },
    },
    b: { key: "fontWeight", value: "bold" },
    n: { key: "fontWeight", value: "normal" },
    a: { key: "textAlign", value: "auto" },
    c: { key: "textAlign", value: "center" },
    j: { key: "textAlign", value: "justify" },
    r: { key: "textAlign", value: "right" },
    l: {
      DEFAULT: { key: "textAlign", value: "left" },
      s: "letterSpacing",
    },
    h: "lineHeight",
    v: {
      a: { key: "textAlignVertical", value: "auto" },
      b: { key: "textAlignVertical", value: "bottom" },
      c: { key: "textAlignVertical", value: "center" },
      t: { key: "textAlignVertical", value: "top" },
    },
    t: {
      c: { key: "textTransform", value: "capitalize" },
      l: { key: "textTransform", value: "lowercase" },
      n: { key: "textTransform", value: "none" },
      u: { key: "textTransform", value: "uppercase" },
    },
  },
  z: "zIndex",
}

module.exports = function styles(str, ...[]) {
  if (!str) return
  const yes = {}

  for (const stylers of [...arguments]) {
    for (const shortcode of stylers.trim().split(/ +/)) {
      const isNegative = shortcode[0] == "-"
      const root = isNegative ? shortcode.slice(0, 2) : shortcode[0]
      // @ts-ignore
      const rootVal = shortcodeMapping[root]
      parse(rootVal, shortcode.slice(+isNegative + 1), yes, isNegative)
    }
  }
  return yes
}

function parse(obj_str, nextCode, map, isNegative, counter = 0) {
  if (counter > 20) return console.log("Just saved your ass")
  if (!obj_str) throw new Error(`Invalid style used! ${nextCode}`)

  if (typeof obj_str == "string") {
    map[obj_str] = isNaN(+nextCode)
      ? isNegative
        ? "-" + nextCode
        : nextCode
      : isNegative
      ? -nextCode
      : +nextCode
  } else {
    if ("key" in obj_str) {
      map[obj_str.key] = obj_str.value
    } else {
      const key = isNaN(+nextCode[0]) ? nextCode[0] ?? "DEFAULT" : "DEFAULT"
      const nextObj = obj_str[key]
      parse(nextObj, key == "DEFAULT" ? nextCode : nextCode.slice(1), map, isNegative, ++counter)
    }
  }
}
