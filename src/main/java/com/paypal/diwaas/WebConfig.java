package com.paypal.diwaas;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.paypal.diwaas.Service.SequenceCounterService;
import com.paypal.diwaas.ServiceImpl.SequenceCounterServiceImpl;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**");
	}

	@Bean
	public SequenceCounterService sequenceCounterService(MongoTemplate mongoTemplate) {
		return new SequenceCounterServiceImpl(mongoTemplate);
	}
}