export const examples = {
	notificationSettings: `<div class="flex items-center justify-center">
  <div class="card bg-white !p-4 w-[min(100%,400px)] shadow-lg my-12">
    <h4>Notification Settings</h4>
    <small class="text-gray-500">Manage your notification preferences</small>
    <div class="list flex flex-col gap-2 mt-3"></div>
    <div class="flex items-center gap-2 justify-end mt-6">
      <button class="button default bordered !text-sm">Reset to Default</button>
      <button class="button primary !text-sm">Save Changes</button>
    </div>
  </div>
</div>
<script>
  const settings = [
    { name: "Pause all", desc: "Temporary pause all notifications" },
  	{ name: "Followers", desc: "Get notified when someone follows you" },
  	{ name: "Likes", desc: "Get notified when someone likes your post" },
  	{ name: "Comments", desc: "Get notified when someone comments on your post" },
  	{
  		name: "Mentions",
  		desc: "Get notified when someone mentions you in a post"
  	},
  	{ name: "Messages", desc: "Get notified when someone sends you a message" },
  	{
  		name: "Friend Requests",
  		desc: "Get notified when someone sends you a friend request"
  	}
  ];
  settings.map((s, i) => {
    const settingLabel = document.createElement("label");
    settingLabel.className = "select-none";
    settingLabel.for = \`s\$\{i\}\`
    settingLabel.innerHTML = \`
    <div class="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
      <div>
        <h6 class="text-sm mb-0.5">\$\{s.name\}</h6>
        <p class="text-xs text-gray-500">\$\{s.desc\}</p>
      </div>
      <input id="s\$\{i\}" type="checkbox" class="switch primary size-sm shrink-0" />
    </div>\`;
    document.querySelector(".list").appendChild(settingLabel);
  })
</script>`,
	selectPlan: `<div class="flex items-center justify-center">
  <div class="card shadow-lg bg-white">
  <h1 class="text-lg">Select you plan</h1>
  <small class="text-gray-400">Find a plan that's right for you and your team.</small>
  <div class="plans flex flex-col gap-4 my-4"></div>
  <small class="text-gray-400">Selected payment method can be changed at any time.</small>
  </div>
</div>
<script>
  const plans = [
    { name: "Hobby", price: 0, feature: "Up to 20 items and 5 projects"},
    { name: "Pro", price: 30, feature: "Unlimited items and 20 projects"},
    { name: "Enterprise", price: 100, feature: "Unlimited items and projects"}
  ]
  plans.map((p, i) => {
    const plan = document.createElement("label");
    plan.className = "flex items-center justify-between [&:has(input[type='radio']:checked)]:bg-[#7828c815] py-4 px-3 rounded-lg"
    plan.innerHTML = \`
    <div class="flex items-center gap-3">
      <div class="rounded-full bg-[#7828c820] w-9 h-9 grid place-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
    	    <g fill="none" stroke="#7828c8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
    		    <path d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524" />
    		    <path d="m3.528 7.294l8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 21v-9" />
    	    </g>
        </svg>
      </div>
      <div>
        <p class="text-sm">\$\{p.name\} plan <span class="text-xs text-zinc-500">$\$\{p.price\} per month</span></p>
        <small class="text-[0.675rem] text-zinc-400">\$\{p.feature\}</small>
      </div>
    </div>
    <div class="radio secondary relative">
      <input type="radio" name="plan" \$\{i == 0 && "checked"\}/>
      \$\{i == 1 ? \`<div class="chip secondary flat size-sm absolute bottom-full left-1/2 -translate-x-1/2">Popular</div>\` : ""\}
    </div>
    \`
    document.querySelector(".plans").appendChild(plan)
  })
</script>`
};
