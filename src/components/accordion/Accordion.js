import './accordion.css';

const Accordion = ({ headingId, id, content, heading, key }) => {
    return (
        <div className="accordion-item" key={key}>
            <h4 className="accordion-header" id={headingId}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="false" aria-controls="flush-collapseOne">
                    {heading}
                </button>
            </h4>
            <div id={id} className="accordion-collapse collapse" aria-labelledby={headingId} data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">{content}</div>
            </div>
        </div>
    )
}
export default Accordion