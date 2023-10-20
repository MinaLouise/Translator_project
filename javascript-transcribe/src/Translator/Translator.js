import { useState } from "react";
import './Translator.css';
import { AiOutlineClose } from 'react-icons/ai';

const Translator = () => {

    const [inputText, setInputText] = useState('');
    const [outputLang, setOutputLang] = useState('ar');
    const [outputText, setOutputText] = useState('');
    const [isTranslated, setIsTranslated] = useState(null);

    const translate = () => {
        const apiKey = '65b9c82f65msha9305bceff58afbp1aa4d1jsn2e3ba4f1e9a8'; // Replace with your API key
        const baseUrl = 'https://microsoft-translator-text.p.rapidapi.com/translate';
    }

    const clearInput = () => {
        setInputText('');
        setOutputText('');
        setIsTranslated(null);
    }

    return (
        <section className="translator">
            <div className="row-wrapper">
                <div className="translator-container input-lang">
                    <div className="top-row">
                        <h2>Input Text</h2>
                    </div>
                    <form className="input-form">
                        <textarea
                            className="text-box"
                            placeholder="Enter text (any language)"
                            onChange={e => setInputText(e.target.value)}
                            value={inputText}
                        />
                        {inputText !== "" &&
                            <AiOutlineClose
                                className="icon-btn close-btn"
                                onClick={clearInput}
                            />
                        }
                    </form>
                </div>
                <div className="translator-container output-lang">
                    <div className="top-row">
                        <h2>Translation</h2>
                    </div>
                    <div className="output-form">
                        <textarea
                            className="text-box output-text"
                            readOnly
                            value={outputText}
                        />
                    </div>
                    <div className="output-controls">
                        <button
                            className="btn btn-translate"
                            onClick={translate}
                        >
                            Translate
                        </button>
                        <select
                            name="languages"
                            id="languages"
                            className="form-select form-select-sm"
                            onChange={e => setOutputLang(e.target.value)}
                        >
                            <option value="ar">Arabic</option>
                            <option value="en">English</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                            <option value="es">Spanish</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Translator;
