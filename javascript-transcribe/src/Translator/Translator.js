import { useState } from "react";
import './Translator.css';
import { AiOutlineClose } from 'react-icons/ai';

const Translator = () => {

    const [inputText, setInputText] = useState('');
    const [outputLang, setOutputLang] = useState('ar');
    const [outputText, setOutputText] = useState('');
    const [isTranslated, setIsTranslated] = useState();

    const translate = () => {
        console.log(outputLang);
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '65b9c82f65msha9305bceff58afbp1aa4d1jsn2e3ba4f1e9a8',
                'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
            },
            body: `[{"Text":"${inputText}"}]`
        };

        fetch(`${process.env.REACT_APP_Base_URL}${outputLang}${process.env.REACT_APP_Query_Params}`, options)
            .then(response => {
                if (response.status !== 200) {
                    setIsTranslated(false);
                    console.log("there's an error");
                    return;
                }
                setIsTranslated(true);
                response.json()
                    .then(response => {
                        const translatedText = response[0].translations[0].text;
                        setOutputText(translatedText);
                        console.log(translatedText);
                    })
            })
            .catch(err => {
                setIsTranslated(false);
                console.error(err)
            });
    }

    const clearInput = () => {
        setInputText('');
        setOutputText('');
        setIsTranslated();
    }

    return (
        <section className="translator">
            <div className="row-wrapper">
                <div className="translator-container input-lang">
                    <div className="top-row">

                    </div>
                    <form className="input-form">
                        <textarea
                            className="text-box"
                            placeholder="Enter text (any language)"
                            onChange={e => setInputText(e.target.value)}
                            value={inputText}
                        >
                        </textarea>
                        {
                            inputText !== "" &&
                            <AiOutlineClose
                                className="icon-btn close-btn"
                                onClick={clearInput}
                            />
                        }
                    </form>
                </div>
                <div className="translator-container output-lang">
                    <div className="top-row">
                        <button
                            className="btn btn-primary btn-translate"
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
                    <p className="text-box output-box">
                        {
                            isTranslated === false ?
                                <span className="output-placeholder translation-error">Translation failed</span>
                                :
                                outputText === "" ?
                                    <span className="output-placeholder">Select a language</span>
                                    :
                                    outputText
                        }
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Translator;