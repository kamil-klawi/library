package com.library.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookExtendedDTO extends BookDTO {
    private AuthorDTO author;
    private TranslatorDTO translator;
}
