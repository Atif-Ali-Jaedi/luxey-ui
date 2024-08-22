export const avatarCodes = {
	usage: `<div class="flex items-center gap-3">
  <div class="avatar">
    <img src="https://i.pravatar.cc/150?img=1" alt="Avatar">
  </div>
  <div class="avatar" data-show-fallback="true">
    <img alt="Jane">
  </div>
</div>`,
	sizes: `<div class="flex items-center gap-3">
  <div class="avatar w-6 h-6">
    <img src="https://i.pravatar.cc/150?img=2" alt="Avatar">
  </div>
  <div class="avatar size-sm">
    <img src="https://i.pravatar.cc/150?img=3" alt="Avatar">
  </div>
  <div class="avatar size-md">
    <img src="https://i.pravatar.cc/150?img=4" alt="Avatar">
  </div>
  <div class="avatar size-lg">
    <img src="https://i.pravatar.cc/150?img=5" alt="Avatar">
  </div>
  <div class="avatar w-20 h-20 text-lg">
    <img src="https://i.pravatar.cc/150?img=7" alt="Avatar">
  </div>
</div>`,
	disabled: `<div class="flex items-center gap-3">
  <div class="avatar" data-disabled>
    <img src="https://i.pravatar.cc/150?img=1" alt="Avatar">
  </div>
  <div class="avatar" data-show-fallback="true" data-disabled>
    <img alt="Jane">
  </div>
</div>`,
	borderedWithColors: `<div class="flex items-center gap-3 p-2">
  <div class="avatar default" data-bordered>
    <img src="https://i.pravatar.cc/150?img=8" alt="Avatar">
  </div>
  <div class="avatar foreground" data-bordered>
    <img src="https://i.pravatar.cc/150?img=9" alt="Avatar">
  </div>
  <div class="avatar primary" data-bordered>
    <img src="https://i.pravatar.cc/150?img=10" alt="Avatar">
  </div>
  <div class="avatar secondary" data-bordered>
    <img src="https://i.pravatar.cc/150?img=11" alt="Avatar">
  </div>
  <div class="avatar success" data-bordered>
    <img src="https://i.pravatar.cc/150?img=12" alt="Avatar">
  </div>
  <div class="avatar warning" data-bordered>
    <img src="https://i.pravatar.cc/150?img=13" alt="Avatar">
  </div>
  <div class="avatar danger" data-bordered>
    <img src="https://i.pravatar.cc/150?img=14" alt="Avatar">
  </div>
</div>`,
	radius: `<div class="flex items-center gap-3 p-2">
  <div class="avatar radius-none" data-bordered>
    <img src="https://i.pravatar.cc/150?img=15" alt="Avatar">
  </div>
  <div class="avatar radius-sm" data-bordered>
    <img src="https://i.pravatar.cc/150?img=16" alt="Avatar">
  </div>
  <div class="avatar radius-md" data-bordered>
    <img src="https://i.pravatar.cc/150?img=17" alt="Avatar">
  </div>
  <div class="avatar radius-lg" data-bordered>
    <img src="https://i.pravatar.cc/150?img=18" alt="Avatar">
  </div>
  <div class="avatar radius-full" data-bordered>
    <img src="https://i.pravatar.cc/150?img=19" alt="Avatar">
  </div>
</div>`,
	fallbacks: `<div class="flex items-center gap-3">
  <div class="avatar" data-show-fallback="true">
    <img>
  </div>
  <div class="avatar" data-show-fallback="true">
    <img alt="Jane">
  </div>
</div>`,
	customFallback: `<div class="flex items-center gap-3">
  <div class="avatar" data-show-fallback="true">
    <img>
    <div class="fallback">
      <svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" class="animate-pulse w-6 h-6 text-[hsl(--default-500)]"><path clip-rule="evenodd" d="M17.44 6.236c.04.07.11.12.2.12 2.4 0 4.36 1.958 4.36 4.355v5.934A4.368 4.368 0 0117.64 21H6.36A4.361 4.361 0 012 16.645V10.71a4.361 4.361 0 014.36-4.355c.08 0 .16-.04.19-.12l.06-.12.106-.222a97.79 97.79 0 01.714-1.486C7.89 3.51 8.67 3.01 9.64 3h4.71c.97.01 1.76.51 2.22 1.408.157.315.397.822.629 1.31l.141.299.1.22zm-.73 3.836c0 .5.4.9.9.9s.91-.4.91-.9-.41-.909-.91-.909-.9.41-.9.91zm-6.44 1.548c.47-.47 1.08-.719 1.73-.719.65 0 1.26.25 1.72.71.46.459.71 1.068.71 1.717A2.438 2.438 0 0112 15.756c-.65 0-1.26-.25-1.72-.71a2.408 2.408 0 01-.71-1.717v-.01c-.01-.63.24-1.24.7-1.699zm4.5 4.485a3.91 3.91 0 01-2.77 1.15 3.921 3.921 0 01-3.93-3.926 3.865 3.865 0 011.14-2.767A3.921 3.921 0 0112 9.402c1.05 0 2.04.41 2.78 1.15.74.749 1.15 1.738 1.15 2.777a3.958 3.958 0 01-1.16 2.776z" fill="currentColor" fill-rule="evenodd"></path></svg>
    </div>
  </div>
  <div class="avatar" data-show-fallback="true">
    <img alt="Jane">
  </div>
</div>`,
	group: `<div class="avatar-group px-4 py-2">
  <div class="avatar default" data-bordered>
    <img src="https://i.pravatar.cc/150?img=20" alt="Avatar">
  </div>
  <div class="avatar default" data-bordered>
    <img src="https://i.pravatar.cc/150?img=21" alt="Avatar">
  </div>
  <div class="avatar default" data-bordered>
    <img src="https://i.pravatar.cc/150?img=22" alt="Avatar">
  </div>
  <div class="avatar default" data-bordered>
    <img src="https://i.pravatar.cc/150?img=23" alt="Avatar">
  </div>
  <div class="avatar default" data-bordered>
    <img src="https://i.pravatar.cc/150?img=24" alt="Avatar">
  </div>
  <div class="avatar default" data-bordered>
    <img src="https://i.pravatar.cc/150?img=25" alt="Avatar">
  </div>
</div>`,
	groupDisabled: `<div class="avatar-group px-4 py-2" data-disabled>
  <div class="avatar default" data-bordered>
    <img src="https://i.pravatar.cc/150?img=20" alt="Avatar">
  </div>
  <div class="avatar default" data-bordered>
    <img src="https://i.pravatar.cc/150?img=21" alt="Avatar">
  </div>
  <div class="avatar default" data-bordered>
    <img src="https://i.pravatar.cc/150?img=22" alt="Avatar">
  </div>
  <div class="avatar default" data-bordered>
    <img src="https://i.pravatar.cc/150?img=23" alt="Avatar">
  </div>
  <div class="avatar default" data-bordered>
    <img src="https://i.pravatar.cc/150?img=24" alt="Avatar">
  </div>
  <div class="avatar default" data-bordered>
    <img src="https://i.pravatar.cc/150?img=25" alt="Avatar">
  </div>
</div>`,
	groupMaxCount: `<div class="avatar-group px-4 py-2" data-max="3">
<div class="avatar default" data-bordered>
  <img src="https://i.pravatar.cc/150?img=20" alt="Avatar">
</div>
<div class="avatar default" data-bordered>
  <img src="https://i.pravatar.cc/150?img=21" alt="Avatar">
</div>
<div class="avatar default" data-bordered>
  <img src="https://i.pravatar.cc/150?img=22" alt="Avatar">
</div>
<div class="avatar default" data-bordered>
  <img src="https://i.pravatar.cc/150?img=23" alt="Avatar">
</div>
<div class="avatar default" data-bordered>
  <img src="https://i.pravatar.cc/150?img=24" alt="Avatar">
</div>
<div class="avatar default" data-bordered>
  <img src="https://i.pravatar.cc/150?img=25" alt="Avatar">
</div>
</div>`,
	groupTotalCount: `<div class="avatar-group px-4 py-2" data-max="3" data-total="10">
<div class="avatar default" data-bordered>
  <img src="https://i.pravatar.cc/150?img=20" alt="Avatar">
</div>
<div class="avatar default" data-bordered>
  <img src="https://i.pravatar.cc/150?img=21" alt="Avatar">
</div>
<div class="avatar default" data-bordered>
  <img src="https://i.pravatar.cc/150?img=22" alt="Avatar">
</div>
<div class="avatar default" data-bordered>
  <img src="https://i.pravatar.cc/150?img=23" alt="Avatar">
</div>
<div class="avatar default" data-bordered>
  <img src="https://i.pravatar.cc/150?img=24" alt="Avatar">
</div>
<div class="avatar default" data-bordered>
  <img src="https://i.pravatar.cc/150?img=25" alt="Avatar">
</div>
</div>`,
	groupCustomCount: `<div 
  class="avatar-group px-4 py-2"
  data-max="3"
  data-total="10"
  data-count="+COUNT others"
  data-count-class="text-sm dark:text-white font-medium ms-2">
<div class="avatar default" data-bordered>
  <img src="https://i.pravatar.cc/150?img=20" alt="Avatar">
</div>
<div class="avatar default" data-bordered>
  <img src="https://i.pravatar.cc/150?img=21" alt="Avatar">
</div>
<div class="avatar default" data-bordered>
  <img src="https://i.pravatar.cc/150?img=22" alt="Avatar">
</div>
<div class="avatar default" data-bordered>
  <img src="https://i.pravatar.cc/150?img=23" alt="Avatar">
</div>
<div class="avatar default" data-bordered>
  <img src="https://i.pravatar.cc/150?img=24" alt="Avatar">
</div>
<div class="avatar default" data-bordered>
  <img src="https://i.pravatar.cc/150?img=25" alt="Avatar">
</div>
</div>`,
	groupGrid: `<div class="avatar-group px-4 py-2" data-grid data-max="7">
  <div class="avatar default" data-bordered>
    <img src="https://i.pravatar.cc/150?img=20" alt="Avatar">
  </div>
  <div class="avatar default" data-bordered>
    <img src="https://i.pravatar.cc/150?img=21" alt="Avatar">
  </div>
  <div class="avatar default" data-bordered>
    <img src="https://i.pravatar.cc/150?img=22" alt="Avatar">
  </div>
  <div class="avatar default" data-bordered>
    <img src="https://i.pravatar.cc/150?img=23" alt="Avatar">
  </div>
  <div class="avatar default" data-bordered>
    <img src="https://i.pravatar.cc/150?img=24" alt="Avatar">
  </div>
  <div class="avatar default" data-bordered>
    <img src="https://i.pravatar.cc/150?img=25" alt="Avatar">
  </div>
  <div class="avatar default" data-bordered>
    <img src="https://i.pravatar.cc/150?img=27" alt="Avatar">
  </div>
  <div class="avatar default" data-bordered>
    <img src="https://i.pravatar.cc/150?img=25" alt="Avatar">
  </div>
  <div class="avatar default" data-bordered>
    <img src="https://i.pravatar.cc/150?img=25" alt="Avatar">
  </div>
  
</div>`,
};
