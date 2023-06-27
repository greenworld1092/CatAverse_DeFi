
import Accordion from '../../components/accordion/Accordion'
import { AccordionData } from '../../utils/accordion';
import './faq.css';

const FAQ = () => {
    return (
        <section id="faq" className="faq-section">
            <div className='container'>
                <div className='title_h2 text-center'>
                    <h2>FAQ</h2>
                </div>
                <div className='accordion-container'>
                    {
                        AccordionData.map((item, index) => (
                            <div key={index}> 
                              <Accordion
                                id={item.id}
                                heading={item.heading}
                                content={item.content}
                                headingId={Math.random()}
                              /> 
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default FAQ;