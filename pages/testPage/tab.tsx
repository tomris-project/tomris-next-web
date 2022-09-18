
import { useRef } from "react"
import { ITabMainRef, WebApi, FormRef } from "tomris-web-api"
const TabScreen = () => {

    const TabRef = useRef<ITabMainRef>(null);
    const TabRef2 = useRef<ITabMainRef>(null);
    const form1 = useRef<FormRef>(null);

    const SampleEvent = (id: string) => {
        switch (id) {
            case "ChangeTab":
                TabRef.current?.SelectTab("Tab2");
                break;
            case "HideTab":
                TabRef.current?.hideTab("Tab2");
                break;
            case "GetProps":
                console.log(TabRef2.current?.getProps())
                break;
            default:
                break;
        }
    }

    return <>
        <WebApi.Button isLabelHidden label="Btn Change Tab" id="ChangeTab" onClick={() => SampleEvent("ChangeTab")} />
        <WebApi.Button isLabelHidden label="Btn Change Hide Tab1" id="HideTab" onClick={() => SampleEvent("HideTab")} />
        <WebApi.Button isLabelHidden label="Btn Change GetProps" id="GetProps" onClick={() => SampleEvent("GetProps")} />
        <WebApi.Tab.TabMain ref={TabRef} id="SELAM" isWizard>
            <WebApi.Tab.TabPanel id="Tab1" name="Tab 1 Name"  >
                11
            </WebApi.Tab.TabPanel>
            <WebApi.Tab.TabPanel id="Tab2" name="Tab 2 Name"  >
                22
            </WebApi.Tab.TabPanel>
        </WebApi.Tab.TabMain>
        <hr />
        TEST Form
        <hr />
        <WebApi.Button isLabelHidden label="Btn Change Tab" id="ChangeTab" onClick={() => console.log(form1.current?.getBaseController("Name1").getProps())} />
        <WebApi.Form.FormView ref={form1} name="Form1" >
            <WebApi.Tab.TabMain ref={TabRef2} id="SELAM2" isWizard>
                <WebApi.Tab.TabPanel id="Tab12" name="Tab 1 Name"  >
                    <WebApi.Controller.Input type="text" id="Name1" label="Name1"
                        onValid={(e) => { return { IsValid: e.getValue() == "1", ValidText: "Name1" } }} />
                </WebApi.Tab.TabPanel>
                <WebApi.Tab.TabPanel id="Tab22" name="Tab 2 Name"  >
                    <WebApi.Controller.Input type="text" id="Name2" label="Name2"
                        onValid={(e) => { return { IsValid: e.getValue() == "1", ValidText: "Name2" } }} />
                </WebApi.Tab.TabPanel>

                <WebApi.Tab.TabPanel id="Tab23" name="Tab 3 Name"  >
                    <WebApi.Controller.Input type="text" id="Name3" label="Name3"
                        onValid={(e) => { return { IsValid: e.getValue() == "1", ValidText: "Name2" } }} />
                </WebApi.Tab.TabPanel>

                <WebApi.Tab.TabPanel id="Tab24" name="Tab 4 Name"  >
                    <WebApi.Controller.Input type="text" id="Name4" label="Name4"
                        onValid={(e) => { return { IsValid: e.getValue() == "1", ValidText: "Name4" } }} />
                </WebApi.Tab.TabPanel>
            </WebApi.Tab.TabMain>
        </WebApi.Form.FormView>

        <hr />
        TEST Acordion Form
        <hr />

        <WebApi.Accordion.Accordion id="SELAM2">
            <WebApi.Accordion.AccordionPanel name="Accordion 1 Name"  >
                Accordion 1
            </WebApi.Accordion.AccordionPanel> 
            <WebApi.Accordion.AccordionPanel name="Accordion 2 Name"  >
                Accordion 2
            </WebApi.Accordion.AccordionPanel>
        </WebApi.Accordion.Accordion>
    </>

}

export default TabScreen
