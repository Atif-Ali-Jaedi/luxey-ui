export const buttonCodes = {
	default: `<button class="button primary">Button</button>`,
	disabled: `<button class="button primary" data-disabled>Button</button>`,
	sizes: `<button class="button size-sm">Small</button>
<button class="button size-md">Medium</button>
<button class="button size-lg">Large</button>`,
	radius: `<div class="flex items-center gap-3 [&>*]:shrink-0">
  <button class="button radius-full">Full</button>
  <button class="button radius-lg">Large</button>
  <button class="button radius-md">Medium</button>
  <button class="button radius-sm">Small</button>
  <button class="button radius-none">None</button>
</div>`,
	colors: `<div class="flex flex-wrap items-center gap-4">
  <button class="button foreground">Foreground</button>
  <button class="button default">Default</button>
  <button class="button primary">Primary</button>
  <button class="button secondary">Secondary</button>
  <button class="button success">Success</button>
  <button class="button warning">Warning</button>
  <button class="button danger">Danger</button>
</div>`,
	variants: `<div class="flex flex-wrap gap-4 items-center p-2">
	<button class="button primary solid">Solid</button>
	<button class="button primary faded">Faded</button>
	<button class="button primary bordered">Bordered</button>
	<button class="button primary light">Light</button>
	<button class="button primary flat">Flat</button>
	<button class="button primary ghost">Ghost</button>
	<button class="button primary shadow">Shadow</button>
</div>`,
	withIcons: `<div class="flex items-center gap-4">
  <button class="button success gap-2 min-w-max">
    Take a photo
    <svg
      width="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.44 6.236c.04.07.11.12.2.12 2.4 0 4.36 1.958 4.36 4.355v5.934A4.368 4.368 0 0117.64 21H6.36A4.361 4.361 0 012 16.645V10.71a4.361 4.361 0 014.36-4.355c.08 0 .16-.04.19-.12l.06-.12.106-.222a97.79 97.79 0 01.714-1.486C7.89 3.51 8.67 3.01 9.64 3h4.71c.97.01 1.76.51 2.22 1.408.157.315.397.822.629 1.31l.141.299.1.22zm-.73 3.836c0 .5.4.9.9.9s.91-.4.91-.9-.41-.909-.91-.909-.9.41-.9.91zm-6.44 1.548c.47-.47 1.08-.719 1.73-.719.65 0 1.26.25 1.72.71.46.459.71 1.068.71 1.717A2.438 2.438 0 0112 15.756c-.65 0-1.26-.25-1.72-.71a2.408 2.408 0 01-.71-1.717v-.01c-.01-.63.24-1.24.7-1.699zm4.5 4.485a3.91 3.91 0 01-2.77 1.15 3.921 3.921 0 01-3.93-3.926 3.865 3.865 0 011.14-2.767A3.921 3.921 0 0112 9.402c1.05 0 2.04.41 2.78 1.15.74.749 1.15 1.738 1.15 2.777a3.958 3.958 0 01-1.16 2.776z"
        fill="currentColor"
      />
    </svg>
  </button>
  <button class="button danger bordered gap-2 min-w-max">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1.5"
      >
        <path
          d="M11.845 21.662C8.153 21.662 5 21.088 5 18.787s3.133-4.425 6.845-4.425c3.692 0 6.845 2.1 6.845 4.4s-3.134 2.9-6.845 2.9z"
        />
        <path d="M11.837 11.174a4.372 4.372 0 10-.031 0z" />
      </g>
    </svg>
    Delete user
  </button>
</div>`,
	iconOnly: `<div class="flex items-center gap-4">
  <button class="button primary" data-icon-only>
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" viewBox="0 0 24 24">
  	<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 6v12m6-6H6" />
    </svg>
  </button>
  <button class="button danger" data-icon-only>
    <svg
      width="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</div>`,
	customStyles: `<button class="button radius-full bg-gradient-to-tr from-[#ff4ecd] to-[#f5a524] !text-white shadow-lg m-2">Button</button>`,
	buttonGroup: `<div class="button-group">
  <button class="button">One</button>
  <button class="button">Two</button>
  <button class="button">Three</button>
</div>`
};
