const loader = document.querySelector(`#loading-spinner`);
const ball1 = loader.querySelector(`#ball-1`);
const ball2 = loader.querySelector(`#ball-2`);
const ball3 = loader.querySelector(`#ball-3`);

export function animate() {
  ball1.classList.remove(`bg-neutral-800`);
  ball2.classList.remove(`bg-neutral-800`);
  ball3.classList.remove(`bg-neutral-800`);
  ball1.classList.add(`bg-yellow-500`, `animate-bounce`);
  ball2.classList.add(
    `bg-yellow-500`,
    `animate-bounce`,
    `[animation-delay:0.1s]`,
  );
  ball3.classList.add(
    `bg-yellow-500`,
    `animate-bounce`,
    `[animation-delay:0.2s]`,
  );
}
