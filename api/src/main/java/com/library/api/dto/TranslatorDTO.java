package com.library.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TranslatorDTO {
    private Long id;
    private String firstName;
    private String lastName;
    private String languageRelease;
}
