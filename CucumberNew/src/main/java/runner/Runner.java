package runner;

import org.junit.runner.*;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\APITesting\\CucumberNew\\FNHW-14.feature", glue="stepdefinition",plugin = {"usage", "html:target/cucumber","json:target/cucumber-report.json"})
public class Runner {
 
}
