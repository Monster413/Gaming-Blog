(function () {
  const feed = document.getElementById("feed");
  const nowPlaying = document.getElementById("nowPlaying");
  const filterNav = document.getElementById("filterNav");
  const overlay = document.getElementById("overlay");
  const overlayContent = document.getElementById("overlayContent");
  const overlayClose = document.getElementById("overlayClose");

  const sorted = [...REVIEWS].sort((a, b) => (a.date < b.date ? 1 : -1));

  function scoreColor(rating) {
    return "var(--amber)";
  }

  function renderTagFilters() {
    const tags = new Set();
    REVIEWS.forEach((r) => r.tags.forEach((t) => tags.add(t)));
    [...tags].sort().forEach((tag) => {
      const btn = document.createElement("button");
      btn.className = "filter-btn";
      btn.dataset.tag = tag;
      btn.textContent = tag;
      filterNav.appendChild(btn);
    });
  }

  function renderFeed(activeTag) {
    feed.innerHTML = "";
    const list = sorted.filter(
      (r) => activeTag === "all" || r.tags.includes(activeTag)
    );

    if (list.length === 0) {
      feed.innerHTML = '<p class="np-empty">Nothing tagged that yet.</p>';
      return;
    }

    list.forEach((r) => {
      const entry = document.createElement("article");
      entry.className = "entry";
      entry.tabIndex = 0;
      entry.setAttribute("role", "button");
      entry.setAttribute("aria-label", "Read full review of " + r.title);

      const statusClass =
        r.status === "dropped" ? "status-dropped" : "status-finished";
      const statusLabel = r.status === "dropped" ? "dropped" : "finished";
      const pct = Math.max(0, Math.min(100, (r.rating / 10) * 100));

      entry.innerHTML = `
        <div class="score-block">
          <span class="score-number" style="color:${scoreColor(r.rating)}">${r.rating}</span>
          <span class="score-max">/ 10</span>
          <div class="score-meter"><div class="score-meter-fill" style="width:${pct}%"></div></div>
        </div>
        <div class="entry-body">
          <p class="entry-meta"><span class="${statusClass}">${statusLabel}</span> &middot; ${formatDate(r.date)}</p>
          <h3 class="entry-title">${escapeHtml(r.title)}</h3>
          <p class="entry-excerpt">${escapeHtml(r.excerpt)}</p>
          <div class="entry-tags">${r.tags.map((t) => `<span class="tag-chip">${escapeHtml(t)}</span>`).join("")}</div>
        </div>
      `;

      entry.addEventListener("click", () => openReview(r));
      entry.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openReview(r);
        }
      });

      feed.appendChild(entry);
    });
  }

  function renderNowPlaying() {
    if (!NOW_PLAYING || NOW_PLAYING.length === 0) {
      nowPlaying.innerHTML = `
        <h2 class="ticket-title">Now playing</h2>
        <p class="np-empty">Nothing on the shelf right now.</p>
      `;
      return;
    }

    nowPlaying.innerHTML =
      '<h2 class="ticket-title">Now playing</h2>' +
      NOW_PLAYING.map(
        (g) => `
        <div class="now-playing-item">
          <p class="np-game">${escapeHtml(g.game)}</p>
          <p class="np-note">${escapeHtml(g.note)}</p>
        </div>
      `
      ).join("");
  }

  function openReview(r) {
    const statusLabel = r.status === "dropped" ? "Dropped" : "Finished";
    overlayContent.innerHTML = `
      <div class="overlay-content">
        <h2 id="overlayTitle">${escapeHtml(r.title)}</h2>
        <p class="overlay-meta">${statusLabel} &middot; ${formatDate(r.date)} &middot; ${r.tags.map(escapeHtml).join(", ")}</p>
        <div class="overlay-score">${r.rating} / 10</div>
        <div class="overlay-body">
          ${r.body.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}
        </div>
      </div>
    `;
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    overlayClose.focus();
    history.replaceState(null, "", "#" + r.id);
  }

  function closeReview() {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    history.replaceState(null, "", location.pathname);
  }

  overlayClose.addEventListener("click", closeReview);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeReview();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) closeReview();
  });

  filterNav.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    filterNav
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderFeed(btn.dataset.tag);
  });

  function formatDate(iso) {
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function openFromHash() {
    const id = location.hash.replace("#", "");
    if (!id) return;
    const match = REVIEWS.find((r) => r.id === id);
    if (match) openReview(match);
  }

  renderTagFilters();
  renderNowPlaying();
  renderFeed("all");
  openFromHash();
})();
