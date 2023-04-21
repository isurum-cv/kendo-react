import { Panel } from "primereact/panel";
import { PanelKUProps } from "./types";

const PanelKU = (props: PanelKUProps) => {

    return <>
        <Panel header={props.title}>
            {props.children}
        </Panel>
    </>
}

export default PanelKU;