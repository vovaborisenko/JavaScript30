type Nullish<T> = T | null;
interface NamedHTMLInputElement extends HTMLInputElement {
  name: "volume" | "playbackRate";
}
/* Get Our Elements */
(function () {
  const player: Nullish<HTMLDivElement> = document.querySelector(".player");

  if (player === null) return;

  const video: Nullish<HTMLVideoElement> = player.querySelector(".viewer");
  const progress: Nullish<HTMLDivElement> = player.querySelector(".progress");
  const progressBar: Nullish<HTMLDivElement> =
    player.querySelector(".progress__filled");
  const toggle: Nullish<HTMLButtonElement> = player.querySelector(".toggle");
  const skipButtons: NodeListOf<HTMLButtonElement> =
    player.querySelectorAll("[data-skip]");
  const ranges: NodeListOf<NamedHTMLInputElement> =
    player.querySelectorAll(".player__slider");

  /* Build out functions */
  function togglePlay() {
    if (!video) return;

    const method = video.paused ? "play" : "pause";

    video[method]();
  }

  function updateButton(this: HTMLVideoElement) {
    const icon = this.paused ? "►" : "❚ ❚";

    if (!toggle) return;

    toggle.textContent = icon;
  }

  function skip(this: HTMLButtonElement) {
    if (!video) return;

    video.currentTime += parseFloat(this.dataset.skip || "");
  }

  function handleRangeUpdate(this: NamedHTMLInputElement) {
    if (!video) return;

    video[this.name] = parseFloat(this.value);
  }

  function handleProgress() {
    if (!video || !progressBar) return;

    const percent = (video.currentTime / video.duration) * 100;

    progressBar.style.flexBasis = `${percent}%`;
  }

  function scrub(e: MouseEvent) {
    if (!video || !progress) return;

    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;

    video.currentTime = scrubTime;
  }

  if (video) {
    /* Hook up the event listeners */
    video.addEventListener("click", togglePlay);
    video.addEventListener("play", updateButton);
    video.addEventListener("pause", updateButton);
    video.addEventListener("timeupdate", handleProgress);
  }

  if (toggle) {
    toggle.addEventListener("click", togglePlay);
  }

  skipButtons.forEach((button) => button.addEventListener("click", skip));

  ranges.forEach((range) =>
    range.addEventListener("change", handleRangeUpdate)
  );
  ranges.forEach((range) =>
    range.addEventListener("mousemove", handleRangeUpdate)
  );

  if (progress) {
    let mousedown = false;

    progress.addEventListener("click", scrub);
    progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
    progress.addEventListener("mousedown", () => (mousedown = true));
    progress.addEventListener("mouseup", () => (mousedown = false));
  }
})();
