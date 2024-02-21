export const switchCodes = {
	default: `<input type="checkbox" class="switch" />`,
	disabled: `<input type="checkbox" class="switch foreground" disabled/>`,
	sizes: `<input type="checkbox" class="switch size-sm foreground" checked />
<input type="checkbox" class="switch size-md foreground" checked />
<input type="checkbox" class="switch size-lg foreground" checked />`,
	colors: `<div class="flex items-center gap-2 [&_*]:shrink-0">
  <input type="checkbox" class="switch default" checked />
  <input type="checkbox" class="switch foreground" checked />
  <input type="checkbox" class="switch primary" checked />
  <input type="checkbox" class="switch secondary" checked />
  <input type="checkbox" class="switch success" checked />
  <input type="checkbox" class="switch warning" checked />
  <input type="checkbox" class="switch danger" checked />
</div>`
};
