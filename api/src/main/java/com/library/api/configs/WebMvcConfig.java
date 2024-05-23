package com.library.api.configs;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry corsRegistry) {
        corsRegistry.addMapping("/api/v1/books").allowedOrigins("http://localhost:5173");
        corsRegistry.addMapping("/api/v1/authors").allowedOrigins("http://localhost:5173");
        corsRegistry.addMapping("/api/v1/translators").allowedOrigins("http://localhost:5173");
    }
}
