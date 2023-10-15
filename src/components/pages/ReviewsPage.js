const ReviewsPage = () => {
    return (
        <>
            <div className="bg-slate-100 grow py-10">
                <div className="w-2/3 mx-auto">
                    <h1 className="text-center text-xl sm:text-3xl text-orange-600 mb-5 font-bold mt-10 min-[530px]:mt-0">Отзывы</h1>
                    <div className=" min-[350px]:text-xl flex justify-center">
                        <form action="/" method="/"
                            className="grid sm:flex gap-10">
                            <div className="grid gap-5">
                                <p className="grid w-64">
                                    <label for="name" >Имя: </label>
                                    <input id="name" name="user-name" type="text" />
                                </p>
                                <p className="grid w-64">
                                    <label for="lastname" >Фамилия: </label>
                                    <input id="lastname" name="user-lastname" type="text" />
                                </p>
                                <p className="grid w-64">
                                    <label for="email" >Электронная почта: </label>
                                    <input id="email" name="user-email" type="email" />
                                </p>
                                <p className="grid w-64">
                                    <label for="user-profile" >Ссылка на вашу соц.сеть: </label>
                                    <input id="user-profile" name="user-profile" type="url" />
                                </p>
                                <p className="grid w-64">
                                    <label for="user-phone" >Телефон: </label>
                                    <input id="user-phone" name="user-phone" type="tel" />
                                </p>
                                <p className="grid w-64">
                                    <label for="user-age" >Возраст: </label>
                                    <input id="user-age" name="user-age" type="number" />
                                </p>
                                <p className="grid w-64">
                                    <label for="fulldate" >Дата запроса: </label>
                                    <input id="fulldate" name="fulldate" type="date" />
                                </p>
                            </div>

                            <div className="grid gap-5">

                                <fieldset className="flex gap-5">
                                    <legend>Ваш пол</legend>
                                    <p>
                                        <label for="male" >Муж.</label>
                                        <input id="male" name="gender" type="radio" value="male" />
                                    </p>
                                    <p>
                                        <label for="female" >Жен.</label>
                                        <input id="female" name="gender" type="radio" value="female" />
                                    </p>
                                </fieldset>
                                <img src="https://cdn-icons-png.flaticon.com/128/8881/8881782.png?uid=R114052350&ga=GA1.1.1806148522.1691225591&track=ais" alt="/" />
                                <p className="grid w-2/3">
                                    <label for="comment">Ваш отзыв: </label>
                                    <textarea id="comment" name="user-comment" spellcheck="true"></textarea>
                                </p>
                                <p className="grid w-64">
                                    <label for="city">Ваш город: </label>
                                    <select id="city" name="user-city" required>
                                        <option disabled selected value="">Не выбрано</option>
                                        <option value="moscow">Москва</option>
                                        <option value="petersburg">Санкт-Петербург</option>
                                        <option value="samara">Самара</option>
                                        <option value="ufa">Уфа</option>
                                    </select>
                                </p>
                                <fieldset className="flex gap-5 ">
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
                                    <button className="sm:text-2xl hover:text-orange-600 active:text-orange-300" type="submit">Отправить</button>
                                </p>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <hr className="w-full border-gray-300" />
        </>
    );
};

export default ReviewsPage;