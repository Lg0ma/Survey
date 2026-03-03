import { FileText, StickyNote } from 'lucide-react';
import './FormHeader.css';

function FormHeader() {
    return (
        <header className="form-header form-card-shadow">
            <h1>Feedback Survey</h1>
            <p>
                Please answer the following questions.
                You can type your answers or use the  microphone button to dictate them.
            </p>
            <p className='text-required-warning'>
                <FileText size={20} />
                <p>
                    <span className='text-required'> *</span> indicates required questions
                </p>
            </p>
        </header>
    );
}

export default FormHeader;
