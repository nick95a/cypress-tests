// Зарегистрируйтесь на сайте staya.
// Введите существующий имейл и некорректый пароль в переменные ниже.

let email = "";
let password = "";


describe('Авторизация с неверным паролем', function() {
	it('Открываем главную страницу staya', function() {
		cy.visit('https://staya.dog/');
		cy.get('a.header-bottom__right--link').click();
        cy.get('form[method="post"] > input[name="email"]').type(email);
        cy.get('form[method="post"] > input[name="password"]').type(password);
		cy.get('form[method="post"] > button[type="submit"]').click();
		cy.end();
	})
})
