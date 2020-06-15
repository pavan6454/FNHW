package stepdefinition;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefClass {

	@Given("^I am in login page$")
	public void i_am_in_login_page() {
	  System.out.println("Login page");
	}

	@When("^login with valid credentials$")
	public void login_with_valid_credentials() {
		System.out.println("Logged with valid credentials");
	}

	@Then("^Home page should display$")
	public void home_page_should_display(){
		System.out.println("Home Page displayed");
	}

	@Given("^I am in Home page$")
	public void i_am_in_Home_page(){
		System.out.println("Landed in Home Page ");
	}

	@When("^check all the links$")
	public void check_all_the_links() {
		System.out.println("Checking all the links");
	}

	@Then("^Validate all the links should working fine$")
	public void validate_all_the_links_should_working_fine() {
		System.out.println("Validated all the links");
	}


}