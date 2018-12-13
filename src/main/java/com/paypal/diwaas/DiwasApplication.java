package com.paypal.diwaas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com.paypal.diwaas"})
public class DiwasApplication {

	public static void main(String[] args) {
		SpringApplication.run(DiwasApplication.class, args);
	}
}
