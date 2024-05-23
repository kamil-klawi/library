package com.library.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookDTO {
    private Long id;
    private String title;
    private String publishingHouse;
    private String languageOriginal;
    private Integer numberOfPages;
    private LocalDate publicationDate;
    private String type;
    private String cover;
    private Double height;
    private Double width;
    private Double depth;
}
