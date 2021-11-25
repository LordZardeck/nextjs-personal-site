import ModuleDelegator from "../common/module-delegator";
import CenteredSection from "../common/centered-section";

export default function CenteredSectionContentModule({content, ...props}) {
    return <CenteredSection {...props}><ModuleDelegator modules={content}/></CenteredSection>;
}
