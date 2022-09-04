import { useRef, useState } from "react"
import { IModalRef, WebApi } from "tomris-web-api"
import PageUseForm from "./useForm";
const PageModalTest = () => {

    let modal = useRef<IModalRef>(null)
    let UseModal = WebApi.Modal.useModal();

    const clickModalTest = async (str: string) => {
        switch (str) {
            case "ModalToggle":
                modal.current?.toggle();
                return;
            case "ModalisOpen":
                modal.current?.isOpen(true)
                return;

            case "useModalToggle":
                UseModal.toggle();
                return;
            case "useModalisOpen":
                UseModal.isOpen(true)
                return;
            case "MultipleConfirm":
                let sonuc = await WebApi.Modal.Confirm.ConfirmSelect({
                    ScreenCode: "STR1",
                    body: "Mesage 1",
                    FormCode: "frm1",
                    header: "Baslik 1",
                    options: [
                        { Label: "LABEL1", Value: "VALUE1", Color: "link", Position: "Left" },
                        { Label: "LABEL2", Value: "VALUE2", Color: "secondary", Position: "Right" },
                        { Label: "LABEL3", Value: "VALUE3", Color: "success", Position: "Right" },
                    ]

                })
                alert(sonuc);
                return;
            case "BooleanConfirm":
                alert(await WebApi.Modal.Confirm.ConfirmBoolean("Baslik", "Mesaj", "Yes", "No", "ScreenCode", "FormCode"))
                return;
        }
    }
    return (
        <>
            <hr />
            Event
            <WebApi.Button isLabelHidden onClick={() => { clickModalTest("MultipleConfirm") }} label="Multiple Select Option" id="MultipleConfirm" />

            <WebApi.Button isLabelHidden onClick={() => { clickModalTest("BooleanConfirm") }} label="BooleanConfirm Yes/No Ok/Cancel Select Option" id="BooleanConfirm" />
            <hr />
            <WebApi.Button isLabelHidden onClick={() => { clickModalTest("ModalToggle") }} label="Modal Toggle" id="ModalToggle" />
            <WebApi.Button isLabelHidden onClick={() => { clickModalTest("ModalisOpen") }} label="Modal Open" id="ModalisOpen" />
            <WebApi.Modal.Modal
                body={"Selam"}
                header="selam1"
                fullscreen
                size="xl"
                ref={modal}
                onChange={() => { alert("onChange"); return true }}
                onOpen={() => { alert("onOpen"); return true }}
                onClose={() => { alert("onClose"); return true }}
                onLoad={() => { alert("LoadData"); }}
            />
            <hr />
            <WebApi.Button isLabelHidden onClick={() => { clickModalTest("useModalToggle") }} label="Use Modal Toggle" id="ModalToggle"  />
            <WebApi.Button isLabelHidden onClick={() => { clickModalTest("useModalisOpen") }} label="Use Modal Open" id="ModalisOpen" />
            <UseModal.View
                body={(that) => { return PageUseForm() }}
                header="selam1" autoClear={false}
            />
        </>)
}

export default PageModalTest
