export const radioCodes = {
	default: `<div class="radio-group">
  <label class="label dark:text-white">Select you favorite food</label>
  <div class="radios">
    <div class="radio">
      <input type="radio" name="food" id="food1" checked />
      <label for="food1" class="label dark:text-gray-200">Pizza</label>
    </div>
    <div class="radio">
      <input type="radio" name="food" id="food2" />
      <label for="food2" class="label dark:text-gray-200">Burger</label>
    </div>
    <div class="radio">
      <input type="radio" name="food" id="food3" />
      <label for="food3" class="label dark:text-gray-200">Sandwich</label>
    </div>
  </div>
</div>`,
	disabled: `<div class="radio-group">
  <label class="label dark:text-white">Select you favorite food</label>
  <div class="radios">
    <div class="radio">
      <input type="radio" name="food" id="food1" checked />
      <label for="food1" class="label dark:text-gray-200">Pizza</label>
    </div>
    <div class="radio" data-disabled>
      <input type="radio" name="food" id="food2" />
      <label for="food2" class="label dark:text-gray-200">Burger</label>
    </div>
    <div class="radio">
      <input type="radio" name="food" id="food3" />
      <label for="food3" class="label dark:text-gray-200">Sandwich</label>
    </div>
  </div>
</div>`,
	withDescription: `<div class="radio-group">
  <label class="label dark:text-white">Select you favorite food</label>
  <div class="radios">
    <div class="radio">
      <input type="radio" name="food" id="food1" checked />
      <label for="food1" class="label dark:text-gray-200">Pizza <span class="description dark:!text-gray-400">Very delicous</span></label>
    </div>
    <div class="radio">
      <input type="radio" name="food" id="food2" />
      <label for="food2" class="label dark:text-gray-200">Burger <span class="description dark:!text-gray-400">Cheap</span></label>
    </div>
    <div class="radio">
      <input type="radio" name="food" id="food3" />
      <label for="food3" class="label dark:text-gray-200">Sandwich <span class="description dark:!text-gray-400">Healthy</span></label>
    </div>
  </div>
</div>`,
	horizontal: `<div class="radio-group">
  <label class="label dark:text-white">Select you favorite food</label>
  <div class="radios" data-orientation="horizontal">
    <div class="radio">
      <input type="radio" name="food" id="food1" checked />
      <label for="food1" class="label dark:text-gray-200">Pizza</label>
    </div>
    <div class="radio">
      <input type="radio" name="food" id="food2" />
      <label for="food2" class="label dark:text-gray-200">Burger</label>
    </div>
    <div class="radio">
      <input type="radio" name="food" id="food3" />
      <label for="food3" class="label dark:text-gray-200">Sandwich</label>
    </div>
  </div>
</div>`,
	invalid: `<div class="radio-group">
  <label class="label dark:text-white">Select you favorite food</label>
  <div class="radios">
    <div class="radio">
      <input type="radio" name="food" id="food1" checked />
      <label for="food1" class="label dark:text-gray-200">Pizza</label>
    </div>
    <div class="radio" data-is-invalid>
      <input type="radio" name="food" id="food2" />
      <label for="food2" class="label dark:text-gray-200">Burger</label>
    </div>
    <div class="radio">
      <input type="radio" name="food" id="food3" />
      <label for="food3" class="label dark:text-gray-200">Sandwich</label>
    </div>
  </div>
</div>`,
	colors: `<div class="flex items-center gap-3">
  <div class="radio foreground">
  	<input type="radio" name="radio" id="radio1" checked/>
    <label for="radio1" class="label dark:text-white">Foreground</label>
  </div>
  <div class="radio default">
    <input type="radio" name="radio" id="radio2" />
    <label for="radio2" class="label dark:text-white">Default</label>
  </div>
  <div class="radio primary">
    <input type="radio" name="radio" id="radio3" />
    <label for="radio3" class="label dark:text-white">Primary</label>
  </div>
  <div class="radio secondary">
    <input type="radio" name="radio" id="radio4" />
    <label for="radio4" class="label dark:text-white">Secondary</label>
  </div>
  <div class="radio success">
    <input type="radio" name="radio" id="radio5" />
    <label for="radio5" class="label dark:text-white">Success</label>
  </div>
  <div class="radio warning">
    <input type="radio" name="radio" id="radio6" />
    <label for="radio6" class="label dark:text-white">Warning</label>
  </div>
  <div class="radio danger">
    <input type="radio" name="radio" id="radio7" />
    <label for="radio7" class="label dark:text-white">Danger</label>
  </div>
</div>`
};
