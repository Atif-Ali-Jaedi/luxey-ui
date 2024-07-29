export const textareaCodes = {
	default: `<div class="py-12">
  <div class="textarea-outerbox max-w-xs">
    <div class="textarea-innerbox">
      <label for="textarea">Description</label>
      <textarea id="textarea" placeholder="Enter your description"></textarea>
    </div>
  </div>
</div>`,
	disabled: `<div class="textarea-outerbox max-w-xs" data-disabled>
  <label for="textarea">Description</label>
  <div class="textarea-innerbox">
    <textarea id="textarea">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, suscipit!</textarea>
  </div>
</div>`,
	readOnly: `<div class="textarea-outerbox max-w-xs bordered">
  <label for="textarea">Description</label>
  <div class="textarea-innerbox">
    <textarea id="textarea" placeholder="Enter your description" readonly>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, iste.</textarea>
  </div>
</div>`,
	autoSize: `<div class="min-h-96 flex flex-col items-center justify-center gap-6">
  <div class="textarea-outerbox max-w-xs">
    <div class="textarea-innerbox">
      <label for="textarea">Description</label>
      <textarea id="textarea" data-min-row="2" placeholder="Enter your description (Min rows 2)"></textarea>
    </div>
  </div>
  <div class="textarea-outerbox max-w-xs">
    <div class="textarea-innerbox">
      <label for="textarea">Description</label>
      <textarea id="textarea" data-max-row="3" placeholder="Enter your description (Max rows 3)"></textarea>
    </div>
  </div>
</div>`,
	withoutAutosize: `<div class="textarea-outerbox max-w-xs">
  <div class="textarea-innerbox">
    <label for="textarea">Description</label>
    <textarea id="textarea" data-autosize="false" placeholder="Enter your description"></textarea>
  </div>
</div>`,
	variants: `<div class="flex flex-col items-center justify-center min-h-[800px] sm:min-h-[500px]">
  <div class="textarea-outerbox max-w-xs flat">
    <label for="textarea">Description</label>
    <div class="textarea-innerbox">
      <textarea id="textarea" placeholder="Enter your description"></textarea>
    </div>
  </div>
  <br />
  <div class="textarea-outerbox max-w-xs faded">
    <label for="textarea2">Description</label>
    <div class="textarea-innerbox">
      <textarea id="textarea2" placeholder="Enter your description"></textarea>
    </div>
  </div>
  <br />
  <div class="textarea-outerbox max-w-xs bordered bg-white p-2 rounded">
    <label for="textarea3">Description</label>
    <div class="textarea-innerbox">
      <textarea id="textarea3" placeholder="Enter your description"></textarea>
    </div>
  </div>
  <br />
  <div class="textarea-outerbox max-w-xs underlined bg-white p-2 rounded">
    <label for="textarea4">Description</label>
    <div class="textarea-innerbox">
      <textarea id="textarea4" placeholder="Enter your description"></textarea>
    </div>
  </div>
</div>`,
	invalid: `<div class="py-24">
  <div class="textarea-outerbox max-w-xs bordered" data-invalid>
    <div class="textarea-innerbox">
      <label for="textarea">Description</label>
      <textarea id="textarea" placeholder="Enter your description">Lorem ipsum dolor sit amet.</textarea>
    </div>
  </div>
</div>`
};
