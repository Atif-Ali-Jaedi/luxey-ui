export const buttonCodes = {
	default: `<button class="button">Button</button>`,
	disabled: `<button class="button" data-disabled>Button</button>`,
	sizes: `<button class="button size-sm">Small</button>
<button class="button size-md mx-0?5">Medium</button>
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
	variants: `<div class="container p-3 flex flex-wrap gap-4"></div>
<script>
  const colors = [
  	"foreground",
  	"default",
  	"primary",
  	"secondary",
  	"success",
  	"warning",
  	"danger"
  ];
  const variants = [
  	"solid",
  	"faded",
  	"bordered",
  	"light",
  	"flat",
  	"ghost",
  	"shadow"
  ];
  	for (let v = 0; v < variants.length; v++) {
  for (let c = 0; c < colors.length; c++) {
  		const button = document.createElement("button");
  		button.className = \`button \$\{colors[c]\} \$\{variants[v]\}\`;
  		button.textContent = "Button";
  		document.querySelector(".container").appendChild(button);
  	}
  }
</script>`,
	iconOnly: `<button class="button foreground" data-icon-only>
  <svg xmlns="http://www.w3.org/2000/svg" width="2em" viewBox="0 0 24 24">
	<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 6v12m6-6H6" />
  </svg>
</button>`,
	buttonGroup: `<div class="button-group">
  <button class="button">One</button>
  <button class="button">Two</button>
  <button class="button">Three</button>
</div>`,
	crc: `<button class="button !bg-indigo-500 text-white" data-ripple-color="bg-[#ffffff30]">Button</button>
<button class="button !bg-sky-600 text-white [&>.ripple]:bg-white/30">Button</button>
<style>
  #btn > .ripple {
    background: #ffffff30;
    animation-duration: 1.5s;
  }
</style>
<button id="btn" class="button !bg-cyan-500 text-white">Button</button>`
};
