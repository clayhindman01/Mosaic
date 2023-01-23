package com.mosaic.mosaicService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(exclude={DataSourceAutoConfiguration.class})
@EnableJpaAuditing
@EnableAutoConfiguration
@EnableJpaRepositories("com.mosaic.mosaicService.repository")
public class MosaicServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(MosaicServiceApplication.class, args);
	}

}
