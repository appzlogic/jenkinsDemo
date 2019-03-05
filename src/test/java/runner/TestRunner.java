package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty", "html:target/cucumber","json:target/Cucumber.json"},
	features="D:\\SampleFB\\src\\test\\resources\\feature\\login.feature", glue= {"com.flp.stepdefinitions"},tags = {"@smoke"})


public class TestRunner {

}
