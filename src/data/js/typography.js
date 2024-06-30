export const typographyRef = {
	main: `<article>
  <h1 class="h1">
    The Enchanted Forest Adventure
  </h1>
  <p class="p mt-6">
    Once upon a time, in a mystical land far beyond the horizon, there existed an enchanted forest teeming with magical creatures and hidden wonders.
  </p>
  <h2 class="mt-10 h2">
    The Quest Begins
  </h2>
  <p class="p mt-6">
    A brave adventurer named Lyra embarked on a daring quest to uncover the secrets of the enchanted forest and unlock its untold treasures.
  </p>
  <blockquote class="blockquote">
    "With courage in her heart and determination in her soul, Lyra ventured forth into the unknown, guided by the whispers of the ancient trees."
  </blockquote>
  <h3 class="mt-8 h3">
    Trials and Tribulations
  </h3>
  <p class="p mt-6">
    Along her journey, Lyra encountered formidable challenges and daunting obstacles, testing her resolve and pushing her to the brink of despair.
  </p>
  <ul class="ul">
    <li>The treacherous River of Shadows</li>
    <li>The labyrinthine Maze of Illusions</li>
    <li>The towering Mountain of Trials</li>
  </ul>
  <p class="p mt-6">
    Despite the odds stacked against her, Lyra pressed on with unwavering determination, fueled by the promise of discovery and adventure.
  </p>
  <h3 class="mt-8 h3">
    Triumph and Revelations
  </h3>
  <p class="p mt-6">
    After countless trials and tribulations, Lyra emerged victorious, unlocking the ancient secrets of the enchanted forest and uncovering its hidden treasures.
  </p>
  <p class="p mt-6">
    As she gazed upon the wondrous sights and basked in the glow of her triumph, Lyra realized that the true treasure was not gold or jewels, but the journey itself.
  </p>
  <!-- The styles for table isn't added yet -->
  <div class="my-6 w-full overflow-y-auto">
    <table class="w-full">
      <thead>
        <tr class="m-0 border-t dark:border-zinc-700 p-0">
          <th class="border dark:border-zinc-700 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
            Ancient Mysteries Unveiled
        </th>
        <th class="border dark:border-zinc-700 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
          Hero's Journey Complete
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="m-0 border-t dark:border-zinc-700 p-0">
        <td class="border dark:border-zinc-700 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
          Revealed
        </td>
        <td class="border dark:border-zinc-700 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
          Accomplished
        </td>
      </tr>
      <tr class="m-0 border-t p-0 bg-zinc-100 dark:bg-zinc-800">
        <td class="border dark:border-zinc-700 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
          Unveiled
        </td>
        <td class="border dark:border-zinc-700 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
          Achieved
        </td>
      </tr>
        <tr class="m-0 border-t dark:border-zinc-700 p-0">
          <td class="border dark:border-zinc-700 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
            Discovered
          </td>
          <td class="border dark:border-zinc-700 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
            Conquered
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <p class="p mt-6">
    And so, with her heart filled with wonder and her spirit ablaze with adventure, Lyra bid farewell to the enchanted forest, forever changed by her extraordinary journey.
  </p>
  <p class="p mt-6">
    The moral of the story is: embrace the unknown, for therein lies the greatest adventures and the most wondrous treasures of all.
  </p>
</article>`,
	elements: [
		{
			name: "h1",
			code: `<h1 class="h1 text-center">The Enchanted Forest Adventure</h1>`
		},
		{ name: "h2", code: `<h2 class="h2 text-center">The Quest Begins</h2>` },
		{	name: "h3",
			code: `<h3 class="h3 text-center">Trials and Tribulations</h3>`
		},
		{ name: "h4", code: `<h4 class="h4 text-center">Embrace the unknown</h4>` },
		{
			name: "h5",
			code: `<h5 class="h5 text-center">Ancient Mysteries Unveiled</h5>`
		},
		{
			name: "h6",
			code: `<h6 class="h6 text-center">Hero's Journey Complete</h6>`
		},
		{
			name: "p",
			code: `<p class="p">Once upon a time, in a mystical land far beyond the horizon, there existed an enchanted forest teeming with magical creatures and hidden wonders.</p>`
		},
		{
			name: "blockquote",
			code: `<blockquote class="blockquote">
    "With courage in her heart and determination in her soul, Lyra ventured forth into the unknown, guided by the whispers of the ancient trees."
  </blockquote>`
		},
		{
			name: "list",
			code: `<ul class="ul">
    <li>The treacherous River of Shadows</li>
    <li>The labyrinthine Maze of Illusions</li>
    <li>The towering Mountain of Trials</li>
  </ul>`
		},
		{
			name: "lead",
			code: `<p class="lead text-center">A modal dialog that interrupts the user with important content and expects a response.</p>`
		},
		{
			name: "large",
			code: `<p class="large text-center">Are you really sure?</p>`
		},
		{
			name: "small",
			code: `<small class="small text-center">Your Email address</small>`
		},
		{
			name: "muted",
			code: `<p class="muted text-center">Enter your password.</p>`
		},
		{ name: "label", code: `<label class="label">Input Label</label>` }
	]
};
