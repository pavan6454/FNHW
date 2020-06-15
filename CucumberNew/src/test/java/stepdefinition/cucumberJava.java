package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class cucumberJava { 
	   WebDriver driver = null; 
		
	   @Given("^I have open the browser$") 
	   public void openBrowser() { 
		   System.setProperty("webdriver.chrome.driver","C:\\APITesting\\cucumber\\driver\\chromedriver.exe");
	      driver = new ChromeDriver(); 
	   } 
		
	   @When("^I open Facebook website$") 
	   public void goToFacebook() { 
	      driver.get("https://www.guru99.com/postman-tutorial.html") ;
	   } 
	   
	   @And("^User enters UserName and Password$") 
	   public void check() { 
	      System.out.println("and pass");
	   } 
	   
	   @Then("^Login button should exits$") 
	   public void loginButton() { 
	       
	         System.out.println("Test 1 Pass"); 
	      
	      driver.close(); 
	   } 
	   
	   //scenario2
	   @Given("^User LogOut from the Application$") 
	   public void sc() { 
		   System.out.println("pass");
		   
	   } 
	   
	  
	   @When("^Message displayed LogOut Successfully$") 
	   public void sc2() { 
	      System.out.println("pass");
	   } 
	   
	}