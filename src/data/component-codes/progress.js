export const progressCodes = {
	usage: `<div class="progress-base" data-value="63%">
  <div class="track">
    <div class="indicator"></div>
  </div>
</div>`,
	disabled: `<div class="progress-base" data-disabled data-value="63%">
  <div class="track">
    <div class="indicator"></div>
  </div>
</div>`,
	sizes: `<div class="flex flex-col gap-6">
  <div class="progress-base size-sm" data-value="33%">
    <div class="track">
      <div class="indicator"></div>
    </div>
  </div>
  <div class="progress-base size-md" data-value="43%">
    <div class="track">
      <div class="indicator"></div>
    </div>
  </div>
  <div class="progress-base size-lg" data-value="53%">
    <div class="track">
      <div class="indicator"></div>
    </div>
  </div>
</div>`,
	colors: `<div class="flex flex-col gap-6">
  <div class="progress-base foreground" data-value="63%">
    <div class="track">
      <div class="indicator"></div>
    </div>
  </div>
  <div class="progress-base default" data-value="63%">
    <div class="track">
      <div class="indicator"></div>
    </div>
  </div>
  <div class="progress-base primary" data-value="63%">
    <div class="track">
      <div class="indicator"></div>
    </div>
  </div>
  <div class="progress-base secondary" data-value="63%">
    <div class="track">
      <div class="indicator"></div>
    </div>
  </div>
  <div class="progress-base success" data-value="63%">
    <div class="track">
      <div class="indicator"></div>
    </div>
  </div>
  <div class="progress-base warning" data-value="63%">
    <div class="track">
      <div class="indicator"></div>
    </div>
  </div>
  <div class="progress-base danger" data-value="63%">
    <div class="track">
      <div class="indicator"></div>
    </div>
  </div>
</div>`,
	indeterminate: `<div class="progress-base primary size-sm" data-indeterminate>
  <div class="track">
    <div class="indicator"></div>
  </div>
</div>`,
	striped: `<div class="flex flex-col gap-6">
	<div class="progress-base" data-striped data-value="63%">
    <div class="track">
      <div class="indicator"></div>
    </div>
  </div>
	<div class="progress-base secondary" data-striped data-value="63%">
    <div class="track">
      <div class="indicator"></div>
    </div>
  </div>
</div>`,
	stripedTransparent: `<div class="progress-base transparent" data-value="63%" data-striped>
  <div class="track">
    <div class="indicator"></div>
  </div>
</div>`,
	labelAndValue: `<div class="flex flex-col gap-6">
  <div class="progress-base primary" data-value="63%">
    <div class="label-wrapper">
      <span class="label">Loading...</span>
    </div>
    <div class="track">
      <div class="indicator"></div>
    </div>
  </div>
  <div class="progress-base success" data-value="63%">
    <div class="label-wrapper">
      <span class="value"></span>
    </div>
    <div class="track">
      <div class="indicator"></div>
    </div>
  </div>
  <div class="progress-base warning size-sm" data-value="63%">
    <div class="label-wrapper">
      <span class="label">Progress</span>
      <span class="value"></span>
    </div>
    <div class="track">
      <div class="indicator"></div>
    </div>
  </div>
</div>`,
	customStyles: `<div class="p-1.5">
  <div class="progress-base warning size-sm" data-value="65%">
    <div class="label-wrapper">
      <span class="label tracking-wider font-medium text-[hsl(var(--default-600))]">Progress</span>
      <span class="value text-[hsla(var(--base-foreground)_/_0.6)]"></span>
    </div>
    <div class="track drop-shadow-md border border-[hsl(var(--base-default))]">
      <div class="indicator bg-gradient-to-r from-pink-500 to-yellow-500"></div>
    </div>
  </div>
</div>`
};
