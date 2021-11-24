import ModuleDelegator from "../common/module-delegator";

export default function PageModule({body}) {
    return (
        <div className="page">
            <ModuleDelegator modules={body} />
        </div>
    );
}