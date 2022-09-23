<b>Информация по некоторым тестам и инструкция как с ними работать</b>.

В папке 4-PracticeTests два автотеста для сайта https://staya.dog/.

Тесты направлены на проверку авторизации:

<b>1)Staya-auth.js</b>

В файле staya-auth.js лежит тест для проверки работы авторизации с корректным логином и паролем. 

Есть две переменные, которые предназначены для записи в них имейла и пароля от аккаунта на сайте.
Процесс:

	1)Заходим на главную страницу сайта
	2)Находим и кликаем на кнопку Вход
	3)Находим и заполняем поля имейла и пароля
	4)Находим и нажимаем на кнопку для отправки данных для входа
	5)Проверяем, что находимся на странице Мои заказы и останавливаем тест.
	
Ожидаемый результат: Открывается страница с моими заказами.
	
<b>2)Staya-auth-wrong-password</b></br>

В файле staya-auth-wrong-password.js лежит тест для проверки работы авторизации с корректным логином и некорректным паролем.

Есть две переменные, которые предназначены для записи в них имейла и пароля от аккаунта на сайте.
Процесс:

	1)Заходим на главную страницу сайта
	2)Находим и кликаем на кнопку Вход
	3)Находим и заполняем поля имейла и пароля(некорректный)
	4)Находим и нажимаем на кнопку для отправки данных для входа
	5)Проверяем, что появляется сообщение об ошибке и авторизация не проходит

Ожидаемый результат: Авторизация не удалась, появилось сообщение "Невозможно войти с предоставленными учетными данными.".
