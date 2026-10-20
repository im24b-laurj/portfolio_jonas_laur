import imgRectangle1 from "figma:asset/bee5e733c66a0a868418f073961856a4e82ef6ff.png";
import imgRectangle7 from "figma:asset/b52797b55cecbae8090df661d3da621a85e4e9f0.png";

function Text() {
  return (
    <div className="absolute content-stretch flex items-start left-0 top-[27px]" data-name="Text">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[16px]">Main Colors</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#d9d9d9] h-[1384px] left-[-546px] top-[-296px] w-[2345px]" />
      <div className="absolute h-[404px] left-[559px] top-0 w-[639px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
      </div>
      <Text />
      <div className="absolute bg-[#5dd3b6] h-[91px] left-[130px] top-0 w-[113px]" />
      <div className="absolute bg-[#6e5034] h-[91px] left-[130px] top-[125px] w-[113px]" />
      <div className="absolute bg-[#cdb885] h-[91px] left-[297px] top-0 w-[104px]" />
      <div className="absolute bg-[#efe1b5] h-[81px] left-[297px] top-[135px] w-[118px]" />
      <div className="absolute h-[381px] left-[559px] top-[386px] w-[639px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle7} />
      </div>
    </div>
  );
}