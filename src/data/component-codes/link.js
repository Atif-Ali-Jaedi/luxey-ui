export const linkCodes = {
	default: `<a class="link dark:text-white">Link</a>`,
	disabled: `<a class="link primary" data-disabled>Disabled</a>`,
	sizes: `<div class="flex items-center gap-3">
  <a class="link primary size-sm">Small</a>
  <a class="link primary size-md">Medium</a>
  <a class="link primary size-lg">Large</a>
</div>`,
	colors: `<div class="flex items-center gap-3">
  <a class="link foreground dark:text-white">Foreground</a>
  <a class="link primary">Primary</a>
  <a class="link secondary">Secondary</a>
  <a class="link success">Success</a>
  <a class="link warning">Warning</a>
  <a class="link danger">Danger</a>
</div>`,
	underline: `<div class="flex items-center gap-3">
  <a class="link primary underline underline-none">None</a>
  <a class="link primary underline underline-hover">Hover</a>
  <a class="link primary underline underline-always">Always</a>
  <a class="link primary underline underline-active">Active</a>
  <a class="link primary underline underline-focus">Focus</a>
</div>`,
	external: `<div class="flex items-center gap-3">
  <a class="link success" target="_blank">External link</a>
  <a class="link secondary" data-show-anchor-icon="true">External link</a>
</div>`,
	block: `<div class="flex items-center gap-3">
  <a class="link foreground dark:text-white" data-show-anchor-icon="true" data-block>
		Foreground
	</a>
	<a class="link primary" data-show-anchor-icon="true" data-block>
		Primary
  </a>
	<a class="link secondary" data-show-anchor-icon="true" data-block>
		Secondary
	</a>
	<a class="link success" data-show-anchor-icon="true" data-block>
		Success
	</a>
	<a class="link warning" data-show-anchor-icon="true" data-block>
		Warning
	</a>
	<a class="link danger" data-show-anchor-icon="true" data-block>
		Danger
	</a>
</div>`
};
