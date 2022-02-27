const ajaxDataPage = require("../pageobjects/ajaxDataPage")
const mainPage = require ("../pageobjects/mainPage")


describe('Ajax Data Page', () => {

    const ajaxDataH3 = 'AJAX Data';
    const requestMessageText = 'Data loaded with AJAX get request.';

    beforeEach(() => {
        browser.maximizeWindow();
        browser.deleteAllCookies();
        browser.refresh();
    })

    it('Clicking on "Ajax Data" link redirects me to appropriate page', async () => {
        await ajaxDataPage.open();
        
        await expect(ajaxDataPage.ajaxDataLink).toBeExisting();
        await ajaxDataPage.ajaxDataLink.click();
        await expect(mainPage.h3).toHaveText(ajaxDataH3);
        await expect(browser).toHaveUrl('http://uitestingplayground.com/ajax');
    });

    it('Ajax Data Scenario', async () => {
        ajaxDataPage.btnTriggeringAJAXRequest.click();
        await expect(ajaxDataPage.spinner).toBeDisplayed();
        await (ajaxDataPage.requestMessage).waitForDisplayed( { timeout: 150000 } );
        await  expect(ajaxDataPage.requestMessage).toHaveText(requestMessageText);
    });
});
