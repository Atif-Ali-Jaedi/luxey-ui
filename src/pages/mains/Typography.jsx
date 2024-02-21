import CodePreview from "../../utils/CodePreview";
import { Breadcrumbs } from "../../utils/Breadcrumbs";

const Typography = () => {
	return (
		<>
			<Breadcrumbs data={["Docs", "Typography"]} />
			<article className="article">
				<h1 className="h1">Typography</h1>
				<p className="lead !mt-4">
					Styles for heading, text & list. I took this from{" "}
					<a href="https://ui.shadcn.com" className="link primary">
						shadcn-ui{" "}
						<svg
							width="14px"
							height="14px"
							viewBox="0 0 16 16"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
						>
							<g fill="currentColor" strokeWidth="0.1">
								<path d="M9 .75A.75.75 0 019.75 0h4.5c.206 0 .393.083.529.218l.001.002.002.001A.748.748 0 0115 .75v4.5a.75.75 0 01-1.5 0V2.56L7.28 8.78a.75.75 0 01-1.06-1.06l6.22-6.22H9.75A.75.75 0 019 .75z"></path>{" "}
								<path d="M3.25 3.5a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0110.75 14h-7.5A2.25 2.25 0 011 11.75v-7.5A2.25 2.25 0 013.25 2h4a.75.75 0 010 1.5h-4z"></path>
							</g>
						</svg>
					</a>
					.
				</p>
				<CodePreview
					code={{
						lang: "html",
						showLineNumbers: true,
						code: `<div class="dark:text-white">
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
        <tr class="m-0 border-t p-0">
          <th class="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
            Ancient Mysteries Unveiled
        </th>
        <th class="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
          Hero's Journey Complete
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="m-0 border-t p-0">
        <td class="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
          Revealed
        </td>
        <td class="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
          Accomplished
        </td>
      </tr>
      <tr class="m-0 border-t p-0 bg-[#efefef] dark:bg-[#202020]">
        <td class="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
          Unveiled
        </td>
        <td class="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
          Achieved
        </td>
      </tr>
        <tr class="m-0 border-t p-0">
          <td class="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
            Discovered
          </td>
          <td class="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
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
</div>`
					}}
				/>
				<h3 className="h3">Full</h3>
				<CodePreview
					code={{
						lang: "html",
						showLineNumbers: true,
						code: `<div class="dark:text-white">
  <h1 class="h1">Heading 1</h1>
  <h2 class="h2">Heading 2</h2>
  <h3 class="h3">Heading 3</h3>
  <h4 class="h4">Heading 4</h4>
  <h5 class="h5">Heading 5</h5>
  <br/>
  <p class="p">The moral of the story is: embrace the unknown, for therein lies the greatest adventures and the most wondrous treasures of all.</p>
  <br/>
  <p class="lead dark:!text-zinc-400">A modal dialog that interrupts the user with important content and expects a response.</p>
  <br/>
  <blockquote class="blockquote">
  "Anything that can go wrong will go wrong"
  </blockquote>
  <br/>
  <ul class="ul">
    <li>Very simple.</li>
    <li>Beautifully designed.</li>
    <li>For basic use cases.</li>
  </ul>
  <br/>
  <p class="large">Are you sure about this?</p>
  <br/>
  <small class="small">Personal Email Address</small>
  <br/>
  <br/>
  <p class="muted">Enter you password.</p>
  <br/>
  <label class="label">Label</label>
</div>`
					}}
				/>
			</article>
		</>
	);
};

export default Typography;
