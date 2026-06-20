/**
 * config.js — Site identity and accent color configuration
 * dspmsoftware.com
 *
 * accent:     #2E5CA6  (blue)
 * accentDim:  #1F3F78  (~15% darker)
 * accentPale: #E6ECF7  (very light tint, used for callout backgrounds)
 */

window.SITE_CONFIG = {
  name:      "DSPM Software",
  nameHtml:  "DSPM <span>Software</span>",
  domain:    "dspmsoftware.com",
  tagline:   "Independent guidance for DSPM buyers",
  accent:    "#2E5CA6",
  accentDim: "#1F3F78",
  accentPale:"#E6ECF7"
};

(function() {
  var r = document.documentElement;
  r.style.setProperty('--accent',      window.SITE_CONFIG.accent);
  r.style.setProperty('--accent-dim',  window.SITE_CONFIG.accentDim);
  r.style.setProperty('--accent-pale', window.SITE_CONFIG.accentPale);
})();
