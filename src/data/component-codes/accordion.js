const svg = `<svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em"><path d="M15.5 19l-7-7 7-7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>`;
const content = `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incident ullamcorper. Ut enim ad minim veniam.`;

export const accordionCodes = {
	usage: `<div class="accordion">
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
</div>`,
	withSubtitle: `<div class="accordion">
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
                <span class="subtitle">Subtitle</span>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
                <span class="subtitle">Subtitle</span>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
                <span class="subtitle">Subtitle</span>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
</div>`,
	expandSingleItems: `<div class="accordion" data-selection-mode="single">
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
</div>`,
	compact: `<div class="accordion" data-compact>
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
</div>`,
	defaultExpandedItems: `<div class="accordion">
  <div class="accordion-item" data-open="true">
    <div class="heading">
        <button class="trigger">
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
</div>`,
	disabled: `<div class="accordion">
  <div class="accordion-item" data-disabled>
    <div class="heading">
        <button class="trigger">
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
</div>`,
	startContent: `<div class="accordion">
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="start-content">
              <div class="avatar radius-lg outlined primary">
                <img src="https://i.pravatar.cc/150" alt="Name" />
              </div>
            </div>
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="start-content">
              <div class="avatar radius-lg outlined success">
                <img src="https://i.pravatar.cc/150?eu=hsga" alt="Name" />
              </div>
            </div>
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="start-content">
              <div class="avatar radius-lg outlined warning">
                <img src="https://i.pravatar.cc/150?eu=ahsta" alt="Name" />
              </div>
            </div>
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
</div>`,
	variants: {
		light: `<div class="accordion">
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
</div>`,
		shadow: `<div class="accordion shadow">
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
</div>`,
		bordered: `<div class="accordion bordered">
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
</div>`,
		splitted: `<div class="accordion splitted">
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
  <div class="accordion-item">
    <div class="heading">
        <button class="trigger">
            <div class="title-wrapper">
                <h3 class="title">Title</h3>
            </div>
            <span class="indicator">
                ${svg}
            </span>
        </button>
    </div>
    <section>
        <div class="content dark:text-white">
            ${content}
        </div>
    </section>
  </div>
</div>`,
	},
};
