/**
 * nav.js — Shared sidebar navigation
 * dspmsoftware.com
 * Injected into every page. Edit once, updates everywhere.
 */

(function() {
  const nav = `
    <div class="nav-section">
      <div class="nav-section-label">Why</div>
      <a href="/why/" class="nav-item depth-0">The data you trust</a>
    </div>

    <div class="nav-divider"></div>

    <div class="nav-section">
      <div class="nav-section-label">Landscape</div>
      <a href="/landscape/" class="nav-item depth-0">Market overview</a>
      <a href="/landscape/market-direction/" class="nav-item depth-1">&#9492; Market direction</a>
      <a href="/landscape/vendor-index/" class="nav-item depth-1">&#9492; Vendor index</a>
    </div>

    <div class="nav-divider"></div>

    <div class="nav-section">
      <div class="nav-section-label">Tools</div>
      <a href="/tools/" class="nav-item depth-0">All tools</a>
      <a href="/tools/vendor-comparison/" class="nav-item depth-1">&#9500; Vendor comparison</a>
      <a href="/tools/architecture-fit/" class="nav-item depth-1">&#9492; Architecture fit</a>
    </div>

    <div class="nav-divider"></div>

    <div class="nav-section">
      <div class="nav-section-label">Comparisons</div>
      <a href="/comparisons/" class="nav-item depth-0">All comparisons</a>
      <a href="/comparisons/cyera-vs-varonis/" class="nav-item depth-1">&#9500; Cyera vs. Varonis</a>
      <a href="/comparisons/bigid-vs-securiti/" class="nav-item depth-1">&#9500; BigID vs. Securiti</a>
      <a href="/comparisons/wiz-dspm-vs-standalone/" class="nav-item depth-1">&#9500; Wiz vs. Standalone</a>
      <a href="/comparisons/" class="nav-item depth-1">&#9492; more</a>
    </div>

    <div class="nav-divider"></div>

    <div class="nav-section">
      <div class="nav-section-label">Guides</div>
      <a href="/guides/" class="nav-item depth-0">All guides</a>
      <a href="/guides/agentless-vs-agent-based/" class="nav-item depth-1">&#9500; Agentless vs. agent-based</a>
      <a href="/guides/dspm-poc-evaluation/" class="nav-item depth-1">&#9492; Before a DSPM POC</a>
    </div>

    <div class="nav-divider"></div>

    <div class="nav-section">
      <a href="/subscribe/" class="nav-item depth-0 nav-subscribe">Subscribe &rarr;</a>
    </div>
  ;

  const container = document.getElementById('sidebar-nav');
  if (container) {
    container.innerHTML = nav;

    const path = window.location.pathname;
    const links = container.querySelectorAll('a.nav-item');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === path || (href !== '/' && path.startsWith(href))) {
        link.classList.add('active');
      }
    });
  }

})();
