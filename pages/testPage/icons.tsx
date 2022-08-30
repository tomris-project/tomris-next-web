import { useEffect } from "react";
import { useRef, useState } from "react"
import _ from "lodash";
import { WebApi } from "tomris-web-api"
const IconScreen = () => {
  const [filter, setFilter] = useState<string>("");
  const [color, setColor] = useState<string>("black");
  const [selected, setSelected] = useState<string>("");
  const [viewText, setView] = useState<string>("");

  useEffect(() => {
    setView(`<WebApi.Icon size={48} iconName={"${selected}"} color={"${color}"} />`);
  }, [color, selected])
  const copy = () => {
    if (confirm("Is Change Clipboard")) {
      navigator.clipboard.writeText(viewText);
      alert("copy => " + viewText)
    }
  }

  return <>
    <div>
      <WebApi.View responsiveSize={{ col: 1 }}>
        <WebApi.Controller.Input responsive={{ md: 11, lg: 1, sm: 12, xl: 1, xs: 12 }} id="color" type="color" placeholder="Icon Color" label="Icon Color" onChange={(e) => { setColor(e.target.value.toLowerCase()) }} />
        <WebApi.Controller.Input responsive={{ md: 11, lg: 11, sm: 12, xl: 11, xs: 12 }} id="search" placeholder="Search Icon Name" label="Search Icon Name" onChange={(e) => { setFilter(e.target.value.toLowerCase()) }} />
        <WebApi.View responsive={{ md: 12, lg: 12, sm: 12, xl: 12, xs: 12 }} >
          <div style={{ textAlign: "center", display: selected.length > 0 ? "block" : "none", margin: 20 }} >
            <a href="" placeholder="viewText" onClick={(e) => { e.preventDefault(); e.stopPropagation(); copy() }} style={{ display: "block" }}> {viewText} <br />Click Copy</a>
            <div style={{ textAlign: "center", margin: 4 }}>
              <a href="" onClick={(e) => { e.preventDefault(); e.stopPropagation(); copy() }} style={{ display: "block" }}>
                {(selected.length > 0) && (
                  <><WebApi.Icon size={48} iconName={selected} color={color} /> <br />{selected}</>
                )}
              </a>
            </div>
          </div>
        </WebApi.View>
      </WebApi.View>
    </div>
    <div>
      <WebApi.View key={"Views" + filter.length + "C" + color.length} responsiveSize={{ col: 12 }} responsive={{ md: 12, lg: 12, sm: 12, xl: 12, xs: 12 }} >
        {Object.keys(WebApi.IconName).map((t, index) => {
          let IconName = WebApi.IconName[t as any];
          if(_.isNumber(IconName))
            return null;
          if (!IconName.toString().toLowerCase().includes(filter))
            return null;
          return <div key={"icons" + index} style={{ textAlign: "center", border: "1px solid #dadada", margin: 4 }}><a href="" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelected(IconName) }} style={{ display: "block" }}><WebApi.Icon size={48} iconName={IconName} color={color} /> <br />{IconName}</a></div>
        }).filter(t => t != null)}
      </WebApi.View>
    </div>
  </>

}

export default IconScreen
