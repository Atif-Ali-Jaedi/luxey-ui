export const textareaCodes = {
	default: `<div class="py-12">
  <div class="textarea-outerbox max-w-xs">
    <div class="textarea-innerbox">
      <label for="textarea">Label</label>
      <textarea id="textarea">Some text...</textarea>
    </div>
  </div>
</div>`,
	disabled: `<div class="textarea-outerbox max-w-xs" data-disabled>
  <div class="textarea-innerbox">
    <label for="textarea">Label</label>
    <textarea id="textarea">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </textarea>
  </div>
</div>`,
	autoSize: `<div class="py-24">
  <div class="textarea-outerbox max-w-xs">
    <div class="textarea-innerbox">
      <label for="textarea">Label</label>
      <textarea id="textarea" rows="1">Fixed row</textarea>
    </div>
  </div>
  <br />
  <div class="textarea-outerbox max-w-xs">
    <div class="textarea-innerbox">
      <label for="textarea">Label</label>
      <textarea id="textarea" class="!max-h-[150px]">Max height</textarea>
    </div>
  </div>
</div>`,
	withoutAutosize: `<div class="textarea-outerbox max-w-xs">
  <div class="textarea-innerbox">
    <label for="textarea">Label</label>
    <textarea id="textarea" data-autosize="false">Some text...</textarea>
  </div>
</div>`,
	variants: `<div class="py-24">
  <div class="textarea-outerbox max-w-xs flat">
    <label for="textarea">Label</label>
    <div class="textarea-innerbox">
      <textarea id="textarea">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</textarea>
    </div>
  </div>
  <br />
  <div class="textarea-outerbox max-w-xs faded">
    <label for="textarea">Label</label>
    <div class="textarea-innerbox">
      <textarea id="textarea">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</textarea>
    </div>
  </div>
  <br />
  <div class="textarea-outerbox max-w-xs bordered bg-white p-2 rounded">
    <label for="textarea">Label</label>
    <div class="textarea-innerbox">
      <textarea id="textarea">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</textarea>
    </div>
  </div>
  <br />
  <div class="textarea-outerbox max-w-xs underlined bg-white p-2 rounded">
    <label for="textarea">Label</label>
    <div class="textarea-innerbox">
      <textarea id="textarea">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</textarea>
    </div>
  </div>
</div>`,
	invalid: `<div class="py-24">
  <div class="textarea-outerbox max-w-xs bordered" data-invalid>
    <div class="textarea-innerbox">
      <label for="textarea">Label</label>
      <textarea id="textarea">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</textarea>
    </div>
  </div>
</div>`
};
