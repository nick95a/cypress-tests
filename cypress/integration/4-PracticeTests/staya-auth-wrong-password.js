describe('Авторизация с неверным паролем', function() {
	it('Открываем главную страницу staya', function() {
		cy.visit('https://staya.dog/');
		cy.get('a.header-bottom__right--link').click();
        cy.get('form[method="post"] > input[name="email"]').type('nick95a@yandex.ru');
        cy.get('form[method="post"] > input[name="password"]').type('12356780');
		cy.get('form[method="post"] > button[type="submit"]').click();
		cy.end();
	})
})