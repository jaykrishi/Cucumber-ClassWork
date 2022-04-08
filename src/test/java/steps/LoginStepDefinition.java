
package steps;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.BankCashNewAccountPage;
import pages.DashboardPage;
import pages.DatabasePage;
import pages.ListBankCashAccount;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepDefinition extends TestBase {

	LoginPage loginPage;
	DatabasePage databasepage;
	DashboardPage dashboardPage;
	BankCashNewAccountPage bankcashNewPage;
	ListBankCashAccount listbankcashPage;

	@Before
	public void setUp() {
		initDriver();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		dashboardPage = PageFactory.initElements(driver, DashboardPage.class);
		bankcashNewPage = PageFactory.initElements(driver, BankCashNewAccountPage.class);
		listbankcashPage = PageFactory.initElements(driver, ListBankCashAccount.class);
	}

	@Given("^User is on Techfios login page$")
	public void user_is_on_techfios_login_page() {

		driver.get("https://techfios.com/billing/?ng=login/");

	}

	@When("^User enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username) {

		loginPage.enterUserName(username);

	}

	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password) {

		loginPage.enterPassword(password);

	}

	@When("^User clicks signin button$")
	public void user_clicks_signin_button() {
		loginPage.clickSignInButton();

	}

	@When("^User enters \"([^\"]*)\" from database$")
	public void user_enters_from_database(String loginData) {
		databasepage = new DatabasePage();

		switch (loginData) {
		case "username":
			loginPage.enterUserName(databasepage.getData("username"));
			System.out.println("Username from DB: " + databasepage.getData("username"));
			break;
		case "password":
			loginPage.enterPassword(databasepage.getData("password"));
			System.out.println("Password from DB: " + databasepage.getData("password"));
			break;

		default:
			System.out.println("Unable to extract login data " + loginData + "from DB");

		}
	}

	@Then("^User should land on dashboard page$")
	public void user_should_land_on_dashboard_page() {
		Assert.assertEquals("Dashboard- iBilling", getPageTitle());
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		// takeScreenShot(driver);
		

	}

	@Then("^User should not land on dashboard page$")
	public void user_should_not_land_on_dashboard_page() {

		Assert.assertEquals("Dashboard- iBilling", getPageTitle());

	}

	@After
	public void tearDown() {
		 driver.close();
		 driver.quit();
	}

	@When("^User enters accountTitle as \"([^\"]*)\" in accounts page$")
	public void user_enters_accountTitle_as_in_accounts_page(String accountTitle) {
		bankcashNewPage.enterAccountTitle(accountTitle + generateRandom(999));

	}

	@When("^User enters description as \"([^\"]*)\" in accounts page$")
	public void user_enters_description_as_in_accounts_page(String description) {
		bankcashNewPage.enterDescription(description);
	}

	@When("^User enters initialBalance as \"([^\"]*)\" in accounts page$")
	public void user_enters_initialBalance_as_in_accounts_page(String initialBalance) {
		bankcashNewPage.enterInitialBalance(initialBalance);
	}

	@When("^User enters accountNumber as \"([^\"]*)\" in accounts page$")
	public void user_enters_accountNumber_as_in_accounts_page(String accountNumber) {
		bankcashNewPage.enterAccountNumber(accountNumber + generateRandom(999));
	}

	@When("^User enters contactPerson as \"([^\"]*)\" in accounts page$")
	public void user_enters_contactPerson_as_in_accounts_page(String contactPerson) {
		bankcashNewPage.enterContactPerson(contactPerson);
	}

	@When("^User enters Phone as \"([^\"]*)\" in accounts page$")
	public void user_enters_Phone_as_in_accounts_page(String phone) {
		bankcashNewPage.enterPhone(phone + generateRandom(999));

	}

	@When("^User enters internetBankingUrl as \"([^\"]*)\" in accounts page$")
	public void user_enters_internetBankingUrl_as_in_accounts_page(String bankingUrl) {
		bankcashNewPage.enterInternetBankingUrl(bankingUrl);
	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully() {
		
		
		listbankcashPage.getAccountHeader();
		
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		takeScreenShot(driver);

	}

	@When("^User clicks on \"([^\"]*)\"$")
	public void user_clicks_on(String button) {

		switch (button) {
		case "bankCashMenu":
			System.out.println(" selected bankcash");
			dashboardPage.clickBankCash();
			break;

		case "newAccountMenu":
			dashboardPage.clickNewAccount();
			
			break;

		case "submitButton":
			bankcashNewPage.enterSubmitButton();
			break;

		default:
			System.out.println("Invalid Button Click");

		}

	}

}