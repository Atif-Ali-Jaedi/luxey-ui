const svg = `<svg viewBox="0 0 17 18">
			<polyline
				fill="none"
				points="1 9 7 14 15 4"
				stroke="currentColor"
				stroke-dasharray="22"
				stroke-dashoffset="66"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				style="transition: stroke-dashoffset 250ms linear 0.2s"
			></polyline>
		</svg>`;
export const checkboxCodes = {
	default: `<label for="checkbox" class="checkbox-wrapper dark:text-white">
	<div class="checkbox-icon">
		${svg}
	  <input checked type="checkbox" id="checkbox" class="checkbox" />
	</div>
	<span class="checkbox-label">Checkbox</span>
</label>`,
	lineThrough: `<label for="checkbox" class="checkbox-wrapper dark:text-white line-through-text">
	<div class="checkbox-icon">
		${svg}
	  <input checked type="checkbox" id="checkbox" class="checkbox" />
	</div>
	<span class="checkbox-label">Checkbox</span>
</label>`,
	disabled: `<label for="checkbox" class="checkbox-wrapper dark:text-white" data-disabled>
	<div class="checkbox-icon">
		${svg}
	  <input checked type="checkbox" id="checkbox" class="checkbox" />
	</div>
	<span class="checkbox-label">Disabled</span>
</label>`,
	sizes: `<div class="container flex items-center gap-4"></div>
<script>
  [1,2,3].map(i => {
    const checkboxWrapper = document.createElement("label");
    checkboxWrapper.className = \`checkbox-wrapper dark:text-white size-\$\{i == 1 ? "sm" : i == 2 ? "md" : "lg"\}\`;
    checkboxWrapper.innerHTML = \`<div class="checkbox-icon">
		${svg}
	  <input checked type="checkbox" id="checkbox" class="checkbox" />
	</div>
	<span class="checkbox-label">\$\{i == 1 ? "Small" : i == 2 ? "Medium" : "Large"\}</span>\`
	document.querySelector(".container").appendChild(checkboxWrapper)
  })
</script>`,
	colors: `<div class="container flex items-center gap-4"></div>
<script>
  ["Foreground","Default","Primary","Secondary","Success","Warning","Danger"].map(c => {
    const checkboxWrapper = document.createElement("label");
    checkboxWrapper.className = \`checkbox-wrapper dark:text-white \$\{c.toLowerCase()\}\`;
    checkboxWrapper.innerHTML = \`<div class="checkbox-icon">
		${svg}
	  <input checked type="checkbox" id="checkbox" class="checkbox" />
	</div>
	<span class="checkbox-label">\$\{c\}</span>\`
	document.querySelector(".container").appendChild(checkboxWrapper)
  })
</script>`,
	radius: `<div class="container flex items-center gap-4"></div>
<script>
[1, 2, 3, 4, 5].map(i => {
	const checkboxWrapper = document.createElement("label");
	checkboxWrapper.className = \`checkbox-wrapper dark:text-white radius-\$\{
		i == 1 ? "full" : i == 2 ? "lg" : i == 3 ? "md" : i == 4 ? "sm" : "none"
	\}\`;
	checkboxWrapper.innerHTML = \`<div class="checkbox-icon">
		${svg}
	  <input checked type="checkbox" id="checkbox" class="checkbox" />
	</div>
	<span class="checkbox-label">\$\{
		i == 1
			? "Full"
			: i == 2
			? "Large"
			: i == 3
			? "Medium"
			: i == 4
			? "Small"
			: "None"
	\}</span>\`;
	document.querySelector(".container").appendChild(checkboxWrapper);
});
</script>`,
	customized: `<label for="checkbox" class="checkbox-wrapper dark:text-white primary">
	<div class="checkbox-icon">
		<svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill='none'
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
        fill='currentColor'
      />
    </svg>
	  <input checked type="checkbox" id="checkbox" class="checkbox" />
	</div>
	<span class="checkbox-label text-xs font-medium">Checkbox</span>
</label>`
};
