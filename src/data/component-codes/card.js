export const cardCodes = {
	default: `<div class="grid place-items-center">
  <div class="card max-w-sm bg-white">
    <div class="card-header">
      <h3 class="h3 text-center">Login</h3>
    </div>
    <div class="card-body">
      <label for="email" class="label">Email</label>
      <input 
        id="email" 
        type="text" 
        class="w-full p-2 text-sm border my-1.5 rounded-lg"
        placeholder="Enter your email..." 
      />
      <label for="password" class="label dark:text-white">Password</label>
      <input 
        id="password" 
        type="text" 
        class="w-full p-2 text-sm border my-1.5 rounded-lg" 
        placeholder="Enter your password..."
      />
      <button class="button foreground w-full radius-sm text-sm mt-2">Log in</button>
    </div>
    <div class="card-footer">
      <small>Dont have an account? 
        <a class="text-[#006fee]">Sign up</a>
      </small>
    </div>
  </div>
</div>`,
eg: `<div class="w-full h-full top-0 left-0 grid place-items-center py-4">
	<div class="card !border-[#1C1E57] w-[250px] bg-white h-auto">
		<div class="card-header">
		  <h3 class="text-lg font-serif !text-[#1C1E57] font-bold">
				Edit availability
			</h3>
			<p class="!text-[#1C1E57] text-xs font-medium !leading-4">
		  	Add a "Hire me" button to let know that you're available for new opportunities.
			</p>
		</div>
		<div class="card-body flex flex-col gap-2">
			<label for="checkbox1" class="checkbox-wrapper size-lg">
				<div class="checkbox-icon">
					<svg viewBox="0 0 17 18">
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
					</svg>
					<input type="checkbox" id="checkbox1" class="checkbox" />
				</div>
				<span class="checkbox-label text-sm font-medium text-[#1C1E57]">Full time</span>
			</label>
			<label for="checkbox2" class="checkbox-wrapper size-lg">
				<div class="checkbox-icon">
					<svg viewBox="0 0 17 18">
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
					</svg>
					<input type="checkbox" id="checkbox2" class="checkbox" />
				</div>
				<span class="checkbox-label text-sm font-medium text-[#1C1E57]">Frelance & projects</span>
			</label>
		</div>
		<div class="card-footer flex items-center gap-3">
			<button class="button foreground radius-sm text-sm basis-1/2">Done</button>
			<button class="button flat radius-sm text-sm basis-1/2">Cancel</button>
		</div>
	</div>
</div>`
};
