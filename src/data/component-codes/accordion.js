const defaultText = `Lorem ipsum dolor sit amet, cons max-w-smectetur adipisicing elit. Eveniet voluptatibus esse quia, fugiat maiores iusto dolores rem, dicta!`;

export const accordionCodes = {
	default: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossorigin />
<div class="accordions max-w-sm dark:text-white [&>.accordion:has(.accordion-body.active)>.accordion-header>i]:-rotate-90 [&_.icon]:transition-all [&_.icon]:duration-200">
  <div class="accordion">
    <div class="accordion-header">Accordion <i class="icon fas fa-chevron-left fa-xs"></i></div>
    <div class="accordion-body">
      ${defaultText}
    </div>
  </div>
  <div class="accordion">
    <div class="accordion-header">Accordion <i class="icon fas fa-chevron-left fa-xs"></i></div>
    <div class="accordion-body">
      ${defaultText}
    </div>
  </div>
  <div class="accordion">
    <div class="accordion-header">Accordion <i class="icon fas fa-chevron-left fa-xs"></i></div>
    <div class="accordion-body">
      ${defaultText}
    </div>
  </div>
</div>
<br/>`,
	expandSingleItems: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossorigin />
<div data-selection-mode="single" class="accordions max-w-sm dark:text-white [&>.accordion:has(.accordion-body.active)>.accordion-header>i]:-rotate-90 [&_.icon]:transition-all [&_.icon]:duration-200">
  <div class="accordion">
    <div class="accordion-header">Accordion <i class="icon fas fa-chevron-left fa-xs"></i></div>
    <div class="accordion-body">
      ${defaultText}
    </div>
  </div>
  <div class="accordion">
    <div class="accordion-header">Accordion <i class="icon fas fa-chevron-left fa-xs"></i></div>
    <div class="accordion-body">
      ${defaultText}
    </div>
  </div>
  <div class="accordion">
    <div class="accordion-header">Accordion <i class="icon fas fa-chevron-left fa-xs"></i></div>
    <div class="accordion-body">
      ${defaultText}
    </div>
  </div>
</div>
<br/>`,
	disabledAccordion: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossorigin />
<div class="accordions max-w-sm dark:text-white [&>.accordion:has(.accordion-body.active)>.accordion-header>i]:-rotate-90 [&_.icon]:transition-all [&_.icon]:duration-200">
  <div class="accordion">
    <div class="accordion-header">Accordion <i class="icon fas fa-chevron-left fa-xs"></i></div>
    <div class="accordion-body">
      ${defaultText}
    </div>
  </div>
  <div class="accordion" data-disabled>
    <div class="accordion-header">Accordion <i class="icon fas fa-chevron-left fa-xs"></i></div>
    <div class="accordion-body">
      ${defaultText}
    </div>
  </div>
  <div class="accordion">
    <div class="accordion-header">Accordion <i class="icon fas fa-chevron-left fa-xs"></i></div>
    <div class="accordion-body">
      ${defaultText}
    </div>
  </div>
</div>
<br/>`,
	customized: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossorigin />
<div class="accordions max-w-sm dark:text-white [&_.accordion-body]:!ease-out [&>.accordion:has(.accordion-body.active)>.accordion-header>i]:-rotate-90 [&_.icon]:transition-all [&_.icon]:duration-200">
  <div class="accordion">
    <div class="accordion-header">
      <strong class="text-lg font-medium">How well it works?</strong> 
      <i class="icon fas fa-chevron-left fa-xs"></i>
    </div>
    <div class="accordion-body">
      <p class="pb-1">${defaultText}</p>
    </div>
  </div>
  <div class="accordion">
    <div class="accordion-header">
      <strong class="text-lg font-medium">Can I customize?</strong> 
      <i class="icon fas fa-chevron-left fa-xs"></i>
    </div>
    <div class="accordion-body">
      <p class="pb-1">${defaultText}</p>
    </div>
  </div>
  <div class="accordion">
    <div class="accordion-header">
      <strong class="text-lg font-medium">Can it be animated?</strong> 
      <i class="icon fas fa-chevron-left fa-xs"></i>
    </div>
    <div class="accordion-body">
      <p class="pb-1">${defaultText}</p>
    </div>
  </div>
</div>
<br/>`
};
