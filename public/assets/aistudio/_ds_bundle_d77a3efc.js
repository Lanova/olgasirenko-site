/* @ds-bundle: {"format":4,"namespace":"OlgaSirenkoDesignSystem_720a22","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Kicker","sourcePath":"components/core/Kicker.jsx"},{"name":"Monogram","sourcePath":"components/core/Monogram.jsx"},{"name":"Reveal","sourcePath":"components/core/Reveal.jsx"},{"name":"Callout","sourcePath":"components/display/Callout.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Chip","sourcePath":"components/display/Chip.jsx"},{"name":"CodeBlock","sourcePath":"components/display/CodeBlock.jsx"},{"name":"CompareCard","sourcePath":"components/display/CompareCard.jsx"},{"name":"MetricTile","sourcePath":"components/display/MetricTile.jsx"},{"name":"Quote","sourcePath":"components/display/Quote.jsx"},{"name":"StatusBadge","sourcePath":"components/display/StatusBadge.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"SlotPicker","sourcePath":"components/forms/SlotPicker.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/core/Button.jsx":"5e306e8f72bf","components/core/Icon.jsx":"d45bead1ad4a","components/core/Kicker.jsx":"f3d7bf906661","components/core/Monogram.jsx":"e897ef8fdb1b","components/core/Reveal.jsx":"9b8bc5f3009d","components/display/Callout.jsx":"6e2db2ca2b60","components/display/Card.jsx":"4bebfecbf6bf","components/display/Chip.jsx":"bd714be3e1b7","components/display/CodeBlock.jsx":"fce4860ba855","components/display/CompareCard.jsx":"626fc6d30512","components/display/MetricTile.jsx":"f062abde11cd","components/display/Quote.jsx":"b3a574993a2a","components/display/StatusBadge.jsx":"145ed223f20f","components/forms/Checkbox.jsx":"35fb99d5d267","components/forms/Input.jsx":"9ba5f55e2b00","components/forms/SegmentedControl.jsx":"c3012f5795c3","components/forms/Slider.jsx":"817869d1423a","components/forms/SlotPicker.jsx":"1b58f114eee7","components/forms/Switch.jsx":"6b32a34bbb99","ui_kits/portfolio/Advisory.jsx":"514fd3be5ce3","ui_kits/portfolio/Header.jsx":"8ffdf8504cc0","ui_kits/portfolio/Hero.jsx":"9f68d3d798cd","ui_kits/portfolio/Sections.jsx":"56601e5a47cd","ui_kits/portfolio/Work.jsx":"c0686e3963ab"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OlgaSirenkoDesignSystem_720a22 = window.OlgaSirenkoDesignSystem_720a22 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Icon({
  name,
  size = 18,
  fill = false,
  weight = 400,
  color,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    className: "material-symbols-outlined",
    style: {
      fontSize: size,
      width: size,
      height: size,
      lineHeight: 1,
      color,
      fontVariationSettings: `'FILL' ${fill ? 1 : 0},'wght' ${weight},'GRAD' 0,'opsz' 24`,
      transition: 'transform var(--dur-base) var(--ease-spring)',
      flexShrink: 0,
      overflow: 'hidden',
      ...style
    }
  }, rest), name);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  mono = false,
  icon,
  iconPosition = 'end',
  disabled = false,
  fullWidth = false,
  children,
  onClick,
  href,
  type = 'button',
  'aria-label': ariaLabel,
  style
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const ev = {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false)
  };
  const V = {
    primary: {
      bg: h ? 'var(--accent-action-hover)' : 'var(--accent-action)',
      fg: 'var(--text-on-accent)',
      bd: 'transparent',
      sh: h ? 'var(--shadow-glow)' : 'none'
    },
    secondary: {
      bg: h ? 'var(--paper-2)' : 'transparent',
      fg: 'var(--ink)',
      bd: 'var(--control-border)',
      sh: 'none'
    },
    inverse: {
      bg: 'var(--ink)',
      fg: 'var(--paper)',
      bd: 'transparent',
      sh: h ? 'var(--shadow-2)' : 'var(--shadow-1)'
    }
  }[variant] || {};
  const nudge = h && !disabled ? icon && icon.includes('down') ? 'translateY(2px)' : 'translateX(3px)' : 'none';
  const ic = icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    style: {
      transform: nudge
    }
  }) : null;
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    type: href ? undefined : type,
    "aria-label": ariaLabel,
    onClick: disabled ? undefined : onClick,
    disabled: disabled
  }, ev, {
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: 44,
      padding: '0 22px',
      borderRadius: 'var(--radius-full)',
      border: `1px solid ${V.bd}`,
      background: V.bg,
      color: V.fg,
      boxShadow: V.sh,
      font: `${mono ? 600 : 500} 13px/1 ${mono ? 'var(--font-mono)' : 'var(--font-sans)'}`,
      textDecoration: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      transform: p && !disabled ? 'scale(var(--press-scale))' : h && !disabled ? 'scale(var(--hover-scale))' : 'none',
      transition: 'transform var(--dur-base) var(--ease-spring),background var(--dur-base) var(--ease-standard),box-shadow var(--dur-base) var(--ease-standard)',
      whiteSpace: 'nowrap',
      ...style
    }
  }), iconPosition === 'start' && ic, children, iconPosition === 'end' && ic);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Kicker.jsx
try { (() => {
function Kicker({
  children,
  tone = 'cyan',
  dot = false,
  style
}) {
  const c = tone === 'violet' ? 'var(--violet-2)' : tone === 'muted' ? 'var(--muted)' : 'var(--cyan-text)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--type-kicker)',
      letterSpacing: 'var(--ls-kicker)',
      textTransform: 'uppercase',
      color: c,
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: c
    }
  }), children);
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/core/Monogram.jsx
try { (() => {
function Monogram({
  initials = 'OS',
  size = 36,
  shape = 'circle',
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: size,
      height: size,
      borderRadius: shape === 'circle' ? '50%' : size * 0.28,
      border: `1px solid ${h ? 'var(--accent-signal)' : 'var(--line)'}`,
      background: 'color-mix(in srgb,var(--ink) 4%,transparent)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: `600 ${Math.round(size * 0.34)}px/1 var(--font-sans)`,
      letterSpacing: '-0.03em',
      color: 'var(--ink)',
      transition: 'border-color var(--dur-base) var(--ease-standard)',
      flexShrink: 0,
      ...style
    }
  }, initials);
}
Object.assign(__ds_scope, { Monogram });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Monogram.jsx", error: String((e && e.message) || e) }); }

// components/core/Reveal.jsx
try { (() => {
function Reveal({
  children,
  delay = 0,
  y = 24,
  as = 'div',
  style
}) {
  const ref = React.useRef(null);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setOn(true);
        io.disconnect();
      }
    }, {
      threshold: 0.12
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, {
    ref: ref,
    style: {
      opacity: on ? 1 : 0,
      transform: on ? 'none' : `translateY(${y}px)`,
      transition: `opacity var(--dur-reveal) var(--ease-spring) ${delay}ms,transform var(--dur-reveal) var(--ease-spring) ${delay}ms`,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Reveal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Reveal.jsx", error: String((e && e.message) || e) }); }

// components/display/Callout.jsx
try { (() => {
function Callout({
  label,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--violet-wash)',
      borderRadius: 'var(--radius)',
      padding: '16px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 10px/1.3 var(--font-mono)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--violet-2)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/1.5 var(--font-sans)',
      color: 'var(--violet)'
    }
  }, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Callout.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function Card({
  children,
  interactive = false,
  tone = 'card',
  padding = 28,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  const bg = {
    card: 'var(--card)',
    panel: 'var(--paper-2)',
    wash: 'var(--violet-wash)',
    night: 'var(--night)'
  }[tone];
  const lift = interactive && h;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: bg,
      border: `1px solid ${lift ? 'var(--hover-border)' : 'var(--line)'}`,
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: lift ? 'var(--shadow-lift)' : tone === 'card' ? 'var(--shadow-1)' : 'none',
      transform: lift ? 'translateY(var(--lift))' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-spring),box-shadow var(--dur-slow) var(--ease-spring),border-color var(--dur-base) ease',
      cursor: onClick ? 'pointer' : undefined,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Chip.jsx
try { (() => {
function Chip({
  children,
  tone = 'violet',
  dot = false,
  size = 'md',
  style
}) {
  const T = {
    violet: ['var(--chip-bg)', 'var(--chip-fg)', 'transparent'],
    cyan: ['var(--cyan-wash)', 'var(--cyan-text)', 'var(--cyan-wash-line)'],
    neutral: ['var(--slate-wash)', 'var(--slate)', 'transparent'],
    outline: ['transparent', 'var(--ink-2)', 'var(--line)'],
    success: ['var(--success-wash)', 'var(--success)', 'transparent']
  }[tone] || [];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: size === 'sm' ? '3px 8px' : '4px 10px',
      borderRadius: 999,
      background: T[0],
      color: T[1],
      border: `1px solid ${T[2]}`,
      font: `500 ${size === 'sm' ? 10 : 11}px/1.3 var(--font-mono)`,
      letterSpacing: '.02em',
      whiteSpace: 'nowrap',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Chip.jsx", error: String((e && e.message) || e) }); }

// components/display/CodeBlock.jsx
try { (() => {
function CodeBlock({
  children,
  filename,
  meta,
  copyLabel,
  copyText,
  style
}) {
  const [ok, setOk] = React.useState(false);
  const copy = () => {
    try {
      navigator.clipboard.writeText(copyText || (typeof children === 'string' ? children : ''));
    } catch (e) {}
    setOk(true);
    setTimeout(() => setOk(false), 1400);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, copyLabel && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: copy,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginBottom: 8,
      padding: 0,
      border: 'none',
      background: 'none',
      font: '400 11px var(--font-mono)',
      color: ok ? 'var(--cyan-text)' : 'var(--muted)',
      cursor: 'pointer',
      transition: 'color var(--dur-base) ease'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ok ? 'check' : 'content_copy',
    size: 13
  }), ok ? 'Copied' : copyLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--codebg)',
      borderRadius: 'var(--radius-lg)',
      padding: '18px 20px',
      border: '1px solid rgba(255,255,255,.06)'
    }
  }, (filename || meta) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingBottom: 10,
      marginBottom: 12,
      borderBottom: '1px solid rgba(255,255,255,.08)',
      font: '400 11px var(--font-mono)',
      color: 'var(--code-comment)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--code-tag)',
      fontWeight: 600
    }
  }, filename), /*#__PURE__*/React.createElement("span", null, meta)), /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      font: 'var(--type-code)',
      color: 'var(--code-fg)',
      whiteSpace: 'pre-wrap'
    }
  }, children)));
}
Object.assign(__ds_scope, { CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/display/CompareCard.jsx
try { (() => {
function CompareCard({
  kind = 'do',
  label,
  children,
  style
}) {
  const d = kind === 'do';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: d ? 'var(--cyan-wash)' : 'var(--slate-wash)',
      border: `1px solid ${d ? 'var(--cyan-wash-line)' : 'transparent'}`,
      borderRadius: 'var(--radius)',
      padding: '14px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      font: '600 11px/1 var(--font-mono)',
      letterSpacing: '.04em',
      color: d ? 'var(--cyan-text)' : 'var(--slate)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: d ? 'check' : 'close',
    size: 14,
    weight: 600
  }), label || (d ? 'Try' : 'Not')), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'italic 400 14px/1.5 var(--font-sans)',
      color: 'var(--ink)'
    }
  }, children));
}
Object.assign(__ds_scope, { CompareCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/CompareCard.jsx", error: String((e && e.message) || e) }); }

// components/display/MetricTile.jsx
try { (() => {
function MetricTile({
  value,
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--paper-2)',
      border: '1px solid var(--line)',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 22px/1.1 var(--font-mono)',
      letterSpacing: '-.02em',
      color: 'var(--ink)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px/1.3 var(--font-mono)',
      color: 'var(--muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { MetricTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/MetricTile.jsx", error: String((e && e.message) || e) }); }

// components/display/Quote.jsx
try { (() => {
function Quote({
  children,
  name,
  role,
  variant = 'card',
  style
}) {
  if (variant === 'closer') return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line)',
      paddingTop: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 10px/1.3 var(--font-mono)',
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: 'var(--violet-2)'
    }
  }, name || 'The one idea to remember'), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'italic 400 20px/1.4 var(--font-display)',
      color: 'var(--ink)'
    }
  }, children));
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      ...style
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      font: 'italic 400 18px/1.5 var(--font-display)',
      color: 'var(--ink-2)'
    }
  }, children), name && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      paddingTop: 12,
      borderTop: '1px solid var(--line)',
      font: '500 12px var(--font-mono)',
      color: 'var(--ink)'
    }
  }, name, role && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted)'
    }
  }, " \xB7 ", role)));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Quote.jsx", error: String((e && e.message) || e) }); }

// components/display/StatusBadge.jsx
try { (() => {
function StatusBadge({
  children,
  live = true,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '5px 12px',
      borderRadius: 999,
      background: 'color-mix(in srgb,var(--ink) 4%,transparent)',
      border: '1px solid var(--line)',
      color: 'var(--cyan-text)',
      font: '500 12px/1.2 var(--font-mono)',
      letterSpacing: '.01em',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 8,
      height: 8,
      display: 'inline-flex'
    }
  }, live && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      background: 'var(--accent-signal)',
      opacity: .6,
      animation: 'os-ping 1.6s cubic-bezier(0,0,.2,1) infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--accent-signal)'
    }
  })), children);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  defaultChecked = false,
  onChange,
  label,
  disabled,
  style
}) {
  const [c, setC] = React.useState(defaultChecked);
  const on = checked ?? c;
  const t = () => {
    if (disabled) return;
    setC(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: t,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      userSelect: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "checkbox",
    "aria-checked": on,
    tabIndex: disabled ? -1 : 0,
    onKeyDown: e => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        t();
      }
    },
    style: {
      width: 16,
      height: 16,
      borderRadius: 4,
      background: on ? 'var(--accent-primary)' : 'var(--card)',
      boxShadow: on ? 'none' : 'inset 0 0 0 1.5px var(--control-border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast) ease'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    weight: 600,
    color: on ? 'var(--paper)' : 'transparent',
    style: {
      transform: on ? 'scale(1)' : 'scale(.4)',
      transition: 'transform var(--dur-base) var(--ease-spring)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/1.3 var(--font-sans)',
      color: 'var(--ink)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  value,
  defaultValue,
  onChange,
  placeholder,
  type = 'text',
  hint,
  error,
  mono = false,
  disabled,
  required,
  style,
  id
}) {
  const [f, setF] = React.useState(false);
  const iid = id || React.useId();
  const bc = error ? 'var(--error)' : f ? 'var(--focus-ring)' : 'var(--control-border)';
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: iid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      color: 'var(--muted)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    id: iid,
    type: type,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    required: required,
    "aria-invalid": !!error,
    "aria-describedby": error || hint ? iid + '-d' : undefined,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      height: 40,
      padding: '0 14px',
      borderRadius: 'var(--radius)',
      border: `1px solid ${bc}`,
      background: 'var(--card)',
      color: 'var(--ink)',
      font: `400 14px/1 ${mono ? 'var(--font-mono)' : 'var(--font-sans)'}`,
      outline: 'none',
      boxShadow: f ? `0 0 0 3px ${error ? 'rgba(186,26,26,.15)' : 'var(--focus-bleed)'}` : 'none',
      transition: 'border-color var(--dur-fast) ease,box-shadow var(--dur-base) var(--ease-spring)',
      opacity: disabled ? .5 : 1
    }
  }), (error || hint) && /*#__PURE__*/React.createElement("span", {
    id: iid + '-d',
    role: error ? 'alert' : undefined,
    style: {
      font: '400 12px/1.4 var(--font-sans)',
      color: error ? 'var(--error)' : 'var(--muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
function SegmentedControl({
  options = [],
  value,
  defaultValue,
  onChange,
  size = 'md',
  mono = true,
  style
}) {
  const [v, setV] = React.useState(value ?? defaultValue ?? (options[0] && options[0].value));
  const cur = value ?? v;
  const refs = React.useRef({});
  const [ind, setInd] = React.useState({
    left: 0,
    width: 0
  });
  React.useLayoutEffect(() => {
    const el = refs.current[cur];
    if (el) setInd({
      left: el.offsetLeft,
      width: el.offsetWidth
    });
  }, [cur, options.length]);
  const h = size === 'sm' ? 28 : 34;
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      position: 'relative',
      display: 'inline-flex',
      padding: 4,
      borderRadius: 999,
      background: 'var(--paper-2)',
      border: '1px solid var(--line)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 4,
      bottom: 4,
      left: ind.left,
      width: ind.width,
      borderRadius: 999,
      background: 'var(--card)',
      boxShadow: 'var(--shadow-1)',
      transition: 'left var(--dur-slow) var(--ease-spring),width var(--dur-slow) var(--ease-spring)'
    }
  }), options.map(o => {
    const on = o.value === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      role: "tab",
      "aria-selected": on,
      ref: el => refs.current[o.value] = el,
      type: "button",
      onClick: () => {
        setV(o.value);
        onChange && onChange(o.value);
      },
      style: {
        position: 'relative',
        zIndex: 1,
        height: h,
        padding: '0 16px',
        border: 'none',
        background: 'transparent',
        borderRadius: 999,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        cursor: 'pointer',
        font: `500 12px/1 ${mono ? 'var(--font-mono)' : 'var(--font-sans)'}`,
        color: on ? 'var(--ink)' : 'var(--muted)',
        transition: 'color var(--dur-base) var(--ease-standard)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: on ? 'var(--accent-signal)' : 'transparent',
        transition: 'background var(--dur-base) ease'
      }
    }), o.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
function Slider({
  label,
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue,
  onChange,
  format = v => v,
  style
}) {
  const [v, setV] = React.useState(value ?? defaultValue ?? min);
  const cur = value ?? v;
  const pct = (cur - min) / (max - min) * 100;
  const [d, setD] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      color: 'var(--muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 13px/1 var(--font-mono)',
      fontVariantNumeric: 'tabular-nums',
      color: 'var(--accent-signal)'
    }
  }, format(cur))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 18,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 4,
      borderRadius: 4,
      background: 'var(--control-border)',
      opacity: .55
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      width: pct + '%',
      height: 4,
      borderRadius: 4,
      background: 'var(--accent-primary)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: `calc(${pct}% - 9px)`,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: '0 1px 4px rgba(0,26,52,.25),0 0 0 1px rgba(0,26,52,.06)',
      outline: d ? '2px solid var(--focus-ring)' : 'none',
      outlineOffset: 2,
      transform: d ? 'scale(1.15)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-spring)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min,
    max: max,
    step: step,
    value: cur,
    onPointerDown: () => setD(true),
    onPointerUp: () => setD(false),
    onChange: e => {
      const n = +e.target.value;
      setV(n);
      onChange && onChange(n);
    },
    "aria-label": label,
    onFocus: () => setD(true),
    onBlur: () => setD(false),
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      opacity: 0,
      cursor: 'pointer',
      margin: 0
    }
  })));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/SlotPicker.jsx
try { (() => {
function Cell({
  on,
  disabled,
  onClick,
  children,
  radius,
  h
}) {
  const [hv, setHv] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-pressed": on,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHv(true),
    onMouseLeave: () => setHv(false),
    style: {
      height: h,
      borderRadius: radius,
      border: `1px solid ${on ? 'var(--accent-primary)' : hv && !disabled ? 'var(--ink)' : 'var(--control-border)'}`,
      background: on ? 'var(--violet-wash)' : 'transparent',
      color: disabled ? 'var(--muted)' : on ? 'var(--accent-primary)' : 'var(--ink)',
      opacity: disabled ? .35 : 1,
      font: `${on ? 600 : 400} 12px/1 var(--font-mono)`,
      cursor: disabled ? 'default' : 'pointer',
      transform: on ? 'scale(1.02)' : 'none',
      transition: 'all var(--dur-base) var(--ease-spring)'
    }
  }, children);
}
function SlotPicker({
  days = [],
  slots = [],
  day,
  slot,
  onDayChange,
  onSlotChange,
  timezone = 'PT (US)',
  title = 'Pick an advisory session'
}) {
  const [d, setD] = React.useState(day ?? (days.find(x => !x.disabled) || {}).value);
  const [s, setS] = React.useState(slot ?? slots[0]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      font: '600 12px var(--font-mono)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cyan-text)'
    }
  }, timezone)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7,1fr)',
      gap: 6
    }
  }, ['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((x, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      textAlign: 'center',
      font: '400 11px var(--font-mono)',
      color: 'var(--muted)',
      opacity: i > 4 ? .5 : 1
    }
  }, x)), days.map(x => /*#__PURE__*/React.createElement(Cell, {
    key: x.value,
    h: 36,
    radius: "var(--radius)",
    on: x.value === d,
    disabled: x.disabled,
    onClick: () => {
      setD(x.value);
      onDayChange && onDayChange(x.value);
    }
  }, x.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 11px var(--font-mono)',
      color: 'var(--muted)'
    }
  }, "SLOTS (30 MIN)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 8
    }
  }, slots.map(x => /*#__PURE__*/React.createElement(Cell, {
    key: x,
    h: 36,
    radius: "var(--radius)",
    on: x === s,
    onClick: () => {
      setS(x);
      onSlotChange && onSlotChange(x);
    }
  }, x))));
}
Object.assign(__ds_scope, { SlotPicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SlotPicker.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  defaultChecked = false,
  onChange,
  label,
  disabled,
  style
}) {
  const [c, setC] = React.useState(defaultChecked);
  const on = checked ?? c;
  const t = () => {
    if (disabled) return;
    setC(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": on,
    onClick: t,
    style: {
      width: 40,
      height: 24,
      borderRadius: 999,
      border: 'none',
      padding: 3,
      background: on ? 'var(--accent-primary)' : 'var(--paper-2)',
      boxShadow: on ? 'none' : 'inset 0 0 0 1px var(--control-border)',
      transition: 'background var(--dur-base) var(--ease-standard)',
      cursor: 'inherit',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: '0 1px 3px rgba(0,26,52,.25)',
      transform: on ? 'translateX(16px)' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-spring)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/1.3 var(--font-sans)',
      color: 'var(--ink)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Advisory.jsx
try { (() => {
function Advisory() {
  const {
    Chip,
    SlotPicker,
    Input,
    Slider,
    Button,
    Icon,
    Reveal
  } = window.OlgaSirenkoDesignSystem_720a22;
  const [done, setDone] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '96px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      marginBottom: 56,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Chip, {
    tone: "cyan"
  }, "ENTERPRISE WORKFLOW AUDIT")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 90
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '600 clamp(2.2rem,4.5vw,3.25rem)/1.06 var(--font-display)',
      letterSpacing: '-.02em',
      color: 'var(--ink)'
    }
  }, "Automate repetitive drag. ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontWeight: 400,
      color: 'var(--violet)'
    }
  }, "Scale with reliable AI."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 180
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body-lg)',
      color: 'var(--muted)'
    }
  }, "I partner with leaders to eliminate operational bottlenecks using custom agentic pipelines across Google Workspace, Claude, Cursor, and internal APIs."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("div", {
    className: "os-split",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 40,
      padding: 40,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--card)',
      border: '1px solid var(--line)',
      boxShadow: 'var(--shadow-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingRight: 40,
      borderRight: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement(SlotPicker, {
    days: ['6', '7', '8', '9', '10', '11', '12'].map((d, i) => ({
      label: d,
      value: d,
      disabled: i > 4
    })),
    day: "8",
    slots: ['10:00 AM', '01:30 PM', '04:00 PM']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: '600 15px var(--font-mono)',
      color: 'var(--ink)'
    }
  }, "Diagnostic Intake"), done ? /*#__PURE__*/React.createElement("div", {
    role: "status",
    "aria-live": "polite",
    style: {
      padding: 18,
      borderRadius: 'var(--radius)',
      background: 'var(--cyan-wash)',
      border: '1px solid var(--cyan-wash-line)',
      animation: 'os-reveal-up var(--dur-reveal) var(--ease-spring) both'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: '600 13px var(--font-mono)',
      color: 'var(--cyan-text)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check_circle",
    size: 18
  }), "Diagnostic Session Confirmed"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      font: '400 13px/1.5 var(--font-sans)',
      color: 'var(--muted)'
    }
  }, "Calendar invite sent. I will review your workflow prior to the call.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setDone(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Primary bottleneck",
    required: true,
    placeholder: "Manual CRM sync, document transcription..."
  }), /*#__PURE__*/React.createElement(Slider, {
    label: "Hours lost / week",
    min: 2,
    max: 60,
    defaultValue: 15,
    format: v => v + ' hrs/wk'
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    type: "email",
    required: true,
    placeholder: "alex@company.com"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    mono: true,
    fullWidth: true,
    variant: "primary"
  }, "Confirm & Schedule"))))));
}
function CaseSheet({
  p,
  onClose
}) {
  const {
    Chip,
    Button,
    Icon
  } = window.OlgaSirenkoDesignSystem_720a22;
  const [in_, setIn] = React.useState(false);
  const closeRef = React.useRef(null);
  const close = () => {
    setIn(false);
    setTimeout(onClose, 350);
  };
  React.useEffect(() => {
    if (!p) {
      setIn(false);
      return;
    }
    const prev = document.activeElement;
    requestAnimationFrame(() => {
      setIn(true);
      closeRef.current && closeRef.current.focus();
    });
    const k = e => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', k);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', k);
      document.body.style.overflow = '';
      prev && prev.focus && prev.focus();
    };
  }, [p]);
  if (!p) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: close,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: in_ ? 'rgba(0,10,20,.45)' : 'rgba(0,10,20,0)',
      backdropFilter: in_ ? 'blur(8px)' : 'blur(0)',
      WebkitBackdropFilter: in_ ? 'blur(8px)' : 'blur(0)',
      transition: 'all var(--dur-slow) var(--ease-spring)',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "os-sheet-title",
    onClick: e => e.stopPropagation(),
    style: {
      width: 'min(880px,100%)',
      maxHeight: '86vh',
      overflow: 'auto',
      background: 'var(--card)',
      borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
      border: '1px solid var(--line)',
      padding: 40,
      transform: in_ ? 'none' : 'translateY(100%)',
      transition: 'transform 550ms var(--ease-spring)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 5,
      borderRadius: 3,
      background: 'var(--line)',
      margin: '-24px auto 24px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Chip, null, p.tag), /*#__PURE__*/React.createElement("button", {
    ref: closeRef,
    onClick: close,
    "aria-label": "Close case study",
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: '1px solid var(--line)',
      background: 'var(--paper-2)',
      color: 'var(--ink)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 16
  }))), /*#__PURE__*/React.createElement("h2", {
    id: "os-sheet-title",
    style: {
      margin: '16px 0 12px',
      font: 'var(--type-h1)',
      letterSpacing: 'var(--ls-h1)',
      color: 'var(--ink)'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 20px',
      font: 'var(--type-body-lg)',
      color: 'var(--ink-2)',
      maxWidth: 620
    }
  }, p.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 28
    }
  }, p.out.map(o => /*#__PURE__*/React.createElement(Chip, {
    key: o,
    tone: "outline"
  }, o))), p.img && /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: "",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--line)',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      font: '400 12px var(--font-mono)',
      color: 'var(--muted)'
    }
  }, "Full case study content not supplied \u2014 placeholder sheet.")));
}
Object.assign(window, {
  Advisory,
  CaseSheet
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Advisory.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Header.jsx
try { (() => {
function Header({
  route,
  setRoute,
  theme,
  setTheme
}) {
  const {
    Monogram,
    SegmentedControl,
    Button,
    Icon
  } = window.OlgaSirenkoDesignSystem_720a22;
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8);
    f();
    window.addEventListener('scroll', f, {
      passive: true
    });
    return () => window.removeEventListener('scroll', f);
  }, []);
  const nav = v => {
    setRoute(v);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'var(--surface-glass)',
      backdropFilter: 'var(--blur-header)',
      WebkitBackdropFilter: 'var(--blur-header)',
      borderBottom: `1px solid ${scrolled ? 'var(--line)' : 'transparent'}`,
      transition: 'border-color var(--dur-base) ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 24px',
      height: 72,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Olga Sirenko \u2014 home",
    onClick: e => {
      e.preventDefault();
      nav('work');
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Monogram, {
    size: 36
  }), /*#__PURE__*/React.createElement("span", {
    className: "os-hide-s",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 14px/1 var(--font-sans)',
      color: 'var(--ink)',
      letterSpacing: '-.01em'
    }
  }, "Olga Sirenko"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px/1 var(--font-mono)',
      color: 'var(--muted)'
    }
  }, "Staff Systems Architect"))), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Primary"
  }, /*#__PURE__*/React.createElement(SegmentedControl, {
    value: route,
    onChange: nav,
    options: [{
      label: 'Work',
      value: 'work'
    }, {
      label: 'Advisory',
      value: 'advisory'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme',
    onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: '1px solid var(--line)',
      background: 'transparent',
      color: 'var(--ink)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: theme === 'dark' ? 'light_mode' : 'dark_mode',
    size: 18
  })), /*#__PURE__*/React.createElement(Button, {
    mono: true,
    variant: "primary",
    onClick: () => nav('advisory')
  }, "Book a call"))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
function Hero({
  setRoute
}) {
  const {
    StatusBadge,
    Button,
    Reveal
  } = window.OlgaSirenkoDesignSystem_720a22;
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '96px 24px 104px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,7fr) minmax(0,5fr)',
      gap: 48,
      alignItems: 'center'
    },
    className: "os-hero"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(StatusBadge, null, "Available for Staff Roles & Advisory")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 90
  }, /*#__PURE__*/React.createElement("h1", {
    id: "top",
    style: {
      margin: 0,
      font: '600 clamp(2.4rem,5vw,3.75rem)/1.04 var(--font-display)',
      letterSpacing: '-.02em',
      color: 'var(--ink)',
      textWrap: 'balance'
    }
  }, "Designing agentic AI & high-density systems people ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontWeight: 400,
      color: 'var(--cyan-text)'
    }
  }, "trust."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 180
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 520,
      font: 'var(--type-body-lg)',
      color: 'var(--muted)'
    }
  }, "Staff product designer & systems architect bridging autonomous AI agents with critical enterprise operator workflows.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 270
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16,
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    mono: true,
    icon: "arrow_downward",
    onClick: () => {
      const el = document.getElementById('work');
      el && window.scrollTo({
        top: el.offsetTop - 72,
        behavior: 'smooth'
      });
    }
  }, "Selected work"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    mono: true,
    onClick: () => setRoute('advisory')
  }, "AI advisory")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150,
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      width: 320,
      aspectRatio: '1',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: `1px solid ${h ? 'var(--hover-border)' : 'var(--line)'}`,
      boxShadow: h ? 'var(--shadow-lift)' : 'var(--shadow-2)',
      transform: h ? 'translateY(var(--lift))' : 'none',
      transition: 'all var(--dur-slow) var(--ease-spring)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/portrait.jpg",
    alt: "Olga Sirenko portrait",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'grayscale(1) contrast(1.25) brightness(.95)',
      transform: h ? 'scale(var(--image-zoom))' : 'none',
      transition: 'transform var(--dur-image) var(--ease-spring)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top,rgba(6,11,20,.75),transparent 55%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 14,
      right: 14,
      bottom: 14,
      padding: '8px 12px',
      borderRadius: 'var(--radius)',
      background: 'rgba(11,27,48,.8)',
      backdropFilter: 'var(--blur-glass)',
      WebkitBackdropFilter: 'var(--blur-glass)',
      border: '1px solid rgba(255,255,255,.1)',
      display: 'flex',
      justifyContent: 'space-between',
      font: '500 11px var(--font-mono)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff'
    }
  }, "OLGA SIRENKO"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#52F8F4',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: '#52F8F4'
    }
  }), "10+ YRS"))))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Sections.jsx
try { (() => {
function Wrap({
  children,
  id
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      padding: '96px 0',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 24px'
    }
  }, children));
}
function About() {
  const {
    Kicker,
    MetricTile,
    Reveal
  } = window.OlgaSirenkoDesignSystem_720a22;
  return /*#__PURE__*/React.createElement(Wrap, {
    id: "about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "os-split",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,7fr) minmax(0,5fr)',
      gap: 48,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Profile"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--type-h1)',
      letterSpacing: 'var(--ls-h1)',
      color: 'var(--ink)',
      textWrap: 'balance'
    }
  }, "Olga Sirenko builds the software behind critical decisions."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 560,
      font: 'var(--type-body-lg)',
      color: 'var(--ink-2)'
    }
  }, "Translating complex telemetry data and non-deterministic AI behavior into calm, ergonomic interfaces operators trust during peak load.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 90,
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(MetricTile, {
    value: "10+ Yrs",
    label: "Enterprise"
  }), /*#__PURE__*/React.createElement(MetricTile, {
    value: "0\u21921",
    label: "Systems"
  }), /*#__PURE__*/React.createElement(MetricTile, {
    value: "Human-AI",
    label: "Loops"
  }))));
}
function Philosophy() {
  const {
    Card,
    Reveal
  } = window.OlgaSirenkoDesignSystem_720a22;
  const P = [['01', 'Ergonomics over fluff', 'Prioritizing signal-to-noise ratio and optical rhythm for operators spending 8+ hours inside the canvas.'], ['02', 'Supervised AI autonomy', 'Transparent confidence thresholds and reversible rollbacks so operators supervise agents without fear.'], ['03', 'Code-synchronized tokens', '1:1 parity with React and MUI tokens, removing guesswork between visual spec and production code.']];
  return /*#__PURE__*/React.createElement(Wrap, {
    id: "philosophy"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "Principles",
    title: "Design philosophy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "os-3",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 24
    }
  }, P.map(([n, t, b], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: n,
    delay: i * 90
  }, /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    tone: "panel",
    padding: 28,
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px var(--font-mono)',
      color: 'var(--cyan-text)'
    }
  }, n), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '12px 0 8px',
      font: 'var(--type-h3)',
      letterSpacing: '-.01em',
      color: 'var(--ink)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      fontSize: 14,
      color: 'var(--muted)'
    }
  }, b))))));
}
function Skills() {
  const {
    Reveal
  } = window.OlgaSirenkoDesignSystem_720a22;
  const S = [['Strategy', ['Workflow Audits', 'Latency Discovery', 'Operator Shadowing', 'Executive Alignment']], ['AI / Agentic', ['Probabilistic States', 'Approval Gates', 'Traceability Ledgers', 'Confidence Throttling'], true], ['Design Systems', ['Token Architecture', 'Sub-pixel Contrast', 'MUI & Tailwind Sync', 'Figma Variables']], ['Engineering', ['React State Logic', 'Streaming WebSockets', 'URL AST Tokens', 'Latency Benchmarks']]];
  return /*#__PURE__*/React.createElement(Wrap, {
    id: "skills"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "Capabilities",
    title: "Skillset matrix"
  }), /*#__PURE__*/React.createElement("div", {
    className: "os-4",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gap: 24
    }
  }, S.map(([t, l, hi], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t,
    delay: i * 90
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      borderRadius: 'var(--radius-lg)',
      background: 'color-mix(in srgb,var(--paper-2) 50%,transparent)',
      border: '1px solid var(--line)',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 14px',
      font: '600 11px var(--font-mono)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: hi ? 'var(--cyan-text)' : 'var(--ink)'
    }
  }, t), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'grid',
      gap: 8
    }
  }, l.map(x => /*#__PURE__*/React.createElement("li", {
    key: x,
    style: {
      font: '400 14px/1.4 var(--font-sans)',
      color: 'var(--ink-2)'
    }
  }, x))))))));
}
function Endorsements() {
  const {
    Card,
    Quote,
    Reveal
  } = window.OlgaSirenkoDesignSystem_720a22;
  return /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "Feedback",
    title: "Endorsements"
  }), /*#__PURE__*/React.createElement("div", {
    className: "os-split",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    tone: "panel",
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(Quote, {
    name: "Michael Kramer",
    role: "VP of Product"
  }, "\u201COlga brings systems thinking and rare clarity to complex enterprise software. She bridges technical telemetry constraints with operator empathy like nobody else.\u201D"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 90
  }, /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    tone: "panel",
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(Quote, {
    name: "Sarah Lin",
    role: "Principal AI Architect"
  }, "\u201CHer work on human-in-the-loop AI states gave our operators the confidence to adopt autonomous pipelines without fear. A true staff-caliber partner.\u201D")))));
}
function Footer() {
  const {
    Monogram
  } = window.OlgaSirenkoDesignSystem_720a22;
  return /*#__PURE__*/React.createElement("footer", {
    role: "contentinfo",
    style: {
      padding: '64px 0',
      background: 'var(--paper-2)',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 24px',
      display: 'grid',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--type-h2)',
      fontSize: 32,
      color: 'var(--ink)'
    }
  }, "Let's build something exceptional."), /*#__PURE__*/React.createElement("a", {
    href: "mailto:olga.sirenko.design@gmail.com",
    style: {
      font: '400 18px var(--font-mono)',
      color: 'var(--cyan-text)'
    }
  }, "olga.sirenko.design@gmail.com")), /*#__PURE__*/React.createElement(Monogram, {
    shape: "square",
    size: 56
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 24,
      borderTop: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'space-between',
      font: '400 11px var(--font-mono)',
      letterSpacing: '.09em',
      color: 'var(--muted)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://linkedin.com",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "LINKEDIN"), /*#__PURE__*/React.createElement("a", {
    href: "https://github.com",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "GITHUB"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "READCV")), /*#__PURE__*/React.createElement("span", null, "\xA9 2025 Olga Sirenko."))));
}
Object.assign(window, {
  About,
  Philosophy,
  Skills,
  Endorsements,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Work.jsx
try { (() => {
const PROJECTS = [{
  tag: 'TELEMETRY & SAAS',
  tint: '#3B6FD6',
  title: 'Real-Time Fleet Telemetry Engine',
  body: 'Transformed high-latency tabular queries into sub-second anomaly triage for 48,000 active operators.',
  out: ['38% faster triage', 'Zero regression'],
  img: '../../assets/images/telemetry.jpg',
  hud: ['42ms latency', 'STREAM ACTIVE']
}, {
  tag: 'AGENTIC AI • HUMAN-IN-THE-LOOP',
  tint: '#542CB7',
  title: 'Autonomous LLM Agent Console',
  body: 'Reversible state checkpoints and confidence-throttled gates to control multi-agent workflows safely.',
  out: ['Instant rollback', 'Zero data loss'],
  img: '../../assets/images/console.jpg',
  hud: ['Confidence: 94%', 'DISPATCHED']
}, {
  tag: 'DESIGN INFRASTRUCTURE',
  tint: '#0A6B84',
  title: 'Hyper-Scale Financial Token Engine',
  body: '1:1 code-aligned design tokens powering 40+ dynamic numeric columns with WCAG AAA optical contrast.',
  out: ['120+ synced tokens', '100% WCAG AAA'],
  code: true
}];
function SectionHead({
  kicker,
  title,
  id
}) {
  const {
    Kicker,
    Reveal
  } = window.OlgaSirenkoDesignSystem_720a22;
  return /*#__PURE__*/React.createElement(Reveal, {
    style: {
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, kicker), /*#__PURE__*/React.createElement("h2", {
    id: id,
    style: {
      margin: '10px 0 0',
      font: 'var(--type-h1)',
      letterSpacing: 'var(--ls-h1)',
      color: 'var(--ink)'
    }
  }, title));
}
function ShowcaseCard({
  p,
  onOpen
}) {
  const {
    Chip,
    Button,
    CodeBlock
  } = window.OlgaSirenkoDesignSystem_720a22;
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: 40,
      border: `1px solid ${h ? 'var(--hover-border)' : 'var(--line)'}`,
      background: `linear-gradient(135deg,color-mix(in srgb,${p.tint} 16%,var(--card)),var(--card) 70%)`,
      boxShadow: h ? 'var(--shadow-lift)' : 'var(--shadow-1)',
      transform: h ? 'translateY(var(--lift))' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-spring),box-shadow var(--dur-slow) var(--ease-spring),border-color var(--dur-base) ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "os-split",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Chip, null, p.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--type-h2)',
      fontSize: 30,
      color: 'var(--ink)'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 440,
      font: 'var(--type-body)',
      color: 'var(--ink-2)'
    }
  }, p.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, p.out.map(o => /*#__PURE__*/React.createElement(Chip, {
    key: o,
    tone: "outline"
  }, o))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    mono: true,
    variant: "inverse",
    icon: "arrow_forward",
    onClick: () => onOpen(p),
    "aria-label": 'Explore case study: ' + p.title
  }, "Explore case study"))), p.code ? /*#__PURE__*/React.createElement(CodeBlock, {
    filename: "tokens.terminal.json",
    meta: "PARITY: 1:1"
  }, '{\n  ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--code-tag)'
    }
  }, "\"density\""), ': ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff'
    }
  }, "\"compact-grid\""), ',\n  ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--code-tag)'
    }
  }, "\"padding\""), ': ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--code-hl)'
    }
  }, "\"2px 6px\""), ',\n  ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--code-tag)'
    }
  }, "\"contrast\""), ': ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--code-hl)'
    }
  }, "\"14.2:1 (AAA)\""), ',\n  ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--code-tag)'
    }
  }, "\"guardrails\""), ': { ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--code-tag)'
    }
  }, "\"confidence\""), ': ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--code-var)'
    }
  }, "0.89"), ' }\n}') : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--line)',
      background: '#02101F'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: p.title + ' interface',
    style: {
      display: 'block',
      width: '100%',
      transform: h ? 'scale(var(--image-zoom))' : 'none',
      transition: 'transform var(--dur-image) var(--ease-spring)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 12,
      right: 12,
      bottom: 12,
      padding: '6px 12px',
      borderRadius: 'var(--radius)',
      background: 'rgba(0,0,0,.7)',
      backdropFilter: 'var(--blur-glass)',
      WebkitBackdropFilter: 'var(--blur-glass)',
      border: '1px solid rgba(255,255,255,.1)',
      display: 'flex',
      justifyContent: 'space-between',
      font: '400 11px var(--font-mono)',
      color: '#C3CCDD'
    }
  }, /*#__PURE__*/React.createElement("span", null, p.hud[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#52F8F4',
      fontWeight: 600
    }
  }, p.hud[1])))));
}
function Work({
  onOpen
}) {
  const {
    Reveal
  } = window.OlgaSirenkoDesignSystem_720a22;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 0',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "Portfolio",
    title: "Selected work",
    id: "work"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 40
    }
  }, PROJECTS.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: p.title,
    delay: i * 90
  }, /*#__PURE__*/React.createElement(ShowcaseCard, {
    p: p,
    onOpen: onOpen
  }))))));
}
Object.assign(window, {
  Work,
  SectionHead,
  PROJECTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Work.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.Monogram = __ds_scope.Monogram;

__ds_ns.Reveal = __ds_scope.Reveal;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.CompareCard = __ds_scope.CompareCard;

__ds_ns.MetricTile = __ds_scope.MetricTile;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.SlotPicker = __ds_scope.SlotPicker;

__ds_ns.Switch = __ds_scope.Switch;

})();
