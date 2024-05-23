package com.library.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TranslatorExtendedDTO extends TranslatorDTO {
    private List<BookDTO> books;
}
