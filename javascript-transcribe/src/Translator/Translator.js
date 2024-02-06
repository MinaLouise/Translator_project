import { useState } from "react";
import './Translator.css';
import { AiOutlineClose } from 'react-icons/ai';

const Translator = () => {
    const [inputText, setInputText] = useState('');
    const [outputLang, setOutputLang] = useState('ar');
    const [outputText, setOutputText] = useState('');
    const [isTranslated, setIsTranslated] = useState(null);

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    }

    const translate = () => {
    const apiKey = '65b9c82f65msha9305bceff58afbp1aa4d1jsn2e3ba4f1e9a8'; // Replace with your API key
    const baseUrl = 'https://microsoft-translator-text.p.rapidapi.com/translate';

    const requestOptions = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
        },
        body: JSON.stringify([{ Text: inputText }])
    };

    fetch(`${baseUrl}?to=${outputLang}&api-version=3.0&profanityAction=NoAction&textType=plain`, requestOptions)
        .then(response => {
            if (!response.ok) {
                setIsTranslated(false);
                console.log("There's an error");
                return;
            }
            setIsTranslated(true);
            response.json()
                .then(data => {
                    const translatedText = data[0].translations[0].text;
                    setOutputText(translatedText);
                    console.log(translatedText);
                });
        })
        .catch(err => {
            setIsTranslated(false);
            console.error(err);
        });
}

    const clearInput = () => {
        setInputText('');
        setOutputText('');
        setIsTranslated(null);
    }

    return (
        <section className="translator">
            <div className="images"></div>
            <div className="row-wrapper">
            <div className="translator-container">
                <div className=" input-lang">
                        <div className="top-row">
                            <h2>Input Text</h2>
                        </div>
                        <form className="input-form">
                            <textarea
                                className="text-box input-text"
                                placeholder="Enter text (any language)"
                                onChange={handleInputChange}
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
                    <div className="controls">
                        <button
                            className="btn btn-translate"
                            onClick={translate}>
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
                    <div className=" output-lang">
                        <div className="top-row">
                            <h2>Translation</h2>
                        </div>
                        <form className="output-form">
                            <textarea
                                className="text-box output-text"
                                value={outputText}
                                readOnly
                            />
                        </form>
                    </div>
                    
            </div>
                    
                
            </div>
        </section>
    );
}

export default Translator;
