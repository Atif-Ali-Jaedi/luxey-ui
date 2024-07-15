const content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis unde nisi asperiores cupiditate possimus provident reprehenderit beatae deleniti vel autem soluta iure rerum doloribus vitae voluptate porro, doloremque magni! Voluptatum molestiae assumenda cupiditate magnam architecto, adipisci sint id provident neque eaque, sed dolorum odio laboriosam dolores illo molestias ducimus temporibus, porro nemo culpa facere reprehenderit. Eveniet rerum placeat repudiandae voluptatum numquam aut nam. Eligendi blanditiis earum, facilis voluptatum. Quaerat velit voluptas perspiciatis culpa, accusantium fugiat ut maiores cum modi nemo vero, enim inventore veniam cupiditate, eligendi repellat corporis doloribus quisquam fuga. Aliquam, molestias natus quis rem. Commodi amet fugit at doloribus fuga aspernatur, explicabo nam. Magnam explicabo consectetur necessitatibus debitis quos, facilis optio dolor voluptatibus ducimus distinctio quisquam ipsam dolorum at architecto qui unde ullam consequuntur officia sed quibusdam exercitationem excepturi iure doloribus! Expedita reiciendis alias ex perspiciatis incidunt possimus numquam iure est explicabo et reprehenderit quam at, repellat adipisci consequuntur eligendi voluptatibus, amet dicta. Fuga, earum non labore, ipsam asperiores, accusantium adipisci optio et accusamus commodi dolorum. Quod in illo harum. Ut, excepturi ipsa perferendis repellendus veniam voluptates, vel at ratione ex enim nostrum non nam officiis iure, aliquid aut aspernatur eaque nulla earum. Vitae tenetur numquam deserunt voluptates incidunt eligendi quod, dolorem ullam placeat fugit asperiores doloribus. Placeat deserunt eius, velit non! Vitae est magnam, harum id quaerat molestiae eaque, natus quidem eligendi error vel quod? Quasi vero deserunt quam ex distinctio, voluptatum veritatis in odio inventore quisquam id quia accusamus provident libero, dolor nostrum minus fugiat adipisci.`;

export const scrollShadowCodes = {
	usage: `<div class="scroll-shadow overflow-y-scroll h-[300px]">
  <p>
    ${content}
  </p>
</div>`,
	customShadowSize: `<div class="scroll-shadow h-[300px] overflow-y-scroll">
  <p>
    ${content}
  </p>
</div>`,
	horizontal: `<div class="scroll-shadow overflow-x-scroll max-w-[400px] max-h-[300px]" data-orientation="horizontal">
  <p class="w-[2000px]">
    ${content}
  </p>
</div>`
};
