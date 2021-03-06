package pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ListBankCashAccount {
	
	WebDriver driver;
	
	public ListBankCashAccount(WebDriver driver) {
		this.driver = driver;
	}
	
	@FindBy(how = How.XPATH, using = "//h5[text()='Manage Accounts']")
	WebElement AccountHeader;
	
	public void getAccountHeader() {
		String header = AccountHeader.getText();
		Assert.assertEquals("Manage Accounts",header);
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {

			e.printStackTrace();
		}
		

	}

}
