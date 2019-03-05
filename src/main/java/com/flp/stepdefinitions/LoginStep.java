package com.flp.stepdefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class LoginStep {
	

	WebDriver driver;

    @When("^I open browser$")
    public void i_open_browser() throws Throwable {
    	
		System.setProperty("webdriver.chrome.driver","./exefile/chromedriver.exe" );		
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
    	
    //	LoginPO.openBrowser();

    }
    
    @Then("^I enter the url$")
    public void i_enter_the_url() throws Throwable {
    	
    	driver.get("https://www.facebook.com");
    	
   // 	LoginPO.enterUrl();

    }
    
    @And("^I enter first name$")
    public void i_enter_first_name() throws Throwable {
    	
    	driver.findElement(By.id("u_0_j")).sendKeys("nimit");

    }
    
    @And("^I enter last name$")
    public void i_enter_last_name() throws Throwable {
    	
    	driver.findElement(By.id("u_0_l")).sendKeys("jain");
    	
   // 	LoginPO.lastName();

    }


}
