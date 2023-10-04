import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai"
import { useSelector } from "react-redux";




const SupportPage = () => {

    const support = useSelector((state) => state.support)



    const [idActive, setIdActive] = useState("");
    const [formOff, setFormOff] = useState(true);

    const handleItemClick = (id) => {
        setIdActive(idActive === id ? "" : id);
    }

    return (
        <>
            <div className="w-2/3 mx-auto grow mb-10">
                <h1 className="text-center text-orange-600 text-3xl font-bold my-7">Поддержка</h1>
                <div className="grid bg-slate-300 rounded-lg p-5 text-xl w-2/3 mx-auto mb-5">
                    <ul>
                        {support.map((item) =>
                            <li className="mb-6">
                                <div className="grid bg-white rounded-md overflow-hidden">
                                    <div onClick={() => handleItemClick(item.id)}
                                        className="flex justify-between p-3 cursor-pointer">
                                        {item.question}
                                        <AiOutlineDown className={item.id === idActive ? "rotate-180 duration-300" : "rotate-0 duration-300"} />
                                    </div>
                                    <div className={item.id === idActive ? "p-3 bg-slate-100" : "hidden"}>{item.answer}</div>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>

                <div className="w-2/3 mx-auto relative">
                    <h2 className="text-2xl">Не можете найти нужный ответ?</h2>
                    <p className="text-xl mb-1">Свяжитесь с нами, и мы поможем вам как можно скорее.</p>
                    <button onClick={() => setFormOff(false)} className="inline-block rounded border-2 border-neutral-800 px-6 text-md font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 dark:border-neutral-900 dark:text-neutral-900 dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-neutral-900 dark:focus:border-neutral-900 dark:focus:text-neutral-900 dark:active:border-neutral-900 dark:active:text-neutral-900">
                        Написать нам
                    </button>
                    <div className={formOff ? "hidden" : "absolute w-[700px] h-[700px] shadow-2xl z-30 bottom-0 left-0 bg-slate-50 rounded-lg"}>
                        <div className="p-5 text-xl">
                            <form action="/" method="/"
                                className="gap-3 flex flex-col">
                                <p>
                                    <label for="name" >Имя: </label>
                                    <input id="name" name="user-name" type="text" />
                                </p>
                                <p>
                                    <label for="lastname" >Фамилия: </label>
                                    <input id="lastname" name="user-lastname" type="text" />
                                </p>
                                <p>
                                    <label for="user-age" >Возраст: </label>
                                    <input id="user-age" name="user-age" type="number" />
                                </p>
                                <p>
                                    <label for="city">Ваш город: </label>
                                    <select id="city" name="user-city" required>
                                        <option disabled selected value="">Не выбрано</option>
                                        <option value="moscow">Москва</option>
                                        <option value="petersburg">Санкт-Петербург</option>
                                        <option value="samara">Самара</option>
                                        <option value="ufa">Уфа</option>
                                    </select>
                                </p>
                                <p>
                                    <label for="email" >Электронная почта: </label>
                                    <input id="email" name="user-email" type="email" />
                                </p>
                                <p>
                                    <label for="user-profile" >Ссылка на вашу соц.сеть: </label>
                                    <input id="user-profile" name="user-profile" type="url" />
                                </p>
                                <p>
                                    <label for="user-phone" >Телефон: </label>
                                    <input id="user-phone" name="user-phone" type="tel" />
                                </p>
                                <p>
                                    <label for="fulldate" >Дата запроса: </label>
                                    <input id="fulldate" name="fulldate" type="date" />
                                </p>
                                <label for="comment">Ваш вопрос: </label>
                                <textarea id="comment" name="user-comment" spellcheck="true"></textarea>
                                <fieldset className="flex gap-5">
                                    <p>
                                        <label for="agreement" >Я согласен с условиями </label>
                                        <input id="agreement" name="agreement" type="checkbox" value="agreement" />
                                    </p>
                                    <p>
                                        <label for="upagreement" >Я точно согласен с условиями </label>
                                        <input id="upagreement" name="upagreement" type="checkbox" value="upagreement" />
                                    </p>
                                </fieldset>

                                <p>
                                    <button type="submit">Отправить</button>
                                </p>


                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div
                onClick={() => setFormOff(true)}
                className={formOff ? "hidden" : "z-20 fixed top-0 left-0 right-0 bottom-0"}>
            </div>

        </>
    );
};

export default SupportPage;